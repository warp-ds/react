import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as g,R as K}from"./index-uubelm5h.js";import{B as U}from"./component-C4X8oE4j.js";import{r as c}from"./index.m-CtIADANO.js";import{x as C,y as r}from"./index-3IeVCiwq.js";import{i as p}from"./index-1YnX0IqW.js";import{a as G}from"./i18n-CHMFe01U.js";const B=g.createContext({horizontal:void 0,right:void 0});function l({horizontal:t,right:n,className:s,children:i}){return e.jsx(B.Provider,{value:{horizontal:t,right:n},children:e.jsx("ul",{className:c(s,{[C.steps]:!0,[C.stepsHorizontal]:t}),children:i})})}l.__docgenInfo={description:"",methods:[],displayName:"Steps"};var Q={},Y=Object.defineProperty,k=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,_=(t,n,s)=>n in t?Y(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,te=(t,n)=>{for(var s in n||(n={}))Z.call(n,s)&&_(t,s,n[s]);if(k)for(var s of k(n))ee.call(n,s)&&_(t,s,n[s]);return t},ne=JSON.parse('{"icon.title.check":"Sjekkmerke"}'),se=JSON.parse('{"icon.title.check":"Checkmark"}'),re=JSON.parse('{"icon.title.check":"Valintamerkki"}'),A=["en","nb","fi","da","sv"],D="en",ae=()=>{let t;switch(Q.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},$=()=>{var t;const n=(t=document==null?void 0:document.location)==null?void 0:t.hostname;return n.includes("finn")?"nb":n.includes("tori")?"fi":n.includes("blocket")?"sv":n.includes("dba")?"da":D},f=t=>A.find(n=>t===n||t.toLowerCase().includes(n))||$();function oe(){var t;if(typeof window>"u"){const n=ae();return f(n)}try{const n=(t=document==null?void 0:document.documentElement)==null?void 0:t.lang,s=$();return A.includes(n)?f(n??s):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),f(s))}catch(n){return console.warn("could not detect locale, falling back to source locale",n),D}}var ie=(t,n,s,i)=>t==="nb"?s:t==="fi"?i:n,ce=(t,n,s)=>{const i=oe(),v=ie(i,t,n,s);p.load(i,v),p.activate(i)};ce(se,ne,re);var pe=p.t({message:"Checkmark",id:"icon.title.check",comment:"Title for check icon"}),le=t=>K.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${pe}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.83 7.667 7.163 11l5.334-6"></path>`}},t)),de=le;const me=JSON.parse('{"steps.aria.emptyCircle":"Tom cirkel","steps.aria.active":"Trinindikator aktiv cirkel","steps.aria.completed":"Trinindikator fuldført cirkel"}'),he=JSON.parse('{"steps.aria.emptyCircle":"Empty circle","steps.aria.active":"Step indicator active circle","steps.aria.completed":"Step indicator completed circle"}'),Se=JSON.parse('{"steps.aria.emptyCircle":"Tyhjä ympyrä","steps.aria.active":"Vaiheilmaisin aktiivinen ympyrä","steps.aria.completed":"Vaiheilmaisin valmis ympyrä"}'),ue=JSON.parse('{"steps.aria.emptyCircle":"Tom sirkel","steps.aria.active":"Stegindikator aktiv sirkel","steps.aria.completed":"Stegindikator hel sirkel"}'),j={completed:p._({id:"steps.aria.completed",message:"Step indicator completed circle",comment:"Completed circle"}),active:p._({id:"steps.aria.active",message:"Step indicator active circle",comment:"Active circle"}),default:p._({id:"steps.aria.emptyCircle",message:"Empty circle",comment:"Empty circle"})},ve=t=>{const n=Object.keys(j).find(s=>t[s]);return n?j[n]:j.default};function a(t){G(he,ue,Se,me);const{active:n,completed:s,children:i}=t,v=g.useContext(B),o=!v.horizontal,x=!v.right,X=c({[r.stepVertical]:o,[r.stepVerticalLeft]:o&&x,[r.stepVerticalRight]:o&&!x,[r.stepHorizontal]:!o}),M=c({[r.stepLine]:!0,[r.stepLineHorizontalLeft]:!0,[r.stepLineHorizontal]:!o,[r.stepLineIncomplete]:!n&&!s,[r.stepLineComplete]:n||s}),q=c({[r.stepDot]:!0,[r.stepDotVerticalRight]:o&&!x,[r.stepDotHorizontal]:!o,[r.stepDotIncomplete]:!(n||s),[r.stepDotActive]:n||s}),W=c({[r.stepLine]:!0,[r.stepLineHorizontalRight]:!0,[r.stepLineVertical]:o,[r.stepLineVerticalRight]:o&&!x,[r.stepLineHorizontal]:!o,[r.stepLineIncomplete]:!s,[r.stepLineComplete]:s}),F=c({[r.content]:!0,[r.contentVertical]:o,[r.contentHorizontal]:!o});return e.jsxs("li",{className:X,children:[!o&&e.jsx("div",{className:M}),e.jsx("div",{className:q,role:"img","aria-label":ve(t),...n&&{"aria-current":"step"},children:s&&e.jsx(de,{"data-testid":"completed-icon"})}),e.jsx("div",{className:W}),e.jsx("div",{className:F,children:i})]})}a.__docgenInfo={description:"",methods:[],displayName:"Step",props:{active:{required:!1,tsType:{name:"boolean"},description:`Step is active
@default false`},completed:{required:!1,tsType:{name:"boolean"},description:`Step is completed
@default false`},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"Contents of Step"}}};const ye={title:"Navigation/Steps"},d=()=>e.jsxs(l,{children:[e.jsxs(a,{children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),m=()=>e.jsxs(l,{children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),h=()=>e.jsxs(l,{right:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),S=()=>e.jsxs(l,{horizontal:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),u=()=>{const[t,n]=g.useState(0),s=()=>n(t===4?0:i=>i+1);return e.jsxs(e.Fragment,{children:[e.jsx(U,{onClick:s,small:!0,children:"Complete a step"}),e.jsxs(l,{className:"mt-20",children:[e.jsxs(a,{active:t===0,completed:t>0,children:[e.jsx("h4",{className:"mt-0",children:"Step one"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===1,completed:t>1,children:[e.jsx("h4",{className:"mt-0",children:"Step two"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===2,completed:t>2,children:[e.jsx("h4",{className:"mt-0",children:"Step three"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===3,completed:t>3,children:[e.jsx("h4",{className:"mt-0",children:"Step four"}),e.jsx("p",{children:"Some content"})]})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Vertical"};m.__docgenInfo={description:"",methods:[],displayName:"WithProgress"};h.__docgenInfo={description:"",methods:[],displayName:"RightAligned"};S.__docgenInfo={description:"",methods:[],displayName:"Horizontal"};u.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var y,N,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Steps>
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
  </Steps>`,...(w=(N=d.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var L,I,b;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`() => <Steps>
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
  </Steps>`,...(b=(I=m.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var O,E,z;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`() => <Steps right>
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
  </Steps>`,...(z=(E=h.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var H,V,P;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`() => <Steps horizontal>
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
  </Steps>`,...(P=(V=S.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var J,R,T;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(T=(R=u.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const Ne=["Vertical","WithProgress","RightAligned","Horizontal","Interactive"];export{S as Horizontal,u as Interactive,h as RightAligned,d as Vertical,m as WithProgress,Ne as __namedExportsOrder,ye as default};
