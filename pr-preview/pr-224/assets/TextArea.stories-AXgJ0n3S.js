import{j as e,l as $,i as d,h as C}from"./index-9k8erkLl.js";import{r as o}from"./index-DogsOklH.js";import{i as Se}from"./index-iDl-7hYa.js";import{r as L}from"./index.m-0-FAh1ao.js";import{u as Ae}from"./useId-R7vGbtKH.js";import{a as Fe}from"./i18n-uHMsMSCU.js";const q=typeof window<"u"?o.useLayoutEffect:o.useEffect;function we({ref:a,value:i,minimumRows:n,maximumRows:l}){const j=o.useRef(-1/0),c=o.useRef(1/0),R=i!==void 0;function S(t){t.style.setProperty("height","auto");let s=Math.max(j.current,t.scrollHeight);s=Math.min(c.current,s),t.style.setProperty("height",s+"px")}q(()=>{if(a.current&&(n||l)){const t=getComputedStyle(a.current),s=parseFloat(t.getPropertyValue("line-height")),w=parseFloat(t.getPropertyValue("padding-top")),A=parseFloat(t.getPropertyValue("padding-bottom")),V=parseFloat(t.getPropertyValue("border-bottom-width")),p=w+A+V;n&&(j.current=s*n+p),l&&(c.current=s*l+p)}},[a,l,n]),q(()=>{a.current&&S(a.current)},[a,i]),o.useEffect(()=>{if(!a.current&&R)return;const t=a.current,s=()=>{S(t)};return t.addEventListener("input",s),()=>t.removeEventListener("input",s)},[a,R])}const Ve=JSON.parse('{"textarea.label.optional":"(valgfritt)"}'),Ee=JSON.parse('{"textarea.label.optional":"(optional)"}'),Oe=JSON.parse('{"textarea.label.optional":"(valinnainen)"}'),r=o.forwardRef((a,i)=>{const{className:n,disabled:l,error:j,helpText:c,id:R,invalid:S,label:t,maximumRows:s,minimumRows:w,readOnly:A,style:V,value:p,optional:je,placeholder:P,...Re}=a;Fe(Ee,Ve,Oe);const E=Ae(R),H=o.useRef(null),F=c?`${E}__hint`:void 0,m=S??j;return we({ref:H,value:p,maximumRows:s,minimumRows:w}),e.jsxs("div",{className:n,style:V,children:[t&&e.jsxs("label",{htmlFor:E,className:$.label,children:[t,je&&e.jsx("span",{className:$.optional,children:Se._({id:"textarea.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),e.jsx("textarea",{className:L({[`${d.default} ${d.textArea}`]:!0,[d.placeholder]:!!P,[d.invalid]:m,[d.disabled]:l,[d.readOnly]:A}),...Re,placeholder:P,"aria-describedby":F,"aria-errormessage":m&&F?F:void 0,"aria-invalid":m,disabled:l,id:E,ref:O=>{H.current=O,i&&(typeof i=="function"?i(O):i.current=O)},readOnly:A,value:p}),c&&e.jsx("div",{className:L({[C.helpText]:!0,[C.helpTextColor]:!m,[C.helpTextColorInvalid]:m}),id:F,children:c})]})});r.__docgenInfo={description:"A textarea component that automatically resizes as content changes.",methods:[],displayName:"TextArea"};const Je={title:"Forms/TextArea"},u=()=>e.jsx(r,{label:"Description",helpText:"Hint message"}),x=()=>e.jsx(r,{label:"Description",defaultValue:"Test"}),h=()=>{const[a,i]=o.useState("Test");return e.jsx(r,{label:"Description",value:a,onChange:n=>i(n.target.value),minimumRows:4,maximumRows:6})},g=()=>{const a=o.useRef(null);return o.useEffect(()=>{console.log(a.current)}),e.jsx(r,{label:"Description",value:"hey",ref:a})},f=()=>e.jsx(r,{label:"Description",required:!0}),b=()=>e.jsx(r,{label:"Description",placeholder:"Lorem ipsum"}),y=()=>e.jsx(r,{label:"Description",readOnly:!0}),v=()=>e.jsx(r,{label:"Description",autoFocus:!0}),T=()=>e.jsx(r,{label:"Description",disabled:!0}),_=()=>e.jsx(r,{label:"Description",invalid:!0,helpText:"Invalid text"}),D=()=>e.jsx(r,{label:"Description",minimumRows:3}),I=()=>e.jsx(r,{label:"Description",maximumRows:3}),N=()=>e.jsx(r,{label:"Description",optional:!0});u.__docgenInfo={description:"",methods:[],displayName:"standard"};x.__docgenInfo={description:"",methods:[],displayName:"valueUncontrolled"};h.__docgenInfo={description:"",methods:[],displayName:"ValueControlled"};g.__docgenInfo={description:"",methods:[],displayName:"TextFieldWithRef"};f.__docgenInfo={description:"",methods:[],displayName:"required"};b.__docgenInfo={description:"",methods:[],displayName:"placeholder"};y.__docgenInfo={description:"",methods:[],displayName:"readOnly"};v.__docgenInfo={description:"",methods:[],displayName:"autoFocus"};T.__docgenInfo={description:"",methods:[],displayName:"disabled"};_.__docgenInfo={description:"",methods:[],displayName:"invalid"};D.__docgenInfo={description:"",methods:[],displayName:"minimumRows3"};I.__docgenInfo={description:"",methods:[],displayName:"maximumRows3"};N.__docgenInfo={description:"",methods:[],displayName:"optional"};var J,U,W;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:'() => <TextArea label="Description" helpText="Hint message" />',...(W=(U=u.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var z,M,k;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:'() => <TextArea label="Description" defaultValue="Test" />',...(k=(M=x.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var B,G,K;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('Test');
  return <TextArea label="Description" value={value} onChange={e => setValue(e.target.value)} minimumRows={4} maximumRows={6} />;
}`,...(K=(G=h.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    console.log(ref.current);
  });
  return <TextArea label="Description" value="hey" ref={ref} />;
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:'() => <TextArea label="Description" required />',...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,se;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:'() => <TextArea label="Description" placeholder="Lorem ipsum" />',...(se=(re=b.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ie,ne;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:'() => <TextArea label="Description" readOnly />',...(ne=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var le,ce,de;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:'() => <TextArea label="Description" autoFocus />',...(de=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,me,ue;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:'() => <TextArea label="Description" disabled />',...(ue=(me=T.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var xe,he,ge;_.parameters={..._.parameters,docs:{...(xe=_.parameters)==null?void 0:xe.docs,source:{originalSource:'() => <TextArea label="Description" invalid helpText="Invalid text" />',...(ge=(he=_.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var fe,be,ye;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:'() => <TextArea label="Description" minimumRows={3} />',...(ye=(be=D.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ve,Te,_e;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:'() => <TextArea label="Description" maximumRows={3} />',...(_e=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:_e.source}}};var De,Ie,Ne;N.parameters={...N.parameters,docs:{...(De=N.parameters)==null?void 0:De.docs,source:{originalSource:'() => <TextArea label="Description" optional />',...(Ne=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:Ne.source}}};const Ue=["standard","valueUncontrolled","ValueControlled","TextFieldWithRef","required","placeholder","readOnly","autoFocus","disabled","invalid","minimumRows3","maximumRows3","optional"];export{g as TextFieldWithRef,h as ValueControlled,Ue as __namedExportsOrder,v as autoFocus,Je as default,T as disabled,_ as invalid,I as maximumRows3,D as minimumRows3,N as optional,b as placeholder,y as readOnly,f as required,u as standard,x as valueUncontrolled};