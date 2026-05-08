// packages/mds-tokens/build/sd-setup.mjs
//
// Central place to register everything Style Dictionary needs globally:
//   - Tokens Studio preprocessor + transforms (via sd-transforms.register)
//   - Two custom transform groups: mds/css and mds/js
//   - One custom parser: rewrite-broken-refs
//   - Two custom formats: typography/classes and css/variables-no-selector

import StyleDictionary from 'style-dictionary';
import { register, getTransforms } from '@tokens-studio/sd-transforms';

let setupDone = false;
export async function setupStyleDictionary() {
  if (setupDone) return;
  setupDone = true;

  // 1. Tokens Studio preprocessor + base transforms
  await register(StyleDictionary);

  // 2. Custom name transform: prefix every token with 'mds'
  StyleDictionary.registerTransform({
    name: 'name/mds-prefix',
    type: 'name',
    transform: (token) => `mds-${token.name}`,
  });

  // 3. Custom transform groups
  StyleDictionary.registerTransformGroup({
    name: 'mds/css',
    transforms: [
      ...getTransforms({ platform: 'css' }),
      'name/kebab',          // SD built-in: token.path → kebab-case name
      'name/mds-prefix',     // local: prepend 'mds-'
    ],
  });

  // Note: 'css' platform here is intentional, not a typo. We want value
  // transforms that produce hex colour strings (`#ffffff`) so they can be
  // emitted directly into tokens.js. The 'js' platform would emit RGB
  // objects/arrays which is harder for consumers to use.
  StyleDictionary.registerTransformGroup({
    name: 'mds/js',
    transforms: [
      ...getTransforms({ platform: 'css' }),
      'name/camel',          // SD built-in: token.path → camelCase name
    ],
  });

  // 4. Parser: rewrite known source quirks
  //    - Fix malformed ref: "{breakpoint.radius.full"  →  "{breakpoint.radius.full}"
  //    - Normalise legacy Tokens Studio keys "value"/"type" → DTCG "$value"/"$type"
  //      (foundation.json + most variant files still use legacy form; without this
  //       the tokens-studio preprocessor silently drops them when DTCG files coexist)
  StyleDictionary.registerParser({
    name: 'rewrite-broken-refs',
    pattern: /\.json$/,
    parser: ({ contents }) => {
      const rewritten = contents
        .replace(/"(\{[a-z0-9][a-z0-9.\-]*[^}"])"/g, '"$1}"')
        .replace(/"value"(\s*):/g, '"$value"$1:')
        .replace(/"type"(\s*):/g, '"$type"$1:');
      return JSON.parse(rewritten);
    },
  });

  // 5. Custom format: typography utility classes
  //    Foundation typography tokens are flat sub-properties (h1.font-size, h1.font-weight, …).
  //    Group by style name (path[1]) and emit:
  //      - One CSS var per sub-property
  //      - One .mds-typography-<style> class bundling the props that map to real CSS
  const TYPO_CSS_PROPS = {
    'font-size': 'font-size',
    'line-height': 'line-height',
    'letter-spacing': 'letter-spacing',
    'paragraph-spacing': null,            // no direct CSS property
    'font-family': 'font-family',
    'font-weight': 'font-weight',
    'text-decoration': 'text-decoration',
  };
  StyleDictionary.registerFormat({
    name: 'typography/classes',
    format: ({ dictionary }) => {
      const flat = dictionary.allTokens.filter(
        (t) => t.filePath.includes('foundation.json') && t.path[0] === 'typography',
      );
      if (flat.length === 0) return '/* no typography tokens found */\n';

      const groups = new Map();
      for (const t of flat) {
        const style = t.path[1];
        if (!groups.has(style)) groups.set(style, []);
        groups.get(style).push(t);
      }

      const varLines = [':root {'];
      const classes = [];
      for (const [style, tokens] of groups) {
        for (const t of tokens) {
          // CRITICAL: emit refs (var(--mds-breakpoint-…)), not resolved values.
          // Foundation typography tokens reference breakpoint.* — preserving the
          // ref chain is what makes typography responsive across viewports.
          const originalValue = t.original?.$value ?? t.original?.value;
          const value = isRef(originalValue)
            ? resolveCssRef(originalValue, dictionary)
            : (t.$value ?? t.value);
          varLines.push(`  --${t.name}: ${value};`);
        }
        const props = tokens
          .filter((t) => TYPO_CSS_PROPS[t.path[2]])
          .map((t) => `  ${TYPO_CSS_PROPS[t.path[2]]}: var(--${t.name});`);
        if (props.length) {
          classes.push(`.mds-typography-${style} {\n${props.join('\n')}\n}`);
        }
      }
      varLines.push('}');
      return [...varLines, '', ...classes, ''].join('\n');
    },
  });

  // 6. Custom format: CSS variables with no selector wrapper
  //    Used when we want to wrap the body in our own selector or @media block
  //    during the orchestration phase.
  StyleDictionary.registerFormat({
    name: 'css/variables-no-selector',
    format: ({ dictionary, options = {} }) => {
      const lines = [];
      // When chainThroughFiles is provided, var() refs to tokens whose
      // filePath ends with any of those paths are followed to the next
      // token along the ref chain — useful for skipping intermediate-only
      // layers (e.g. functional.* binding files) so the var() chain
      // resolves directly to the leaf palette token.
      const skipFiles = options.chainThroughFiles ?? null;
      for (const t of dictionary.allTokens) {
        const originalValue = t.original?.$value ?? t.original?.value;
        const value = options.outputReferences && isRef(originalValue)
          ? resolveCssRef(originalValue, dictionary, skipFiles)
          : (t.$value ?? t.value);
        lines.push(`  --${t.name}: ${value};`);
      }
      return lines.join('\n') + '\n';
    },
  });
}

