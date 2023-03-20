import mdx from 'vite-plugin-mdx';
import reactRefresh from '@vitejs/plugin-react-refresh';
import slug from 'remark-slug';
import autoLinkHeadings from 'remark-autolink-headings';
import jsxExample from './docs/src/plugins/jsxExample.cjs';
import propTable from './docs/src/plugins/propTable.cjs';
import { presetWarp } from '@warp-ds/uno'
import uno from 'unocss/vite'

export default function config({ mode }) {
  return {
    // base: '/',
    plugins: [
      reactRefresh(),
      mdx.default({
        remarkPlugins: [slug, autoLinkHeadings, jsxExample, propTable],
      }),
      uno({
        presets: [presetWarp({ usePixels: true, usePreflight: true })]
      })
    ],
    build: {
      outDir: 'site',
    },
  };
}
