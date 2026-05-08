import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ['react', 'react-dom', '@base-ui-components/react'],
  loader: {
    '.css': 'local-css',
  },
  esbuildOptions(options) {
    options.banner = { js: '"use client";' };
  },
});
