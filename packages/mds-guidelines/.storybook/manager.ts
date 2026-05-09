import { addons } from 'storybook/manager-api';
import { mdsThemeLight, mdsThemeDark } from './theme';
import './themeToolbar';

type ThemePref = 'light' | 'dark' | 'auto';
const STORAGE_KEY = 'mds-theme';

function readPref(): ThemePref {
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === 'light' || v === 'dark' || v === 'auto' ? v : 'auto';
}

function resolveTheme() {
  const pref = readPref();
  if (pref === 'light') return mdsThemeLight;
  if (pref === 'dark') return mdsThemeDark;
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return dark ? mdsThemeDark : mdsThemeLight;
}

addons.setConfig({ theme: resolveTheme() });
