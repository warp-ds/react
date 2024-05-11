import{t,j as r,l as T,h as g}from"./index-9k8erkLl.js";import{i as N}from"./index-iDl-7hYa.js";import"./index-DogsOklH.js";import{u as j}from"./useId-R7vGbtKH.js";import{r as h}from"./index.m-0-FAh1ao.js";import{I as x}from"./item-4uOF1vnE.js";import{a as I}from"./i18n-uHMsMSCU.js";const W=JSON.parse('{"toggle.label.optional":"(valgfritt)"}'),B=JSON.parse('{"toggle.label.optional":"(optional)"}'),R=JSON.parse('{"toggle.label.optional":"(vapaaehtoinen)"}');function $({id:e,title:i,optional:l}){return I(B,W,R),r.jsxs("legend",{id:`${e}__title`,className:T.label,children:[i,l&&r.jsx("span",{className:T.optional,children:N._({id:"toggle.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]})}function A({isInvalid:e,helpId:i,helpText:l}){return r.jsx("div",{id:i,className:h({[g.helpText]:!0,[g.helpTextColor]:!e,[g.helpTextColorInvalid]:e}),children:l})}function S(e){const i=j(),l=e.helpText?`${i}__hint`:void 0,b=e.type==="radio",s=e.type==="checkbox",o=e.type==="radio-button",u=b||o,d=s&&e.indeterminate,a=e.invalid,n=!o&&e.disabled,p=e.selected!==void 0||e.checked!==void 0,y=h({[t.label]:!o,[t.labelBefore]:!o&&!d,[t.checkbox]:s&&!d&&!a&&!n,[t.checkboxInvalid]:s&&!d&&a&&!n,[t.checkboxDisabled]:s&&!d&&!a&&n,[t.indeterminate]:s&&d&&!a&&!n,[t.indeterminateInvalid]:s&&d&&a&&!n,[t.indeterminateDisabled]:s&&d&&!a&&n,[t.radio]:b&&!a&&!n,[t.radioInvalid]:b&&a&&!n,[t.radioDisabled]:b&&!a&&n,[t.radioButtonsLabel]:o,[t.radioButtonsRegular]:o&&!e.small,[t.radioButtonsSmall]:o&&e.small}),v=h({[t.input]:!0,[t.a11y]:!0}),w=h(e.className,{[t.wrapper]:!0,[t.wrapperRadioButtons]:o&&!e.equalWidth,[t.wrapperRadioButtonsJustified]:o&&e.equalWidth}),q=h({[t.radioButtonsGroup]:!0,[t.radioButtonsGroupJustified]:e.equalWidth});return r.jsxs("fieldset",{role:u?"radiogroup":void 0,"aria-invalid":u?a:void 0,"aria-errormessage":u&&a?l:void 0,"aria-describedby":l,className:t.field,children:[e.title&&r.jsx($,{id:i,title:e.title,optional:e.optional}),r.jsx("div",{className:w,children:!e.options&&e.label?r.jsx(x,{controlled:p,label:e.label,inputClassName:v,labelClassName:y,checked:e.checked,defaultChecked:e.defaultChecked,indeterminate:e.indeterminate,onChange:c=>e.onChange(c),name:`${i}:toggle`,invalid:a,disabled:n,helpId:l,type:u?"radio":"checkbox",noVisibleLabel:e.noVisibleLabel},`${i+e.type}`):e.options&&e.options.map((c,C)=>{var f,k;return r.jsx(x,{controlled:p,checked:(f=e.selected)==null?void 0:f.some(m=>m.value===c.value),defaultChecked:(k=e.defaultSelected)==null?void 0:k.some(m=>m.value===c.value),inputClassName:v,labelClassName:y,groupClassName:q,option:c,onChange:m=>e.onChange(m),name:`${i}:toggle`,invalid:a,disabled:n,helpId:l,type:u?"radio":"checkbox",noVisibleLabel:e.noVisibleLabel,multiple:!0},`${i+C+e.type}`)})}),e.helpText&&r.jsx(A,{helpId:l,helpText:e.helpText,isInvalid:a})]})}S.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{type:{required:!0,tsType:{name:"union",raw:"'radio' | 'checkbox' | 'radio-button'",elements:[{name:"literal",value:"'radio'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'radio-button'"}]},description:"The type of Toggle"},title:{required:!1,tsType:{name:"string"},description:"The option(s) title"},invalid:{required:!1,tsType:{name:"boolean"},description:"Renders options in invalid state. Often paired together with `helpText` to provide feedback about the error."},helpText:{required:!1,tsType:{name:"string"},description:"Help text beneath options"},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: unknown;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}}]}}],raw:"ToggleEntry[]"},description:"An array of options to render"},selected:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: unknown;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}}]}}],raw:"ToggleEntry[]"},description:"An array of options to be selected / checked (controlled)"},defaultSelected:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: unknown;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}}]}}],raw:"ToggleEntry[]"},description:"An array of options to be selected / checked on mount (uncontrolled)"},label:{required:!1,tsType:{name:"string"},description:"If you only need to render a single option, use this prop instead"},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the single option should be checked (controlled)"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Whether the single option should be checked on mount (uncontrolled)"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: ToggleEntry | boolean | any) => void",signature:{arguments:[{type:{name:"union",raw:"ToggleEntry | boolean | any",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: unknown;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"unknown",required:!0}}]}},{name:"boolean"},{name:"any"}]},name:"value"}],return:{name:"void"}}},description:"Retrieve the selected entry or a boolean value, depending on whether you are working with single or multiple options"},small:{required:!1,tsType:{name:"boolean"},description:"Whether the elements should be small"},optional:{required:!1,tsType:{name:"boolean"},description:`Whether the toggle is optional
Appends localized '(optional)' to the end of the title for indication`},equalWidth:{required:!1,tsType:{name:"boolean"},description:"Will make each radio-button equal width"},className:{required:!1,tsType:{name:"string"},description:"Custom classes applied to the wrapping container"},noVisibleLabel:{required:!1,tsType:{name:"boolean"},description:"Whether label should be invisible"},indeterminate:{required:!1,tsType:{name:"boolean"},description:`Whether a single option is indeterminate, or "partially checked."
The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked.`},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is disabled"}}};export{S as T};