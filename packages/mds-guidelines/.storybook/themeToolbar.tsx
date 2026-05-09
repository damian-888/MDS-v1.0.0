/**
 * MDS Storybook manager toolbar — cycles theme preference (auto/light/dark).
 *
 * Stores the user's choice in localStorage under 'mds-theme'. On click,
 * cycles auto → light → dark → auto and reloads the page so manager.ts
 * re-resolves the active theme.
 *
 * Why reload: Storybook's manager doesn't cleanly re-evaluate `theme` after
 * the initial `addons.setConfig` call. A full reload is the correct path
 * for a docs site.
 */

// React must be in scope: Storybook's manager bundler uses the classic JSX
// transform (compiles <X /> to React.createElement(X)) regardless of tsconfig
// `jsx: "react-jsx"`. The namespace import + React.FC type usage keeps both
// the bundler and `noUnusedLocals` happy.
import * as React from 'react';
import { addons, types } from 'storybook/manager-api';
import { IconButton } from 'storybook/internal/components';

const STORAGE_KEY = 'mds-theme';
const ADDON_ID = 'mds/theme-toolbar';
const TOOL_ID = `${ADDON_ID}/tool`;

type ThemePref = 'light' | 'dark' | 'auto';

function readPref(): ThemePref {
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === 'light' || v === 'dark' || v === 'auto' ? v : 'auto';
}

function nextPref(current: ThemePref): ThemePref {
  if (current === 'auto') return 'light';
  if (current === 'light') return 'dark';
  return 'auto';
}

const TITLES: Record<ThemePref, string> = {
  auto: 'Theme: auto (matches OS)',
  light: 'Theme: light',
  dark: 'Theme: dark',
};

const Icons: Record<ThemePref, React.FC> = {
  auto: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden focusable={false}>
      <circle cx="7" cy="7" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 1 A6 6 0 0 1 7 13 Z" fill="currentColor" />
    </svg>
  ),
  light: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden focusable={false}>
      <circle cx="7" cy="7" r="3" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <line x1="7" y1="0.5" x2="7" y2="2" />
        <line x1="7" y1="12" x2="7" y2="13.5" />
        <line x1="0.5" y1="7" x2="2" y2="7" />
        <line x1="12" y1="7" x2="13.5" y2="7" />
        <line x1="2.3" y1="2.3" x2="3.4" y2="3.4" />
        <line x1="10.6" y1="10.6" x2="11.7" y2="11.7" />
        <line x1="11.7" y1="2.3" x2="10.6" y2="3.4" />
        <line x1="3.4" y1="10.6" x2="2.3" y2="11.7" />
      </g>
    </svg>
  ),
  dark: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden focusable={false}>
      <path
        d="M11.5 8.5 A5 5 0 0 1 5.5 2.5 A5.5 5.5 0 1 0 11.5 8.5 Z"
        fill="currentColor"
      />
    </svg>
  ),
};

const ThemeTool: React.FC = () => {
  const pref = readPref();
  const Icon = Icons[pref];
  const handleClick = () => {
    const next = nextPref(pref);
    window.localStorage.setItem(STORAGE_KEY, next);
    window.location.reload();
  };
  return (
    <IconButton ariaLabel={TITLES[pref]} onClick={handleClick}>
      <Icon />
    </IconButton>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Theme',
    render: () => <ThemeTool />,
  });
});
