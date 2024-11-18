import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{R as w}from"./index-DJO9vBfz.js";import{w as d,e as l}from"./index-o_M20OlO.js";import{B as x}from"./component-D3Kp87Eg.js";import{r as b}from"./index.m-CtIADANO.js";import{f as v}from"./index-CDQzWLZ0.js";import{i as c}from"./index-XDhxfy0k.js";import{i as se}from"./info-16-BSjfukQr.js";import{E as ie}from"./unstyled-heading-CModBwlL.js";import"./help-text-ZUZ6yO5S.js";import"./i18n-ClE17yBR.js";import"./close-16-C57eqN4L.js";import"./item-2WgqVm50.js";var le={},ce=Object.defineProperty,N=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,I=(t,e,n)=>e in t?ce(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,he=(t,e)=>{for(var n in e||(e={}))de.call(e,n)&&I(t,n,e[n]);if(N)for(var n of N(e))ue.call(e,n)&&I(t,n,e[n]);return t},pe=JSON.parse('{"icon.title.error":"Åttekant med utropstegn"}'),ve=JSON.parse('{"icon.title.error":"Octagon with exclamation point"}'),me=JSON.parse('{"icon.title.error":"Kahdeksankulmio, jonka sisällä on huutomerkki"}'),fe=JSON.parse('{"icon.title.error":"Ottekant med et udråbstegn"}'),Y=["en","nb","fi","da","sv"],Z="en",ge=()=>{var t;let e;switch((t=process==null?void 0:le)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},G=()=>{var t;const e=(t=document==null?void 0:document.location)==null?void 0:t.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Z},_=t=>Y.find(e=>t===e||t.toLowerCase().includes(e))||G();function we(){var t;if(typeof window>"u"){const e=ge();return _(e)}try{const e=(t=document==null?void 0:document.documentElement)==null?void 0:t.lang,n=G();return Y.includes(e)?_(e??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),_(n))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Z}}var ye=(t,e,n,o,a)=>t==="nb"?n:t==="fi"?o:t==="da"?a:e,xe=(t,e,n,o)=>{const a=we(),i=ye(a,t,e,n,o);c.load(a,i),c.activate(a)};xe(ve,pe,me,fe);var _e=c.t({message:"Octagon with exclamation point",id:"icon.title.error",comment:"Title for error icon"}),je=t=>w.createElement("svg",he({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${_e}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.107 4.748 15.5h6.503l4.248-4.393V4.893L11.252.5H4.748L.5 4.893z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11.398a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 8.5V3"></path>`}},t)),ke=je,be={},Ne=Object.defineProperty,O=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,B=(t,e,n)=>e in t?Ne(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Be=(t,e)=>{for(var n in e||(e={}))Ie.call(e,n)&&B(t,n,e[n]);if(O)for(var n of O(e))Oe.call(e,n)&&B(t,n,e[n]);return t},Te=JSON.parse('{"icon.title.success":"Sirkel med sjekkmerke"}'),Se=JSON.parse('{"icon.title.success":"Circle with checkmark"}'),$e=JSON.parse('{"icon.title.success":"Ympyrä, jonka sisällä on valintamerkki"}'),Ae=JSON.parse('{"icon.title.success":"Cirkel med et flueben"}'),Q=["en","nb","fi","da","sv"],X="en",Ce=()=>{var t;let e;switch((t=process==null?void 0:be)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ee=()=>{var t;const e=(t=document==null?void 0:document.location)==null?void 0:t.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":X},j=t=>Q.find(e=>t===e||t.toLowerCase().includes(e))||ee();function Le(){var t;if(typeof window>"u"){const e=Ce();return j(e)}try{const e=(t=document==null?void 0:document.documentElement)==null?void 0:t.lang,n=ee();return Q.includes(e)?j(e??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),j(n))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),X}}var Pe=(t,e,n,o,a)=>t==="nb"?n:t==="fi"?o:t==="da"?a:e,Ee=(t,e,n,o)=>{const a=Le(),i=Pe(a,t,e,n,o);c.load(a,i),c.activate(a)};Ee(Se,Te,$e,Ae);var We=c.t({message:"Circle with checkmark",id:"icon.title.success",comment:"Title for success icon"}),Re=t=>w.createElement("svg",Be({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${We}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 8.815 1.633 2.318a.7.7 0 0 0 1.138.034l5.228-6.615"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.999a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path>`}},t)),De=Re,Me={},He=Object.defineProperty,T=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,S=(t,e,n)=>e in t?He(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Fe=(t,e)=>{for(var n in e||(e={}))Je.call(e,n)&&S(t,n,e[n]);if(T)for(var n of T(e))Ve.call(e,n)&&S(t,n,e[n]);return t},Ke=JSON.parse('{"icon.title.warning":"Varseltrekant med utropstegn"}'),Ue=JSON.parse('{"icon.title.warning":"Warning triangle with exclamation point"}'),qe=JSON.parse('{"icon.title.warning":"Varoituskolmio, jonka sisällä on huutomerkki"}'),ze=JSON.parse('{"icon.title.warning":"Advarselstrekant med et udråbstegn"}'),te=["en","nb","fi","da","sv"],re="en",Ye=()=>{var t;let e;switch((t=process==null?void 0:Me)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ne=()=>{var t;const e=(t=document==null?void 0:document.location)==null?void 0:t.hostname;return e!=null&&e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":re},k=t=>te.find(e=>t===e||t.toLowerCase().includes(e))||ne();function Ze(){var t;if(typeof window>"u"){const e=Ye();return k(e)}try{const e=(t=document==null?void 0:document.documentElement)==null?void 0:t.lang,n=ne();return te.includes(e)?k(e??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),k(n))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),re}}var Ge=(t,e,n,o,a)=>t==="nb"?n:t==="fi"?o:t==="da"?a:e,Qe=(t,e,n,o)=>{const a=Ze(),i=Ge(a,t,e,n,o);c.load(a,i),c.activate(a)};Qe(Ue,Ke,qe,ze);var Xe=c.t({message:"Warning triangle with exclamation point",id:"icon.title.warning",comment:"Title for warning icon"}),et=t=>w.createElement("svg",Fe({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Xe}</title><path stroke="currentColor" d="m.712 14.07 6.25-12.994a1 1 0 0 1 1.792-.022l6.635 12.995a1 1 0 0 1-.89 1.455H1.613a1 1 0 0 1-.902-1.434Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6v4.992M8 13v.333"></path>`}},t)),tt=et;function s({show:t,type:e,role:n="alert",children:o,...a}){const i=v[e],oe=v[`${e}Icon`];return r.jsx(ie,{show:t,children:r.jsxs("div",{role:n,className:b(a.className,[v.wrapper,i]),style:a.style,children:[r.jsx("div",{className:b([v.icon,oe]),children:rt[e]}),r.jsx("div",{className:v.textWrapper,children:o})]})})}const rt={negative:r.jsx(ke,{}),positive:r.jsx(De,{}),warning:r.jsx(tt,{}),info:r.jsx(se,{})};s.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{role:{defaultValue:{value:"'alert'",computed:!1},required:!1}}};const ft={title:"FeedbackIndicators/Alert",component:s},ae=t=>r.jsx(s,{...t}),u=ae.bind({});u.args={type:"negative",show:!0,children:'This is "negative" variant of the alert component'};const h=()=>r.jsxs("div",{className:"flex flex-col gap-y-16",children:[r.jsxs("div",{"data-testid":"negative",children:[r.jsx("h3",{children:"Negative"}),r.jsx(s,{type:"negative",show:!0,children:'This is "negative" variant of the alert component'})]}),r.jsxs("div",{"data-testid":"positive",children:[r.jsx("h3",{children:"Positive"}),r.jsx(s,{type:"positive",show:!0,role:"status",children:'This is "positive" variant of the alert component'})]}),r.jsxs("div",{"data-testid":"warning",children:[r.jsx("h3",{children:"Warning"}),r.jsx(s,{type:"warning",show:!0,children:'This is "warning" variant of the alert component'})]}),r.jsxs("div",{"data-testid":"info",children:[r.jsx("h3",{children:"Info"}),r.jsx(s,{type:"info",show:!0,role:"status",children:'This is "info" variant of the alert component'})]})]});h.play=async({canvasElement:t})=>{const e=d(t),n=d(e.getByTestId("negative"));await l(n.getByRole("alert")).toBeInTheDocument(),await l(n.getByTitle(/Octagon/)).toBeInTheDocument();const o=d(e.getByTestId("positive"));await l(o.getByRole("status")).toBeInTheDocument(),await l(o.getByTitle(/checkmark/)).toBeInTheDocument();const a=d(e.getByTestId("warning"));await l(a.getByRole("alert")).toBeInTheDocument(),await l(a.getByTitle(/Warning/)).toBeInTheDocument();const i=d(e.getByTestId("info"));await l(i.getByRole("status")).toBeInTheDocument(),await l(i.getByTitle(/Information/)).toBeInTheDocument()};const y=({type:t})=>r.jsxs(r.Fragment,{children:[r.jsxs("h4",{className:"h5",children:["This is ",t," variant of the alert component"]}),r.jsx("p",{children:"With an additional description"}),r.jsxs("div",{className:"mt-8 space-x-8",children:[r.jsx(x,{small:!0,children:"Primary CTA"}),r.jsx(x,{small:!0,secondary:!0,quiet:!0,children:"Secondary"})]})]}),m=()=>r.jsxs("div",{className:"flex flex-col gap-y-16",children:[r.jsxs("div",{children:[r.jsx("h3",{children:"Negative"}),r.jsx(s,{type:"negative",show:!0,children:r.jsx(y,{type:"negative"})})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Positive"}),r.jsx(s,{type:"positive",show:!0,role:"status",children:r.jsx(y,{type:"positive"})})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Warning"}),r.jsx(s,{type:"warning",show:!0,children:r.jsx(y,{type:"warning"})})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Info"}),r.jsx(s,{type:"info",show:!0,role:"status",children:r.jsx(y,{type:"info"})})]})]}),f=()=>{const[t,e]=w.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:'Example with default role="alert"'}),r.jsx(x,{className:"mb-16",small:!0,primary:!0,onClick:()=>{e(!t)},"aria-controls":"negative-alert","aria-expanded":t,children:t?"Hide negative alert":"Show negative alert"}),r.jsxs(s,{id:"negative-alert",type:"negative",show:t,children:[r.jsx("h4",{className:"h5",children:'This is "negative" variant of the alert component'}),r.jsx("p",{children:"With an additional description"})]})]})},g=()=>{const[t,e]=w.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:'Example with role="alert" on a descendant element'}),r.jsx(x,{className:"mb-16",small:!0,primary:!0,onClick:()=>{e(!t)},"aria-controls":"overriden-role-example-alert","aria-expanded":t,children:t?"Hide warning alert":"Show warning alert"}),r.jsxs(s,{id:"overriden-role-example-alert",type:"warning",show:t,role:"",children:[r.jsx("h4",{className:"h5",children:'This is "warning" variant of the alert component'}),r.jsx("p",{children:"With an additional description that is not that important"})]})]})},p=ae.bind({});p.args={...u.args};p.play=async({canvasElement:t})=>{const e=d(t);await l(e.getByRole("alert")).toBeInTheDocument()};h.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"{ canvasElement }",optional:!1,type:null}],returns:null}],displayName:"Variants"};m.__docgenInfo={description:"",methods:[],displayName:"WithInteractiveContent"};f.__docgenInfo={description:"",methods:[],displayName:"WithDefaultRole"};g.__docgenInfo={description:"",methods:[],displayName:"WithOverriddenRole"};var $,A,C;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:"args => <Alert {...args} />",...(C=(A=u.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var L,P,E;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
    <div data-testid="negative">
      <h3>Negative</h3>
      <Alert type="negative" show>
        This is "negative" variant of the alert component
      </Alert>
    </div>
    <div data-testid="positive">
      <h3>Positive</h3>
      <Alert type="positive" show role="status">
        This is "positive" variant of the alert component
      </Alert>
    </div>
    <div data-testid="warning">
      <h3>Warning</h3>
      <Alert type="warning" show>
        This is "warning" variant of the alert component
      </Alert>
    </div>
    <div data-testid="info">
      <h3>Info</h3>
      <Alert type="info" show role="status">
        This is "info" variant of the alert component
      </Alert>
    </div>
  </div>`,...(E=(P=h.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var W,R,D;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
    <div>
      <h3>Negative</h3>
      <Alert type="negative" show>
        <InteractiveContent type="negative" />
      </Alert>
    </div>
    <div>
      <h3>Positive</h3>
      <Alert type="positive" show role="status">
        <InteractiveContent type="positive" />
      </Alert>
    </div>
    <div>
      <h3>Warning</h3>
      <Alert type="warning" show>
        <InteractiveContent type="warning" />
      </Alert>
    </div>
    <div>
      <h3>Info</h3>
      <Alert type="info" show role="status">
        <InteractiveContent type="info" />
      </Alert>
    </div>
  </div>`,...(D=(R=m.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var M,H,J;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [show, setShow] = React.useState(true);
  return <>
      <h3>Example with default role="alert"</h3>
      <Button className="mb-16" small primary onClick={() => {
      setShow(!show);
    }} aria-controls="negative-alert" aria-expanded={show}>
        {show ? 'Hide negative alert' : 'Show negative alert'}
      </Button>

      <Alert id="negative-alert" type="negative" show={show}>
        <h4 className="h5">This is "negative" variant of the alert component</h4>
        <p>With an additional description</p>
      </Alert>
    </>;
}`,...(J=(H=f.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var V,F,K;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [show, setShow] = React.useState(true);
  return <>
      <h3>Example with role="alert" on a descendant element</h3>
      <Button className="mb-16" small primary onClick={() => {
      setShow(!show);
    }} aria-controls="overriden-role-example-alert" aria-expanded={show}>
        {show ? 'Hide warning alert' : 'Show warning alert'}
      </Button>
      <Alert id="overriden-role-example-alert" type="warning" show={show} role="">
        <h4 className="h5">This is "warning" variant of the alert component</h4>
        <p>With an additional description that is not that important</p>
      </Alert>
    </>;
}`,...(K=(F=g.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var U,q,z;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:"args => <Alert {...args} />",...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const gt=["Default","Variants","WithInteractiveContent","WithDefaultRole","WithOverriddenRole","NegativeAlertTask"];export{u as Default,p as NegativeAlertTask,h as Variants,f as WithDefaultRole,m as WithInteractiveContent,g as WithOverriddenRole,gt as __namedExportsOrder,ft as default};
