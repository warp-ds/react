import{y as l,j as i,l as m,i as v}from"./index-cd9b396d.js";import{a as q,i as N}from"./i18n-ff9a8b3f.js";import"./index-b75aab2a.js";import{u as $}from"./useId-906286da.js";import{r as o}from"./index.m-73ef1fbe.js";import{I as x}from"./item-cb04bd42.js";const _=JSON.parse('{"toggle.label.optional":"(valgfritt)"}'),w=JSON.parse('{"toggle.label.optional":"(optional)"}'),I=JSON.parse('{"toggle.label.optional":"(vapaaehtoinen)"}');function W({id:e,isInvalid:a,title:n,optional:t}){return q(w,_,I),i.jsxs("legend",{id:`${e}__title`,className:o({[m.label]:!0,[m.labelInvalid]:a}),children:[n,t&&i.jsx("span",{className:m.optional,children:N._({id:"toggle.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]})}function j({isInvalid:e,helpId:a,helpText:n}){return i.jsx("div",{id:a,className:o({[v.helpText]:!0,[v.helpTextInvalid]:e}),children:n})}function k(e){const a=$(),n=e.helpText?`${a}__hint`:void 0,t=e.invalid,c=e.type==="radio",h=e.type==="checkbox",d=e.type==="radio-button",s=c||d,b=e.selected!==void 0||e.checked!==void 0,p=o({[l.indeterminate]:e.indeterminate,[l.label]:!d,[l.focusable]:!d,[l.noContent]:!e.indeterminate,[`${l.radio} ${l.labelRadioBorder} ${l.radioChecked}`]:c,[l.radioInvalid]:c&&t,[`${l.checkbox} ${l.labelCheckboxBorder} ${l.checkboxChecked}`]:h,[l.icon]:h&&!e.indeterminate,[l.checkboxInvalid]:h&&t,[l.radioButtonsLabel]:d,[l.radioButtonsLabelSmall]:e.small}),f=o({[l.input]:!0,[l.a11y]:!0}),C=o(e.className,{[l.wrapper]:!0,[`${l.radioButtons} ${l.focusableWithin}`]:d,[l.radioButtonsJustified]:e.equalWidth}),T=o({[l.radioButtonsGroup]:!0,[l.radioButtonsGroupJustified]:e.equalWidth});return i.jsxs("fieldset",{role:s?"radiogroup":void 0,"aria-invalid":s?t:void 0,"aria-errormessage":s&&t?n:void 0,"aria-describedby":n,className:l.field,children:[e.title&&i.jsx(W,{id:a,title:e.title,isInvalid:t,optional:e.optional}),i.jsx("div",{className:C,children:!e.options&&e.label?i.jsx(x,{controlled:b,label:e.label,inputClassName:f,labelClassName:p,checked:e.checked,defaultChecked:e.defaultChecked,indeterminate:e.indeterminate,onChange:r=>e.onChange(r),name:`${a}:toggle`,invalid:t,helpId:n,type:s?"radio":"checkbox",noVisibleLabel:e.noVisibleLabel},`${a+e.type}`):e.options&&e.options.map((r,V)=>{var g,y;return i.jsx(x,{controlled:b,checked:(g=e.selected)==null?void 0:g.some(u=>u.value===r.value),defaultChecked:(y=e.defaultSelected)==null?void 0:y.some(u=>u.value===r.value),inputClassName:f,labelClassName:p,groupClassName:T,option:r,onChange:u=>e.onChange(u),name:`${a}:toggle`,invalid:t,helpId:n,type:s?"radio":"checkbox",noVisibleLabel:e.noVisibleLabel,multiple:!0},`${a+V+e.type}`)})}),e.helpText&&i.jsx(j,{helpId:n,helpText:e.helpText,isInvalid:t})]})}try{k.displayName="Toggle",k.__docgenInfo={description:"",displayName:"Toggle",props:{type:{defaultValue:null,description:"The type of Toggle",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'},{value:'"radio-button"'}]}},title:{defaultValue:null,description:"The option(s) title",name:"title",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"Renders options in invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",required:!1,type:{name:"boolean"}},helpText:{defaultValue:null,description:"Help text beneath options",name:"helpText",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"An array of options to render",name:"options",required:!1,type:{name:"ToggleEntry[]"}},selected:{defaultValue:null,description:"An array of options to be selected / checked (controlled)",name:"selected",required:!1,type:{name:"ToggleEntry[]"}},defaultSelected:{defaultValue:null,description:"An array of options to be selected / checked on mount (uncontrolled)",name:"defaultSelected",required:!1,type:{name:"ToggleEntry[]"}},label:{defaultValue:null,description:"If you only need to render a single option, use this prop instead",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"Whether the single option should be checked (controlled)",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"Whether the single option should be checked on mount (uncontrolled)",name:"defaultChecked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Retrieve the selected entry or a boolean value, depending on whether you are working with single or multiple options",name:"onChange",required:!0,type:{name:"(value: any) => void"}},small:{defaultValue:null,description:"Whether the elements should be small",name:"small",required:!1,type:{name:"boolean"}},optional:{defaultValue:null,description:`Whether the toggle is optional
Appends localized '(optional)' to the end of the title for indication`,name:"optional",required:!1,type:{name:"boolean"}},equalWidth:{defaultValue:null,description:"Will make each radio-button equal width",name:"equalWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom classes applied to the wrapping container",name:"className",required:!1,type:{name:"string"}},noVisibleLabel:{defaultValue:null,description:"Whether label should be invisible",name:"noVisibleLabel",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:`Whether a single option is indeterminate, or "partially checked."
The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked.`,name:"indeterminate",required:!1,type:{name:"boolean"}}}}}catch{}export{k as T};
//# sourceMappingURL=component-5fecc73b.js.map
