import{t as a,j as r,l as T,m as p}from"./index-DXqnx8SZ.js";import{r as h}from"./index.m-CtIADANO.js";import{i as N}from"./index-1YnX0IqW.js";import{a as C}from"./i18n-CHMFe01U.js";import"./index-RYns6xqu.js";import{u as j}from"./useId-CY2WEmb6.js";import{I as w}from"./item-CVdq1K1o.js";const I=JSON.parse('{"toggle.label.optional":"(valgfrit)"}'),W=JSON.parse('{"toggle.label.optional":"(optional)"}'),B=JSON.parse('{"toggle.label.optional":"(vapaaehtoinen)"}'),$=JSON.parse('{"toggle.label.optional":"(valgfritt)"}');function S({id:e,title:l,optional:i}){return C(W,$,B,I),r.jsxs("legend",{id:`${e}__title`,className:T.label,children:[l,i&&r.jsx("span",{className:T.optional,children:N._({id:"toggle.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]})}function A({isInvalid:e,helpId:l,helpText:i}){return r.jsx("div",{id:l,className:h({[p.helpText]:!0,[p.helpTextColor]:!e,[p.helpTextColorInvalid]:e}),children:i})}function _(e){const l=j(),i=e.helpText?`${l}__hint`:void 0,b=e.type==="radio",s=e.type==="checkbox",o=e.type==="radio-button",c=b||o,d=s&&e.indeterminate,t=e.invalid,n=!o&&e.disabled,g=e.selected!==void 0||e.checked!==void 0,y=h({[a.label]:!o,[a.labelBefore]:!o&&!d,[a.checkbox]:s&&!d&&!t&&!n,[a.checkboxInvalid]:s&&!d&&t&&!n,[a.checkboxDisabled]:s&&!d&&!t&&n,[a.indeterminate]:s&&d&&!t&&!n,[a.indeterminateInvalid]:s&&d&&t&&!n,[a.indeterminateDisabled]:s&&d&&!t&&n,[a.radio]:b&&!t&&!n,[a.radioInvalid]:b&&t&&!n,[a.radioDisabled]:b&&!t&&n,[a.radioButtonsLabel]:o,[a.radioButtonsRegular]:o&&!e.small,[a.radioButtonsSmall]:o&&e.small}),v=h({[a.input]:!0,[a.a11y]:!0}),R=h(e.className,{[a.wrapper]:!0,[a.wrapperRadioButtons]:o&&!e.equalWidth,[a.wrapperRadioButtonsJustified]:o&&e.equalWidth}),x=h({[a.radioButtonsGroup]:!0,[a.radioButtonsGroupJustified]:e.equalWidth});return r.jsxs("fieldset",{role:c?"radiogroup":void 0,"aria-invalid":c?t:void 0,"aria-errormessage":c&&t?i:void 0,"aria-describedby":i,className:a.field,children:[e.title&&r.jsx(S,{id:l,title:e.title,optional:e.optional}),r.jsx("div",{className:R,children:!e.options&&e.label?r.jsx(w,{controlled:g,label:e.label,inputClassName:v,labelClassName:y,checked:e.checked,defaultChecked:e.defaultChecked,indeterminate:e.indeterminate,onChange:u=>e.onChange(u),name:`${l}:toggle`,invalid:t,disabled:n,helpId:i,type:c?"radio":"checkbox",noVisibleLabel:e.noVisibleLabel},`${l+e.type}`):e.options&&e.options.map((u,q)=>{var f,k;return r.jsx(w,{controlled:g,checked:(f=e.selected)==null?void 0:f.some(m=>m.value===u.value),defaultChecked:(k=e.defaultSelected)==null?void 0:k.some(m=>m.value===u.value),inputClassName:v,labelClassName:y,groupClassName:x,option:u,onChange:m=>e.onChange(m),name:`${l}:toggle`,invalid:t,disabled:n,helpId:i,type:c?"radio":"checkbox",noVisibleLabel:e.noVisibleLabel,multiple:!0},`${l+q+e.type}`)})}),e.helpText&&r.jsx(A,{helpId:i,helpText:e.helpText,isInvalid:t})]})}_.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{type:{required:!0,tsType:{name:"union",raw:"'radio' | 'checkbox' | 'radio-button'",elements:[{name:"literal",value:"'radio'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'radio-button'"}]},description:"The type of Toggle"},title:{required:!1,tsType:{name:"string"},description:"The option(s) title"},invalid:{required:!1,tsType:{name:"boolean"},description:"Renders options in invalid state. Often paired together with `helpText` to provide feedback about the error."},helpText:{required:!1,tsType:{name:"string"},description:"Help text beneath options"},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: unknown;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"unknown",required:!0}}]}}],raw:"ToggleEntry[]"},description:"An array of options to render"},selected:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: unknown;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"unknown",required:!0}}]}}],raw:"ToggleEntry[]"},description:"An array of options to be selected / checked (controlled)"},defaultSelected:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: unknown;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"unknown",required:!0}}]}}],raw:"ToggleEntry[]"},description:"An array of options to be selected / checked on mount (uncontrolled)"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"If you only need to render a single option, use this prop instead"},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the single option should be checked (controlled)"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Whether the single option should be checked on mount (uncontrolled)"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: ToggleEntry | boolean | any) => void",signature:{arguments:[{type:{name:"union",raw:"ToggleEntry | boolean | any",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: unknown;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"unknown",required:!0}}]}},{name:"boolean"},{name:"any"}]},name:"value"}],return:{name:"void"}}},description:"Retrieve the selected entry or a boolean value, depending on whether you are working with single or multiple options"},small:{required:!1,tsType:{name:"boolean"},description:"Whether the elements should be small"},optional:{required:!1,tsType:{name:"boolean"},description:`Whether the toggle is optional
Appends localized '(optional)' to the end of the title for indication`},equalWidth:{required:!1,tsType:{name:"boolean"},description:"Will make each radio-button equal width"},className:{required:!1,tsType:{name:"string"},description:"Custom classes applied to the wrapping container"},noVisibleLabel:{required:!1,tsType:{name:"boolean"},description:"Whether label should be invisible"},indeterminate:{required:!1,tsType:{name:"boolean"},description:`Whether a single option is indeterminate, or "partially checked."
The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked.`},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is disabled"}}};export{_ as T};
