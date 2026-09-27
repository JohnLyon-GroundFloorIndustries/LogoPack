import * as React from 'react';
import type { LogoSvgProps } from './LogoSvg';
import {
  LogoHorizontalOnLight,
  LogoHorizontalOnDark,
  LogoHorizontalLightWithBackground,
  LogoHorizontalDarkWithBackground,
  LogoStackedOnLight,
  LogoStackedOnDark,
  LogoStackedLightWithBackground,
  LogoStackedDarkWithBackground,
  LogoIconOnLight,
  LogoIconOnDark,
  LogoIconSimpleOnLight,
  LogoIconSimpleOnDark,
} from './generated/logos';

export type LogoLayout = 'horizontal' | 'stacked';
/** The background the logo will sit on. `light` = charcoal wordmark, `dark` = cream wordmark. */
export type LogoBackground = 'light' | 'dark';

export interface LogoProps extends LogoSvgProps {
  /** `horizontal` for headers and letterhead; `stacked` for centered placements. @default 'horizontal' */
  layout?: LogoLayout;
  /** The background the logo sits on. @default 'light' */
  background?: LogoBackground;
  /** Paint the brand cream/charcoal background behind the logo (for busy or off-brand surfaces). @default false */
  withBackground?: boolean;
}

const LOGOS = {
  horizontal: {
    light: [LogoHorizontalOnLight, LogoHorizontalLightWithBackground],
    dark: [LogoHorizontalOnDark, LogoHorizontalDarkWithBackground],
  },
  stacked: {
    light: [LogoStackedOnLight, LogoStackedLightWithBackground],
    dark: [LogoStackedOnDark, LogoStackedDarkWithBackground],
  },
} as const;

/**
 * The Ground Floor Industries logo.
 *
 * ```tsx
 * <Logo height={48} />                                  // header
 * <Logo layout="stacked" background="dark" width={320} /> // hero on a dark section
 * ```
 */
export function Logo({ layout = 'horizontal', background = 'light', withBackground = false, ...props }: LogoProps) {
  const Component = LOGOS[layout][background][withBackground ? 1 : 0];
  return <Component {...props} />;
}

export interface LogoIconProps extends LogoSvgProps {
  /** The background the icon sits on. @default 'light' */
  background?: LogoBackground;
  /**
   * Drop the hairline highlights. Use for anything under ~64px, embroidery,
   * stamps, and one-color jobs. @default false
   */
  simple?: boolean;
}

/**
 * The building mark on its own (square).
 *
 * ```tsx
 * <LogoIcon width={40} simple />
 * ```
 */
export function LogoIcon({ background = 'light', simple = false, ...props }: LogoIconProps) {
  const Component =
    background === 'dark'
      ? simple ? LogoIconSimpleOnDark : LogoIconOnDark
      : simple ? LogoIconSimpleOnLight : LogoIconOnLight;
  return <Component {...props} />;
}
