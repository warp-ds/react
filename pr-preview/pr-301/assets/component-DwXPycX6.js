import{n as e,j as s,l as b}from"./index-DSOYRR-y.js";import{r as S,R as r}from"./index-RYns6xqu.js";import{r as T}from"./index.m-CtIADANO.js";import{i as $}from"./index-C6dB-k_R.js";import{u as J,H as _}from"./help-text-BWbwCBp4.js";import{a as w}from"./i18n-BJez-btc.js";const E=JSON.parse('{"textfield.label.optional":["(valgfrit)"]}'),R=JSON.parse('{"textfield.label.optional":["(optional)"]}'),C=JSON.parse('{"textfield.label.optional":["(vapaaehtoinen)"]}'),F=JSON.parse('{"textfield.label.optional":["(valgfritt)"]}'),A=JSON.parse('{"textfield.label.optional":["(valfritt)"]}'),H=S.forwardRef((n,h)=>{const{className:v,disabled:i,id:u,children:p,invalid:N,helpText:m,label:c,readOnly:l,type:g="text",style:j,optional:y,...O}=n;w(R,F,C,E,A);const d=J(u),o=m?`${d}__hint`:void 0,a=N,f=r.Children.toArray(p).find(t=>r.isValidElement(t)&&t.props.suffix),x=r.Children.toArray(p).find(t=>r.isValidElement(t)&&t.props.prefix),I=T([e.base,!!n.placeholder&&e.placeholder,!!f&&e.suffix,!!x&&e.prefix,!a&&!i&&!l&&e.default,a&&!i&&!l&&e.invalid,!a&&i&&!l&&e.disabled,!a&&!i&&l&&e.readOnly]);return s.jsxs("div",{className:v,style:j,children:[c&&s.jsxs("label",{htmlFor:d,className:b.base,children:[c,y&&s.jsx("span",{className:b.optional,children:$._({id:"textfield.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),s.jsxs("div",{className:e.wrapper,children:[x,s.jsx("input",{className:I,...O,"aria-describedby":o,"aria-errormessage":a&&o?o:void 0,"aria-invalid":a,disabled:i,id:d,readOnly:l,ref:h,type:g}),f]}),n.helpText&&s.jsx(_,{helpId:o,helpText:m,isInvalid:a})]})});H.__docgenInfo={description:"",methods:[],displayName:"TextField"};export{H as T};
