import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'MDSButton/index': 'src/MDSButton/index.ts',
    'MDSIcon/index': 'src/MDSIcon/index.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ['react', 'react-dom', '@base-ui-components/react', '@mds/icons'],
  loader: {
    '.css': 'local-css',
  },
  esbuildOptions(options) {
    options.banner = { js: '"use client";' };
  },
});
