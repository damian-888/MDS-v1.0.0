import { createElement } from 'react';
import type { Preview } from '@storybook/react-vite';

import '@mds/tokens/fonts.css';
import '@mds/tokens/tokens.css';
// Utility classes (.mds-typography-h1, .mds-typography-body-bold, etc.) live
// in a separate stylesheet — tokens.css only emits the CSS variables. MDSText
// applies the utility class as its sole source of styling, so this import is
// what makes its variants visually distinct (and MDSAccordion/MDSBreadcrumb
// labels via MDSText).
import '@mds/tokens/typography.css';
// @mds/components ships its CSS as a separate file alongside the JS
// (tsup `local-css` extracts CSS Modules to `dist/index.css`). Without this
// import only the classnames are loaded and components render unstyled.
import '@mds/components/styles.css';
import './preview.css';

import { ComponentDocs } from '../src/docs-template';
import { mdsThemeLight, mdsThemeDark } from './theme';

// Pin the canvas iframe to the neutral scheme and propagate the user's
// theme-toolbar choice (stored in localStorage by manager.ts) onto the
// iframe's <html>. Without this, the canvas only reads the OS-level
// `prefers-color-scheme` and drifts from the manager when the toolbar
// overrides it.
const STORAGE_KEY = 'mds-theme';
type ThemePref = 'light' | 'dark' | 'auto';

function readPref(): ThemePref {
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === 'light' || v === 'dark' || v === 'auto' ? v : 'auto';
}

function resolveMode(pref: ThemePref): 'light' | 'dark' {
  if (pref === 'light' || pref === 'dark') return pref;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme() {
  const root = document.documentElement;
  root.dataset.scheme = 'neutral';
  root.dataset.mode = resolveMode(readPref());
}

applyTheme();

// Toolbar writes to localStorage from the manager window; the `storage`
// event fires in *other* same-origin windows, i.e. this iframe.
window.addEventListener('storage', (e) => {
  if (e.key === STORAGE_KEY) applyTheme();
});

// Only re-apply on OS theme change while in 'auto'; explicit light/dark wins.
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', () => {
    if (readPref() === 'auto') applyTheme();
  });

// ── Docs page section-axis plumbing ─────────────────────────────────────
// Stamp `data-section` on every `.sbdocs-preview` (the framed preview card
// around each story on the docs page). Default is `subtle` so primary
// (white-fill) cards stand out against a grey backdrop. preview.css drives
// the frame's background-color from `var(--mds-colours-basic-background)`,
// so the attribute makes the frame paint with the corresponding palette.
// The `<re-anchor>` global decorator below restores `data-section="normal"`
// inside the rendered story so components consuming `basic.background`
// return to the normal palette.
//
// Per-story opt-out: a story may render an element carrying
// `data-frame-section="normal"` inside its content (e.g. MDSCard's
// SecondaryBackground story). When the observer sees that sentinel inside
// a `.sbdocs-preview`, it stamps the frame as `normal` instead — used when
// a subtle-variant component would otherwise collide with the subtle frame.
// No-op in the canvas iframe (viewMode=story) where `.sbdocs-preview`
// doesn't exist.
function stampSectionOnPreviewFrames() {
  for (const el of document.querySelectorAll<HTMLElement>('.sbdocs-preview')) {
    const marker = el.querySelector('[data-frame-section]');
    const desired =
      marker?.getAttribute('data-frame-section') === 'normal' ? 'normal' : 'subtle';
    if (el.dataset.section !== desired) el.dataset.section = desired;
  }
}

stampSectionOnPreviewFrames();
new MutationObserver(stampSectionOnPreviewFrames).observe(document.body, {
  childList: true,
  subtree: true,
});

// Resolved at module-eval time so the docs theme matches the active mode
// when Storybook builds the docs page. The toolbar's full reload re-runs
// this module with the new pref, so subsequent toggles pick up the right
// theme. (parameters.docs.theme can't be reactively swapped after init.)
const initialMode = resolveMode(readPref());

const preview: Preview = {
  // Re-anchor `data-section="normal"` inside every rendered story. Pairs
  // with the `data-section="subtle"` stamped on `.sbdocs-preview` above:
  // the frame is subtle (grey backdrop), the story content inside resolves
  // tokens against the normal palette, so MDSCard and other surfaces that
  // read `basic.background` remain white (visible against the grey frame).
  // `display: contents` keeps the wrapper transparent to layout.
  decorators: [
    (Story) =>
      createElement(
        'div',
        { 'data-section': 'normal', style: { display: 'contents' } },
        createElement(Story),
      ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      page: ComponentDocs,
      // Propagates colours/typography to Storybook's docs chrome (Controls
      // table, Source/Show-code panel, preview frames, sidebar of the
      // autodocs page). Without this, those blocks stay in Storybook's
      // default light theme even when our canvas flips dark.
      theme: initialMode === 'dark' ? mdsThemeDark : mdsThemeLight,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // Sort sidebar component groups alphabetically while preserving each
      // story file's authored order (Empty → variants → edge cases).
      // Returning 0 for matching titles relies on Array.sort being stable
      // (ES2019+), which Storybook's sortStoriesV7 inherits.
      //
      // Storybook static-parses this expression at index time and `eval`s
      // the regenerated source as plain JS — TS parameter annotations or
      // `as`/`satisfies` wrappers would either throw `Unexpected token`
      // at eval (annotations are preserved by babel-generate) or fail the
      // `isArrowFunctionExpression` check on the property value (wrappers
      // make it a TS*Expression). See chunk-TTCWCDY7.js#getStorySortParameter.
      // The comparator's real type is the internal `IndexEntry`, which
      // isn't exported on any public subpath — hence the implicit-any
      // suppression. `a` and `b` are entries with at minimum a `title`.
      // @ts-expect-error inline annotations would break Storybook's eval
      storySort: (a, b) =>
        a.title === b.title
          ? 0
          : a.title.localeCompare(b.title, undefined, { numeric: true }),
    },
  },
};

export default preview;
