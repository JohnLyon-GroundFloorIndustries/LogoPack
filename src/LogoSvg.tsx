import * as React from 'react';

export interface LogoSvgProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref'> {
  /**
   * Accessible name read by screen readers. Pass an empty string when the logo is
   * purely decorative (e.g. next to visible company name text) to hide it from
   * assistive technology.
   * @default 'Ground Floor Industries'
   */
  title?: string;
}

interface BaseProps extends LogoSvgProps {
  viewBoxWidth: number;
  viewBoxHeight: number;
  children: React.ReactNode;
}

/**
 * Shared <svg> wrapper for every logo. Sizing rules:
 * - neither `width` nor `height` given → renders at the artwork's intrinsic size
 * - only one given → the other follows the aspect ratio (via `auto`)
 * - both given → the artwork is fitted inside and centered
 */
export function LogoSvg({
  viewBoxWidth,
  viewBoxHeight,
  title = 'Ground Floor Industries',
  width,
  height,
  children,
  ...rest
}: BaseProps) {
  const titleId = React.useId();
  const decorative = title === '';

  const intrinsic = width == null && height == null;
  const sizeAttrs = intrinsic ? { width: viewBoxWidth, height: viewBoxHeight } : { width, height };
  // When only one dimension is given, let CSS derive the other from the aspect ratio.
  const sizeStyle: React.CSSProperties =
    !intrinsic && (width == null || height == null)
      ? { aspectRatio: `${viewBoxWidth} / ${viewBoxHeight}`, [width == null ? 'width' : 'height']: 'auto' }
      : {};

  const a11y = decorative
    ? { 'aria-hidden': true as const, focusable: 'false' as const }
    : { role: 'img', 'aria-labelledby': titleId };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="xMidYMid meet"
      {...sizeAttrs}
      {...a11y}
      {...rest}
      style={{ display: 'block', ...sizeStyle, ...rest.style }}
    >
      {!decorative && <title id={titleId}>{title}</title>}
      {children}
    </svg>
  );
}
