import{j as e}from"./index-DSOYRR-y.js";import{B as c}from"./component-C2cg9OAn.js";import"./index-RYns6xqu.js";import"./index-C6dB-k_R.js";import"./i18n-BJez-btc.js";const k={title:"Navigation/Breadcrumbs"},i=()=>e.jsxs(c,{children:[e.jsx("a",{href:"#/url1",children:"Item 1"}),e.jsx("a",{href:"#/url2",children:"Item 2"}),e.jsx("a",{href:"#/url3",children:"Item 3"})]}),t=()=>{const r=[{id:1,name:"Item 1"},{id:2,name:"Item 2"},{id:3,name:"Item 3"},{id:4,name:"Item 4"}];return e.jsxs(c,{children:[r.slice(0,-1).map(a=>e.jsx("a",{href:`?id=${a.id}`,children:a.name},`?id=${a.id}`)),e.jsx("span",{"aria-current":"page",children:r.at(-1).name})]})},d=()=>{const r=[{id:1,name:"Item 1"},{id:2,name:"Item 2"},{id:3,name:"Item 3"},{id:4,name:"Item 4"},[{id:5,name:"Item 5"},{id:6,name:"Item 6"},[{id:7,name:"Item 7"},{id:8,name:"Item 8"}]],{id:0,name:"Item 9"}],a=r.at(-1);return e.jsxs(c,{children:[r.slice(0,-1).map(n=>"name"in n?e.jsx("a",{href:`?id=${n.id}`,children:n.name},`?id=${n.id}`):n.map(m=>"name"in m?e.jsx("a",{href:`?id=${m.id}`,children:m.name},`?id=${m.id}`):m.map(o=>e.jsx("a",{href:`?id=${o.id}`,children:o.name},`?id=${o.id}`)))),e.jsx("span",{"aria-current":"page",children:a.name})]})},s=()=>e.jsx(c,{children:["Page 1","Current Page"]});i.__docgenInfo={description:"",methods:[],displayName:"BasicExample"};t.__docgenInfo={description:"",methods:[],displayName:"ExampleWithArray"};d.__docgenInfo={description:"",methods:[],displayName:"ExampleWithNestedArrays"};s.__docgenInfo={description:"",methods:[],displayName:"ExampleWithStringArray"};var p,l,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Breadcrumbs>
    <a href="#/url1">Item 1</a>
    <a href="#/url2">Item 2</a>
    <a href="#/url3">Item 3</a>
  </Breadcrumbs>`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,I,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(b=(I=t.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var x,f,g;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,B,$;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"() => <Breadcrumbs>{['Page 1', 'Current Page']}</Breadcrumbs>",...($=(B=s.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const N=["BasicExample","ExampleWithArray","ExampleWithNestedArrays","ExampleWithStringArray"];export{i as BasicExample,t as ExampleWithArray,d as ExampleWithNestedArrays,s as ExampleWithStringArray,N as __namedExportsOrder,k as default};
