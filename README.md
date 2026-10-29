# Rusty's Toolbox

A static landing page for [Canvaz](https://github.com/rustypig91/canvaz), a CAN analyzer, [Pigtail](https://github.com/rustypig91/pigtail-serial-console), a serial terminal, and [Snout](https://github.com/rustypig91/snout-firmware-explorer), a firmware memory explorer. It introduces the tools and the personal motivation behind developing them as open source.

## Ubuntu installation guide

The landing page’s **Install on Ubuntu** section covers Ubuntu 22.04+ on amd64: prerequisites, the signed [Rusty APT repository](https://github.com/rustypig91/rusty-apt), installation of `canvaz`, `pigtail`, and `snout`, and update/removal commands. Keep these commands aligned with the repository’s installation documentation.

## Preview locally

No build step or dependency installation is required:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. You can also open `index.html` directly.

## Publish with GitHub Pages

1. In the repository's **Settings → Pages**, select **GitHub Actions** as the source.
2. Push the site to `main`, or manually run **Deploy GitHub Pages** in the Actions tab.
3. The public URL is https://rustystoolbox.com/.

The workflow publishes only `index.html`, `styles.css`, `screenshots.js`, `sitemap.xml`, and `assets/`. Setup follows the [GitHub Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Search indexing

The page serves its full content as static HTML, with a descriptive title, meta description, canonical URL, and matching Open Graph metadata. `sitemap.xml` lists the canonical page URL. If the site's public URL changes, update the canonical link, `og:url`, and sitemap together.

After deployment:

1. Domain ownership verification for `rustystoolbox.com` is managed through DNS at Spaceship. Keep the verification DNS record in place; no HTML verification file or meta tag is needed in this repository.
2. Submit `https://rustystoolbox.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console)'s **Sitemaps** report.
3. Inspect the canonical page URL with **URL Inspection**, check that indexing is allowed, and request indexing. Monitor the **Page indexing** and **Performance** reports afterward.

A sitemap helps discovery but does not guarantee indexing or ranking. This site does not currently include `robots.txt`. If added, it should be published at `https://rustystoolbox.com/robots.txt`.

## Editing

- `index.html`: site copy, project features, GitHub links, and Microsoft Store availability.
- `styles.css`: layout, colors, typography, responsive rules, and reduced-motion support.
- `screenshots.js`: enlarged image dialog and failed-image handling.
- `sitemap.xml`: canonical URL for search-engine discovery.
- `assets/`: project icons copied from their respective repositories, plus the site favicon.

Project descriptions are based on the projects' linked README files. GitHub download links lead to release listings, avoiding hard-coded version numbers. Google Fonts supplies the typography; local fallback fonts keep the page usable offline. The site has no tracking or backend.

## Microsoft Store links

Each project card has a `.project-store` block above its GitHub links. Pigtail links to `https://apps.microsoft.com/detail/9P5WS4PFD96H` (product ID `9P5WS4PFD96H`). Canvaz and Snout show “Not yet available in the Store” without a clickable placeholder. The separate “GitHub releases” buttons keep release downloads available for all three tools, and the note below the cards explains the Store, GitHub, and Ubuntu installation options.

When another app is published, replace its `.store-unavailable` span with the same `.button.button-light.store-link` anchor used by Pigtail. Set its URL to `https://apps.microsoft.com/detail/PRODUCT_ID`, update the accessible label to name the app, and change the `.store-note` text to “Install on Windows”. Give that note a unique ID (for example, `canvaz-store-note`) and reference it in the anchor’s `aria-describedby` so the Windows requirement is also announced when focusing the link. Update the download note below the cards to match the available listings. The shared styles already support all three cards, and Store links work without JavaScript.

## Latest release screenshots

Screenshots load directly from GitHub release assets; they are not copied into this repository. Canvaz uses the permanent URL `https://github.com/rustypig91/canvaz/releases/latest/download/canvaz-screenshot.png`. Pigtail uses `https://github.com/rustypig91/pigtail-serial-console/releases/latest/download/pigtail-screenshot.png`. Snout uses `https://github.com/rustypig91/snout-firmware-explorer/releases/latest/download/snout-screenshot.png`. All three URLs point to the latest stable release without an API lookup. The hero shows overlapping previews, and the project cards show individual previews. Clicking any screenshot opens an enlarged view on the page; close it with the Close button, Escape, or by clicking outside the image. All previews update without a site deployment when a new release is published.

Publish the matching screenshot asset with each project's latest stable release. JavaScript hides missing or failed images and handles the enlarged view. All previews load without JavaScript; project and download links remain available.
