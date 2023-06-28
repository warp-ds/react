import mdx from 'vite-plugin-mdx';
import react from '@vitejs/plugin-react';
import slug from 'remark-slug';
import autoLinkHeadings from 'remark-autolink-headings';
import jsxExample from './docs/src/plugins/jsxExample.cjs';
import propTable from './docs/src/plugins/propTable.cjs';
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
      mdx.default({
        remarkPlugins: [slug, autoLinkHeadings, jsxExample, propTable],
      }),
    ],
    build: {
      outDir: 'site',
    },
  };
}
