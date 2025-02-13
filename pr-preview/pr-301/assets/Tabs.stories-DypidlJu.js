import{j as e}from"./index-DSOYRR-y.js";import{b as n}from"./index-C1O304-5.js";import{T as l,a,b as s}from"./component-tabs-CEajmaHx.js";import"./index-RYns6xqu.js";import"./index-C6dB-k_R.js";import"./index.m-CtIADANO.js";const E={title:"Navigation/Tabs"},o=()=>e.jsxs(l,{onChange:D=>console.log(D),children:[e.jsx(a,{label:"Tab 1",name:"one"}),!1,e.jsx(a,{label:"Tab 3",name:"three",isActive:!0})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(a,{label:"Tab 1",name:"one"}),e.jsx(a,{label:"Tab 2",name:"two"}),e.jsx(a,{label:"Tab 3",name:"three"})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(s,{name:"one",children:"Tab one selected!"}),e.jsx(s,{name:"two",children:"Tab two selected!"}),e.jsx(s,{name:"three",children:"Tab three selected!"})]})]}),r=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(a,{label:"Tab 1",name:"one"}),e.jsx(a,{label:"Tab 2 (www.finn.no)",name:"two",onClick:()=>alert("opened tab 2")}),e.jsx(a,{label:"Tab 3 (www.schibsted.com without panel)",name:"three",onClick:()=>alert("opened tab 3")})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(s,{name:"one",children:"Tab one selected!"}),e.jsx(s,{name:"two",children:"Tab two selected!"})]})]}),t=()=>e.jsxs(l,{children:[e.jsx(a,{label:"Tab 1",name:"one",isActive:!0,children:e.jsx(n,{})}),e.jsx(a,{label:"Tab 2",name:"two",children:e.jsx(n,{})}),e.jsx(a,{label:"Tab 3",name:"three",children:e.jsx(n,{})}),e.jsx(a,{label:"Tab 4",name:"four",children:e.jsx(n,{})})]}),c=()=>e.jsxs(l,{children:[e.jsx(a,{label:"Tab 1",name:"one",over:!0,isActive:!0,children:e.jsx(n,{})}),e.jsx(a,{label:"Tab 2",name:"two",over:!0,children:e.jsx(n,{})}),e.jsx(a,{label:"Tab 3",name:"three",over:!0,children:e.jsx(n,{})}),e.jsx(a,{label:"Tab 4",name:"four",over:!0,children:e.jsx(n,{})})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(a,{label:"Tab 1",name:"one",isActive:!0,children:e.jsx(n,{})}),e.jsx(a,{label:"Tab 2",name:"two",children:e.jsx(n,{})}),e.jsx(a,{label:"Tab 3",name:"three",children:e.jsx(n,{})}),e.jsx(a,{label:"Tab 4",name:"four",children:e.jsx(n,{})})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(s,{name:"one",children:"Tab one selected!"}),e.jsx(s,{name:"two",children:"Tab two selected!"}),e.jsx(s,{name:"three",children:"Tab three selected!"}),e.jsx(s,{name:"four",children:"Tab four selected!"})]})]});o.__docgenInfo={description:"",methods:[],displayName:"Default"};b.__docgenInfo={description:"",methods:[],displayName:"DefaultWithPanel"};r.__docgenInfo={description:"",methods:[],displayName:"DefaultWithOnClickAction"};t.__docgenInfo={description:"",methods:[],displayName:"Icon"};c.__docgenInfo={description:"",methods:[],displayName:"IconOvertop"};T.__docgenInfo={description:"",methods:[],displayName:"IconWithPanel"};var m,i,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Tabs onChange={e => console.log(e)}>
    <Tab label="Tab 1" name="one" />
    {false && <Tab label="Tab 2" name="two" />}
    <Tab label="Tab 3" name="three" isActive />
  </Tabs>`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var h,u,x;b.parameters={...b.parameters,docs:{...(h=b.parameters)==null?void 0:h.docs,source:{originalSource:`() => <>
    <Tabs>
      <Tab label="Tab 1" name="one" />
      <Tab label="Tab 2" name="two" />
      <Tab label="Tab 3" name="three" />
    </Tabs>
    <div className="mb-16">
      <TabPanel name="one">Tab one selected!</TabPanel>
      <TabPanel name="two">Tab two selected!</TabPanel>
      <TabPanel name="three">Tab three selected!</TabPanel>
    </div>
  </>`,...(x=(u=b.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var j,p,P;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`() => <>
    <Tabs>
      <Tab label="Tab 1" name="one" />
      <Tab label="Tab 2 (www.finn.no)" name="two" onClick={() => alert('opened tab 2')} />
      <Tab label="Tab 3 (www.schibsted.com without panel)" name="three" onClick={() => alert('opened tab 3')} />
    </Tabs>
    <div className="mb-16">
      <TabPanel name="one">Tab one selected!</TabPanel>
      <TabPanel name="two">Tab two selected!</TabPanel>
    </div>
  </>`,...(P=(p=r.parameters)==null?void 0:p.docs)==null?void 0:P.source}}};var w,f,v;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Tabs>
    <Tab label="Tab 1" name="one" isActive>
      <IconPlus16 />
    </Tab>
    <Tab label="Tab 2" name="two">
      <IconPlus16 />
    </Tab>
    <Tab label="Tab 3" name="three">
      <IconPlus16 />
    </Tab>
    <Tab label="Tab 4" name="four">
      <IconPlus16 />
    </Tab>
  </Tabs>`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var I,g,_;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Tabs>
    <Tab label="Tab 1" name="one" over isActive>
      <IconPlus16 />
    </Tab>
    <Tab label="Tab 2" name="two" over>
      <IconPlus16 />
    </Tab>
    <Tab label="Tab 3" name="three" over>
      <IconPlus16 />
    </Tab>
    <Tab label="Tab 4" name="four" over>
      <IconPlus16 />
    </Tab>
  </Tabs>`,...(_=(g=c.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var N,A,C;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`() => <>
    <Tabs>
      <Tab label="Tab 1" name="one" isActive>
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 2" name="two">
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 3" name="three">
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 4" name="four">
        <IconPlus16 />
      </Tab>
    </Tabs>
    <div className="mb-16">
      <TabPanel name="one">Tab one selected!</TabPanel>
      <TabPanel name="two">Tab two selected!</TabPanel>
      <TabPanel name="three">Tab three selected!</TabPanel>
      <TabPanel name="four">Tab four selected!</TabPanel>
    </div>
  </>`,...(C=(A=T.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const R=["Default","DefaultWithPanel","DefaultWithOnClickAction","Icon","IconOvertop","IconWithPanel"];export{o as Default,r as DefaultWithOnClickAction,b as DefaultWithPanel,t as Icon,c as IconOvertop,T as IconWithPanel,R as __namedExportsOrder,E as default};
