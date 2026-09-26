# Ground Floor Industries — Logo & Brand Assets

The official logo files for **Ground Floor Industries**, in one place so they can be pulled into any project, document, or website.

![Stacked logo](logos/transparent/gfi-stacked-for-light-bg.png)

## Which file do I use?

| I need… | Use this |
|---|---|
| A logo for a website header, letterhead, email signature | `logos/transparent/gfi-horizontal-for-light-bg.png` |
| The same, on a dark site/slide | `logos/transparent/gfi-horizontal-for-dark-bg.png` |
| A centered logo (cover page, sign, social banner) | `logos/transparent/gfi-stacked-for-light-bg.png` / `…-for-dark-bg.png` |
| Just the building mark (profile picture, app icon, stamp) | `logos/icon/gfi-icon-for-light-bg.png` / `…-for-dark-bg.png` |
| A small version that loads fast | `logos/sizes/` (256px and 512px wide) |
| The logo exactly as designed, with its background | `logos/on-background/` |
| Browser-tab / phone home-screen icons | `favicon/` |
| Brand colors | `colors/` (JSON, CSS, SCSS, swatch image) |

**"for-light-bg"** = dark charcoal wordmark, place on white/cream.
**"for-dark-bg"** = cream wordmark, place on black/charcoal.

## Folder layout

```
ground-floor-industries-brand/
├── logos/
│   ├── transparent/     # Primary files — transparent PNGs, trimmed to the artwork
│   ├── on-background/   # Original cream / charcoal backgrounds, with padding
│   ├── icon/            # Building mark only, square, transparent
│   └── sizes/           # Web-ready 256w and 512w versions
├── favicon/             # favicon.ico, 16/32/48/192/512 PNGs, apple-touch-icon
├── colors/              # palette.json, palette.css, _palette.scss, swatches
├── source/              # Original 4-up logo sheet (master reference)
└── index.html           # Visual preview of everything (open in a browser)
```

## Brand colors

![Palette](colors/palette-swatches.png)

| Name | Hex | Where it appears |
|---|---|---|
| Gold | `#D0AC48` | Left panel, outlines, foundation lines |
| Olive | `#76865E` | Second panel |
| Teal light | `#709D9A` | Tall tower, front face |
| Teal deep | `#3F737B` | Tall tower, side face |
| Bronze | `#B3854A` | Small annex block |
| Charcoal | `#3F3F3B` | Wordmark on light backgrounds |
| Cream | `#EDD3A4` | Wordmark on dark backgrounds |
| Teal text | `#6A9B98` | "INDUSTRIES" tagline |
| Background light | `#F8F4ED` | Light background |
| Background dark | `#1D1D1D` | Dark background |

Colors were sampled from the artwork, so treat them as close approximations.

## Pulling the logos into other projects

**Direct link (for websites, READMEs, emails)** — once pushed, any file is available at:

```
https://raw.githubusercontent.com/<your-username>/ground-floor-industries-brand/main/logos/transparent/gfi-horizontal-for-light-bg.png
```

**As a git submodule (inside another repo):**

```bash
git submodule add https://github.com/<your-username>/ground-floor-industries-brand.git brand
```

**Download everything:** GitHub → *Code* → *Download ZIP*.

**CSS colors in a web project:**

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/<your-username>/ground-floor-industries-brand@main/colors/palette.css">
```

(jsDelivr only serves public repos; for a private repo, copy `palette.css` in.)

**Favicons on a website:**

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

## Usage notes

- Leave clear space around the logo roughly equal to the height of the "INDUSTRIES" letters.
- Don't stretch, recolor, rotate, or add effects to the logo.
- Use the light-bg version on light backgrounds and the dark-bg version on dark ones; on busy photos, use `on-background/` versions.
- The masters are raster (PNG, ~400–600px wide). They're fine for web, documents, and slides. **Large print (signs, vehicle wraps, embroidery) needs a vector (SVG/AI/EPS) version** — have a designer redraw it and add it to a `logos/vector/` folder.

## License

© Ground Floor Industries. All rights reserved. The logo and brand marks may not be used without permission.
