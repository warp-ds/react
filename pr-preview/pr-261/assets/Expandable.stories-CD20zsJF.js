import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{R as g,r as Y}from"./index-DJO9vBfz.js";import{I as be}from"./index-DC5dpHnm.js";import{r as i}from"./index.m-CtIADANO.js";import{e as s,b as ve}from"./index-C7q3YkzA.js";import{c as fe}from"./chevron-down-16-DnDZSQbm.js";import{i as j}from"./index-XDhxfy0k.js";import{U as ge,E as _e}from"./unstyled-heading-DdyQmrwH.js";import"./help-text-BfMGXKgQ.js";import"./close-16-C57eqN4L.js";import"./item-C_uYoA5-.js";var Ie={},Ne=Object.defineProperty,w=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,y=(a,e,t)=>e in a?Ne(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,Ce=(a,e)=>{for(var t in e||(e={}))je.call(e,t)&&y(a,t,e[t]);if(w)for(var t of w(e))Ee.call(e,t)&&y(a,t,e[t]);return a},we=JSON.parse('{"icon.title.chevron-up":"Oppoverpil"}'),ye=JSON.parse('{"icon.title.chevron-up":"Upward arrow"}'),Oe=JSON.parse('{"icon.title.chevron-up":"Nuoli ylöspäin"}'),Se=JSON.parse('{"icon.title.chevron-up":"Pil opad"}'),Z=["en","nb","fi","da","sv"],ee="en",Be=()=>{var a;let e;switch((a=process==null?void 0:Ie)==null?void 0:a.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ae=()=>{var a;const e=(a=document==null?void 0:document.location)==null?void 0:a.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ee},N=a=>Z.find(e=>a===e||a.toLowerCase().includes(e))||ae();function Te(){var a;if(typeof window>"u"){const e=Be();return N(e)}try{const e=(a=document==null?void 0:document.documentElement)==null?void 0:a.lang,t=ae();return Z.includes(e)?N(e??t):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),N(t))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ee}}var Le=(a,e,t,r,o)=>a==="nb"?t:a==="fi"?r:a==="da"?o:e,Ae=(a,e,t,r)=>{const o=Te(),_=Le(o,a,e,t,r);j.load(o,_),j.activate(o)};Ae(ye,we,Oe,Se);var ke=j.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"}),Pe=a=>g.createElement("svg",Ce({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${ke}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path>`}},a)),Ue=Pe;function l(a){const{children:e,expanded:t=!1,title:r="",box:o=!1,bleed:_=!1,buttonClass:ne="",contentClass:te="",className:He,onChange:E,chevron:se=!0,animated:oe,headingLevel:re,...le}=a,[d,C]=g.useState(t),[I,ie]=g.useState(t);g.useEffect(()=>{C(t)},[t]);const de=c=>{C(!c),setTimeout(()=>{ie(!c)},200),E&&E(!c)},ce=i([s.wrapper,o&&s.box,_&&s.bleed]),pe=i(ne,[s.button,o&&s.buttonBox]),me=i([s.chevron,!o&&s.chevronNonBox]),ue=()=>{const c=i([s.chevronTransform,!d&&I&&s.chevronCollapse]),xe=i([s.chevronTransform,d&&!I&&s.chevronExpand]);return I?n.jsx(Ue,{className:c}):n.jsx(fe,{className:xe})},he=i(te,[o&&ve.base,o&&r&&s.contentWithTitle]);return n.jsxs("div",{...le,className:ce,children:[n.jsx(ge,{level:re,children:n.jsx("button",{type:"button","aria-expanded":d,className:pe,onClick:()=>de(d),children:n.jsxs("div",{className:s.title,children:[typeof r=="string"?n.jsx("span",{className:s.titleType,children:r}):r,se&&n.jsx("div",{className:me,children:ue()})]})})}),n.jsx(Re,{animated:oe,stateExpanded:d,children:n.jsx("div",{className:he,children:e})})]})}function Re({animated:a,stateExpanded:e,children:t}){const r=i([s.expansion,!e&&s.expansionNotExpanded]);return a?n.jsx(_e,{show:e,children:t}):n.jsx("div",{className:r,"data-testid":"expandable-content","aria-hidden":e?void 0:!0,children:t})}l.__docgenInfo={description:"",methods:[],displayName:"Expandable"};const Qe={title:"Layout/Expandable"},p=()=>n.jsx(l,{title:"This is a title",children:n.jsx("h2",{children:"I am expandable"})}),m=()=>n.jsx(l,{title:"This is a title",box:!0,children:n.jsx("h2",{children:"I am expandable"})}),u=()=>n.jsx(l,{title:n.jsxs("div",{className:"flex flex-row items-center",children:[n.jsx("p",{className:"mr-8 mb-0",children:"This is a title with an icon"}),n.jsx("span",{className:"sr-only",children:","}),n.jsx(be,{})]}),box:!0,children:n.jsx("h2",{children:"I am expandable"})}),h=()=>{const[a,e]=Y.useState(!1);return n.jsx(l,{title:a?"Open":"Closed",box:!0,onChange:e,children:n.jsx("h1",{children:"I am expandable"})})},x=()=>{const[a,e]=Y.useState(!1);return n.jsx(l,{title:a?"Open":"Closed",box:!0,chevron:!1,onChange:e,children:n.jsx("h2",{children:"I am expandable"})})},b=()=>n.jsx(l,{title:"Animated box",box:!0,animated:!0,children:n.jsx("h2",{children:"I am expandable"})}),v=()=>n.jsx(l,{title:"Animated box",expanded:!0,box:!0,animated:!0,children:n.jsx("h2",{children:"I am expandable"})}),f=()=>n.jsx(l,{title:"I'm also a heading",headingLevel:2,children:n.jsx("h2",{children:"I am expandable"})});p.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"Box"};u.__docgenInfo={description:"",methods:[],displayName:"BoxWithCustomIcon"};h.__docgenInfo={description:"",methods:[],displayName:"Controlled"};x.__docgenInfo={description:"",methods:[],displayName:"NoChevron"};b.__docgenInfo={description:"",methods:[],displayName:"Animated"};v.__docgenInfo={description:"",methods:[],displayName:"AnimatedExpanded"};f.__docgenInfo={description:"",methods:[],displayName:"Heading"};var O,S,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`() => <Expandable title="This is a title">
    <h2>I am expandable</h2>
  </Expandable>`,...(B=(S=p.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var T,L,A;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`() => <Expandable title="This is a title" box>
    <h2>I am expandable</h2>
  </Expandable>`,...(A=(L=m.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var k,P,U;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Expandable title={<div className="flex flex-row items-center">
        <p className="mr-8 mb-0">This is a title with an icon</p>
        <span className="sr-only">,</span>
        <IconBag16 />
      </div>} box>
    <h2>I am expandable</h2>
  </Expandable>`,...(U=(P=u.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var R,H,D;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <Expandable title={open ? 'Open' : 'Closed'} box onChange={setOpen}>
      <h1>I am expandable</h1>
    </Expandable>;
}`,...(D=(H=h.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var J,M,W;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <Expandable title={open ? 'Open' : 'Closed'} box chevron={false} onChange={setOpen}>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...(W=(M=x.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var $,F,K;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`() => <Expandable title="Animated box" box animated>
    <h2>I am expandable</h2>
  </Expandable>`,...(K=(F=b.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var V,q,z;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`() => <Expandable title="Animated box" expanded box animated>
    <h2>I am expandable</h2>
  </Expandable>`,...(z=(q=v.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,Q,X;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`() => <Expandable title="I'm also a heading" headingLevel={2}>
    <h2>I am expandable</h2>
  </Expandable>`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Xe=["Default","Box","BoxWithCustomIcon","Controlled","NoChevron","Animated","AnimatedExpanded","Heading"];export{b as Animated,v as AnimatedExpanded,m as Box,u as BoxWithCustomIcon,h as Controlled,p as Default,f as Heading,x as NoChevron,Xe as __namedExportsOrder,Qe as default};
