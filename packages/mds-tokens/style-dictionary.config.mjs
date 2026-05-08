// packages/mds-tokens/style-dictionary.config.mjs
//
// Top-level orchestration. Builds 17 SD instances, post-processes their outputs
// into 6 layered chunk files, then bundles into dist/tokens.css.
//
// See docs/superpowers/specs/2026-05-07-mds-tokens-style-dictionary-design.md

import { mkdirSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import StyleDictionary from 'style-dictionary';
import { setupStyleDictionary } from './build/sd-setup.mjs';
import { buildLayer } from './build/build-layer.mjs';

await setupStyleDictionary();

mkdirSync('dist/chunks', { recursive: true });

// Discover all palette files programmatically so adding a new palette in
// Tokens Studio doesn't require editing this list.
const PALETTES_BASE = readdirSync('src/base', { withFileTypes: true })
  .filter((d) => d.isFile() && d.name.endsWith('.json'))
  .map((d) => `src/base/${d.name}`);
const PALETTES_FUNC = readdirSync('src/base/functional')
  .filter((n) => n.endsWith('.json'))
  .map((n) => `src/base/functional/${n}`);
const ALL_PALETTES = [...PALETTES_BASE, ...PALETTES_FUNC];

// Selector helpers for runtime-override blocks. Custom property inheritance
// in CSS substitutes var() chains at the element where the property is declared,
// so to make per-element overrides compose with parent overrides at other layers,
// every layer must redeclare its tokens on every override scope.
//
// Spec subtlety: `[data-scheme="neutral"] [data-mode]` has specificity (0,0,2,0)
// which would beat a per-element `[data-scheme="error"]` (0,0,1,0) — wrong.
// Wrapping the parent term in `:where()` zeroes its specificity contribution, so
// every block stays at (0,0,1,0) and source order picks the winner.
//
// ALL_OVERRIDE_SCOPES matches :root + any element carrying any of the runtime
// data-attributes; used for the layer-default block.
//
// overrideSelector('mode', '[data-mode="dark"]') matches the element itself
// PLUS descendants that override OTHER axes (not the same axis — a child
// setting its own data-mode must be free to override its parent's mode).
const ALL_AXES = ['mode', 'section', 'scheme'];
const ALL_OVERRIDE_SCOPES = ':root, [data-mode], [data-section], [data-scheme]';
const overrideSelector = (axis, self) => {
  const otherAxes = ALL_AXES.filter((a) => a !== axis);
  return [
    self,
    ...otherAxes.map((a) => `:where(${self}) [data-${a}]`),
  ].join(', ');
};

// ── 1. Core chunk ───────────────────────────────────────────────────────────
const coreBody = await buildLayer({
  sources: ['src/.core.json', ...ALL_PALETTES],
  filter: (t) => t.filePath.includes('.core.json') || t.filePath.includes('/base/'),
});
writeFileSync(
  'dist/chunks/core.css',
  `:root {\n${coreBody}}\n`,
);

// ── 2. Foundation chunk ─────────────────────────────────────────────────────
// Loads the FULL chain so foundation refs (mode.* / breakpoint.*) resolve.
// Filtered to emit only foundation.json tokens — intermediate layers are loaded
// for ref-resolution only, not output.
const foundationBody = await buildLayer({
  sources: [
    'src/.core.json',
    ...ALL_PALETTES,
    'src/.scheme/neutral.json',
    'src/.section/normal.json',
    'src/.mode/light.json',
    'src/.breakpoint/desktop.json',
    'src/foundation.json',
  ],
  filter: (t) => t.filePath.endsWith('/foundation.json'),
});
// Foundation tokens use a multi-selector list so they are re-declared on every
// element that overrides an upstream layer. Without this, foundation tokens
// inherit their *substituted* value from :root and per-element overrides of
// mode/section/scheme have no visible effect on foundation consumers.
// The bare attribute selectors ([data-mode], etc.) match any value of that
// attribute — so a single foundation block covers every override scope.
writeFileSync(
  'dist/chunks/foundation.css',
  `:root, [data-mode], [data-section], [data-scheme] {\n${foundationBody}}\n`,
);

// ── 3. Schemes chunk ────────────────────────────────────────────────────────
// 6 variants, each emitted with its own selector then concatenated.
// Functional schemes (success/error/warning/info) load .scheme/functional.json
// PLUS one .functional/<color>.json to bind functional.* paths to the right palette.

const SCHEME_DEFS = [
  {
    name: 'neutral',
    sources: ['src/.scheme/neutral.json'],
    paletteFiles: ['src/base/.white.json', 'src/base/.white subtle.json',
                   'src/base/.black.json', 'src/base/.black subtle.json'],
  },
  {
    name: 'brand',
    sources: ['src/.scheme/brand.json'],
    paletteFiles: ['src/base/.brand light.json', 'src/base/.brand light subtle.json',
                   'src/base/.brand dark.json', 'src/base/.brand dark subtle.json'],
  },
  {
    name: 'success',
    sources: ['src/.scheme/functional.json', 'src/.functional/green.json'],
    paletteFiles: ['src/base/functional/.green light.json', 'src/base/functional/.green light subtle.json',
                   'src/base/functional/.green dark.json', 'src/base/functional/.green dark subtle.json'],
  },
  {
    name: 'error',
    sources: ['src/.scheme/functional.json', 'src/.functional/red.json'],
    paletteFiles: ['src/base/functional/.red light.json', 'src/base/functional/.red light subtle.json',
                   'src/base/functional/.red dark.json', 'src/base/functional/.red dark subtle.json'],
  },
  {
    name: 'warning',
    sources: ['src/.scheme/functional.json', 'src/.functional/orange.json'],
    paletteFiles: ['src/base/functional/.orange light.json', 'src/base/functional/.orange light subtle.json',
                   'src/base/functional/.orange dark.json', 'src/base/functional/.orange dark subtle.json'],
  },
  {
    name: 'info',
    sources: ['src/.scheme/functional.json', 'src/.functional/blue.json'],
    paletteFiles: ['src/base/functional/.blue light.json', 'src/base/functional/.blue light subtle.json',
                   'src/base/functional/.blue dark.json', 'src/base/functional/.blue dark subtle.json'],
  },
];

const schemeBlocks = [];
for (const def of SCHEME_DEFS) {
  // Only the .scheme/*.json file's tokens get emitted — .functional/<color>.json
  // is loaded purely to bind functional.* paths to the chosen palette so refs
  // resolve through to the leaf palette tokens.
  const emitSources = def.sources.filter((s) => s.includes('/.scheme/'));
  const intermediateSources = def.sources.filter((s) => !s.includes('/.scheme/'));
  const body = await buildLayer({
    sources: ['src/.core.json', ...def.paletteFiles, ...def.sources],
    filter: (t) => emitSources.some((s) => t.filePath.endsWith(s.replace('src/', '/'))),
    chainThroughFiles: intermediateSources.map((s) => s.replace('src/', '/')),
  });
  // Default block is the first scheme (neutral) under :root.
  // Every scheme also gets an explicit [data-scheme="…"] block (so consumers
  // can opt back into the default after inheriting a non-default scheme).
  if (def.name === 'neutral') {
    schemeBlocks.push(`${ALL_OVERRIDE_SCOPES} {\n${body}}\n`);
  }
  schemeBlocks.push(`${overrideSelector('scheme', `[data-scheme="${def.name}"]`)} {\n${body}}\n`);
}
writeFileSync('dist/chunks/schemes.css', schemeBlocks.join('\n'));

// ── 4. Sections chunk ───────────────────────────────────────────────────────
// 2 variants. Loading any one scheme (neutral) is enough for ref-resolution —
// outputReferences:true preserves the var(--mds-scheme-…) chain regardless of
// which scheme the build observed.

const SECTION_VARIANTS = ['normal', 'subtle'];
const sectionBlocks = [];
for (const name of SECTION_VARIANTS) {
  const body = await buildLayer({
    sources: [
      'src/.core.json',
      ...ALL_PALETTES,
      'src/.scheme/neutral.json',
      `src/.section/${name}.json`,
    ],
    filter: (t) => t.filePath.endsWith(`/.section/${name}.json`),
  });
  if (name === 'normal') {
    sectionBlocks.push(`${ALL_OVERRIDE_SCOPES} {\n${body}}\n`);
  }
  sectionBlocks.push(`${overrideSelector('section', `[data-section="${name}"]`)} {\n${body}}\n`);
}
writeFileSync('dist/chunks/sections.css', sectionBlocks.join('\n'));

// ── 5. Modes chunk ──────────────────────────────────────────────────────────
// 2 variants emitted as 4 blocks in this order (specificity (0,0,1,0) for all,
// so source order wins — explicit [data-mode="light"] must be LAST to override
// @media (prefers-color-scheme: dark) when set).
//
//   :root                                          → light defaults
//   @media (prefers-color-scheme: dark) :root      → OS-driven dark
//   [data-mode="dark"]                             → explicit dark
//   [data-mode="light"]                            → explicit light (wins over @media)

const lightBody = await buildLayer({
  sources: [
    'src/.core.json',
    ...ALL_PALETTES,
    'src/.scheme/neutral.json',
    'src/.section/normal.json',
    'src/.mode/light.json',
  ],
  filter: (t) => t.filePath.endsWith('/.mode/light.json'),
});
const darkBody = await buildLayer({
  sources: [
    'src/.core.json',
    ...ALL_PALETTES,
    'src/.scheme/neutral.json',
    'src/.section/normal.json',
    'src/.mode/dark.json',
  ],
  filter: (t) => t.filePath.endsWith('/.mode/dark.json'),
});
writeFileSync(
  'dist/chunks/modes.css',
  [
    `${ALL_OVERRIDE_SCOPES} {\n${lightBody}}\n`,
    `@media (prefers-color-scheme: dark) {\n  ${ALL_OVERRIDE_SCOPES} {\n${indent(darkBody, '  ')}  }\n}\n`,
    `${overrideSelector('mode', '[data-mode="dark"]')} {\n${darkBody}}\n`,
    `${overrideSelector('mode', '[data-mode="light"]')} {\n${lightBody}}\n`,
  ].join('\n'),
);

// Helper used above and in Task 9 (breakpoints): re-indent a CSS body
// (each line already starts with 2 spaces from buildLayer) by an extra prefix.
function indent(body, prefix) {
  return body.split('\n').map((l) => l ? prefix + l : l).join('\n');
}

// ── 6. Breakpoints chunk ────────────────────────────────────────────────────
// 4 variants. Mobile is the :root default (mobile-first); each larger viewport
// kicks in via @media (min-width: …). Thresholds come from .core.json viewports.

const coreJson = JSON.parse(readFileSync('src/.core.json', 'utf8'));
const VIEWPORT = coreJson.core.viewports;     // { mobile:{value:'360'}, tablet:{value:'768'}, … }
const px = (name) => Number(VIEWPORT[name].value);

const BREAKPOINT_ORDER = ['mobile', 'tablet', 'laptop', 'desktop'];

const breakpointBlocks = [];
for (const name of BREAKPOINT_ORDER) {
  const body = await buildLayer({
    sources: ['src/.core.json', `src/.breakpoint/${name}.json`],
    filter: (t) => t.filePath.endsWith(`/.breakpoint/${name}.json`),
  });
  if (name === 'mobile') {
    breakpointBlocks.push(`:root {\n${body}}\n`);
  } else {
    breakpointBlocks.push(
      `@media (min-width: ${px(name)}px) {\n  :root {\n${indent(body, '  ')}  }\n}\n`,
    );
  }
}
writeFileSync('dist/chunks/breakpoints.css', breakpointBlocks.join('\n'));

// ── 7. Typography utility classes ───────────────────────────────────────────
// Uses the typography/classes custom format (registered in sd-setup.mjs).
// Loads the full chain so foundation typography refs (which point at breakpoint.*)
// resolve. Format itself filters to typography tokens only.

const sdTypo = new StyleDictionary({
  parsers: ['rewrite-broken-refs'],
  preprocessors: ['tokens-studio'],
  log: { errors: { brokenReferences: 'throw' } },
  source: [
    'src/.core.json',
    ...ALL_PALETTES,
    'src/.scheme/neutral.json',
    'src/.section/normal.json',
    'src/.mode/light.json',
    'src/.breakpoint/desktop.json',
    'src/foundation.json',
  ],
  platforms: {
    css: {
      transformGroup: 'mds/css',
      buildPath: 'dist/',
      files: [{ destination: 'typography.css', format: 'typography/classes' }],
    },
  },
});
await sdTypo.buildAllPlatforms();

// ── 8. Bundle chunks → dist/tokens.css ─────────────────────────────────────
// Cascade order matters: each chunk's blocks redefine vars referenced by later
// chunks. Foundation reads from mode + breakpoint and must come last.

const CHUNK_ORDER = ['core', 'schemes', 'sections', 'modes', 'breakpoints', 'foundation'];
const bundle = CHUNK_ORDER
  .map((name) => `/* === ${name} === */\n${readFileSync(`dist/chunks/${name}.css`, 'utf8')}`)
  .join('\n');
writeFileSync('dist/tokens.css', bundle);

// ── 9. JS / TS exports ──────────────────────────────────────────────────────
// Two passes:
//   - Foundation tokens become CSS var ref strings (non-resolved) so consumers
//     can write `style={{ color: tokens.colours.basic.text }}` and get runtime
//     theming for free.
//   - Palettes + breakpoints are emitted as resolved primitives (hex / number),
//     useful for matchMedia queries and for places where CSS vars don't apply.

// Helpers shared by the JS and TS formats below. Defined outside the formats
// so both can call into the same tree-builder and stay structurally aligned.
function camel(s) { return s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()); }
function json(obj) { return JSON.stringify(obj, null, 2); }
function buildTokenTree(tokens, valueFn) {
  const tree = {};
  for (const t of tokens) {
    let cur = tree;
    for (let i = 0; i < t.path.length - 1; i++) {
      cur = cur[camel(t.path[i])] ??= {};
    }
    cur[camel(t.path[t.path.length - 1])] = valueFn(t);
  }
  return tree;
}
// Recursively render a tree of strings as TS type declarations. Each leaf
// becomes `string`. Used to emit a tokens.d.ts that matches the runtime shape.
function tsTypeOf(obj, depth = 0) {
  if (typeof obj === 'string') return 'string';
  const pad = '  '.repeat(depth + 1);
  const close = '  '.repeat(depth);
  const lines = Object.entries(obj).map(
    ([k, v]) => `${pad}${JSON.stringify(k)}: ${tsTypeOf(v, depth + 1)};`,
  );
  return `{\n${lines.join('\n')}\n${close}}`;
}

