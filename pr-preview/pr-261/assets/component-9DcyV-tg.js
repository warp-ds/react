import{j as s}from"./jsx-runtime-DiklIkkE.js";import{r as S,R as r}from"./index-DRjF_FHU.js";import{r as T}from"./index.m-CtIADANO.js";import{i as $}from"./index-C6dB-k_R.js";import{l as e,m as b}from"./index-LlLQEwk4.js";import{u as J,H as _}from"./help-text-BqMzKq3X.js";import{a as w}from"./i18n-BJez-btc.js";const E=JSON.parse('{"textfield.label.optional":["(valgfrit)"]}'),R=JSON.parse('{"textfield.label.optional":["(optional)"]}'),C=JSON.parse('{"textfield.label.optional":["(vapaaehtoinen)"]}'),F=JSON.parse('{"textfield.label.optional":["(valgfritt)"]}'),A=JSON.parse('{"textfield.label.optional":["(valfritt)"]}');w(R,F,C,E,A);const H=S.forwardRef((n,h)=>{const{className:v,disabled:i,id:u,children:p,invalid:N,helpText:m,label:f,readOnly:t,type:g="text",style:j,optional:y,...O}=n,d=J(u),o=m?`${d}__hint`:void 0,a=N,c=r.Children.toArray(p).find(l=>r.isValidElement(l)&&l.props.suffix),x=r.Children.toArray(p).find(l=>r.isValidElement(l)&&l.props.prefix),I=T([e.base,!!n.placeholder&&e.placeholder,!!c&&e.suffix,!!x&&e.prefix,!a&&!i&&!t&&e.default,a&&!i&&!t&&e.invalid,!a&&i&&!t&&e.disabled,!a&&!i&&t&&e.readOnly]);return s.jsxs("div",{className:v,style:j,children:[f&&s.jsxs("label",{htmlFor:d,className:b.base,children:[f,y&&s.jsx("span",{className:b.optional,children:$._({id:"textfield.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),s.jsxs("div",{className:e.wrapper,children:[x,s.jsx("input",{className:I,...O,"aria-describedby":o,"aria-errormessage":a&&o?o:void 0,"aria-invalid":a,disabled:i,id:d,readOnly:t,ref:h,type:g}),c]}),n.helpText&&s.jsx(_,{helpId:o,helpText:m,isInvalid:a})]})});H.__docgenInfo={description:"",methods:[],displayName:"TextField"};export{H as T};
