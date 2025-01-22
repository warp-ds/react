import{j as n}from"./jsx-runtime-DEdD30eg.js";import{r as o}from"./index-RYns6xqu.js";const Ve=`
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
      border-radius: 5px;
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
      span {
          grid-row: 1;
          grid-column: 1;
          color: grey;
          width: 0px;
          width: 100px;
          position: fixed;
          margin: auto auto;
          text-align: center;
      }
      span:nth-child(1) {
          left: 0;
          transform: translateY(-39px) translateX(-50%);
      }
      span:nth-child(2) {
          right: 0;
          transform: translateY(-39px) translateX(50%);
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
`;function b({min:e=0,max:t=100,step:a=1,value:u,values:s,disabled:m,onChange:i,onChangeAfter:x,"aria-label":g,"aria-labelledby":A,"aria-valuetext":ve,keyboardStepFactor:be=.04,showTooltip:xe=!1,markers:P=!1,markerCount:I=10}){const d=(s?"range":"standard")==="range",p=o.useMemo(()=>Ae(a,P,I,t,e),[]),$=()=>s?O(s,p):[e,y(u,p)],[l,z]=o.useState(()=>$()),[E,D]=o.useState(!1),F=o.useRef(null),_=o.useRef(null),f=o.useRef(null),h=o.useRef(null),B=o.useRef(0);o.useEffect(()=>{if(je(u,s,e,t),!(document.activeElement===f.current||document.activeElement===h.current)){const r=$();z(r),J(F,r,_,d,t,e,p),k({values:r,value:u},d,f,h)}},[s,u]),o.useEffect(()=>{k({values:s,value:u},d,f,h)},[f.current,h.current]),o.useEffect(()=>{!E&&x&&x(d?l:l[1])},[E,l]),o.useEffect(()=>{f.current&&f.current.setAttribute("value",l[0]),h.current&&h.current.setAttribute("value",l[1])},[l]);const U=o.useCallback((r,c)=>{const v={left:-1,right:1},q=t*be,N=l[c]+v[r]*q,w=W(N,c,d,l,e,t,p,!0);k({values:w,value:N},d,f,h),X(w,c)},[l]),ye=o.useCallback((r,c)=>{(r.key==="ArrowUp"||r.key==="ArrowDown")&&r.preventDefault(),D(!0),r.key==="ArrowLeft"&&U("left",c),r.key==="ArrowRight"&&U("right",c)},[U]),H=o.useCallback(r=>{if(setTimeout(()=>{D(!0)},1),!m&&r.target.nodeName!=="INPUT"){const c=r.touches?Te(r):r.nativeEvent.offsetX,v=_.current.clientWidth,q=y(c/v*(t-e)+e,p),N=(l[0]+l[1])/2,w=q>y(N,p)?1:0,K=W(q,w,d,l,e,t,p);X(K,w),k({values:K,value:K[1]},d,f,h)}},[s,u,l]),X=o.useCallback((r,c)=>{clearTimeout(B.current),r[0]>r[1]&&(c==0?r[0]=r[1]:r[1]=r[0],k({values:r,value:r[1]},d,f,h)),B.current=setTimeout(()=>{r=ge(r,e,t),z(r),i&&i(d?r:r[1])},1),J(F,r,_,d,t,e,p)},[]),we=o.useCallback((r,c)=>{const v=W(+r.target.value,c,d,l,e,t,p);X(v,c)},[l]),M=()=>{L()};function L(){D(!1)}const G=o.useCallback((r,c)=>m?n.jsx("input",{type:"range",disabled:!0,value:l[r],min:e,max:t}):n.jsx("input",{ref:c,type:"range",step:p,min:e,max:t,onKeyDown:v=>ye(v,r),onKeyUp:L,onChange:v=>we(v,r),...Se({ariaLabel:g,ariaLabelledBy:A,ariaValueText:ve})}),[l]),ke=o.useMemo(()=>I==="auto"&&typeof p=="number"?(t-e)/p+1:I,[]),Ce=o.useCallback(()=>Array.from(Array(ke).keys()).map(r=>n.jsx("div",{children:"|"},r)),[]);return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:Ve}),n.jsxs("div",{className:"ccSlider.wrapper wrapper",onContextMenu:r=>r.preventDefault(),children:[n.jsx("div",{className:"active-track",ref:F,children:xe&&E&&n.jsxs(n.Fragment,{children:[n.jsx("span",{children:d&&l[0]}),n.jsx("span",{children:l[1]})]})}),n.jsxs("div",{className:"input-wrapper",ref:_,onMouseDown:H,onTouchStart:H,onKeyUp:M,onMouseUp:M,onTouchEnd:M,onMouseOut:M,children:[G(1,h),d&&G(0,f),n.jsx("div",{className:"steps",children:P&&Ce()})]})]})]})}function Se({ariaLabel:e,ariaLabelledBy:t,ariaValueText:a}){return{"aria-label":e,"aria-labelledby":t,"aria-valuetext":a}}function Y(e,t,a){return Math.min(Math.max(e,t),a)}function je(e,t,a,u){(e&&e<a||t&&t[0]<a)&&console.warn("Value too low."),(e&&e>u||t&&t[1]>u)&&console.warn("Value too high.")}function k({value:e,values:t},a,u,s){a?(u.current&&(u.current.value=t[0]),s.current&&(s.current.value=t[1])):s.current&&(s.current.value=e)}const W=(e,t=1,a,u,s,m,i,x=!1)=>{let g;return e=Math.round(e),a?t===1?g=[u[0],e]:g=[e,u[1]]:g=[s,e],x?ge(O(g,i),s,m):O(g,i)},Re=(e,t,a,u,s,m)=>{var A;let i=y(e[1]-e[0],m)/(u-s);const x=((A=t.current)==null?void 0:A.clientWidth)||500;(i<0||i>1)&&(console.warn("Values outside of range."),i=Y(i,0,1));const g=a?(e[0]-s)/(u-s)*x:0;return`
    width: ${i*100+"%"};
    margin-left: ${g+"px"};`},J=(e,t,a,u,s,m,i)=>{e.current&&(e.current.style.cssText=Re(t,a,u,s,m,i))},ge=(e,t,a)=>[Y(e[0],t,a),Y(e[1],t,a)],Te=e=>{const t=e.target.getBoundingClientRect(),a=e.touches[0].clientX-t.left;return Math.round(a)},y=(e,t)=>t>1?Math.round(e/t)*t:e,O=(e,t)=>[y(e[0],t),y(e[1],t)],Ae=(e,t,a,u,s)=>{let m=e;if(t){const i=a;m=typeof e=="number"?e:Math.round((u-s)/(i-1))}return m};b.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onChange:{required:!1,tsType:{name:"any"},description:""},onChangeAfter:{required:!1,tsType:{name:"any"},description:""},max:{required:!1,tsType:{name:"number"},description:`The greatest value in the range of permitted values
@default 100`,defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`The lowest value in the range of permitted values
@default 0`,defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"Specifies the value granularity",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled"},"aria-label":{required:!1,tsType:{name:"string"},description:"String value that labels the slider"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element that labels the slider"},"aria-valuetext":{required:!1,tsType:{name:"string"},description:"Human readable text alternative for the value"},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.04",computed:!1}},markers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},markerCount:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"10",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ne={title:"Forms/Slider"},C=()=>{const[e,t]=o.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(b,{onChange:a=>t(a),value:e,min:1e4,max:6e4,step:10}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},V=()=>{const[e,t]=o.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(b,{onChange:a=>t(a),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:30,step:"auto"}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},S=()=>{const[e,t]=o.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(b,{onChange:a=>t(a),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:"auto",step:2e3}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},j=()=>{const[e,t]=o.useState([1e3,5008970]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(b,{values:e,onChange:a=>t(a),min:1e3,max:1e7,step:1e3,showTooltip:!0,markers:!0}),n.jsx("button",{onClick:()=>t([1e3,5008970]),children:"Reset"})]})},R=()=>{const[e,t]=o.useState(625e3);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(b,{onChange:a=>t(a),value:e,disabled:!0,min:1e3,max:1e7,step:1e3})]})},T=()=>{const[e,t]=o.useState(625e3),[a,u]=o.useState(e);return n.jsxs("div",{children:[n.jsx("output",{children:a}),n.jsx(b,{onChange:s=>t(s),onChangeAfter:s=>u(s),value:e,min:1e3,max:1e7,step:1e3})]})};C.__docgenInfo={description:"",methods:[],displayName:"Regular"};V.__docgenInfo={description:"",methods:[],displayName:"Regular2"};S.__docgenInfo={description:"",methods:[],displayName:"Regular3"};j.__docgenInfo={description:"",methods:[],displayName:"Range"};R.__docgenInfo={description:"",methods:[],displayName:"Disabled"};T.__docgenInfo={description:"",methods:[],displayName:"ChangeAfter"};var Q,Z,ee;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={10} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ne;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount={30} step="auto" />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(ne=(re=V.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,se,oe;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount="auto" step={2000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(oe=(se=S.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ue,le,ie;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 5008970]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={1000} max={10_000_000} step={1000} showTooltip markers />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>;
}`,...(ie=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,pe;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(pe=(de=R.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,fe,he;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);
  return <div>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(he=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};const Ie=["Regular","Regular2","Regular3","Range","Disabled","ChangeAfter"];export{T as ChangeAfter,R as Disabled,j as Range,C as Regular,V as Regular2,S as Regular3,Ie as __namedExportsOrder,Ne as default};
