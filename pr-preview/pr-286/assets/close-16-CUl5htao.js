import{R as m}from"./index-Bf5lAio0.js";import{i as l}from"./index-DPcJZYYW.js";var p={},g=Object.defineProperty,i=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,c=(t,e,r)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,w=(t,e)=>{for(var r in e||(e={}))_.call(e,r)&&c(t,r,e[r]);if(i)for(var r of i(e))h.call(e,r)&&c(t,r,e[r]);return t},b=JSON.parse('{"icon.title.close":["Kryss"]}'),y=JSON.parse('{"icon.title.close":["Cross"]}'),O=JSON.parse('{"icon.title.close":["Rasti"]}'),N=JSON.parse('{"icon.title.close":["Kryds"]}'),k=JSON.parse('{"icon.title.close":["Kryss"]}'),u=["en","nb","fi","da","sv"],d="en",L=()=>{var t;let e;switch((t=process==null?void 0:p)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},v=()=>{var t;const e=(t=document==null?void 0:document.location)==null?void 0:t.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":d},a=t=>u.find(e=>t===e||t.toLowerCase().includes(e))||v();function S(){var t;if(typeof window>"u"){const e=L();return a(e)}try{const e=(t=document==null?void 0:document.documentElement)==null?void 0:t.lang,r=v();return u.includes(e)?a(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),a(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),d}}var P=(t,e,r,o,s,n)=>t==="nb"?r:t==="fi"?o:t==="da"?s:t==="sv"?n:e,B=(t,e,r,o,s)=>{const n=S(),f=P(n,t,e,r,o,s);l.load(n,f),l.activate(n)};B(y,b,O,N,k);var I=l.t({message:"Cross",id:"icon.title.close",comment:"Title for close icon"}),C=t=>m.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${I}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9m0-9 9 9"></path>`}},t)),R=C;export{R as c};
