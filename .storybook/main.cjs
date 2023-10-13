const { mergeConfig } = require('vite');
const { dirname } = require('path');

module.exports = {
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
    autodocs: true
  }
};