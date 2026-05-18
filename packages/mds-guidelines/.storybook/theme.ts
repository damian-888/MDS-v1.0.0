/**
 * MDS Storybook manager theme.
 *
 * Storybook's manager UI runs OUTSIDE the iframe where @mds/tokens/tokens.css
 * is loaded, so values cannot be CSS custom properties. We import the
 * `palettes` JS export from @mds/tokens — a build-resolved object whose
 * leaves are real hex strings — as the documented escape hatch for places
 * where CSS vars don't fit.
 *
 * Exports two themes (light + dark) so the manager can pick one based on
 * the user's preference. To swap which palette either theme draws from,
 * change the call args in the `mdsThemeLight` / `mdsThemeDark` exports
 * below.
 */

import { palettes } from '@mds/tokens';
import { create } from 'storybook/theming';

// `fontBase` / `fontCode` must be literal strings (manager iframe doesn't
// load tokens.css). FONT_BASE matches --mds-core-typography-font-families-akkurat.
// FONT_CODE is a system stack — @mds/tokens has no monospace family.
const FONT_BASE = '"Akkurat Pro", system-ui, sans-serif';
const FONT_CODE = 'ui-monospace, SFMono-Regular, Menlo, monospace';

function mdsTheme(
  mode: 'light' | 'dark',
  surface: Record<string, string>,
  surfaceHover: Record<string, string>,
) {
  return create({
    base: mode,

    brandTitle: 'MDS',
    brandUrl: '#',

    colorPrimary: surface.accent,
    colorSecondary: surface['accent-secondary'],

    appBg: surface.background,
    appContentBg: surface.background,
    appPreviewBg: surface.background,
    appHoverBg: surfaceHover.background,
    appBorderColor: surface.stroke,
    appBorderRadius: 8, // --mds-radius-medium

    textColor: surface.text,
    textInverseColor: surface['text-on-accent'],
    textMutedColor: surface['text-secondary'],

    barTextColor: surface.text,
    barSelectedColor: surface.accent,
    barHoverColor: surface.text,
    barBg: surface.background,

    buttonBg: surface.accent,
    buttonBorder: surface.stroke,

    booleanBg: surface.background,
    booleanSelectedBg: surface.accent,

    inputBg: surface.background,
    inputBorder: surface.stroke,
    inputTextColor: surface.text,
    inputBorderRadius: 8, // --mds-radius-medium

    fontBase: FONT_BASE,
    fontCode: FONT_CODE,

    gridCellSize: 8, // --mds-radius-medium
  });
}

export const mdsThemeLight = mdsTheme(
  'light',
  palettes['white'].colours.basic,
  palettes['white-subtle'].colours.basic,
);

export const mdsThemeDark = mdsTheme(
  'dark',
  palettes['black'].colours.basic,
  palettes['black-subtle'].colours.basic,
);
