import{j as i,d as c}from"./index-DSOYRR-y.js";import{r as p}from"./index.m-CtIADANO.js";import{R as m}from"./index-RYns6xqu.js";import{i as s}from"./index-C6dB-k_R.js";import{i as x}from"./info-16-CkEITmUl.js";import{E as I}from"./unstyled-heading-B2wjEl7S.js";import"./help-text-BWbwCBp4.js";var B={},C=Object.defineProperty,f=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,g=(r,e,t)=>e in r?C(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,J=(r,e)=>{for(var t in e||(e={}))E.call(e,t)&&g(r,t,e[t]);if(f)for(var t of f(e))M.call(e,t)&&g(r,t,e[t]);return r},T=JSON.parse('{"icon.title.error":["Åttekant med utropstegn"]}'),A=JSON.parse('{"icon.title.error":["Octagon with exclamation point"]}'),V=JSON.parse('{"icon.title.error":["Kahdeksankulmio, jonka sisällä on huutomerkki"]}'),R=JSON.parse('{"icon.title.error":["Ottekant med et udråbstegn"]}'),H=JSON.parse('{"icon.title.error":["Oktagon med utropstecken"]}'),b=["en","nb","fi","da","sv"],O="en",D=()=>{var r;let e;switch((r=process==null?void 0:B)==null?void 0:r.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},$=()=>{var r;const e=(r=document==null?void 0:document.location)==null?void 0:r.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":O},u=r=>b.find(e=>r===e||r.toLowerCase().includes(e))||$();function K(){var r;if(typeof window>"u"){const e=D();return u(e)}try{const e=(r=document==null?void 0:document.documentElement)==null?void 0:r.lang,t=$();return b.includes(e)?u(e??t):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),u(t))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),O}}var W=(r,e,t,o,a,n)=>r==="nb"?t:r==="fi"?o:r==="da"?a:r==="sv"?n:e,F=(r,e,t,o,a)=>{const n=K(),l=W(n,r,e,t,o,a);s.load(n,l),s.activate(n)};F(A,T,V,R,H);var U=s.t({message:"Octagon with exclamation point",id:"icon.title.error",comment:"Title for error icon"}),q=r=>m.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${U}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.107 4.748 15.5h6.503l4.248-4.393V4.893L11.252.5H4.748L.5 4.893z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11.398a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 8.5V3"></path>`}},r)),z=q,Y={},Z=Object.defineProperty,h=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,_=(r,e,t)=>e in r?Z(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,X=(r,e)=>{for(var t in e||(e={}))G.call(e,t)&&_(r,t,e[t]);if(h)for(var t of h(e))Q.call(e,t)&&_(r,t,e[t]);return r},ee=JSON.parse('{"icon.title.success":["Sirkel med sjekkmerke"]}'),re=JSON.parse('{"icon.title.success":["Circle with checkmark"]}'),te=JSON.parse('{"icon.title.success":["Ympyrä, jonka sisällä on valintamerkki"]}'),ne=JSON.parse('{"icon.title.success":["Cirkel med et flueben"]}'),ae=JSON.parse('{"icon.title.success":["Cirkel med bock"]}'),y=["en","nb","fi","da","sv"],N="en",oe=()=>{var r;let e;switch((r=process==null?void 0:Y)==null?void 0:r.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},L=()=>{var r;const e=(r=document==null?void 0:document.location)==null?void 0:r.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":N},d=r=>y.find(e=>r===e||r.toLowerCase().includes(e))||L();function se(){var r;if(typeof window>"u"){const e=oe();return d(e)}try{const e=(r=document==null?void 0:document.documentElement)==null?void 0:r.lang,t=L();return y.includes(e)?d(e??t):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),d(t))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),N}}var ie=(r,e,t,o,a,n)=>r==="nb"?t:r==="fi"?o:r==="da"?a:r==="sv"?n:e,le=(r,e,t,o,a)=>{const n=se(),l=ie(n,r,e,t,o,a);s.load(n,l),s.activate(n)};le(re,ee,te,ne,ae);var ce=s.t({message:"Circle with checkmark",id:"icon.title.success",comment:"Title for success icon"}),ue=r=>m.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${ce}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 8.815 1.633 2.318a.7.7 0 0 0 1.138.034l5.228-6.615"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.999a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path>`}},r)),de=ue,ve={},me=Object.defineProperty,w=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,k=(r,e,t)=>e in r?me(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ge=(r,e)=>{for(var t in e||(e={}))pe.call(e,t)&&k(r,t,e[t]);if(w)for(var t of w(e))fe.call(e,t)&&k(r,t,e[t]);return r},he=JSON.parse('{"icon.title.warning":["Varseltrekant med utropstegn"]}'),_e=JSON.parse('{"icon.title.warning":["Warning triangle with exclamation point"]}'),we=JSON.parse('{"icon.title.warning":["Varoituskolmio, jonka sisällä on huutomerkki"]}'),ke=JSON.parse('{"icon.title.warning":["Advarselstrekant med et udråbstegn"]}'),be=JSON.parse('{"icon.title.warning":["Varningstriangel med utropstecken"]}'),S=["en","nb","fi","da","sv"],j="en",Oe=()=>{var r;let e;switch((r=process==null?void 0:ve)==null?void 0:r.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},P=()=>{var r;const e=(r=document==null?void 0:document.location)==null?void 0:r.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":j},v=r=>S.find(e=>r===e||r.toLowerCase().includes(e))||P();function $e(){var r;if(typeof window>"u"){const e=Oe();return v(e)}try{const e=(r=document==null?void 0:document.documentElement)==null?void 0:r.lang,t=P();return S.includes(e)?v(e??t):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),v(t))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),j}}var ye=(r,e,t,o,a,n)=>r==="nb"?t:r==="fi"?o:r==="da"?a:r==="sv"?n:e,Ne=(r,e,t,o,a)=>{const n=$e(),l=ye(n,r,e,t,o,a);s.load(n,l),s.activate(n)};Ne(_e,he,we,ke,be);var Le=s.t({message:"Warning triangle with exclamation point",id:"icon.title.warning",comment:"Title for warning icon"}),Se=r=>m.createElement("svg",ge({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Le}</title><path stroke="currentColor" d="m.712 14.07 6.25-12.994a1 1 0 0 1 1.792-.022l6.635 12.995a1 1 0 0 1-.89 1.455H1.613a1 1 0 0 1-.902-1.434Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6v4.992M8 13v.333"></path>`}},r)),je=Se;function Pe({show:r,type:e,role:t="alert",children:o,...a}){const n=c[e],l=c[`${e}Icon`];return i.jsx(I,{show:r,children:i.jsxs("div",{role:t,className:p(a.className,[c.wrapper,n]),style:a.style,children:[i.jsx("div",{className:p([c.icon,l]),children:xe[e]}),i.jsx("div",{className:c.textWrapper,children:o})]})})}const xe={negative:i.jsx(z,{}),positive:i.jsx(de,{}),warning:i.jsx(je,{}),info:i.jsx(x,{})};Pe.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{role:{defaultValue:{value:"'alert'",computed:!1},required:!1}}};export{Pe as A};
