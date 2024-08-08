import{a as r,j as e}from"./index-BUlP55RO.js";import{R as A}from"./index-RYns6xqu.js";import{r as I}from"./index.m-CtIADANO.js";function a(d){const{children:B,as:w="div",variant:N="neutral",position:s,..._}=d,y=I(d.className,[r.base,r[N],!!s&&r.positionBase,s==="top-left"&&r.positionTL,s==="top-right"&&r.positionTR,s==="bottom-right"&&r.positionBR,s==="bottom-left"&&r.positionBL]);return A.createElement(w,{..._,className:y},B)}a.__docgenInfo={description:"",methods:[],displayName:"Badge"};const E={title:"Layout/Badge"},i=()=>e.jsx(a,{children:"A badge without variant or position"}),o=()=>e.jsxs("ul",{className:"flex flex-wrap gap-8",children:[e.jsx(a,{as:"li",variant:"neutral",children:"neutral badge"}),e.jsx(a,{as:"li",variant:"info",children:"info badge"}),e.jsx(a,{as:"li",variant:"positive",children:"positive badge"}),e.jsx(a,{as:"li",variant:"warning",children:"warning badge"}),e.jsx(a,{as:"li",variant:"negative",children:"negative badge"}),e.jsx(a,{as:"li",variant:"disabled",children:"disabled badge"}),e.jsx(a,{as:"li",variant:"notification",children:"notification badge"}),e.jsx(a,{as:"li",variant:"price",children:"price badge"})]}),n=()=>e.jsxs("div",{className:"space-y-16 max-w-[400px]",children:[e.jsxs("div",{className:"relative border border-0 rounded-8 overflow-hidden h-96",children:[e.jsx("img",{className:"w-full h-96 object-cover",src:"https://source.unsplash.com/random/400x96"}),e.jsx(a,{variant:"price",position:"top-left",children:"top-left"})]}),e.jsxs("div",{className:"relative border border-0 rounded-8 overflow-hidden h-96",children:[e.jsx("img",{className:"w-full h-96 object-cover",src:"https://source.unsplash.com/random/400x96"}),e.jsx(a,{variant:"price",position:"top-right",children:"top-right"})]}),e.jsxs("div",{className:"relative border border-0 rounded-8 overflow-hidden h-96",children:[e.jsx("img",{className:"w-full h-96 object-cover",src:"https://source.unsplash.com/random/400x96"}),e.jsx(a,{variant:"price",position:"bottom-right",children:"bottom-right"})]}),e.jsxs("div",{className:"relative border border-0 rounded-8 overflow-hidden h-96",children:[e.jsx("img",{className:"w-full h-96 object-cover",src:"https://source.unsplash.com/random/400x96"}),e.jsx(a,{variant:"price",position:"bottom-left",children:"bottom-left"})]})]}),t=()=>e.jsx(a,{as:"span",children:"A badge wrapped in a span tag"});i.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Variants"};n.__docgenInfo={description:"",methods:[],displayName:"Positions"};t.__docgenInfo={description:"",methods:[],displayName:"As"};var c,l,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"() => <Badge>A badge without variant or position</Badge>",...(p=(l=i.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,g,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => <ul className="flex flex-wrap gap-8">
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
  </ul>`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,u,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`() => <div className="space-y-16 max-w-[400px]">
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
  </div>`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,x,j;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:'() => <Badge as="span">A badge wrapped in a span tag</Badge>',...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const L=["Default","Variants","Positions","As"];export{t as As,i as Default,n as Positions,o as Variants,L as __namedExportsOrder,E as default};
