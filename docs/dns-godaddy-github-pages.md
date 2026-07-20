# GoDaddy DNS for GitHub Pages

Set the custom domain in GitHub first:

1. Open `dailysupportguide/dailysupportguide` on GitHub.
2. Go to Settings -> Pages.
3. Source: Deploy from a branch.
4. Branch: `main`.
5. Folder: `/root`.
6. Custom domain: `dailysupportguide.com`.
7. Save, then wait for GitHub to verify DNS.

At GoDaddy, remove parked/default records that conflict with the apex domain, then add:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | dailysupportguide.github.io |

Optional IPv6 records:

| Type | Name | Value |
| --- | --- | --- |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |

After DNS verifies, enable Enforce HTTPS in GitHub Pages.

DNS propagation can take up to 24 hours.
