import{j as l}from"./jsx-runtime-QvZ8i92b.js";import{r as $,R as r}from"./index-uubelm5h.js";import{r as b}from"./index.m-CtIADANO.js";import{i as S}from"./index-1YnX0IqW.js";import{l as v,j as e,k as p}from"./index-3IeVCiwq.js";import{a as _}from"./i18n-CHMFe01U.js";import{u as w}from"./useId-DOeVWIUX.js";const C=JSON.parse('{"textfield.label.optional":"(valgfrit)"}'),E=JSON.parse('{"textfield.label.optional":"(optional)"}'),J=JSON.parse('{"textfield.label.optional":"(vapaaehtoinen)"}'),R=JSON.parse('{"textfield.label.optional":"(valgfritt)"}'),F=$.forwardRef((m,u)=>{const{className:N,disabled:s,id:g,children:c,invalid:j,helpText:n,label:x,readOnly:i,type:T="text",style:y,optional:I,...O}=m;_(E,R,J,C);const d=w(g),o=n?`${d}__hint`:void 0,a=j,f=r.Children.toArray(c).find(t=>r.isValidElement(t)&&t.props.suffix),h=r.Children.toArray(c).find(t=>r.isValidElement(t)&&t.props.prefix);return l.jsxs("div",{className:N,style:y,children:[x&&l.jsxs("label",{htmlFor:d,className:v.label,children:[x,I&&l.jsx("span",{className:v.optional,children:S._({id:"textfield.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),l.jsxs("div",{className:e.wrapper,children:[h,l.jsx("input",{className:b({[e.base]:!0,[e.default]:!a&&!s&&!i,[e.invalid]:a&&!s&&!i,[e.disabled]:!a&&s&&!i,[e.readOnly]:!a&&!s&&i,[e.placeholder]:!!m.placeholder,[e.suffix]:!!f,[e.prefix]:!!h}),...O,"aria-describedby":o,"aria-errormessage":a&&o?o:void 0,"aria-invalid":a,disabled:s,id:d,readOnly:i,ref:u,type:T}),f]}),n&&l.jsx("div",{className:b({[p.helpText]:!0,[p.helpTextColor]:!a,[p.helpTextColorInvalid]:a}),id:o,children:n})]})});F.__docgenInfo={description:"",methods:[],displayName:"TextField"};export{F as T};
