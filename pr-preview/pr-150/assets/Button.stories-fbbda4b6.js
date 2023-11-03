import{j as l,p as a}from"./index-a71f5096.js";import{r as u}from"./index.m-73ef1fbe.js";import{e as _,E as q}from"./icons-2017ea02.js";import"./index-b75aab2a.js";function s(e){return l.jsxs("div",{role:e.role===""?void 0:e.role,"aria-label":e["aria-label"]===""?void 0:e["aria-label"],className:a.pill,children:[l.jsx("button",{type:"button",onClick:e.onClick,className:u(e.canClose?"":e.className,{[a.button]:!0,[e.suggestion?a.suggestion:a.filter]:!0,[a.label]:!0,[e.canClose?a.labelWithClose:a.labelWithoutClose]:!0}),children:e.icon||l.jsx("span",{children:e.label})}),e.canClose&&l.jsx("button",{type:"button",className:u(e.className,{[a.button]:!0,[e.suggestion?a.suggestion:a.filter]:!0,[a.close]:!0}),onClick:e.onClose,children:l.jsx("span",{children:"x"})})]})}try{s.displayName="Pill",s.__docgenInfo={description:"",displayName:"Pill",props:{label:{defaultValue:null,description:"Render text inside of Pill",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Render icon inside of Pill",name:"icon",required:!1,type:{name:"ReactNode"}},canClose:{defaultValue:{value:"false"},description:"Whether Pill should render a closing button, use onClick",name:"canClose",required:!1,type:{name:"boolean"}},suggestion:{defaultValue:{value:"false"},description:"Whether Pill should be rendered as a suggestion",name:"suggestion",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Action to be called when the Pill is clicked",name:"onClick",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"Action to be called when the close button is clicked",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"Additional styles applied to the Pill",name:"className",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"Sets the ARIA role attribute for the pill component",name:"role",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Sets the aria-label attribute for the pill component",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}const O={title:"Buttons/Pill"},r=()=>l.jsx(s,{label:"Example"}),t=()=>l.jsx(s,{label:"Example",canClose:!0,onClose:()=>alert("remove")}),n=()=>l.jsx(s,{label:"Example",suggestion:!0}),o=()=>l.jsx(s,{label:"Example",suggestion:!0,canClose:!0,onClose:()=>alert("remove")}),i=()=>l.jsx(s,{label:"Example",onClick:()=>alert("pill is clicked"),suggestion:!0,canClose:!0,onClose:()=>alert("close is clicked")}),c=()=>l.jsxs("div",{className:"flex space-x-8",children:[l.jsx(s,{role:"img","aria-label":"a pill with a search icon",icon:l.jsx(_,{}),onClick:()=>alert("onClick event"),className:"py-12"}),l.jsx(s,{role:"img","aria-label":"a pill with a plus icon",icon:l.jsx(q,{}),onClick:()=>alert("onClick event"),suggestion:!0,className:"py-12"})]});var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Pill label='Example' />;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,C,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Pill label='Example' canClose onClose={() => alert('remove')} />;
}`,...(b=(C=t.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var f,x,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Pill label='Example' suggestion />;
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var k,P,y;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Pill label='Example' suggestion canClose onClose={() => alert('remove')} />;
}`,...(y=(P=o.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var v,j,N;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Pill label='Example' onClick={() => alert('pill is clicked')} suggestion canClose onClose={() => alert('close is clicked')} />;
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var E,S,V;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <div className='flex space-x-8'>
      <Pill role='img' aria-label='a pill with a search icon' icon={<IconSearch16 />} onClick={() => alert('onClick event')} className='py-12' />
      <Pill role='img' aria-label='a pill with a plus icon' icon={<IconPlus16 />} onClick={() => alert('onClick event')} suggestion className='py-12' />
    </div>;
}`,...(V=(S=c.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const R=["Default","DefaultCanClose","Suggestion","SuggestionCanClose","PillOnClickAndOnClose","PillsWithIcon"];export{r as Default,t as DefaultCanClose,i as PillOnClickAndOnClose,c as PillsWithIcon,n as Suggestion,o as SuggestionCanClose,R as __namedExportsOrder,O as default};
//# sourceMappingURL=Button.stories-fbbda4b6.js.map
