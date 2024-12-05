import{j as i,B as l}from"./index-ByHan1Yq.js";import{R as d,r as W}from"./index-wSCK2UMg.js";import{a as X}from"./i18n-D_GeL-Ou.js";import{r as p}from"./index.m-CtIADANO.js";import{i as c}from"./index-CO0CvHzQ.js";const E=d.createContext({currentPage:0,lastPage:0}),h=()=>d.useContext(E),C=d.forwardRef(({children:a,className:e,currentPage:n,lastPage:r,"aria-labelledby":o="pagination-heading",...t},s)=>{if(!Number.isInteger(n))throw new TypeError(`Invalid currentPage: ${JSON.stringify(n)}`);if(!Number.isInteger(r))throw new TypeError(`Invalid lastPage: ${JSON.stringify(r)}`);const g=d.useMemo(()=>({currentPage:Math.max(1,Math.min(n,r)),lastPage:Math.max(1,r)}),[n,r]),m=t["aria-label"]??c._({id:"pagination.aria.pagination",message:"Pages",comment:"Default screenreader message for pagination container in the pagination component"});return i.jsxs("nav",{...t,className:p(e,l.containerNav),"aria-labelledby":o,ref:s,children:[i.jsx("h1",{className:l.a11y,id:o,children:m}),i.jsx(E.Provider,{value:g,children:a})]})});C.__docgenInfo={description:"",methods:[],displayName:"PaginationContainer",props:{"aria-labelledby":{defaultValue:{value:"'pagination-heading'",computed:!1},required:!1}}};const J=d.forwardRef(({children:a,className:e,...n},r)=>{const{currentPage:o}=h(),t=a??c._({id:"pagination.label.current-page",message:"Page {currentPage}",values:{currentPage:o},comment:"Default message for current page label in the pagination component"});return i.jsx("span",{...n,className:p(e,l.currentPage),ref:r,children:t})});J.__docgenInfo={description:"",methods:[],displayName:"CurrentPage"};var Y={},Z=Object.defineProperty,N=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,y=(a,e,n)=>e in a?Z(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,ne=(a,e)=>{for(var n in e||(e={}))ee.call(e,n)&&y(a,n,e[n]);if(N)for(var n of N(e))ae.call(e,n)&&y(a,n,e[n]);return a},te=JSON.parse('{"icon.title.chevron-double-left":"Dobbel pil til venstre"}'),re=JSON.parse('{"icon.title.chevron-double-left":"Double leftward arrow"}'),ie=JSON.parse('{"icon.title.chevron-double-left":"Kaksi nuolta vasemmalle"}'),oe=JSON.parse('{"icon.title.chevron-double-left":"Dobbelt venstrepil"}'),se=JSON.parse('{"icon.title.chevron-double-left":"Dubbel vänsterpil"}'),B=["en","nb","fi","da","sv"],R="en",le=()=>{var a;let e;switch((a=process==null?void 0:Y)==null?void 0:a.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},D=()=>{var a;const e=(a=document==null?void 0:document.location)==null?void 0:a.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":R},P=a=>B.find(e=>a===e||a.toLowerCase().includes(e))||D();function ce(){var a;if(typeof window>"u"){const e=le();return P(e)}try{const e=(a=document==null?void 0:document.documentElement)==null?void 0:a.lang,n=D();return B.includes(e)?P(e??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),P(n))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),R}}var de=(a,e,n,r,o,t)=>a==="nb"?n:a==="fi"?r:a==="da"?o:a==="sv"?t:e,ge=(a,e,n,r,o)=>{const t=ce(),s=de(t,a,e,n,r,o);c.load(t,s),c.activate(t)};ge(re,te,ie,oe,se);var ue=c.t({message:"Double leftward arrow",id:"icon.title.chevron-double-left",comment:"Title for chevron-double-left icon"}),pe=a=>d.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${ue}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 13 2 8l5-5m7 10L9 8l5-5"></path>`}},a)),fe=pe;const M=d.forwardRef(({className:a,...e},n)=>{const{currentPage:r}=h();if(r<=2)return null;const o=e["aria-label"]??c._({id:"pagination.aria.first-page",message:"First page",comment:"Default screenreader message for first page link in the pagination component"}),t=c._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"});return i.jsxs("a",{ref:n,...e,className:p(a,[l.link,l.icon]),rel:"start",children:[i.jsxs("span",{className:l.a11y,children:[o,","]}),i.jsx(fe,{}),i.jsx("span",{className:l.a11y,children:t})]})});M.__docgenInfo={description:"",methods:[],displayName:"FirstPage"};const me=JSON.parse('{"pagination.aria.first-page":"Første side","pagination.aria.icon-suffix":"ikon","pagination.aria.next-page":"Næste side","pagination.label.current-page":["Side ",["currentPage"]],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":"Sider","pagination.aria.prev-page":"Forrige side"}'),ve=JSON.parse('{"pagination.aria.first-page":"First page","pagination.aria.icon-suffix":"icon","pagination.aria.next-page":"Next page","pagination.label.current-page":["Page ",["currentPage"]],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":"Pages","pagination.aria.prev-page":"Previous page"}'),he=JSON.parse('{"pagination.aria.first-page":"Ensimmäinen sivu","pagination.aria.icon-suffix":"kuvake","pagination.aria.next-page":"Seuraava sivu","pagination.label.current-page":["Sivu ",["currentPage"]],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":"Sivut","pagination.aria.prev-page":"Edellinen sivu"}'),be=JSON.parse('{"pagination.aria.first-page":"Første side","pagination.aria.icon-suffix":"ikon","pagination.aria.next-page":"Neste side","pagination.label.current-page":["Side ",["currentPage"]],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":"Sider","pagination.aria.prev-page":"Forrige side"}'),_e=JSON.parse('{"pagination.aria.first-page":"Första sidan","pagination.aria.icon-suffix":"ikon","pagination.aria.next-page":"Nästa sida","pagination.label.current-page":["Sida ",["currentPage"]],"pagination.aria.page":["Sida ",["currentPage"]],"pagination.aria.pagination":"Sidor","pagination.aria.prev-page":"Föregående sida"}');var Pe={},we=Object.defineProperty,$=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,S=(a,e,n)=>e in a?we(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,ye=(a,e)=>{for(var n in e||(e={}))xe.call(e,n)&&S(a,n,e[n]);if($)for(var n of $(e))Ne.call(e,n)&&S(a,n,e[n]);return a},$e=JSON.parse('{"icon.title.chevron-right":"Pil til høyre"}'),Se=JSON.parse('{"icon.title.chevron-right":"Rightward arrow"}'),Oe=JSON.parse('{"icon.title.chevron-right":"Nuoli oikealle"}'),ke=JSON.parse('{"icon.title.chevron-right":"Pil til højre"}'),je=JSON.parse('{"icon.title.chevron-right":"Pil höger"}'),F=["en","nb","fi","da","sv"],T="en",Le=()=>{var a;let e;switch((a=process==null?void 0:Pe)==null?void 0:a.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},A=()=>{var a;const e=(a=document==null?void 0:document.location)==null?void 0:a.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":T},w=a=>F.find(e=>a===e||a.toLowerCase().includes(e))||A();function Ie(){var a;if(typeof window>"u"){const e=Le();return w(e)}try{const e=(a=document==null?void 0:document.documentElement)==null?void 0:a.lang,n=A();return F.includes(e)?w(e??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),w(n))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),T}}var Ee=(a,e,n,r,o,t)=>a==="nb"?n:a==="fi"?r:a==="da"?o:a==="sv"?t:e,Ce=(a,e,n,r,o)=>{const t=Ie(),s=Ee(t,a,e,n,r,o);c.load(t,s),c.activate(t)};Ce(Se,$e,Oe,ke,je);var Je=c.t({message:"Rightward arrow",id:"icon.title.chevron-right",comment:"Title for chevron-right icon"}),Be=a=>d.createElement("svg",ye({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Je}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.5 13.75 5.5-5.5-5.5-5.5"></path>`}},a)),Re=Be;const V=d.forwardRef(({className:a,noFollow:e,...n},r)=>{const{currentPage:o,lastPage:t}=h();if(o>=t)return null;const s=n["aria-label"]??c._({id:"pagination.aria.next-page",message:"Next page",comment:"Default screenreader message for next page link in the pagination component"}),g=c._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"});return i.jsx(i.Fragment,{children:i.jsxs("a",{...n,ref:r,rel:`next${e?" nofollow":""}`,className:p(a,[l.link,l.icon]),children:[i.jsxs("span",{className:l.a11y,children:[s,","]}),i.jsx(Re,{}),i.jsx("span",{className:l.a11y,children:g})]})})});V.__docgenInfo={description:"",methods:[],displayName:"NextPage"};const H=d.forwardRef(({page:a=1,className:e,currentPage:n,noFollow:r,...o},t)=>{const s=a===n,g=o["aria-label"]??c._({id:"pagination.aria.page",message:"Page {currentPage}",values:{currentPage:a},comment:"Default screenreader message for page link in the pagination component"});return i.jsx("a",{"aria-label":g,...o,ref:t,rel:`${r?"nofollow":""}`,"aria-current":s?"page":void 0,className:p(e,[l.link,[s?l.active:l.notActive]]),children:a})});H.__docgenInfo={description:"",methods:[],displayName:"Page",props:{page:{defaultValue:{value:"1",computed:!1},required:!1}}};const K=d.forwardRef(({children:a,numPages:e=7,className:n,...r},o)=>{const{currentPage:t,lastPage:s}=h(),g=Math.max(t-3,0),m=Math.min(g+e,s),f=Array.from(Array(m-g).keys()).map((u,_)=>g+_+1);return i.jsx("div",{...r,className:p(n,l.pages),ref:o,children:f.map(u=>d.cloneElement(a(u),{key:u,page:u,currentPage:t}))})});K.__docgenInfo={description:"",methods:[],displayName:"Pages",props:{numPages:{defaultValue:{value:"7",computed:!1},required:!1}}};var De={},Me=Object.defineProperty,O=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,k=(a,e,n)=>e in a?Me(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,Ae=(a,e)=>{for(var n in e||(e={}))Fe.call(e,n)&&k(a,n,e[n]);if(O)for(var n of O(e))Te.call(e,n)&&k(a,n,e[n]);return a},Ve=JSON.parse('{"icon.title.chevron-left":"Pil til venstre"}'),He=JSON.parse('{"icon.title.chevron-left":"Leftward arrow"}'),Ke=JSON.parse('{"icon.title.chevron-left":"Nuoli vasemmalle"}'),qe=JSON.parse('{"icon.title.chevron-left":"Pil til venstre"}'),Ue=JSON.parse('{"icon.title.chevron-left":"Pil vänster"}'),q=["en","nb","fi","da","sv"],U="en",ze=()=>{var a;let e;switch((a=process==null?void 0:De)==null?void 0:a.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},z=()=>{var a;const e=(a=document==null?void 0:document.location)==null?void 0:a.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":U},x=a=>q.find(e=>a===e||a.toLowerCase().includes(e))||z();function Ge(){var a;if(typeof window>"u"){const e=ze();return x(e)}try{const e=(a=document==null?void 0:document.documentElement)==null?void 0:a.lang,n=z();return q.includes(e)?x(e??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),x(n))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),U}}var Qe=(a,e,n,r,o,t)=>a==="nb"?n:a==="fi"?r:a==="da"?o:a==="sv"?t:e,We=(a,e,n,r,o)=>{const t=Ge(),s=Qe(t,a,e,n,r,o);c.load(t,s),c.activate(t)};We(He,Ve,Ke,qe,Ue);var Xe=c.t({message:"Leftward arrow",id:"icon.title.chevron-left",comment:"Title for chevron-left icon"}),Ye=a=>d.createElement("svg",Ae({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Xe}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 13.75 5 8.25l5.5-5.5"></path>`}},a)),Ze=Ye;const G=d.forwardRef(({className:a,noFollow:e,...n},r)=>{const{currentPage:o}=h();if(o===1)return null;const t=n["aria-label"]??c._({id:"pagination.aria.prev-page",message:"Previous page",comment:"Default screenreader message for previous page link in the pagination component"}),s=c._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"});return i.jsxs("a",{...n,ref:r,className:p(a,[l.link,l.icon]),rel:`prev${e?" nofollow":""}`,children:[i.jsxs("span",{className:l.a11y,children:[t,","]}),i.jsx(Ze,{}),i.jsx("span",{className:l.a11y,children:s})]})});G.__docgenInfo={description:"",methods:[],displayName:"PrevPage"};const Q=d.forwardRef(({currentPage:a,numPages:e,lastPage:n,createHref:r,className:o,onChange:t,noFollow:s,...g},m)=>{if(X(ve,be,he,me,_e),!r)throw new TypeError("createHref is undefined");const f=u=>_=>{t&&(_.preventDefault(),t(u))};return i.jsxs(C,{...g,ref:m,currentPage:a,lastPage:n,className:o,children:[i.jsx(M,{href:r(1),onClick:f(1)}),i.jsx(G,{href:r(a-1),onClick:f(a-1),noFollow:s}),i.jsx(K,{numPages:e,children:u=>i.jsx(H,{href:r(u),onClick:f(u),noFollow:s})}),i.jsx(J,{}),i.jsx(V,{href:r(a+1),onClick:f(a+1),noFollow:s})]})});Q.__docgenInfo={description:"",methods:[],displayName:"Pagination"};const ia={title:"Navigation/Pagination"},b=({initialPage:a=1,lastPage:e=30,...n})=>{const[r,o]=W.useState(a);return i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{textAlign:"center",marginTop:"50px"},children:["currentPage: ",r,", lastPage: ",e]}),i.jsx(Q,{...n,currentPage:r,numPages:3,lastPage:e,createHref:t=>`?page=${t}`,onChange:t=>o(t)})]})},v=()=>i.jsxs(i.Fragment,{children:[i.jsx(b,{initialPage:1,lastPage:10,"aria-labelledby":"pagination-1"}),i.jsx(b,{initialPage:10,lastPage:20,"aria-labelledby":"pagination-2"}),i.jsx(b,{initialPage:30,lastPage:30,"aria-labelledby":"pagination-3"}),i.jsx(b,{initialPage:1,lastPage:10,"aria-labelledby":"pagination-4",noFollow:!0})]});v.__docgenInfo={description:"",methods:[],displayName:"Normal"};var j,L,I;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`() => <>
    <Example initialPage={1} lastPage={10} aria-labelledby="pagination-1" />
    <Example initialPage={10} lastPage={20} aria-labelledby="pagination-2" />
    <Example initialPage={30} lastPage={30} aria-labelledby="pagination-3" />
    <Example initialPage={1} lastPage={10} aria-labelledby="pagination-4" noFollow />
  </>`,...(I=(L=v.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const oa=["Normal"];export{v as Normal,oa as __namedExportsOrder,ia as default};
