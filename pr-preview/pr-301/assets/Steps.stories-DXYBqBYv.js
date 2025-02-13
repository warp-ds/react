import{j as e}from"./index-DSOYRR-y.js";import{r as z}from"./index-RYns6xqu.js";import{B}from"./component-DfcuE9an.js";import{S as a,a as t}from"./step-U_ZgDATq.js";import"./index.m-CtIADANO.js";import"./index-C6dB-k_R.js";import"./i18n-BJez-btc.js";const k={title:"Navigation/Steps"},s=()=>e.jsxs(a,{children:[e.jsxs(t,{children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(t,{children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(t,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),r=()=>e.jsxs(a,{children:[e.jsxs(t,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(t,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(t,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),p=()=>e.jsxs(a,{right:!0,children:[e.jsxs(t,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(t,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(t,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),o=()=>e.jsxs(a,{horizontal:!0,children:[e.jsxs(t,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(t,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(t,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),c=()=>{const[n,h]=z.useState(0),w=()=>h(n===4?0:y=>y+1);return e.jsxs(e.Fragment,{children:[e.jsx(B,{onClick:w,small:!0,children:"Complete a step"}),e.jsxs(a,{className:"mt-20",children:[e.jsxs(t,{active:n===0,completed:n>0,children:[e.jsx("h4",{className:"mt-0",children:"Step one"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(t,{active:n===1,completed:n>1,children:[e.jsx("h4",{className:"mt-0",children:"Step two"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(t,{active:n===2,completed:n>2,children:[e.jsx("h4",{className:"mt-0",children:"Step three"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(t,{active:n===3,completed:n>3,children:[e.jsx("h4",{className:"mt-0",children:"Step four"}),e.jsx("p",{children:"Some content"})]})]})]})};s.__docgenInfo={description:"",methods:[],displayName:"Vertical"};r.__docgenInfo={description:"",methods:[],displayName:"WithProgress"};p.__docgenInfo={description:"",methods:[],displayName:"RightAligned"};o.__docgenInfo={description:"",methods:[],displayName:"Horizontal"};c.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var i,d,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => <Steps>
    <Step>
      <h4>Step one</h4>
      <p>Content</p>
    </Step>
    <Step>
      <h4>Step two</h4>
      <p>Content</p>
    </Step>
    <Step>
      <h4>Step three</h4>
      <p>Content</p>
    </Step>
  </Steps>`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var S,m,x;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`() => <Steps>
    <Step completed>
      <h4>Step one</h4>
      <p>Content</p>
    </Step>
    <Step active>
      <h4>Step two</h4>
      <p>Content</p>
    </Step>
    <Step>
      <h4>Step three</h4>
      <p>Content</p>
    </Step>
  </Steps>`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var j,u,C;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`() => <Steps right>
    <Step completed>
      <h4>Step one</h4>
      <p>Content</p>
    </Step>
    <Step active>
      <h4>Step two</h4>
      <p>Content</p>
    </Step>
    <Step>
      <h4>Step three</h4>
      <p>Content</p>
    </Step>
  </Steps>`,...(C=(u=p.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var g,v,N;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Steps horizontal>
    <Step completed>
      <h4>Step one</h4>
      <p>Content</p>
    </Step>
    <Step active>
      <h4>Step two</h4>
      <p>Content</p>
    </Step>
    <Step>
      <h4>Step three</h4>
      <p>Content</p>
    </Step>
  </Steps>`,...(N=(v=o.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var f,_,I;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [state, setState] = useState(0);
  const handleIncrease = () => {
    if (state === 4) {
      return setState(0);
    }
    return setState(state => state + 1);
  };
  return <>
      <Button onClick={handleIncrease} small>
        Complete a step
      </Button>

      <Steps className="mt-20">
        <Step active={state === 0} completed={state > 0}>
          <h4 className="mt-0">Step one</h4>
          <p>Some content</p>
        </Step>
        <Step active={state === 1} completed={state > 1}>
          <h4 className="mt-0">Step two</h4>
          <p>Some content</p>
        </Step>
        <Step active={state === 2} completed={state > 2}>
          <h4 className="mt-0">Step three</h4>
          <p>Some content</p>
        </Step>
        <Step active={state === 3} completed={state > 3}>
          <h4 className="mt-0">Step four</h4>
          <p>Some content</p>
        </Step>
      </Steps>
    </>;
}`,...(I=(_=c.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};const F=["Vertical","WithProgress","RightAligned","Horizontal","Interactive"];export{o as Horizontal,c as Interactive,p as RightAligned,s as Vertical,r as WithProgress,F as __namedExportsOrder,k as default};
