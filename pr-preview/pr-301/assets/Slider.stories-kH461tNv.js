import{j as a}from"./index-DSOYRR-y.js";import{r as u}from"./index-RYns6xqu.js";import"./unstyled-heading-B2wjEl7S.js";import"./help-text-BWbwCBp4.js";import"./component-CA_utTiw.js";import"./component-DGkHE89C.js";import"./component-CPUGlFdC.js";import"./component-CFTMq9rF.js";import"./component-C2cg9OAn.js";import"./component-DfcuE9an.js";import"./component-Dl300uvO.js";import"./component-DEMQPCsw.js";import"./component-BOaFOH0e.js";import"./component-DXMdkRbQ.js";import"./component-BnN6aAmj.js";import"./component-BoklHLeD.js";import"./step-U_ZgDATq.js";import"./component-BUVcJvVe.js";import"./component-tabs-CEajmaHx.js";import"./component-BqfkGBST.js";import{T as le}from"./component-DwXPycX6.js";import"./component-Blth2Uzk.js";import"./Pagination-B6VpBs_V.js";import"./index.m-CtIADANO.js";import"./close-16-cHDvCKuO.js";import"./index-C6dB-k_R.js";import"./item-BU3_qfee.js";import"./info-16-CkEITmUl.js";import"./i18n-BJez-btc.js";import"./chevron-down-16-yi201Ybz.js";const Ke=`
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
`;function x({min:e=0,max:t=100,step:n=1,value:o,values:s,disabled:m,onChange:p,onChangeAfter:C,"aria-label":v,"aria-labelledby":q,"aria-valuetext":Fe,keyboardStepFactor:We=.04,showTooltip:Oe=!1,markers:Q=!1,markerCount:U=10,showInputs:X=!1}){const d=(s?"range":"standard")==="range",f=u.useMemo(()=>Ge(n,Q,U,t,e),[]),E=()=>s?J(s,f):[e,k(o,f)],[l,Z]=u.useState(()=>E()),[Y,D]=u.useState(()=>E()),[$,K]=u.useState(!1),P=u.useRef(null),V=u.useRef(null),h=u.useRef(null),g=u.useRef(null),ee=u.useRef(0);u.useEffect(()=>{if(Le(o,s,e,t),!(document.activeElement===h.current||document.activeElement===g.current)){const r=E();Z(r),s?D(s):o&&D([0,o]),ce(P,r,V,d,t,e,f),j({values:s,value:o},d,h,g)}},[s,o]),u.useEffect(()=>{j({values:s,value:o},d,h,g)},[h.current,g.current]),u.useEffect(()=>{!$&&C&&C(d?l:l[1])},[$,l]),u.useEffect(()=>{h.current&&h.current.setAttribute("value",l[0]),g.current&&g.current.setAttribute("value",l[1])},[l]);const z=u.useCallback((r,i)=>{const c={left:-1,right:1},b=t*We,w=l[i]+c[r]*b,y=H(w,i,d,l,e,t,f,!0);j({values:y,value:w},d,h,g),F(y,i)},[l]),Ue=u.useCallback((r,i)=>{["ArrowUp","ArrowDown"].includes(r.key)&&r.preventDefault(),["ArrowLeft","ArrowRight"].includes(r.key)&&(K(!0),r.key==="ArrowLeft"&&z("left",i),r.key==="ArrowRight"&&z("right",i))},[z]),te=u.useCallback(r=>{if(setTimeout(()=>{K(!0)},1),!m&&r.target.nodeName!=="INPUT"){const i=r.touches?He(r):r.nativeEvent.offsetX,c=V.current.clientWidth,b=k(i/c*(t-e)+e,f),w=(l[0]+l[1])/2,y=b>k(w,f)?1:0,O=H(b,y,d,l,e,t,f);F(O,y),j({values:O,value:O[1]},d,h,g)}},[s,o,l]),F=u.useCallback((r,i,c=!1)=>{var w,y;const b=[r[0],r[1]];if(clearTimeout(ee.current),d){const $e=k(r[1]-r[0],f)/(t-e)*(((w=V.current)==null?void 0:w.clientWidth)||500),ie=(t-e)/(((y=V.current)==null?void 0:y.clientWidth)||500);$e<24&&(i==0?r[0]=r[1]-ie*24:r[1]=r[0]+ie*24,j({values:r,value:r[1]},d,h,g))}ee.current=setTimeout(()=>{r=De(r,e,t),Z(r),X&&D(c?b:r),p&&p(d?[Math.round(r[0]),Math.round(r[1])]:Math.round(r[1]))},1),ce(P,r,V,d,t,e,f)},[]),Xe=u.useCallback((r,i)=>{const c=H(+r.target.value,i,d,l,e,t,f);F(c,i)},[l]),W=()=>{re()},re=()=>{K(!1)},ne=(r,i)=>{const c=i==1?[l[0],+r.target.value]:[+r.target.value,l[1]];c[0]>=e&&c[1]<=t&&!(c[1]<c[0])?F(c,i,!0):(console.warn("Input outside range."),D(c))},ae=u.useCallback((r,i)=>m?a.jsx("input",{type:"range",disabled:!0,value:l[r],min:e,max:t}):a.jsx("input",{ref:i,type:"range",step:f,min:e,max:t,onKeyDown:c=>Ue(c,r),onKeyUp:re,onChange:c=>Xe(c,r),...ze({ariaLabel:v,ariaLabelledBy:q,ariaValueText:Fe})}),[l]),L=u.useMemo(()=>U==="auto"&&typeof f=="number"?(t-e)/f+1:U,[]),Ye=u.useCallback(()=>Array.from(Array(L).keys()).map(r=>{let i="";if(L<15&&(i=(t-e)/(L-1)*r+e,t>100)){const c=t.toString().length-1,b=Qe(i/t,1);i=b>0?b+"e"+c:0}return a.jsxs("div",{className:"marker",children:[a.jsx("div",{children:"|"}),a.jsx("div",{children:i})]},r)}),[]),B=Oe&&$;let se=0,oe=0;B&&([se,oe]=Pe(E(),t,e));const ue=X?Je(Y,e,t):[!0,!0];return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Ke}),a.jsxs("div",{className:"ccSlider.wrapper wrapper",onContextMenu:r=>r.preventDefault(),children:[a.jsxs("div",{className:"active-track",ref:P,children:[a.jsx(de,{display:B&&d,top:document.activeElement===h.current,transform:`translateY(-50px) translateX(calc(-50% + ${se}px))`,children:l[0]}),a.jsx(de,{display:B,top:document.activeElement===g.current,transform:`translateY(-50px) translateX(calc(50% + ${oe}px))`,children:l[1]})]}),a.jsxs("div",{className:"input-wrapper",ref:V,onMouseDown:te,onTouchStart:te,onKeyUp:W,onMouseUp:W,onTouchEnd:W,onMouseOut:W,children:[d&&ae(0,h),ae(1,g),a.jsx("div",{className:"steps",children:Q&&Ye()})]}),X&&a.jsxs("div",{className:`inputs ${d?"dual":""}`,children:[d&&a.jsx(le,{value:Y[0].toString(),invalid:!ue[0],onChange:r=>ne(r,0)}),a.jsx(le,{value:Y[1].toString(),invalid:!ue[1],onChange:r=>ne(r,1)})]})]})]})}const Pe=(e,t,n)=>{const o=-((e[0]-n)/(t-n)-.5)*24,s=-((e[1]-n)/(t-n)-.5)*24;return[o,s]};function ze({ariaLabel:e,ariaLabelledBy:t,ariaValueText:n}){return{"aria-label":e,"aria-labelledby":t,"aria-valuetext":n}}function G(e,t,n){return Math.min(Math.max(e,t),n)}function Le(e,t,n,o){(e&&e<n||t&&t[0]<n)&&console.warn("Value too low."),(e&&e>o||t&&t[1]>o)&&console.warn("Value too high.")}function j({value:e,values:t},n,o,s){n?(o.current&&(o.current.value=t[0]),s.current&&(s.current.value=t[1])):s.current&&(s.current.value=e)}const H=(e,t=1,n,o,s,m,p,C=!1)=>{let v;return e=Math.round(e),n?t===1?v=[o[0],e]:v=[e,o[1]]:v=[s,e],C?De(J(v,p),s,m):J(v,p)},Be=(e,t,n,o,s,m)=>{var q;let p=k(e[1]-e[0],m)/(o-s);const C=((q=t.current)==null?void 0:q.clientWidth)||500;(p<0||p>1)&&(console.warn("Values outside of range."),p=G(p,0,1));const v=n?(e[0]-s)/(o-s)*C:0;return`
    width: ${p*100+"%"};
    margin-left: ${v+"px"};`},ce=(e,t,n,o,s,m,p)=>{e.current&&(e.current.style.cssText=Be(t,n,o,s,m,p))},De=(e,t,n)=>[G(e[0],t,n),G(e[1],t,n)],He=e=>{const t=e.target.getBoundingClientRect(),n=e.touches[0].clientX-t.left;return Math.round(n)},k=(e,t)=>t>1?Math.round(e/t)*t:e,J=(e,t)=>[k(e[0],t),k(e[1],t)],Ge=(e,t,n,o,s)=>{let m=e;if(t){const p=n;m=typeof e=="number"?e:Math.round((o-s)/(p-1))}return m},de=e=>a.jsx("div",{className:"tooltip",style:{transform:e.transform,visibility:e.display?"visible":"hidden",zIndex:e.top?10:1},children:Math.round(e.children)});function Je([e,t],n,o){let s=!0,m=!0;return(e<n||e>o)&&(s=!1),(t>o||t<n)&&(m=!1),[s,m]}function Qe(e,t){const n=10**t;return Math.round(e*n)/n}x.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onChange:{required:!1,tsType:{name:"any"},description:""},onChangeAfter:{required:!1,tsType:{name:"any"},description:""},max:{required:!1,tsType:{name:"number"},description:`The greatest value in the range of permitted values
@default 100`,defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`The lowest value in the range of permitted values
@default 0`,defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"Specifies the value granularity",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled"},"aria-label":{required:!1,tsType:{name:"string"},description:"String value that labels the slider"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element that labels the slider"},"aria-valuetext":{required:!1,tsType:{name:"string"},description:"Human readable text alternative for the value"},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.04",computed:!1}},markers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},markerCount:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"10",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showInputs:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const It={title:"Forms/Slider"},S=()=>{const[e,t]=u.useState(2e4);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(x,{onChange:n=>t(n),value:e,min:1e4,max:6e4,step:10,showInputs:!0}),a.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},R=()=>{const[e,t]=u.useState(2e4);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(x,{onChange:n=>t(n),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:30,step:"auto"}),a.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},T=()=>{const[e,t]=u.useState(2e4);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(x,{onChange:n=>t(n),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:"auto",step:2e3}),a.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},A=()=>{const[e,t]=u.useState(3);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(x,{onChange:n=>t(n),value:e,min:0,max:6,showTooltip:!0,markers:!0,markerCount:"auto",showInputs:!0}),a.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},I=()=>{const[e,t]=u.useState(3);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(x,{onChange:n=>t(n),value:e,min:1,max:8,showTooltip:!0,markers:!0,markerCount:"auto",showInputs:!0}),a.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},_=()=>{const[e,t]=u.useState([1e3,5008970]);return a.jsxs("div",{children:[a.jsxs("output",{children:[e[0]," - ",e[1]]}),a.jsx(x,{values:e,onChange:n=>t(n),min:1e3,max:1e7,step:1e3,showTooltip:!0,markers:!0,showInputs:!0}),a.jsx("button",{onClick:()=>t([1e3,5008970]),children:"Reset"})]})},M=()=>{const[e,t]=u.useState(625e3);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(x,{onChange:n=>t(n),value:e,disabled:!0,min:1e3,max:1e7,step:1e3})]})},N=()=>{const[e,t]=u.useState(625e3),[n,o]=u.useState(e);return a.jsxs("div",{children:[a.jsx("output",{children:n}),a.jsx(x,{onChange:s=>t(s),onChangeAfter:s=>o(s),value:e,min:1e3,max:1e7,step:1e3})]})};S.__docgenInfo={description:"",methods:[],displayName:"Regular"};R.__docgenInfo={description:"",methods:[],displayName:"Regular2"};T.__docgenInfo={description:"",methods:[],displayName:"Regular3"};A.__docgenInfo={description:"",methods:[],displayName:"Regular4"};I.__docgenInfo={description:"",methods:[],displayName:"Regular5"};_.__docgenInfo={description:"",methods:[],displayName:"Range"};M.__docgenInfo={description:"",methods:[],displayName:"Disabled"};N.__docgenInfo={description:"",methods:[],displayName:"ChangeAfter"};var pe,me,fe;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={10} showInputs />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(fe=(me=S.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var he,ge,ve;R.parameters={...R.parameters,docs:{...(he=R.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount={30} step="auto" />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(ve=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,xe,ye;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount="auto" step={2000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(ye=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var we,ke,Ce;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={0} max={6} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(Ce=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var Ve,je,Se;I.parameters={...I.parameters,docs:{...(Ve=I.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={1} max={8} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(Se=(je=I.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var Re,Te,Ae;_.parameters={..._.parameters,docs:{...(Re=_.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 5008970]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={1000} max={10_000_000} step={1000} showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>;
}`,...(Ae=(Te=_.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var Ie,_e,Me;M.parameters={...M.parameters,docs:{...(Ie=M.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Me=(_e=M.parameters)==null?void 0:_e.docs)==null?void 0:Me.source}}};var Ne,qe,Ee;N.parameters={...N.parameters,docs:{...(Ne=N.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);
  return <div>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Ee=(qe=N.parameters)==null?void 0:qe.docs)==null?void 0:Ee.source}}};const _t=["Regular","Regular2","Regular3","Regular4","Regular5","Range","Disabled","ChangeAfter"];export{N as ChangeAfter,M as Disabled,_ as Range,S as Regular,R as Regular2,T as Regular3,A as Regular4,I as Regular5,_t as __namedExportsOrder,It as default};
