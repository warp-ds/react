import{j as t}from"./index-CkQYNE3v.js";import{T as r}from"./component-BRFYy1-o.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJs1nTlS.js";import"./useId-BdPc6t19.js";import"./index.m-CtIADANO.js";import"./item-4JmbcY6t.js";import"./i18n-N9JyOJ0K.js";const J={title:"Forms/Toggle/Radio"},o=[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"}],l=()=>t.jsx(r,{type:"radio",options:o,onChange:e=>console.log(e)}),s=()=>t.jsx(r,{type:"radio",title:"Favorite color",options:o,onChange:e=>console.log(e)}),a=()=>t.jsx(r,{optional:!0,type:"radio",title:"Favorite color",options:o,onChange:e=>console.log(e)}),n=()=>t.jsx(r,{type:"radio",title:"Favorite color",helpText:"Choose your absolute favorite color",options:o,onChange:e=>console.log(e)}),c=()=>t.jsx(r,{type:"radio",title:"Favorite color",helpText:"No way you like blue",invalid:!0,selected:[o[1]],options:o,onChange:e=>console.log(e)}),i=()=>t.jsx(r,{type:"radio",title:"Favorite color",helpText:"No way you like blue",disabled:!0,selected:[o[1]],options:o,onChange:e=>console.log(e)}),p=()=>t.jsx(r,{type:"radio",title:"Favorite color",helpText:"Last selected by default",selected:[o[o.length-1]],options:o,onChange:e=>console.log(e)}),d=()=>t.jsx(r,{type:"radio",title:"Favorite color",helpText:"Last selected by default",defaultSelected:[o[o.length-1]],options:o,onChange:e=>console.log(e)});var u,g,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Toggle type="radio" options={options} onChange={selected => console.log(selected)} />;
}`,...(m=(g=l.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var h,y,T;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Toggle type="radio" title="Favorite color" options={options} onChange={selected => console.log(selected)} />;
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var x,v,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Toggle optional type="radio" title="Favorite color" options={options} onChange={selected => console.log(selected)} />;
}`,...(C=(v=a.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var b,f,F;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Toggle type="radio" title="Favorite color" helpText="Choose your absolute favorite color" options={options} onChange={selected => console.log(selected)} />;
}`,...(F=(f=n.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var S,j,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Toggle type="radio" title="Favorite color" helpText="No way you like blue" invalid selected={[options[1]]} options={options} onChange={selected => console.log(selected)} />;
}`,...(D=(j=c.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var O,k,w;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Toggle type="radio" title="Favorite color" helpText="No way you like blue" disabled selected={[options[1]]} options={options} onChange={selected => console.log(selected)} />;
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var L,N,R;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Toggle type="radio" title="Favorite color" helpText="Last selected by default" selected={[options[options.length - 1]]} options={options} onChange={selected => console.log(selected)} />;
}`,...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var E,H,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Toggle type="radio" title="Favorite color" helpText="Last selected by default" defaultSelected={[options[options.length - 1]]} options={options} onChange={selected => console.log(selected)} />;
}`,...(I=(H=d.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const K=["MultipleOptions","WithTitle","Optional","HelpText","Invalid","Disabled","SelectedDefaultControlled","SelectedDefaultUncontrolled"];export{i as Disabled,n as HelpText,c as Invalid,l as MultipleOptions,a as Optional,p as SelectedDefaultControlled,d as SelectedDefaultUncontrolled,s as WithTitle,K as __namedExportsOrder,J as default};
