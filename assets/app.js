(function () {
  const content = window.DSG_CONTENT || { articles: [] };
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  function create(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  }

  function renderArticleList() {
    const list = document.getElementById("articleList");
    if (!list) return;
    list.innerHTML = "";

    content.articles.forEach((article) => {
      const card = create("article", "article-card");
      const top = create("div");
      top.appendChild(create("p", "meta", `${article.category} | ${article.date}`));
      top.appendChild(create("h3", "", article.title));
      top.appendChild(create("p", "", article.summary));

      const link = create("a", "", "Read article");
      link.href = `article.html?slug=${encodeURIComponent(article.slug)}`;
      card.append(top, link);
      list.appendChild(card);
    });
  }

  const questions = [
    {
      key: "focus",
      title: "What do you want to organize first?",
      options: [
        ["labels", "Reading labels and package details"],
        ["routine", "Making daily routines easier"],
        ["compare", "Comparing similar options calmly"]
      ]
    },
    {
      key: "pace",
      title: "What usually makes the decision feel harder?",
      options: [
        ["too-much", "Too many claims at once"],
        ["unclear", "Unclear serving or direction details"],
        ["busy", "Not enough time to compare"]
      ]
    },
    {
      key: "style",
      title: "What kind of guide is most useful to you?",
      options: [
        ["checklist", "A short checklist"],
        ["walkthrough", "A plain walkthrough"],
        ["notes", "A note-taking framework"]
      ]
    },
    {
      key: "time",
      title: "When would you use this most?",
      options: [
        ["morning", "Before the day starts"],
        ["shopping", "While comparing options"],
        ["evening", "During a weekly reset"]
      ]
    }
  ];

  const resultCopy = {
    focus: {
      labels: {
        title: "Label-reading path",
        copy: "Start with serving size, servings per container, directions, and plain label facts before looking at any front-of-package claim.",
        links: ["serving-size-vs-servings-per-container", "how-to-read-a-serving-size-without-overthinking-it"]
      },
      routine: {
        title: "Routine-support path",
        copy: "Keep the plan small enough to repeat: one cue, one short action, and one low-pressure check-in.",
        links: []
      },
      compare: {
        title: "Comparison path",
        copy: "Put similar details side by side and compare only neutral attributes such as format, amount, count, serving size, and missing information.",
        links: ["serving-size-vs-servings-per-container"]
      }
    },
    pace: {
      "too-much": ["Lower the noise", "Ignore broad claims at first. Read the reference facts, then decide what still needs verification."],
      unclear: ["Clarify the unit", "Write down the exact serving, count, direction, or label term that makes the comparison unclear."],
      busy: ["Use a short pass", "Pick three fields to compare now, then save anything uncertain for a later review instead of deciding under pressure."]
    },
    style: {
      checklist: ["Use a checklist", "Make the result practical: reference amount, comparable details, missing information, and questions for a qualified professional."],
      walkthrough: ["Use a walkthrough", "Move from the top of the label downward so each number has context before you compare it."],
      notes: ["Use neutral notes", "Keep notes factual: what the label says, what it does not say, and what you are not going to assume."]
    },
    time: {
      morning: ["Morning use", "Choose one small comparison rule before the day gets crowded."],
      shopping: ["Shopping use", "Pause before choosing. Compare like with like, then leave anything unclear out of the decision."],
      evening: ["Weekly reset", "Use the reset to clean up notes, not to pressure yourself into a perfect decision."]
    }
  };

  function renderQuiz() {
    const app = document.getElementById("quizApp");
    if (!app) return;
    const answers = {};
    let index = 0;

    function screen() {
      const question = questions[index];
      app.innerHTML = "";
      const wrap = create("div", "question");
      wrap.appendChild(create("p", "meta", `Question ${index + 1} of ${questions.length}`));
      wrap.appendChild(create("h3", "", question.title));

      const grid = create("div", "option-grid");
      question.options.forEach(([value, label]) => {
        const button = create("button", "option-button", label);
        button.type = "button";
        button.addEventListener("click", () => {
          answers[question.key] = value;
          if (index < questions.length - 1) {
            index += 1;
            screen();
          } else {
            result();
          }
        });
        grid.appendChild(button);
      });
      wrap.appendChild(grid);
      app.appendChild(wrap);
    }

    function result() {
      app.innerHTML = "";
      const focus = resultCopy.focus[answers.focus] || resultCopy.focus.labels;
      const pace = resultCopy.pace[answers.pace] || resultCopy.pace["too-much"];
      const style = resultCopy.style[answers.style] || resultCopy.style.checklist;
      const time = resultCopy.time[answers.time] || resultCopy.time.shopping;
      const headline = create("h3", "", focus.title);
      const intro = create("p", "", "Use this as a neutral reading plan. It is not a product recommendation, health assessment, diagnosis, or buying instruction.");
      const grid = create("div", "result-grid");
      [
        ["Your first step", focus.copy],
        pace,
        style,
        time
      ].forEach(([title, copy]) => {
        const card = create("article", "result-card");
        card.append(create("h3", "", title), create("p", "", copy));
        grid.appendChild(card);
      });
      const guideList = create("div", "result-card guide-suggestions");
      guideList.appendChild(create("h3", "", "Suggested neutral guides"));
      const linkList = create("ul");
      focus.links
        .map((slug) => content.articles.find((article) => article.slug === slug))
        .filter(Boolean)
        .forEach((article) => {
          const item = document.createElement("li");
          const link = create("a", "", article.title);
          link.href = `article.html?slug=${encodeURIComponent(article.slug)}`;
          item.appendChild(link);
          linkList.appendChild(item);
        });
      if (linkList.children.length) {
        guideList.appendChild(linkList);
      } else {
        guideList.appendChild(create("p", "", "No matching routine guide is published yet, so keep this plan as a short note and check the articles section as new guides are added."));
      }
      guideList.appendChild(create("p", "", "This page does not store your answers. For personal medical, allergy, pregnancy, medication, or nutrition questions, ask a qualified professional."));
      const actions = create("div", "tool-actions");
      const restart = create("button", "secondary", "Restart");
      restart.type = "button";
      restart.addEventListener("click", () => {
        index = 0;
        screen();
      });
      actions.appendChild(restart);
      app.append(headline, intro, grid, guideList, actions);
    }

    screen();
  }

  function renderArticleView() {
    const view = document.getElementById("articleView");
    if (!view) return;
    const slug = new URLSearchParams(window.location.search).get("slug");
    const article = content.articles.find((item) => item.slug === slug) || content.articles[0];
    document.title = `${article.title} | Daily Support Guide`;
    const description = article.seo?.metaDescription || article.summary || "A neutral Daily Support Guide article.";
    const descriptionTag = document.querySelector('meta[name="description"]');
    const canonicalLink = document.getElementById("canonicalLink");
    if (descriptionTag) descriptionTag.setAttribute("content", description);
    if (canonicalLink) canonicalLink.setAttribute("href", `https://dailysupportguide.com/article.html?slug=${encodeURIComponent(article.slug)}`);

    view.innerHTML = "";
    view.appendChild(create("p", "meta", `${article.category} | ${article.date}`));
    view.appendChild(create("h1", "", article.title));
    article.body.forEach((block) => {
      view.appendChild(create(block.type === "h2" ? "h2" : "p", "", block.text));
    });
  }

  renderArticleList();
  renderQuiz();
  renderArticleView();
})();
(function () {
  const content = window.DSG_CONTENT || { articles: [] };
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  function create(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  }

  function renderArticleList() {
    const list = document.getElementById("articleList");
    if (!list) return;
    list.innerHTML = "";

    content.articles.forEach((article) => {
      const card = create("article", "article-card");
      const top = create("div");
      top.appendChild(create("p", "meta", `${article.category} | ${article.date}`));
      top.appendChild(create("h3", "", article.title));
      top.appendChild(create("p", "", article.summary));

      const link = create("a", "", "Read article");
      link.href = `article.html?slug=${encodeURIComponent(article.slug)}`;
      card.append(top, link);
      list.appendChild(card);
    });
  }

  const questions = [
    {
      key: "focus",
      title: "What do you want to organize first?",
      options: [
        ["labels", "Reading labels and package details"],
        ["routine", "Making daily routines easier"],
        ["compare", "Comparing similar options calmly"]
      ]
    },
    {
      key: "pace",
      title: "What usually makes the decision feel harder?",
      options: [
        ["too-much", "Too many claims at once"],
        ["unclear", "Unclear serving or direction details"],
        ["busy", "Not enough time to compare"]
      ]
    },
    {
      key: "style",
      title: "What kind of guide is most useful to you?",
      options: [
        ["checklist", "A short checklist"],
        ["walkthrough", "A plain walkthrough"],
        ["notes", "A note-taking framework"]
      ]
    },
    {
      key: "time",
      title: "When would you use this most?",
      options: [
        ["morning", "Before the day starts"],
        ["shopping", "While comparing options"],
        ["evening", "During a weekly reset"]
      ]
    }
  ];

  function renderQuiz() {
    const app = document.getElementById("quizApp");
    if (!app) return;
    const answers = {};
    let index = 0;

    function screen() {
      const question = questions[index];
      app.innerHTML = "";
      const wrap = create("div", "question");
      wrap.appendChild(create("p", "meta", `Question ${index + 1} of ${questions.length}`));
      wrap.appendChild(create("h3", "", question.title));

      const grid = create("div", "option-grid");
      question.options.forEach(([value, label]) => {
        const button = create("button", "option-button", label);
        button.type = "button";
        button.addEventListener("click", () => {
          answers[question.key] = value;
          if (index < questions.length - 1) {
            index += 1;
            screen();
          } else {
            result();
          }
        });
        grid.appendChild(button);
      });
      wrap.appendChild(grid);
      app.appendChild(wrap);
    }

    function result() {
      app.innerHTML = "";
      const headline = create("h3", "", "Your neutral reading plan");
      const intro = create("p", "", "Use these prompts to compare information. This is not a product recommendation or a health assessment.");
      const grid = create("div", "result-grid");
      [
        ["Read the reference amount", "Start with serving size, servings per container, and directions before judging any number."],
        ["Compare like with like", "Put similar details next to each other: format, count, serving amount, and any missing information."],
        ["Keep notes plain", "Write what the label says, what you still need to verify, and whether a qualified professional should answer the question."]
      ].forEach(([title, copy]) => {
        const card = create("article", "result-card");
        card.append(create("h3", "", title), create("p", "", copy));
        grid.appendChild(card);
      });
      const actions = create("div", "tool-actions");
      const restart = create("button", "secondary", "Restart");
      restart.type = "button";
      restart.addEventListener("click", () => {
        index = 0;
        screen();
      });
      actions.appendChild(restart);
      app.append(headline, intro, grid, actions);
    }

    screen();
  }

  function renderArticleView() {
    const view = document.getElementById("articleView");
    if (!view) return;
    const slug = new URLSearchParams(window.location.search).get("slug");
    const article = content.articles.find((item) => item.slug === slug) || content.articles[0];
    document.title = `${article.title} | Daily Support Guide`;
    const description = article.seo?.metaDescription || article.summary || "A neutral Daily Support Guide article.";
    const descriptionTag = document.querySelector('meta[name="description"]');
    const canonicalLink = document.getElementById("canonicalLink");
    if (descriptionTag) descriptionTag.setAttribute("content", description);
    if (canonicalLink) canonicalLink.setAttribute("href", `https://dailysupportguide.com/article.html?slug=${encodeURIComponent(article.slug)}`);

    view.innerHTML = "";
    view.appendChild(create("p", "meta", `${article.category} | ${article.date}`));
    view.appendChild(create("h1", "", article.title));
    article.body.forEach((block) => {
      view.appendChild(create(block.type === "h2" ? "h2" : "p", "", block.text));
    });
  }

  renderArticleList();
  renderQuiz();
  renderArticleView();
})();
