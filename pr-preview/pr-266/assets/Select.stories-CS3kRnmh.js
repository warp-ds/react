import{j as e,l as I,o,m as R}from"./index-B5Zu8qyh.js";import{r as N}from"./index-RYns6xqu.js";import{a as s}from"./chunk-454WOBUV-CM0pFb8Z.js";import{r as u}from"./index.m-CtIADANO.js";import{i as X}from"./index-1YnX0IqW.js";import{c as Z}from"./chevron-down-16-B0FJc5nx.js";import{a as ee}from"./i18n-CHMFe01U.js";import{u as ae}from"./useId-CY2WEmb6.js";import"./v4-CQkTLCs1.js";const se=JSON.parse('{"select.label.optional":"(valgfrit)"}'),re=JSON.parse('{"select.label.optional":"(optional)"}'),oe=JSON.parse('{"select.label.optional":"(vapaaehtoinen)"}'),le=JSON.parse('{"select.label.optional":"(valgfritt)"}'),ie=r=>{const{className:d,invalid:a,id:l,hint:i,always:p,label:w,style:_,optional:O,readOnly:t,disabled:n,...j}=r;ee(re,le,oe,se);const c=i?`${l}__hint`:void 0;return{attrs:{div:{style:_},label:{htmlFor:l,children:w},select:{...j,"aria-describedby":c,"aria-errormessage":a&&c?c:void 0,"aria-invalid":a,disabled:n,id:l},optional:O,help:p||a?{children:i,id:c}:null},wrapperClasses:u(o.wrapper,d),selectClasses:u(o.base,{[o.default]:!a&&!n&&!t,[o.invalid]:a,[o.disabled]:n,[o.readOnly]:t}),helpTextClasses:u(R.helpText,{[R.helpTextColor]:!a,[R.helpTextColorInvalid]:a}),chevronClasses:u(o.chevron,{[o.chevronDisabled]:n})}};function te(r,d){const a=ae(r.id),{attrs:l,wrapperClasses:i,selectClasses:p,helpTextClasses:w,chevronClasses:_}=ie({...r,id:a}),{div:O,label:t,select:n,help:j,optional:c}=l,Q=C=>{r.readOnly&&(C.key===" "||C.key==="ArrowDown"||C.key==="ArrowUp")&&C.preventDefault()};return e.jsxs("div",{className:i,...O,children:[t.children&&e.jsxs("label",{htmlFor:t.htmlFor,className:I.label,children:[t.children,c&&e.jsx("span",{className:I.optional,children:X._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),e.jsxs("div",{className:o.selectWrapper,children:[e.jsx("select",{ref:d,...n,className:p,onKeyDown:Q}),e.jsx("div",{className:u(_),children:e.jsx(Z,{})})]}),j&&e.jsx("div",{className:w,...j})]})}const y=N.forwardRef(te);y.__docgenInfo={description:"",methods:[],displayName:"_Select"};const fe={title:"Forms/Select"},S=r=>e.jsxs(y,{label:"Berries",onChange:s("change"),onFocus:s("focus"),onBlur:s("blur"),...r,children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),m=()=>e.jsx(S,{}),b=()=>e.jsx(S,{hint:"We assume this is your jam preference",always:!0}),h=()=>{const[r,d]=N.useState(""),[a,l]=N.useState(!0);N.useEffect(()=>{l(r==="Cloudberries")},[r]);const i=p=>(d(p.target.value),s("change"));return e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsxs(y,{label:"Berries",invalid:!a,hint:a?"":"Wrong choice",onChange:i,onFocus:s("focus"),onBlur:s("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{value:"Strawberries",children:"Strawberries"}),e.jsx("option",{value:"Raspberries",children:"Raspberries"}),e.jsx("option",{value:"Cloudberries",children:"Cloudberries"})]})})},x=()=>e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsx(S,{disabled:!0})}),f=()=>e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsx(S,{readOnly:!0})}),v=()=>e.jsxs("div",{className:"flex flex-col space-y-32",children:[e.jsxs(y,{onChange:s("change"),onFocus:s("focus"),onBlur:s("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),e.jsx("label",{id:"select-label",htmlFor:"warp-aria-labelledby-example",children:"You're berry good at selecting!"}),e.jsxs(y,{id:"warp-aria-labelledby-example",onChange:s("change"),onFocus:s("focus"),onBlur:s("blur"),"aria-labelledby":"select-label",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]})]}),g=()=>e.jsx(S,{optional:!0});m.__docgenInfo={description:"",methods:[],displayName:"Standard"};b.__docgenInfo={description:"",methods:[],displayName:"Hint"};h.__docgenInfo={description:"",methods:[],displayName:"Invalid"};x.__docgenInfo={description:"",methods:[],displayName:"Disabled"};f.__docgenInfo={description:"",methods:[],displayName:"ReadOnly"};v.__docgenInfo={description:"",methods:[],displayName:"NoLabel"};g.__docgenInfo={description:"",methods:[],displayName:"Optional"};var F,W,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:"() => <Select />",...(B=(W=m.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var D,$,T;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:'() => <Select hint="We assume this is your jam preference" always />',...(T=($=b.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var V,Y,E;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
}`,...(E=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:E.source}}};var k,J,H;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
    <Select disabled />
  </div>`,...(H=(J=x.parameters)==null?void 0:J.docs)==null?void 0:H.source}}};var L,A,K;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
    <Select readOnly />
  </div>`,...(K=(A=f.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var U,q,z;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
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
  </div>`,...(z=(q=v.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,M,P;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:"() => <Select optional />",...(P=(M=g.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const ve=["Standard","Hint","Invalid","Disabled","ReadOnly","NoLabel","Optional"];export{x as Disabled,b as Hint,h as Invalid,v as NoLabel,g as Optional,f as ReadOnly,m as Standard,ve as __namedExportsOrder,fe as default};
