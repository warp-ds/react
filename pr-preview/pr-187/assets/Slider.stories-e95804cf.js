import{j as r,k as f}from"./index-cd9b396d.js";import{r as s}from"./index-b75aab2a.js";import{r as D}from"./index.m-73ef1fbe.js";const W=()=>{let t;const e=i=>l=>{const{left:g,width:w}=l[0].target.getBoundingClientRect();i({left:g,width:w-24})};return{mountedHook:(i,l)=>{l(i.getBoundingClientRect()),t=new ResizeObserver(e(l)),t.observe(i)},unmountedHook:()=>{t.disconnect()}}},c=Object.freeze({up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",pageup:"PageUp",pagedown:"PageDown"}),G=Object.values(c),q={passive:!0};function J(t,e=2){const n=e?Math.pow(10,e):1;return Math.round(t*n)/n}const Q=t=>Number.isFinite(parseFloat(t)),Y=(t,{min:e,max:n})=>Q(t)?Math.min(Math.max(Number(t),e),n):e;function Z({props:t,sliderState:e}){const n=a=>Y(a,{max:t.max,min:t.min});function p(a){const{left:o,width:d}=e.dimensions,v="touches"in a?a.touches[0].clientX:a.clientX;let x=Math.min(Math.max((v-o-16)/d,0),1)||0;return{value:t.min+x*(t.max-t.min)}}const i=()=>(e.position-t.min)/(t.max-t.min)*100,l=()=>i()/100*e.dimensions.width,g=a=>{const o=1/e.step;return Math.floor(a*o)/o};function w(a){const o=a.key;if(G.includes(o))if(a.preventDefault(),[c.left,c.right,c.up,c.down].includes(o)){const d=[c.right,c.up].includes(o)?1:-1;e.position=n(e.val+d*e.step)}else if(o===c.home)e.position=t.min;else if(o===c.end)e.position=t.max;else{const d=o===c.pageup?1:-1,v=2,x=50;e.position=n(e.val+d*e.step*Math.max(v,Math.min(x,Math.ceil((t.max-t.min)/10/e.step))))}}function V(a){}function h(a){}function y(a){e.sliderPressed=!0,"touches"in a?(window.addEventListener("touchmove",b,q),window.addEventListener("touchend",m,{once:!0})):(window.addEventListener("mousemove",b,q),window.addEventListener("mouseup",m,{once:!0})),a.stopPropagation(),a.preventDefault()}function m(){e.sliderPressed=!1,window.removeEventListener("touchmove",b),window.removeEventListener("mousemove",b)}function M(a){b(a)}function b(a){var v;const{value:o}=p(a),d=J(o);(v=e.thumbEl)==null||v.focus(),e.position!==d&&(e.position=d)}return{handleKeyDown:w,handleFocus:V,handleBlur:h,handleMouseDown:y,handleClick:M,getThumbPosition:i,getThumbTransform:l,getShiftedChange:g}}function _({min:t=0,max:e=100,...n}){const{disabled:p,onChange:i}=n,l=s.useRef(null),g=s.useRef(null),{mountedHook:w,unmountedHook:V}=W();s.useEffect(()=>{if(l.current)return w(l.current,a),()=>V()},[l]);const[h,y]=s.useState(n.value),[m,M]=s.useState(n.value),[b,a]=s.useState({left:0,width:0}),[o,d]=s.useState(!1);s.useEffect(()=>{i&&i(h)},[h,i]);const v=s.useMemo(()=>n.step||1,[n]),x={get position(){return m},set position(u){M(u)},get sliderPressed(){return o},set sliderPressed(u){d(u)},get val(){return h},set val(u){y(u)},get thumbEl(){return g.current},get dimensions(){return b},get step(){return v}},{handleKeyDown:E,handleFocus:K,handleBlur:X,handleMouseDown:j,handleClick:R,getThumbPosition:P,getThumbTransform:T,getShiftedChange:z}=Z({props:{min:t,max:e,...n},sliderState:x}),H=s.useMemo(P,[P]),I=s.useMemo(()=>({left:0,right:100-H+"%"}),[H]),S=s.useMemo(T,[T]),U=s.useMemo(()=>({transform:"translateX("+S+"px)"}),[S]);return s.useEffect(()=>{if(m===n.value)return;const u=n.step?z(m):m;h!==u&&y(u)},[m,n.value,n.step]),s.useEffect(()=>{o||m===n.value||h===n.value||M(n.value)},[o,n.value]),r.jsxs("div",{className:f.wrapper,children:[r.jsx("div",{ref:l,className:D({[f.track]:!0,[f.trackDisabled]:p}),onClick:R}),r.jsx("div",{className:D({[f.activeTrack]:!0,[f.activeTrackDisabled]:p}),style:I,onClick:R}),r.jsx("div",{role:"slider",tabIndex:0,className:D({[f.thumb]:!0,[f.thumbDisabled]:p,[f.thumbEnabled]:!p}),ref:g,style:U,"aria-label":n["aria-label"],"aria-labelledby":n["aria-labelledby"],"aria-valuemin":t,"aria-valuemax":e,"aria-valuenow":h,"aria-valuetext":n["aria-valuetext"],onMouseDown:u=>{j(u)},onTouchStart:u=>{j(u)},onBlur:X,onFocus:K,onKeyDown:u=>{E(u)}})]})}try{_.displayName="Slider",_.__docgenInfo={description:"",displayName:"Slider",props:{max:{defaultValue:{value:"100"},description:"The greatest value in the range of permitted values",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"The lowest value in the range of permitted values",name:"min",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"Specifies the value granularity",name:"step",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"The current value",name:"value",required:!0,type:{name:"number"}},disabled:{defaultValue:null,description:"Whether the slider is disabled",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Handler that is called when the value of the slider changes",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},"aria-label":{defaultValue:null,description:"String value that labels the slider",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element that labels the slider",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-valuetext":{defaultValue:null,description:"Human readable text alternative for the value",name:"aria-valuetext",required:!1,type:{name:"string"}}}}}catch{}const ne={title:"Forms/Slider"},C=()=>{const[t,e]=s.useState(25e5);return r.jsxs("div",{children:[r.jsx("output",{children:t}),r.jsx(_,{onChange:n=>e(n),value:t,min:1e3,max:1e7,step:1e3}),r.jsx("button",{onClick:()=>e(25e5),children:"Reset"})]})},k=()=>{const[t,e]=s.useState(625e3);return r.jsxs("div",{children:[r.jsx("output",{children:t}),r.jsx(_,{onChange:n=>e(n),value:t,disabled:!0,min:1e3,max:1e7,step:1e3})]})};var N,L,F;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(2_500_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={1000} max={10_000_000} step={1000} />
      <button onClick={() => setValue(2_500_000)}>Reset</button>
    </div>;
}`,...(F=(L=C.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var O,A,B;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(B=(A=k.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const ae=["Regular","Disabled"];export{k as Disabled,C as Regular,ae as __namedExportsOrder,ne as default};
//# sourceMappingURL=Slider.stories-e95804cf.js.map
