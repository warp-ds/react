import { dirname } from 'node:path';
import { mergeConfig } from 'vite';

export default {
  stories: ['../packages/**/*.stories.[tj]sx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-actions', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    interactionsDebugger: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      root: dirname(require.resolve('@storybook/builder-vite')),
      server: { fsServe: undefined },
    });
  },
  docs: {
    // set to 'true' when we have autodocs content generated from our stories properly
    autodocs: false,
  },
};
