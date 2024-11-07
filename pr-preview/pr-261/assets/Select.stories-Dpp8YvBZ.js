import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as N}from"./index-DJO9vBfz.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{r as I}from"./index.m-CtIADANO.js";import{i as P}from"./index-XDhxfy0k.js";import{m as O,n as l}from"./index-C7q3YkzA.js";import{c as Q}from"./chevron-down-16-DnDZSQbm.js";import{u as X,H as Z}from"./help-text-BfMGXKgQ.js";import{a as ee}from"./i18n-ClE17yBR.js";import"./v4-CQkTLCs1.js";const ae=JSON.parse('{"select.label.optional":"(valgfrit)"}'),se=JSON.parse('{"select.label.optional":"(optional)"}'),re=JSON.parse('{"select.label.optional":"(vapaaehtoinen)"}'),oe=JSON.parse('{"select.label.optional":"(valgfritt)"}'),le=r=>{const{className:c,invalid:s,id:i,hint:t,always:d,label:w,style:C,optional:p,readOnly:S,disabled:o,..._}=r;ee(se,oe,re,ae);const n=t?`${i}__hint`:void 0;return{attrs:{div:{style:C},label:{htmlFor:i,children:w},select:{..._,"aria-describedby":n,"aria-errormessage":s&&n?n:void 0,"aria-invalid":s,disabled:o,id:i},optional:p,help:d||s?{helpText:t,helpId:n,isInvalid:s}:null},wrapperClasses:I(c,l.wrapper),selectClasses:I([l.base,!s&&!o&&!S&&l.default,s&&l.invalid,o&&l.disabled,S&&l.readOnly]),chevronClasses:I([l.chevron,o&&l.chevronDisabled])}};function ie(r,c){const s=X(r.id),{attrs:i,wrapperClasses:t,selectClasses:d,chevronClasses:w}=le({...r,id:s}),{div:C,label:p,select:S,help:o,optional:_}=i,n=j=>{r.readOnly&&(j.key===" "||j.key==="ArrowDown"||j.key==="ArrowUp")&&j.preventDefault()};return e.jsxs("div",{className:t,...C,children:[p.children&&e.jsxs("label",{htmlFor:p.htmlFor,className:O.base,children:[p.children,_&&e.jsx("span",{className:O.optional,children:P._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),e.jsxs("div",{className:l.selectWrapper,children:[e.jsx("select",{ref:c,...S,className:d,onKeyDown:n}),e.jsx("div",{className:w,children:e.jsx(Q,{})})]}),o&&e.jsx(Z,{helpId:o.helpId,helpText:o.helpText,isInvalid:o.isInvalid})]})}const g=N.forwardRef(ie);g.__docgenInfo={description:"",methods:[],displayName:"_Select"};const fe={title:"Forms/Select"},y=r=>e.jsxs(g,{label:"Berries",onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),...r,children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),u=()=>e.jsx(y,{}),m=()=>e.jsx(y,{hint:"We assume this is your jam preference",always:!0}),b=()=>{const[r,c]=N.useState(""),[s,i]=N.useState(!0);N.useEffect(()=>{i(r==="Cloudberries")},[r]);const t=d=>(c(d.target.value),a("change"));return e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsxs(g,{label:"Berries",invalid:!s,hint:s?"":"Wrong choice",onChange:t,onFocus:a("focus"),onBlur:a("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{value:"Strawberries",children:"Strawberries"}),e.jsx("option",{value:"Raspberries",children:"Raspberries"}),e.jsx("option",{value:"Cloudberries",children:"Cloudberries"})]})})},h=()=>e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsx(y,{disabled:!0})}),x=()=>e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsx(y,{readOnly:!0})}),f=()=>e.jsxs("div",{className:"flex flex-col space-y-32",children:[e.jsxs(g,{onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),e.jsx("label",{id:"select-label",htmlFor:"warp-aria-labelledby-example",children:"You're berry good at selecting!"}),e.jsxs(g,{id:"warp-aria-labelledby-example",onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),"aria-labelledby":"select-label",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]})]}),v=()=>e.jsx(y,{optional:!0});u.__docgenInfo={description:"",methods:[],displayName:"Standard"};m.__docgenInfo={description:"",methods:[],displayName:"Hint"};b.__docgenInfo={description:"",methods:[],displayName:"Invalid"};h.__docgenInfo={description:"",methods:[],displayName:"Disabled"};x.__docgenInfo={description:"",methods:[],displayName:"ReadOnly"};f.__docgenInfo={description:"",methods:[],displayName:"NoLabel"};v.__docgenInfo={description:"",methods:[],displayName:"Optional"};var R,F,W;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:"() => <Select />",...(W=(F=u.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var B,D,$;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:'() => <Select hint="We assume this is your jam preference" always />',...($=(D=m.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var V,Y,E;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
}`,...(E=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:E.source}}};var H,k,J;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
    <Select disabled />
  </div>`,...(J=(k=h.parameters)==null?void 0:k.docs)==null?void 0:J.source}}};var T,L,A;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
    <Select readOnly />
  </div>`,...(A=(L=x.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var K,U,q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
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
  </div>`,...(q=(U=f.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var z,G,M;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:"() => <Select optional />",...(M=(G=v.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const ve=["Standard","Hint","Invalid","Disabled","ReadOnly","NoLabel","Optional"];export{h as Disabled,m as Hint,b as Invalid,f as NoLabel,v as Optional,x as ReadOnly,u as Standard,ve as __namedExportsOrder,fe as default};
