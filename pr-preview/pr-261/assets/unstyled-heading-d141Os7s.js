import{j as i,u as f,v as c,w as S,x as A}from"./index-DlkTJtIW.js";import{R as d,r as l}from"./index-RYns6xqu.js";import{r as o}from"./index.m-CtIADANO.js";import{I as v}from"./item-6kOQFyLV.js";import{u as j}from"./useId-CY2WEmb6.js";import{c as I}from"./close-16-BgEbf248.js";import{i as p}from"./index-1YnX0IqW.js";function L({children:e,radio:t,checkbox:a,value:r,...n}){const s=j(),u=t?"radio":"checkbox";return t||a?i.jsx(v,{labelClassName:o(n.labelClassName),className:f.toggle,type:u,controlled:!1,onChange:n.onClick?n.onClick:()=>{},value:r,name:`${n.name||s}:toggle`,children:e}):d.createElement(n.href?"a":"button",{...n,className:o(f.buttonOrLink,n.className),type:n.href?void 0:n.type||"button"},i.jsxs(i.Fragment,{children:[i.jsx("span",{className:f.buttonOrLinkStretch,"aria-hidden":"true"}),e]}))}L.__docgenInfo={description:"",methods:[],displayName:"Clickable",props:{radio:{required:!1,tsType:{name:"boolean"},description:"Passes radio type to the underlying toggle"},checkbox:{required:!1,tsType:{name:"boolean"},description:"Passes checkbox type to the underlying toggle"},value:{required:!1,tsType:{name:"string"},description:"Value of the dead toggle"},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[] | string",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"},{name:"string"}]},description:"Clickable element children"},href:{required:!1,tsType:{name:"string"},description:`Redirect to url on click
If passed, clickable renders as an anchor tag allowing you to pass properties such as target, rel, etc.`},labelClassName:{required:!1,tsType:{name:"string"},description:"Additional classnames to the toggle label"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"}}};function P(e){const t=e.radio?"radio":"checkbox";return i.jsx("div",{className:o(e.className,c.wrapper),"aria-hidden":"true",children:i.jsx(v,{type:t,inputClassName:c.input,labelClassName:o(e.labelClassName,{[c.labelRadio]:e.radio,[c.labelCheckbox]:e.checkbox}),name:e.name?`${e.name}:dead-toggle`:"dead-toggle",controlled:!0,onChange:()=>{},value:e.value,checked:e.checked})})}P.__docgenInfo={description:"",methods:[],displayName:"DeadToggle",props:{radio:{required:!1,tsType:{name:"boolean"},description:"Passes radio type to the underlying toggle"},checkbox:{required:!1,tsType:{name:"boolean"},description:"Passes checkbox type to the underlying toggle"},value:{required:!1,tsType:{name:"string"},description:"Value for the input"},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is checked"},className:{required:!1,tsType:{name:"string"},description:"Additional classnames to the toggle wrapper"},labelClassName:{required:!1,tsType:{name:"string"},description:"Additional classnames to the toggle label"},name:{required:!1,tsType:{name:"string"},description:"Name of the toggle input"}}};var O={},R=Object.defineProperty,y=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,D=(e,t)=>{for(var a in t||(t={}))F.call(t,a)&&b(e,a,t[a]);if(y)for(var a of y(t))B.call(t,a)&&b(e,a,t[a]);return e},M=JSON.parse('{"icon.title.search":"Forstørrelsesglass"}'),H=JSON.parse('{"icon.title.search":"Magnifying glass"}'),J=JSON.parse('{"icon.title.search":"Suurennuslasi"}'),x=["en","nb","fi","da","sv"],k="en",V=()=>{let e;switch(O.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},w=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":k},g=e=>x.find(t=>e===t||e.toLowerCase().includes(t))||w();function X(){var e;if(typeof window>"u"){const t=V();return g(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,a=w();return x.includes(t)?g(t??a):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),g(a))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),k}}var $=(e,t,a,r)=>e==="nb"?a:e==="fi"?r:t,U=(e,t,a)=>{const r=X(),n=$(r,e,t,a);p.load(r,n),p.activate(r)};U(H,M,J);var W=p.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"}),z=e=>d.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${W}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.905 12.102A6.042 6.042 0 1 0 4.18.981a6.042 6.042 0 0 0 4.726 11.121Zm1.909-1.289L15.5 15.5"></path>`}},e)),K=z;function Z(e){const t=e.prefix?S:A;return d.createElement(e.label?"div":"button",{"aria-label":e.label?void 0:e["aria-label"],type:e.search?"submit":e.clear?"reset":void 0,onClick:e.onClick,className:o({[t.wrapper]:!0,[t.wrapperWithLabel]:e.label,[t.wrapperWithIcon]:!e.label})},i.jsxs(i.Fragment,{children:[e.clear&&i.jsx(I,{}),e.search&&i.jsx(K,{}),e.label&&i.jsx("span",{className:t.label,children:e.label})]}))}Z.__docgenInfo={description:"",methods:[],displayName:"Affix",props:{"aria-label":{required:!1,tsType:{name:"string"},description:"Defines a string value that labels the affix element."},prefix:{required:!1,tsType:{name:"boolean"},description:"Affix added at the beginning of input"},suffix:{required:!1,tsType:{name:"boolean"},description:"Affix added at the end of input"},clear:{required:!1,tsType:{name:"boolean"},description:"Displays a clear icon"},search:{required:!1,tsType:{name:"boolean"},description:"Displays a search icon"},label:{required:!1,tsType:{name:"string"},description:"Displays a string"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler paired with clear or search"}}};const h=typeof window<"u";let T=!0;if(h){const e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=({matches:a})=>T=!a;e.addEventListener&&e.addEventListener("change",t),t(e)}const _=e=>{e.style.transition=null,e.style.backfaceVisibility=null,e.style.overflow=null},C=e=>{const t=T?"var(--f-expansion-duration, 0.3s)":"0.01s";e.style.transition=`height ${t}`,e.style.backfaceVisibility="hidden",e.style.overflow="hidden"},G=(e,t)=>()=>{e.style.height="auto",e.style.overflow=null,t&&t()},Q=e=>()=>{e&&e()},Y=(e,t)=>{const a=(()=>{if(!t)return new Promise(s=>{t=s})})(),r=G(e,t);_(e),e.style.height="auto";let n=e.scrollHeight;if(h&&requestAnimationFrame(()=>{e.addEventListener("transitionend",r,{once:!0}),e.style.height="0px",e.style.transitionTimingFunction="ease-out",C(e),requestAnimationFrame(()=>e.style.height=n+"px")}),a)return a},ee=(e,t)=>{const a=(()=>{if(!t)return new Promise(s=>{t=s})})(),r=Q(t);_(e);let n=e.scrollHeight;if(h&&requestAnimationFrame(()=>{e.addEventListener("transitionend",r,{once:!0}),e.style.height=n+"px",e.style.transitionTimingFunction="ease-in",C(e),requestAnimationFrame(()=>e.style.height="0px")}),a)return a};function te({show:e,children:t}){const[a,r]=l.useState(!e),n=l.useRef(null),s=l.useRef(!1),u=l.useRef(e===!0);function N(m){ee(m,()=>r(!0))}function E(m){Y(m)}e&&a&&r(!1),l.useEffect(()=>{if(!s.current){s.current=!0;return}n.current&&(e?E(n.current):N(n.current))},[e]);const q=u.current?void 0:"overflow-hidden h-0";return i.jsx("div",{className:q,ref:n,"aria-hidden":e?void 0:!0,"data-testid":"expand-transition",children:a?null:t})}te.__docgenInfo={description:"",methods:[],displayName:"ExpandTransition",props:{show:{required:!1,tsType:{name:"Boolean"},description:""}}};const ae=({level:e,children:t,...a})=>{if(!e)return i.jsx(d.Fragment,{children:t});const r=`h${e}`;return i.jsx(r,{style:{margin:0,fontWeight:"unset",fontSize:"unset",lineHeight:"unset"},...a,children:t})};ae.__docgenInfo={description:"",methods:[],displayName:"UnstyledHeading",props:{level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:""}}};export{Z as A,L as C,P as D,te as E,ae as U};