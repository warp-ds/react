import{e as s,b as fe,j as n}from"./index-DUX2OMdT.js";import{R as _,r as Z}from"./index-unuZPxnm.js";import{I as be}from"./index-Bcvv4yF6.js";import{r as d}from"./index.m-DF_LekKB.js";import{c as ve}from"./chevron-down-16-DXb5mjaS.js";import{i as E}from"./index-9vLJjdTH.js";import{U as ge,E as _e}from"./unstyled-heading-CgEz-mbs.js";import"./help-text-8uk7eMj8.js";import"./close-16-CCE9yTZ3.js";import"./item-BT9ZO5ei.js";var Ie={},Ne=Object.defineProperty,y=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,O=(a,e,t)=>e in a?Ne(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,Ce=(a,e)=>{for(var t in e||(e={}))je.call(e,t)&&O(a,t,e[t]);if(y)for(var t of y(e))Ee.call(e,t)&&O(a,t,e[t]);return a},we=JSON.parse('{"icon.title.chevron-up":["Oppoverpil"]}'),ye=JSON.parse('{"icon.title.chevron-up":["Upward arrow"]}'),Oe=JSON.parse('{"icon.title.chevron-up":["Nuoli ylöspäin"]}'),Se=JSON.parse('{"icon.title.chevron-up":["Pil opad"]}'),Be=JSON.parse('{"icon.title.chevron-up":["Pil upp"]}'),ee=["en","nb","fi","da","sv"],ae="en",Te=()=>{var a;let e;switch((a=process==null?void 0:Ie)==null?void 0:a.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ne=()=>{var a;const e=(a=document==null?void 0:document.location)==null?void 0:a.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ae},j=a=>ee.find(e=>a===e||a.toLowerCase().includes(e))||ne();function Le(){var a;if(typeof window>"u"){const e=Te();return j(e)}try{const e=(a=document==null?void 0:document.documentElement)==null?void 0:a.lang,t=ne();return ee.includes(e)?j(e??t):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),j(t))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ae}}var Ae=(a,e,t,r,o,i)=>a==="nb"?t:a==="fi"?r:a==="da"?o:a==="sv"?i:e,ke=(a,e,t,r,o)=>{const i=Le(),I=Ae(i,a,e,t,r,o);E.load(i,I),E.activate(i)};ke(ye,we,Oe,Se,Be);var Pe=E.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"}),Ue=a=>_.createElement("svg",Ce({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Pe}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path>`}},a)),Re=Ue;function l(a){const{children:e,expanded:t=!1,title:r="",box:o=!1,bleed:i=!1,buttonClass:I="",contentClass:te="",className:De,onChange:C,chevron:se=!0,animated:re,headingLevel:oe,...le}=a,[c,w]=_.useState(t),[N,ie]=_.useState(t);_.useEffect(()=>{w(t)},[t]);const de=p=>{w(!p),setTimeout(()=>{ie(!p)},200),C&&C(!p)},ce=d([s.wrapper,o&&s.box,i&&s.bleed]),pe=d(I,[s.button,o&&s.buttonBox]),me=d([s.chevron,!o&&s.chevronNonBox]),ue=()=>{const p=d([s.chevronTransform,!c&&N&&s.chevronCollapse]),xe=d([s.chevronTransform,c&&!N&&s.chevronExpand]);return N?n.jsx(Re,{className:p}):n.jsx(ve,{className:xe})},he=d(te,[o&&fe.base,o&&r&&s.contentWithTitle]);return n.jsxs("div",{...le,className:ce,children:[n.jsx(ge,{level:oe,children:n.jsx("button",{type:"button","aria-expanded":c,className:pe,onClick:()=>de(c),children:n.jsxs("div",{className:s.title,children:[typeof r=="string"?n.jsx("span",{className:s.titleType,children:r}):r,se&&n.jsx("div",{className:me,children:ue()})]})})}),n.jsx(He,{animated:re,stateExpanded:c,children:n.jsx("div",{className:he,children:e})})]})}function He({animated:a,stateExpanded:e,children:t}){const r=d([s.expansion,!e&&s.expansionNotExpanded]);return a?n.jsx(_e,{show:e,children:t}):n.jsx("div",{className:r,"data-testid":"expandable-content","aria-hidden":e?void 0:!0,children:t})}l.__docgenInfo={description:"",methods:[],displayName:"Expandable"};const Qe={title:"Layout/Expandable"},m=()=>n.jsx(l,{title:"This is a title",children:n.jsx("h2",{children:"I am expandable"})}),u=()=>n.jsx(l,{title:"This is a title",box:!0,children:n.jsx("h2",{children:"I am expandable"})}),h=()=>n.jsx(l,{title:n.jsxs("div",{className:"flex flex-row items-center",children:[n.jsx("p",{className:"mr-8 mb-0",children:"This is a title with an icon"}),n.jsx("span",{className:"sr-only",children:","}),n.jsx(be,{})]}),box:!0,children:n.jsx("h2",{children:"I am expandable"})}),x=()=>{const[a,e]=Z.useState(!1);return n.jsx(l,{title:a?"Open":"Closed",box:!0,onChange:e,children:n.jsx("h1",{children:"I am expandable"})})},f=()=>{const[a,e]=Z.useState(!1);return n.jsx(l,{title:a?"Open":"Closed",box:!0,chevron:!1,onChange:e,children:n.jsx("h2",{children:"I am expandable"})})},b=()=>n.jsx(l,{title:"Animated box",box:!0,animated:!0,children:n.jsx("h2",{children:"I am expandable"})}),v=()=>n.jsx(l,{title:"Animated box",expanded:!0,box:!0,animated:!0,children:n.jsx("h2",{children:"I am expandable"})}),g=()=>n.jsx(l,{title:"I'm also a heading",headingLevel:2,children:n.jsx("h2",{children:"I am expandable"})});m.__docgenInfo={description:"",methods:[],displayName:"Default"};u.__docgenInfo={description:"",methods:[],displayName:"Box"};h.__docgenInfo={description:"",methods:[],displayName:"BoxWithCustomIcon"};x.__docgenInfo={description:"",methods:[],displayName:"Controlled"};f.__docgenInfo={description:"",methods:[],displayName:"NoChevron"};b.__docgenInfo={description:"",methods:[],displayName:"Animated"};v.__docgenInfo={description:"",methods:[],displayName:"AnimatedExpanded"};g.__docgenInfo={description:"",methods:[],displayName:"Heading"};var S,B,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => <Expandable title="This is a title">
    <h2>I am expandable</h2>
  </Expandable>`,...(T=(B=m.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var L,A,k;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`() => <Expandable title="This is a title" box>
    <h2>I am expandable</h2>
  </Expandable>`,...(k=(A=u.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var P,U,R;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`() => <Expandable title={<div className="flex flex-row items-center">
        <p className="mr-8 mb-0">This is a title with an icon</p>
        <span className="sr-only">,</span>
        <IconBag16 />
      </div>} box>
    <h2>I am expandable</h2>
  </Expandable>`,...(R=(U=h.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var H,D,J;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <Expandable title={open ? 'Open' : 'Closed'} box onChange={setOpen}>
      <h1>I am expandable</h1>
    </Expandable>;
}`,...(J=(D=x.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var M,W,$;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <Expandable title={open ? 'Open' : 'Closed'} box chevron={false} onChange={setOpen}>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...($=(W=f.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var F,K,V;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`() => <Expandable title="Animated box" box animated>
    <h2>I am expandable</h2>
  </Expandable>`,...(V=(K=b.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var q,z,G;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`() => <Expandable title="Animated box" expanded box animated>
    <h2>I am expandable</h2>
  </Expandable>`,...(G=(z=v.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`() => <Expandable title="I'm also a heading" headingLevel={2}>
    <h2>I am expandable</h2>
  </Expandable>`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Xe=["Default","Box","BoxWithCustomIcon","Controlled","NoChevron","Animated","AnimatedExpanded","Heading"];export{b as Animated,v as AnimatedExpanded,u as Box,h as BoxWithCustomIcon,x as Controlled,m as Default,g as Heading,f as NoChevron,Xe as __namedExportsOrder,Qe as default};
