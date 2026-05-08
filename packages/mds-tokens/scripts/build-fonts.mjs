import { mkdir, readdir, copyFile, writeFile } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = join(__dirname, '..');
const FONTS_SRC = join(ROOT, 'fonts');
const DIST = join(ROOT, 'dist');
const FONTS_DIST = join(DIST, 'fonts');

const SUPPORTED_EXT = new Set(['.woff2', '.woff', '.otf', '.ttf']);

// map of filename style suffix → { weight, style }
// match is case-insensitive, italic detected as trailing "italic"
const WEIGHTS = [
  ['hairline', 100], ['thin', 100],
  ['extralight', 200], ['ultralight', 200],
  ['light', 300],
  ['regular', 400], ['normal', 400], ['book', 400],
  ['medium', 500],
  ['semibold', 600], ['demibold', 600],
  ['bold', 700],
  ['extrabold', 800], ['ultrabold', 800], ['heavy', 800],
  ['black', 900],
];

function parseStyleToken(styleToken) {
  const lower = styleToken.toLowerCase();
  const italic = lower.endsWith('italic');
  const weightWord = italic ? lower.replace(/italic$/, '') : lower;
  const weight = WEIGHTS.find(([w]) => w === weightWord)?.[1] ?? 400;
  return { weight, style: italic ? 'italic' : 'normal' };
}

function splitPascalCase(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/_/g, ' ').trim();
}

function parseFilename(name) {
  // Expected: "{Family}-{StyleToken}"
  // Fallback: treat the whole name as family, weight 400 normal
  const [familyRaw, styleRaw] = name.split('-');
  const family = splitPascalCase(familyRaw);
  if (!styleRaw) return { family, weight: 400, style: 'normal' };
  return { family, ...parseStyleToken(styleRaw) };
}

const FORMAT_BY_EXT = {
  '.woff2': 'woff2',
  '.woff': 'woff',
  '.otf': 'opentype',
  '.ttf': 'truetype',
};

async function buildFonts() {
  const files = (await readdir(FONTS_SRC).catch(() => []))
    .filter((f) => SUPPORTED_EXT.has(extname(f).toLowerCase()))
    .sort();

  if (files.length === 0) {
    console.log('⚠ no font files in packages/mds-tokens/fonts/; skipping fonts build');
    return;
  }

  await mkdir(FONTS_DIST, { recursive: true });

  // Copy each font into dist/fonts/ and collect @font-face rules.
  const rules = [];
  for (const file of files) {
    await copyFile(join(FONTS_SRC, file), join(FONTS_DIST, file));
    const ext = extname(file).toLowerCase();
    const stem = basename(file, ext);
    const { family, weight, style } = parseFilename(stem);
    const format = FORMAT_BY_EXT[ext];
    rules.push(
      `@font-face {\n` +
      `  font-family: '${family}';\n` +
      `  font-weight: ${weight};\n` +
      `  font-style: ${style};\n` +
      `  font-display: swap;\n` +
      `  src: url('./fonts/${file}') format('${format}');\n` +
      `}`,
    );
  }

  const fontsCss = rules.join('\n\n') + '\n';
  await writeFile(join(DIST, 'fonts.css'), fontsCss, 'utf8');

  console.log(`✓ wrote ${files.length} @font-face rule(s) to dist/fonts.css`);
}

await buildFonts();
