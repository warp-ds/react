import{j as l,d as g}from"./index-C4tyfTTA.js";import{r as s}from"./index-CBqU2yxZ.js";import{r as R}from"./index.m-CtIADANO.js";import"./_commonjsHelpers-BosuxZz1.js";const te=()=>{let e;const t=u=>d=>{const{left:p,width:x}=d[0].target.getBoundingClientRect();u({left:p,width:x-24})};return{mountedHook:(u,d)=>{d(u.getBoundingClientRect()),e=new ResizeObserver(t(d)),e.observe(u)},unmountedHook:()=>{e.disconnect()}}},c=Object.freeze({up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",pageup:"PageUp",pagedown:"PageDown"}),ne=Object.values(c),N={passive:!0};function ae(e,t=2){const n=t?Math.pow(10,t):1;return Math.round(e*n)/n}const se=e=>Number.isFinite(parseFloat(e)),ue=(e,{min:t,max:n})=>se(e)?Math.min(Math.max(Number(e),t),n):t;let C={counter:0,repeatsBeforeAcceleration:3};function oe({props:e,sliderState:t}){const n=a=>ue(a,{max:e.max,min:e.min});function f(a){const{left:o,width:m}=t.dimensions,v="touches"in a?a.touches[0].clientX:a.clientX;let h=Math.min(Math.max((v-o-16)/m,0),1)||0;return{value:e.min+h*(e.max-e.min)}}const u=()=>(t.position-e.min)/(e.max-e.min)*100,d=()=>u()/100*t.dimensions.width,p=a=>{const o=1/t.step;return Math.floor(a*o)/o};function x(a){const o=a.key;if(!(e.disabled||!ne.includes(o)))switch(a.preventDefault(),o){case c.left:case c.right:case c.up:case c.down:{const m=o===c.right||o===c.up?1:-1;let v=t.step;if(!e.preventAcceleration)if(a.repeat){C.counter++;const h=Math.min((C.counter-C.repeatsBeforeAcceleration)/100,.2);v=Math.max(t.step,Math.ceil((m>0?e.max-t.val:t.val-e.min)*h))}else C.counter=0;t.position=n(t.val+m*v);break}case c.home:t.position=e.min;break;case c.end:t.position=e.max;break;case c.pageup:case c.pagedown:{const m=o===c.pageup?1:-1,v=2,h=50;t.position=n(t.val+m*t.step*Math.max(v,Math.min(h,Math.ceil((e.max-e.min)/10/t.step))));break}}}function A(){}function j(){}function i(a){t.sliderPressed=!0,"touches"in a?(window.addEventListener("touchmove",b,N),window.addEventListener("touchend",w,{once:!0})):(window.addEventListener("mousemove",b,N),window.addEventListener("mouseup",w,{once:!0})),a.stopPropagation(),a.preventDefault()}function w(){t.sliderPressed=!1,window.removeEventListener("touchmove",b),window.removeEventListener("mousemove",b)}function V(a){b(a)}function b(a){var v;const{value:o}=f(a),m=ae(o);(v=t.thumbEl)==null||v.focus(),t.position!==m&&(t.position=m)}return{handleKeyDown:x,handleFocus:A,handleBlur:j,handleMouseDown:i,handleClick:V,getThumbPosition:u,getThumbTransform:d,getShiftedChange:p}}function y({min:e=0,max:t=100,...n}){const{disabled:f,onChange:u,onChangeAfter:d}=n,p=s.useRef(null),x=s.useRef(null),{mountedHook:A,unmountedHook:j}=te();s.useEffect(()=>{if(p.current)return A(p.current,v),()=>j()},[p]);const[i,w]=s.useState(n.value),[V,b]=s.useState(n.value),[a,o]=s.useState(n.value),[m,v]=s.useState({left:0,width:0}),[h,D]=s.useState(!1);s.useEffect(()=>{i!==n.value&&(u==null||u(i))},[n.value,i,u]),s.useEffect(()=>{h||i!==V&&(b(i),d==null||d(i))},[d,h,i,V]);const W=s.useMemo(()=>n.step||1,[n]),G={get position(){return a},set position(r){o(r)},get sliderPressed(){return h},set sliderPressed(r){D(r)},get val(){return i},set val(r){w(r)},get thumbEl(){return x.current},get dimensions(){return m},get step(){return W}},{handleKeyDown:J,handleFocus:Q,handleBlur:Y,handleMouseDown:E,handleClick:S,getThumbPosition:P,getThumbTransform:T,getShiftedChange:Z}=oe({props:{min:e,max:t,...n},sliderState:G}),H=s.useMemo(P,[P]),$=s.useMemo(()=>({left:0,right:100-H+"%"}),[H]),q=s.useMemo(T,[T]),ee=s.useMemo(()=>({transform:"translateX("+q+"px)"}),[q]);return s.useEffect(()=>{if(a===n.value)return;const r=n.step?Z(a):a;w(r)},[a,n.value,n.step]),s.useEffect(()=>{h||a===n.value||i===n.value||o(n.value)},[h,n.value]),l.jsxs("div",{className:g.wrapper,children:[l.jsx("div",{ref:p,className:R({[g.track]:!0,[g.trackDisabled]:f}),onClick:S}),l.jsx("div",{className:R({[g.activeTrack]:!f,[g.activeTrackDisabled]:f}),style:$,onClick:S}),l.jsx("div",{role:"slider",tabIndex:0,className:R({[g.thumb]:!0,[g.thumbDisabled]:f,[g.thumbEnabled]:!f}),ref:x,style:ee,"aria-label":n["aria-label"],"aria-labelledby":n["aria-labelledby"],"aria-valuemin":e,"aria-valuemax":t,"aria-valuenow":i,"aria-valuetext":n["aria-valuetext"],onMouseDown:r=>{E(r)},onTouchStart:r=>{E(r)},onBlur:Y,onFocus:Q,onKeyDown:r=>{J(r)}})]})}try{y.displayName="Slider",y.__docgenInfo={description:"",displayName:"Slider",props:{max:{defaultValue:{value:"100"},description:"The greatest value in the range of permitted values",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"The lowest value in the range of permitted values",name:"min",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"Specifies the value granularity",name:"step",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"The current value",name:"value",required:!0,type:{name:"number"}},disabled:{defaultValue:null,description:"Whether the slider is disabled",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Handler that is called when the value of the slider changes",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},onChangeAfter:{defaultValue:null,description:`Handler that is called after moving the slider has ended. Will only be
called if the action resulted in a change.`,name:"onChangeAfter",required:!1,type:{name:"((value: number) => void)"}},"aria-label":{defaultValue:null,description:"String value that labels the slider",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element that labels the slider",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-valuetext":{defaultValue:null,description:"Human readable text alternative for the value",name:"aria-valuetext",required:!1,type:{name:"string"}}}}}catch{}const de={title:"Forms/Slider"},M=()=>{const[e,t]=s.useState(25e5);return l.jsxs("div",{children:[l.jsx("output",{children:e}),l.jsx(y,{onChange:n=>t(n),value:e,min:1e3,max:1e7,step:1e3}),l.jsx("button",{onClick:()=>t(25e5),children:"Reset"})]})},k=()=>{const[e,t]=s.useState(625e3);return l.jsxs("div",{children:[l.jsx("output",{children:e}),l.jsx(y,{onChange:n=>t(n),value:e,disabled:!0,min:1e3,max:1e7,step:1e3})]})},_=()=>{const[e,t]=s.useState(625e3),[n,f]=s.useState(e);return l.jsxs("div",{children:[l.jsx("output",{children:n}),l.jsx(y,{onChange:u=>t(u),onChangeAfter:u=>f(u),value:e,min:1e3,max:1e7,step:1e3})]})};var L,B,F;M.parameters={...M.parameters,docs:{...(L=M.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(2_500_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={1000} max={10_000_000} step={1000} />
      <button onClick={() => setValue(2_500_000)}>Reset</button>
    </div>;
}`,...(F=(B=M.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var O,K,X;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(X=(K=k.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var z,I,U;_.parameters={..._.parameters,docs:{...(z=_.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);
  return <div>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(U=(I=_.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const me=["Regular","Disabled","ChangeAfter"];export{_ as ChangeAfter,k as Disabled,M as Regular,me as __namedExportsOrder,de as default};