import{d as p,j as c}from"./index-Dne8ocfi.js";import{r as a}from"./index-RYns6xqu.js";import{r as D}from"./index.m-CtIADANO.js";const oe=()=>{let e;const t=r=>f=>{const{left:g,width:b}=f[0].target.getBoundingClientRect();r({left:g,width:b-24})};return{mountedHook:(r,f)=>{f(r.getBoundingClientRect()),e=new ResizeObserver(t(f)),e.observe(r)},unmountedHook:()=>{e.disconnect()}}},v=Object.freeze({up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",pageup:"PageUp",pagedown:"PageDown"}),re=Object.values(v),q={passive:!0};function ue(e,t=2){const s=t?Math.pow(10,t):1;return Math.round(e*s)/s}const ie=e=>Number.isFinite(parseFloat(e)),le=(e,{min:t,max:s})=>ie(e)?Math.min(Math.max(Number(e),t),s):t;let R={counter:0,repeatsBeforeAcceleration:3};function ce({props:e,sliderState:t}){const s=n=>le(n,{max:e.max,min:e.min});function o(n){const{left:u,width:d}=t.dimensions,h="touches"in n?n.touches[0].clientX:n.clientX;let m=Math.min(Math.max((h-u-16)/d,0),1)||0;return{value:e.min+m*(e.max-e.min)}}const r=()=>(t.position-e.min)/(e.max-e.min)*100,f=()=>r()/100*t.dimensions.width,g=n=>{const u=1/t.step;return Math.floor(n*u)/u};function b(n){const u=n.key;if(!(e.disabled||!re.includes(u)))switch(n.preventDefault(),u){case v.left:case v.right:case v.up:case v.down:{const d=u===v.right||u===v.up?1:-1;let h=t.step;if(!e.preventAcceleration)if(n.repeat){R.counter++;const m=Math.min((R.counter-R.repeatsBeforeAcceleration)/100,.2);h=Math.max(t.step,Math.ceil((d>0?e.max-t.val:t.val-e.min)*m))}else R.counter=0;t.position=s(t.val+d*h);break}case v.home:t.position=e.min;break;case v.end:t.position=e.max;break;case v.pageup:case v.pagedown:{const d=u===v.pageup?1:-1,h=2,m=50;t.position=s(t.val+d*t.step*Math.max(h,Math.min(m,Math.ceil((e.max-e.min)/10/t.step))));break}}}function w(){}function _(){}function i(n){t.sliderPressed=!0,"touches"in n?(window.addEventListener("touchmove",x,q),window.addEventListener("touchend",y,{once:!0})):(window.addEventListener("mousemove",x,q),window.addEventListener("mouseup",y,{once:!0})),n.stopPropagation(),n.preventDefault()}function y(){t.sliderPressed=!1,window.removeEventListener("touchmove",x),window.removeEventListener("mousemove",x)}function C(n){x(n)}function x(n){var h;const{value:u}=o(n),d=ue(u);(h=t.thumbEl)==null||h.focus(),t.position!==d&&(t.position=d)}return{handleKeyDown:b,handleFocus:w,handleBlur:_,handleMouseDown:i,handleClick:C,getThumbPosition:r,getThumbTransform:f,getShiftedChange:g}}function j({min:e=0,max:t=100,step:s=1,value:o,disabled:r,onChange:f,onChangeAfter:g,...b}){const w=a.useRef(null),_=a.useRef(null),[i,y]=a.useState(o),[C,x]=a.useState(o),[n,u]=a.useState(o),[d,h]=a.useState({left:0,width:0}),[m,E]=a.useState(!1),W=a.useMemo(()=>({get position(){return n},set position(l){u(l)},get sliderPressed(){return m},set sliderPressed(l){E(l)},get val(){return i},set val(l){y(l)},get thumbEl(){return _.current},get dimensions(){return d},get step(){return s}}),[n,m,i,d,s]),{handleKeyDown:$,handleFocus:G,handleBlur:J,handleMouseDown:A,handleClick:P,getThumbPosition:S,getThumbTransform:H,getShiftedChange:Q}=ce({props:{min:e,max:t,step:s,...b},sliderState:W}),{mountedHook:Y,unmountedHook:Z}=oe();a.useEffect(()=>{if(w.current)return Y(w.current,h),()=>Z()},[w]),a.useEffect(()=>{i!==o&&(f==null||f(i))},[i,o,f]),a.useEffect(()=>{!m&&i!==C&&(x(i),g==null||g(i))},[g,m,i,C]),a.useEffect(()=>{if(n!==o){const l=s?Q(n):n;l!==i&&y(l)}},[n,o,s]),a.useEffect(()=>{!m&&n!==o&&i!==o&&u(o)},[m,o]);const N=a.useMemo(S,[S]),ee=a.useMemo(()=>({left:0,right:`${100-N}%`}),[N]),V=a.useMemo(H,[H]),te=a.useMemo(()=>({transform:`translateX(${V}px)`}),[V]),ne=D([p.track,r&&p.trackDisabled]),ae=D([p.activeTrack,r?p.activeTrackDisabled:p.activeTrackEnabled]),se=D([p.thumb,r?p.thumbDisabled:p.thumbEnabled]);return c.jsxs("div",{className:p.wrapper,children:[c.jsx("div",{ref:w,className:ne,onClick:P}),c.jsx("div",{className:ae,style:ee,onClick:P}),c.jsx("div",{role:"slider",tabIndex:0,className:se,ref:_,style:te,"aria-label":b["aria-label"],"aria-labelledby":b["aria-labelledby"],"aria-valuemin":e,"aria-valuemax":t,"aria-valuenow":i,"aria-valuetext":b["aria-valuetext"],onMouseDown:l=>A(l),onTouchStart:l=>A(l),onBlur:J,onFocus:G,onKeyDown:l=>$(l)})]})}j.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{max:{required:!1,tsType:{name:"number"},description:`The greatest value in the range of permitted values
@default 100`,defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`The lowest value in the range of permitted values
@default 0`,defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Specifies the value granularity",defaultValue:{value:"1",computed:!1}},value:{required:!0,tsType:{name:"number"},description:"The current value"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Handler that is called when the value of the slider changes"},onChangeAfter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:`Handler that is called after moving the slider has ended. Will only be
called if the action resulted in a change.`},"aria-label":{required:!1,tsType:{name:"string"},description:"String value that labels the slider"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element that labels the slider"},"aria-valuetext":{required:!1,tsType:{name:"string"},description:"Human readable text alternative for the value"}}};const fe={title:"Forms/Slider"},k=()=>{const[e,t]=a.useState(25e5);return c.jsxs("div",{children:[c.jsx("output",{children:e}),c.jsx(j,{onChange:s=>t(s),value:e,min:1e3,max:1e7,step:1e3}),c.jsx("button",{onClick:()=>t(25e5),children:"Reset"})]})},M=()=>{const[e,t]=a.useState(625e3);return c.jsxs("div",{children:[c.jsx("output",{children:e}),c.jsx(j,{onChange:s=>t(s),value:e,disabled:!0,min:1e3,max:1e7,step:1e3})]})},T=()=>{const[e,t]=a.useState(625e3),[s,o]=a.useState(e);return c.jsxs("div",{children:[c.jsx("output",{children:s}),c.jsx(j,{onChange:r=>t(r),onChangeAfter:r=>o(r),value:e,min:1e3,max:1e7,step:1e3})]})};k.__docgenInfo={description:"",methods:[],displayName:"Regular"};M.__docgenInfo={description:"",methods:[],displayName:"Disabled"};T.__docgenInfo={description:"",methods:[],displayName:"ChangeAfter"};var L,B,F;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(2_500_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={1000} max={10_000_000} step={1000} />
      <button onClick={() => setValue(2_500_000)}>Reset</button>
    </div>;
}`,...(F=(B=k.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var I,O,K;M.parameters={...M.parameters,docs:{...(I=M.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(K=(O=M.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var X,z,U;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);
  return <div>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(U=(z=T.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};const he=["Regular","Disabled","ChangeAfter"];export{T as ChangeAfter,M as Disabled,k as Regular,he as __namedExportsOrder,fe as default};
