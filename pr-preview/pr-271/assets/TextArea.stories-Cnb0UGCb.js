import{j as e,m as P,l as p}from"./index-n9XINcIq.js";import{r as i}from"./index-RYns6xqu.js";import{r as Se}from"./index.m-CtIADANO.js";import{i as je}from"./index-1YnX0IqW.js";import{u as Re,H as Ae}from"./help-text-Bd9UYfHw.js";import{a as Fe}from"./i18n-CHMFe01U.js";const L=typeof window<"u"?i.useLayoutEffect:i.useEffect,Ve=JSON.parse('{"textarea.label.optional":"(valgfrit)"}'),we=JSON.parse('{"textarea.label.optional":"(optional)"}'),Oe=JSON.parse('{"textarea.label.optional":"(valinnainen)"}'),Ee=JSON.parse('{"textarea.label.optional":"(valgfritt)"}');function He({ref:a,value:n,minimumRows:l,maximumRows:o}){const m=i.useRef(-1/0),j=i.useRef(1/0),R=n!==void 0;function u(t){t.style.setProperty("height","auto");let r=Math.max(m.current,t.scrollHeight);r=Math.min(j.current,r),t.style.setProperty("height",r+"px")}L(()=>{if(a.current&&(l||o)){const t=getComputedStyle(a.current),r=parseFloat(t.getPropertyValue("line-height")),c=parseFloat(t.getPropertyValue("padding-top")),w=parseFloat(t.getPropertyValue("padding-bottom")),A=parseFloat(t.getPropertyValue("border-bottom-width")),F=c+w+A;l&&(m.current=r*l+F),o&&(j.current=r*o+F)}},[a,o,l]),L(()=>{a.current&&u(a.current)},[a,n]),i.useEffect(()=>{if(!a.current&&R)return;const t=a.current,r=()=>{u(t)};return t.addEventListener("input",r),()=>t.removeEventListener("input",r)},[a,R])}const s=i.forwardRef((a,n)=>{const{className:l,disabled:o,helpText:m,id:j,invalid:R,label:u,maximumRows:t,minimumRows:r,readOnly:c,style:w,value:A,optional:F,placeholder:H,...Ie}=a;Fe(we,Ee,Oe,Ve);const O=Re(j),C=i.useRef(null),V=m?`${O}__hint`:void 0,d=R,Ne=Se([p.base,p.textArea,!!H&&p.placeholder,!d&&!o&&!c&&p.default,d&&!o&&!c&&p.invalid,!d&&o&&!c&&p.disabled,!d&&!o&&c&&p.readOnly]);return He({ref:C,value:A,maximumRows:t,minimumRows:r}),e.jsxs("div",{className:l,style:w,children:[u&&e.jsxs("label",{htmlFor:O,className:P.base,children:[u,F&&e.jsx("span",{className:P.optional,children:je._({id:"textarea.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),e.jsx("textarea",{className:Ne,...Ie,placeholder:H,"aria-describedby":V,"aria-errormessage":d&&V?V:void 0,"aria-invalid":d,disabled:o,id:O,ref:E=>{C.current=E,n&&(typeof n=="function"?n(E):n.current=E)},readOnly:c,value:A}),a.helpText&&e.jsx(Ae,{helpId:V,helpText:m,isInvalid:d})]})});s.__docgenInfo={description:"A textarea component that automatically resizes as content changes.",methods:[],displayName:"TextArea"};const Ue={title:"Forms/TextArea"},x=()=>e.jsx(s,{label:"Description",helpText:"Hint message"}),g=()=>e.jsx(s,{label:"Description",defaultValue:"Test"}),h=()=>{const[a,n]=i.useState("Test");return e.jsx(s,{label:"Description",value:a,onChange:l=>n(l.target.value),minimumRows:4,maximumRows:6})},f=()=>{const a=i.useRef(null);return i.useEffect(()=>{console.log(a.current)}),e.jsx(s,{label:"Description",defaultValue:"hey",ref:a})},b=()=>e.jsx(s,{label:"Description",required:!0}),y=()=>e.jsx(s,{label:"Description",placeholder:"Lorem ipsum"}),_=()=>e.jsx(s,{label:"Description",readOnly:!0}),v=()=>e.jsx(s,{label:"Description",autoFocus:!0}),T=()=>e.jsx(s,{label:"Description",disabled:!0}),D=()=>e.jsx(s,{label:"Description",invalid:!0,helpText:"Invalid text"}),I=()=>e.jsx(s,{label:"Description",minimumRows:3}),N=()=>e.jsx(s,{label:"Description",maximumRows:3}),S=()=>e.jsx(s,{label:"Description",optional:!0});x.__docgenInfo={description:"",methods:[],displayName:"standard"};g.__docgenInfo={description:"",methods:[],displayName:"valueUncontrolled"};h.__docgenInfo={description:"",methods:[],displayName:"ValueControlled"};f.__docgenInfo={description:"",methods:[],displayName:"TextFieldWithRef"};b.__docgenInfo={description:"",methods:[],displayName:"required"};y.__docgenInfo={description:"",methods:[],displayName:"placeholder"};_.__docgenInfo={description:"",methods:[],displayName:"readOnly"};v.__docgenInfo={description:"",methods:[],displayName:"autoFocus"};T.__docgenInfo={description:"",methods:[],displayName:"disabled"};D.__docgenInfo={description:"",methods:[],displayName:"invalid"};I.__docgenInfo={description:"",methods:[],displayName:"minimumRows3"};N.__docgenInfo={description:"",methods:[],displayName:"maximumRows3"};S.__docgenInfo={description:"",methods:[],displayName:"optional"};var q,$,J;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:'() => <TextArea label="Description" helpText="Hint message" />',...(J=($=x.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var U,W,z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:'() => <TextArea label="Description" defaultValue="Test" />',...(z=(W=g.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var M,k,B;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('Test');
  return <TextArea label="Description" value={value} onChange={e => setValue(e.target.value)} minimumRows={4} maximumRows={6} />;
}`,...(B=(k=h.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var G,K,Q;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    console.log(ref.current);
  });
  return <TextArea label="Description" defaultValue="hey" ref={ref} />;
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:'() => <TextArea label="Description" required />',...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:'() => <TextArea label="Description" placeholder="Lorem ipsum" />',...(te=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,re,oe;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:'() => <TextArea label="Description" readOnly />',...(oe=(re=_.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,ne,le;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:'() => <TextArea label="Description" autoFocus />',...(le=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ce,de,pe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:'() => <TextArea label="Description" disabled />',...(pe=(de=T.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ue,xe;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:'() => <TextArea label="Description" invalid helpText="Invalid text" />',...(xe=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:xe.source}}};var ge,he,fe;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:'() => <TextArea label="Description" minimumRows={3} />',...(fe=(he=I.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var be,ye,_e;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:'() => <TextArea label="Description" maximumRows={3} />',...(_e=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:_e.source}}};var ve,Te,De;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:'() => <TextArea label="Description" optional />',...(De=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};const We=["standard","valueUncontrolled","ValueControlled","TextFieldWithRef","required","placeholder","readOnly","autoFocus","disabled","invalid","minimumRows3","maximumRows3","optional"];export{f as TextFieldWithRef,h as ValueControlled,We as __namedExportsOrder,v as autoFocus,Ue as default,T as disabled,D as invalid,N as maximumRows3,I as minimumRows3,S as optional,y as placeholder,_ as readOnly,b as required,x as standard,g as valueUncontrolled};
