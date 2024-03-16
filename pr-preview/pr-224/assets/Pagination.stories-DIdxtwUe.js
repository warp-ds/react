import{j as r,B as s}from"./index-4T9h8ufS.js";import{R as c,r as W}from"./index-DogsOklH.js";import{a as X}from"./i18n-uHMsMSCU.js";import{r as p}from"./index.m-0-FAh1ao.js";import{i as l}from"./index-iDl-7hYa.js";const Y=JSON.parse('{"pagination.aria.first-page":"First page","pagination.aria.icon-suffix":"icon","pagination.aria.next-page":"Next page","pagination.label.current-page":["Page ",["currentPage"]],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":"Pages","pagination.aria.prev-page":"Previous page"}'),Z=JSON.parse('{"pagination.aria.first-page":"Ensimmäinen sivu","pagination.aria.icon-suffix":"kuvake","pagination.aria.next-page":"Seuraava sivu","pagination.label.current-page":["Sivu ",["currentPage"]],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":"Sivut","pagination.aria.prev-page":"Edellinen sivu"}'),ee=JSON.parse('{"pagination.aria.first-page":"Første side","pagination.aria.icon-suffix":"ikon","pagination.aria.next-page":"Neste side","pagination.label.current-page":["Side ",["currentPage"]],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":"Sider","pagination.aria.prev-page":"Forrige side"}'),I=c.createContext({currentPage:0,lastPage:0}),h=()=>c.useContext(I),E=c.forwardRef(({children:a,className:e,currentPage:n,lastPage:t,"aria-labelledby":i="pagination-heading",...o},d)=>{if(!Number.isInteger(n))throw new TypeError(`Invalid currentPage: ${JSON.stringify(n)}`);if(!Number.isInteger(t))throw new TypeError(`Invalid lastPage: ${JSON.stringify(t)}`);const g=c.useMemo(()=>({currentPage:Math.max(1,Math.min(n,t)),lastPage:Math.max(1,t)}),[n,t]),u=o["aria-label"]??l._({id:"pagination.aria.pagination",message:"Pages",comment:"Default screenreader message for pagination container in the pagination component"});return r.jsxs("nav",{...o,className:p(s.containerNav,e),"aria-labelledby":i,ref:d,children:[r.jsx("h1",{className:s.a11y,id:i,children:u}),r.jsx(I.Provider,{value:g,children:a})]})});E.__docgenInfo={description:"",methods:[],displayName:"PaginationContainer",props:{"aria-labelledby":{defaultValue:{value:"'pagination-heading'",computed:!1},required:!1}}};const C=c.forwardRef(({children:a,className:e,...n},t)=>{const{currentPage:i}=h(),o=a??l._({id:"pagination.label.current-page",message:"Page {currentPage}",values:{currentPage:i},comment:"Default message for current page label in the pagination component"});return r.jsx("span",{...n,className:p(s.currentPage,e),ref:t,children:o})});C.__docgenInfo={description:"",methods:[],displayName:"CurrentPage"};var ae={},ne=Object.defineProperty,x=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,y=(a,e,n)=>e in a?ne(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,ie=(a,e)=>{for(var n in e||(e={}))te.call(e,n)&&y(a,n,e[n]);if(x)for(var n of x(e))re.call(e,n)&&y(a,n,e[n]);return a},oe=JSON.parse('{"icon.title.chevron-double-left":"Dobbel pil til venstre"}'),se=JSON.parse('{"icon.title.chevron-double-left":"Double leftward arrow"}'),le=JSON.parse('{"icon.title.chevron-double-left":"Kaksi nuolta vasemmalle"}'),B=["en","nb","fi","da","sv"],R="en",ce=()=>{let a;switch(ae.NMP_BRAND){case"FINN":a="nb";break;case"TORI":a="fi";break;case"BLOCKET":a="sv";break;case"DBA":a="da";break;default:a="en"}return a},D=()=>{var a;const e=(a=document==null?void 0:document.location)==null?void 0:a.hostname;return e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":R},_=a=>B.find(e=>a===e||a.toLowerCase().includes(e))||D();function de(){var a;if(typeof window>"u"){const e=ce();return _(e)}try{const e=(a=document==null?void 0:document.documentElement)==null?void 0:a.lang,n=D();return B.includes(e)?_(e??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),_(n))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),R}}var ue=(a,e,n,t)=>a==="nb"?n:a==="fi"?t:e,ge=(a,e,n)=>{const t=de(),i=ue(t,a,e,n);l.load(t,i),l.activate(t)};ge(se,oe,le);var pe=l.t({message:"Double leftward arrow",id:"icon.title.chevron-double-left",comment:"Title for chevron-double-left icon"}),fe=a=>c.createElement("svg",ie({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${pe}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 13 2 8l5-5m7 10L9 8l5-5"></path>`}},a)),me=fe;const M=c.forwardRef(({className:a,...e},n)=>{const{currentPage:t}=h();if(t<=2)return null;const i=e["aria-label"]??l._({id:"pagination.aria.first-page",message:"First page",comment:"Default screenreader message for first page link in the pagination component"}),o=l._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"});return r.jsxs("a",{ref:n,...e,className:p(a,s.link,s.icon),rel:"start",children:[r.jsxs("span",{className:s.a11y,children:[i,","]}),r.jsx(me,{}),r.jsx("span",{className:s.a11y,children:o})]})});M.__docgenInfo={description:"",methods:[],displayName:"FirstPage"};var ve={},he=Object.defineProperty,N=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,$=(a,e,n)=>e in a?he(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,we=(a,e)=>{for(var n in e||(e={}))_e.call(e,n)&&$(a,n,e[n]);if(N)for(var n of N(e))be.call(e,n)&&$(a,n,e[n]);return a},Pe=JSON.parse('{"icon.title.chevron-right":"Pil til høyre"}'),xe=JSON.parse('{"icon.title.chevron-right":"Rightward arrow"}'),ye=JSON.parse('{"icon.title.chevron-right":"Nuoli oikealle"}'),T=["en","nb","fi","da","sv"],J="en",Ne=()=>{let a;switch(ve.NMP_BRAND){case"FINN":a="nb";break;case"TORI":a="fi";break;case"BLOCKET":a="sv";break;case"DBA":a="da";break;default:a="en"}return a},F=()=>{var a;const e=(a=document==null?void 0:document.location)==null?void 0:a.hostname;return e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":J},b=a=>T.find(e=>a===e||a.toLowerCase().includes(e))||F();function $e(){var a;if(typeof window>"u"){const e=Ne();return b(e)}try{const e=(a=document==null?void 0:document.documentElement)==null?void 0:a.lang,n=F();return T.includes(e)?b(e??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),b(n))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),J}}var ke=(a,e,n,t)=>a==="nb"?n:a==="fi"?t:e,Oe=(a,e,n)=>{const t=$e(),i=ke(t,a,e,n);l.load(t,i),l.activate(t)};Oe(xe,Pe,ye);var je=l.t({message:"Rightward arrow",id:"icon.title.chevron-right",comment:"Title for chevron-right icon"}),Se=a=>c.createElement("svg",we({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${je}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.5 13.75 5.5-5.5-5.5-5.5"></path>`}},a)),Le=Se;const A=c.forwardRef(({className:a,...e},n)=>{const{currentPage:t,lastPage:i}=h();if(t>=i)return null;const o=e["aria-label"]??l._({id:"pagination.aria.next-page",message:"Next page",comment:"Default screenreader message for next page link in the pagination component"}),d=l._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"});return r.jsx(r.Fragment,{children:r.jsxs("a",{...e,ref:n,rel:"next nofollow",className:p(a,s.link,s.icon),children:[r.jsxs("span",{className:s.a11y,children:[o,","]}),r.jsx(Le,{}),r.jsx("span",{className:s.a11y,children:d})]})})});A.__docgenInfo={description:"",methods:[],displayName:"NextPage"};const V=c.forwardRef(({page:a=1,className:e,currentPage:n,...t},i)=>{const o=a===n,d=t["aria-label"]??l._({id:"pagination.aria.page",message:"Page {currentPage}",values:{currentPage:a},comment:"Default screenreader message for page link in the pagination component"});return r.jsx("a",{"aria-label":d,...t,ref:i,rel:"nofollow","aria-current":o?"page":void 0,className:p(e,s.link,[o?s.active:s.notActive]),children:a})});V.__docgenInfo={description:"",methods:[],displayName:"Page",props:{page:{defaultValue:{value:"1",computed:!1},required:!1}}};const H=c.forwardRef(({children:a,numPages:e=7,className:n,...t},i)=>{const{currentPage:o,lastPage:d}=h(),g=Math.max(o-3,0),u=Math.min(g+e,d),f=Array.from(Array(u-g).keys()).map((m,Q)=>g+Q+1);return r.jsx("div",{...t,className:p(s.pages,n),ref:i,children:f.map(m=>c.cloneElement(a(m),{key:m,page:m,currentPage:o}))})});H.__docgenInfo={description:"",methods:[],displayName:"Pages",props:{numPages:{defaultValue:{value:"7",computed:!1},required:!1}}};var Ie={},Ee=Object.defineProperty,k=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,O=(a,e,n)=>e in a?Ee(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,Re=(a,e)=>{for(var n in e||(e={}))Ce.call(e,n)&&O(a,n,e[n]);if(k)for(var n of k(e))Be.call(e,n)&&O(a,n,e[n]);return a},De=JSON.parse('{"icon.title.chevron-left":"Pil til venstre"}'),Me=JSON.parse('{"icon.title.chevron-left":"Leftward arrow"}'),Te=JSON.parse('{"icon.title.chevron-left":"Nuoli vasemmalle"}'),K=["en","nb","fi","da","sv"],q="en",Je=()=>{let a;switch(Ie.NMP_BRAND){case"FINN":a="nb";break;case"TORI":a="fi";break;case"BLOCKET":a="sv";break;case"DBA":a="da";break;default:a="en"}return a},U=()=>{var a;const e=(a=document==null?void 0:document.location)==null?void 0:a.hostname;return e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":q},w=a=>K.find(e=>a===e||a.toLowerCase().includes(e))||U();function Fe(){var a;if(typeof window>"u"){const e=Je();return w(e)}try{const e=(a=document==null?void 0:document.documentElement)==null?void 0:a.lang,n=U();return K.includes(e)?w(e??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),w(n))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),q}}var Ae=(a,e,n,t)=>a==="nb"?n:a==="fi"?t:e,Ve=(a,e,n)=>{const t=Fe(),i=Ae(t,a,e,n);l.load(t,i),l.activate(t)};Ve(Me,De,Te);var He=l.t({message:"Leftward arrow",id:"icon.title.chevron-left",comment:"Title for chevron-left icon"}),Ke=a=>c.createElement("svg",Re({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${He}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 13.75 5 8.25l5.5-5.5"></path>`}},a)),qe=Ke;const z=c.forwardRef(({className:a,...e},n)=>{const{currentPage:t}=h();if(t===1)return null;const i=e["aria-label"]??l._({id:"pagination.aria.prev-page",message:"Previous page",comment:"Default screenreader message for previous page link in the pagination component"}),o=l._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"});return r.jsxs("a",{...e,ref:n,className:p(a,s.link,s.icon),rel:"prev nofollow",children:[r.jsxs("span",{className:s.a11y,children:[i,","]}),r.jsx(qe,{}),r.jsx("span",{className:s.a11y,children:o})]})});z.__docgenInfo={description:"",methods:[],displayName:"PrevPage"};const G=c.forwardRef(({currentPage:a,numPages:e,lastPage:n,createHref:t,className:i,onChange:o,...d},g)=>{if(X(Y,ee,Z),!t)throw new TypeError("createHref is undefined");const u=f=>m=>{o&&(m.preventDefault(),o(f))};return r.jsxs(E,{...d,ref:g,currentPage:a,lastPage:n,className:i,children:[r.jsx(M,{href:t(1),onClick:u(1)}),r.jsx(z,{href:t(a-1),onClick:u(a-1)}),r.jsx(H,{numPages:e,children:f=>r.jsx(V,{href:t(f),onClick:u(f)})}),r.jsx(C,{}),r.jsx(A,{href:t(a+1),onClick:u(a+1)})]})});G.__docgenInfo={description:"",methods:[],displayName:"Pagination"};const Xe={title:"Navigation/Pagination"},P=({initialPage:a=1,lastPage:e=30,...n})=>{const[t,i]=W.useState(a);return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{textAlign:"center",marginTop:"50px"},children:["currentPage: ",t,", lastPage: ",e]}),r.jsx(G,{...n,currentPage:t,numPages:3,lastPage:e,createHref:o=>`?page=${o}`,onChange:o=>i(o)})]})},v=()=>r.jsxs(r.Fragment,{children:[r.jsx(P,{initialPage:1,lastPage:10,"aria-labelledby":"pagination-1"}),r.jsx(P,{initialPage:10,lastPage:20,"aria-labelledby":"pagination-2"}),r.jsx(P,{initialPage:30,lastPage:30,"aria-labelledby":"pagination-3"})]});v.__docgenInfo={description:"",methods:[],displayName:"Normal"};var j,S,L;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`() => <>
    <Example initialPage={1} lastPage={10} aria-labelledby="pagination-1" />
    <Example initialPage={10} lastPage={20} aria-labelledby="pagination-2" />
    <Example initialPage={30} lastPage={30} aria-labelledby="pagination-3" />
  </>`,...(L=(S=v.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};const Ye=["Normal"];export{v as Normal,Ye as __namedExportsOrder,Xe as default};
