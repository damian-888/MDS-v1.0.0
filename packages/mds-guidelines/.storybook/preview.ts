import type { Preview } from '@storybook/react-vite';

import '@mds/tokens/tokens.css';
import './preview.css';

import { ComponentDocs } from '../src/docs-template';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: { page: ComponentDocs },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
