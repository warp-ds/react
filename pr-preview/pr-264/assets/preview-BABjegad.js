const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-PKQXORMH-BLMrxFK8.js","./iframe-hWlyIW8V.js","./index-RYns6xqu.js","./react-18-NnFscLW9.js","./inheritsLoose-Bt6Ne3b9.js","./isArray-CTBVxGfs.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-hWlyIW8V.js";import"../sb-preview/runtime.js";const{global:i}=__STORYBOOK_MODULE_GLOBAL__;var s=Object.entries(i.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-BLMrxFK8.js").then(r=>r.ai),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>s[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};