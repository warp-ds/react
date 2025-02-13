import{j as n}from"./index-DSOYRR-y.js";import{r as o}from"./index-RYns6xqu.js";import"./unstyled-heading-B2wjEl7S.js";import"./help-text-BWbwCBp4.js";import"./component-CA_utTiw.js";import"./component-DGkHE89C.js";import"./component-CPUGlFdC.js";import"./component-CFTMq9rF.js";import"./component-C2cg9OAn.js";import"./component-DfcuE9an.js";import"./component-Dl300uvO.js";import"./component-DEMQPCsw.js";import"./component-BOaFOH0e.js";import"./component-DXMdkRbQ.js";import"./component-BnN6aAmj.js";import"./component-BoklHLeD.js";import"./step-U_ZgDATq.js";import"./component-BUVcJvVe.js";import"./component-tabs-CEajmaHx.js";import"./component-BqfkGBST.js";import{T as ie}from"./component-DwXPycX6.js";import"./component-Blth2Uzk.js";import"./Pagination-B6VpBs_V.js";import"./index.m-CtIADANO.js";import"./close-16-cHDvCKuO.js";import"./index-C6dB-k_R.js";import"./item-BU3_qfee.js";import"./info-16-CkEITmUl.js";import"./i18n-BJez-btc.js";import"./chevron-down-16-yi201Ybz.js";const $e=`
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
`;function x({min:e=0,max:t=100,step:a=1,value:u,values:s,disabled:f,onChange:p,onChangeAfter:C,"aria-label":v,"aria-labelledby":q,"aria-valuetext":De,keyboardStepFactor:Fe=.04,showTooltip:We=!1,markers:G=!1,markerCount:X=10,input:J=!1}){const d=(s?"range":"standard")==="range",m=o.useMemo(()=>He(a,G,X,t,e),[]),E=()=>s?H(s,m):[e,k(u,m)],[l,Q]=o.useState(()=>E()),[Z,D]=o.useState(()=>E()),[Y,$]=o.useState(!1),K=o.useRef(null),V=o.useRef(null),h=o.useRef(null),g=o.useRef(null),ee=o.useRef(0);o.useEffect(()=>{if(ze(u,s,e,t),!(document.activeElement===h.current||document.activeElement===g.current)){const r=E();Q(r),s?D(s):u&&D([0,u]),le(K,r,V,d,t,e,m),j({values:s,value:u},d,h,g)}},[s,u]),o.useEffect(()=>{j({values:s,value:u},d,h,g)},[h.current,g.current]),o.useEffect(()=>{!Y&&C&&C(d?l:l[1])},[Y,l]),o.useEffect(()=>{h.current&&h.current.setAttribute("value",l[0]),g.current&&g.current.setAttribute("value",l[1])},[l]);const P=o.useCallback((r,i)=>{const c={left:-1,right:1},b=t*Fe,w=l[i]+c[r]*b,y=L(w,i,d,l,e,t,m,!0);j({values:y,value:w},d,h,g),F(y,i)},[l]),Oe=o.useCallback((r,i)=>{["ArrowUp","ArrowDown"].includes(r.key)&&r.preventDefault(),["ArrowLeft","ArrowRight"].includes(r.key)&&($(!0),r.key==="ArrowLeft"&&P("left",i),r.key==="ArrowRight"&&P("right",i))},[P]),te=o.useCallback(r=>{if(setTimeout(()=>{$(!0)},1),!f&&r.target.nodeName!=="INPUT"){const i=r.touches?Be(r):r.nativeEvent.offsetX,c=V.current.clientWidth,b=k(i/c*(t-e)+e,m),w=(l[0]+l[1])/2,y=b>k(w,m)?1:0,U=L(b,y,d,l,e,t,m);F(U,y),j({values:U,value:U[1]},d,h,g)}},[s,u,l]),F=o.useCallback((r,i,c=!1)=>{var w,y;const b=[r[0],r[1]];if(clearTimeout(ee.current),d){const Ye=k(r[1]-r[0],m)/(t-e)*(((w=V.current)==null?void 0:w.clientWidth)||500),ue=(t-e)/(((y=V.current)==null?void 0:y.clientWidth)||500);Ye<24&&(i==0?r[0]=r[1]-ue*24:r[1]=r[0]+ue*24,j({values:r,value:r[1]},d,h,g))}ee.current=setTimeout(()=>{r=Ee(r,e,t),Q(r),J&&D(c?b:r),p&&p(d?[Math.round(r[0]),Math.round(r[1])]:Math.round(r[1]))},1),le(K,r,V,d,t,e,m)},[]),Ue=o.useCallback((r,i)=>{const c=L(+r.target.value,i,d,l,e,t,m);F(c,i)},[l]),W=()=>{re()},re=()=>{$(!1)},ne=(r,i)=>{const c=i==1?[l[0],+r.target.value]:[+r.target.value,l[1]];c[0]>=e&&c[1]<=t&&!(c[1]<c[0])?F(c,i,!0):(console.warn("Input outside range."),D(c))},ae=o.useCallback((r,i)=>f?n.jsx("input",{type:"range",disabled:!0,value:l[r],min:e,max:t}):n.jsx("input",{ref:i,type:"range",step:m,min:e,max:t,onKeyDown:c=>Oe(c,r),onKeyUp:re,onChange:c=>Ue(c,r),...Pe({ariaLabel:v,ariaLabelledBy:q,ariaValueText:De})}),[l]),O=o.useMemo(()=>X==="auto"&&typeof m=="number"?(t-e)/m+1:X,[]),Xe=o.useCallback(()=>Array.from(Array(O).keys()).map(r=>{let i="";if(O<15)if(t<100)i=(t-e)/(O-1)*r+e;else{i=(t-e)/(O-1)*r+e;const c=t.toString().length-1,b=Ge(i/t,1);i=b>0?b+"e"+c:0}return n.jsxs("div",{className:"marker",children:[n.jsx("div",{children:"|"}),n.jsx("div",{children:i})]},r)}),[]),z=We&&Y;let se=0,oe=0;return z&&([se,oe]=Ke(E(),t,e)),n.jsxs(n.Fragment,{children:[n.jsx("style",{children:$e}),n.jsxs("div",{className:"ccSlider.wrapper wrapper",onContextMenu:r=>r.preventDefault(),children:[n.jsxs("div",{className:"active-track",ref:K,children:[n.jsx(ce,{display:z&&d,top:document.activeElement===h.current,transform:`translateY(-50px) translateX(calc(-50% + ${se}px))`,children:l[0]}),n.jsx(ce,{display:z,top:document.activeElement===g.current,transform:`translateY(-50px) translateX(calc(50% + ${oe}px))`,children:l[1]})]}),n.jsxs("div",{className:"input-wrapper",ref:V,onMouseDown:te,onTouchStart:te,onKeyUp:W,onMouseUp:W,onTouchEnd:W,onMouseOut:W,children:[d&&ae(0,h),ae(1,g),n.jsx("div",{className:"steps",children:G&&Xe()})]}),J&&n.jsxs("div",{className:`inputs ${d?"dual":""}`,children:[d&&n.jsx(ie,{value:Z[0].toString(),onChange:r=>ne(r,0)}),n.jsx(ie,{value:Z[1].toString(),onChange:r=>ne(r,1)})]})]})]})}const Ke=(e,t,a)=>{const u=-((e[0]-a)/(t-a)-.5)*24,s=-((e[1]-a)/(t-a)-.5)*24;return[u,s]};function Pe({ariaLabel:e,ariaLabelledBy:t,ariaValueText:a}){return{"aria-label":e,"aria-labelledby":t,"aria-valuetext":a}}function B(e,t,a){return Math.min(Math.max(e,t),a)}function ze(e,t,a,u){(e&&e<a||t&&t[0]<a)&&console.warn("Value too low."),(e&&e>u||t&&t[1]>u)&&console.warn("Value too high.")}function j({value:e,values:t},a,u,s){a?(u.current&&(u.current.value=t[0]),s.current&&(s.current.value=t[1])):s.current&&(s.current.value=e)}const L=(e,t=1,a,u,s,f,p,C=!1)=>{let v;return e=Math.round(e),a?t===1?v=[u[0],e]:v=[e,u[1]]:v=[s,e],C?Ee(H(v,p),s,f):H(v,p)},Le=(e,t,a,u,s,f)=>{var q;let p=k(e[1]-e[0],f)/(u-s);const C=((q=t.current)==null?void 0:q.clientWidth)||500;(p<0||p>1)&&(console.warn("Values outside of range."),p=B(p,0,1));const v=a?(e[0]-s)/(u-s)*C:0;return`
    width: ${p*100+"%"};
    margin-left: ${v+"px"};`},le=(e,t,a,u,s,f,p)=>{e.current&&(e.current.style.cssText=Le(t,a,u,s,f,p))},Ee=(e,t,a)=>[B(e[0],t,a),B(e[1],t,a)],Be=e=>{const t=e.target.getBoundingClientRect(),a=e.touches[0].clientX-t.left;return Math.round(a)},k=(e,t)=>t>1?Math.round(e/t)*t:e,H=(e,t)=>[k(e[0],t),k(e[1],t)],He=(e,t,a,u,s)=>{let f=e;if(t){const p=a;f=typeof e=="number"?e:Math.round((u-s)/(p-1))}return f};function Ge(e,t){const a=10**t;return Math.round(e*a)/a}const ce=e=>n.jsx("div",{className:"tooltip",style:{transform:e.transform,visibility:e.display?"visible":"hidden",zIndex:e.top?10:1},children:Math.round(e.children)});x.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onChange:{required:!1,tsType:{name:"any"},description:""},onChangeAfter:{required:!1,tsType:{name:"any"},description:""},max:{required:!1,tsType:{name:"number"},description:`The greatest value in the range of permitted values
@default 100`,defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`The lowest value in the range of permitted values
@default 0`,defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"Specifies the value granularity",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled"},"aria-label":{required:!1,tsType:{name:"string"},description:"String value that labels the slider"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element that labels the slider"},"aria-valuetext":{required:!1,tsType:{name:"string"},description:"Human readable text alternative for the value"},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.04",computed:!1}},markers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},markerCount:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"10",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},input:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Tt={title:"Forms/Slider"},S=()=>{const[e,t]=o.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(x,{onChange:a=>t(a),value:e,min:1e4,max:6e4,step:10,input:!0}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},R=()=>{const[e,t]=o.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(x,{onChange:a=>t(a),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:30,step:"auto"}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},T=()=>{const[e,t]=o.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(x,{onChange:a=>t(a),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:"auto",step:2e3}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},A=()=>{const[e,t]=o.useState(3);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(x,{onChange:a=>t(a),value:e,min:0,max:6,showTooltip:!0,markers:!0,markerCount:"auto",input:!0}),n.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},_=()=>{const[e,t]=o.useState(3);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(x,{onChange:a=>t(a),value:e,min:1,max:8,showTooltip:!0,markers:!0,markerCount:"auto",input:!0}),n.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},I=()=>{const[e,t]=o.useState([1e3,5008970]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(x,{values:e,onChange:a=>t(a),min:1e3,max:1e7,step:1e3,showTooltip:!0,markers:!0,input:!0}),n.jsx("button",{onClick:()=>t([1e3,5008970]),children:"Reset"})]})},M=()=>{const[e,t]=o.useState(625e3);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(x,{onChange:a=>t(a),value:e,disabled:!0,min:1e3,max:1e7,step:1e3})]})},N=()=>{const[e,t]=o.useState(625e3),[a,u]=o.useState(e);return n.jsxs("div",{children:[n.jsx("output",{children:a}),n.jsx(x,{onChange:s=>t(s),onChangeAfter:s=>u(s),value:e,min:1e3,max:1e7,step:1e3})]})};S.__docgenInfo={description:"",methods:[],displayName:"Regular"};R.__docgenInfo={description:"",methods:[],displayName:"Regular2"};T.__docgenInfo={description:"",methods:[],displayName:"Regular3"};A.__docgenInfo={description:"",methods:[],displayName:"Regular4"};_.__docgenInfo={description:"",methods:[],displayName:"Regular5"};I.__docgenInfo={description:"",methods:[],displayName:"Range"};M.__docgenInfo={description:"",methods:[],displayName:"Disabled"};N.__docgenInfo={description:"",methods:[],displayName:"ChangeAfter"};var de,pe,me;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={10} input />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(me=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var fe,he,ge;R.parameters={...R.parameters,docs:{...(fe=R.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount={30} step="auto" />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(ge=(he=R.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ve,be,xe;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount="auto" step={2000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(xe=(be=T.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var ye,we,ke;A.parameters={...A.parameters,docs:{...(ye=A.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={0} max={6} showTooltip markers markerCount="auto" input />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(ke=(we=A.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var Ce,Ve,je;_.parameters={..._.parameters,docs:{...(Ce=_.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={1} max={8} showTooltip markers markerCount="auto" input />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(je=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:je.source}}};var Se,Re,Te;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 5008970]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={1000} max={10_000_000} step={1000} showTooltip markers input />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>;
}`,...(Te=(Re=I.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var Ae,_e,Ie;M.parameters={...M.parameters,docs:{...(Ae=M.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Ie=(_e=M.parameters)==null?void 0:_e.docs)==null?void 0:Ie.source}}};var Me,Ne,qe;N.parameters={...N.parameters,docs:{...(Me=N.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);
  return <div>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(qe=(Ne=N.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};const At=["Regular","Regular2","Regular3","Regular4","Regular5","Range","Disabled","ChangeAfter"];export{N as ChangeAfter,M as Disabled,I as Range,S as Regular,R as Regular2,T as Regular3,A as Regular4,_ as Regular5,At as __namedExportsOrder,Tt as default};
