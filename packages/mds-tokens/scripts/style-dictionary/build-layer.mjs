// packages/mds-tokens/build/build-layer.mjs
//
// Build one Style Dictionary instance for a single source-file variant
// and return the emitted CSS body (no selector wrapper).
//
// Caller decides what selector / @media to wrap the body in afterwards.

import StyleDictionary from 'style-dictionary';

const PARSERS = ['rewrite-broken-refs'];
const PREPROCESSORS = ['tokens-studio'];
const LOG = { errors: { brokenReferences: 'throw' } };

/**
 * @param {object} opts
 * @param {string[]} opts.sources - paths to JSON files to load (relative to package root)
 * @param {(token: object) => boolean} opts.filter - which tokens to emit
 * @param {boolean} [opts.outputReferences=true]
 * @param {string[]} [opts.chainThroughFiles] - source paths whose tokens are
 *   intermediate-only — when emitting var() refs, chain past tokens whose
 *   filePath endsWith any of these so the chain points at the leaf.
 * @returns {Promise<string>} the emitted CSS body, vars only, no selector
 */
export async function buildLayer({
  sources,
  filter,
  outputReferences = true,
  chainThroughFiles,
}) {
  const sd = new StyleDictionary({
    parsers: PARSERS,
    preprocessors: PREPROCESSORS,
    log: LOG,
    source: sources,
    platforms: {
      css: {
        transformGroup: 'mds/css',
        files: [
          {
            destination: 'unused.css',           // we capture the body, not write to disk
            format: 'css/variables-no-selector',
            options: { outputReferences, chainThroughFiles },
            filter,
          },
        ],
      },
    },
  });

  const result = await sd.formatPlatform('css');
  // formatPlatform returns an array of { destination, output } objects.
  return result[0].output;
}
