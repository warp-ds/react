import { mergeConfig } from 'vite';
import { dirname } from 'path';

export default {
  stories: ['../packages/**/*.stories.[tj]sx'],
  addons: ['@storybook/addon-actions'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      root: dirname(require.resolve('@storybook/builder-vite')),
      server: { fsServe: undefined },
    });
  },
  docs: {
    // set to 'true' when we have autodocs content generated from our stories properly
    autodocs: false
  }
};