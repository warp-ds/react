import{j as e}from"./index-DSOYRR-y.js";import{r as u}from"./index-RYns6xqu.js";import{a as r}from"./chunk-454WOBUV-CM0pFb8Z.js";import{_ as p}from"./component-BoklHLeD.js";import"./v4-CQkTLCs1.js";import"./index.m-CtIADANO.js";import"./index-C6dB-k_R.js";import"./chevron-down-16-yi201Ybz.js";import"./help-text-BWbwCBp4.js";import"./i18n-BJez-btc.js";const T={title:"Forms/Select"},c=d=>e.jsxs(p,{label:"Berries",onChange:r("change"),onFocus:r("focus"),onBlur:r("blur"),...d,children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),a=()=>e.jsx(c,{}),o=()=>e.jsx(c,{hint:"We assume this is your jam preference",always:!0}),s=()=>{const[d,E]=u.useState(""),[m,D]=u.useState(!0);u.useEffect(()=>{D(d==="Cloudberries")},[d]);const H=L=>(E(L.target.value),r("change"));return e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsxs(p,{label:"Berries",invalid:!m,hint:m?"":"Wrong choice",onChange:H,onFocus:r("focus"),onBlur:r("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{value:"Strawberries",children:"Strawberries"}),e.jsx("option",{value:"Raspberries",children:"Raspberries"}),e.jsx("option",{value:"Cloudberries",children:"Cloudberries"})]})})},l=()=>e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsx(c,{disabled:!0})}),i=()=>e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsx(c,{readOnly:!0})}),t=()=>e.jsxs("div",{className:"flex flex-col space-y-32",children:[e.jsxs(p,{onChange:r("change"),onFocus:r("focus"),onBlur:r("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),e.jsx("label",{id:"select-label",htmlFor:"warp-aria-labelledby-example",children:"You're berry good at selecting!"}),e.jsxs(p,{id:"warp-aria-labelledby-example",onChange:r("change"),onFocus:r("focus"),onBlur:r("blur"),"aria-labelledby":"select-label",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]})]}),n=()=>e.jsx(c,{optional:!0});a.__docgenInfo={description:"",methods:[],displayName:"Standard"};o.__docgenInfo={description:"",methods:[],displayName:"Hint"};s.__docgenInfo={description:"",methods:[],displayName:"Invalid"};l.__docgenInfo={description:"",methods:[],displayName:"Disabled"};i.__docgenInfo={description:"",methods:[],displayName:"ReadOnly"};t.__docgenInfo={description:"",methods:[],displayName:"NoLabel"};n.__docgenInfo={description:"",methods:[],displayName:"Optional"};var b,h,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"() => <Select />",...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,g,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:'() => <Select hint="We assume this is your jam preference" always />',...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,v,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var C,N,_;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
    <Select disabled />
  </div>`,...(_=(N=l.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var R,w,O;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
    <Select readOnly />
  </div>`,...(O=(w=i.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var B,F,I;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
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
  </div>`,...(I=(F=t.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var W,V,Y;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:"() => <Select optional />",...(Y=(V=n.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};const U=["Standard","Hint","Invalid","Disabled","ReadOnly","NoLabel","Optional"];export{l as Disabled,o as Hint,s as Invalid,t as NoLabel,n as Optional,i as ReadOnly,a as Standard,U as __namedExportsOrder,T as default};
