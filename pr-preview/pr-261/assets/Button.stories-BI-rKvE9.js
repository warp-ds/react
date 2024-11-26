import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{b as D,a as R}from"./index-DmYUKd42.js";import{r as m}from"./index.m-CtIADANO.js";import{i as d}from"./index-XDhxfy0k.js";import{p as s}from"./index-CDQzWLZ0.js";import{c as W}from"./close-16-C57eqN4L.js";import{a as A}from"./i18n-ClE17yBR.js";import"./index-DJO9vBfz.js";const J=JSON.parse('{"pill.aria.openFilter":"Åbn filter","pill.aria.removeFilter":["Fjern filter ",["label"]]}'),$=JSON.parse('{"pill.aria.openFilter":"Open filter","pill.aria.removeFilter":["Remove filter ",["label"]]}'),B=JSON.parse('{"pill.aria.openFilter":"Avaa suodatin","pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}'),L=JSON.parse('{"pill.aria.openFilter":"Åpne filter","pill.aria.removeFilter":["Fjern filter ",["label"]]}');function a(l){A($,L,B,J);const O=m(!l.canClose&&l.className,[s.button,s.label,l.suggestion?s.suggestion:s.filter,l.canClose?s.labelWithClose:s.labelWithoutClose]),E=m(l.className,[s.button,s.close,l.suggestion?s.suggestion:s.filter]);return e.jsxs("div",{className:s.wrapper,children:[e.jsxs("button",{type:"button",onClick:l.onClick,className:O,children:[e.jsx("span",{className:s.a11y,children:l.openSRLabel||d._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screenreader message for open filter",values:{label:l.label}})}),l.icon||e.jsx("span",{children:l.label})]}),l.canClose&&e.jsxs("button",{type:"button",className:E,onClick:l.onClose,children:[e.jsx("span",{className:s.a11y,children:l.closeSRLabel||d._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screenreader message for removal of the filter",values:{label:l.label}})}),e.jsx(W,{})]})]})}a.__docgenInfo={description:"",methods:[],displayName:"Pill"};const Q={title:"Buttons/Pill"},o=()=>e.jsx(a,{label:"Example"}),i=()=>e.jsx(a,{label:"Example",canClose:!0,onClose:()=>alert("remove")}),r=()=>e.jsx(a,{label:"Example",suggestion:!0}),t=()=>e.jsx(a,{label:"Example",suggestion:!0,canClose:!0,onClose:()=>alert("remove")}),n=()=>e.jsx(a,{label:"Example",onClick:()=>alert("pill is clicked"),suggestion:!0,canClose:!0,onClose:()=>alert("close is clicked")}),c=()=>e.jsxs("div",{className:"flex space-x-8",children:[e.jsx(a,{icon:e.jsx(D,{}),onClick:()=>alert("onClick event"),className:"py-12"}),e.jsx(a,{icon:e.jsx(R,{}),onClick:()=>alert("onClick event"),suggestion:!0,className:"py-12"})]});o.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"DefaultCanClose"};r.__docgenInfo={description:"",methods:[],displayName:"Suggestion"};t.__docgenInfo={description:"",methods:[],displayName:"SuggestionCanClose"};n.__docgenInfo={description:"",methods:[],displayName:"PillOnClickAndOnClose"};c.__docgenInfo={description:"",methods:[],displayName:"PillsWithIcon"};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:'() => <Pill label="Example" />',...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var C,f,b;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Pill label="Example" canClose onClose={() => alert('remove')} />`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,v,N;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:'() => <Pill label="Example" suggestion />',...(N=(v=r.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var h,j,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Pill label="Example" suggestion canClose onClose={() => alert('remove')} />`,...(k=(j=t.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var S,_,P;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`() => <Pill label="Example" onClick={() => alert('pill is clicked')} suggestion canClose onClose={() => alert('close is clicked')} />`,...(P=(_=n.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var y,I,F;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`() => <div className="flex space-x-8">
    <Pill icon={<IconSearch16 />} onClick={() => alert('onClick event')} className="py-12" />
    <Pill icon={<IconPlus16 />} onClick={() => alert('onClick event')} suggestion className="py-12" />
  </div>`,...(F=(I=c.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const U=["Default","DefaultCanClose","Suggestion","SuggestionCanClose","PillOnClickAndOnClose","PillsWithIcon"];export{o as Default,i as DefaultCanClose,n as PillOnClickAndOnClose,c as PillsWithIcon,r as Suggestion,t as SuggestionCanClose,U as __namedExportsOrder,Q as default};