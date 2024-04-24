import react from '@vitejs/plugin-react';
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import { classes } from '@warp-ds/css/component-classes/classes';

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
      exclude: ['**.json'],
      coverage: {
        cleanOnRerun: true,
        reporter: ['text'],
        exclude: [
          "**.json",
          "dev/**",
          "storybook-static/**",
          ".storybook/**",
          "packages/**/stories",
          "packages/**/src/locales",
          "esbuild.mjs",
          "lingui.config.ts",
          "@types",
          "tests/",
          "packages/**/src/props.*",
          "packages/**/src/index.*"
        ],
      },
    },
  };
}
