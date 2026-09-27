import type { Meta, StoryObj } from '@storybook/react-vite';
import { fonts, colors } from '../index';

const meta = {
  title: 'Brand/Typography',
  parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;

/** The logo's lettering, available as tokens for headlines and labels. Load them with `googleFontsHref`. */
export const Typefaces: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 32, color: colors.charcoal }}>
      <div>
        <div style={{ fontFamily: fonts.wordmark.family, fontWeight: fonts.wordmark.weight, letterSpacing: fonts.wordmark.letterSpacing, textTransform: 'uppercase', fontSize: 64, lineHeight: 1 }}>
          Ground Floor
        </div>
        <code style={{ fontSize: 12 }}>fonts.wordmark — Saira Condensed Bold, +0.02em</code>
      </div>
      <div>
        <div style={{ fontFamily: fonts.tagline.family, fontWeight: fonts.tagline.weight, letterSpacing: fonts.tagline.letterSpacing, textTransform: 'uppercase', fontSize: 22, color: colors.deepTeal }}>
          Industries
        </div>
        <code style={{ fontSize: 12 }}>fonts.tagline — Montserrat Bold, +0.37em</code>
      </div>
    </div>
  ),
};
