import{j as e,p as a}from"./index-lTKFmHqk.js";import{a as F,b as O}from"./index-BfCI3C4j.js";import{r as u}from"./index.m-CtIADANO.js";import{i as m}from"./index-ClUvnnK6.js";import{c as q}from"./close-16-C8lDrxCI.js";import{a as V}from"./i18n-BdZ5C-JL.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const I=JSON.parse('{"pill.aria.openFilter":"Open filter","pill.aria.removeFilter":["Remove filter ",["label"]]}'),L=JSON.parse('{"pill.aria.openFilter":"Avaa suodatin","pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}'),A=JSON.parse('{"pill.aria.openFilter":"Åpne filter","pill.aria.removeFilter":["Fjern filter ",["label"]]}');function s(l){return V(I,A,L),e.jsxs("div",{className:a.pill,children:[e.jsxs("button",{type:"button",onClick:l.onClick,className:u(l.canClose?"":l.className,{[a.button]:!0,[l.suggestion?a.suggestion:a.filter]:!0,[a.label]:!0,[l.canClose?a.labelWithClose:a.labelWithoutClose]:!0}),children:[e.jsx("span",{className:a.a11y,children:l.openSRLabel||m._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screenreader message for open filter",values:{label:l.label}})}),l.icon||e.jsx("span",{children:l.label})]}),l.canClose&&e.jsxs("button",{type:"button",className:u(l.className,{[a.button]:!0,[l.suggestion?a.suggestion:a.filter]:!0,[a.close]:!0}),onClick:l.onClose,children:[e.jsx("span",{className:a.a11y,children:l.closeSRLabel||m._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screenreader message for removal of the filter",values:{label:l.label}})}),e.jsx(q,{})]})]})}try{s.displayName="Pill",s.__docgenInfo={description:"",displayName:"Pill",props:{label:{defaultValue:null,description:"Render text inside of Pill",name:"label",required:!1,type:{name:"string"}},openSRLabel:{defaultValue:null,description:"Label read by screen readers when targetting a pill",name:"openSRLabel",required:!1,type:{name:"string"}},closeSRLabel:{defaultValue:null,description:"Label read by screen readers when targetting the pill close button",name:"closeSRLabel",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Render icon inside of Pill",name:"icon",required:!1,type:{name:"ReactNode"}},canClose:{defaultValue:{value:"false"},description:"Whether Pill should render a closing button, use onClick",name:"canClose",required:!1,type:{name:"boolean"}},suggestion:{defaultValue:{value:"false"},description:"Whether Pill should be rendered as a suggestion",name:"suggestion",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Action to be called when the Pill is clicked",name:"onClick",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"Action to be called when the close button is clicked",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"Additional styles applied to the Pill",name:"className",required:!1,type:{name:"string"}}}}}catch{}const G={title:"Buttons/Pill"},o=()=>e.jsx(s,{label:"Example"}),r=()=>e.jsx(s,{label:"Example",canClose:!0,onClose:()=>alert("remove")}),t=()=>e.jsx(s,{label:"Example",suggestion:!0}),i=()=>e.jsx(s,{label:"Example",suggestion:!0,canClose:!0,onClose:()=>alert("remove")}),n=()=>e.jsx(s,{label:"Example",onClick:()=>alert("pill is clicked"),suggestion:!0,canClose:!0,onClose:()=>alert("close is clicked")}),c=()=>e.jsxs("div",{className:"flex space-x-8",children:[e.jsx(s,{icon:e.jsx(F,{}),onClick:()=>alert("onClick event"),className:"py-12"}),e.jsx(s,{icon:e.jsx(O,{}),onClick:()=>alert("onClick event"),suggestion:!0,className:"py-12"})]});var d,p,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:'() => <Pill label="Example" />',...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,f,C;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Pill label="Example" canClose onClose={() => alert('remove')} />`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var x,h,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:'() => <Pill label="Example" suggestion />',...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var k,y,P;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Pill label="Example" suggestion canClose onClose={() => alert('remove')} />`,...(P=(y=i.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var j,N,S;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`() => <Pill label="Example" onClick={() => alert('pill is clicked')} suggestion canClose onClose={() => alert('close is clicked')} />`,...(S=(N=n.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var _,E,R;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`() => <div className="flex space-x-8">
    <Pill icon={<IconSearch16 />} onClick={() => alert('onClick event')} className="py-12" />
    <Pill icon={<IconPlus16 />} onClick={() => alert('onClick event')} suggestion className="py-12" />
  </div>`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const H=["Default","DefaultCanClose","Suggestion","SuggestionCanClose","PillOnClickAndOnClose","PillsWithIcon"];export{o as Default,r as DefaultCanClose,n as PillOnClickAndOnClose,c as PillsWithIcon,t as Suggestion,i as SuggestionCanClose,H as __namedExportsOrder,G as default};
