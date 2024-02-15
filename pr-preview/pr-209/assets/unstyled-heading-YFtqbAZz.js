import{j as i,v as m,t as r,w as j,x as R}from"./index-Dxmo1Dx2.js";import{R as d,r as c}from"./index-4g5l5LRQ.js";import{r as o}from"./index.m-0-FAh1ao.js";import{I as N}from"./item-eCIvxaLh.js";import{u as O}from"./useId-LEwi1_oF.js";import{c as S}from"./close-16-AfVZA5w4.js";import{i as h}from"./index-XwI9xEnt.js";function y({children:e,radio:a,checkbox:t,value:l,...n}){const s=O(),u=a?"radio":"checkbox";return a||t?i.jsx(N,{labelClassName:o(n.labelClassName),className:m.toggle,type:u,controlled:!1,onChange:n.onClick?n.onClick:()=>{},value:l,name:`${n.name||s}:toggle`,children:e}):d.createElement(n.href?"a":"button",{...n,className:o(m.buttonOrLink,n.className),type:n.href?void 0:n.type||"button"},i.jsxs(i.Fragment,{children:[i.jsx("span",{className:m.buttonOrLinkStretch,"aria-hidden":"true"}),e]}))}try{y.displayName="Clickable",y.__docgenInfo={description:"",displayName:"Clickable",props:{radio:{defaultValue:null,description:"Passes radio type to the underlying toggle",name:"radio",required:!1,type:{name:"boolean"}},checkbox:{defaultValue:null,description:"Passes checkbox type to the underlying toggle",name:"checkbox",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`Value of the dead toggle
Sets or retrieves the default or selected value of the control.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/value)`,name:"value",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Clickable element children",name:"children",required:!0,type:{name:"string | Element | Element[]"}},href:{defaultValue:null,description:`Redirect to url on click
If passed, clickable renders as an anchor tag allowing you to pass properties such as target, rel, etc.
Returns the hyperlink's URL.

Can be set, to change the URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/href)`,name:"href",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"Additional classnames to the toggle label",name:"labelClassName",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}function b(e){const a=e.radio?"radio":"checkbox",t=o(e.labelClassName,{[r.label]:!0,[r.focusable]:!0,[r.noContent]:!0,[`${r.radio} ${r.labelRadioBorder} ${r.radioChecked}`]:e.radio,[`${r.checkbox} ${r.labelCheckboxBorder} ${r.checkboxChecked}`]:e.checkbox,[r.icon]:e.checkbox}),l=o({[r.input]:!0,[r.a11y]:!0,[r.deadToggleInput]:!0}),n={[r.wrapper]:!0,[r.deadToggleWrapper]:!0};return i.jsx("div",{className:o(e.className,n),"aria-hidden":"true",children:i.jsx(N,{type:a,className:l,labelClassName:t,name:"dead-toggle",controlled:!0,onChange:()=>{},value:e.value,checked:e.checked})})}try{b.displayName="DeadToggle",b.__docgenInfo={description:"",displayName:"DeadToggle",props:{radio:{defaultValue:null,description:"Passes radio type to the underlying toggle",name:"radio",required:!1,type:{name:"boolean"}},checkbox:{defaultValue:null,description:"Passes checkbox type to the underlying toggle",name:"checkbox",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Value for the input",name:"value",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"Whether the toggle is checked",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional classnames to the toggle wrapper",name:"className",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"Additional classnames to the toggle label",name:"labelClassName",required:!1,type:{name:"string"}}}}}catch{}var M={},B=Object.defineProperty,v=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,_=(e,a,t)=>a in e?B(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,H=(e,a)=>{for(var t in a||(a={}))D.call(a,t)&&_(e,t,a[t]);if(v)for(var t of v(a))F.call(a,t)&&_(e,t,a[t]);return e},$=JSON.parse('{"icon.title.search":"Forstørrelsesglass"}'),U=JSON.parse('{"icon.title.search":"Magnifying glass"}'),W=JSON.parse('{"icon.title.search":"Suurennuslasi"}'),w=["en","nb","fi","da","sv"],E="en",z=()=>{let e;switch(M.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},q=()=>{var e;const a=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return a.includes("finn")?"nb":a.includes("tori")?"fi":a.includes("blocket")?"sv":a.includes("dba")?"da":E},p=e=>w.find(a=>e===a||e.toLowerCase().includes(a))||q();function J(){var e;if(typeof window>"u"){const a=z();return p(a)}try{const a=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,t=q();return w.includes(a)?p(a??t):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),p(t))}catch(a){return console.warn("could not detect locale, falling back to source locale",a),E}}var K=(e,a,t,l)=>e==="nb"?t:e==="fi"?l:a,Z=(e,a,t)=>{const l=J(),n=K(l,e,a,t);h.load(l,n),h.activate(l)};Z(U,$,W);var G=h.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"}),Q=e=>d.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${G}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.905 12.102A6.042 6.042 0 1 0 4.18.981a6.042 6.042 0 0 0 4.726 11.121Zm1.909-1.289L15.5 15.5"></path>`}},e)),X=Q;function x(e){const a=e.prefix?j:R;return d.createElement(e.label?"div":"button",{"aria-label":e.label?void 0:e["aria-label"],type:e.search?"submit":e.clear?"reset":void 0,onClick:e.onClick,className:o({[a.wrapper]:!0,[a.wrapperWithLabel]:e.label,[a.wrapperWithIcon]:!e.label})},i.jsxs(i.Fragment,{children:[e.clear&&i.jsx(S,{}),e.search&&i.jsx(X,{}),e.label&&i.jsx("span",{className:a.label,children:e.label})]}))}try{x.displayName="Affix",x.__docgenInfo={description:"",displayName:"Affix",props:{"aria-label":{defaultValue:null,description:"Defines a string value that labels the affix element.",name:"aria-label",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"Affix added at the beginning of input",name:"prefix",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:"Affix added at the end of input",name:"suffix",required:!1,type:{name:"boolean"}},clear:{defaultValue:null,description:"Displays a clear icon",name:"clear",required:!1,type:{name:"boolean"}},search:{defaultValue:null,description:"Displays a search icon",name:"search",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Displays a string",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click handler paired with clear or search",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const g=typeof window<"u";let V=!0;if(g){const e=window.matchMedia("(prefers-reduced-motion: reduce)"),a=({matches:t})=>V=!t;e.addEventListener&&e.addEventListener("change",a),a(e)}const A=e=>{e.style.transition=null,e.style.backfaceVisibility=null,e.style.overflow=null},L=e=>{const a=V?"var(--f-expansion-duration, 0.3s)":"0.01s";e.style.transition=`height ${a}`,e.style.backfaceVisibility="hidden",e.style.overflow="hidden"},Y=(e,a)=>()=>{e.style.height="auto",e.style.overflow=null,a&&a()},ee=e=>()=>{e&&e()},ae=(e,a)=>{const t=(()=>{if(!a)return new Promise(s=>{a=s})})(),l=Y(e,a);A(e),e.style.height="auto";let n=e.scrollHeight;if(g&&requestAnimationFrame(()=>{e.addEventListener("transitionend",l,{once:!0}),e.style.height="0px",e.style.transitionTimingFunction="ease-out",L(e),requestAnimationFrame(()=>e.style.height=n+"px")}),t)return t},te=(e,a)=>{const t=(()=>{if(!a)return new Promise(s=>{a=s})})(),l=ee(a);A(e);let n=e.scrollHeight;if(g&&requestAnimationFrame(()=>{e.addEventListener("transitionend",l,{once:!0}),e.style.height=n+"px",e.style.transitionTimingFunction="ease-in",L(e),requestAnimationFrame(()=>e.style.height="0px")}),t)return t};function k({show:e,children:a}){const[t,l]=c.useState(!e),n=c.useRef(null),s=c.useRef(!1),u=c.useRef(e===!0);function I(f){te(f,()=>l(!0))}function P(f){ae(f)}e&&t&&l(!1),c.useEffect(()=>{if(!s.current){s.current=!0;return}n.current&&(e?P(n.current):I(n.current))},[e]);const T=u.current?void 0:"overflow-hidden h-0";return i.jsx("div",{className:T,ref:n,"aria-hidden":e?void 0:!0,children:t?null:a})}try{k.displayName="ExpandTransition",k.__docgenInfo={description:"",displayName:"ExpandTransition",props:{show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"Boolean"}}}}}catch{}const C=({level:e,children:a,...t})=>{if(!e)return i.jsx(d.Fragment,{children:a});const l=`h${e}`;return i.jsx(l,{style:{margin:0,fontWeight:"unset",fontSize:"unset",lineHeight:"unset"},...t,children:a})};try{C.displayName="UnstyledHeading",C.__docgenInfo={description:"",displayName:"UnstyledHeading",props:{level:{defaultValue:null,description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}}}}}catch{}export{x as A,y as C,b as D,k as E,C as U};
