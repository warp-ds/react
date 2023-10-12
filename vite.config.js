import react from '@vitejs/plugin-react';
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import { classes } from '@warp-ds/css/component-classes/classes';

export default function config() {
  return {
    // base: '/',
    plugins: [
      uno({
        presets: [presetWarp({ skipResets: true })],
        safelist: classes,
      }),
      react(),
    ],
  };
}
