/**
 * Manager-iframe runtime contrast fix for accent-bg buttons.
 *
 * Storybook v10's outline-variant Button (the default) inherits its text
 * color from `theme.input.color` (= our `inputTextColor`) and its icon color
 * is left to cascade. With `buttonBg = accent`, both render against the
 * accent surface in the wrong color and become unreadable. Storybook's
 * ThemeVars exposes no `buttonTextColor` knob, so we detect those buttons
 * by their computed background and override the foreground to the matching
 * `text-on-accent` token.
 *
 * Source-of-truth values are imported from @mds/tokens so this stays in
 * sync with palette changes.
 */

import { palettes } from '@mds/tokens';

function hexToRgb(hex: string): string {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

const ACCENT_TO_ON_ACCENT: Record<string, string> = {
  [hexToRgb(palettes['white'].colours.basic.accent)]:
    palettes['white'].colours.basic['text-on-accent'],
  [hexToRgb(palettes['black'].colours.basic.accent)]:
    palettes['black'].colours.basic['text-on-accent'],
};

function applyContrast(el: HTMLElement) {
  const onAccent = ACCENT_TO_ON_ACCENT[getComputedStyle(el).backgroundColor];
  if (onAccent) {
    el.style.color = onAccent;
    el.querySelectorAll<SVGElement>('svg').forEach((svg) => {
      svg.style.color = onAccent;
    });
  } else if (el.style.color) {
    el.style.color = '';
    el.querySelectorAll<SVGElement>('svg').forEach((svg) => {
      svg.style.color = '';
    });
  }
}

function refresh() {
  document
    .querySelectorAll<HTMLButtonElement>('button')
    .forEach(applyContrast);
}

let scheduled = false;
function schedule() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    refresh();
  });
}

export function installAccentContrast() {
  function start() {
    refresh();
    new MutationObserver(schedule).observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style'],
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
}
