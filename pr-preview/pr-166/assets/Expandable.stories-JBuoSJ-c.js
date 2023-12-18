import{j as e,h as a,d as ie}from"./index-b4egwufL.js";import{T as de,b as ce,c as pe}from"./icons-ZJZFu3V0.js";import{R as E,r as X}from"./index-Ainc_9Qe.js";import{r}from"./index.m-0-FAh1ao.js";import{U as ue,E as me}from"./unstyled-heading-7idX4RCX.js";import"./item-fMni2ZYP.js";import"./useId-fJNbyo74.js";function n(o){const{children:t,expanded:s=!1,title:d="",info:he=!1,box:l=!1,bleed:Y=!1,buttonClass:Z="",contentClass:ee="",className:ae,onChange:y,chevron:ne=!0,animated:te,headingLevel:oe,...se}=o,[i,C]=E.useState(s),[g,re]=E.useState(s);E.useEffect(()=>{C(s)},[s]);const le=j=>{C(!j),setTimeout(()=>{re(!j)},200),y&&y(!j)};return e.jsxs("div",{...se,className:r(ae,{[a.expandable]:!0,[a.expandableBox]:l,[a.expandableBleed]:Y}),children:[e.jsx(ue,{level:oe,children:e.jsx("button",{type:"button","aria-expanded":i,className:r({[Z||""]:!0,[a.button]:!0,[a.buttonBox]:l}),onClick:()=>le(i),children:e.jsxs("div",{className:a.title,children:[typeof d=="string"?e.jsx("span",{className:a.titleType,children:d}):d,ne&&e.jsx("div",{className:r({[a.chevron]:!0,[a.chevronBox]:l,[a.chevronNonBox]:!l}),children:g?e.jsx(de,{className:r({[a.chevronTransform]:!0,[a.chevronCollapse]:!i&&g})}):e.jsx(ce,{className:r({[a.chevronTransform]:!0,[a.chevronExpand]:i&&!g})})})]})})}),e.jsx(xe,{animated:te,stateExpanded:i,children:e.jsx("div",{className:r({[ee||""]:!0,[ie.box]:l,[a.paddingTop]:l&&d}),children:t})})]})}function xe({animated:o,stateExpanded:t,children:s}){return o?e.jsx(me,{show:t,children:s}):e.jsx("div",{className:r({[a.expansion]:!0,[a.expansionNotExpanded]:!t}),"aria-hidden":t?void 0:!0,children:s})}try{n.displayName="Expandable",n.__docgenInfo={description:"",displayName:"Expandable",props:{className:{defaultValue:null,description:"Additional classes to include",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"CSS styles to inline on the component",name:"style",required:!1,type:{name:"CSSProperties"}},bleed:{defaultValue:{value:"false"},description:"Toggles bleed, makes a box full-width on mobile",name:"bleed",required:!1,type:{name:"boolean"}},info:{defaultValue:{value:"false"},description:"Styles the box with light blue color",name:"info",required:!1,type:{name:"boolean"}},expanded:{defaultValue:{value:"false"},description:"The state of the component, either true for expanded or false for closed.",name:"expanded",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Event function to be called any time the component is expanded or closed. Function will be passed a boolean with a value of true if the component is now expanded or false if it is now closed.",name:"onChange",required:!1,type:{name:"((state: boolean) => void)"}},title:{defaultValue:null,description:"Component title. Can be a string or component. Used to display the title value which is always present regardless of whether the component is open or closed.",name:"title",required:!0,type:{name:"ReactNode"}},box:{defaultValue:{value:"false"},description:"Whether to display the component as a padded box or not.",name:"box",required:!1,type:{name:"boolean"}},buttonClass:{defaultValue:null,description:"Additional CSS classes to include on the button part of the component",name:"buttonClass",required:!1,type:{name:"string"}},contentClass:{defaultValue:null,description:"Additional CSS classes to include on the content part of the component",name:"contentClass",required:!1,type:{name:"string"}},chevron:{defaultValue:{value:"true"},description:"Whether to display the chevron on the button part of the component",name:"chevron",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"false"},description:"Animate open and close",name:"animated",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:null,description:`Wrap the toggle button in a heading element with the specified level.
If headingLevel is not specified, the button will not be wrapped by a heading element.`,name:"headingLevel",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}}}}}catch{}const Ce={title:"Layout/Expandable"},c=()=>e.jsx(n,{title:"This is a title",children:e.jsx("h2",{children:"I am expandable"})}),p=()=>e.jsx(n,{title:"This is a title",box:!0,children:e.jsx("h2",{children:"I am expandable"})}),u=()=>e.jsx(n,{title:e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("p",{className:"mr-8 mb-0",children:"This is a title with an icon"}),e.jsx("span",{className:"sr-only",children:","}),e.jsx(pe,{})]}),box:!0,info:!0,children:e.jsx("h2",{children:"I am expandable"})}),m=()=>e.jsx(n,{title:"This is a title",box:!0,info:!0,children:e.jsx("h2",{children:"I am expandable"})}),x=()=>{const[o,t]=X.useState(!1);return e.jsx(n,{title:o?"Open":"Closed",box:!0,info:!0,onChange:t,children:e.jsx("h1",{children:"I am expandable"})})},h=()=>{const[o,t]=X.useState(!1);return e.jsx(n,{title:o?"Open":"Closed",box:!0,info:!0,chevron:!1,onChange:t,children:e.jsx("h2",{children:"I am expandable"})})},b=()=>e.jsx(n,{title:"Animated box",box:!0,info:!0,animated:!0,children:e.jsx("h2",{children:"I am expandable"})}),f=()=>e.jsx(n,{title:"Animated box",expanded:!0,box:!0,info:!0,animated:!0,children:e.jsx("h2",{children:"I am expandable"})}),v=()=>e.jsx(n,{title:"I'm also a heading",headingLevel:2,children:e.jsx("h2",{children:"I am expandable"})});var I,S,N;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Expandable title='This is a title'>
    <h2>I am expandable</h2>
  </Expandable>`,...(N=(S=c.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var T,w,V;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`() => <Expandable title='This is a title' box>
    <h2>I am expandable</h2>
  </Expandable>`,...(V=(w=p.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var q,B,A;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`() => <Expandable title={<div className='flex flex-row items-center'>
        <p className='mr-8 mb-0'>This is a title with an icon</p>
        <span className='sr-only'>,</span>
        <IconBag16 />
      </div>} box info>
    <h2>I am expandable</h2>
  </Expandable>`,...(A=(B=u.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var O,_,L;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`() => <Expandable title='This is a title' box info>
    <h2>I am expandable</h2>
  </Expandable>`,...(L=(_=m.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var R,U,W;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <Expandable title={open ? 'Open' : 'Closed'} box info onChange={setOpen}>
      <h1>I am expandable</h1>
    </Expandable>;
}`,...(W=(U=x.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var H,k,D;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <Expandable title={open ? 'Open' : 'Closed'} box info chevron={false} onChange={setOpen}>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...(D=(k=h.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var F,P,$;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Expandable title='Animated box' box info animated>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...($=(P=b.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var z,G,J;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Expandable title='Animated box' expanded box info animated>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,M,Q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Expandable title="I'm also a heading" headingLevel={2}>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...(Q=(M=v.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const Ie=["Default","Box","BoxWithCustomIcon","InfoBox","Controlled","NoChevron","Animated","AnimatedExpanded","Heading"];export{b as Animated,f as AnimatedExpanded,p as Box,u as BoxWithCustomIcon,x as Controlled,c as Default,v as Heading,m as InfoBox,h as NoChevron,Ie as __namedExportsOrder,Ce as default};
//# sourceMappingURL=Expandable.stories-JBuoSJ-c.js.map