import{R as v}from"./index-wSCK2UMg.js";import{i}from"./index-CO0CvHzQ.js";var m={},p=Object.defineProperty,l=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,s=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,h=(r,e)=>{for(var t in e||(e={}))_.call(e,t)&&s(r,t,e[t]);if(l)for(var t of l(e))g.call(e,t)&&s(r,t,e[t]);return r},k=JSON.parse('{"icon.title.info":"Informasjonssirkel"}'),w=JSON.parse('{"icon.title.info":"Information circle"}'),b=JSON.parse('{"icon.title.info":"Ympyrä, jonka sisällä on i-kirjain"}'),O=JSON.parse('{"icon.title.info":"Informationscirkel"}'),c=["en","nb","fi","da","sv"],u="en",y=()=>{var r;let e;switch((r=process==null?void 0:m)==null?void 0:r.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},d=()=>{var r;const e=(r=document==null?void 0:document.location)==null?void 0:r.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":u},a=r=>c.find(e=>r===e||r.toLowerCase().includes(e))||d();function I(){var r;if(typeof window>"u"){const e=y();return a(e)}try{const e=(r=document==null?void 0:document.documentElement)==null?void 0:r.lang,t=d();return c.includes(e)?a(e??t):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),a(t))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),u}}var L=(r,e,t,o,n)=>r==="nb"?t:r==="fi"?o:r==="da"?n:e,N=(r,e,t,o)=>{const n=I(),f=L(n,r,e,t,o);i.load(n,f),i.activate(n)};N(w,k,b,O);var P=i.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"}),S=r=>v.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${P}</title><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path>`}},r)),M=S;export{M as i};