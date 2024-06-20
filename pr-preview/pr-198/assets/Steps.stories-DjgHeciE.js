import{j as e,u as C,v as r}from"./index-lTKFmHqk.js";import{r as g,R as U}from"./index-CBqU2yxZ.js";import{B as G}from"./component-De1urD0t.js";import{r as l}from"./index.m-CtIADANO.js";import{i as p}from"./index-ClUvnnK6.js";import{a as Q}from"./i18n-BdZ5C-JL.js";import"./_commonjsHelpers-BosuxZz1.js";const D=g.createContext({horizontal:void 0,right:void 0});function i({horizontal:t,right:n,className:s,children:c}){return e.jsx(D.Provider,{value:{horizontal:t,right:n},children:e.jsx("ul",{className:l(s,{[C.steps]:!0,[C.stepsHorizontal]:t}),children:c})})}try{i.displayName="Steps",i.__docgenInfo={description:"",displayName:"Steps",props:{horizontal:{defaultValue:{value:"false"},description:"Direction of steps",name:"horizontal",required:!1,type:{name:"boolean"}},right:{defaultValue:{value:"false"},description:"Align steps to the right",name:"right",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Two or more `Step` components",name:"children",required:!0,type:{name:"Element[]"}},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",required:!1,type:{name:"string"}}}}}catch{}var X={},Y=Object.defineProperty,_=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,y=(t,n,s)=>n in t?Y(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,te=(t,n)=>{for(var s in n||(n={}))Z.call(n,s)&&y(t,s,n[s]);if(_)for(var s of _(n))ee.call(n,s)&&y(t,s,n[s]);return t},ne=JSON.parse('{"icon.title.check":"Sjekkmerke"}'),se=JSON.parse('{"icon.title.check":"Checkmark"}'),re=JSON.parse('{"icon.title.check":"Valintamerkki"}'),q=["en","nb","fi","da","sv"],T="en",ae=()=>{let t;switch(X.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},J=()=>{var t;const n=(t=document==null?void 0:document.location)==null?void 0:t.hostname;return n.includes("finn")?"nb":n.includes("tori")?"fi":n.includes("blocket")?"sv":n.includes("dba")?"da":T},x=t=>q.find(n=>t===n||t.toLowerCase().includes(n))||J();function oe(){var t;if(typeof window>"u"){const n=ae();return x(n)}try{const n=(t=document==null?void 0:document.documentElement)==null?void 0:t.lang,s=J();return q.includes(n)?x(n??s):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),x(s))}catch(n){return console.warn("could not detect locale, falling back to source locale",n),T}}var ce=(t,n,s,c)=>t==="nb"?s:t==="fi"?c:n,ie=(t,n,s)=>{const c=oe(),d=ce(c,t,n,s);p.load(c,d),p.activate(c)};ie(se,ne,re);var le=p.t({message:"Checkmark",id:"icon.title.check",comment:"Title for check icon"}),pe=t=>U.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${le}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.83 7.667 7.163 11l5.334-6"></path>`}},t)),de=pe;const me=JSON.parse('{"steps.aria.emptyCircle":"Empty circle","steps.aria.active":"Step indicator active circle","steps.aria.completed":"Step indicator completed circle"}'),he=JSON.parse('{"steps.aria.emptyCircle":"Tyhjä ympyrä","steps.aria.active":"Vaiheilmaisin aktiivinen ympyrä","steps.aria.completed":"Vaiheilmaisin valmis ympyrä"}'),ue=JSON.parse('{"steps.aria.emptyCircle":"Tom sirkel","steps.aria.active":"Stegindikator aktiv sirkel","steps.aria.completed":"Stegindikator hel sirkel"}'),j={completed:p._({id:"steps.aria.completed",message:"Step indicator completed circle",comment:"Completed circle"}),active:p._({id:"steps.aria.active",message:"Step indicator active circle",comment:"Active circle"}),default:p._({id:"steps.aria.emptyCircle",message:"Empty circle",comment:"Empty circle"})},Se=t=>{const n=Object.keys(j).find(s=>t[s]);return n?j[n]:j.default};function a(t){Q(me,ue,he);const{active:n,completed:s,children:c}=t,d=g.useContext(D),o=!d.horizontal,m=!d.right,$=l({[r.stepVertical]:o,[r.stepVerticalLeft]:o&&m,[r.stepVerticalRight]:o&&!m,[r.stepHorizontal]:!o}),M=l({[r.stepLine]:!0,[r.stepLineHorizontalLeft]:!0,[r.stepLineHorizontal]:!o,[r.stepLineIncomplete]:!n&&!s,[r.stepLineComplete]:n||s}),F=l({[r.stepDot]:!0,[r.stepDotVerticalRight]:o&&!m,[r.stepDotHorizontal]:!o,[r.stepDotIncomplete]:!(n||s),[r.stepDotActive]:n||s}),W=l({[r.stepLine]:!0,[r.stepLineHorizontalRight]:!0,[r.stepLineVertical]:o,[r.stepLineVerticalRight]:o&&!m,[r.stepLineHorizontal]:!o,[r.stepLineIncomplete]:!s,[r.stepLineComplete]:s}),K=l({[r.content]:!0,[r.contentVertical]:o,[r.contentHorizontal]:!o});return e.jsxs("li",{className:$,children:[!o&&e.jsx("div",{className:M}),e.jsx("div",{className:F,role:"img","aria-label":Se(t),...n&&{"aria-current":"step"},children:s&&e.jsx(de,{"data-testid":"completed-icon"})}),e.jsx("div",{className:W}),e.jsx("div",{className:K,children:c})]})}try{a.displayName="Step",a.__docgenInfo={description:"",displayName:"Step",props:{active:{defaultValue:{value:"false"},description:"Step is active",name:"active",required:!1,type:{name:"boolean"}},completed:{defaultValue:{value:"false"},description:"Step is completed",name:"completed",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Contents of Step",name:"children",required:!0,type:{name:"Element | Element[]"}}}}}catch{}const ye={title:"Navigation/Steps"},h=()=>e.jsxs(i,{children:[e.jsxs(a,{children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),u=()=>e.jsxs(i,{children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),S=()=>e.jsxs(i,{right:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),v=()=>e.jsxs(i,{horizontal:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),f=()=>{const[t,n]=g.useState(0),s=()=>n(t===4?0:c=>c+1);return e.jsxs(e.Fragment,{children:[e.jsx(G,{onClick:s,small:!0,children:"Complete a step"}),e.jsxs(i,{className:"mt-20",children:[e.jsxs(a,{active:t===0,completed:t>0,children:[e.jsx("h4",{className:"mt-0",children:"Step one"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===1,completed:t>1,children:[e.jsx("h4",{className:"mt-0",children:"Step two"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===2,completed:t>2,children:[e.jsx("h4",{className:"mt-0",children:"Step three"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===3,completed:t>3,children:[e.jsx("h4",{className:"mt-0",children:"Step four"}),e.jsx("p",{children:"Some content"})]})]})]})};var k,N,w;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Steps>
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
  </Steps>`,...(w=(N=h.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var L,b,V;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`() => <Steps>
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
  </Steps>`,...(V=(b=u.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var I,O,z;S.parameters={...S.parameters,docs:{...(I=S.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Steps right>
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
  </Steps>`,...(z=(O=S.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var E,H,P;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`() => <Steps horizontal>
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
  </Steps>`,...(P=(H=v.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var B,R,A;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(A=(R=f.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const ke=["Vertical","WithProgress","RightAligned","Horizontal","Interactive"];export{v as Horizontal,f as Interactive,S as RightAligned,h as Vertical,u as WithProgress,ke as __namedExportsOrder,ye as default};
