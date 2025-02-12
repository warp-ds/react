import{j as a}from"./jsx-runtime-DEdD30eg.js";import{r as o}from"./index-RYns6xqu.js";const Me=`
  .wrapper {
      display: grid;
      width: 500px;
      max-width: 100%;
      margin: 8px 0px;
  }
  .input-wrapper {
      grid-row: 1;
      grid-column: 1;
      display: grid;
  }
  input[type="range"] {
      appearance: none;
      height: 40px;
      grid-row: 1;
      grid-column: 1;
      pointer-events: none;
  }
  input[type="range"]:focus {
      outline: none;
  }
  input[type=range]::-webkit-slider-thumb {
      appearance: none;
      width: 24px;
      height: 24px;
      background-color: var(--w-s-color-background-primary);
      border-radius: 0%;
      cursor: pointer;
      transform: translateY(-10px);
      border-radius: 12px;
      pointer-events: all !important;
  }
  input[type="range"]:focus::-webkit-slider-thumb {
      box-shadow: var(--w-shadow-slider-handle-active);
  }
  input[type=range]::-webkit-slider-thumb:active {
      background: #2f98f9;
      box-shadow: var(--w-shadow-slider-handle-active);
  }
  input[type=range]::-webkit-slider-runnable-track {
      height: 4px;
      border: 0px solid #b2b2b2;
      background: #efefef;
      box-shadow: none;
      pointer-events: none;
  }
  .active-track {
      background-color: var(--w-s-color-background-primary);
      height: 5px;
      width: 50%;
      pointer-events: none;
      transform: translateY(17px);
      grid-row: 1;
      grid-column: 1;
      z-index: 0;
      pointer-events: none;
      display: grid;
      width: 0px;
      .tooltip {
          grid-row: 1;
          grid-column: 1;
          color: white;
          padding: 5px 12px;
          position: fixed;
          text-align: center;
          background-color: grey;
      }
      .tooltip:nth-child(1) {
          left: 0;
      }
      .tooltip:nth-child(2) {
          right: 0;
      }
  }
  .steps {
      display: grid;
      height: 11px;
      overflow: hidden;
      grid-auto-flow: column;
      grid-template-columns: max-content;
      justify-items: end;
      color: #d4d4d4;
      pointer-events: none;
      grid-row: 1;
      grid-column: 1;
      align-self: end;
      margin: 0px -2px;
  }
`;function b({min:e=0,max:t=100,step:r=1,value:u,values:s,disabled:m,onChange:i,onChangeAfter:x,"aria-label":g,"aria-labelledby":_,"aria-valuetext":Se,keyboardStepFactor:je=.04,showTooltip:Re=!1,markers:B=!1,markerCount:E=10}){const d=(s?"range":"standard")==="range",p=o.useMemo(()=>Oe(r,B,E,t,e),[]),D=()=>s?z(s,p):[e,y(u,p)],[l,H]=o.useState(()=>D()),[F,O]=o.useState(!1),U=o.useRef(null),N=o.useRef(null),f=o.useRef(null),h=o.useRef(null),L=o.useRef(0);o.useEffect(()=>{if(Ee(u,s,e,t),!(document.activeElement===f.current||document.activeElement===h.current)){const n=D();H(n),te(U,n,N,d,t,e,p),k({values:n,value:u},d,f,h)}},[s,u]),o.useEffect(()=>{k({values:s,value:u},d,f,h)},[f.current,h.current]),o.useEffect(()=>{!F&&x&&x(d?l:l[1])},[F,l]),o.useEffect(()=>{f.current&&f.current.setAttribute("value",l[0]),h.current&&h.current.setAttribute("value",l[1])},[l]);const X=o.useCallback((n,c)=>{const v={left:-1,right:1},q=t*je,I=l[c]+v[n]*q,w=$(I,c,d,l,e,t,p,!0);k({values:w,value:I},d,f,h),K(w,c)},[l]),Te=o.useCallback((n,c)=>{(n.key==="ArrowUp"||n.key==="ArrowDown")&&n.preventDefault(),O(!0),n.key==="ArrowLeft"&&X("left",c),n.key==="ArrowRight"&&X("right",c)},[X]),G=o.useCallback(n=>{if(setTimeout(()=>{O(!0)},1),!m&&n.target.nodeName!=="INPUT"){const c=n.touches?Fe(n):n.nativeEvent.offsetX,v=N.current.clientWidth,q=y(c/v*(t-e)+e,p),I=(l[0]+l[1])/2,w=q>y(I,p)?1:0,Y=$(q,w,d,l,e,t,p);K(Y,w),k({values:Y,value:Y[1]},d,f,h)}},[s,u,l]),K=o.useCallback((n,c)=>{clearTimeout(L.current),n[0]>n[1]&&(c==0?n[0]=n[1]:n[1]=n[0],k({values:n,value:n[1]},d,f,h)),L.current=setTimeout(()=>{n=Ve(n,e,t),H(n),i&&i(d?n:n[1])},1),te(U,n,N,d,t,e,p)},[]),Ae=o.useCallback((n,c)=>{const v=$(+n.target.value,c,d,l,e,t,p);K(v,c)},[l]),M=()=>{J()};function J(){O(!1)}const Q=o.useCallback((n,c)=>m?a.jsx("input",{type:"range",disabled:!0,value:l[n],min:e,max:t}):a.jsx("input",{ref:c,type:"range",step:p,min:e,max:t,onKeyDown:v=>Te(v,n),onKeyUp:J,onChange:v=>Ae(v,n),...Ie({ariaLabel:g,ariaLabelledBy:_,ariaValueText:Se})}),[l]),_e=o.useMemo(()=>E==="auto"&&typeof p=="number"?(t-e)/p+1:E,[]),Ne=o.useCallback(()=>Array.from(Array(_e).keys()).map(n=>a.jsx("div",{children:"|"},n)),[]),W=Re&&F;let Z=0,ee=0;return W&&([Z,ee]=qe(D(),t,e)),a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Me}),a.jsxs("div",{className:"ccSlider.wrapper wrapper",onContextMenu:n=>n.preventDefault(),children:[a.jsxs("div",{className:"active-track",ref:U,children:[a.jsx(re,{display:W&&d,transform:`translateY(-50px) translateX(calc(-50% + ${Z}px))`,children:l[0]}),a.jsx(re,{display:W,transform:`translateY(-50px) translateX(calc(50% + ${ee}px))`,children:l[1]})]}),a.jsxs("div",{className:"input-wrapper",ref:N,onMouseDown:G,onTouchStart:G,onKeyUp:M,onMouseUp:M,onTouchEnd:M,onMouseOut:M,children:[Q(1,h),d&&Q(0,f),a.jsx("div",{className:"steps",children:B&&Ne()})]})]})]})}const qe=(e,t,r)=>{const u=-((e[0]-r)/(t-r)-.5)*24,s=-((e[1]-r)/(t-r)-.5)*24;return[u,s]};function Ie({ariaLabel:e,ariaLabelledBy:t,ariaValueText:r}){return{"aria-label":e,"aria-labelledby":t,"aria-valuetext":r}}function P(e,t,r){return Math.min(Math.max(e,t),r)}function Ee(e,t,r,u){(e&&e<r||t&&t[0]<r)&&console.warn("Value too low."),(e&&e>u||t&&t[1]>u)&&console.warn("Value too high.")}function k({value:e,values:t},r,u,s){r?(u.current&&(u.current.value=t[0]),s.current&&(s.current.value=t[1])):s.current&&(s.current.value=e)}const $=(e,t=1,r,u,s,m,i,x=!1)=>{let g;return e=Math.round(e),r?t===1?g=[u[0],e]:g=[e,u[1]]:g=[s,e],x?Ve(z(g,i),s,m):z(g,i)},De=(e,t,r,u,s,m)=>{var _;let i=y(e[1]-e[0],m)/(u-s);const x=((_=t.current)==null?void 0:_.clientWidth)||500;(i<0||i>1)&&(console.warn("Values outside of range."),i=P(i,0,1));const g=r?(e[0]-s)/(u-s)*x:0;return`
    width: ${i*100+"%"};
    margin-left: ${g+"px"};`},te=(e,t,r,u,s,m,i)=>{e.current&&(e.current.style.cssText=De(t,r,u,s,m,i))},Ve=(e,t,r)=>[P(e[0],t,r),P(e[1],t,r)],Fe=e=>{const t=e.target.getBoundingClientRect(),r=e.touches[0].clientX-t.left;return Math.round(r)},y=(e,t)=>t>1?Math.round(e/t)*t:e,z=(e,t)=>[y(e[0],t),y(e[1],t)],Oe=(e,t,r,u,s)=>{let m=e;if(t){const i=r;m=typeof e=="number"?e:Math.round((u-s)/(i-1))}return m},re=e=>a.jsx("div",{className:"tooltip",style:{transform:e.transform,visibility:e.display?"visible":"hidden"},children:e.children});b.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onChange:{required:!1,tsType:{name:"any"},description:""},onChangeAfter:{required:!1,tsType:{name:"any"},description:""},max:{required:!1,tsType:{name:"number"},description:`The greatest value in the range of permitted values
@default 100`,defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`The lowest value in the range of permitted values
@default 0`,defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"Specifies the value granularity",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled"},"aria-label":{required:!1,tsType:{name:"string"},description:"String value that labels the slider"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element that labels the slider"},"aria-valuetext":{required:!1,tsType:{name:"string"},description:"Human readable text alternative for the value"},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.04",computed:!1}},markers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},markerCount:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"10",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const We={title:"Forms/Slider"},C=()=>{const[e,t]=o.useState(2e4);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(b,{onChange:r=>t(r),value:e,min:1e4,max:6e4,step:10}),a.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},V=()=>{const[e,t]=o.useState(2e4);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(b,{onChange:r=>t(r),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:30,step:"auto"}),a.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},S=()=>{const[e,t]=o.useState(2e4);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(b,{onChange:r=>t(r),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:"auto",step:2e3}),a.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},j=()=>{const[e,t]=o.useState(3);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(b,{onChange:r=>t(r),value:e,min:0,max:6,showTooltip:!0,markers:!0,markerCount:"auto"}),a.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},R=()=>{const[e,t]=o.useState([1e3,5008970]);return a.jsxs("div",{children:[a.jsxs("output",{children:[e[0]," - ",e[1]]}),a.jsx(b,{values:e,onChange:r=>t(r),min:1e3,max:1e7,step:1e3,showTooltip:!0,markers:!0}),a.jsx("button",{onClick:()=>t([1e3,5008970]),children:"Reset"})]})},T=()=>{const[e,t]=o.useState(625e3);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(b,{onChange:r=>t(r),value:e,disabled:!0,min:1e3,max:1e7,step:1e3})]})},A=()=>{const[e,t]=o.useState(625e3),[r,u]=o.useState(e);return a.jsxs("div",{children:[a.jsx("output",{children:r}),a.jsx(b,{onChange:s=>t(s),onChangeAfter:s=>u(s),value:e,min:1e3,max:1e7,step:1e3})]})};C.__docgenInfo={description:"",methods:[],displayName:"Regular"};V.__docgenInfo={description:"",methods:[],displayName:"Regular2"};S.__docgenInfo={description:"",methods:[],displayName:"Regular3"};j.__docgenInfo={description:"",methods:[],displayName:"Regular4"};R.__docgenInfo={description:"",methods:[],displayName:"Range"};T.__docgenInfo={description:"",methods:[],displayName:"Disabled"};A.__docgenInfo={description:"",methods:[],displayName:"ChangeAfter"};var ne,ae,se;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={10} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(se=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ue,le;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount={30} step="auto" />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(le=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};var ie,ce,de;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount="auto" step={2000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(de=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,me,fe;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={0} max={6} showTooltip markers markerCount="auto" />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(fe=(me=j.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var he,ge,ve;R.parameters={...R.parameters,docs:{...(he=R.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 5008970]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={1000} max={10_000_000} step={1000} showTooltip markers />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>;
}`,...(ve=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,xe,ye;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(ye=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var we,ke,Ce;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);
  return <div>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Ce=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};const Ye=["Regular","Regular2","Regular3","Regular4","Range","Disabled","ChangeAfter"];export{A as ChangeAfter,T as Disabled,R as Range,C as Regular,V as Regular2,S as Regular3,j as Regular4,Ye as __namedExportsOrder,We as default};
