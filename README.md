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

The workflow publishes only `index.html`, `styles.css`, and `assets/`. Setup follows the [GitHub Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Editing

- `index.html`: site copy, project features, and GitHub links.
- `styles.css`: layout, colors, typography, responsive rules, and reduced-motion support.
- `assets/`: project icons copied from their respective repositories, plus the site favicon.

Project descriptions are based on the projects' linked README files. Download links lead to release listings, avoiding hard-coded version numbers. The workbench graphic is an illustration, not a product screenshot. Google Fonts supplies the typography; local fallback fonts keep the page usable offline. The site has no JavaScript, tracking, or backend.
