import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'MDSButton/index': 'src/MDSButton/index.ts',
    'MDSIcon/index': 'src/MDSIcon/index.ts',
    'MDSText/index': 'src/MDSText/index.ts',
    'MDSBadge/index': 'src/MDSBadge/index.ts',
    'MDSAccordion/index': 'src/MDSAccordion/index.ts',
    'MDSBreadcrumb/index': 'src/MDSBreadcrumb/index.ts',
    'MDSFlyout/index': 'src/MDSFlyout/index.ts',
    'MDSBottomNavigation/index': 'src/MDSBottomNavigation/index.ts',
    'MDSImage/index': 'src/MDSImage/index.ts',
    'MDSCard/index': 'src/MDSCard/index.ts',
    'MDSCheckbox/index': 'src/MDSCheckbox/index.ts',
    'MDSChipDismissible/index': 'src/MDSChipDismissible/index.ts',
    'MDSChipToggle/index': 'src/MDSChipToggle/index.ts',
    'MDSChipFilter/index': 'src/MDSChipFilter/index.ts',
    'MDSChatBubble/index': 'src/MDSChatBubble/index.ts',
    'MDSDivider/index': 'src/MDSDivider/index.ts',
    'MDSLink/index': 'src/MDSLink/index.ts',
    'MDSInputField/index': 'src/MDSInputField/index.ts',
    'MDSDropdownSelect/index': 'src/MDSDropdownSelect/index.ts',
    'MDSMenu/index': 'src/MDSMenu/index.ts',
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
