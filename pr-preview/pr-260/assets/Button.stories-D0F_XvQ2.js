import{j as e,p as s}from"./index-BXOgzrE8.js";import{b as O,a as E}from"./index-DPvnhd1s.js";import{r as m}from"./index.m-CtIADANO.js";import{i as d}from"./index-1YnX0IqW.js";import{c as D}from"./close-16-BgEbf248.js";import{a as R}from"./i18n-CHMFe01U.js";import"./index-RYns6xqu.js";const W=JSON.parse('{"pill.aria.openFilter":"Åbn filter","pill.aria.removeFilter":["Fjern filter ",["label"]]}'),A=JSON.parse('{"pill.aria.openFilter":"Open filter","pill.aria.removeFilter":["Remove filter ",["label"]]}'),J=JSON.parse('{"pill.aria.openFilter":"Avaa suodatin","pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}'),$=JSON.parse('{"pill.aria.openFilter":"Åpne filter","pill.aria.removeFilter":["Fjern filter ",["label"]]}');function a(l){return R(A,$,J,W),e.jsxs("div",{className:s.pill,children:[e.jsxs("button",{type:"button",onClick:l.onClick,className:m(l.canClose?"":l.className,{[s.button]:!0,[l.suggestion?s.suggestion:s.filter]:!0,[s.label]:!0,[l.canClose?s.labelWithClose:s.labelWithoutClose]:!0}),children:[e.jsx("span",{className:s.a11y,children:l.openSRLabel||d._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screenreader message for open filter",values:{label:l.label}})}),l.icon||e.jsx("span",{children:l.label})]}),l.canClose&&e.jsxs("button",{type:"button",className:m(l.className,{[s.button]:!0,[l.suggestion?s.suggestion:s.filter]:!0,[s.close]:!0}),onClick:l.onClose,children:[e.jsx("span",{className:s.a11y,children:l.closeSRLabel||d._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screenreader message for removal of the filter",values:{label:l.label}})}),e.jsx(D,{})]})]})}a.__docgenInfo={description:"",methods:[],displayName:"Pill"};const H={title:"Buttons/Pill"},o=()=>e.jsx(a,{label:"Example"}),r=()=>e.jsx(a,{label:"Example",canClose:!0,onClose:()=>alert("remove")}),i=()=>e.jsx(a,{label:"Example",suggestion:!0}),t=()=>e.jsx(a,{label:"Example",suggestion:!0,canClose:!0,onClose:()=>alert("remove")}),n=()=>e.jsx(a,{label:"Example",onClick:()=>alert("pill is clicked"),suggestion:!0,canClose:!0,onClose:()=>alert("close is clicked")}),c=()=>e.jsxs("div",{className:"flex space-x-8",children:[e.jsx(a,{icon:e.jsx(O,{}),onClick:()=>alert("onClick event"),className:"py-12"}),e.jsx(a,{icon:e.jsx(E,{}),onClick:()=>alert("onClick event"),suggestion:!0,className:"py-12"})]});o.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"DefaultCanClose"};i.__docgenInfo={description:"",methods:[],displayName:"Suggestion"};t.__docgenInfo={description:"",methods:[],displayName:"SuggestionCanClose"};n.__docgenInfo={description:"",methods:[],displayName:"PillOnClickAndOnClose"};c.__docgenInfo={description:"",methods:[],displayName:"PillsWithIcon"};var u,p,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:'() => <Pill label="Example" />',...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var C,f,b;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Pill label="Example" canClose onClose={() => alert('remove')} />`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,v,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:'() => <Pill label="Example" suggestion />',...(N=(v=i.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var h,j,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Pill label="Example" suggestion canClose onClose={() => alert('remove')} />`,...(k=(j=t.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var S,_,P;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`() => <Pill label="Example" onClick={() => alert('pill is clicked')} suggestion canClose onClose={() => alert('close is clicked')} />`,...(P=(_=n.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var y,I,F;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`() => <div className="flex space-x-8">
    <Pill icon={<IconSearch16 />} onClick={() => alert('onClick event')} className="py-12" />
    <Pill icon={<IconPlus16 />} onClick={() => alert('onClick event')} suggestion className="py-12" />
  </div>`,...(F=(I=c.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const K=["Default","DefaultCanClose","Suggestion","SuggestionCanClose","PillOnClickAndOnClose","PillsWithIcon"];export{o as Default,r as DefaultCanClose,n as PillOnClickAndOnClose,c as PillsWithIcon,i as Suggestion,t as SuggestionCanClose,K as __namedExportsOrder,H as default};
