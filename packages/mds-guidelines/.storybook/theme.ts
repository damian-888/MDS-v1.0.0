/**
 * MDS Storybook manager theme.
 *
 * Storybook's manager UI runs OUTSIDE the iframe where @mds/tokens/tokens.css
 * is loaded, so values cannot be CSS custom properties. We import the
 * `palettes` JS export from @mds/tokens — a build-resolved object whose
 * leaves are real hex strings — per the documented escape hatch in
 * SYSTEM.md ("places where CSS vars don't fit").
 *
 * To swap the chrome to dark or brand-tinted, change which palette is
 * pinned to `surface` and `surfaceHover` below.
 */

import { palettes } from '@mds/tokens';
import { create } from 'storybook/theming';

// ---------- Editable surface ----------
// Pin which palette the chrome draws from. `palettes` keys are kebab-case.
const surface = palettes['white'].colours.basic;
const surfaceHover = palettes['white-subtle'].colours.basic;

// ---------- Theme assembly ----------
// All values below come from `surface` / `surfaceHover`. The two numeric
// fields (appBorderRadius, inputBorderRadius) are required by Storybook's
// type as `number`; `8` matches --mds-radius-medium per Tokens Studio.

export const mdsTheme = create({
  base: 'light',

  brandTitle: 'MDS',
  brandUrl: '#',

  colorPrimary: surface.accent,
  colorSecondary: surface['accent-secondary'],

  appBg: surface.background,
  appContentBg: surface.background,
  appPreviewBg: surface.background,
  appHoverBg: surfaceHover.background,
  appBorderColor: surface['stroke-secondary'],
  appBorderRadius: 8, // --mds-radius-medium

  textColor: surface.text,
  textInverseColor: surface['text-on-accent'],
  textMutedColor: surface['text-secondary'],

  barTextColor: surface.text,
  barSelectedColor: surface.text,
  barHoverColor: surface.text,
  barBg: surface.background,

  inputBg: surface.background,
  inputBorder: surface['stroke-secondary'],
  inputTextColor: surface.text,
  inputBorderRadius: 8, // --mds-radius-medium
});
