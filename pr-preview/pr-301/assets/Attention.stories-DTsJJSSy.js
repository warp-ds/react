import{j as e}from"./index-DSOYRR-y.js";import{R as a}from"./index-RYns6xqu.js";import{i as O}from"./info-16-CkEITmUl.js";import{B as x}from"./component-CFTMq9rF.js";import{B as f}from"./component-DfcuE9an.js";import{A as s}from"./component-DGkHE89C.js";import"./index-C6dB-k_R.js";import"./index.m-CtIADANO.js";import"./i18n-BJez-btc.js";import"./close-16-cHDvCKuO.js";const X={title:"Overlays/Attention"};function r(){return e.jsxs("div",{className:"flex items-center",children:[e.jsx(x,{info:!0,children:e.jsx("h1",{"aria-details":"callout-bubbletext",children:"I am a box full of info"})}),e.jsx(s,{callout:!0,placement:"right",isShowing:!0,children:e.jsx("p",{id:"callout-bubbletext",style:{width:200},children:"I'm a callout because that box over there is new or something"})})]})}function c(){return e.jsxs("div",{className:"flex items-center",children:[e.jsx(x,{info:!0,children:e.jsx("h1",{"aria-details":"callout-reset-bubbletext",children:"I am a box full of info"})}),e.jsx(s,{callout:!0,role:"","aria-label":"",placement:"right",isShowing:!0,children:e.jsx("p",{id:"callout-reset-bubbletext",role:"img",style:{width:200},children:"I'm a callout speech bubble with resetted role and aria-label attributes pointing left."})})]})}function u(){const[t,n]=a.useState(!1),o=a.useRef(null);return e.jsxs("div",{className:"flex flex-col justify-between h-[200] space-y-20",children:[e.jsx(f,{small:!0,"aria-expanded":t,"aria-controls":"highlight-attention-example",utility:!0,onClick:()=>n(!t),className:"w-max mb-0",children:"Show an onboarding hint"}),e.jsxs("div",{children:[e.jsx("div",{ref:o,className:"w-1/3",children:e.jsx(x,{info:!0,children:e.jsx("h1",{children:"I am a box full with lots of info to show you how the attention element is positioned on the right-top corner."})})}),e.jsx(s,{highlight:!0,placement:"right-start",isShowing:t,targetEl:o,id:"highlight-attention-example",className:"max-w-[359px]",children:e.jsx("p",{children:"I'm a highlight because that box over there is new or something and I need to have a lot of text!"})})]})]})}function h(){const[t,n]=a.useState(!1),o=a.useRef(null);return e.jsxs("div",{className:"flex flex-col justify-between h-[200]",children:[e.jsx(f,{small:!0,"aria-expanded":t,"aria-controls":"highlight-attention-example",utility:!0,onClick:()=>n(!t),className:"w-max mb-0",children:"Show an onboarding hint"}),e.jsxs("div",{children:[e.jsx("div",{ref:o,className:"w-2/3 mt-96",children:e.jsx(x,{info:!0,children:e.jsx("h1",{children:"I am a box full of info that shows how the highlight can change position on scroll/resize"})})}),e.jsx(s,{highlight:!0,canClose:!0,onDismiss:()=>n(!1),placement:"bottom",isShowing:t,targetEl:o,flip:!0,crossAxis:!0,fallbackPlacements:["right","top"],id:"highlight-attention-example",children:e.jsx("p",{children:"I'm a highlight that can dismiss itself"})})]})]})}function d(){const[t,n]=a.useState(!1),o=a.useRef(null);return e.jsxs("div",{children:[e.jsx("h1",{className:"w-max mb-0",ref:o,children:e.jsx(f,{"aria-describedby":"tooltip-bubbletext","aria-expanded":"true",type:"button",className:"bg-transparent",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onFocus:()=>n(!0),onBlur:()=>n(!1),children:"hover this for useless info"})}),e.jsx(s,{tooltip:!0,placement:"bottom",targetEl:o,isShowing:t,children:e.jsx("p",{id:"tooltip-bubbletext",children:"lol i am a tooltip"})})]})}function m(){const[t,n]=a.useState(!1),o=a.useRef(null),i=a.useRef(null);return a.useEffect(()=>{function l(g){o.current&&!o.current.contains(g.target)&&n(!1)}return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs("div",{ref:o,children:[e.jsx(f,{small:!0,"aria-expanded":t,"aria-controls":"popover-attention-example",utility:!0,onClick:()=>n(!t),className:"w-max mb-0",ref:i,children:"Open menu"}),e.jsx(s,{popover:!0,placement:"bottom",targetEl:i,isShowing:t,id:"popover-attention-example",children:e.jsxs("ul",{className:"bg-white w-full text-center",children:[e.jsx("li",{className:"p-2 px-40",children:"Hello"}),e.jsx("li",{className:"p-2 px-40",children:"World"})]})})]})})}function p(){const[t,n]=a.useState(!1),o=a.useRef(null),i=a.useRef(null);return a.useEffect(()=>{function l(g){o.current&&!o.current.contains(g.target)&&n(!1)}return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs("div",{ref:o,children:[e.jsx(f,{"aria-expanded":t,"aria-controls":"popover-icon-target-el-attention-example",utility:!0,quiet:!0,onClick:()=>n(!t),className:"w-max mb-0",ref:i,children:e.jsx(O,{})}),e.jsx(s,{popover:!0,placement:"bottom-end",distance:0,skidding:10,targetEl:i,isShowing:t,id:"popover-icon-target-el-attention-example",children:e.jsxs("ul",{className:"bg-white w-full text-center",children:[e.jsx("li",{className:"p-2 px-40",children:"Hello"}),e.jsx("li",{className:"p-2 px-40",children:"World"})]})})]})})}r.__docgenInfo={description:"",methods:[],displayName:"Callout"};c.__docgenInfo={description:"",methods:[],displayName:"CalloutResettingRoleAndAriaLabel"};u.__docgenInfo={description:"",methods:[],displayName:"Highlight"};h.__docgenInfo={description:"",methods:[],displayName:"DismissibleHighlight"};d.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};m.__docgenInfo={description:"",methods:[],displayName:"Popover"};p.__docgenInfo={description:"",methods:[],displayName:"PopoverIconAsTargetEl"};var w,b,v;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`function Callout() {
  return <div className="flex items-center">
      <Box info>
        <h1 aria-details="callout-bubbletext">I am a box full of info</h1>
      </Box>
      <Attention callout placement="right" isShowing={true}>
        <p id="callout-bubbletext" style={{
        width: 200
      }}>
          I'm a callout because that box over there is new or something
        </p>
      </Attention>
    </div>;
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var j,S,E;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`function CalloutResettingRoleAndAriaLabel() {
  return <div className="flex items-center">
      <Box info>
        <h1 aria-details="callout-reset-bubbletext">I am a box full of info</h1>
      </Box>
      <Attention callout role="" aria-label="" placement="right" isShowing={true}>
        <p id="callout-reset-bubbletext" role="img" style={{
        width: 200
      }}>
          I'm a callout speech bubble with resetted role and aria-label attributes pointing left.
        </p>
      </Attention>
    </div>;
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var N,R,y;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`function Highlight() {
  const [show, setShow] = React.useState(false);
  const targetEl = React.useRef<HTMLDivElement | null>(null);
  return <div className="flex flex-col justify-between h-[200] space-y-20">
      <Button small aria-expanded={show} aria-controls="highlight-attention-example" utility onClick={() => setShow(!show)} className="w-max mb-0">
        Show an onboarding hint
      </Button>
      <div>
        <div ref={targetEl} className="w-1/3">
          <Box info>
            <h1>I am a box full with lots of info to show you how the attention element is positioned on the right-top corner.</h1>
          </Box>
        </div>
        <Attention highlight placement="right-start" isShowing={show} targetEl={targetEl} id="highlight-attention-example" className="max-w-[359px]">
          <p>I'm a highlight because that box over there is new or something and I need to have a lot of text!</p>
        </Attention>
      </div>
    </div>;
}`,...(y=(R=u.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var B,A,I;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`function DismissibleHighlight() {
  const [show, setShow] = React.useState(false);
  const targetEl = React.useRef<HTMLDivElement | null>(null);
  return <div className="flex flex-col justify-between h-[200]">
      <Button small aria-expanded={show} aria-controls="highlight-attention-example" utility onClick={() => setShow(!show)} className="w-max mb-0">
        Show an onboarding hint
      </Button>
      <div>
        <div ref={targetEl} className="w-2/3 mt-96">
          <Box info>
            <h1>I am a box full of info that shows how the highlight can change position on scroll/resize</h1>
          </Box>
        </div>
        <Attention highlight canClose onDismiss={() => setShow(false)} placement="bottom" isShowing={show} targetEl={targetEl} flip={true} crossAxis={true} fallbackPlacements={['right', 'top']} id="highlight-attention-example">
          <p>I'm a highlight that can dismiss itself</p>
        </Attention>
      </div>
    </div>;
}`,...(I=(A=h.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var H,L,C;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`function Tooltip() {
  const [show, setShow] = React.useState(false);
  const targetEl = React.useRef<HTMLDivElement | null>(null);
  return <div>
      <h1 className="w-max mb-0" ref={targetEl}>
        <Button aria-describedby="tooltip-bubbletext" aria-expanded="true" type="button" className="bg-transparent" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onFocus={() => setShow(true)} onBlur={() => setShow(false)}>
          hover this for useless info
        </Button>
      </h1>
      <Attention tooltip placement="bottom" targetEl={targetEl} isShowing={show}>
        <p id="tooltip-bubbletext">lol i am a tooltip</p>
      </Attention>
    </div>;
}`,...(C=(L=d.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var _,T,k;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`function Popover() {
  const [show, setShow] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const targetEl = React.useRef<any>(null);
  React.useEffect(() => {
    function onBlurHandler(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShow(false);
      }
    }
    document.addEventListener('mousedown', onBlurHandler);
    return () => {
      document.removeEventListener('mousedown', onBlurHandler);
    };
  });
  return <div className="flex items-center justify-center">
      <div ref={containerRef}>
        <Button small aria-expanded={show} aria-controls="popover-attention-example" utility onClick={() => setShow(!show)} className="w-max mb-0" ref={targetEl}>
          Open menu
        </Button>
        <Attention popover placement="bottom" targetEl={targetEl} isShowing={show} id="popover-attention-example">
          <ul className="bg-white w-full text-center">
            <li className="p-2 px-40">Hello</li>
            <li className="p-2 px-40">World</li>
          </ul>
        </Attention>
      </div>
    </div>;
}`,...(k=(T=m.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var D,P,M;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`function PopoverIconAsTargetEl() {
  const [show, setShow] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const targetEl = React.useRef<any>(null);
  React.useEffect(() => {
    function onBlurHandler(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShow(false);
      }
    }
    document.addEventListener('mousedown', onBlurHandler);
    return () => {
      document.removeEventListener('mousedown', onBlurHandler);
    };
  });
  return <div className="flex items-center justify-center">
      <div ref={containerRef}>
        <Button aria-expanded={show} aria-controls="popover-icon-target-el-attention-example" utility quiet onClick={() => setShow(!show)} className="w-max mb-0" ref={targetEl}>
          <IconInfo16 />
        </Button>
        <Attention popover placement="bottom-end" distance={0} skidding={10} targetEl={targetEl} isShowing={show} id="popover-icon-target-el-attention-example">
          <ul className="bg-white w-full text-center">
            <li className="p-2 px-40">Hello</li>
            <li className="p-2 px-40">World</li>
          </ul>
        </Attention>
      </div>
    </div>;
}`,...(M=(P=p.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};const Y=["Callout","CalloutResettingRoleAndAriaLabel","Highlight","DismissibleHighlight","Tooltip","Popover","PopoverIconAsTargetEl"];export{r as Callout,c as CalloutResettingRoleAndAriaLabel,h as DismissibleHighlight,u as Highlight,m as Popover,p as PopoverIconAsTargetEl,d as Tooltip,Y as __namedExportsOrder,X as default};
