import react from '@vitejs/plugin-react';
import { presetWarp } from '@warp-ds/uno'
import uno from 'unocss/vite'


export default function config() {
  return {
    // base: '/',
    plugins: [
      uno({
        presets: [presetWarp({ usePreflight: true })],
      }),
      react(),
    ],
    build: {
      outDir: 'site',
    },
  };
}
