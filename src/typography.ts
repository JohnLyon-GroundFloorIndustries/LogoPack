/** Brand typefaces (free on Google Fonts, SIL Open Font License). */
export const fonts = {
  /** "GROUND FLOOR" wordmark — also good for headlines. */
  wordmark: {
    family: "'Saira Condensed', 'Arial Narrow', sans-serif",
    weight: 700,
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
  },
  /** "INDUSTRIES" tagline — also good for labels and eyebrows. */
  tagline: {
    family: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
    weight: 700,
    letterSpacing: '0.37em',
    textTransform: 'uppercase',
  },
} as const;

/** Stylesheet URL that loads both brand typefaces from Google Fonts. */
export const googleFontsHref =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Saira+Condensed:wght@700&display=swap';
