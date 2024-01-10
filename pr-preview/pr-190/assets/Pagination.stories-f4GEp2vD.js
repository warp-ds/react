import{j as n,p as s}from"./index-Gxlyw2hQ.js";import{R as o,r as B}from"./index-eK40FDle.js";import{i as g,a as K}from"./i18n-G6_82uWZ.js";import{r as v}from"./index.m-0-FAh1ao.js";import{B as h}from"./component-8F9hw3UG.js";import{i as d}from"./index-0JAKyHEX.js";const z=JSON.parse('{"pagination.aria.first-page":"First page","pagination.aria.next-page":"Next page","pagination.button.next-page":"Next page","pagination.label.current-page":["Page ",["currentPage"]],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":"Pages","pagination.aria.prev-page":"Previous page"}'),Q=JSON.parse('{"pagination.aria.first-page":"Ensimmäinen sivu","pagination.aria.next-page":"Seuraava sivu","pagination.button.next-page":"Seuraava sivu","pagination.label.current-page":["Sivu ",["currentPage"]],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":"Sivut","pagination.aria.prev-page":"Edellinen sivu"}'),W=JSON.parse('{"pagination.aria.first-page":"Første side","pagination.aria.next-page":"Neste side","pagination.button.next-page":"Neste side","pagination.label.current-page":["Side ",["currentPage"]],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":"Sider","pagination.aria.prev-page":"Forrige side"}'),F=o.createContext({currentPage:0,lastPage:0}),_=()=>o.useContext(F),b=o.forwardRef(({children:e,className:a,currentPage:t,lastPage:r,"aria-labelledby":i="pagination-heading",...l},c)=>{if(!Number.isInteger(t))throw new TypeError(`Invalid currentPage: ${JSON.stringify(t)}`);if(!Number.isInteger(r))throw new TypeError(`Invalid lastPage: ${JSON.stringify(r)}`);const u=o.useMemo(()=>({currentPage:Math.max(1,Math.min(t,r)),lastPage:Math.max(1,r)}),[t,r]),p=l["aria-label"]??g._({id:"pagination.aria.pagination",message:"Pages",comment:"Default screenreader message for pagination container in the pagination component"});return n.jsxs("nav",{...l,className:v(s.containerNav,a),"aria-labelledby":i,ref:c,children:[n.jsx("h1",{className:s.heading,id:i,children:p}),n.jsx(F.Provider,{value:u,children:e})]})});try{b.displayName="PaginationContainer",b.__docgenInfo={description:"",displayName:"PaginationContainer",props:{"aria-label":{defaultValue:null,description:`Pages
Defines a string value that labels the current element.
@see aria-labelledby.`,name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class for the container.",name:"className",required:!1,type:{name:"string"}},currentPage:{defaultValue:null,description:"The current page number. Adjusted so it's never below `1`, and never above `lastPage`.",name:"currentPage",required:!0,type:{name:"number"}},lastPage:{defaultValue:null,description:"The number of the last page.",name:"lastPage",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const w=o.forwardRef(({children:e,className:a,...t},r)=>{const{currentPage:i}=_();if(i<=1)return null;const l=e??g._({id:"pagination.label.current-page",message:"Page {currentPage}",values:{currentPage:i},comment:"Default message for current page label in the pagination component"});return n.jsx("span",{...t,className:v(s.currentPage,a),ref:r,children:l})});try{w.displayName="CurrentPage",w.__docgenInfo={description:"",displayName:"CurrentPage",props:{children:{defaultValue:null,description:"Label to render on mobile",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}var X={},Y=Object.defineProperty,O=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,V=(e,a,t)=>a in e?Y(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,ae=(e,a)=>{for(var t in a||(a={}))Z.call(a,t)&&V(e,t,a[t]);if(O)for(var t of O(a))ee.call(a,t)&&V(e,t,a[t]);return e},te=JSON.parse('{"icon.title.chevron-double-left":"Dobbel pil til venstre"}'),re=JSON.parse('{"icon.title.chevron-double-left":"Double leftward arrow"}'),ne=JSON.parse('{"icon.title.chevron-double-left":"Kaksi nuolta vasemmalle"}'),ie=["en","nb","fi"],J="en",E=e=>ie.find(a=>e===a||e.toLowerCase().includes(a))||J;function le(){if(typeof window>"u"){const e=X.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return E(e)}try{const e=document.documentElement.lang;return E(e)}catch(e){return console.warn("could not detect locale, falling back to source locale",e),J}}var oe=(e,a,t,r)=>e==="nb"?t:e==="fi"?r:a,se=(e,a,t)=>{const r=le(),i=oe(r,e,a,t);d.load(r,i),d.activate(r)};se(re,te,ne);var ce=d.t({message:"Double leftward arrow",id:"icon.title.chevron-double-left",comment:"Title for chevron-double-left icon"}),ue=e=>o.createElement("svg",ae({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${ce}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 13 2 8l5-5M14 13 9 8l5-5"></path>`}},e)),de=ue;const N=o.forwardRef(({className:e,...a},t)=>{const{currentPage:r}=_();if(r<=2)return null;const i=a["aria-label"]??g._({id:"pagination.aria.first-page",message:"First page",comment:"Default screenreader message for first page button in the pagination component"});return n.jsx(h,{pill:!0,ref:t,...a,"aria-label":i,className:e,rel:"start",children:n.jsx(de,{className:s.icon})})});try{N.displayName="FirstPage",N.__docgenInfo={description:"",displayName:"FirstPage",props:{"aria-label":{defaultValue:{value:"First page"},description:"",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class for the element.",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"The href for the anchor element.",name:"href",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"Additional CSS styles for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"onClick function",name:"onClick",required:!0,type:{name:"(event: UIEvent<HTMLElement, UIEvent>) => void"}}}}}catch{}var pe={},ge=Object.defineProperty,I=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,q=(e,a,t)=>a in e?ge(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,ve=(e,a)=>{for(var t in a||(a={}))me.call(a,t)&&q(e,t,a[t]);if(I)for(var t of I(a))fe.call(a,t)&&q(e,t,a[t]);return e},he=JSON.parse('{"icon.title.chevron-right":"Pil til høyre"}'),_e=JSON.parse('{"icon.title.chevron-right":"Rightward arrow"}'),ye=JSON.parse('{"icon.title.chevron-right":"Nuoli oikealle"}'),Pe=["en","nb","fi"],U="en",L=e=>Pe.find(a=>e===a||e.toLowerCase().includes(a))||U;function be(){if(typeof window>"u"){const e=pe.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return L(e)}try{const e=document.documentElement.lang;return L(e)}catch(e){return console.warn("could not detect locale, falling back to source locale",e),U}}var we=(e,a,t,r)=>e==="nb"?t:e==="fi"?r:a,Ne=(e,a,t)=>{const r=be(),i=we(r,e,a,t);d.load(r,i),d.activate(r)};Ne(_e,he,ye);var xe=d.t({message:"Rightward arrow",id:"icon.title.chevron-right",comment:"Title for chevron-right icon"}),Se=e=>o.createElement("svg",ve({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${xe}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.5 13.75 5.5-5.5-5.5-5.5"></path>`}},e)),Ce=Se;const x=o.forwardRef(({children:e,className:a,...t},r)=>{const{currentPage:i,lastPage:l}=_();if(i>=l)return null;const c=t["aria-label"]??g._({id:"pagination.aria.next-page",message:"Next page",comment:"Default screenreader message for next page button in the pagination component"}),u=e??g._({id:"pagination.button.next-page",message:"Next page",comment:"Default message for next page button in the pagination component"});return n.jsxs(n.Fragment,{children:[i<=1&&n.jsx(h,{link:!0,...t,ref:r,rel:"next nofollow",className:v(s.firstPageButton,a),children:n.jsx("span",{className:s.firstPageLabel,children:u})}),n.jsx(h,{pill:!0,"aria-label":c,...t,ref:r,rel:"next nofollow",className:v(s.nextPage,a),children:n.jsx(Ce,{className:s.icon})})]})});try{x.displayName="NextPage",x.__docgenInfo={description:"",displayName:"NextPage",props:{"aria-label":{defaultValue:{value:"Next page"},description:"",name:"aria-label",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Butto label to render on mobile",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS class for the element.",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"The href for the anchor element.",name:"href",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"Additional CSS styles for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"onClick function",name:"onClick",required:!0,type:{name:"(event: UIEvent<HTMLElement, UIEvent>) => void"}}}}}catch{}const S=o.forwardRef(({page:e=0,className:a,currentPage:t,...r},i)=>{if(e<1)return null;const l=e===t,c=r["aria-label"]??g._({id:"pagination.aria.page",message:"Page {currentPage}",values:{currentPage:t},comment:"Default screenreader message for page button in the pagination component"});return n.jsx(h,{pill:!0,"aria-label":c,...r,ref:i,rel:"nofollow","aria-current":l?"page":void 0,className:v(a,s.defaultPage,{[s.active]:l}),children:e})});try{S.displayName="Page",S.__docgenInfo={description:"",displayName:"Page",props:{"aria-label":{defaultValue:{value:"Page ${page}"},description:"",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class for the element.",name:"className",required:!1,type:{name:"string"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"The href for the anchor element.",name:"href",required:!0,type:{name:"string"}},page:{defaultValue:{value:"0"},description:"",name:"page",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"Additional CSS styles for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"onClick function",name:"onClick",required:!0,type:{name:"(event: UIEvent<HTMLElement, UIEvent>) => void"}}}}}catch{}const C=o.forwardRef(({children:e,numPages:a=7,className:t,...r},i)=>{const{currentPage:l,lastPage:c}=_(),u=Math.max(l-3,0),p=Math.min(u+a,c),m=Array.from(Array(p-u).keys()).map((f,G)=>u+G+1);return n.jsx("div",{...r,className:v(s.pages,t),ref:i,children:m.map(f=>o.cloneElement(e(f),{key:f,page:f,currentPage:l}))})});try{C.displayName="Pages",C.__docgenInfo={description:"",displayName:"Pages",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},numPages:{defaultValue:{value:"7"},description:"",name:"numPages",required:!1,type:{name:"number"}}}}}catch{}var $e={},je=Object.defineProperty,k=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,T=(e,a,t)=>a in e?je(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,Ee=(e,a)=>{for(var t in a||(a={}))Oe.call(a,t)&&T(e,t,a[t]);if(k)for(var t of k(a))Ve.call(a,t)&&T(e,t,a[t]);return e},Ie=JSON.parse('{"icon.title.chevron-left":"Pil til venstre"}'),qe=JSON.parse('{"icon.title.chevron-left":"Leftward arrow"}'),Le=JSON.parse('{"icon.title.chevron-left":"Nuoli vasemmalle"}'),ke=["en","nb","fi"],H="en",A=e=>ke.find(a=>e===a||e.toLowerCase().includes(a))||H;function Te(){if(typeof window>"u"){const e=$e.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return A(e)}try{const e=document.documentElement.lang;return A(e)}catch(e){return console.warn("could not detect locale, falling back to source locale",e),H}}var Ae=(e,a,t,r)=>e==="nb"?t:e==="fi"?r:a,Me=(e,a,t)=>{const r=Te(),i=Ae(r,e,a,t);d.load(r,i),d.activate(r)};Me(qe,Ie,Le);var De=d.t({message:"Leftward arrow",id:"icon.title.chevron-left",comment:"Title for chevron-left icon"}),Re=e=>o.createElement("svg",Ee({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${De}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 13.75 5 8.25l5.5-5.5"></path>`}},e)),Fe=Re;const $=o.forwardRef(({className:e,...a},t)=>{const{currentPage:r}=_();if(r<=1)return null;const i=g._({id:"pagination.aria.prev-page",message:"Previous page",comment:"Default screenreader message for previous page button in the pagination component"});return n.jsx(h,{pill:!0,"aria-label":i,...a,ref:t,className:e,rel:"prev nofollow",children:n.jsx(Fe,{className:s.icon})})});try{$.displayName="PrevPage",$.__docgenInfo={description:"",displayName:"PrevPage",props:{"aria-label":{defaultValue:{value:"Previous page"},description:"",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class for the element.",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"The href for the anchor element.",name:"href",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"Additional CSS styles for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"onClick function",name:"onClick",required:!0,type:{name:"(event: UIEvent<HTMLElement, UIEvent>) => void"}}}}}catch{}const j=o.forwardRef(({currentPage:e,numPages:a,lastPage:t,createHref:r,className:i,onChange:l,...c},u)=>{if(K(z,W,Q),!r)throw new TypeError("createHref is undefined");const p=m=>f=>{l&&(f.preventDefault(),l(m))};return n.jsxs(b,{...c,ref:u,currentPage:e,lastPage:t,className:i,children:[n.jsx(N,{href:r(1),onClick:p(1)}),n.jsx($,{href:r(e-1),onClick:p(e-1)}),n.jsx(C,{numPages:a,children:m=>n.jsx(S,{href:r(m),onClick:p(m)})}),n.jsx(w,{}),n.jsx(x,{href:r(e+1),onClick:p(e+1)})]})});try{j.displayName="Pagination",j.__docgenInfo={description:"",displayName:"Pagination",props:{className:{defaultValue:null,description:"Additional CSS class for the container.",name:"className",required:!1,type:{name:"string"}},createHref:{defaultValue:null,description:"Given a page number, should return a valid href string.",name:"createHref",required:!0,type:{name:"(page: number) => string"}},currentPage:{defaultValue:null,description:"The current page number. Adjusted so it's never below `1`, and never above `lastPage`.",name:"currentPage",required:!0,type:{name:"number"}},numPages:{defaultValue:null,description:"The number of pages to show.",name:"numPages",required:!1,type:{name:"number"}},lastPage:{defaultValue:null,description:"The number of the last page.",name:"lastPage",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"Handler that is called with the page number to navigate to. `event.preventDefault` is called for you. Fallbacks to default browser behavior if undefined.",name:"onChange",required:!1,type:{name:"((page: number) => void)"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ze={title:"Navigation/Pagination"},P=({initialPage:e=1,lastPage:a=30,...t})=>{const[r,i]=B.useState(e);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{textAlign:"center",marginTop:"50px"},children:["currentPage: ",r,", lastPage: ",a]}),n.jsx(j,{...t,currentPage:r,numPages:3,lastPage:a,createHref:l=>`?page=${l}`,onChange:l=>i(l)})]})},y=()=>n.jsxs(n.Fragment,{children:[n.jsx(P,{initialPage:1,lastPage:10,"aria-labelledby":"pagination-1"}),n.jsx(P,{initialPage:10,lastPage:20,"aria-labelledby":"pagination-2"}),n.jsx(P,{initialPage:30,lastPage:30,"aria-labelledby":"pagination-3"})]});var M,D,R;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`() => <>
    <Example initialPage={1} lastPage={10} aria-labelledby="pagination-1" />
    <Example initialPage={10} lastPage={20} aria-labelledby="pagination-2" />
    <Example initialPage={30} lastPage={30} aria-labelledby="pagination-3" />
  </>`,...(R=(D=y.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const Qe=["Normal"];export{y as Normal,Qe as __namedExportsOrder,ze as default};
//# sourceMappingURL=Pagination.stories-f4GEp2vD.js.map
