import{j as o}from"./index-BUlP55RO.js";import{r as O}from"./index-RYns6xqu.js";import{T as s}from"./component-h6vbxwOl.js";import"./index.m-CtIADANO.js";import"./index-1YnX0IqW.js";import"./help-text-Jf_bghft.js";import"./i18n-CHMFe01U.js";import"./item-D3nzUygf.js";const Ce={title:"Forms/Toggle/Checkbox"},t=[{label:"Apple",value:"apple"},{label:"Microsoft",value:"microsoft"},{label:"Amazon",value:"amazon"}],c=()=>{const[e,x]=O.useState(!1);return o.jsx(s,{onChange:()=>x(!e),checked:e,type:"checkbox",label:"Toggle X",noVisibleLabel:!0})},i=()=>o.jsx(s,{type:"checkbox",label:"Apple",onChange:e=>console.log(e)}),d=()=>o.jsx(s,{type:"checkbox",label:"Apple",checked:!0,onChange:e=>console.log(e)}),r=()=>o.jsx(s,{type:"checkbox",label:"Apple",defaultChecked:!0,onChange:e=>console.log(e)}),a=({isInvalid:e=!1,isDisabled:x=!1})=>{const[re,C]=O.useState(!1),[l,y]=O.useState([t[0]]),pe=n=>{y(n===!1?[]:t),C(n)},he=n=>{let k=l;l.some(T=>T.value===n.value)?k=l.filter(T=>T.value!==n.value):k=[...l,n],l.length===t.length&&C(!1),k.length===t.length&&C(!0),y(k)};return o.jsxs(o.Fragment,{children:[o.jsx(s,{onChange:pe,checked:re,type:"checkbox",label:"Select all companies",indeterminate:l.length>0&&l.length!==t.length,invalid:e,disabled:x}),o.jsx(s,{type:"checkbox",title:"Companies",options:t,selected:l,onChange:he,invalid:e,helpText:e?"This is an error message":void 0,disabled:x})]})},p=()=>o.jsx(a,{isInvalid:!0}),h=()=>o.jsx(a,{isDisabled:!0}),g=()=>o.jsx(s,{type:"checkbox",label:"Apple",helpText:"This is helper text",onChange:e=>console.log(e)}),m=()=>o.jsx(s,{type:"checkbox",options:t,onChange:e=>console.log(e)}),u=()=>o.jsx(s,{type:"checkbox",title:"Companies",options:t,onChange:e=>console.log(e)}),b=()=>o.jsx(s,{optional:!0,type:"checkbox",title:"Companies",options:t,onChange:e=>console.log(e)}),S=()=>o.jsx(s,{type:"checkbox",title:"Companies",helpText:"Select a random company",options:t,onChange:e=>console.log(e)}),f=()=>o.jsx(s,{type:"checkbox",title:"Companies",helpText:"Everything but first is selected by default",selected:[...t].splice(1),options:t,onChange:e=>console.log(e)});c.__docgenInfo={description:"",methods:[],displayName:"SingleOptionWithInvisibleLabel"};i.__docgenInfo={description:"",methods:[],displayName:"SingleOption"};d.__docgenInfo={description:"",methods:[],displayName:"SingleOptionCheckedControlledDefault"};r.__docgenInfo={description:"",methods:[],displayName:"SingleOptionCheckedUncontrolledDefault"};a.__docgenInfo={description:"",methods:[],displayName:"IndeterminateState",props:{isInvalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};p.__docgenInfo={description:"",methods:[],displayName:"Invalid"};h.__docgenInfo={description:"",methods:[],displayName:"Disabled"};g.__docgenInfo={description:"",methods:[],displayName:"SingleOptionHelpText"};m.__docgenInfo={description:"",methods:[],displayName:"MultipleOptions"};u.__docgenInfo={description:"",methods:[],displayName:"WithTitle"};b.__docgenInfo={description:"",methods:[],displayName:"Optional"};S.__docgenInfo={description:"",methods:[],displayName:"HelpText"};f.__docgenInfo={description:"",methods:[],displayName:"SelectedDefault"};var v,I,_;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  return <Toggle onChange={() => setValue(!value)} checked={value} type="checkbox" label="Toggle X" noVisibleLabel />;
}`,...(_=(I=c.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var A,D,j;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:'() => <Toggle type="checkbox" label="Apple" onChange={checked => console.log(checked)} />',...(j=(D=i.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var N,V,H;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:'() => <Toggle type="checkbox" label="Apple" checked onChange={checked => console.log(checked)} />',...(H=(V=d.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var W,E,L;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:'() => <Toggle type="checkbox" label="Apple" defaultChecked onChange={checked => console.log(checked)} />',...(L=(E=r.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var M,U,q;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`({
  isInvalid = false,
  isDisabled = false
}: {
  isInvalid?: boolean;
  isDisabled?: boolean;
}) => {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([options[0]]);
  const handleSelectAll = (checked: boolean) => {
    if (checked === false) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options);
    }
    setSelectAllChecked(checked);
  };
  const handleSelect = (selected: Option) => {
    let updatedSelected = selectedOptions;
    if (selectedOptions.some(option => option.value === selected.value)) {
      updatedSelected = selectedOptions.filter(option => option.value !== selected.value);
    } else {
      updatedSelected = [...selectedOptions, selected];
    }
    if (selectedOptions.length === options.length) setSelectAllChecked(false);
    if (updatedSelected.length === options.length) setSelectAllChecked(true);
    setSelectedOptions(updatedSelected);
  };
  return <>
      <Toggle onChange={handleSelectAll} checked={selectAllChecked} type="checkbox" label="Select all companies" indeterminate={selectedOptions.length > 0 && selectedOptions.length !== options.length} invalid={isInvalid} disabled={isDisabled} />
      <Toggle type="checkbox" title="Companies" options={options} selected={selectedOptions} onChange={handleSelect} invalid={isInvalid} helpText={isInvalid ? 'This is an error message' : undefined} disabled={isDisabled} />
    </>;
}`,...(q=(U=a.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var z,F,X;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:"() => <IndeterminateState isInvalid={true} />",...(X=(F=p.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var R,w,B;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:"() => <IndeterminateState isDisabled={true} />",...(B=(w=h.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var G,J,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:'() => <Toggle type="checkbox" label="Apple" helpText="This is helper text" onChange={selected => console.log(selected)} />',...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,Y;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:'() => <Toggle type="checkbox" options={options} onChange={selected => console.log(selected)} />',...(Y=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:'() => <Toggle type="checkbox" title="Companies" options={options} onChange={selected => console.log(selected)} />',...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var oe,te,se;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:'() => <Toggle optional type="checkbox" title="Companies" options={options} onChange={selected => console.log(selected)} />',...(se=(te=b.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,ae,ne;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:'() => <Toggle type="checkbox" title="Companies" helpText="Select a random company" options={options} onChange={selected => console.log(selected)} />',...(ne=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ce,ie,de;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:'() => <Toggle type="checkbox" title="Companies" helpText="Everything but first is selected by default" selected={[...options].splice(1)} options={options} onChange={selected => console.log(selected)} />',...(de=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const ye=["SingleOptionWithInvisibleLabel","SingleOption","SingleOptionCheckedControlledDefault","SingleOptionCheckedUncontrolledDefault","IndeterminateState","Invalid","Disabled","SingleOptionHelpText","MultipleOptions","WithTitle","Optional","HelpText","SelectedDefault"];export{h as Disabled,S as HelpText,a as IndeterminateState,p as Invalid,m as MultipleOptions,b as Optional,f as SelectedDefault,i as SingleOption,d as SingleOptionCheckedControlledDefault,r as SingleOptionCheckedUncontrolledDefault,g as SingleOptionHelpText,c as SingleOptionWithInvisibleLabel,u as WithTitle,ye as __namedExportsOrder,Ce as default};
