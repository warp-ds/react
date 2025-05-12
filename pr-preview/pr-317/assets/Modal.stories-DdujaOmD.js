import{j as o,C as u}from"./index-CsaUr60p.js";import{R as Ke,r as a}from"./index-RYns6xqu.js";import{B as d}from"./component-i4eQWb9m.js";import{T as Qe}from"./component-BwY-JL6e.js";import{r as j}from"./index.m-CtIADANO.js";import{i as x}from"./index-C6dB-k_R.js";import{c as ze}from"./close-16-cHDvCKuO.js";import{a as Ze}from"./i18n-BJez-btc.js";import{u as et}from"./help-text-CxFUUEfI.js";import"./item-Bv4PyDRv.js";var tt={},nt=Object.defineProperty,Z=Object.getOwnPropertySymbols,ot=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,ee=(e,n,t)=>n in e?nt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,at=(e,n)=>{for(var t in n||(n={}))ot.call(n,t)&&ee(e,t,n[t]);if(Z)for(var t of Z(n))rt.call(n,t)&&ee(e,t,n[t]);return e},st=JSON.parse('{"icon.title.arrow-left":["Pil som peker mot venstre"]}'),it=JSON.parse('{"icon.title.arrow-left":["Leftward-pointing arrow"]}'),lt=JSON.parse('{"icon.title.arrow-left":["Vasemmalle osoittava nuoli"]}'),ct=JSON.parse('{"icon.title.arrow-left":["Pil til venstre"]}'),ut=JSON.parse('{"icon.title.arrow-left":["Pil som pekar vänster"]}'),ke=["en","nb","fi","da","sv"],ye="en",dt=()=>{var e;let n;switch((e=process==null?void 0:tt)==null?void 0:e.NMP_BRAND){case"FINN":n="nb";break;case"TORI":n="fi";break;case"BLOCKET":n="sv";break;case"DBA":n="da";break;default:n="en"}return n},be=()=>{var e;const n=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return n!=null&&n.includes("finn")?"nb":n.includes("tori")?"fi":n.includes("blocket")?"sv":n.includes("dba")?"da":ye},A=e=>ke.find(n=>e===n||e.toLowerCase().includes(n))||be();function ft(){var e;if(typeof window>"u"){const n=dt();return A(n)}try{const n=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,t=be();return ke.includes(n)?A(n??t):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),A(t))}catch(n){return console.warn("could not detect locale, falling back to source locale",n),ye}}var mt=(e,n,t,r,s,i)=>e==="nb"?t:e==="fi"?r:e==="da"?s:e==="sv"?i:n,pt=(e,n,t,r,s)=>{const i=ft(),l=mt(i,e,n,t,r,s);x.load(i,l),x.activate(i)};pt(it,st,lt,ct,ut);var gt=x.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"}),ht=e=>Ke.createElement("svg",at({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${gt}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path>`}},e)),vt=ht;function B(){return B=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},B.apply(null,arguments)}var kt="data-focus-lock",yt="data-focus-lock-disabled";function F(e,n){return typeof e=="function"?e(n):e&&(e.current=n),e}function bt(e,n){var t=a.useState(function(){return{value:e,callback:n,facade:{get current(){return t.value},set current(r){var s=t.value;s!==r&&(t.value=r,t.callback(r,s))}}}})[0];return t.callback=n,t.facade}var Ct=typeof window<"u"?a.useLayoutEffect:a.useEffect,te=new WeakMap;function Mt(e,n){var t=bt(null,function(r){return e.forEach(function(s){return F(s,r)})});return Ct(function(){var r=te.get(t);if(r){var s=new Set(r),i=new Set(e),l=t.current;s.forEach(function(c){i.has(c)||F(c,null)}),i.forEach(function(c){s.has(c)||F(c,l)})}te.set(t,e)},[e]),t}var L={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},I=function(){return I=Object.assign||function(n){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},I.apply(this,arguments)};function Ce(e){return e}function Me(e,n){n===void 0&&(n=Ce);var t=[],r=!1,s={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(i){var l=n(i,r);return t.push(l),function(){t=t.filter(function(c){return c!==l})}},assignSyncMedium:function(i){for(r=!0;t.length;){var l=t;t=[],l.forEach(i)}t={push:function(c){return i(c)},filter:function(){return t}}},assignMedium:function(i){r=!0;var l=[];if(t.length){var c=t;t=[],c.forEach(i),l=t}var g=function(){var h=l;l=[],h.forEach(i)},m=function(){return Promise.resolve().then(g)};m(),t={push:function(h){l.push(h),m()},filter:function(h){return l=l.filter(h),t}}}};return s}function J(e,n){return n===void 0&&(n=Ce),Me(e,n)}function Et(e){e===void 0&&(e={});var n=Me(null);return n.options=I({async:!0,ssr:!1},e),n}var Rt=J({},function(e){var n=e.target,t=e.currentTarget;return{target:n,currentTarget:t}}),St=J();J();var Ot=Et({async:!0,ssr:typeof document<"u"}),xt=a.createContext(void 0),wt=[],Ee=a.forwardRef(function(n,t){var r,s=a.useState(),i=s[0],l=s[1],c=a.useRef(),g=a.useRef(!1),m=a.useRef(null),h=a.useState({}),P=h[1],Oe=n.children,X=n.disabled,p=X===void 0?!1:X,$=n.noFocusGuards,q=$===void 0?!1:$,H=n.persistentFocus,xe=H===void 0?!1:H,G=n.crossFrame,we=G===void 0?!0:G,V=n.autoFocus,je=V===void 0?!0:V;n.allowTextSelection;var Be=n.group,_e=n.className,Te=n.whiteList,Ne=n.hasPositiveIndices,U=n.shards,_=U===void 0?wt:U,W=n.as,Ae=W===void 0?"div":W,Y=n.lockProps,Fe=Y===void 0?{}:Y,Le=n.sideCar,K=n.returnFocus,w=K===void 0?!1:K,Ie=n.focusOptions,T=n.onActivation,N=n.onDeactivation,Je=a.useState({}),De=Je[0],Pe=a.useCallback(function(f){var k=f.captureFocusRestore;if(!m.current){var y,v=(y=document)==null?void 0:y.activeElement;m.current=v,v!==document.body&&(m.current=k(v))}c.current&&T&&T(c.current),g.current=!0,P()},[T]),Xe=a.useCallback(function(){g.current=!1,N&&N(c.current),P()},[N]),$e=a.useCallback(function(f){var k=m.current;if(k){var y=(typeof k=="function"?k():k)||document.body,v=typeof w=="function"?w(y):w;if(v){var z=typeof v=="object"?v:void 0;m.current=null,f?Promise.resolve().then(function(){return y.focus(z)}):y.focus(z)}}},[w]),qe=a.useCallback(function(f){g.current&&Rt.useMedium(f)},[]),He=St.useMedium,Ge=a.useCallback(function(f){c.current!==f&&(c.current=f,l(f))},[]),Ve=B((r={},r[yt]=p&&"disabled",r[kt]=Be,r),Fe),Q=q!==!0,Ue=Q&&q!=="tail",We=Mt([t,Ge]),Ye=a.useMemo(function(){return{observed:c,shards:_,enabled:!p,active:g.current}},[p,g.current,_,i]);return a.createElement(a.Fragment,null,Q&&[a.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:p?-1:0,style:L}),Ne?a.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:p?-1:1,style:L}):null],!p&&a.createElement(Le,{id:De,sideCar:Ot,observed:i,disabled:p,persistentFocus:xe,crossFrame:we,autoFocus:je,whiteList:Te,shards:_,onActivation:Pe,onDeactivation:Xe,returnFocus:$e,focusOptions:Ie}),a.createElement(Ae,B({ref:We},Ve,{className:_e,onBlur:He,onFocus:qe}),a.createElement(xt.Provider,{value:Ye},Oe)),Ue&&a.createElement("div",{"data-focus-guard":!0,tabIndex:p?-1:0,style:L}))});Ee.propTypes={};let O=[];const D={documentElement:{},body:{}},jt=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),Re=e=>{var n;e.touches.length>1||((n=e.preventDefault)==null||n.call(e))},Bt=e=>([n,t])=>{D[e][n]=document[e].style[n],document[e].style[n]=t},_t=()=>Object.entries(jt).forEach(([e,n])=>{Object.entries(n).forEach(Bt(e))}),Tt=e=>([n,t])=>{document[e].style[n]=D[e][n]},Nt=()=>Object.entries(D).forEach(([e,n])=>{Object.entries(n).forEach(Tt(e))}),At=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function Ft(e){let n=-1;const t=r=>{if(r.targetTouches.length!==1)return;const s=r.targetTouches[0].clientY-n;return e.scrollTop===0&&s>0||At(e)&&s<0?Re(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(n=r.targetTouches[0].clientY)},e.ontouchmove=t}function Lt(e){e.ontouchstart=null,e.ontouchmove=null}const Se=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",Re,{passive:!1}),It=Se(!0),Jt=Se();function Dt(e){if(!e)throw Error("Could not run setup, an element must be provided");O.some(n=>n===e)||(O.length||(_t(),It()),Ft(e),O.push(e))}function ne(){O.forEach(Lt),Jt(),Nt(),O=[]}const Pt=JSON.parse('{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}'),Xt=JSON.parse('{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}'),$t=JSON.parse('{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}'),qt=JSON.parse('{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}'),Ht=JSON.parse('{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}');Ze(Xt,qt,$t,Pt,Ht);const b=({"aria-label":e,"aria-labelledby":n,...t})=>{const r=a.useRef(null),s=et(t.id),i=a.useRef(null);return a.useEffect(()=>()=>ne(),[]),a.useEffect(()=>{ne(),r.current&&t.open&&Dt(r.current)},[t.open,r]),a.useEffect(()=>{var l,c;t.initialFocusRef?(c=t.initialFocusRef.current)==null||c.focus():t.right&&((l=i.current)==null||l.focus())},[t.open,t.initialFocusRef,t.right]),t.open?o.jsx(Ee,{children:o.jsx("div",{onClick:t.onDismiss,className:j(t.className,u.backdrop),style:{...t.style},children:o.jsxs("div",{role:"dialog","aria-modal":"true",id:s,onClick:l=>l.stopPropagation(),"aria-label":e,"aria-labelledby":n??(t.title&&!e?`${s}__title`:void 0),onKeyDown:l=>{t.onDismiss&&l.key==="Escape"&&t.onDismiss()},className:u.base,tabIndex:-1,children:[o.jsxs("div",{className:u.title,children:[typeof t.left=="boolean"&&t.left?o.jsx("button",{type:"button","aria-label":x._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:j([u.transitionTitle,u.titleButton,u.titleButtonLeft]),onClick:t.onLeftClick?t.onLeftClick:t.onDismiss,children:o.jsx(vt,{className:u.titleButtonIcon})}):t.left,o.jsx("div",{id:`${s}__title`,className:j([u.transitionTitle,t.left?u.transitionTitleCenter:u.transitionTitleColSpan]),children:typeof t.title=="string"?o.jsx("h1",{className:u.titleText,children:t.title}):t.title}),typeof t.right=="boolean"&&t.right?o.jsx("button",{ref:i,type:"button","aria-label":x._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:t.onDismiss,className:j([u.transitionTitle,u.titleButton,u.titleButtonRight]),children:o.jsx(ze,{className:u.titleButtonIcon})}):t.right]}),o.jsx("div",{ref:r,className:u.content,children:t.children}),!!t.footer&&o.jsx("div",{className:u.footer,children:t.footer})]})})}):o.jsx(o.Fragment,{})};b.__docgenInfo={description:"A Modal dialog that renders on top of the page",methods:[],displayName:"Modal",props:{title:{required:!1,tsType:{name:"union",raw:"string | JSX.Element | JSX.Element[]",elements:[{name:"string"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A string or your own custom elements"},open:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open or not"},left:{required:!1,tsType:{name:"union",raw:"boolean | JSX.Element | JSX.Element[]",elements:[{name:"boolean"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A default back button or your own custom elements"},right:{required:!1,tsType:{name:"union",raw:"boolean | JSX.Element | JSX.Element[]",elements:[{name:"boolean"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A default close button or your own custom elements"},footer:{required:!1,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"Buttons passed to the footer"},className:{required:!1,tsType:{name:"string"},description:"Additional classes added to the container"},id:{required:!1,tsType:{name:"string"},description:"An id for the container and ARIA attributes. A random id is generated if none is provided."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional styles to the contianer"},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"The modal contents"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler that is called when the user presses *esc* or clicks outside the modal"},onLeftClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler that is called when the user clicks the left button"},"aria-label":{required:!1,tsType:{name:"string"},description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined."},initialFocusRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<any>",elements:[{name:"any"}]},description:"A reference to the element that should be focused. By default it'll be the first interactive element."}}};const tn={title:"Overlays/Modal"},C=()=>{const[e,n]=a.useState(!0),t=()=>n(!e),r=a.useRef(null);return a.useEffect(()=>{var s;e||(s=r.current)==null||s.focus()},[e]),o.jsxs(o.Fragment,{children:[o.jsx(d,{ref:r,utility:!0,onClick:t,children:"Open modal"}),o.jsxs(b,{open:e,onDismiss:t,title:"Title of the content goes here",footer:o.jsxs(o.Fragment,{children:[o.jsx(d,{onClick:t,className:"mr-12",children:"Cancel"}),o.jsx(d,{primary:!0,onClick:t,children:"Accept"})]}),children:[o.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),o.jsx("a",{href:"#",onClick:s=>s.preventDefault(),children:"Optional link to read more."})]})]})},M=()=>{const[e,n]=a.useState(!0),t=()=>n(!e),r=a.useRef(null);return a.useEffect(()=>{var s;e||(s=r.current)==null||s.focus()},[e]),o.jsxs(o.Fragment,{children:[o.jsx(d,{ref:r,utility:!0,onClick:t,children:"Open modal"}),o.jsxs(b,{open:e,left:!0,right:!0,onDismiss:t,onLeftClick:()=>{console.log("left clicked"),t()},title:"Title of the content goes here",footer:o.jsxs(o.Fragment,{children:[o.jsx(d,{onClick:t,className:"mr-12",children:"Cancel"}),o.jsx(d,{primary:!0,onClick:t,children:"Accept"})]}),children:[o.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),o.jsx("a",{href:"#",onClick:s=>s.preventDefault(),children:"Optional link to read more."})]})]})},E=()=>{const[e,n]=a.useState(!1),[t,r]=a.useState(!1),s=a.useRef(null);a.useEffect(()=>{var l;e||(r(!1),(l=s.current)==null||l.focus())},[e]);const i=()=>n(!e);return o.jsxs(o.Fragment,{children:[o.jsx(d,{ref:s,utility:!0,onClick:i,children:"Open modal"}),o.jsxs(b,{open:e,onDismiss:i,title:"Do you agree to these terms?",footer:o.jsx(d,{primary:!0,onClick:i,disabled:!t,children:"Accept"}),children:[o.jsx("p",{children:"1. You must give me 10 pushups right now"}),o.jsx(Qe,{type:"checkbox",label:"I agree",onChange:r})]})]})},R=()=>{const[e,n]=a.useState(!1),t=()=>n(!e),r=a.useRef(),s=a.useRef(null);return a.useEffect(()=>{var i;e||(i=s.current)==null||i.focus()},[e]),o.jsxs(o.Fragment,{children:[o.jsx(d,{ref:s,utility:!0,onClick:t,children:"Open modal"}),o.jsxs(b,{open:e,onDismiss:t,initialFocusRef:r,title:"Title of the content goes here",footer:o.jsxs(o.Fragment,{children:[o.jsx(d,{onClick:t,className:"mr-12",children:"Cancel"}),o.jsx(d,{ref:r,primary:!0,onClick:t,children:"Accept"})]}),children:[o.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),o.jsx("a",{href:"#",onClick:i=>i.preventDefault(),children:"Optional link to read more."})]})]})},S=()=>{const[e,n]=a.useState(!0),t=()=>n(!e),r=a.useRef(null);return a.useEffect(()=>{var s;e&&((s=r.current)==null||s.focus())},[e]),o.jsxs(o.Fragment,{children:[o.jsx(d,{ref:r,utility:!0,onClick:t,children:"Open modal"}),o.jsx(b,{open:e,onDismiss:t,title:"Title of the content goes here",footer:o.jsxs(o.Fragment,{children:[o.jsx(d,{onClick:t,className:"mr-12",children:"Cancel"}),o.jsx(d,{primary:!0,onClick:t,children:"Accept"})]}),children:[...new Array(10)].map((s,i)=>o.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},i))})]})};C.__docgenInfo={description:"",methods:[],displayName:"Example"};M.__docgenInfo={description:"",methods:[],displayName:"WithBackAndCloseButton"};E.__docgenInfo={description:"",methods:[],displayName:"MustConfirmToProceed"};R.__docgenInfo={description:"",methods:[],displayName:"InitialFocus"};S.__docgenInfo={description:"",methods:[],displayName:"Overflowing"};var oe,re,ae;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>Content information goes here. Optional illustration on top. Can contain links.</p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(ae=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,ie,le;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} left right onDismiss={toggleModal} onLeftClick={() => {
      console.log('left clicked');
      toggleModal();
    }} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>Content information goes here. Optional illustration on top. Can contain links.</p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(le=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,ue,de;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      setChecked(false);
      openModalRef.current?.focus();
    }
  }, [open]);
  const toggleModal = () => setOpen(!open);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} title="Do you agree to these terms?" footer={<Button primary onClick={toggleModal} disabled={!checked}>
            Accept
          </Button>}>
        <p>1. You must give me 10 pushups right now</p>
        <Toggle type="checkbox" label="I agree" onChange={setChecked} />
      </Modal>
    </>;
}`,...(de=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var fe,me,pe;R.parameters={...R.parameters,docs:{...(fe=R.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => setOpen(!open);
  const focusRef = React.useRef<HTMLButtonElement>();
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} initialFocusRef={focusRef} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button ref={focusRef} primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>Content information goes here. Optional illustration on top. Can contain links.</p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(pe=(me=R.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,he,ve;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        {[...new Array(10)].map((e, i) => <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>)}
      </Modal>
    </>;
}`,...(ve=(he=S.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};const nn=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{C as Example,R as InitialFocus,E as MustConfirmToProceed,S as Overflowing,M as WithBackAndCloseButton,nn as __namedExportsOrder,tn as default};
