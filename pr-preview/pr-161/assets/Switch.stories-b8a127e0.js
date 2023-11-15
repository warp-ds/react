import{j as t,r as l}from"./index-a71f5096.js";import{r as d}from"./index-b75aab2a.js";import{r as o}from"./index.m-73ef1fbe.js";function r({id:e,value:a,onClick:u,"aria-label":s,"aria-labelledby":g,...V}){const C="focusable rounded-full";return t.jsx("div",{className:l.switch,children:t.jsxs("button",{id:e,type:"button",role:"switch","aria-label":s,"aria-labelledby":g,"aria-checked":a,onClick:u,className:o([l.label,C]),...V,children:[t.jsx("span",{className:o([l.track,a?l.trackActive:l.trackInactive])}),t.jsx("span",{className:o([l.handle,l.handleNotDisabled],{[l.handleSelected]:a})})]})})}try{r.displayName="Switch",r.__docgenInfo={description:"",displayName:"Switch",props:{id:{defaultValue:null,description:"The unique identifier",name:"id",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The value of the Switch",name:"value",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Handler for when the Switch is clicked",name:"onClick",required:!0,type:{name:"(e?: MouseEvent<HTMLButtonElement, MouseEvent> | undefined) => void"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if `aria-labelledby` is not defined,",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if `aria-label` is not defined.",name:"aria-labelledby",required:!1,type:{name:"string"}}}}}catch{}const j={title:"Forms/Switch"},n=()=>{const[e,a]=d.useState(!1);return t.jsx(r,{"aria-label":"Toggle me",onClick:()=>a(!e),value:e})},i=()=>{const[e,a]=d.useState(!0);return t.jsx(r,{"aria-label":"Toggle me",onClick:()=>a(!e),value:e})},c=()=>{const[e,a]=d.useState(!1),u=()=>{const s=!e;a(s),alert(`Custom click handler: Switch ${s?"enabled":"disabled"}.`)};return t.jsx(r,{"aria-label":"I have a custom click handler",onClick:u,value:e})};var m,h,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  return <Switch aria-label="Toggle me" onClick={() => setValue(!value)} value={value} />;
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var p,f,v;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(true);
  return <Switch aria-label="Toggle me" onClick={() => setValue(!value)} value={value} />;
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var k,S,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  const handleClick = () => {
    const newValue = !value;
    setValue(newValue);
    alert(\`Custom click handler: Switch \${newValue ? 'enabled' : 'disabled'}.\`);
  };
  return <Switch aria-label="I have a custom click handler" onClick={handleClick} value={value} />;
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const D=["DefaultDisabled","DefaultEnabled","CustomClickHandler"];export{c as CustomClickHandler,n as DefaultDisabled,i as DefaultEnabled,D as __namedExportsOrder,j as default};
//# sourceMappingURL=Switch.stories-b8a127e0.js.map
