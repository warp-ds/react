import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as j,R as K}from"./index-DJO9vBfz.js";import{B as U}from"./component-rddx2R2m.js";import{r as l}from"./index.m-CtIADANO.js";import{x as C,y as r}from"./index-Cz-jOo8O.js";import{i as p}from"./index-C6dB-k_R.js";import{a as G}from"./i18n-BJez-btc.js";const R=j.createContext({horizontal:!1,right:!1});function d({horizontal:n,right:t,className:s,children:o}){return e.jsx(R.Provider,{value:{horizontal:n,right:t},children:e.jsx("ul",{className:l(s,[C.wrapper,n&&C.horizontal]),children:o})})}d.__docgenInfo={description:"",methods:[],displayName:"Steps"};var Q={},Y=Object.defineProperty,k=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,_=(n,t,s)=>t in n?Y(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,te=(n,t)=>{for(var s in t||(t={}))Z.call(t,s)&&_(n,s,t[s]);if(k)for(var s of k(t))ee.call(t,s)&&_(n,s,t[s]);return n},ne=JSON.parse('{"icon.title.check":["Sjekkmerke"]}'),se=JSON.parse('{"icon.title.check":["Checkmark"]}'),re=JSON.parse('{"icon.title.check":["Valintamerkki"]}'),ae=JSON.parse('{"icon.title.check":["Flueben"]}'),ie=JSON.parse('{"icon.title.check":["Bock"]}'),V=["en","nb","fi","da","sv"],$="en",oe=()=>{var n;let t;switch((n=process==null?void 0:Q)==null?void 0:n.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},X=()=>{var n;const t=(n=document==null?void 0:document.location)==null?void 0:n.hostname;return t!=null&&t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":$},g=n=>V.find(t=>n===t||n.toLowerCase().includes(t))||X();function ce(){var n;if(typeof window>"u"){const t=oe();return g(t)}try{const t=(n=document==null?void 0:document.documentElement)==null?void 0:n.lang,s=X();return V.includes(t)?g(t??s):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),g(s))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),$}}var le=(n,t,s,o,c,i)=>n==="nb"?s:n==="fi"?o:n==="da"?c:n==="sv"?i:t,pe=(n,t,s,o,c)=>{const i=ce(),m=le(i,n,t,s,o,c);p.load(i,m),p.activate(i)};pe(se,ne,re,ae,ie);var de=p.t({message:"Checkmark",id:"icon.title.check",comment:"Title for check icon"}),me=n=>K.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${de}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.83 7.667 7.163 11l5.334-6"></path>`}},n)),he=me;const Se=JSON.parse('{"steps.aria.emptyCircle":["Tom cirkel"],"steps.aria.active":["Trinindikator aktiv cirkel"],"steps.aria.completed":["Trinindikator fuldført cirkel"]}'),ue=JSON.parse('{"steps.aria.emptyCircle":["Empty circle"],"steps.aria.active":["Step indicator active circle"],"steps.aria.completed":["Step indicator completed circle"]}'),ve=JSON.parse('{"steps.aria.emptyCircle":["Tyhjä ympyrä"],"steps.aria.active":["Vaiheilmaisin aktiivinen ympyrä"],"steps.aria.completed":["Vaiheilmaisin valmis ympyrä"]}'),fe=JSON.parse('{"steps.aria.emptyCircle":["Tom sirkel"],"steps.aria.active":["Stegindikator aktiv sirkel"],"steps.aria.completed":["Stegindikator hel sirkel"]}'),ge=JSON.parse('{"steps.aria.emptyCircle":["Tom cirkel"],"steps.aria.active":["Stegindikator aktiv cirkel"],"steps.aria.completed":["Stegindikator fulländad cirkel"]}'),x={completed:p._({id:"steps.aria.completed",message:"Step indicator completed circle",comment:"Completed circle"}),active:p._({id:"steps.aria.active",message:"Step indicator active circle",comment:"Active circle"}),default:p._({id:"steps.aria.emptyCircle",message:"Empty circle",comment:"Empty circle"})},xe=n=>{const t=Object.keys(x).find(s=>n[s]);return t?x[t]:x.default};function a(n){G(ue,fe,ve,Se,ge);const{active:t,completed:s,children:o}=n,c=j.useContext(R),i=!c.horizontal,m=!c.right,M=l([r.base,i?r.vertical:r.horizontal,i?m?r.alignLeft:r.alignRight:""]),q=l([r.line,r.lineHorizontal,r.lineHorizontalAlignLeft,t||s?r.lineComplete:r.lineIncomplete]),F=l([r.dot,i?m?"":r.dotAlignRight:r.dotHorizontal,t||s?r.dotActive:r.dotIncomplete]),W=l([r.line,r.lineHorizontalAlignRight,i?r.lineVertical:r.lineHorizontal,i&&!m?r.lineAlignRight:"",s?r.lineComplete:r.lineIncomplete]),D=l([r.content,i?r.contentVertical:r.contentHorizontal]);return e.jsxs("li",{className:M,children:[!i&&e.jsx("div",{className:q}),e.jsx("div",{className:F,role:"img","aria-label":xe(n),...t&&{"aria-current":"step"},children:s&&e.jsx(he,{"data-testid":"completed-icon"})}),e.jsx("div",{className:W}),e.jsx("div",{className:D,children:o})]})}a.__docgenInfo={description:"",methods:[],displayName:"Step",props:{active:{required:!1,tsType:{name:"boolean"},description:`Step is active
@default false`},completed:{required:!1,tsType:{name:"boolean"},description:`Step is completed
@default false`},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"Contents of Step"}}};const be={title:"Navigation/Steps"},h=()=>e.jsxs(d,{children:[e.jsxs(a,{children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),S=()=>e.jsxs(d,{children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),u=()=>e.jsxs(d,{right:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),v=()=>e.jsxs(d,{horizontal:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),f=()=>{const[n,t]=j.useState(0),s=()=>t(n===4?0:o=>o+1);return e.jsxs(e.Fragment,{children:[e.jsx(U,{onClick:s,small:!0,children:"Complete a step"}),e.jsxs(d,{className:"mt-20",children:[e.jsxs(a,{active:n===0,completed:n>0,children:[e.jsx("h4",{className:"mt-0",children:"Step one"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:n===1,completed:n>1,children:[e.jsx("h4",{className:"mt-0",children:"Step two"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:n===2,completed:n>2,children:[e.jsx("h4",{className:"mt-0",children:"Step three"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:n===3,completed:n>3,children:[e.jsx("h4",{className:"mt-0",children:"Step four"}),e.jsx("p",{children:"Some content"})]})]})]})};h.__docgenInfo={description:"",methods:[],displayName:"Vertical"};S.__docgenInfo={description:"",methods:[],displayName:"WithProgress"};u.__docgenInfo={description:"",methods:[],displayName:"RightAligned"};v.__docgenInfo={description:"",methods:[],displayName:"Horizontal"};f.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var y,N,w;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Steps>
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
  </Steps>`,...(w=(N=h.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var b,I,O;S.parameters={...S.parameters,docs:{...(b=S.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Steps>
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
  </Steps>`,...(O=(I=S.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var E,z,J;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`() => <Steps right>
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
  </Steps>`,...(J=(z=u.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var A,L,P;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`() => <Steps horizontal>
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
  </Steps>`,...(P=(L=v.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var T,B,H;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(H=(B=f.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const Ie=["Vertical","WithProgress","RightAligned","Horizontal","Interactive"];export{v as Horizontal,f as Interactive,u as RightAligned,h as Vertical,S as WithProgress,Ie as __namedExportsOrder,be as default};
