import{R as f}from"./index-CBqU2yxZ.js";import{i as a}from"./index-CJs1nTlS.js";var v={},m=Object.defineProperty,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,l=(t,e,r)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,g=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&l(t,r,e[r]);if(s)for(var r of s(e))_.call(e,r)&&l(t,r,e[r]);return t},h=JSON.parse('{"icon.title.close":"Kryss"}'),w=JSON.parse('{"icon.title.close":"Cross"}'),b=JSON.parse('{"icon.title.close":"Rasti"}'),c=["en","nb","fi","da","sv"],i="en",y=()=>{let t;switch(v.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},u=()=>{var t;const e=(t=document==null?void 0:document.location)==null?void 0:t.hostname;return e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":i},o=t=>c.find(e=>t===e||t.toLowerCase().includes(e))||u();function O(){var t;if(typeof window>"u"){const e=y();return o(e)}try{const e=(t=document==null?void 0:document.documentElement)==null?void 0:t.lang,r=u();return c.includes(e)?o(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),o(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),i}}var k=(t,e,r,n)=>t==="nb"?r:t==="fi"?n:e,L=(t,e,r)=>{const n=O(),d=k(n,t,e,r);a.load(n,d),a.activate(n)};L(w,h,b);var N=a.t({message:"Cross",id:"icon.title.close",comment:"Title for close icon"}),P=t=>f.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${N}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9m0-9 9 9"></path>`}},t)),S=P;export{S as c};
