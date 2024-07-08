import{j as l}from"./jsx-runtime-QvZ8i92b.js";import{r as d}from"./index-uubelm5h.js";import{r as u}from"./index.m-CtIADANO.js";import{s as t}from"./index-3IeVCiwq.js";function o({id:e,value:a,onClick:i,"aria-label":n,"aria-labelledby":C,...w}){return l.jsx("div",{children:l.jsxs("button",{id:e,type:"button",role:"switch","aria-label":n,"aria-labelledby":C,"aria-checked":a,onClick:i,className:u([t.label,"focusable rounded-full"]),...w,children:[l.jsx("span",{"data-testid":"track",className:u([t.track,a?t.trackActive:t.trackInactive])}),l.jsx("span",{"data-testid":"handle",className:u([t.handle,t.handleNotDisabled],{[t.handleSelected]:a})})]})})}o.__docgenInfo={description:"",methods:[],displayName:"Switch"};const N={title:"Forms/Switch"},s=()=>{const[e,a]=d.useState(!1);return l.jsx(o,{"aria-label":"Toggle me",onClick:()=>a(!e),value:e})},r=()=>{const[e,a]=d.useState(!0);return l.jsx(o,{"aria-label":"Toggle me",onClick:()=>a(!e),value:e})},c=()=>{const[e,a]=d.useState(!1),i=()=>{const n=!e;a(n),alert(`Custom click handler: Switch ${n?"enabled":"disabled"}.`)};return l.jsx(o,{"aria-label":"I have a custom click handler",onClick:i,value:e})};s.__docgenInfo={description:"",methods:[],displayName:"DefaultDisabled"};r.__docgenInfo={description:"",methods:[],displayName:"DefaultEnabled"};c.__docgenInfo={description:"",methods:[],displayName:"CustomClickHandler"};var m,h,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  return <Switch aria-label="Toggle me" onClick={() => setValue(!value)} value={value} />;
}`,...(p=(h=s.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var b,f,k;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(true);
  return <Switch aria-label="Toggle me" onClick={() => setValue(!value)} value={value} />;
}`,...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var v,S,g;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  const handleClick = () => {
    const newValue = !value;
    setValue(newValue);
    alert(\`Custom click handler: Switch \${newValue ? 'enabled' : 'disabled'}.\`);
  };
  return <Switch aria-label="I have a custom click handler" onClick={handleClick} value={value} />;
}`,...(g=(S=c.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const y=["DefaultDisabled","DefaultEnabled","CustomClickHandler"];export{c as CustomClickHandler,s as DefaultDisabled,r as DefaultEnabled,y as __namedExportsOrder,N as default};
