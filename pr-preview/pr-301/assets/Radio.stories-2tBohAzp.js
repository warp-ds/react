import{j as t}from"./index-DSOYRR-y.js";import{T as l}from"./component-Blth2Uzk.js";import"./index-RYns6xqu.js";import"./index.m-CtIADANO.js";import"./index-C6dB-k_R.js";import"./help-text-BWbwCBp4.js";import"./i18n-BJez-btc.js";import"./item-BU3_qfee.js";const A={title:"Forms/Toggle/Radio"},o=[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"}],s=()=>t.jsx(l,{type:"radio",options:o,onChange:e=>console.log(e)}),a=()=>t.jsx(l,{type:"radio",title:"Favorite color",options:o,onChange:e=>console.log(e)}),r=()=>t.jsx(l,{optional:!0,type:"radio",title:"Favorite color",options:o,onChange:e=>console.log(e)}),i=()=>t.jsx(l,{type:"radio",title:"Favorite color",helpText:"Choose your absolute favorite color",options:o,onChange:e=>console.log(e)}),c=()=>t.jsx(l,{type:"radio",title:"Favorite color",helpText:"No way you like blue",invalid:!0,selected:[o[1]],options:o,onChange:e=>console.log(e)}),n=()=>t.jsx(l,{type:"radio",title:"Favorite color",helpText:"No way you like blue",disabled:!0,selected:[o[1]],options:o,onChange:e=>console.log(e)}),d=()=>t.jsx(l,{type:"radio",title:"Favorite color",helpText:"Last selected by default",selected:[o[o.length-1]],options:o,onChange:e=>console.log(e)}),p=()=>t.jsx(l,{type:"radio",title:"Favorite color",helpText:"Last selected by default",defaultSelected:[o[o.length-1]],options:o,onChange:e=>console.log(e)});s.__docgenInfo={description:"",methods:[],displayName:"MultipleOptions"};a.__docgenInfo={description:"",methods:[],displayName:"WithTitle"};r.__docgenInfo={description:"",methods:[],displayName:"Optional"};i.__docgenInfo={description:"",methods:[],displayName:"HelpText"};c.__docgenInfo={description:"",methods:[],displayName:"Invalid"};n.__docgenInfo={description:"",methods:[],displayName:"Disabled"};d.__docgenInfo={description:"",methods:[],displayName:"SelectedDefaultControlled"};p.__docgenInfo={description:"",methods:[],displayName:"SelectedDefaultUncontrolled"};var g,m,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:'() => <Toggle type="radio" options={options} onChange={selected => console.log(selected)} />',...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,y,T;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:'() => <Toggle type="radio" title="Favorite color" options={options} onChange={selected => console.log(selected)} />',...(T=(y=a.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var f,x,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:'() => <Toggle optional type="radio" title="Favorite color" options={options} onChange={selected => console.log(selected)} />',...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var C,b,_;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:'() => <Toggle type="radio" title="Favorite color" helpText="Choose your absolute favorite color" options={options} onChange={selected => console.log(selected)} />',...(_=(b=i.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var S,F,N;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:'() => <Toggle type="radio" title="Favorite color" helpText="No way you like blue" invalid selected={[options[1]]} options={options} onChange={selected => console.log(selected)} />',...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var I,j,D;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:'() => <Toggle type="radio" title="Favorite color" helpText="No way you like blue" disabled selected={[options[1]]} options={options} onChange={selected => console.log(selected)} />',...(D=(j=n.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var O,k,w;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:'() => <Toggle type="radio" title="Favorite color" helpText="Last selected by default" selected={[options[options.length - 1]]} options={options} onChange={selected => console.log(selected)} />',...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var L,H,M;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:'() => <Toggle type="radio" title="Favorite color" helpText="Last selected by default" defaultSelected={[options[options.length - 1]]} options={options} onChange={selected => console.log(selected)} />',...(M=(H=p.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const J=["MultipleOptions","WithTitle","Optional","HelpText","Invalid","Disabled","SelectedDefaultControlled","SelectedDefaultUncontrolled"];export{n as Disabled,i as HelpText,c as Invalid,s as MultipleOptions,r as Optional,d as SelectedDefaultControlled,p as SelectedDefaultUncontrolled,a as WithTitle,J as __namedExportsOrder,A as default};
