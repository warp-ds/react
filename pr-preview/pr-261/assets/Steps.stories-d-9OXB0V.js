import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as C,R as U}from"./index-GiUgBvb1.js";import{B as G}from"./component-CGQ0yaPS.js";import{r as l}from"./index.m-CtIADANO.js";import{x as k,y as r}from"./index-oc5ynqAU.js";import{i as p}from"./index-BKMOwH26.js";import{a as Q}from"./i18n-BHDtzpJN.js";const V=C.createContext({horizontal:!1,right:!1});function d({horizontal:n,right:t,className:s,children:o}){return e.jsx(V.Provider,{value:{horizontal:n,right:t},children:e.jsx("ul",{className:l(s,[k.wrapper,n&&k.horizontal]),children:o})})}d.__docgenInfo={description:"",methods:[],displayName:"Steps"};var Y={},Z=Object.defineProperty,_=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,y=(n,t,s)=>t in n?Z(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,ne=(n,t)=>{for(var s in t||(t={}))ee.call(t,s)&&y(n,s,t[s]);if(_)for(var s of _(t))te.call(t,s)&&y(n,s,t[s]);return n},$=["en","nb","fi","da","sv"],X="en",se=()=>{var n;let t;switch((n=process==null?void 0:Y)==null?void 0:n.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},M=()=>{var n;const t=(n=document==null?void 0:document.location)==null?void 0:n.hostname;return t!=null&&t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":X},j=n=>$.find(t=>n===t||n.toLowerCase().includes(t))||M();function re(){var n;if(typeof window>"u"){const t=se();return j(t)}try{const t=(n=document==null?void 0:document.documentElement)==null?void 0:n.lang,s=M();return $.includes(t)?j(t??s):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),j(s))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),X}}var ae=(n,t,s,o,c,i)=>n==="nb"?s:n==="fi"?o:n==="da"?c:n==="sv"?i:t,ie=(n,t,s,o,c)=>{const i=re(),m=ae(i,n,t,s,o,c);p.load(i,m),p.activate(i)},h={nb:{"icon.title.check":["Sjekkmerke"]},en:{"icon.title.check":["Checkmark"]},fi:{"icon.title.check":["Valintamerkki"]},da:{"icon.title.check":["Flueben"]},sv:{"icon.title.check":["Bock"]}};ie(h.en,h.nb,h.fi,h.da,h.sv);var oe=p.t({message:"Checkmark",id:"icon.title.check",comment:"Title for check icon"}),ce=n=>U.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${oe}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.83 7.667 7.163 11l5.334-6"></path>`}},n)),le=ce;const pe=JSON.parse('{"steps.aria.active":["Trinindikator aktiv cirkel"],"steps.aria.completed":["Trinindikator fuldført cirkel"],"steps.aria.emptyCircle":["Tom cirkel"]}'),de=JSON.parse('{"steps.aria.active":["Step indicator active circle"],"steps.aria.completed":["Step indicator completed circle"],"steps.aria.emptyCircle":["Empty circle"]}'),me=JSON.parse('{"steps.aria.active":["Vaiheilmaisin aktiivinen ympyrä"],"steps.aria.completed":["Vaiheilmaisin valmis ympyrä"],"steps.aria.emptyCircle":["Tyhjä ympyrä"]}'),he=JSON.parse('{"steps.aria.active":["Stegindikator aktiv sirkel"],"steps.aria.completed":["Stegindikator hel sirkel"],"steps.aria.emptyCircle":["Tom sirkel"]}'),Se=JSON.parse('{"steps.aria.active":["Stegindikator aktiv cirkel"],"steps.aria.completed":["Stegindikator fulländad cirkel"],"steps.aria.emptyCircle":["Tom cirkel"]}');Q(de,he,me,pe,Se);const g={completed:p._({id:"steps.aria.completed",message:"Step indicator completed circle",comment:"Completed circle"}),active:p._({id:"steps.aria.active",message:"Step indicator active circle",comment:"Active circle"}),default:p._({id:"steps.aria.emptyCircle",message:"Empty circle",comment:"Empty circle"})},ue=n=>{const t=Object.keys(g).find(s=>n[s]);return t?g[t]:g.default};function a(n){const{active:t,completed:s,children:o}=n,c=C.useContext(V),i=!c.horizontal,m=!c.right,q=l([r.base,i?r.vertical:r.horizontal,i?m?r.alignLeft:r.alignRight:""]),F=l([r.line,r.lineHorizontal,r.lineHorizontalAlignLeft,t||s?r.lineComplete:r.lineIncomplete]),W=l([r.dot,i?m?"":r.dotAlignRight:r.dotHorizontal,t||s?r.dotActive:r.dotIncomplete]),D=l([r.line,r.lineHorizontalAlignRight,i?r.lineVertical:r.lineHorizontal,i&&!m?r.lineAlignRight:"",s?r.lineComplete:r.lineIncomplete]),K=l([r.content,i?r.contentVertical:r.contentHorizontal]);return e.jsxs("li",{className:q,children:[!i&&e.jsx("div",{className:F}),e.jsx("div",{className:W,role:"img","aria-label":ue(n),...t&&{"aria-current":"step"},children:s&&e.jsx(le,{"data-testid":"completed-icon"})}),e.jsx("div",{className:D}),e.jsx("div",{className:K,children:o})]})}a.__docgenInfo={description:"",methods:[],displayName:"Step",props:{active:{required:!1,tsType:{name:"boolean"},description:`Step is active
@default false`},completed:{required:!1,tsType:{name:"boolean"},description:`Step is completed
@default false`},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"Contents of Step"}}};const _e={title:"Navigation/Steps"},S=()=>e.jsxs(d,{children:[e.jsxs(a,{children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),u=()=>e.jsxs(d,{children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),v=()=>e.jsxs(d,{right:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),f=()=>e.jsxs(d,{horizontal:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),x=()=>{const[n,t]=C.useState(0),s=()=>t(n===4?0:o=>o+1);return e.jsxs(e.Fragment,{children:[e.jsx(G,{onClick:s,small:!0,children:"Complete a step"}),e.jsxs(d,{className:"mt-20",children:[e.jsxs(a,{active:n===0,completed:n>0,children:[e.jsx("h4",{className:"mt-0",children:"Step one"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:n===1,completed:n>1,children:[e.jsx("h4",{className:"mt-0",children:"Step two"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:n===2,completed:n>2,children:[e.jsx("h4",{className:"mt-0",children:"Step three"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:n===3,completed:n>3,children:[e.jsx("h4",{className:"mt-0",children:"Step four"}),e.jsx("p",{children:"Some content"})]})]})]})};S.__docgenInfo={description:"",methods:[],displayName:"Vertical"};u.__docgenInfo={description:"",methods:[],displayName:"WithProgress"};v.__docgenInfo={description:"",methods:[],displayName:"RightAligned"};f.__docgenInfo={description:"",methods:[],displayName:"Horizontal"};x.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var N,w,b;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`() => <Steps>
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
  </Steps>`,...(b=(w=S.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var I,O,E;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Steps>
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
  </Steps>`,...(E=(O=u.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var z,A,L;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`() => <Steps right>
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
  </Steps>`,...(L=(A=v.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var P,T,B;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`() => <Steps horizontal>
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
  </Steps>`,...(B=(T=f.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var H,R,J;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(J=(R=x.parameters)==null?void 0:R.docs)==null?void 0:J.source}}};const ye=["Vertical","WithProgress","RightAligned","Horizontal","Interactive"];export{f as Horizontal,x as Interactive,v as RightAligned,S as Vertical,u as WithProgress,ye as __namedExportsOrder,_e as default};