// Foundation top-level groups (camelCased) that we re-export individually.
// Hard-coded so an unexpected new top-level group in foundation.json fails
// loudly rather than silently disappearing from the JS API.
const FOUNDATION_GROUPS = [
  'colours', 'radius', 'spacing', 'strokes', 'grid',
  'layout', 'numberRamp', 'commonComponentValues', 'typography',
];

// CSS var refs use kebab-case + 'mds-' prefix to match the names emitted in
// dist/tokens.css. The `mds/js` transform group uses name/camel for the
// JS-side token name, so we recompute the CSS-side name from t.path directly.
const cssVarName = (t) => `mds-${t.path.join('-').toLowerCase().replace(/\s+/g, '-')}`;

StyleDictionary.registerFormat({
  name: 'js/foundation-refs',
  format: ({ dictionary }) => {
    const foundation = dictionary.allTokens.filter(
      (t) => t.filePath.endsWith('/foundation.json'),
    );
    const tree = buildTokenTree(foundation, (t) => `var(--${cssVarName(t)})`);
    return FOUNDATION_GROUPS
      .map((g) => `export const ${g} = ${json(tree[g] ?? {})};`)
      .join('\n') + '\n';
  },
});

StyleDictionary.registerFormat({
  name: 'ts/foundation-types',
  format: ({ dictionary }) => {
    const foundation = dictionary.allTokens.filter(
      (t) => t.filePath.endsWith('/foundation.json'),
    );
    const tree = buildTokenTree(foundation, () => 'string');   // type leaves
    const lines = FOUNDATION_GROUPS.map(
      (g) => `export const ${g}: ${tsTypeOf(tree[g] ?? {})};`,
    );
    // The js/palettes-and-breakpoints format also emits these — declare types
    // so TS consumers can `import { palettes, breakpoints } from '@mds/tokens'`.
    lines.push(`export const palettes: Record<string, Record<string, Record<string, Record<string, string>>>>;`);
    lines.push(`export const breakpoints: { mobile: number; tablet: number; laptop: number; desktop: number };`);
    return lines.join('\n') + '\n';
  },
});

