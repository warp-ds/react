import react from '@vitejs/plugin-react';
import { presetWarp } from '@warp-ds/uno'
import uno from 'unocss/vite'
import { classes } from '@warp-ds/component-classes/classes';


export default function config() {
  return {
    // base: '/',
    plugins: [
      uno({
        presets: [presetWarp({ usePreflight: true })],
        safelist: classes,
      }),
      react(),
    ],
    build: {
      outDir: 'site',
    },
  };
}
