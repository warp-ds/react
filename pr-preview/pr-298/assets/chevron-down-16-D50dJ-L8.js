import{R as f}from"./index-wSCK2UMg.js";import{i as l}from"./index-CO0CvHzQ.js";var p={},m=Object.defineProperty,s=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,i=(r,e,n)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,_=(r,e)=>{for(var n in e||(e={}))w.call(e,n)&&i(r,n,e[n]);if(s)for(var n of s(e))h.call(e,n)&&i(r,n,e[n]);return r},g=JSON.parse('{"icon.title.chevron-down":"Nedoverpil"}'),b=JSON.parse('{"icon.title.chevron-down":"Downward arrow"}'),O=JSON.parse('{"icon.title.chevron-down":"Nuoli alaspäin"}'),y=JSON.parse('{"icon.title.chevron-down":"Pil nedad"}'),c=["en","nb","fi","da","sv"],d="en",N=()=>{var r;let e;switch((r=process==null?void 0:p)==null?void 0:r.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},u=()=>{var r;const e=(r=document==null?void 0:document.location)==null?void 0:r.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":d},a=r=>c.find(e=>r===e||r.toLowerCase().includes(e))||u();function k(){var r;if(typeof window>"u"){const e=N();return a(e)}try{const e=(r=document==null?void 0:document.documentElement)==null?void 0:r.lang,n=u();return c.includes(e)?a(e??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),a(n))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),d}}var L=(r,e,n,o,t)=>r==="nb"?n:r==="fi"?o:r==="da"?t:e,P=(r,e,n,o)=>{const t=k(),v=L(t,r,e,n,o);l.load(t,v),l.activate(t)};P(b,g,O,y);var S=l.t({message:"Downward arrow",id:"icon.title.chevron-down",comment:"Title for chevron-down icon"}),B=r=>f.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${S}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.667 5.333 5.5 5.5 5.5-5.5"></path>`}},r)),E=B;export{E as c};
