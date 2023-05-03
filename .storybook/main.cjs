module.exports = {
  stories: ['../packages/**/*.stories.[tj]sx'],
  addons: ['@storybook/addon-actions/register' /* '@storybook/addon-postcss'*/, '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  webpackFinal: async config => {
    config.resolve.alias['@warp-ds/core/attention'] = require.resolve('../node_modules/@warp-ds/core/dist/attention/index.js');
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules/,
      use: [{
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require('@babel/preset-env').default]
        }
      }]
    });
    config.resolve.extensions.push('.js');
    const uno = await import('@unocss/webpack');
    const {
      presetWarp
    } = await import('@warp-ds/uno');
    const {
      classes
    } = await import('@warp-ds/component-classes/classes');
    config.plugins.push(uno.default({
      presets: [presetWarp({
        usePreflight: true
      })],
      safelist: classes
    }));
    return config;
  },
  docs: {
    autodocs: true
  }
};