import{o as m,j as e}from"./index-B89CtOeI.js";import{r as b}from"./index-CBqU2yxZ.js";import{i as A}from"./index-ClUvnnK6.js";import{a as W}from"./i18n-BdZ5C-JL.js";import"./_commonjsHelpers-BosuxZz1.js";function O(a,r){return a.flatMap(n=>[n,r]).slice(0,-1)}const P=JSON.parse('{"breadcrumbs.ariaLabel":"You are here"}'),V=JSON.parse('{"breadcrumbs.ariaLabel":"Olet tässä"}'),q=JSON.parse('{"breadcrumbs.ariaLabel":"Her er du"}'),i=a=>{const{children:r,className:n,...t}=a;W(P,q,V);const d=a["aria-label"]||A._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screenreader message for the breadcrumb component"}),h=r.flat(1/0),_=h.map((s,p)=>{if(b.isValidElement(s)){const f=s.type==="a"?m.link:m.text,v=s.props.className?`${s.props.className} ${f}`:f;return b.cloneElement(s,{className:v})}const k=p===h.length-1;return e.jsx("span",{className:m.text,"aria-current":k?"page":void 0,children:s})});return e.jsxs("nav",{className:n,"aria-labelledby":"breadCrumbLabel",...t,children:[e.jsx("h2",{id:"breadCrumbLabel",className:m.a11y,children:d}),e.jsx("div",{className:m.wrapper,children:O(_,e.jsx("span",{className:m.separator,children:"/"})).map((s,p)=>e.jsx(b.Fragment,{children:s},p))})]})};try{i.displayName="Breadcrumbs",i.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{"aria-label":{defaultValue:{value:"Her er du"},description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const M={title:"Navigation/Breadcrumbs"},c=()=>e.jsxs(i,{children:[e.jsx("a",{href:"#/url1",children:"Item 1"}),e.jsx("a",{href:"#/url2",children:"Item 2"}),e.jsx("a",{href:"#/url3",children:"Item 3"})]}),l=()=>{const a=[{id:1,name:"Item 1"},{id:2,name:"Item 2"},{id:3,name:"Item 3"},{id:4,name:"Item 4"}];return e.jsxs(i,{children:[a.slice(0,-1).map(r=>e.jsx("a",{href:`?id=${r.id}`,children:r.name},`?id=${r.id}`)),e.jsx("span",{"aria-current":"page",children:a.at(-1).name})]})},o=()=>{const a=[{id:1,name:"Item 1"},{id:2,name:"Item 2"},{id:3,name:"Item 3"},{id:4,name:"Item 4"},[{id:5,name:"Item 5"},{id:6,name:"Item 6"},[{id:7,name:"Item 7"},{id:8,name:"Item 8"}]],{id:0,name:"Item 9"}],r=a.at(-1);return e.jsxs(i,{children:[a.slice(0,-1).map(n=>"name"in n?e.jsx("a",{href:`?id=${n.id}`,children:n.name},`?id=${n.id}`):n.map(t=>"name"in t?e.jsx("a",{href:`?id=${t.id}`,children:t.name},`?id=${t.id}`):t.map(d=>e.jsx("a",{href:`?id=${d.id}`,children:d.name},`?id=${d.id}`)))),e.jsx("span",{"aria-current":"page",children:r.name})]})},u=()=>e.jsx(i,{children:["Page 1","Current Page"]});var I,x,g;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Breadcrumbs>
    <a href="#/url1">Item 1</a>
    <a href="#/url2">Item 2</a>
    <a href="#/url3">Item 3</a>
  </Breadcrumbs>`,...(g=(x=c.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,j,$;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const breadcrumbs = [{
    id: 1,
    name: 'Item 1'
  }, {
    id: 2,
    name: 'Item 2'
  }, {
    id: 3,
    name: 'Item 3'
  }, {
    id: 4,
    name: 'Item 4'
  }];
  return <Breadcrumbs>
      {breadcrumbs.slice(0, -1).map(collection => <a href={\`?id=\${collection.id}\`} key={\`?id=\${collection.id}\`}>
          {collection.name}
        </a>)}
      <span aria-current="page">{breadcrumbs.at(-1)!.name}</span>
    </Breadcrumbs>;
}`,...($=(j=l.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var B,N,E;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const breadcrumbs = [{
    id: 1,
    name: 'Item 1'
  }, {
    id: 2,
    name: 'Item 2'
  }, {
    id: 3,
    name: 'Item 3'
  }, {
    id: 4,
    name: 'Item 4'
  }, [{
    id: 5,
    name: 'Item 5'
  }, {
    id: 6,
    name: 'Item 6'
  }, [{
    id: 7,
    name: 'Item 7'
  }, {
    id: 8,
    name: 'Item 8'
  }]], {
    id: 0,
    name: 'Item 9'
  }];
  const lastItem = (breadcrumbs.at(-1) as BreadcrumbsLink);
  return <Breadcrumbs>
      {breadcrumbs.slice(0, -1).map((collection: BreadcrumbsLink | Array<BreadcrumbsLink | BreadcrumbsLink[]>) => {
      if ('name' in collection) {
        return <a href={\`?id=\${collection.id}\`} key={\`?id=\${collection.id}\`}>
              {collection.name}
            </a>;
      }
      return collection.map(coll => {
        if ('name' in coll) {
          return <a href={\`?id=\${coll.id}\`} key={\`?id=\${coll.id}\`}>
                {coll.name}
              </a>;
        }
        return coll.map(c => <a href={\`?id=\${c.id}\`} key={\`?id=\${c.id}\`}>
              {c.name}
            </a>);
      });
    })}
      <span aria-current="page">{lastItem.name}</span>
    </Breadcrumbs>;
}`,...(E=(N=o.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var L,C,S;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:"() => <Breadcrumbs>{['Page 1', 'Current Page']}</Breadcrumbs>",...(S=(C=u.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const R=["BasicExample","ExampleWithArray","ExampleWithNestedArrays","ExampleWithStringArray"];export{c as BasicExample,l as ExampleWithArray,o as ExampleWithNestedArrays,u as ExampleWithStringArray,R as __namedExportsOrder,M as default};
