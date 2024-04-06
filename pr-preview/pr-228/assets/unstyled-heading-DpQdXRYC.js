import{j as r,v as m,w as c,x as R,y as T}from"./index-LnLkAE1A.js";import{R as d,r as s}from"./index-4g5l5LRQ.js";import{r as o}from"./index.m-0-FAh1ao.js";import{I as C}from"./item-YYoJSBPE.js";import{u as O}from"./useId-4PqvGM84.js";import{c as S}from"./close-16-AfVZA5w4.js";import{i as g}from"./index-XwI9xEnt.js";function y({children:e,radio:a,checkbox:t,value:l,...n}){const i=O(),u=a?"radio":"checkbox";return a||t?r.jsx(C,{labelClassName:o(n.labelClassName),className:m.toggle,type:u,controlled:!1,onChange:n.onClick?n.onClick:()=>{},value:l,name:`${n.name||i}:toggle`,children:e}):d.createElement(n.href?"a":"button",{...n,className:o(m.buttonOrLink,n.className),type:n.href?void 0:n.type||"button"},r.jsxs(r.Fragment,{children:[r.jsx("span",{className:m.buttonOrLinkStretch,"aria-hidden":"true"}),e]}))}try{y.displayName="Clickable",y.__docgenInfo={description:"",displayName:"Clickable",props:{radio:{defaultValue:null,description:"Passes radio type to the underlying toggle",name:"radio",required:!1,type:{name:"boolean"}},checkbox:{defaultValue:null,description:"Passes checkbox type to the underlying toggle",name:"checkbox",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Value of the dead toggle
Sets or retrieves the default or selected value of the control.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/value)`,name:"value",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Clickable element children",name:"children",required:!0,type:{name:"string | Element | Element[]"}},href:{defaultValue:null,description:`Redirect to url on click
If passed, clickable renders as an anchor tag allowing you to pass properties such as target, rel, etc.
Returns the hyperlink's URL.

Can be set, to change the URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/href)`,name:"href",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"Additional classnames to the toggle label",name:"labelClassName",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}function b(e){const a=e.radio?"radio":"checkbox";return r.jsx("div",{className:o(e.className,c.wrapper),"aria-hidden":"true",children:r.jsx(C,{type:a,inputClassName:c.input,labelClassName:o(e.labelClassName,{[c.labelRadio]:e.radio,[c.labelCheckbox]:e.checkbox}),name:e.name?`${e.name}:dead-toggle`:"dead-toggle",controlled:!0,onChange:()=>{},value:e.value,checked:e.checked})})}try{b.displayName="DeadToggle",b.__docgenInfo={description:"",displayName:"DeadToggle",props:{radio:{defaultValue:null,description:"Passes radio type to the underlying toggle",name:"radio",required:!1,type:{name:"boolean"}},checkbox:{defaultValue:null,description:"Passes checkbox type to the underlying toggle",name:"checkbox",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Value for the input",name:"value",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"Whether the toggle is checked",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional classnames to the toggle wrapper",name:"className",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"Additional classnames to the toggle label",name:"labelClassName",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Name of the toggle input",name:"name",required:!1,type:{name:"string"}}}}}catch{}var M={},D=Object.defineProperty,v=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,_=(e,a,t)=>a in e?D(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,B=(e,a)=>{for(var t in a||(a={}))F.call(a,t)&&_(e,t,a[t]);if(v)for(var t of v(a))H.call(a,t)&&_(e,t,a[t]);return e},U=JSON.parse('{"icon.title.search":"Forstørrelsesglass"}'),W=JSON.parse('{"icon.title.search":"Magnifying glass"}'),$=JSON.parse('{"icon.title.search":"Suurennuslasi"}'),w=["en","nb","fi","da","sv"],E="en",z=()=>{let e;switch(M.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},q=()=>{var e;const a=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return a.includes("finn")?"nb":a.includes("tori")?"fi":a.includes("blocket")?"sv":a.includes("dba")?"da":E},p=e=>w.find(a=>e===a||e.toLowerCase().includes(a))||q();function J(){var e;if(typeof window>"u"){const a=z();return p(a)}try{const a=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,t=q();return w.includes(a)?p(a??t):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),p(t))}catch(a){return console.warn("could not detect locale, falling back to source locale",a),E}}var K=(e,a,t,l)=>e==="nb"?t:e==="fi"?l:a,Z=(e,a,t)=>{const l=J(),n=K(l,e,a,t);g.load(l,n),g.activate(l)};Z(W,U,$);var G=g.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"}),Q=e=>d.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${G}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.905 12.102A6.042 6.042 0 1 0 4.18.981a6.042 6.042 0 0 0 4.726 11.121Zm1.909-1.289L15.5 15.5"></path>`}},e)),X=Q;function x(e){const a=e.prefix?R:T;return d.createElement(e.label?"div":"button",{"aria-label":e.label?void 0:e["aria-label"],type:e.search?"submit":e.clear?"reset":void 0,onClick:e.onClick,className:o({[a.wrapper]:!0,[a.wrapperWithLabel]:e.label,[a.wrapperWithIcon]:!e.label})},r.jsxs(r.Fragment,{children:[e.clear&&r.jsx(S,{}),e.search&&r.jsx(X,{}),e.label&&r.jsx("span",{className:a.label,children:e.label})]}))}try{x.displayName="Affix",x.__docgenInfo={description:"",displayName:"Affix",props:{"aria-label":{defaultValue:null,description:"Defines a string value that labels the affix element.",name:"aria-label",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"Affix added at the beginning of input",name:"prefix",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:"Affix added at the end of input",name:"suffix",required:!1,type:{name:"boolean"}},clear:{defaultValue:null,description:"Displays a clear icon",name:"clear",required:!1,type:{name:"boolean"}},search:{defaultValue:null,description:"Displays a search icon",name:"search",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Displays a string",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click handler paired with clear or search",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const h=typeof window<"u";let V=!0;if(h){const e=window.matchMedia("(prefers-reduced-motion: reduce)"),a=({matches:t})=>V=!t;e.addEventListener&&e.addEventListener("change",a),a(e)}const A=e=>{e.style.transition=null,e.style.backfaceVisibility=null,e.style.overflow=null},L=e=>{const a=V?"var(--f-expansion-duration, 0.3s)":"0.01s";e.style.transition=`height ${a}`,e.style.backfaceVisibility="hidden",e.style.overflow="hidden"},Y=(e,a)=>()=>{e.style.height="auto",e.style.overflow=null,a&&a()},ee=e=>()=>{e&&e()},ae=(e,a)=>{const t=(()=>{if(!a)return new Promise(i=>{a=i})})(),l=Y(e,a);A(e),e.style.height="auto";let n=e.scrollHeight;if(h&&requestAnimationFrame(()=>{e.addEventListener("transitionend",l,{once:!0}),e.style.height="0px",e.style.transitionTimingFunction="ease-out",L(e),requestAnimationFrame(()=>e.style.height=n+"px")}),t)return t},te=(e,a)=>{const t=(()=>{if(!a)return new Promise(i=>{a=i})})(),l=ee(a);A(e);let n=e.scrollHeight;if(h&&requestAnimationFrame(()=>{e.addEventListener("transitionend",l,{once:!0}),e.style.height=n+"px",e.style.transitionTimingFunction="ease-in",L(e),requestAnimationFrame(()=>e.style.height="0px")}),t)return t};function k({show:e,children:a}){const[t,l]=s.useState(!e),n=s.useRef(null),i=s.useRef(!1),u=s.useRef(e===!0);function I(f){te(f,()=>l(!0))}function P(f){ae(f)}e&&t&&l(!1),s.useEffect(()=>{if(!i.current){i.current=!0;return}n.current&&(e?P(n.current):I(n.current))},[e]);const j=u.current?void 0:"overflow-hidden h-0";return r.jsx("div",{className:j,ref:n,"aria-hidden":e?void 0:!0,children:t?null:a})}try{k.displayName="ExpandTransition",k.__docgenInfo={description:"",displayName:"ExpandTransition",props:{show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"Boolean"}}}}}catch{}const N=({level:e,children:a,...t})=>{if(!e)return r.jsx(d.Fragment,{children:a});const l=`h${e}`;return r.jsx(l,{style:{margin:0,fontWeight:"unset",fontSize:"unset",lineHeight:"unset"},...t,children:a})};try{N.displayName="UnstyledHeading",N.__docgenInfo={description:"",displayName:"UnstyledHeading",props:{level:{defaultValue:null,description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}}}}}catch{}export{x as A,y as C,b as D,k as E,N as U};