// Pass B — palettes + breakpoints as resolved primitives
const PALETTE_NAMES = ALL_PALETTES.map((p) =>
  // 'src/base/.white.json' → 'white'
  // 'src/base/functional/.green light subtle.json' → 'green-light-subtle'
  p.replace(/^.+\/\.?/, '').replace('.json', '').trim().replace(/\s+/g, '-'),
);

StyleDictionary.registerFormat({
  name: 'js/palettes-and-breakpoints',
  format: ({ dictionary }) => {
    const palettes = {};
    const breakpoints = {};
    for (const t of dictionary.allTokens) {
      const root = t.path[0];
      if (root === 'breakpoint') continue;     // breakpoint values come from .core viewports below
      if (PALETTE_NAMES.includes(root)) {
        let cur = palettes[root] ??= {};
        for (let i = 1; i < t.path.length - 1; i++) {
          cur = cur[t.path[i]] ??= {};
        }
        cur[t.path[t.path.length - 1]] = t.$value ?? t.value;
      }
    }
    // Breakpoints come straight from .core.viewports (numbers, not the breakpoint files)
    const viewports = JSON.parse(readFileSync('src/.core.json', 'utf8')).core.viewports;
    for (const [name, def] of Object.entries(viewports)) {
      if (['mobile', 'tablet', 'laptop', 'desktop'].includes(name)) {
        breakpoints[name] = Number(def.value);
      }
    }
    return `export const palettes = ${JSON.stringify(palettes, null, 2)};\n` +
           `export const breakpoints = ${JSON.stringify(breakpoints, null, 2)};\n`;
  },
});

