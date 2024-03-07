import{j as e,l as _,i as c,h as M}from"./index-UqYzbhlm.js";import{r as l}from"./index-4g5l5LRQ.js";import{i as Re}from"./index-XwI9xEnt.js";import{r as I}from"./index.m-0-FAh1ao.js";import{u as je}from"./useId-4PqvGM84.js";import{a as Ee}from"./i18n-RORRLZQ_.js";import"./_commonjsHelpers-4gQjN7DL.js";const P=typeof window<"u"?l.useLayoutEffect:l.useEffect;function Fe({ref:t,value:n,minimumRows:o,maximumRows:i}){const m=l.useRef(-1/0),u=l.useRef(1/0),h=n!==void 0;function f(r){r.style.setProperty("height","auto");let s=Math.max(m.current,r.scrollHeight);s=Math.min(u.current,s),r.style.setProperty("height",s+"px")}P(()=>{if(t.current&&(o||i)){const r=getComputedStyle(t.current),s=parseFloat(r.getPropertyValue("line-height")),F=parseFloat(r.getPropertyValue("padding-top")),x=parseFloat(r.getPropertyValue("padding-bottom")),N=parseFloat(r.getPropertyValue("border-bottom-width")),d=F+x+N;o&&(m.current=s*o+d),i&&(u.current=s*i+d)}},[t,i,o]),P(()=>{t.current&&f(t.current)},[t,n]),l.useEffect(()=>{if(!t.current&&h)return;const r=t.current,s=()=>{f(r)};return r.addEventListener("input",s),()=>r.removeEventListener("input",s)},[t,h])}const Ne=JSON.parse('{"textarea.label.optional":"(valgfritt)"}'),He=JSON.parse('{"textarea.label.optional":"(optional)"}'),Oe=JSON.parse('{"textarea.label.optional":"(valinnainen)"}'),a=l.forwardRef((t,n)=>{const{className:o,disabled:i,error:m,helpText:u,id:h,invalid:f,label:r,maximumRows:s,minimumRows:F,readOnly:x,style:N,value:d,optional:we,placeholder:C,...Ae}=t;Ee(He,Ne,Oe);const H=je(h),L=l.useRef(null),b=u?`${H}__hint`:void 0,p=f??m;return Fe({ref:L,value:d,maximumRows:s,minimumRows:F}),e.jsxs("div",{className:o,style:N,children:[r&&e.jsxs("label",{htmlFor:H,className:I({[_.label]:!0,[_.labelInvalid]:p}),children:[r,we&&e.jsx("span",{className:_.optional,children:Re._({id:"textarea.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),e.jsx("textarea",{className:I({[`${c.default} ${c.textArea}`]:!0,[c.placeholder]:!!C,[c.invalid]:p,[c.disabled]:i,[c.readOnly]:x}),...Ae,placeholder:C,"aria-describedby":b,"aria-errormessage":p&&b?b:void 0,"aria-invalid":p,disabled:i,id:H,ref:O=>{L.current=O,n&&(typeof n=="function"?n(O):n.current=O)},readOnly:x,value:d}),u&&e.jsx("div",{className:I({[M.helpText]:!0,[M.helpTextInvalid]:p}),id:b,children:u})]})});try{a.displayName="TextArea",a.__docgenInfo={description:"A textarea component that automatically resizes as content changes.",displayName:"TextArea",props:{autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether the input is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.\n@deprecated use `invalid` instead.",name:"error",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",required:!1,type:{name:"boolean"}},helpText:{defaultValue:null,description:"The content to display as the help text.",name:"helpText",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The content to display as the label.",name:"label",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLTextAreaElement>) => void)"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},maximumRows:{defaultValue:null,description:"Maximum number of text rows upto which the input can grow.",name:"maximumRows",required:!1,type:{name:"number"}},minimumRows:{defaultValue:null,description:"Minimum number of text rows to show for the input.",name:"minimumRows",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Text hint that occupies the text input when it is empty.",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"required",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Whether to show optional text",name:"optional",required:!1,type:{name:"boolean"}}}}}catch{}const $e={title:"Forms/TextArea"},g=()=>e.jsx(a,{label:"Description",helpText:"Hint message"}),y=()=>e.jsx(a,{label:"Description",defaultValue:"Test"}),v=()=>{const[t,n]=l.useState("Test");return e.jsx(a,{label:"Description",value:t,onChange:o=>n(o.target.value),minimumRows:4,maximumRows:6})},T=()=>{const t=l.useRef(null);return l.useEffect(()=>{console.log(t.current)}),e.jsx(a,{label:"Description",value:"hey",ref:t})},V=()=>e.jsx(a,{label:"Description",required:!0}),D=()=>e.jsx(a,{label:"Description",placeholder:"Lorem ipsum"}),S=()=>e.jsx(a,{label:"Description",readOnly:!0}),q=()=>e.jsx(a,{label:"Description",autoFocus:!0}),w=()=>e.jsx(a,{label:"Description",disabled:!0}),A=()=>e.jsxs("div",{className:"flex flex-col space-y-48",children:[e.jsx(a,{label:"Description",invalid:!0}),e.jsx(a,{label:"Description",invalid:!0,helpText:"Invalid text"})]}),R=()=>e.jsx(a,{label:"Description",minimumRows:3}),j=()=>e.jsx(a,{label:"Description",maximumRows:3}),E=()=>e.jsx(a,{label:"Description",optional:!0});var W,$,z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:'() => <TextArea label="Description" helpText="Hint message" />',...(z=($=g.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var U,k,B;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:'() => <TextArea label="Description" defaultValue="Test" />',...(B=(k=y.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var J,G,K;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('Test');
  return <TextArea label="Description" value={value} onChange={e => setValue(e.target.value)} minimumRows={4} maximumRows={6} />;
}`,...(K=(G=v.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,Y;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    console.log(ref.current);
  });
  return <TextArea label="Description" value="hey" ref={ref} />;
}`,...(Y=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:'() => <TextArea label="Description" required />',...(te=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,se;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:'() => <TextArea label="Description" placeholder="Lorem ipsum" />',...(se=(re=D.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,ne,oe;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:'() => <TextArea label="Description" readOnly />',...(oe=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,ue,ce;q.parameters={...q.parameters,docs:{...(ie=q.parameters)==null?void 0:ie.docs,source:{originalSource:'() => <TextArea label="Description" autoFocus />',...(ce=(ue=q.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var de,pe,me;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:'() => <TextArea label="Description" disabled />',...(me=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,fe,xe;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`() => <div className="flex flex-col space-y-48">
    <TextArea label="Description" invalid />
    <TextArea label="Description" invalid helpText="Invalid text" />
  </div>`,...(xe=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var be,ge,ye;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:'() => <TextArea label="Description" minimumRows={3} />',...(ye=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var ve,Te,Ve;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:'() => <TextArea label="Description" maximumRows={3} />',...(Ve=(Te=j.parameters)==null?void 0:Te.docs)==null?void 0:Ve.source}}};var De,Se,qe;E.parameters={...E.parameters,docs:{...(De=E.parameters)==null?void 0:De.docs,source:{originalSource:'() => <TextArea label="Description" optional />',...(qe=(Se=E.parameters)==null?void 0:Se.docs)==null?void 0:qe.source}}};const ze=["standard","valueUncontrolled","ValueControlled","TextFieldWithRef","required","placeholder","readOnly","autoFocus","disabled","invalid","minimumRows3","maximumRows3","optional"];export{T as TextFieldWithRef,v as ValueControlled,ze as __namedExportsOrder,q as autoFocus,$e as default,w as disabled,A as invalid,j as maximumRows3,R as minimumRows3,E as optional,D as placeholder,S as readOnly,V as required,g as standard,y as valueUncontrolled};
