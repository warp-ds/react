import{R as p}from"./index-DJO9vBfz.js";import{i as l}from"./index-XDhxfy0k.js";var m={},w=Object.defineProperty,i=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,c=(r,e,n)=>e in r?w(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,g=(r,e)=>{for(var n in e||(e={}))h.call(e,n)&&c(r,n,e[n]);if(i)for(var n of i(e))_.call(e,n)&&c(r,n,e[n]);return r},b=JSON.parse('{"icon.title.chevron-down":"Nedoverpil"}'),O=JSON.parse('{"icon.title.chevron-down":"Downward arrow"}'),y=JSON.parse('{"icon.title.chevron-down":"Nuoli alaspäin"}'),N=JSON.parse('{"icon.title.chevron-down":"Pil nedad"}'),P=JSON.parse('{"icon.title.chevron-down":"Pil ned"}'),d=["en","nb","fi","da","sv"],u="en",k=()=>{var r;let e;switch((r=process==null?void 0:m)==null?void 0:r.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},v=()=>{var r;const e=(r=document==null?void 0:document.location)==null?void 0:r.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":u},s=r=>d.find(e=>r===e||r.toLowerCase().includes(e))||v();function L(){var r;if(typeof window>"u"){const e=k();return s(e)}try{const e=(r=document==null?void 0:document.documentElement)==null?void 0:r.lang,n=v();return d.includes(e)?s(e??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),s(n))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),u}}var S=(r,e,n,o,a,t)=>r==="nb"?n:r==="fi"?o:r==="da"?a:r==="sv"?t:e,B=(r,e,n,o,a)=>{const t=L(),f=S(t,r,e,n,o,a);l.load(t,f),l.activate(t)};B(O,b,y,N,P);var I=l.t({message:"Downward arrow",id:"icon.title.chevron-down",comment:"Title for chevron-down icon"}),D=r=>p.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${I}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.667 5.333 5.5 5.5 5.5-5.5"></path>`}},r)),C=D;export{C as c};
