import{t as a,j as l,n as k}from"./index-l-HePjgU.js";import{r as b}from"./index.m-CtIADANO.js";import{i as q}from"./index-DPcJZYYW.js";import{u as x,H as C}from"./help-text-C5fOybT2.js";import{a as j}from"./i18n-DwVi8REx.js";import"./index-RYns6xqu.js";import{I as T}from"./item-DB-hVwZ_.js";const I=JSON.parse('{"toggle.label.optional":["(valgfrit)"]}'),W=JSON.parse('{"toggle.label.optional":["(optional)"]}'),$=JSON.parse('{"toggle.label.optional":["(vapaaehtoinen)"]}'),B=JSON.parse('{"toggle.label.optional":["(valgfritt)"]}'),S=JSON.parse('{"toggle.label.optional":["(valfritt)"]}');function A({id:e,title:i,optional:o}){return j(W,B,$,I,S),l.jsxs("legend",{id:`${e}__title`,className:k.base,children:[i,o&&l.jsx("span",{className:k.optional,children:q._({id:"toggle.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]})}function J(e){const i=x(),o=e.helpText?`${i}__hint`:void 0,h=e.type==="radio",r=e.type==="checkbox",d=e.type==="radio-button",c=h||d,s=r&&e.indeterminate,t=e.invalid,n=!d&&e.disabled,p=e.selected!==void 0||e.checked!==void 0,g=b([d?a.radioButtonsLabel:a.label,d&&(e.small?a.radioButtonsSmall:a.radioButtonsRegular),!d&&!s&&a.labelBefore,r&&!s&&!t&&!n&&a.checkbox,r&&!s&&t&&!n&&a.checkboxInvalid,r&&!s&&!t&&n&&a.checkboxDisabled,r&&s&&!t&&!n&&a.indeterminate,r&&s&&t&&!n&&a.indeterminateInvalid,r&&s&&!t&&n&&a.indeterminateDisabled,h&&!t&&!n&&a.radio,h&&t&&!n&&a.radioInvalid,h&&!t&&n&&a.radioDisabled]),y=b([a.input,a.a11y]),w=b(e.className,[a.wrapper,d&&(e.equalWidth?a.wrapperRadioButtonsJustified:a.wrapperRadioButtons)]),R=b(a.radioButtonsGroup,e.equalWidth&&a.radioButtonsGroupJustified);return l.jsxs("fieldset",{role:c?"radiogroup":void 0,"aria-invalid":c?t:void 0,"aria-errormessage":c&&t?o:void 0,"aria-describedby":o,className:a.field,children:[e.title&&l.jsx(A,{id:i,title:e.title,optional:e.optional}),l.jsx("div",{className:w,children:!e.options&&e.label?l.jsx(T,{controlled:p,label:e.label,inputClassName:y,labelClassName:g,checked:e.checked,defaultChecked:e.defaultChecked,indeterminate:e.indeterminate,onChange:u=>e.onChange(u),name:`${i}:toggle`,invalid:t,disabled:n,helpId:o,type:c?"radio":"checkbox",noVisibleLabel:e.noVisibleLabel},`${i+e.type}`):e.options&&e.options.map((u,N)=>{var v,f;return l.jsx(T,{controlled:p,checked:(v=e.selected)==null?void 0:v.some(m=>m.value===u.value),defaultChecked:(f=e.defaultSelected)==null?void 0:f.some(m=>m.value===u.value),inputClassName:y,labelClassName:g,groupClassName:R,option:u,onChange:m=>e.onChange(m),name:`${i}:toggle`,invalid:t,disabled:n,helpId:o,type:c?"radio":"checkbox",noVisibleLabel:e.noVisibleLabel,multiple:!0},`${i+N+e.type}`)})}),e.helpText&&l.jsx(C,{helpId:o,helpText:e.helpText,isInvalid:t})]})}J.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{type:{required:!0,tsType:{name:"union",raw:"'radio' | 'checkbox' | 'radio-button'",elements:[{name:"literal",value:"'radio'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'radio-button'"}]},description:"The type of Toggle"},title:{required:!1,tsType:{name:"string"},description:"The option(s) title"},invalid:{required:!1,tsType:{name:"boolean"},description:"Renders options in invalid state. Often paired together with `helpText` to provide feedback about the error."},helpText:{required:!1,tsType:{name:"string"},description:"Help text beneath options"},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
The checkbox will appear with a small dash instead of a tick to indicate that the option is not exactly checked or unchecked.`},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is disabled"}}};export{J as T};
