import{i as s}from"./index-XDhxfy0k.js";var l={};const u=["en","nb","fi","da","sv"],i="en",a=e=>u.find(t=>e===t||e.toLowerCase().includes(t))||i;function f(){if(typeof window>"u"){const e=l.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return a(e)}try{const e=document.documentElement.lang;return a(e)}catch(e){return console.warn("could not detect locale, falling back to source locale",e),i}}const m=(e,t,o,r,c,n)=>e==="nb"?o:e==="fi"?r:e==="da"?c:e==="sv"?n:t,v=(e,t,o,r,c)=>{const n=f(),d=m(n,e,t,o,r,c);s.load(n,d),s.activate(n)};export{v as a};
