import{s,j as l}from"./index-l-HePjgU.js";import{r as d}from"./index-RYns6xqu.js";import{r as m}from"./index.m-CtIADANO.js";function i({id:e,value:a,disabled:t,onClick:u,"aria-label":x,"aria-labelledby":_,...j}){const N=m([s.base,t&&s.disabled]),y=m([s.track,t&&s.trackDisabled,!t&&(a?s.trackActive:s.trackInactive)]),I=m([s.handle,a&&s.handleSelected,t?s.handleDisabled:s.handleNotDisabled]);return l.jsx("div",{children:l.jsxs("button",{id:e,type:"button",role:"switch","aria-label":x,"aria-labelledby":_,"aria-checked":a,onClick:u,className:N,"aria-disabled":t,disabled:t,...j,children:[l.jsx("span",{"data-testid":"track",className:y}),l.jsx("span",{"data-testid":"handle",className:I})]})})}i.__docgenInfo={description:"",methods:[],displayName:"Switch"};const $={title:"Forms/Switch"},r=()=>{const[e,a]=d.useState(!1);return l.jsx(i,{"aria-label":"Toggle me",onClick:()=>a(!e),value:e})},n=()=>{const[e,a]=d.useState(!0);return l.jsx(i,{"aria-label":"Toggle me",onClick:()=>a(!e),value:e})},c=()=>{const[e,a]=d.useState(!0);return l.jsx(i,{disabled:!0,onClick:()=>a(!e),value:e})},o=()=>{const[e,a]=d.useState(!1),t=()=>{const u=!e;a(u),alert(`Custom click handler: Switch ${u?"enabled":"disabled"}.`)};return l.jsx(i,{"aria-label":"I have a custom click handler",onClick:t,value:e})};r.__docgenInfo={description:"",methods:[],displayName:"DefaultDisabled"};n.__docgenInfo={description:"",methods:[],displayName:"DefaultEnabled"};c.__docgenInfo={description:"",methods:[],displayName:"Disabled"};o.__docgenInfo={description:"",methods:[],displayName:"CustomClickHandler"};var p,h,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  return <Switch aria-label="Toggle me" onClick={() => setValue(!value)} value={value} />;
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var k,v,C;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(true);
  return <Switch aria-label="Toggle me" onClick={() => setValue(!value)} value={value} />;
}`,...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var S,f,g;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(true);
  return <Switch disabled onClick={() => setValue(!value)} value={value} />;
}`,...(g=(f=c.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var V,w,D;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  const handleClick = () => {
    const newValue = !value;
    setValue(newValue);
    alert(\`Custom click handler: Switch \${newValue ? 'enabled' : 'disabled'}.\`);
  };
  return <Switch aria-label="I have a custom click handler" onClick={handleClick} value={value} />;
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const A=["DefaultDisabled","DefaultEnabled","Disabled","CustomClickHandler"];export{o as CustomClickHandler,r as DefaultDisabled,n as DefaultEnabled,c as Disabled,A as __namedExportsOrder,$ as default};
