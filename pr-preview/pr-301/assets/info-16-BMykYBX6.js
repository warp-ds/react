import{R as m}from"./index-RYns6xqu.js";import{i as s}from"./index-1YnX0IqW.js";var p={},g=Object.defineProperty,l=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,c=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,k=(r,e)=>{for(var t in e||(e={}))_.call(e,t)&&c(r,t,e[t]);if(l)for(var t of l(e))h.call(e,t)&&c(r,t,e[t]);return r},w=JSON.parse('{"icon.title.info":"Informasjonssirkel"}'),b=JSON.parse('{"icon.title.info":"Information circle"}'),O=JSON.parse('{"icon.title.info":"Ympyrä, jonka sisällä on i-kirjain"}'),y=JSON.parse('{"icon.title.info":"Informationscirkel"}'),I=JSON.parse('{"icon.title.info":"Informationscirkel"}'),u=["en","nb","fi","da","sv"],d="en",N=()=>{var r;let e;switch((r=process==null?void 0:p)==null?void 0:r.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},f=()=>{var r;const e=(r=document==null?void 0:document.location)==null?void 0:r.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":d},i=r=>u.find(e=>r===e||r.toLowerCase().includes(e))||f();function L(){var r;if(typeof window>"u"){const e=N();return i(e)}try{const e=(r=document==null?void 0:document.documentElement)==null?void 0:r.lang,t=f();return u.includes(e)?i(e??t):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),i(t))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),d}}var S=(r,e,t,o,a,n)=>r==="nb"?t:r==="fi"?o:r==="da"?a:r==="sv"?n:e,P=(r,e,t,o,a)=>{const n=L(),v=S(n,r,e,t,o,a);s.load(n,v),s.activate(n)};P(b,w,O,y,I);var B=s.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"}),j=r=>m.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${B}</title><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path>`}},r)),E=j;export{E as i};
