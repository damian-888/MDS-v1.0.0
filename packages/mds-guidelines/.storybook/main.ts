import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: { name: '@storybook/react-vite', options: {} },
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(ts|tsx)',
  ],
  addons: ['@storybook/addon-docs'],
  // Serve the @mds/tokens font files at /fonts/* so the manager iframe (which
  // can't resolve `@mds/tokens/fonts.css` through its esbuild bundler — no
  // .otf loader) can load Manyone / Akkurat Pro via inline @font-face rules
  // in manager.css.
  staticDirs: [{ from: '../../mds-tokens/dist/fonts', to: '/fonts' }],
  docs: { defaultName: 'Docs' },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};

export default config;
