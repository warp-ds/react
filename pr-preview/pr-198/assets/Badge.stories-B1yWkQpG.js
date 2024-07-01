import{a as r,j as e}from"./index-Qu8W46vS.js";import{R as _}from"./index-BwDkhjyp.js";import{r as A}from"./index.m-CtIADANO.js";import"./_commonjsHelpers-BosuxZz1.js";function a(d){const{children:j,as:w="div",variant:N="neutral",position:i,...y}=d;return _.createElement(w,{...y,className:A(r.base,r[N],{[r.positionBase]:!!i,[r.positionTL]:i==="top-left",[r.positionTR]:i==="top-right",[r.positionBR]:i==="bottom-right",[r.positionBL]:i==="bottom-left"},d.className)},j)}try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{children:{defaultValue:null,description:"Expand element children",name:"children",required:!0,type:{name:"string | Element | Element[]"}},className:{defaultValue:null,description:"Additional classes to include",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"CSS styles to inline on the component",name:"style",required:!1,type:{name:"CSSProperties"}},as:{defaultValue:{value:"div"},description:"Allows customization of the underlying HTML element",name:"as",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"neutral"},description:"Type of badge",name:"variant",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"neutral"'},{value:'"info"'},{value:'"positive"'},{value:'"warning"'},{value:'"negative"'},{value:'"notification"'},{value:'"price"'}]}},position:{defaultValue:null,description:"Position of badge",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}}}}}catch{}const R={title:"Layout/Badge"},t=()=>e.jsx(a,{children:"A badge without variant or position"}),n=()=>e.jsxs("ul",{className:"flex flex-wrap gap-8",children:[e.jsx(a,{as:"li",variant:"neutral",children:"neutral badge"}),e.jsx(a,{as:"li",variant:"info",children:"info badge"}),e.jsx(a,{as:"li",variant:"positive",children:"positive badge"}),e.jsx(a,{as:"li",variant:"warning",children:"warning badge"}),e.jsx(a,{as:"li",variant:"negative",children:"negative badge"}),e.jsx(a,{as:"li",variant:"disabled",children:"disabled badge"}),e.jsx(a,{as:"li",variant:"notification",children:"notification badge"}),e.jsx(a,{as:"li",variant:"price",children:"price badge"})]}),s=()=>e.jsxs("div",{className:"space-y-16 max-w-[400px]",children:[e.jsxs("div",{className:"relative border border-0 rounded-8 overflow-hidden h-96",children:[e.jsx("img",{className:"w-full h-96 object-cover",src:"https://source.unsplash.com/random/400x96"}),e.jsx(a,{variant:"price",position:"top-left",children:"top-left"})]}),e.jsxs("div",{className:"relative border border-0 rounded-8 overflow-hidden h-96",children:[e.jsx("img",{className:"w-full h-96 object-cover",src:"https://source.unsplash.com/random/400x96"}),e.jsx(a,{variant:"price",position:"top-right",children:"top-right"})]}),e.jsxs("div",{className:"relative border border-0 rounded-8 overflow-hidden h-96",children:[e.jsx("img",{className:"w-full h-96 object-cover",src:"https://source.unsplash.com/random/400x96"}),e.jsx(a,{variant:"price",position:"bottom-right",children:"bottom-right"})]}),e.jsxs("div",{className:"relative border border-0 rounded-8 overflow-hidden h-96",children:[e.jsx("img",{className:"w-full h-96 object-cover",src:"https://source.unsplash.com/random/400x96"}),e.jsx(a,{variant:"price",position:"bottom-left",children:"bottom-left"})]})]}),o=()=>e.jsx(a,{as:"span",children:"A badge wrapped in a span tag"});var l,c,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"() => <Badge>A badge without variant or position</Badge>",...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => <ul className="flex flex-wrap gap-8">
    <Badge as="li" variant="neutral">
      neutral badge
    </Badge>
    <Badge as="li" variant="info">
      info badge
    </Badge>
    <Badge as="li" variant="positive">
      positive badge
    </Badge>
    <Badge as="li" variant="warning">
      warning badge
    </Badge>
    <Badge as="li" variant="negative">
      negative badge
    </Badge>
    <Badge as="li" variant="disabled">
      disabled badge
    </Badge>
    <Badge as="li" variant="notification">
      notification badge
    </Badge>
    <Badge as="li" variant="price">
      price badge
    </Badge>
  </ul>`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,h,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => <div className="space-y-16 max-w-[400px]">
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge variant="price" position="top-left">
        top-left
      </Badge>
    </div>
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge variant="price" position="top-right">
        top-right
      </Badge>
    </div>
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge variant="price" position="bottom-right">
        bottom-right
      </Badge>
    </div>
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge variant="price" position="bottom-left">
        bottom-left
      </Badge>
    </div>
  </div>`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,x,B;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:'() => <Badge as="span">A badge wrapped in a span tag</Badge>',...(B=(x=o.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const L=["Default","Variants","Positions","As"];export{o as As,t as Default,s as Positions,n as Variants,L as __namedExportsOrder,R as default};
