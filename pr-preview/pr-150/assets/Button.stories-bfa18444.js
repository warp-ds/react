import{j as e,p as a}from"./index-a71f5096.js";import{r as u}from"./index.m-73ef1fbe.js";import{e as _,E as V}from"./icons-2017ea02.js";import"./index-b75aab2a.js";function s(l){return e.jsxs("div",{role:"img","aria-label":l["aria-label"]===""?void 0:l["aria-label"],className:a.pill,children:[e.jsx("button",{type:"button",onClick:l.onClick,className:u(l.canClose?"":l.className,{[a.button]:!0,[l.suggestion?a.suggestion:a.filter]:!0,[a.label]:!0,[l.canClose?a.labelWithClose:a.labelWithoutClose]:!0}),children:l.icon||e.jsx("span",{children:l.label})}),l.canClose&&e.jsx("button",{type:"button",className:u(l.className,{[a.button]:!0,[l.suggestion?a.suggestion:a.filter]:!0,[a.close]:!0}),onClick:l.onClose,children:e.jsx("span",{children:"x"})})]})}try{s.displayName="Pill",s.__docgenInfo={description:"",displayName:"Pill",props:{label:{defaultValue:null,description:"Render text inside of Pill",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Render icon inside of Pill",name:"icon",required:!1,type:{name:"ReactNode"}},canClose:{defaultValue:{value:"false"},description:"Whether Pill should render a closing button, use onClick",name:"canClose",required:!1,type:{name:"boolean"}},suggestion:{defaultValue:{value:"false"},description:"Whether Pill should be rendered as a suggestion",name:"suggestion",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Action to be called when the Pill is clicked",name:"onClick",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"Action to be called when the close button is clicked",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"Additional styles applied to the Pill",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Sets the aria-label attribute for the pill component",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}const O={title:"Buttons/Pill"},t=()=>e.jsx(s,{"aria-label":"a pill that shows default behaviour",label:"Example"}),i=()=>e.jsx(s,{"aria-label":"a pill that you can close and that shows default behaviour",label:"Example",canClose:!0,onClose:()=>alert("remove")}),n=()=>e.jsx(s,{"aria-label":"a pill with suggestion",label:"Example",suggestion:!0}),o=()=>e.jsx(s,{"aria-label":"a pill with suggestion and that you can close",label:"Example",suggestion:!0,canClose:!0,onClose:()=>alert("remove")}),r=()=>e.jsx(s,{"aria-label":"a pill that is clickable and that you can close",label:"Example",onClick:()=>alert("pill is clicked"),suggestion:!0,canClose:!0,onClose:()=>alert("close is clicked")}),c=()=>e.jsxs("div",{className:"flex space-x-8",children:[e.jsx(s,{"aria-label":"a pill with a search icon",icon:e.jsx(_,{}),onClick:()=>alert("onClick event"),className:"py-12"}),e.jsx(s,{"aria-label":"a pill with a plus icon",icon:e.jsx(V,{}),onClick:()=>alert("onClick event"),suggestion:!0,className:"py-12"})]});var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Pill aria-label='a pill that shows default behaviour' label='Example' />;
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,b,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Pill aria-label='a pill that you can close and that shows default behaviour' label='Example' canClose onClose={() => alert('remove')} />;
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var C,f,x;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <Pill aria-label='a pill with suggestion' label='Example' suggestion />;
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,y,P;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Pill aria-label='a pill with suggestion and that you can close' label='Example' suggestion canClose onClose={() => alert('remove')} />;
}`,...(P=(y=o.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var v,j,N;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Pill aria-label='a pill that is clickable and that you can close' label='Example' onClick={() => alert('pill is clicked')} suggestion canClose onClose={() => alert('close is clicked')} />;
}`,...(N=(j=r.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var w,E,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <div className='flex space-x-8'>
      <Pill aria-label='a pill with a search icon' icon={<IconSearch16 />} onClick={() => alert('onClick event')} className='py-12' />
      <Pill aria-label='a pill with a plus icon' icon={<IconPlus16 />} onClick={() => alert('onClick event')} suggestion className='py-12' />
    </div>;
}`,...(S=(E=c.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const D=["Default","DefaultCanClose","Suggestion","SuggestionCanClose","PillOnClickAndOnClose","PillsWithIcon"];export{t as Default,i as DefaultCanClose,r as PillOnClickAndOnClose,c as PillsWithIcon,n as Suggestion,o as SuggestionCanClose,D as __namedExportsOrder,O as default};
//# sourceMappingURL=Button.stories-bfa18444.js.map
