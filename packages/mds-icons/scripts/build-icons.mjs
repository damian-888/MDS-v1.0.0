import { readFile, writeFile, mkdir, readdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { transform } from '@svgr/core';
import svgoPlugin from '@svgr/plugin-svgo';
import jsxPlugin from '@svgr/plugin-jsx';
import template from './icon-template.mjs';
import chokidar from 'chokidar';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = join(__dirname, '..');
const SVG_DIR = join(ROOT, 'src/svg');
const OUT_DIR = join(ROOT, 'src/generated');

const toPascalCase = (s) =>
  s.replace(/(^|-|_)([a-z])/g, (_, __, c) => c.toUpperCase()).replace(/[^a-zA-Z0-9]/g, '');

async function buildOne(svgPath) {
  const name = basename(svgPath, '.svg');
  const componentName = toPascalCase(name);
  const svgCode = await readFile(svgPath, 'utf8');
  const tsx = await transform(
    svgCode,
    {
      plugins: [svgoPlugin, jsxPlugin],
      typescript: true,
      jsxRuntime: 'automatic',
      ref: true,
      expandProps: 'end',
      titleProp: true,
      svgProps: {
        width: '{size}',
        height: '{size}',
        'aria-hidden': '{title ? undefined : true}',
        role: '{title ? "img" : undefined}',
      },
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: { overrides: { removeViewBox: false } },
          },
          { name: 'removeDimensions' },
          {
            name: 'convertColors',
            params: { currentColor: true },
          },
        ],
      },
      template,
    },
    { componentName },
  );
  return { componentName, tsx };
}

async function buildAll() {
  await mkdir(OUT_DIR, { recursive: true });
  // Keep src/generated/types.ts in sync with src/types.ts so all generated
  // code imports from a single relative path and the Vite dts plugin emits
  // types.d.ts inside dist/ rather than at the package root.
  await copyFile(join(ROOT, 'src/types.ts'), join(OUT_DIR, 'types.ts'));
  if (!existsSync(SVG_DIR)) {
    console.error(`✗ ${SVG_DIR} does not exist`);
    process.exit(1);
  }
  const files = (await readdir(SVG_DIR)).filter((f) => f.endsWith('.svg'));
  if (files.length === 0) {
    console.warn('⚠ no SVGs in src/svg/; skipping');
    return;
  }
  // Build per-icon TSX files (internal building blocks for MDSIcon).
  const built = [];
  for (const f of files) {
    const { componentName, tsx } = await buildOne(join(SVG_DIR, f));
    await writeFile(join(OUT_DIR, `${componentName}.tsx`), tsx);
    built.push({ componentName, kebabName: basename(f, '.svg') });
  }

  // Build the lazy registry. Each icon is a dynamic import so consumers
  // get per-icon chunks (the consumer-facing wrapper MDSIcon lives in
  // @mds/components). The single public artifact here is `registry` + `MDSIconName`.
  const lazyDecls = built
    .map(({ componentName }) => `const ${componentName} = lazy(() => import('./${componentName}').then(m => ({ default: m.${componentName} })));`)
    .join('\n');
  const registryEntries = built.map(({ componentName, kebabName }) => `  '${kebabName}': ${componentName},`).join('\n');
  const nameUnion = built.map(({ kebabName }) => `  | '${kebabName}'`).join('\n');
  const registry = `import { lazy, type LazyExoticComponent, type ComponentType } from 'react';
import type { MDSIconProps } from './types';

${lazyDecls}

export const iconRegistry = {
${registryEntries}
} as const satisfies Record<string, LazyExoticComponent<ComponentType<MDSIconProps>>>;

export type MDSIconName =
${nameUnion};
`;
  await writeFile(join(OUT_DIR, 'registry.ts'), registry);

  const barrel = [
    `export { iconRegistry } from './registry';`,
    `export type { MDSIconName } from './registry';`,
    `export type { MDSIconProps } from './types';`,
    '',
  ].join('\n');
  await writeFile(join(OUT_DIR, 'index.ts'), barrel);
  console.log(`✓ generated ${built.length} icon(s) and lazy registry`);
}

const watch = process.argv.includes('--watch');
await buildAll();
if (watch) {
  chokidar.watch(SVG_DIR, { ignoreInitial: true }).on('all', async (event, path) => {
    console.log(`[${event}] ${path} → rebuilding icons`);
    try {
      await buildAll();
    } catch (e) {
      console.error(e);
    }
  });
  console.log(`◉ watching ${SVG_DIR}`);
}
