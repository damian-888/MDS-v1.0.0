// packages/mds-tokens/scripts/verify-build.mjs
//
// Post-build assertions. Run after style-dictionary.config.mjs.
// Exits 1 on any failed assertion.

import { strict as assert } from 'node:assert';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// `../dist/` because this script lives in `scripts/` and dist is at the package root.
const DIST = new URL('../dist/', import.meta.url).pathname;

function read(relative) {
  const path = join(DIST, relative);
  assert.ok(existsSync(path), `expected file: dist/${relative}`);
  return readFileSync(path, 'utf8');
}

function assertNoUnresolvedRefs(css, file) {
  const matches = css.match(/\{[a-z][a-z0-9.-]*\}/g);
  assert.equal(matches, null, `dist/${file} has unresolved refs: ${matches?.slice(0, 3).join(', ')}`);
}

function assertContains(css, snippet, file) {
  assert.ok(css.includes(snippet), `dist/${file} missing expected content: ${snippet}`);
}

// Each task appends a check() block below.
const checks = [];

checks.push(() => {
  const css = read('chunks/core.css');
  assertNoUnresolvedRefs(css, 'chunks/core.css');
  assertContains(css, ':root {', 'chunks/core.css');
  assertContains(css, '--mds-white-colours-basic-background:', 'chunks/core.css');
  assertContains(css, '--mds-black-colours-basic-background:', 'chunks/core.css');
  assertContains(css, '--mds-green-light-colours-basic-background:', 'chunks/core.css');
  assertContains(css, '--mds-core-colours-base-white:', 'chunks/core.css');
});

checks.push(() => {
  const css = read('chunks/foundation.css');
  assertNoUnresolvedRefs(css, 'chunks/foundation.css');
  // Foundation must redeclare on each override scope so var() chains re-resolve.
  // Single combined selector covers :root + any element with override attributes.
  assertContains(css, ':root, [data-mode], [data-section], [data-scheme] {', 'chunks/foundation.css');
  // Foundation colour tokens chain to mode
  assertContains(
    css,
    '--mds-colours-basic-background: var(--mds-mode-colours-basic-background);',
    'chunks/foundation.css',
  );
  // Foundation radius/layout tokens chain to breakpoint
  assertContains(
    css,
    '--mds-radius-medium: var(--mds-breakpoint-radius-medium);',
    'chunks/foundation.css',
  );
  // Typography sub-property tokens chain to breakpoint
  assertContains(
    css,
    '--mds-typography-h1-font-size: var(--mds-breakpoint-typography-h1-font-size);',
    'chunks/foundation.css',
  );
});

checks.push(() => {
  const css = read('chunks/schemes.css');
  assertNoUnresolvedRefs(css, 'chunks/schemes.css');
  // Default block (neutral) uses multi-selector list so foundation chains can
  // re-resolve on every override scope.
  assertContains(css, ':root, [data-mode], [data-section], [data-scheme] {', 'chunks/schemes.css');
  // Each named scheme has a block (matched as a substring — actual selector
  // includes descendant terms for cross-axis composition).
  for (const name of ['brand', 'success', 'error', 'warning', 'info', 'neutral']) {
    assertContains(css, `[data-scheme="${name}"]`, 'chunks/schemes.css');
  }
  // Neutral chains to white (light/normal slot)
  assertContains(
    css,
    '--mds-scheme-light-normal-colours-basic-background: var(--mds-white-colours-basic-background);',
    'chunks/schemes.css',
  );
  // Success chains to green
  assertContains(
    css,
    '--mds-scheme-light-normal-colours-basic-background: var(--mds-green-light-colours-basic-background);',
    'chunks/schemes.css',
  );
});

checks.push(() => {
  const css = read('chunks/sections.css');
  assertNoUnresolvedRefs(css, 'chunks/sections.css');
  // Default block uses multi-selector list (see schemes.css comment).
  assertContains(css, ':root, [data-mode], [data-section], [data-scheme] {', 'chunks/sections.css');
  assertContains(css, '[data-section="normal"]', 'chunks/sections.css');
  assertContains(css, '[data-section="subtle"]', 'chunks/sections.css');
  // Section.light tokens chain to scheme.light.{normal|subtle}
  assertContains(
    css,
    '--mds-section-light-colours-basic-background: var(--mds-scheme-light-normal-colours-basic-background);',
    'chunks/sections.css',
  );
});

checks.push(() => {
  const css = read('chunks/modes.css');
  assertNoUnresolvedRefs(css, 'chunks/modes.css');
  // All 4 expected blocks in the right order. Each block uses a multi-selector
  // list (default + descendants) so chain resolution works across nested overrides.
  const positions = [
    css.indexOf(':root, [data-mode], [data-section], [data-scheme] {'),
    css.indexOf('@media (prefers-color-scheme: dark)'),
    css.indexOf('[data-mode="dark"],'),     // first selector in the list
    css.indexOf('[data-mode="light"],'),
  ];
  for (const p of positions) assert.ok(p >= 0, `mode chunk missing a required block`);
  for (let i = 1; i < positions.length; i++) {
    assert.ok(
      positions[i] > positions[i - 1],
      `mode chunk block order wrong; [data-mode="light"] must come last`,
    );
  }
  // Light chains to section.light, dark chains to section.dark
  assertContains(
    css,
    '--mds-mode-colours-basic-background: var(--mds-section-light-colours-basic-background);',
    'chunks/modes.css',
  );
  assertContains(
    css,
    '--mds-mode-colours-basic-background: var(--mds-section-dark-colours-basic-background);',
    'chunks/modes.css',
  );
});