// One SD instance emits both the foundation refs and the palettes/breakpoints
// primitives, plus the matching .d.ts. Each format reads from dictionary.allTokens
// directly and applies its own filtering.
const sdJsAll = new StyleDictionary({
  parsers: ['rewrite-broken-refs'],
  preprocessors: ['tokens-studio'],
  log: { errors: { brokenReferences: 'throw' } },
  source: [
    'src/.core.json',
    ...ALL_PALETTES,
    'src/.scheme/neutral.json',
    'src/.section/normal.json',
    'src/.mode/light.json',
    'src/.breakpoint/desktop.json',
    'src/foundation.json',
  ],
  platforms: {
    js: {
      transformGroup: 'mds/js',
      buildPath: 'dist/',
      files: [
        { destination: 'tokens-refs.js',  format: 'js/foundation-refs' },
        { destination: 'tokens-prims.js', format: 'js/palettes-and-breakpoints' },
        { destination: 'tokens.d.ts',     format: 'ts/foundation-types' },
      ],
    },
  },
});
await sdJsAll.buildAllPlatforms();

// Concatenate the two .js outputs into a single tokens.js, then drop intermediates.
writeFileSync(
  'dist/tokens.js',
  readFileSync('dist/tokens-refs.js', 'utf8') + readFileSync('dist/tokens-prims.js', 'utf8'),
);
unlinkSync('dist/tokens-refs.js');
unlinkSync('dist/tokens-prims.js');

console.log('✓ tokens built');
