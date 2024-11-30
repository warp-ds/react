import{j as e,y as C,z as r}from"./index-ByHan1Yq.js";import{r as j,R as K}from"./index-wSCK2UMg.js";import{B as U}from"./component-CJb2L8a2.js";import{r as l}from"./index.m-CtIADANO.js";import{i as p}from"./index-CO0CvHzQ.js";import{a as G}from"./i18n-D_GeL-Ou.js";const B=j.createContext({horizontal:!1,right:!1});function d({horizontal:n,right:t,className:s,children:i}){return e.jsx(B.Provider,{value:{horizontal:n,right:t},children:e.jsx("ul",{className:l(s,[C.wrapper,n&&C.horizontal]),children:i})})}d.__docgenInfo={description:"",methods:[],displayName:"Steps"};var Q={},Y=Object.defineProperty,k=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,_=(n,t,s)=>t in n?Y(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,te=(n,t)=>{for(var s in t||(t={}))Z.call(t,s)&&_(n,s,t[s]);if(k)for(var s of k(t))ee.call(t,s)&&_(n,s,t[s]);return n},ne=JSON.parse('{"icon.title.check":"Sjekkmerke"}'),se=JSON.parse('{"icon.title.check":"Checkmark"}'),re=JSON.parse('{"icon.title.check":"Valintamerkki"}'),ae=JSON.parse('{"icon.title.check":"Flueben"}'),V=["en","nb","fi","da","sv"],$="en",ie=()=>{var n;let t;switch((n=process==null?void 0:Q)==null?void 0:n.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},X=()=>{var n;const t=(n=document==null?void 0:document.location)==null?void 0:n.hostname;return t!=null&&t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":$},g=n=>V.find(t=>n===t||n.toLowerCase().includes(t))||X();function oe(){var n;if(typeof window>"u"){const t=ie();return g(t)}try{const t=(n=document==null?void 0:document.documentElement)==null?void 0:n.lang,s=X();return V.includes(t)?g(t??s):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),g(s))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),$}}var ce=(n,t,s,i,c)=>n==="nb"?s:n==="fi"?i:n==="da"?c:t,le=(n,t,s,i)=>{const c=oe(),o=ce(c,n,t,s,i);p.load(c,o),p.activate(c)};le(se,ne,re,ae);var pe=p.t({message:"Checkmark",id:"icon.title.check",comment:"Title for check icon"}),de=n=>K.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${pe}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.83 7.667 7.163 11l5.334-6"></path>`}},n)),me=de;const he=JSON.parse('{"steps.aria.emptyCircle":"Tom cirkel","steps.aria.active":"Trinindikator aktiv cirkel","steps.aria.completed":"Trinindikator fuldført cirkel"}'),Se=JSON.parse('{"steps.aria.emptyCircle":"Empty circle","steps.aria.active":"Step indicator active circle","steps.aria.completed":"Step indicator completed circle"}'),ue=JSON.parse('{"steps.aria.emptyCircle":"Tyhjä ympyrä","steps.aria.active":"Vaiheilmaisin aktiivinen ympyrä","steps.aria.completed":"Vaiheilmaisin valmis ympyrä"}'),ve=JSON.parse('{"steps.aria.emptyCircle":"Tom sirkel","steps.aria.active":"Stegindikator aktiv sirkel","steps.aria.completed":"Stegindikator hel sirkel"}'),fe=JSON.parse('{"steps.aria.emptyCircle":"Tom cirkel","steps.aria.active":"Stegindikator aktiv cirkel","steps.aria.completed":"Stegindikator fulländad cirkel"}'),x={completed:p._({id:"steps.aria.completed",message:"Step indicator completed circle",comment:"Completed circle"}),active:p._({id:"steps.aria.active",message:"Step indicator active circle",comment:"Active circle"}),default:p._({id:"steps.aria.emptyCircle",message:"Empty circle",comment:"Empty circle"})},ge=n=>{const t=Object.keys(x).find(s=>n[s]);return t?x[t]:x.default};function a(n){G(Se,ve,ue,he,fe);const{active:t,completed:s,children:i}=n,c=j.useContext(B),o=!c.horizontal,f=!c.right,M=l([r.base,o?r.vertical:r.horizontal,o?f?r.alignLeft:r.alignRight:""]),q=l([r.line,r.lineHorizontal,r.lineHorizontalAlignLeft,t||s?r.lineComplete:r.lineIncomplete]),F=l([r.dot,o?f?"":r.dotAlignRight:r.dotHorizontal,t||s?r.dotActive:r.dotIncomplete]),W=l([r.line,r.lineHorizontalAlignRight,o?r.lineVertical:r.lineHorizontal,o&&!f?r.lineAlignRight:"",s?r.lineComplete:r.lineIncomplete]),D=l([r.content,o?r.contentVertical:r.contentHorizontal]);return e.jsxs("li",{className:M,children:[!o&&e.jsx("div",{className:q}),e.jsx("div",{className:F,role:"img","aria-label":ge(n),...t&&{"aria-current":"step"},children:s&&e.jsx(me,{"data-testid":"completed-icon"})}),e.jsx("div",{className:W}),e.jsx("div",{className:D,children:i})]})}a.__docgenInfo={description:"",methods:[],displayName:"Step",props:{active:{required:!1,tsType:{name:"boolean"},description:`Step is active
@default false`},completed:{required:!1,tsType:{name:"boolean"},description:`Step is completed
@default false`},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"Contents of Step"}}};const Ne={title:"Navigation/Steps"},m=()=>e.jsxs(d,{children:[e.jsxs(a,{children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),h=()=>e.jsxs(d,{children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),S=()=>e.jsxs(d,{right:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),u=()=>e.jsxs(d,{horizontal:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),v=()=>{const[n,t]=j.useState(0),s=()=>t(n===4?0:i=>i+1);return e.jsxs(e.Fragment,{children:[e.jsx(U,{onClick:s,small:!0,children:"Complete a step"}),e.jsxs(d,{className:"mt-20",children:[e.jsxs(a,{active:n===0,completed:n>0,children:[e.jsx("h4",{className:"mt-0",children:"Step one"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:n===1,completed:n>1,children:[e.jsx("h4",{className:"mt-0",children:"Step two"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:n===2,completed:n>2,children:[e.jsx("h4",{className:"mt-0",children:"Step three"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:n===3,completed:n>3,children:[e.jsx("h4",{className:"mt-0",children:"Step four"}),e.jsx("p",{children:"Some content"})]})]})]})};m.__docgenInfo={description:"",methods:[],displayName:"Vertical"};h.__docgenInfo={description:"",methods:[],displayName:"WithProgress"};S.__docgenInfo={description:"",methods:[],displayName:"RightAligned"};u.__docgenInfo={description:"",methods:[],displayName:"Horizontal"};v.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var y,N,w;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Steps>
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
  </Steps>`,...(w=(N=m.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var b,I,O;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Steps>
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
  </Steps>`,...(O=(I=h.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var z,E,A;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`() => <Steps right>
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
  </Steps>`,...(A=(E=S.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var J,L,P;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`() => <Steps horizontal>
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
  </Steps>`,...(P=(L=u.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var T,H,R;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(R=(H=v.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};const we=["Vertical","WithProgress","RightAligned","Horizontal","Interactive"];export{u as Horizontal,v as Interactive,S as RightAligned,m as Vertical,h as WithProgress,we as __namedExportsOrder,Ne as default};