checks.push(() => {
  const css = read('chunks/breakpoints.css');
  assertNoUnresolvedRefs(css, 'chunks/breakpoints.css');
  assertContains(css, ':root {', 'chunks/breakpoints.css');
  for (const px of [768, 1040, 1440]) {
    assertContains(css, `@media (min-width: ${px}px)`, 'chunks/breakpoints.css');
  }
  // Sample breakpoint var present in :root
  assertContains(css, '--mds-breakpoint-typography-h1-font-size:', 'chunks/breakpoints.css');
});

checks.push(() => {
  const css = read('typography.css');
  // Both vars and utility classes present
  assertContains(css, '--mds-typography-h1-font-size:', 'typography.css');
  assertContains(css, '.mds-typography-h1 {', 'typography.css');
  assertContains(css, '.mds-typography-body {', 'typography.css');
  // CRITICAL: typography vars chain to breakpoint vars (responsive sizing).
  // If this check fails, typography sizes are baked literals — typography
  // won't shrink/grow across viewports.
  assertContains(
    css,
    '--mds-typography-h1-font-size: var(--mds-breakpoint-typography-h1-font-size);',
    'typography.css',
  );
  // Utility class includes the expected sub-properties
  const h1Block = css.match(/\.mds-typography-h1 \{[^}]+\}/)?.[0];
  assert.ok(h1Block, 'typography.css missing .mds-typography-h1 block');
  for (const prop of ['font-size:', 'line-height:', 'font-family:', 'font-weight:']) {
    assert.ok(h1Block.includes(prop), `.mds-typography-h1 missing ${prop}`);
  }
});

checks.push(() => {
  const css = read('tokens.css');
  assertNoUnresolvedRefs(css, 'tokens.css');
  // Bundled file contains content from each chunk (sample one var per chunk)
  assertContains(css, '--mds-white-colours-basic-background:', 'tokens.css');                   // core
  assertContains(css, '[data-scheme="error"]', 'tokens.css');                                   // schemes
  assertContains(css, '[data-section="subtle"]', 'tokens.css');                                 // sections
  assertContains(css, '@media (prefers-color-scheme: dark)', 'tokens.css');                     // modes
  assertContains(css, '@media (min-width: 1440px)', 'tokens.css');                              // breakpoints
  assertContains(css, '--mds-colours-basic-background: var(--mds-mode-colours-basic-background)', 'tokens.css'); // foundation
  // Cascade order check: foundation must come AFTER mode/section/scheme blocks
  const foundationStart = css.indexOf('--mds-colours-basic-background:');
  const modesStart      = css.indexOf('[data-mode="dark"]');
  assert.ok(foundationStart > modesStart, 'foundation must follow modes in tokens.css');
});

checks.push(() => {
  // Use dynamic import so we always read the latest build
  return import(new URL('../dist/tokens.js', import.meta.url).href).then((m) => {
    // Foundation refs are CSS var strings
    assert.equal(typeof m.colours, 'object', 'tokens.js missing colours export');
    assert.match(
      m.colours.basic.background,
      /^var\(--mds-colours-basic-background\)$/,
      'colours.basic.background should be a CSS var ref',
    );
    // Numeric primitives — palettes resolved to hex
    assert.equal(typeof m.palettes, 'object', 'tokens.js missing palettes export');
    assert.equal(
      m.palettes.white.colours.basic.background.toLowerCase(),
      '#ffffff',
      'palettes.white.colours.basic.background should resolve to #ffffff',
    );
    // Numeric primitives — breakpoints
    assert.deepEqual(m.breakpoints, { mobile: 360, tablet: 768, laptop: 1040, desktop: 1440 });
  });
});

checks.push(() => {
  const dts = read('tokens.d.ts');
  // d.ts has nested types matching the JS shape (nested object, not flat exports)
  assertContains(dts, 'export const colours: {', 'tokens.d.ts');
  assertContains(dts, '"basic":', 'tokens.d.ts');
  assertContains(dts, '"background": string;', 'tokens.d.ts');
  // Match the runtime shape: tokens.js also exports palettes + breakpoints,
  // so the .d.ts must declare them or TS consumers will get import errors.
  assertContains(dts, 'export const palettes:', 'tokens.d.ts');
  assertContains(dts, 'export const breakpoints:', 'tokens.d.ts');
});

for (const check of checks) {
  try {
    await check();
  } catch (e) {
    console.error('✗', e.message);
    process.exit(1);
  }
}

console.log(`✓ verify-build: ${checks.length} checks passed`);
