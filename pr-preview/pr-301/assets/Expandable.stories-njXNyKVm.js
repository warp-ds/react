import{j as e}from"./index-DSOYRR-y.js";import{r as R}from"./index-RYns6xqu.js";import{I as W}from"./index-C1O304-5.js";import{E as a}from"./component-BOaFOH0e.js";import"./index-C6dB-k_R.js";import"./index.m-CtIADANO.js";import"./chevron-down-16-yi201Ybz.js";import"./unstyled-heading-B2wjEl7S.js";import"./close-16-cHDvCKuO.js";import"./item-BU3_qfee.js";import"./help-text-BWbwCBp4.js";const V={title:"Layout/Expandable"},n=()=>e.jsx(a,{title:"This is a title",children:e.jsx("h2",{children:"I am expandable"})}),s=()=>e.jsx(a,{title:"This is a title",box:!0,children:e.jsx("h2",{children:"I am expandable"})}),t=()=>e.jsx(a,{title:e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("p",{className:"mr-8 mb-0",children:"This is a title with an icon"}),e.jsx("span",{className:"sr-only",children:","}),e.jsx(W,{})]}),box:!0,children:e.jsx("h2",{children:"I am expandable"})}),o=()=>{const[p,c]=R.useState(!1);return e.jsx(a,{title:p?"Open":"Closed",box:!0,onChange:c,children:e.jsx("h1",{children:"I am expandable"})})},r=()=>{const[p,c]=R.useState(!1);return e.jsx(a,{title:p?"Open":"Closed",box:!0,chevron:!1,onChange:c,children:e.jsx("h2",{children:"I am expandable"})})},d=()=>e.jsx(a,{title:"Animated box",box:!0,animated:!0,children:e.jsx("h2",{children:"I am expandable"})}),i=()=>e.jsx(a,{title:"Animated box",expanded:!0,box:!0,animated:!0,children:e.jsx("h2",{children:"I am expandable"})}),l=()=>e.jsx(a,{title:"I'm also a heading",headingLevel:2,children:e.jsx("h2",{children:"I am expandable"})});n.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"Box"};t.__docgenInfo={description:"",methods:[],displayName:"BoxWithCustomIcon"};o.__docgenInfo={description:"",methods:[],displayName:"Controlled"};r.__docgenInfo={description:"",methods:[],displayName:"NoChevron"};d.__docgenInfo={description:"",methods:[],displayName:"Animated"};i.__docgenInfo={description:"",methods:[],displayName:"AnimatedExpanded"};l.__docgenInfo={description:"",methods:[],displayName:"Heading"};var m,x,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Expandable title="This is a title">
    <h2>I am expandable</h2>
  </Expandable>`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,u,I;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Expandable title="This is a title" box>
    <h2>I am expandable</h2>
  </Expandable>`,...(I=(u=s.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};var g,f,E;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Expandable title={<div className="flex flex-row items-center">
        <p className="mr-8 mb-0">This is a title with an icon</p>
        <span className="sr-only">,</span>
        <IconBag16 />
      </div>} box>
    <h2>I am expandable</h2>
  </Expandable>`,...(E=(f=t.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var j,_,C;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <Expandable title={open ? 'Open' : 'Closed'} box onChange={setOpen}>
      <h1>I am expandable</h1>
    </Expandable>;
}`,...(C=(_=o.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var N,S,y;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <Expandable title={open ? 'Open' : 'Closed'} box chevron={false} onChange={setOpen}>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var O,v,A;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => <Expandable title="Animated box" box animated>
    <h2>I am expandable</h2>
  </Expandable>`,...(A=(v=d.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var B,T,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`() => <Expandable title="Animated box" expanded box animated>
    <h2>I am expandable</h2>
  </Expandable>`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var D,H,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`() => <Expandable title="I'm also a heading" headingLevel={2}>
    <h2>I am expandable</h2>
  </Expandable>`,...(L=(H=l.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const X=["Default","Box","BoxWithCustomIcon","Controlled","NoChevron","Animated","AnimatedExpanded","Heading"];export{d as Animated,i as AnimatedExpanded,s as Box,t as BoxWithCustomIcon,o as Controlled,n as Default,l as Heading,r as NoChevron,X as __namedExportsOrder,V as default};
