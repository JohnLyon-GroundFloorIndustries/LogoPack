import { render, screen } from '@testing-library/react';
import { Logo, LogoIcon, logoComponents, logoMeta, colors, cssVariables } from './index';

describe('Logo', () => {
  it('renders an accessible svg named after the company by default', () => {
    render(<Logo />);
    const svg = screen.getByRole('img', { name: 'Ground Floor Industries' });
    expect(svg.tagName.toLowerCase()).toBe('svg');
  });

  it('uses the intrinsic size when no size is given', () => {
    const { container } = render(<Logo layout="stacked" />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('width')).toBe(String(logoMeta.LogoStackedOnLight.width));
    expect(svg.getAttribute('height')).toBe(String(logoMeta.LogoStackedOnLight.height));
  });

  it('keeps the aspect ratio when only height is given', () => {
    const { container } = render(<Logo height={48} />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('height')).toBe('48');
    expect(svg.hasAttribute('width')).toBe(false);
    expect(svg.style.width).toBe('auto');
    expect(svg.style.aspectRatio).toContain('/');
  });

  it('picks the right artwork for layout, background and withBackground', () => {
    const { container: dark } = render(<Logo background="dark" />);
    expect(dark.innerHTML).toContain(colors.cream); // cream wordmark
    const { container: bg } = render(<Logo withBackground background="dark" />);
    expect(bg.querySelector('rect[width="100%"]')?.getAttribute('fill')).toBe(colors.charcoal);
  });

  it('can be marked decorative', () => {
    const { container } = render(<Logo title="" />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('aria-hidden')).toBe('true');
    expect(svg.querySelector('title')).toBeNull();
  });

  it('forwards className and other svg props', () => {
    const { container } = render(<Logo className="brand" data-testid="x" />);
    expect(container.querySelector('svg.brand[data-testid="x"]')).not.toBeNull();
  });
});

describe('LogoIcon', () => {
  it('omits hairline highlights when simple', () => {
    const { container: full } = render(<LogoIcon />);
    const { container: simple } = render(<LogoIcon simple />);
    expect(full.querySelectorAll('[stroke-opacity]').length).toBeGreaterThan(0);
    expect(simple.querySelectorAll('[stroke-opacity]').length).toBe(0);
  });
});

describe('generated exports', () => {
  it('exports all 12 logo variants with metadata', () => {
    expect(Object.keys(logoComponents)).toHaveLength(12);
    for (const name of Object.keys(logoComponents)) expect(logoMeta[name as keyof typeof logoMeta].file).toMatch(/^logos\/svg\//);
  });

  it('exposes brand colors as tokens and CSS variables', () => {
    expect(colors.deepTeal).toBe('#1F5C5B');
    expect(cssVariables['--gfi-deep-teal']).toBe('#1F5C5B');
  });
});
