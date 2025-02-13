import{j as o}from"./index-DSOYRR-y.js";import{r as n}from"./index-RYns6xqu.js";import{S as u}from"./component-BUVcJvVe.js";import"./index.m-CtIADANO.js";const j={title:"Forms/Switch"},t=()=>{const[e,a]=n.useState(!1);return o.jsx(u,{"aria-label":"Toggle me",onClick:()=>a(!e),value:e})},s=()=>{const[e,a]=n.useState(!0);return o.jsx(u,{"aria-label":"Toggle me",onClick:()=>a(!e),value:e})},l=()=>{const[e,a]=n.useState(!0);return o.jsx(u,{disabled:!0,onClick:()=>a(!e),value:e})},r=()=>{const[e,a]=n.useState(!1),V=()=>{const c=!e;a(c),alert(`Custom click handler: Switch ${c?"enabled":"disabled"}.`)};return o.jsx(u,{"aria-label":"I have a custom click handler",onClick:V,value:e})};t.__docgenInfo={description:"",methods:[],displayName:"DefaultDisabled"};s.__docgenInfo={description:"",methods:[],displayName:"DefaultEnabled"};l.__docgenInfo={description:"",methods:[],displayName:"Disabled"};r.__docgenInfo={description:"",methods:[],displayName:"CustomClickHandler"};var i,d,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  return <Switch aria-label="Toggle me" onClick={() => setValue(!value)} value={value} />;
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,v,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(true);
  return <Switch aria-label="Toggle me" onClick={() => setValue(!value)} value={value} />;
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var h,S,C;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(true);
  return <Switch disabled onClick={() => setValue(!value)} value={value} />;
}`,...(C=(S=l.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var f,k,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  const handleClick = () => {
    const newValue = !value;
    setValue(newValue);
    alert(\`Custom click handler: Switch \${newValue ? 'enabled' : 'disabled'}.\`);
  };
  return <Switch aria-label="I have a custom click handler" onClick={handleClick} value={value} />;
}`,...(g=(k=r.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const E=["DefaultDisabled","DefaultEnabled","Disabled","CustomClickHandler"];export{r as CustomClickHandler,t as DefaultDisabled,s as DefaultEnabled,l as Disabled,E as __namedExportsOrder,j as default};
