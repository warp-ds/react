import{w as t,j as e}from"./index-DYPmeQGl.js";import{i as W}from"./index-C6dB-k_R.js";import{r as b}from"./index-DhxRKCbo.js";import{a as O}from"./i18n-BJez-btc.js";function v(r,n){return r.flatMap(a=>[a,n]).slice(0,-1)}const J=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),P=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),w=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),D=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),Y=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}');O(P,D,w,J,Y);const u=r=>{const{children:n,className:a,...m}=r,i=r["aria-label"]||W._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screenreader message for the breadcrumb component"}),h=n.flat(Number.POSITIVE_INFINITY),A=h.map((s,p)=>{if(b.isValidElement(s)){const I=s.type==="a"?t.link:t.text,k=s.props.className?`${s.props.className} ${I}`:I;return b.cloneElement(s,{className:k})}const C=p===h.length-1;return e.jsx("span",{className:t.text,"aria-current":C?"page":void 0,children:s})});return e.jsxs("nav",{className:a,"aria-labelledby":"breadCrumbLabel",...m,children:[e.jsx("h2",{id:"breadCrumbLabel",className:t.a11y,children:i}),e.jsx("div",{className:t.wrapper,children:v(A,e.jsx("span",{className:t.separator,children:"/"})).map((s,p)=>e.jsx(b.Fragment,{children:s},p))})]})};u.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs"};const R={title:"Navigation/Breadcrumbs"},d=()=>e.jsxs(u,{children:[e.jsx("a",{href:"#/url1",children:"Item 1"}),e.jsx("a",{href:"#/url2",children:"Item 2"}),e.jsx("a",{href:"#/url3",children:"Item 3"})]}),c=()=>{var n;const r=[{id:1,name:"Item 1"},{id:2,name:"Item 2"},{id:3,name:"Item 3"},{id:4,name:"Item 4"}];return e.jsxs(u,{children:[r.slice(0,-1).map(a=>e.jsx("a",{href:`?id=${a.id}`,children:a.name},`?id=${a.id}`)),e.jsx("span",{"aria-current":"page",children:(n=r.at(-1))==null?void 0:n.name})]})},l=()=>{const r=[{id:1,name:"Item 1"},{id:2,name:"Item 2"},{id:3,name:"Item 3"},{id:4,name:"Item 4"},[{id:5,name:"Item 5"},{id:6,name:"Item 6"},[{id:7,name:"Item 7"},{id:8,name:"Item 8"}]],{id:0,name:"Item 9"}],n=r.at(-1);return e.jsxs(u,{children:[r.slice(0,-1).map(a=>"name"in a?e.jsx("a",{href:`?id=${a.id}`,children:a.name},`?id=${a.id}`):a.map(m=>"name"in m?e.jsx("a",{href:`?id=${m.id}`,children:m.name},`?id=${m.id}`):m.map(i=>e.jsx("a",{href:`?id=${i.id}`,children:i.name},`?id=${i.id}`)))),e.jsx("span",{"aria-current":"page",children:n.name})]})},o=()=>e.jsx(u,{children:["Page 1","Current Page"]});d.__docgenInfo={description:"",methods:[],displayName:"BasicExample"};c.__docgenInfo={description:"",methods:[],displayName:"ExampleWithArray"};l.__docgenInfo={description:"",methods:[],displayName:"ExampleWithNestedArrays"};o.__docgenInfo={description:"",methods:[],displayName:"ExampleWithStringArray"};var x,f,g;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Breadcrumbs>
    <a href="#/url1">Item 1</a>
    <a href="#/url2">Item 2</a>
    <a href="#/url3">Item 3</a>
  </Breadcrumbs>`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,N,$;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
      <span aria-current="page">{breadcrumbs.at(-1)?.name}</span>
    </Breadcrumbs>;
}`,...($=(N=c.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var j,E,B;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
}`,...(B=(E=l.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var L,_,S;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:"() => <Breadcrumbs>{['Page 1', 'Current Page']}</Breadcrumbs>",...(S=(_=o.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const q=["BasicExample","ExampleWithArray","ExampleWithNestedArrays","ExampleWithStringArray"];export{d as BasicExample,c as ExampleWithArray,l as ExampleWithNestedArrays,o as ExampleWithStringArray,q as __namedExportsOrder,R as default};
