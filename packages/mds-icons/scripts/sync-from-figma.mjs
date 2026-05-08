import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = join(__dirname, '..');
const SVG_DIR = join(ROOT, 'src/svg');

const TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;
const PAGE_ID = process.env.FIGMA_ICONS_PAGE_ID;

if (!TOKEN || !FILE_KEY || !PAGE_ID) {
  console.error(
    '✗ Missing env vars. Set FIGMA_TOKEN, FIGMA_FILE_KEY, FIGMA_ICONS_PAGE_ID in packages/mds-icons/.env (see .env.example).',
  );
  process.exit(1);
}

const kebab = (s) =>
  s
    .trim()
    // Treat common separators (slash, backslash, underscore, whitespace, dot) as hyphens.
    .replace(/[\\/_\s.]+/g, '-')
    // Split PascalCase boundaries: "ChevronDown" → "Chevron-Down".
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    // Drop anything that isn't alphanumeric or hyphen.
    .replace(/[^a-zA-Z0-9-]/g, '')
    // Collapse repeats, trim edges, lowercase.
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();

async function figmaFetch(path) {
  const res = await fetch(`https://api.figma.com/v1${path}`, {
    headers: { 'X-Figma-Token': TOKEN },
  });
  if (!res.ok) throw new Error(`Figma API ${res.status} for ${path}: ${await res.text()}`);
  return res.json();
}

function findComponentsUnder(node, acc = []) {
  if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
    acc.push(node);
  }
  if (node.children) for (const c of node.children) findComponentsUnder(c, acc);
  return acc;
}

async function main() {
  console.log('→ fetching Figma file tree...');
  const file = await figmaFetch(`/files/${FILE_KEY}`);
  const page = file.document.children.find((c) => c.id === PAGE_ID);
  if (!page) {
    console.error(`✗ Page with id ${PAGE_ID} not found in file ${FILE_KEY}`);
    process.exit(1);
  }
  const components = findComponentsUnder(page);
  if (components.length === 0) {
    console.warn('⚠ no components found on icons page');
    return;
  }
  console.log(`→ found ${components.length} icon components; requesting SVG exports...`);
  // The /images endpoint puts all ids in the query string. CloudFront caps URLs
  // around ~8KB, so batch the ids (Figma itself also imposes a 200 reqs/min limit
  // which is plenty). ~100 per batch stays well under the URL limit.
  const BATCH_SIZE = 100;
  const images = {};
  for (let i = 0; i < components.length; i += BATCH_SIZE) {
    const batch = components.slice(i, i + BATCH_SIZE);
    const ids = batch.map((c) => c.id).join(',');
    const res = await figmaFetch(`/images/${FILE_KEY}?ids=${ids}&format=svg`);
    Object.assign(images, res.images || {});
    console.log(`  → batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(components.length / BATCH_SIZE)}: ${batch.length} exported`);
  }
  await mkdir(SVG_DIR, { recursive: true });
  // Download SVGs with bounded concurrency so large icon sets finish quickly
  // without overwhelming the network or the remote host.
  const CONCURRENCY = 10;
  let written = 0;
  let skipped = 0;

  async function downloadOne(c) {
    const url = images[c.id];
    if (!url) {
      console.warn(`⚠ no image URL returned for ${c.name}`);
      skipped++;
      return;
    }
    const filename = `${kebab(c.name)}.svg`;
    const outPath = join(SVG_DIR, filename);
    // Resumable: skip files that already exist from a prior run.
    if (existsSync(outPath)) {
      written++;
      return;
    }
    // Retry transient network failures with exponential backoff.
    for (let attempt = 1; attempt <= 4; attempt++) {
      try {
        const svgRes = await fetch(url);
        if (!svgRes.ok) {
          console.warn(`⚠ HTTP ${svgRes.status} for ${c.name}`);
          skipped++;
          return;
        }
        const svg = await svgRes.text();
        await writeFile(outPath, svg);
        written++;
        return;
      } catch (err) {
        if (attempt === 4) {
          console.warn(`⚠ failed ${c.name} after 4 attempts: ${err.message}`);
          skipped++;
          return;
        }
        await new Promise((r) => setTimeout(r, 500 * 2 ** (attempt - 1)));
      }
    }
  }

  for (let i = 0; i < components.length; i += CONCURRENCY) {
    await Promise.all(components.slice(i, i + CONCURRENCY).map(downloadOne));
    if ((i / CONCURRENCY) % 10 === 0) {
      process.stdout.write(`  ↓ downloaded ${Math.min(i + CONCURRENCY, components.length)}/${components.length}\r`);
    }
  }
  process.stdout.write('\n');
  console.log(`✓ wrote ${written} SVG(s) to ${SVG_DIR}${skipped ? ` (${skipped} skipped)` : ''}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
