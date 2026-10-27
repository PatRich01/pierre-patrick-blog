# Pierre & Patrick Blog

The page uses Tailwind CSS 3.4 with a local CLI build. Its theme configuration
is in `tailwind.config.cjs`, and the CSS source is `src/input.css`.

## Build

```sh
npm install
npm run build
```

Open `code.html` in a browser after building. The generated `dist/styles.css`
is checked in so the page is styled without running the build first.

Run `npm run watch` while editing to rebuild the stylesheet automatically.
