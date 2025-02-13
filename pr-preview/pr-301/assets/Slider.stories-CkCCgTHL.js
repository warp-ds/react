import{j as n}from"./index-DSOYRR-y.js";import{r as o}from"./index-RYns6xqu.js";import"./unstyled-heading-B2wjEl7S.js";import"./help-text-BWbwCBp4.js";import"./component-CA_utTiw.js";import"./component-DGkHE89C.js";import"./component-CPUGlFdC.js";import"./component-CFTMq9rF.js";import"./component-C2cg9OAn.js";import"./component-DfcuE9an.js";import"./component-Dl300uvO.js";import"./component-DEMQPCsw.js";import"./component-BOaFOH0e.js";import"./component-DXMdkRbQ.js";import"./component-BnN6aAmj.js";import"./component-BoklHLeD.js";import"./step-U_ZgDATq.js";import"./component-BUVcJvVe.js";import"./component-tabs-CEajmaHx.js";import"./component-BqfkGBST.js";import{T as oe}from"./component-DwXPycX6.js";import"./component-Blth2Uzk.js";import"./Pagination-B6VpBs_V.js";import"./index.m-CtIADANO.js";import"./close-16-cHDvCKuO.js";import"./index-C6dB-k_R.js";import"./item-BU3_qfee.js";import"./info-16-CkEITmUl.js";import"./i18n-BJez-btc.js";import"./chevron-down-16-yi201Ybz.js";const Oe=`
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
      transform: translateY(-6px);
      grid-auto-flow: column;
      grid-template-columns: max-content;
      justify-items: end;
      color:rgb(173, 173, 173);
      pointer-events: none;
      grid-column: 1;
      align-self: end;
      margin: 0px -2px;
      grid-auto-columns: minmax(0, 1fr);

      .marker {
          display: grid;
          justify-items: center;
          grid-row-gap: 3.5px;

          > div:nth-child(1) {
              height: 11px;
              overflow: hidden;
          }
          > div:nth-child(2) {
              width: 0;
              overflow: visible;
              display: grid;
              justify-content: center;
          }
      }
  }
  .inputs {
      display: grid;
      grid-template-columns: 1fr 1fr;
  }
  .inputs.dual {
      grid-gap: 2rem;
  }
`;function b({min:e=0,max:t=100,step:a=1,value:u,values:s,disabled:f,onChange:p,onChangeAfter:k,"aria-label":v,"aria-labelledby":N,"aria-valuetext":Ie,keyboardStepFactor:Me=.04,showTooltip:Ne=!1,markers:B=!1,markerCount:O=10,input:H=!1}){const d=(s?"range":"standard")==="range",m=o.useMemo(()=>Pe(a,B,O,t,e),[]),q=()=>s?L(s,m):[e,w(u,m)],[i,G]=o.useState(()=>q()),[J,E]=o.useState(()=>q()),[U,X]=o.useState(!1),Y=o.useRef(null),C=o.useRef(null),h=o.useRef(null),g=o.useRef(null),Q=o.useRef(0);o.useEffect(()=>{if(Ye(u,s,e,t),!(document.activeElement===h.current||document.activeElement===g.current)){const r=q();G(r),s?E(s):u&&E([0,u]),ue(Y,r,C,d,t,e,m),j({values:s,value:u},d,h,g)}},[s,u]),o.useEffect(()=>{j({values:s,value:u},d,h,g)},[h.current,g.current]),o.useEffect(()=>{!U&&k&&k(d?i:i[1])},[U,i]),o.useEffect(()=>{h.current&&h.current.setAttribute("value",i[0]),g.current&&g.current.setAttribute("value",i[1])},[i]);const $=o.useCallback((r,l)=>{const c={left:-1,right:1},V=t*Me,y=i[l]+c[r]*V,x=P(y,l,d,i,e,t,m,!0);j({values:x,value:y},d,h,g),D(x,l)},[i]),qe=o.useCallback((r,l)=>{["ArrowUp","ArrowDown"].includes(r.key)&&r.preventDefault(),["ArrowLeft","ArrowRight"].includes(r.key)&&(X(!0),r.key==="ArrowLeft"&&$("left",l),r.key==="ArrowRight"&&$("right",l))},[$]),Z=o.useCallback(r=>{if(setTimeout(()=>{X(!0)},1),!f&&r.target.nodeName!=="INPUT"){const l=r.touches?Ke(r):r.nativeEvent.offsetX,c=C.current.clientWidth,V=w(l/c*(t-e)+e,m),y=(i[0]+i[1])/2,x=V>w(y,m)?1:0,W=P(V,x,d,i,e,t,m);D(W,x),j({values:W,value:W[1]},d,h,g)}},[s,u,i]),D=o.useCallback((r,l,c=!1)=>{var y,x;const V=[r[0],r[1]];if(clearTimeout(Q.current),d){const We=w(r[1]-r[0],m)/(t-e)*(((y=C.current)==null?void 0:y.clientWidth)||500),se=(t-e)/(((x=C.current)==null?void 0:x.clientWidth)||500);We<24&&(l==0?r[0]=r[1]-se*24:r[1]=r[0]+se*24,j({values:r,value:r[1]},d,h,g))}Q.current=setTimeout(()=>{r=_e(r,e,t),G(r),H&&E(c?V:r),p&&p(d?[Math.round(r[0]),Math.round(r[1])]:Math.round(r[1]))},1),ue(Y,r,C,d,t,e,m)},[]),Ee=o.useCallback((r,l)=>{const c=P(+r.target.value,l,d,i,e,t,m);D(c,l)},[i]),F=()=>{ee()},ee=()=>{X(!1)},te=(r,l)=>{const c=l==1?[i[0],+r.target.value]:[+r.target.value,i[1]];c[0]>=e&&c[1]<=t&&!(c[1]<c[0])?D(c,l,!0):(console.warn("Input outside range."),E(c))},re=o.useCallback((r,l)=>f?n.jsx("input",{type:"range",disabled:!0,value:i[r],min:e,max:t}):n.jsx("input",{ref:l,type:"range",step:m,min:e,max:t,onKeyDown:c=>qe(c,r),onKeyUp:ee,onChange:c=>Ee(c,r),...Xe({ariaLabel:v,ariaLabelledBy:N,ariaValueText:Ie})}),[i]),De=o.useMemo(()=>O==="auto"&&typeof m=="number"?(t-e)/m+1:O,[]),Fe=o.useCallback(()=>Array.from(Array(De).keys()).map(r=>n.jsxs("div",{className:"marker",children:[n.jsx("div",{children:"|"}),n.jsx("div",{children:r})]},r)),[]),K=Ne&&U;let ne=0,ae=0;return K&&([ne,ae]=Ue(q(),t,e)),n.jsxs(n.Fragment,{children:[n.jsx("style",{children:Oe}),n.jsxs("div",{className:"ccSlider.wrapper wrapper",onContextMenu:r=>r.preventDefault(),children:[n.jsxs("div",{className:"active-track",ref:Y,children:[n.jsx(ie,{display:K&&d,top:document.activeElement===h.current,transform:`translateY(-50px) translateX(calc(-50% + ${ne}px))`,children:i[0]}),n.jsx(ie,{display:K,top:document.activeElement===g.current,transform:`translateY(-50px) translateX(calc(50% + ${ae}px))`,children:i[1]})]}),n.jsxs("div",{className:"input-wrapper",ref:C,onMouseDown:Z,onTouchStart:Z,onKeyUp:F,onMouseUp:F,onTouchEnd:F,onMouseOut:F,children:[d&&re(0,h),re(1,g),n.jsx("div",{className:"steps",children:B&&Fe()})]}),H&&n.jsxs("div",{className:`inputs ${d?"dual":""}`,children:[d&&n.jsx(oe,{value:J[0].toString(),onChange:r=>te(r,0)}),n.jsx(oe,{value:J[1].toString(),onChange:r=>te(r,1)})]})]})]})}const Ue=(e,t,a)=>{const u=-((e[0]-a)/(t-a)-.5)*24,s=-((e[1]-a)/(t-a)-.5)*24;return[u,s]};function Xe({ariaLabel:e,ariaLabelledBy:t,ariaValueText:a}){return{"aria-label":e,"aria-labelledby":t,"aria-valuetext":a}}function z(e,t,a){return Math.min(Math.max(e,t),a)}function Ye(e,t,a,u){(e&&e<a||t&&t[0]<a)&&console.warn("Value too low."),(e&&e>u||t&&t[1]>u)&&console.warn("Value too high.")}function j({value:e,values:t},a,u,s){a?(u.current&&(u.current.value=t[0]),s.current&&(s.current.value=t[1])):s.current&&(s.current.value=e)}const P=(e,t=1,a,u,s,f,p,k=!1)=>{let v;return e=Math.round(e),a?t===1?v=[u[0],e]:v=[e,u[1]]:v=[s,e],k?_e(L(v,p),s,f):L(v,p)},$e=(e,t,a,u,s,f)=>{var N;let p=w(e[1]-e[0],f)/(u-s);const k=((N=t.current)==null?void 0:N.clientWidth)||500;(p<0||p>1)&&(console.warn("Values outside of range."),p=z(p,0,1));const v=a?(e[0]-s)/(u-s)*k:0;return`
    width: ${p*100+"%"};
    margin-left: ${v+"px"};`},ue=(e,t,a,u,s,f,p)=>{e.current&&(e.current.style.cssText=$e(t,a,u,s,f,p))},_e=(e,t,a)=>[z(e[0],t,a),z(e[1],t,a)],Ke=e=>{const t=e.target.getBoundingClientRect(),a=e.touches[0].clientX-t.left;return Math.round(a)},w=(e,t)=>t>1?Math.round(e/t)*t:e,L=(e,t)=>[w(e[0],t),w(e[1],t)],Pe=(e,t,a,u,s)=>{let f=e;if(t){const p=a;f=typeof e=="number"?e:Math.round((u-s)/(p-1))}return f},ie=e=>n.jsx("div",{className:"tooltip",style:{transform:e.transform,visibility:e.display?"visible":"hidden",zIndex:e.top?10:1},children:Math.round(e.children)});b.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onChange:{required:!1,tsType:{name:"any"},description:""},onChangeAfter:{required:!1,tsType:{name:"any"},description:""},max:{required:!1,tsType:{name:"number"},description:`The greatest value in the range of permitted values
@default 100`,defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`The lowest value in the range of permitted values
@default 0`,defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"Specifies the value granularity",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled"},"aria-label":{required:!1,tsType:{name:"string"},description:"String value that labels the slider"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element that labels the slider"},"aria-valuetext":{required:!1,tsType:{name:"string"},description:"Human readable text alternative for the value"},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.04",computed:!1}},markers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},markerCount:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"10",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},input:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ct={title:"Forms/Slider"},S=()=>{const[e,t]=o.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(b,{onChange:a=>t(a),value:e,min:1e4,max:6e4,step:10,input:!0}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},T=()=>{const[e,t]=o.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(b,{onChange:a=>t(a),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:30,step:"auto"}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},R=()=>{const[e,t]=o.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(b,{onChange:a=>t(a),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:"auto",step:2e3}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},A=()=>{const[e,t]=o.useState(3);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(b,{onChange:a=>t(a),value:e,min:0,max:6,showTooltip:!0,markers:!0,markerCount:"auto",input:!0}),n.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},_=()=>{const[e,t]=o.useState([1e3,5008970]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(b,{values:e,onChange:a=>t(a),min:1e3,max:1e7,step:1e3,showTooltip:!0,markers:!0,input:!0}),n.jsx("button",{onClick:()=>t([1e3,5008970]),children:"Reset"})]})},I=()=>{const[e,t]=o.useState(625e3);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(b,{onChange:a=>t(a),value:e,disabled:!0,min:1e3,max:1e7,step:1e3})]})},M=()=>{const[e,t]=o.useState(625e3),[a,u]=o.useState(e);return n.jsxs("div",{children:[n.jsx("output",{children:a}),n.jsx(b,{onChange:s=>t(s),onChangeAfter:s=>u(s),value:e,min:1e3,max:1e7,step:1e3})]})};S.__docgenInfo={description:"",methods:[],displayName:"Regular"};T.__docgenInfo={description:"",methods:[],displayName:"Regular2"};R.__docgenInfo={description:"",methods:[],displayName:"Regular3"};A.__docgenInfo={description:"",methods:[],displayName:"Regular4"};_.__docgenInfo={description:"",methods:[],displayName:"Range"};I.__docgenInfo={description:"",methods:[],displayName:"Disabled"};M.__docgenInfo={description:"",methods:[],displayName:"ChangeAfter"};var le,ce,de;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={10} input />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(de=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,me,fe;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount={30} step="auto" />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(fe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var he,ge,ve;R.parameters={...R.parameters,docs:{...(he=R.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount="auto" step={2000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(ve=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var xe,be,ye;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={0} max={6} showTooltip markers markerCount="auto" input />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(ye=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var we,ke,Ce;_.parameters={..._.parameters,docs:{...(we=_.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 5008970]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={1000} max={10_000_000} step={1000} showTooltip markers input />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>;
}`,...(Ce=(ke=_.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var Ve,je,Se;I.parameters={...I.parameters,docs:{...(Ve=I.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Se=(je=I.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var Te,Re,Ae;M.parameters={...M.parameters,docs:{...(Te=M.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);
  return <div>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Ae=(Re=M.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source}}};const Vt=["Regular","Regular2","Regular3","Regular4","Range","Disabled","ChangeAfter"];export{M as ChangeAfter,I as Disabled,_ as Range,S as Regular,T as Regular2,R as Regular3,A as Regular4,Vt as __namedExportsOrder,Ct as default};
