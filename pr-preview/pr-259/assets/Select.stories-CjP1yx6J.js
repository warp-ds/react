import{j as e,l as I,o as l,m as w}from"./index-BXOgzrE8.js";import{r as g}from"./index-RYns6xqu.js";import{a}from"./chunk-454WOBUV-CM0pFb8Z.js";import{r as c}from"./index.m-CtIADANO.js";import{i as K}from"./index-1YnX0IqW.js";import{c as M}from"./chevron-down-16-B0FJc5nx.js";import{a as P}from"./i18n-CHMFe01U.js";import{u as Q}from"./useId-CY2WEmb6.js";import"./v4-CQkTLCs1.js";const U=JSON.parse('{"select.label.optional":"(valgfrit)"}'),X=JSON.parse('{"select.label.optional":"(optional)"}'),Z=JSON.parse('{"select.label.optional":"(vapaaehtoinen)"}'),ee=JSON.parse('{"select.label.optional":"(valgfritt)"}'),ae=r=>{const{className:d,invalid:s,id:o,hint:n,always:p,label:j,style:y,optional:C,readOnly:N,disabled:t,..._}=r;P(X,ee,Z,U);const i=n?`${o}__hint`:void 0;return{attrs:{div:{style:y},label:{htmlFor:o,children:j},select:{..._,"aria-describedby":i,"aria-errormessage":s&&i?i:void 0,"aria-invalid":s,disabled:t,id:o},optional:C,help:p||s?{children:n,id:i}:null},wrapperClasses:c(l.wrapper,d),selectClasses:c({[l.default]:!0,[l.invalid]:s,[l.disabled]:t,[l.readOnly]:N}),selectWrapperClasses:c({[l.selectWrapper]:!0}),helpTextClasses:c({[w.helpText]:!0,[w.helpTextColor]:!s,[w.helpTextColorInvalid]:s}),chevronClasses:c({[l.chevron]:!0,[l.chevronDisabled]:t})}};function se(r,d){const s=Q(r.id),{attrs:o,wrapperClasses:n,selectClasses:p,selectWrapperClasses:j,helpTextClasses:y,chevronClasses:C}=ae({...r,id:s}),{div:N,label:t,select:_,help:i,optional:G}=o;return e.jsxs("div",{className:n,...N,children:[t.children&&e.jsxs("label",{htmlFor:t.htmlFor,className:I.label,children:[t.children,G&&e.jsx("span",{className:I.optional,children:K._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),e.jsxs("div",{className:j,children:[e.jsx("select",{ref:d,..._,className:p}),e.jsx("div",{className:c(C),children:e.jsx(M,{})})]}),i&&e.jsx("div",{className:y,...i})]})}const f=g.forwardRef(se);f.__docgenInfo={description:"",methods:[],displayName:"_Select"};const ue={title:"Forms/Select"},S=r=>e.jsxs(f,{label:"Berries",onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),...r,children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),u=()=>e.jsx(S,{}),m=()=>e.jsx(S,{hint:"We assume this is your jam preference",always:!0}),b=()=>{const[r,d]=g.useState(""),[s,o]=g.useState(!0);g.useEffect(()=>{o(r==="Cloudberries")},[r]);const n=p=>(d(p.target.value),a("change"));return e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsxs(f,{label:"Berries",invalid:!s,hint:s?"":"Wrong choice",onChange:n,onFocus:a("focus"),onBlur:a("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{value:"Strawberries",children:"Strawberries"}),e.jsx("option",{value:"Raspberries",children:"Raspberries"}),e.jsx("option",{value:"Cloudberries",children:"Cloudberries"})]})})},h=()=>e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsx(S,{disabled:!0})}),x=()=>e.jsxs("div",{className:"flex flex-col space-y-32",children:[e.jsxs(f,{onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),e.jsx("label",{id:"select-label",htmlFor:"warp-aria-labelledby-example",children:"You're berry good at selecting!"}),e.jsxs(f,{id:"warp-aria-labelledby-example",onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),"aria-labelledby":"select-label",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]})]}),v=()=>e.jsx(S,{optional:!0});u.__docgenInfo={description:"",methods:[],displayName:"Standard"};m.__docgenInfo={description:"",methods:[],displayName:"Hint"};b.__docgenInfo={description:"",methods:[],displayName:"Invalid"};h.__docgenInfo={description:"",methods:[],displayName:"Disabled"};x.__docgenInfo={description:"",methods:[],displayName:"NoLabel"};v.__docgenInfo={description:"",methods:[],displayName:"Optional"};var R,F,O;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:"() => <Select />",...(O=(F=u.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var W,B,T;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:'() => <Select hint="We assume this is your jam preference" always />',...(T=(B=m.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var V,Y,$;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
}`,...($=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var E,D,J;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
    <Select disabled />
  </div>`,...(J=(D=h.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var H,L,k;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
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
  </div>`,...(k=(L=x.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var q,z,A;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:"() => <Select optional />",...(A=(z=v.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const me=["Standard","Hint","Invalid","Disabled","NoLabel","Optional"];export{h as Disabled,m as Hint,b as Invalid,x as NoLabel,v as Optional,u as Standard,me as __namedExportsOrder,ue as default};
