/**
 * MDS Storybook manager theme.
 *
 * Storybook's manager UI runs OUTSIDE the iframe where @mds/tokens/tokens.css
 * is loaded, so the values below cannot reference CSS custom properties.
 * Plain hex / px strings are duplicated here from the MDS token set.
 *
 * Edit this file to tune the chrome (sidebar, top bar, brand) of Storybook.
 * Single source of truth for the manager theme — wired via .storybook/manager.ts.
 */

import { create } from 'storybook/theming';

// ---------- Editable surface ----------
// Tweak these to match the MDS visual identity. Stay in sync with @mds/tokens.

const brand = {
  title: 'MDS',
  url: '#',
  // Brand mark image. Drop a logo into .storybook/assets/ and import it
  // here, e.g. `import logo from './assets/mds-logo.svg'` and use `image: logo`.
  image: undefined as string | undefined,
  target: '_self' as const,
};

const palette = {
  // Brand / accent — maps to --mds-colours-basic-accent
  primary: '#0A0A0A',
  // Secondary action accent — maps to --mds-colours-basic-accent-secondary
  secondary: '#737373',

  // Surfaces
  appBg: '#FFFFFF',          // --mds-colours-basic-background
  appContentBg: '#FFFFFF',   // page background under stories
  appPreviewBg: '#FFFFFF',   // iframe canvas background
  appBorderColor: '#E5E5E5', // --mds-colours-basic-stroke-secondary
  appBorderRadius: 8,        // --mds-radius-medium

  // Text
  textColor: '#0A0A0A',          // --mds-colours-basic-text
  textInverseColor: '#FFFFFF',   // --mds-colours-basic-text-on-accent
  textMutedColor: '#737373',     // --mds-colours-basic-text-secondary

  // Toolbar
  barTextColor: '#0A0A0A',
  barSelectedColor: '#0A0A0A',
  barHoverColor: '#0A0A0A',
  barBg: '#FFFFFF',

  // Form inputs (search, controls)
  inputBg: '#FFFFFF',
  inputBorder: '#E5E5E5',
  inputTextColor: '#0A0A0A',
  inputBorderRadius: 8,
};

const fonts = {
  // Base UI font — keep in sync with --mds-typography-body-font-family
  base: '"TeleNeoWeb", "Helvetica Neue", Arial, sans-serif',
  // Code blocks in docs / args
  code: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
};

// ---------- Theme assembly ----------
// You shouldn't need to edit below this line for routine tuning.

export const mdsTheme = create({
  base: 'light',

  brandTitle: brand.title,
  brandUrl: brand.url,
  brandImage: brand.image,
  brandTarget: brand.target,

  colorPrimary: palette.primary,
  colorSecondary: palette.secondary,

  appBg: palette.appBg,
  appContentBg: palette.appContentBg,
  appPreviewBg: palette.appPreviewBg,
  appBorderColor: palette.appBorderColor,
  appBorderRadius: palette.appBorderRadius,

  textColor: palette.textColor,
  textInverseColor: palette.textInverseColor,
  textMutedColor: palette.textMutedColor,

  barTextColor: palette.barTextColor,
  barSelectedColor: palette.barSelectedColor,
  barHoverColor: palette.barHoverColor,
  barBg: palette.barBg,

  inputBg: palette.inputBg,
  inputBorder: palette.inputBorder,
  inputTextColor: palette.inputTextColor,
  inputBorderRadius: palette.inputBorderRadius,

  fontBase: fonts.base,
  fontCode: fonts.code,
});
