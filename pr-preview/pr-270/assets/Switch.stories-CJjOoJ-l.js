import{s as t,j as l}from"./index-CukJ--Th.js";import{r as d}from"./index-RYns6xqu.js";import{r as m}from"./index.m-CtIADANO.js";function u({id:e,value:a,disabled:s,onClick:r,"aria-label":x,"aria-labelledby":_,...j}){const I=m([t.base,s&&t.disabled]),N=m([t.track,s&&t.trackDisabled,a&&!s?t.trackActive:t.trackInactive]),y=m([t.handle,a&&t.handleSelected,s?t.handleDisabled:t.handleNotDisabled]),E=T=>{!s&&r&&r(T)};return l.jsx("div",{children:l.jsxs("button",{id:e,type:"button",role:"switch","aria-label":x,"aria-labelledby":_,"aria-checked":a,onClick:E,className:I,tabIndex:s?-1:0,"aria-disabled":s,disabled:s,...j,children:[l.jsx("span",{"data-testid":"track",className:N}),l.jsx("span",{"data-testid":"handle",className:y})]})})}u.__docgenInfo={description:"",methods:[],displayName:"Switch"};const F={title:"Forms/Switch"},n=()=>{const[e,a]=d.useState(!1);return l.jsx(u,{"aria-label":"Toggle me",onClick:()=>a(!e),value:e})},c=()=>{const[e,a]=d.useState(!0);return l.jsx(u,{"aria-label":"Toggle me",onClick:()=>a(!e),value:e})},o=()=>{const[e,a]=d.useState(!0);return l.jsx(u,{disabled:!0,onClick:()=>a(!e),value:e})},i=()=>{const[e,a]=d.useState(!1),s=()=>{const r=!e;a(r),alert(`Custom click handler: Switch ${r?"enabled":"disabled"}.`)};return l.jsx(u,{"aria-label":"I have a custom click handler",onClick:s,value:e})};n.__docgenInfo={description:"",methods:[],displayName:"DefaultDisabled"};c.__docgenInfo={description:"",methods:[],displayName:"DefaultEnabled"};o.__docgenInfo={description:"",methods:[],displayName:"Disabled"};i.__docgenInfo={description:"",methods:[],displayName:"CustomClickHandler"};var p,h,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  return <Switch aria-label="Toggle me" onClick={() => setValue(!value)} value={value} />;
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var k,v,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(true);
  return <Switch aria-label="Toggle me" onClick={() => setValue(!value)} value={value} />;
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var S,f,g;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(true);
  return <Switch disabled onClick={() => setValue(!value)} value={value} />;
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var V,w,D;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  const handleClick = () => {
    const newValue = !value;
    setValue(newValue);
    alert(\`Custom click handler: Switch \${newValue ? 'enabled' : 'disabled'}.\`);
  };
  return <Switch aria-label="I have a custom click handler" onClick={handleClick} value={value} />;
}`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const O=["DefaultDisabled","DefaultEnabled","Disabled","CustomClickHandler"];export{i as CustomClickHandler,n as DefaultDisabled,c as DefaultEnabled,o as Disabled,O as __namedExportsOrder,F as default};
