# Rusty's Toolbox

A static landing page for [Canvaz](https://github.com/rustypig91/canvaz), a CAN analyzer, and [Pigtail](https://github.com/rustypig91/pigtail-serial-console), a serial terminal. It introduces the tools and the personal motivation behind developing them as open source.

## Preview locally

No build step or dependency installation is required:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. You can also open `index.html` directly.

## Publish with GitHub Pages

1. In the repository's **Settings → Pages**, select **GitHub Actions** as the source.
2. Push the site to `main`, or manually run **Deploy GitHub Pages** in the Actions tab.
3. The expected URL is https://rustypig91.github.io/rustys-toolbox/.

The workflow publishes only `index.html`, `styles.css`, `screenshots.js`, `sitemap.xml`, and `assets/`. Setup follows the [GitHub Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Search indexing

The page serves its full content as static HTML, with a descriptive title, meta description, canonical URL, and matching Open Graph metadata. `sitemap.xml` lists the canonical page URL. If the site's public URL changes, update the canonical link, `og:url`, and sitemap together.

After deployment:

1. Add `https://rustypig91.github.io/rustys-toolbox/` as a URL-prefix property in [Google Search Console](https://search.google.com/search-console). Verify ownership using Google's provided HTML file or meta tag. If using a verification file, include it in the workflow's published files and path triggers.
2. Submit `https://rustypig91.github.io/rustys-toolbox/sitemap.xml` in Search Console's **Sitemaps** report.
3. Inspect the canonical page URL with **URL Inspection**, check that indexing is allowed, and request indexing. Monitor the **Page indexing** and **Performance** reports afterward.

A sitemap helps discovery but does not guarantee indexing or ranking. This project site does not include `robots.txt`: crawlers look for that file at the host root (`https://rustypig91.github.io/robots.txt`), not under `/rustys-toolbox/`. Any host-wide robots rules must be managed in the root GitHub Pages site.

## Editing

- `index.html`: site copy, project features, and GitHub links.
- `styles.css`: layout, colors, typography, responsive rules, and reduced-motion support.
- `screenshots.js`: enlarged image dialog and failed-image handling.
- `sitemap.xml`: canonical URL for search-engine discovery.
- `assets/`: project icons copied from their respective repositories, plus the site favicon.

Project descriptions are based on the projects' linked README files. Download links lead to release listings, avoiding hard-coded version numbers. Google Fonts supplies the typography; local fallback fonts keep the page usable offline. The site has no tracking or backend.

## Latest release screenshots

Screenshots load directly from GitHub release assets; they are not copied into this repository. Canvaz uses the permanent URL `https://github.com/rustypig91/canvaz/releases/latest/download/canvaz-screenshot.png`. Pigtail uses `https://github.com/rustypig91/pigtail-serial-console/releases/latest/download/pigtail-screenshot.png`. Both URLs point to the latest stable release without an API lookup. The hero shows overlapping previews, and the project cards show individual previews. Clicking any screenshot opens an enlarged view on the page; close it with the Close button, Escape, or by clicking outside the image. All previews update without a site deployment when a new release is published.

Publish the matching screenshot asset with each project's latest stable release. JavaScript hides missing or failed images and handles the enlarged view. Both previews load without JavaScript; project and download links remain available.
