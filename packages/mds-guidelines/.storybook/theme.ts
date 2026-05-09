/**
 * MDS Storybook manager theme.
 *
 * Storybook's manager UI runs OUTSIDE the iframe where @mds/tokens/tokens.css
 * is loaded, so values cannot be CSS custom properties. We import the
 * `palettes` JS export from @mds/tokens — a build-resolved object whose
 * leaves are real hex strings — per the documented escape hatch in
 * SYSTEM.md ("places where CSS vars don't fit").
 *
 * Exports two themes (light + dark) so the manager can pick one based on
 * the user's preference. To swap which palette either theme draws from,
 * change the call args in the `mdsThemeLight` / `mdsThemeDark` exports
 * below.
 */

import { palettes } from '@mds/tokens';
import { create } from 'storybook/theming';

// `fontBase` must be a literal string (manager iframe doesn't load tokens.css).
// Matches the value emitted at --mds-core-typography-font-families-akkurat.
const FONT_BASE = '"Akkurat Pro", system-ui, sans-serif';

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

    fontBase: FONT_BASE,
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
