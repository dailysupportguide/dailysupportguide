(function () {
  const content = window.DSG_CONTENT || { articles: [] };

  function easternDate(date = new Date()) {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(date);
    const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
    return values.year + "-" + values.month + "-" + values.day;
  }

  function mergeScheduledArticles(scheduled) {
    const today = easternDate();
    const bySlug = new Map((content.articles || []).map((article) => [article.slug, article]));

    scheduled
      .filter((article) =>
        article.body &&
        article.slug &&
        (article.status === "published" || (article.status === "approved" && article.date <= today))
      )
      .forEach((article) => {
        bySlug.set(article.slug, {
          slug: article.slug,
          date: article.date,
          category: article.category,
          title: article.title,
          summary: article.summary,
          seo: article.seo,
          body: article.body
        });
      });

    content.articles = Array.from(bySlug.values()).sort((left, right) => {
      const byDate = String(right.date || "").localeCompare(String(left.date || ""));
      if (byDate) return byDate;
      return String(left.slug || "").localeCompare(String(right.slug || ""));
    });
    window.DSG_CONTENT = content;
  }

  function loadApp() {
    const script = document.createElement("script");
    script.src = "assets/app.js?v=quiz-1784646000";
    document.body.appendChild(script);
  }

  fetch("content/scheduled/articles.json", { cache: "no-store" })
    .then((response) => (response.ok ? response.json() : []))
    .then(mergeScheduledArticles)
    .catch((error) => console.warn("Scheduled articles could not be loaded.", error))
    .finally(loadApp);
})();
