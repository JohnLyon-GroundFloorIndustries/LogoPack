# Ground Floor Industries — Logo & Brand Assets

The official logo files for **Ground Floor Industries**, in one place so they can be pulled into any project, document, website, or print job.

![Stacked logo](logos/png/small/gfi-stacked-for-light-bg-512w.png)

All logos are **vector** masters (SVG and PDF), which scale to any size with no loss in quality: business cards, signs, vehicle wraps, embroidery. The PNGs are exported from those masters.

## Which file do I use?

| I need… | Use this |
|---|---|
| Website, email signature, slides, Word/Google Docs | `logos/png/` (2000px) or `logos/png/small/` (256–1024px) |
| Anything a print shop, sign maker, or designer asks for ("vector", "SVG", "PDF", "EPS", "AI") | `logos/pdf/` or `logos/svg/` |
| A horizontal logo for a header or letterhead | `gfi-horizontal-for-light-bg` / `…-for-dark-bg` |
| A centered logo (cover page, sign, banner) | `gfi-stacked-for-light-bg` / `…-for-dark-bg` |
| Just the building mark (profile picture, app icon, stamp) | `gfi-icon-for-light-bg` / `…-for-dark-bg` |
| The building mark under ~64px, embroidery, stamps, one-color jobs | `gfi-icon-simple-for-light-bg` / `…-for-dark-bg` (no hairline highlights) |
| The logo on its own cream or charcoal background | `…-light-with-background` / `…-dark-with-background` |
| Browser-tab / phone home-screen icons | `favicon/` |
| Brand colors | `colors/` (JSON, CSS, SCSS, swatch image) |
| All four logos on one page (to show a printer, designer, or partner) | `logos/sheet/gfi-logo-sheet.pdf` |

**"for-light-bg"** = charcoal wordmark with gold edge, transparent background; place it on white or cream.
**"for-dark-bg"** = cream wordmark, transparent background; place it on black or charcoal.

If a print shop asks for **EPS or AI**, send the PDF. Illustrator, CorelDRAW, and most sign-cutting software open it as editable vector artwork.

## Folder layout

```
ground-floor-industries-brand/
├── logos/
│   ├── svg/           # Vector masters (web + design tools)
│   ├── pdf/           # Vector masters (print shops, Illustrator)
│   ├── sheet/         # All four logos on one page (SVG, PDF, PNG)
│   └── png/           # 2000px exports (icons 1024px), transparent unless "with-background"
│       └── small/     # 64–1024px web-ready sizes
├── favicon/           # favicon.ico, favicon.svg, 16–512px PNGs, apple-touch-icon (from the simple icon)
├── colors/            # palette.json, palette.css, _palette.scss, swatches (SVG + PNG)
├── source/            # Original AI-generated logo sheet (historical reference only)
└── index.html         # Visual preview of everything (open in a browser)
```

## Design rules built into the mark

- **One roof pitch:** every roof uses the same ~22° angle, rising on the left buildings and falling on the right.
- **One gap:** the space between buildings, between the buildings and the foundation, and between the foundation bars is the same width.
- **One frame:** every panel, including the divider in the low building, has the same gold frame weight.
- **Horizontal lock-up:** "GROUND FLOOR" sits on the building baseline and "INDUSTRIES" sits on the bottom foundation bar.

## Typography

The lettering has been converted to outlines, so the logo files don't need any fonts installed. To match the logo in other materials, use these free Google Fonts:

| Element | Font | Settings |
|---|---|---|
| **GROUND FLOOR** wordmark | [Saira Condensed](https://fonts.google.com/specimen/Saira+Condensed), Bold (700) | All caps, letter-spacing +0.02em |
| **INDUSTRIES** tagline | [Montserrat](https://fonts.google.com/specimen/Montserrat), Bold (700) | All caps, letter-spacing +0.37em |

## Brand colors

![Palette](colors/palette-swatches.png)

| Name | Hex | Where it appears |
|---|---|---|
| Gold | `#D0AC48` | Left panel, outlines, foundation lines |
| Olive | `#76865E` | Second panel |
| Teal light | `#709D9A` | Tall tower |
| Teal deep | `#3F737B` | Right tower |
| Bronze | `#B3854A` | Small annex block |
| Charcoal | `#3F3F3B` | Wordmark on light backgrounds |
| Cream | `#EDD3A4` | Wordmark on dark backgrounds |
| Teal text | `#6A9B98` | "INDUSTRIES" tagline |
| Background light | `#F8F4ED` | Light background |
| Background dark | `#1D1D1D` | Dark background |

## Pulling the logos into other projects

**Direct link (for websites, READMEs, emails)**: once pushed, any file is available at:

```
https://raw.githubusercontent.com/<your-username>/ground-floor-industries-brand/main/logos/svg/gfi-horizontal-for-light-bg.svg
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
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

## Usage notes

- Leave clear space around the logo roughly equal to the height of the "INDUSTRIES" letters.
- Don't stretch, recolor, rotate, or add effects to the logo.
- Use the light-bg version on light backgrounds and the dark-bg version on dark ones; on busy photos, use a `with-background` version.
- The vectors were redrawn from the original artwork in `source/`: the building geometry was measured from it and the lettering matched to the closest typefaces. They're cleaner and more consistent than the original, but not pixel-identical.

## License

© Ground Floor Industries. All rights reserved. The logo and brand marks may not be used without permission.
Saira Condensed and Montserrat are licensed under the SIL Open Font License 1.1.
