import{j as t,s as l}from"./index-Dxmo1Dx2.js";import{r as d}from"./index-4g5l5LRQ.js";import{r as o}from"./index.m-0-FAh1ao.js";import"./_commonjsHelpers-4gQjN7DL.js";function s({id:e,value:a,onClick:u,"aria-label":r,"aria-labelledby":g,...V}){return t.jsx("div",{className:l.switch,children:t.jsxs("button",{id:e,type:"button",role:"switch","aria-label":r,"aria-labelledby":g,"aria-checked":a,onClick:u,className:o([l.label,"focusable rounded-full"]),...V,children:[t.jsx("span",{className:o([l.track,a?l.trackActive:l.trackInactive])}),t.jsx("span",{className:o([l.handle,l.handleNotDisabled],{[l.handleSelected]:a})})]})})}try{s.displayName="Switch",s.__docgenInfo={description:"",displayName:"Switch",props:{id:{defaultValue:null,description:"The unique identifier",name:"id",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The value of the Switch",name:"value",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Handler for when the Switch is clicked",name:"onClick",required:!0,type:{name:"(e?: MouseEvent<HTMLButtonElement, MouseEvent> | undefined) => void"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if `aria-labelledby` is not defined,",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if `aria-label` is not defined.",name:"aria-labelledby",required:!1,type:{name:"string"}}}}}catch{}const D={title:"Forms/Switch"},n=()=>{const[e,a]=d.useState(!1);return t.jsx(s,{"aria-label":"Toggle me",onClick:()=>a(!e),value:e})},i=()=>{const[e,a]=d.useState(!0);return t.jsx(s,{"aria-label":"Toggle me",onClick:()=>a(!e),value:e})},c=()=>{const[e,a]=d.useState(!1),u=()=>{const r=!e;a(r),alert(`Custom click handler: Switch ${r?"enabled":"disabled"}.`)};return t.jsx(s,{"aria-label":"I have a custom click handler",onClick:u,value:e})};var m,h,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  return <Switch aria-label="Toggle me" onClick={() => setValue(!value)} value={value} />;
}`,...(p=(h=n.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var b,f,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(true);
  return <Switch aria-label="Toggle me" onClick={() => setValue(!value)} value={value} />;
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var k,w,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  const handleClick = () => {
    const newValue = !value;
    setValue(newValue);
    alert(\`Custom click handler: Switch \${newValue ? 'enabled' : 'disabled'}.\`);
  };
  return <Switch aria-label="I have a custom click handler" onClick={handleClick} value={value} />;
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const E=["DefaultDisabled","DefaultEnabled","CustomClickHandler"];export{c as CustomClickHandler,n as DefaultDisabled,i as DefaultEnabled,E as __namedExportsOrder,D as default};
