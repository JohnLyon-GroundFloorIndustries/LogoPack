import type { Meta, StoryObj } from '@storybook/react-vite';
import { colorTokens } from '../index';

const meta = {
  title: 'Brand/Colors',
  parameters: { layout: 'padded', backgrounds: { disable: false } },
  globals: { backgrounds: { value: 'white' } },
} satisfies Meta;

export default meta;

const CORE = 6; // the first six tokens are the core brand colors; the rest are derived tints

function Swatch({ t }: { t: (typeof colorTokens)[number] }) {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13 }}>
      <div style={{ height: 88, borderRadius: 10, background: t.hex, border: '1px solid #D9D6CF' }} />
      <div style={{ fontWeight: 700, marginTop: 8 }}>{t.key}</div>
      <code style={{ display: 'block', color: '#555' }}>{t.hex}</code>
      <code style={{ display: 'block', color: '#555' }}>var({t.cssVar})</code>
      <div style={{ color: '#666', marginTop: 4, lineHeight: 1.4 }}>{t.use}</div>
    </div>
  );
}

const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: 20 } as const;

/** Import as `colors.deepTeal` etc., or load `@groundfloorindustries/logopack/palette.css` for CSS variables. */
export const Palette: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 28 }}>
      <h3 style={{ margin: 0, fontFamily: 'Montserrat, sans-serif' }}>Core brand colors</h3>
      <div style={grid}>{colorTokens.slice(0, CORE).map((t) => <Swatch key={t.key} t={t} />)}</div>
      <h3 style={{ margin: 0, fontFamily: 'Montserrat, sans-serif' }}>Derived tints</h3>
      <div style={grid}>{colorTokens.slice(CORE).map((t) => <Swatch key={t.key} t={t} />)}</div>
    </div>
  ),
};
