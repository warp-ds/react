import{j as e,y as C,z as r}from"./index-BUlP55RO.js";import{r as g,R as K}from"./index-RYns6xqu.js";import{B as U}from"./component-Bo96s7jP.js";import{r as c}from"./index.m-CtIADANO.js";import{i as l}from"./index-1YnX0IqW.js";import{a as G}from"./i18n-CHMFe01U.js";const B=g.createContext({horizontal:!1,right:!1});function p({horizontal:t,right:n,children:s}){return e.jsx(B.Provider,{value:{horizontal:t,right:n},children:e.jsx("ul",{className:c([C.wrapper,t&&C.horizontal]),children:s})})}p.__docgenInfo={description:"",methods:[],displayName:"Steps"};var Q={},Y=Object.defineProperty,k=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,_=(t,n,s)=>n in t?Y(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,te=(t,n)=>{for(var s in n||(n={}))Z.call(n,s)&&_(t,s,n[s]);if(k)for(var s of k(n))ee.call(n,s)&&_(t,s,n[s]);return t},ne=JSON.parse('{"icon.title.check":"Sjekkmerke"}'),se=JSON.parse('{"icon.title.check":"Checkmark"}'),re=JSON.parse('{"icon.title.check":"Valintamerkki"}'),V=["en","nb","fi","da","sv"],$="en",ae=()=>{let t;switch(Q.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},X=()=>{var t;const n=(t=document==null?void 0:document.location)==null?void 0:t.hostname;return n.includes("finn")?"nb":n.includes("tori")?"fi":n.includes("blocket")?"sv":n.includes("dba")?"da":$},x=t=>V.find(n=>t===n||t.toLowerCase().includes(n))||X();function oe(){var t;if(typeof window>"u"){const n=ae();return x(n)}try{const n=(t=document==null?void 0:document.documentElement)==null?void 0:t.lang,s=X();return V.includes(n)?x(n??s):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),x(s))}catch(n){return console.warn("could not detect locale, falling back to source locale",n),$}}var ie=(t,n,s,o)=>t==="nb"?s:t==="fi"?o:n,ce=(t,n,s)=>{const o=oe(),v=ie(o,t,n,s);l.load(o,v),l.activate(o)};ce(se,ne,re);var le=l.t({message:"Checkmark",id:"icon.title.check",comment:"Title for check icon"}),pe=t=>K.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${le}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.83 7.667 7.163 11l5.334-6"></path>`}},t)),de=pe;const me=JSON.parse('{"steps.aria.emptyCircle":"Tom cirkel","steps.aria.active":"Trinindikator aktiv cirkel","steps.aria.completed":"Trinindikator fuldført cirkel"}'),he=JSON.parse('{"steps.aria.emptyCircle":"Empty circle","steps.aria.active":"Step indicator active circle","steps.aria.completed":"Step indicator completed circle"}'),Se=JSON.parse('{"steps.aria.emptyCircle":"Tyhjä ympyrä","steps.aria.active":"Vaiheilmaisin aktiivinen ympyrä","steps.aria.completed":"Vaiheilmaisin valmis ympyrä"}'),ue=JSON.parse('{"steps.aria.emptyCircle":"Tom sirkel","steps.aria.active":"Stegindikator aktiv sirkel","steps.aria.completed":"Stegindikator hel sirkel"}'),j={completed:l._({id:"steps.aria.completed",message:"Step indicator completed circle",comment:"Completed circle"}),active:l._({id:"steps.aria.active",message:"Step indicator active circle",comment:"Active circle"}),default:l._({id:"steps.aria.emptyCircle",message:"Empty circle",comment:"Empty circle"})},ve=t=>{const n=Object.keys(j).find(s=>t[s]);return n?j[n]:j.default};function a(t){G(he,ue,Se,me);const{active:n,completed:s,children:o}=t,v=g.useContext(B),i=!v.horizontal,f=!v.right,M=c([r.base,i?r.vertical:r.horizontal,i?f?r.alignLeft:r.alignRight:""]),q=c([r.line,r.lineHorizontal,r.lineHorizontalAlignLeft,n||s?r.lineComplete:r.lineIncomplete]),W=c([r.dot,i?f?"":r.dotAlignRight:r.dotHorizontal,n||s?r.dotActive:r.dotIncomplete]),D=c([r.line,r.lineHorizontalAlignRight,i?r.lineVertical:r.lineHorizontal,i&&!f?r.lineAlignRight:"",s?r.lineComplete:r.lineIncomplete]),F=c([r.content,i?r.contentVertical:r.contentHorizontal]);return e.jsxs("li",{className:M,children:[!i&&e.jsx("div",{className:q}),e.jsx("div",{className:W,role:"img","aria-label":ve(t),...n&&{"aria-current":"step"},children:s&&e.jsx(de,{"data-testid":"completed-icon"})}),e.jsx("div",{className:D}),e.jsx("div",{className:F,children:o})]})}a.__docgenInfo={description:"",methods:[],displayName:"Step",props:{active:{required:!1,tsType:{name:"boolean"},description:`Step is active
@default false`},completed:{required:!1,tsType:{name:"boolean"},description:`Step is completed
@default false`},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"Contents of Step"}}};const _e={title:"Navigation/Steps"},d=()=>e.jsxs(p,{children:[e.jsxs(a,{children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),m=()=>e.jsxs(p,{children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),h=()=>e.jsxs(p,{right:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),S=()=>e.jsxs(p,{horizontal:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),u=()=>{const[t,n]=g.useState(0),s=()=>n(t===4?0:o=>o+1);return e.jsxs(e.Fragment,{children:[e.jsx(U,{onClick:s,small:!0,children:"Complete a step"}),e.jsxs(p,{className:"mt-20",children:[e.jsxs(a,{active:t===0,completed:t>0,children:[e.jsx("h4",{className:"mt-0",children:"Step one"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===1,completed:t>1,children:[e.jsx("h4",{className:"mt-0",children:"Step two"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===2,completed:t>2,children:[e.jsx("h4",{className:"mt-0",children:"Step three"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===3,completed:t>3,children:[e.jsx("h4",{className:"mt-0",children:"Step four"}),e.jsx("p",{children:"Some content"})]})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Vertical"};m.__docgenInfo={description:"",methods:[],displayName:"WithProgress"};h.__docgenInfo={description:"",methods:[],displayName:"RightAligned"};S.__docgenInfo={description:"",methods:[],displayName:"Horizontal"};u.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var y,N,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Steps>
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
  </Steps>`,...(w=(N=d.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var b,I,O;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Steps>
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
  </Steps>`,...(O=(I=m.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var z,E,A;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`() => <Steps right>
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
  </Steps>`,...(A=(E=h.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var L,P,H;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`() => <Steps horizontal>
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
  </Steps>`,...(H=(P=S.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var J,R,T;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(T=(R=u.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const ye=["Vertical","WithProgress","RightAligned","Horizontal","Interactive"];export{S as Horizontal,u as Interactive,h as RightAligned,d as Vertical,m as WithProgress,ye as __namedExportsOrder,_e as default};
