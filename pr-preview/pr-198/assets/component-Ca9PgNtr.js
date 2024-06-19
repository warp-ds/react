import{t as l,j as d,l as k,h as p}from"./index-lTKFmHqk.js";import{r as m}from"./index.m-CtIADANO.js";import{i as w}from"./index-ClUvnnK6.js";import{a as W}from"./i18n-BdZ5C-JL.js";import"./index-CBqU2yxZ.js";import{u as _}from"./useId-Cfvm1aBZ.js";import{I as C}from"./item-D6BWeixL.js";const I=JSON.parse('{"toggle.label.optional":"(optional)"}'),j=JSON.parse('{"toggle.label.optional":"(vapaaehtoinen)"}'),R=JSON.parse('{"toggle.label.optional":"(valgfritt)"}');function B({id:e,title:i,optional:n}){return W(I,R,j),d.jsxs("legend",{id:`${e}__title`,className:k.label,children:[i,n&&d.jsx("span",{className:k.optional,children:w._({id:"toggle.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]})}function S({isInvalid:e,helpId:i,helpText:n}){return d.jsx("div",{id:i,className:m({[p.helpText]:!0,[p.helpTextColor]:!e,[p.helpTextColorInvalid]:e}),children:n})}function T(e){const i=_(),n=e.helpText?`${i}__hint`:void 0,b=e.type==="radio",s=e.type==="checkbox",o=e.type==="radio-button",u=b||o,r=s&&e.indeterminate,a=e.invalid,t=!o&&e.disabled,f=e.selected!==void 0||e.checked!==void 0,g=m({[l.label]:!o,[l.labelBefore]:!o&&!r,[l.checkbox]:s&&!r&&!a&&!t,[l.checkboxInvalid]:s&&!r&&a&&!t,[l.checkboxDisabled]:s&&!r&&!a&&t,[l.indeterminate]:s&&r&&!a&&!t,[l.indeterminateInvalid]:s&&r&&a&&!t,[l.indeterminateDisabled]:s&&r&&!a&&t,[l.radio]:b&&!a&&!t,[l.radioInvalid]:b&&a&&!t,[l.radioDisabled]:b&&!a&&t,[l.radioButtonsLabel]:o,[l.radioButtonsRegular]:o&&!e.small,[l.radioButtonsSmall]:o&&e.small}),y=m({[l.input]:!0,[l.a11y]:!0}),q=m(e.className,{[l.wrapper]:!0,[l.wrapperRadioButtons]:o&&!e.equalWidth,[l.wrapperRadioButtonsJustified]:o&&e.equalWidth}),V=m({[l.radioButtonsGroup]:!0,[l.radioButtonsGroupJustified]:e.equalWidth});return d.jsxs("fieldset",{role:u?"radiogroup":void 0,"aria-invalid":u?a:void 0,"aria-errormessage":u&&a?n:void 0,"aria-describedby":n,className:l.field,children:[e.title&&d.jsx(B,{id:i,title:e.title,optional:e.optional}),d.jsx("div",{className:q,children:!e.options&&e.label?d.jsx(C,{controlled:f,label:e.label,inputClassName:y,labelClassName:g,checked:e.checked,defaultChecked:e.defaultChecked,indeterminate:e.indeterminate,onChange:c=>e.onChange(c),name:`${i}:toggle`,invalid:a,disabled:t,helpId:n,type:u?"radio":"checkbox",noVisibleLabel:e.noVisibleLabel},`${i+e.type}`):e.options&&e.options.map((c,N)=>{var v,x;return d.jsx(C,{controlled:f,checked:(v=e.selected)==null?void 0:v.some(h=>h.value===c.value),defaultChecked:(x=e.defaultSelected)==null?void 0:x.some(h=>h.value===c.value),inputClassName:y,labelClassName:g,groupClassName:V,option:c,onChange:h=>e.onChange(h),name:`${i}:toggle`,invalid:a,disabled:t,helpId:n,type:u?"radio":"checkbox",noVisibleLabel:e.noVisibleLabel,multiple:!0},`${i+N+e.type}`)})}),e.helpText&&d.jsx(S,{helpId:n,helpText:e.helpText,isInvalid:a})]})}try{T.displayName="Toggle",T.__docgenInfo={description:"",displayName:"Toggle",props:{type:{defaultValue:null,description:"The type of Toggle",name:"type",required:!0,type:{name:"enum",value:[{value:'"radio"'},{value:'"checkbox"'},{value:'"radio-button"'}]}},title:{defaultValue:null,description:"The option(s) title",name:"title",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"Renders options in invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",required:!1,type:{name:"boolean"}},helpText:{defaultValue:null,description:"Help text beneath options",name:"helpText",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"An array of options to render",name:"options",required:!1,type:{name:"ToggleEntry[]"}},selected:{defaultValue:null,description:"An array of options to be selected / checked (controlled)",name:"selected",required:!1,type:{name:"ToggleEntry[]"}},defaultSelected:{defaultValue:null,description:"An array of options to be selected / checked on mount (uncontrolled)",name:"defaultSelected",required:!1,type:{name:"ToggleEntry[]"}},label:{defaultValue:null,description:"If you only need to render a single option, use this prop instead",name:"label",required:!1,type:{name:"ReactNode"}},checked:{defaultValue:null,description:"Whether the single option should be checked (controlled)",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"Whether the single option should be checked on mount (uncontrolled)",name:"defaultChecked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Retrieve the selected entry or a boolean value, depending on whether you are working with single or multiple options",name:"onChange",required:!0,type:{name:"(value: any) => void"}},small:{defaultValue:null,description:"Whether the elements should be small",name:"small",required:!1,type:{name:"boolean"}},optional:{defaultValue:null,description:`Whether the toggle is optional
Appends localized '(optional)' to the end of the title for indication`,name:"optional",required:!1,type:{name:"boolean"}},equalWidth:{defaultValue:null,description:"Will make each radio-button equal width",name:"equalWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom classes applied to the wrapping container",name:"className",required:!1,type:{name:"string"}},noVisibleLabel:{defaultValue:null,description:"Whether label should be invisible",name:"noVisibleLabel",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:`Whether a single option is indeterminate, or "partially checked."
The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked.`,name:"indeterminate",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Whether the toggle is disabled",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{T};