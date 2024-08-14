import react from '@vitejs/plugin-react';
import { classes } from '@warp-ds/css/component-classes/classes';
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';

export default function config(env) {
  return {
    // base: '/',
    plugins: [
      uno({
        presets: [presetWarp({ skipResets: true })],
        safelist: classes,
      }),
      env.mode !== 'test' && react(),
    ],
    test: {
      environment: 'happy-dom',
      globals: true,
      setupFiles: ['./setup.ts'],
      include: ['./tests/components/**'],
      exclude: ['**.json', '**.snap'],
      coverage: {
        cleanOnRerun: true,
        reporter: ['text'],
        exclude: [
          '.storybook/**',
          '@types',
          '**.json',
          'build.js',
          'dev/**',
          'esbuild.js',
          'esbuild.mjs',
          'lingui.config.ts',
          'packages/_helpers/props.ts',
          'packages/**/src/index.*',
          'packages/**/src/locales',
          'packages/**/src/props.*',
          'packages/**/stories',
          'packages/index.ts',
          'storybook-static/**',
          'tests/',
          'tests/components/__snapshots__/**',
          'dist/**',
        ],
      },
    },
  };
}
