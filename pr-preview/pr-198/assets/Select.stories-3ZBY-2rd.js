import{j as e,l as q,n as s,m as V}from"./index-C4tyfTTA.js";import{r as y}from"./index-CBqU2yxZ.js";import{a}from"./chunk-WFFRPTHA-DEDbbGN5.js";import{r as c}from"./index.m-CtIADANO.js";import{i as U}from"./index-ClUvnnK6.js";import{c as G}from"./chevron-down-16-CfMemYiC.js";import{a as P}from"./i18n-DZg136wd.js";import{u as K}from"./useId-Cfvm1aBZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-B42RpLod.js";import"./index-DrFu-skq.js";const Q=JSON.parse('{"select.label.optional":"(valgfrit)"}'),X=JSON.parse('{"select.label.optional":"(optional)"}'),Z=JSON.parse('{"select.label.optional":"(vapaaehtoinen)"}'),ee=JSON.parse('{"select.label.optional":"(valgfritt)"}'),ae=r=>{const{className:u,invalid:l,id:t,hint:i,always:p,label:g,style:C,optional:j,readOnly:w,disabled:n,...N}=r;P(X,ee,Z,Q);const o=i?`${t}__hint`:void 0;return{attrs:{div:{style:C},label:{htmlFor:t,children:g},select:{...N,"aria-describedby":o,"aria-errormessage":l&&o?o:void 0,"aria-invalid":l,disabled:n,id:t},optional:j,help:p||l?{children:i,id:o}:null},wrapperClasses:c(s.wrapper,u),selectClasses:c({[s.default]:!0,[s.invalid]:l,[s.disabled]:n,[s.readOnly]:w}),selectWrapperClasses:c({[s.selectWrapper]:!0}),helpTextClasses:c({[V.helpText]:!0,[V.helpTextColor]:!l,[V.helpTextColorInvalid]:l}),chevronClasses:c({[s.chevron]:!0,[s.chevronDisabled]:n})}};function le(r,u){const l=K(r.id),{attrs:t,wrapperClasses:i,selectClasses:p,selectWrapperClasses:g,helpTextClasses:C,chevronClasses:j}=ae({...r,id:l}),{div:w,label:n,select:N,help:o,optional:A}=t;return e.jsxs("div",{className:i,...w,children:[n.children&&e.jsxs("label",{htmlFor:n.htmlFor,className:q.label,children:[n.children,A&&e.jsx("span",{className:q.optional,children:U._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),e.jsxs("div",{className:g,children:[e.jsx("select",{ref:u,...N,className:p}),e.jsx("div",{className:c(j),children:e.jsx(G,{})})]}),o&&e.jsx("div",{className:C,...o})]})}const d=y.forwardRef(le);try{d.displayName="_Select",d.__docgenInfo={description:"",displayName:"_Select",props:{autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The `option` elements to populate the select with.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `hint` to provide feedback about the error.",name:"invalid",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"The content to display as the help text.",name:"hint",required:!1,type:{name:"ReactNode"}},always:{defaultValue:null,description:"Whether to always show hint",name:"always",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The content to display as the label.",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"The name of the select element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLSelectElement, Element>) => void)"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLSelectElement>) => void)"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<HTMLSelectElement, Element>) => void)"}},required:{defaultValue:null,description:"Whether user input is required on the select before form submission.",name:"required",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Whether to show optional text",name:"optional",required:!1,type:{name:"boolean"}}}}}catch{}const he={title:"Forms/Select"},S=r=>e.jsxs(d,{label:"Berries",onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),...r,children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),m=()=>e.jsx(S,{}),h=()=>e.jsx(S,{hint:"We assume this is your jam preference",always:!0}),b=()=>{const[r,u]=y.useState(""),[l,t]=y.useState(!0);y.useEffect(()=>{t(r==="Cloudberries")},[r]);const i=p=>(u(p.target.value),a("change"));return e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsxs(d,{label:"Berries",invalid:!l,hint:l?"":"Wrong choice",onChange:i,onFocus:a("focus"),onBlur:a("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{value:"Strawberries",children:"Strawberries"}),e.jsx("option",{value:"Raspberries",children:"Raspberries"}),e.jsx("option",{value:"Cloudberries",children:"Cloudberries"})]})})},f=()=>e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsx(S,{disabled:!0})}),v=()=>e.jsxs("div",{className:"flex flex-col space-y-32",children:[e.jsxs(d,{onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),e.jsx("label",{id:"select-label",htmlFor:"warp-aria-labelledby-example",children:"You're berry good at selecting!"}),e.jsxs(d,{id:"warp-aria-labelledby-example",onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),"aria-labelledby":"select-label",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]})]}),x=()=>e.jsx(S,{optional:!0});var _,F,T;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:"() => <Select />",...(T=(F=m.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var W,R,E;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:'() => <Select hint="We assume this is your jam preference" always />',...(E=(R=h.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var O,B,H;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  const [valid, setValid] = React.useState(true);
  React.useEffect(() => {
    setValid(value === 'Cloudberries');
  }, [value]);
  const handleOnChange = e => {
    setValue(e.target.value);
    return action('change');
  };
  return <div className="flex flex-col space-y-32">
      <WarpSelect label="Berries" invalid={!valid} hint={!valid ? 'Wrong choice' : ''} onChange={handleOnChange} onFocus={action('focus')} onBlur={action('blur')} aria-label="You're selection is berry nice!">
        <option value={'Strawberries'}>Strawberries</option>
        <option value={'Raspberries'}>Raspberries</option>
        <option value={'Cloudberries'}>Cloudberries</option>
      </WarpSelect>
    </div>;
}`,...(H=(B=b.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var L,M,I;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
    <Select disabled />
  </div>`,...(I=(M=f.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var Y,$,D;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
    <WarpSelect onChange={action('change')} onFocus={action('focus')} onBlur={action('blur')} aria-label="You're selection is berry nice!">
      <option>Strawberries</option>
      <option>Raspberries</option>
      <option>Cloudberries</option>
    </WarpSelect>

    <label id="select-label" htmlFor="warp-aria-labelledby-example">
      You're berry good at selecting!
    </label>
    <WarpSelect id="warp-aria-labelledby-example" onChange={action('change')} onFocus={action('focus')} onBlur={action('blur')} aria-labelledby="select-label">
      <option>Strawberries</option>
      <option>Raspberries</option>
      <option>Cloudberries</option>
    </WarpSelect>
  </div>`,...(D=($=v.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var J,k,z;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:"() => <Select optional />",...(z=(k=x.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};const be=["Standard","Hint","Invalid","Disabled","NoLabel","Optional"];export{f as Disabled,h as Hint,b as Invalid,v as NoLabel,x as Optional,m as Standard,be as __namedExportsOrder,he as default};
