import{j as e,u as C,v as r}from"./index-IiiVIy1X.js";import{r as g,R as K}from"./index-aXz8NaAs.js";import{r as i}from"./index.m-0-FAh1ao.js";import{i as p}from"./index-uFIVUTCs.js";import{a as U}from"./i18n-A3YjQJqi.js";import{B as G}from"./component-RDt64AFM.js";const A=g.createContext({horizontal:void 0,right:void 0});function l({horizontal:t,right:n,className:s,children:c}){return e.jsx(A.Provider,{value:{horizontal:t,right:n},children:e.jsx("ul",{className:i(s,{[C.steps]:!0,[C.stepsHorizontal]:t}),children:c})})}l.__docgenInfo={description:"",methods:[],displayName:"Steps"};var Q={},Y=Object.defineProperty,_=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,y=(t,n,s)=>n in t?Y(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,te=(t,n)=>{for(var s in n||(n={}))Z.call(n,s)&&y(t,s,n[s]);if(_)for(var s of _(n))ee.call(n,s)&&y(t,s,n[s]);return t},ne=JSON.parse('{"icon.title.check":"Sjekkmerke"}'),se=JSON.parse('{"icon.title.check":"Checkmark"}'),re=JSON.parse('{"icon.title.check":"Valintamerkki"}'),T=["en","nb","fi","da","sv"],D="en",ae=()=>{let t;switch(Q.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},X=()=>{var t;const n=(t=document==null?void 0:document.location)==null?void 0:t.hostname;return n.includes("finn")?"nb":n.includes("tori")?"fi":n.includes("blocket")?"sv":n.includes("dba")?"da":D},j=t=>T.find(n=>t===n||t.toLowerCase().includes(n))||X();function oe(){var t;if(typeof window>"u"){const n=ae();return j(n)}try{const n=(t=document==null?void 0:document.documentElement)==null?void 0:t.lang,s=X();return T.includes(n)?j(n??s):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),j(s))}catch(n){return console.warn("could not detect locale, falling back to source locale",n),D}}var ce=(t,n,s,c)=>t==="nb"?s:t==="fi"?c:n,ie=(t,n,s)=>{const c=oe(),v=ce(c,t,n,s);p.load(c,v),p.activate(c)};ie(se,ne,re);var pe=p.t({message:"Checkmark",id:"icon.title.check",comment:"Title for check icon"}),le=t=>K.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${pe}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.83 7.667 7.163 11l5.334-6"></path>`}},t)),de=le;const me=JSON.parse('{"steps.aria.emptyCircle":"Tom sirkel","steps.aria.active":"Stegindikator aktiv sirkel","steps.aria.completed":"Stegindikator hel sirkel"}'),he=JSON.parse('{"steps.aria.emptyCircle":"Empty circle","steps.aria.active":"Step indicator active circle","steps.aria.completed":"Step indicator completed circle"}'),ue=JSON.parse('{"steps.aria.emptyCircle":"Tyhjä ympyrä","steps.aria.active":"Vaiheilmaisin aktiivinen ympyrä","steps.aria.completed":"Vaiheilmaisin valmis ympyrä"}'),f={completed:p._({id:"steps.aria.completed",message:"Step indicator completed circle",comment:"Completed circle"}),active:p._({id:"steps.aria.active",message:"Step indicator active circle",comment:"Active circle"}),default:p._({id:"steps.aria.emptyCircle",message:"Empty circle",comment:"Empty circle"})},Se=t=>{const n=Object.keys(f).find(s=>t[s]);return n?f[n]:f.default};function a(t){U(he,me,ue);const{active:n,completed:s,children:c}=t,v=g.useContext(A),o=!v.horizontal,x=!v.right,$=i({[r.stepVertical]:o,[r.stepVerticalLeft]:o&&x,[r.stepVerticalRight]:o&&!x,[r.stepHorizontal]:!o}),M=i({[r.stepLine]:!0,[r.stepLineHorizontalLeft]:!0,[r.stepLineHorizontal]:!o,[r.stepLineIncomplete]:!n&&!s,[r.stepLineComplete]:n||s}),q=i({[r.stepDot]:!0,[r.stepDotVerticalRight]:o&&!x,[r.stepDotHorizontal]:!o,[r.stepDotIncomplete]:!(n||s),[r.stepDotActive]:n||s}),W=i({[r.stepLine]:!0,[r.stepLineHorizontalRight]:!0,[r.stepLineVertical]:o,[r.stepLineVerticalRight]:o&&!x,[r.stepLineHorizontal]:!o,[r.stepLineIncomplete]:!s,[r.stepLineComplete]:s}),F=i({[r.content]:!0,[r.contentVertical]:o,[r.contentHorizontal]:!o});return e.jsxs("li",{className:$,children:[!o&&e.jsx("div",{className:M}),e.jsx("div",{className:q,role:"img","aria-label":Se(t),...n&&{"aria-current":"step"},children:s&&e.jsx(de,{})}),e.jsx("div",{className:W}),e.jsx("div",{className:F,children:c})]})}a.__docgenInfo={description:"",methods:[],displayName:"Step",props:{active:{required:!1,tsType:{name:"boolean"},description:`Step is active
@default false`},completed:{required:!1,tsType:{name:"boolean"},description:`Step is completed
@default false`},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"Contents of Step"}}};const _e={title:"Navigation/Steps"},d=()=>e.jsxs(l,{children:[e.jsxs(a,{children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),m=()=>e.jsxs(l,{children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),h=()=>e.jsxs(l,{right:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),u=()=>e.jsxs(l,{horizontal:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),S=()=>{const[t,n]=g.useState(0),s=()=>n(t===4?0:c=>c+1);return e.jsxs(e.Fragment,{children:[e.jsx(G,{onClick:s,small:!0,children:"Complete a step"}),e.jsxs(l,{className:"mt-20",children:[e.jsxs(a,{active:t===0,completed:t>0,children:[e.jsx("h4",{className:"mt-0",children:"Step one"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===1,completed:t>1,children:[e.jsx("h4",{className:"mt-0",children:"Step two"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===2,completed:t>2,children:[e.jsx("h4",{className:"mt-0",children:"Step three"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===3,completed:t>3,children:[e.jsx("h4",{className:"mt-0",children:"Step four"}),e.jsx("p",{children:"Some content"})]})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Vertical"};m.__docgenInfo={description:"",methods:[],displayName:"WithProgress"};h.__docgenInfo={description:"",methods:[],displayName:"RightAligned"};u.__docgenInfo={description:"",methods:[],displayName:"Horizontal"};S.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var k,N,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Steps>
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
    </Steps>;
}`,...(w=(N=d.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var L,I,b;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Steps>
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
    </Steps>;
}`,...(b=(I=m.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var O,E,z;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Steps right>
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
    </Steps>;
}`,...(z=(E=h.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var H,V,P;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Steps horizontal>
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
    </Steps>;
}`,...(P=(V=u.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var R,B,J;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(J=(B=S.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};const ye=["Vertical","WithProgress","RightAligned","Horizontal","Interactive"];export{u as Horizontal,S as Interactive,h as RightAligned,d as Vertical,m as WithProgress,ye as __namedExportsOrder,_e as default};