// Helpers (top-level, used by both typography/classes and css/variables-no-selector).
function isRef(value) {
  return typeof value === 'string' && value.includes('{');
}
// If the original value is "{some.token.path}", rewrite each ref to
// "var(--mds-some-token-path)". Non-ref text is preserved verbatim.
//
// Uses unfilteredAllTokens so refs can target tokens that were filtered out
// of this format's output (e.g. foundation refs to mode.* / breakpoint.*
// when only foundation.json tokens are emitted).
//
// When `skipFiles` is a non-empty array, any ref that lands on a token
// whose `filePath` endsWith one of the listed paths is chained through to
// the next token along the ref path. This lets the orchestrator skip
// intermediate-only binding layers (e.g. functional.* bindings) so the
// var() chain resolves directly to the leaf palette token.
function resolveCssRef(originalValue, dictionary, skipFiles) {
  if (typeof originalValue !== 'string') return originalValue;
  const pool = dictionary.unfilteredAllTokens ?? dictionary.allTokens;
  const isSkipped = (token) =>
    Array.isArray(skipFiles) &&
    skipFiles.some((s) => token.filePath.endsWith(s));
  return originalValue.replace(/\{([^}]+)\}/g, (_, ref) => {
    let refToken = pool.find((t) => t.path.join('.') === ref);
    if (!refToken) throw new Error(`unresolved CSS ref: {${ref}}`);
    const seen = new Set();
    while (isSkipped(refToken)) {
      if (seen.has(refToken.name)) break; // ref cycle guard
      seen.add(refToken.name);
      const next = refToken.original?.$value ?? refToken.original?.value;
      if (typeof next !== 'string' || !next.includes('{')) break;
      const nextRef = next.match(/^\{([^}]+)\}$/)?.[1];
      if (!nextRef) break; // composite values (e.g. typography objects) — stop
      const nextToken = pool.find((t) => t.path.join('.') === nextRef);
      if (!nextToken) break;
      refToken = nextToken;
    }
    return `var(--${refToken.name})`;
  });
}
