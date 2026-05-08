import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

// The registry uses React.lazy(() => import('./Foo')) for each icon. For those
// dynamic imports to actually split in the consumer's bundle, each icon must
// exist as its own module in dist/ — so we use preserveModules.
export default defineConfig({
  build: {
    lib: {
      entry: { index: resolve('src/generated/index.ts') },
      formats: ['es'],
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src/generated',
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [
    dts({
      entryRoot: 'src/generated',
      outDir: 'dist',
      include: ['src/generated/**/*.ts', 'src/generated/**/*.tsx'],
    }),
  ],
});
