# Pierre Patrick Blog

The page uses Tailwind CSS 3.4 with a local CLI build. Its theme configuration
is in `tailwind.config.cjs`, and the CSS source is `src/input.css`.

## Build

```sh
npm install
npm run build
```

The Vite build includes both the React app (`build/index.html`) and the
standalone editorial page (`build/code.html`). The generated `dist/styles.css`
is checked in so the source page is styled without running the build first.

Run `npm run watch` while editing to rebuild the stylesheet automatically.
