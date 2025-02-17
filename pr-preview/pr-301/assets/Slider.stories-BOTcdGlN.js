import{j as a}from"./index-DSOYRR-y.js";import{r as u}from"./index-RYns6xqu.js";import"./unstyled-heading-B2wjEl7S.js";import"./help-text-BWbwCBp4.js";import"./component-CA_utTiw.js";import"./component-DGkHE89C.js";import"./component-CPUGlFdC.js";import"./component-CFTMq9rF.js";import"./component-C2cg9OAn.js";import"./component-DfcuE9an.js";import"./component-Dl300uvO.js";import"./component-DEMQPCsw.js";import"./component-BOaFOH0e.js";import"./component-DXMdkRbQ.js";import"./component-BnN6aAmj.js";import"./component-BoklHLeD.js";import"./step-U_ZgDATq.js";import"./component-BUVcJvVe.js";import"./component-tabs-CEajmaHx.js";import"./component-BqfkGBST.js";import{T as ie}from"./component-DwXPycX6.js";import"./component-Blth2Uzk.js";import"./Pagination-B6VpBs_V.js";import"./index.m-CtIADANO.js";import"./close-16-cHDvCKuO.js";import"./index-C6dB-k_R.js";import"./item-BU3_qfee.js";import"./info-16-CkEITmUl.js";import"./i18n-BJez-btc.js";import"./chevron-down-16-yi201Ybz.js";const ze=`
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
`;function y({min:e=0,max:t=100,step:r=1,value:o,values:s,disabled:m,onChange:i,onChangeAfter:f,"aria-label":p,"aria-labelledby":D,"aria-valuetext":Fe,keyboardStepFactor:We=.04,showTooltip:Oe=!1,markers:Q=!1,markerCount:U=10,showInputs:X=!1}){const d=(s?"range":"standard")==="range",h=u.useMemo(()=>Qe(r,Q,U,t,e),[]),F=()=>s?J(s,h):[e,C(o,h)],[l,Z]=u.useState(()=>F()),[Y,j]=u.useState(()=>F()),[$,K]=u.useState(!1),P=u.useRef(null),V=u.useRef(null),v=u.useRef(null),b=u.useRef(null),ee=u.useRef(null),te=u.useRef(null),re=u.useRef(0),z=Oe&&$;u.useEffect(()=>{if(He(o,s,e,t),!(document.activeElement===v.current||document.activeElement===b.current)){const n=F();Z(n),s?j(s):o&&j([0,o]),le(P,n,V,d,t,e,h),R({values:s,value:o},d,v,b)}},[s,o]),u.useEffect(()=>{R({values:s,value:o},d,v,b)},[v.current,b.current]),u.useEffect(()=>{!$&&f&&f(d?l:l[1])},[$,l]),u.useEffect(()=>{v.current&&v.current.setAttribute("value",l[0]),b.current&&b.current.setAttribute("value",l[1])},[l]);const L=u.useCallback((n,c)=>{const g={left:-1,right:1},x=t*We,k=l[c]+g[n]*x,w=H(k,c,d,l,e,t,h,!0);R({values:w,value:k},d,v,b),S(w,c)},[l]),Ue=u.useCallback((n,c)=>{["ArrowUp","ArrowDown"].includes(n.key)&&n.preventDefault(),["ArrowLeft","ArrowRight"].includes(n.key)&&(K(!0),n.key==="ArrowLeft"&&L("left",c),n.key==="ArrowRight"&&L("right",c))},[L]),ne=u.useCallback(n=>{if(K(!0),!m&&n.target.nodeName!=="INPUT"){const c=n.touches?Je(n):n.nativeEvent.offsetX,g=V.current.clientWidth,x=C(c/g*(t-e)+e,h),k=(l[0]+l[1])/2,w=x>C(k,h)?1:0,O=H(x,w,d,l,e,t,h);S(O,w),R({values:O,value:O[1]},d,v,b)}},[s,o,l]),S=u.useCallback((n,c,g=!1)=>{var k,w;const x=[n[0],n[1]];if(clearTimeout(re.current),d){const Pe=C(n[1]-n[0],h)/(t-e)*(((k=V.current)==null?void 0:k.clientWidth)||500),ue=(t-e)/(((w=V.current)==null?void 0:w.clientWidth)||500);Pe<24&&(c==0?n[0]=n[1]-ue*24:n[1]=n[0]+ue*24,R({values:n,value:n[1]},d,v,b))}re.current=setTimeout(()=>{n=De(n,e,t),Z(n),X&&j(g?x:n),i&&i(d?[Math.round(n[0]),Math.round(n[1])]:Math.round(n[1]))},1),le(P,n,V,d,t,e,h)},[]),Xe=u.useCallback((n,c)=>{const g=H(+n.target.value,c,d,l,e,t,h);S(g,c)},[l]),W=()=>{ae()},ae=()=>{K(!1)},se=u.useCallback((n,c)=>m?a.jsx("input",{type:"range",disabled:!0,value:l[n],min:e,max:t}):a.jsx("input",{ref:c,type:"range",step:h,min:e,max:t,onKeyDown:g=>Ue(g,n),onKeyUp:ae,onChange:g=>Xe(g,n),...Be({ariaLabel:p,ariaLabelledBy:D,ariaValueText:Fe})}),[l]),B=u.useMemo(()=>U==="auto"&&typeof h=="number"?(t-e)/h+1:U,[]),Ye=u.useCallback(()=>Array.from(Array(B).keys()).map(n=>{let c="";if(B<15&&(c=(t-e)/(B-1)*n+e,t>100)){const g=t.toString().length-1,x=et(c/t,1);c=x>0?x+"e"+g:0}return a.jsxs("div",{className:"marker",children:[a.jsx("div",{children:"|"}),a.jsx("div",{children:c})]},n)}),[]),[$e,Ke]=z?Le(F(),t,e):[0,0],oe=X?Ze(Y,e,t,[ee,te]):[!0,!0];return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:ze}),a.jsxs("div",{className:"ccSlider.wrapper wrapper",onContextMenu:n=>n.preventDefault(),children:[a.jsxs("div",{className:"active-track",ref:P,children:[a.jsx(ce,{display:z&&d,top:document.activeElement===v.current,transform:`translateY(-50px) translateX(calc(-50% + ${$e}px))`,children:l[0]}),a.jsx(ce,{display:z,top:document.activeElement===b.current,transform:`translateY(-50px) translateX(calc(50% + ${Ke}px))`,children:l[1]})]}),a.jsxs("div",{className:"input-wrapper",ref:V,onMouseDown:ne,onTouchStart:ne,onKeyUp:W,onMouseUp:W,onTouchEnd:W,onMouseOut:W,children:[d&&se(0,v),se(1,b),a.jsx("div",{className:"steps",children:Q&&Ye()})]}),X&&a.jsxs("div",{className:`inputs ${d?"dual":""}`,children:[d&&a.jsx(ie,{value:Y[0].toString(),ref:ee,invalid:!oe[0],onChange:n=>de(n,0,l,S,j,e,t)}),a.jsx(ie,{value:Y[1].toString(),ref:te,invalid:!oe[1],onChange:n=>de(n,1,l,S,j,e,t)})]})]})]})}const Le=(e,t,r)=>{const o=-((e[0]-r)/(t-r)-.5)*24,s=-((e[1]-r)/(t-r)-.5)*24;return[o,s]};function Be({ariaLabel:e,ariaLabelledBy:t,ariaValueText:r}){return{"aria-label":e,"aria-labelledby":t,"aria-valuetext":r}}function G(e,t,r){return Math.min(Math.max(e,t),r)}function He(e,t,r,o){(e&&e<r||t&&t[0]<r)&&console.warn("Value too low."),(e&&e>o||t&&t[1]>o)&&console.warn("Value too high.")}function R({value:e,values:t},r,o,s){r?(o.current&&(o.current.value=t[0]),s.current&&(s.current.value=t[1])):s.current&&(s.current.value=e)}const H=(e,t=1,r,o,s,m,i,f=!1)=>{let p;return e=Math.round(e),r?t===1?p=[o[0],e]:p=[e,o[1]]:p=[s,e],f?De(J(p,i),s,m):J(p,i)},Ge=(e,t,r,o,s,m)=>{var D;let i=C(e[1]-e[0],m)/(o-s);const f=((D=t.current)==null?void 0:D.clientWidth)||500;(i<0||i>1)&&(console.warn("Values outside of range."),i=G(i,0,1));const p=r?(e[0]-s)/(o-s)*f:0;return`
    width: ${i*100+"%"};
    margin-left: ${p+"px"};`},le=(e,t,r,o,s,m,i)=>{e.current&&(e.current.style.cssText=Ge(t,r,o,s,m,i))},De=(e,t,r)=>[G(e[0],t,r),G(e[1],t,r)],Je=e=>{const t=e.target.getBoundingClientRect(),r=e.touches[0].clientX-t.left;return Math.round(r)},C=(e,t)=>t>1?Math.round(e/t)*t:e,J=(e,t)=>[C(e[0],t),C(e[1],t)],Qe=(e,t,r,o,s)=>{let m=e;if(t){const i=r;m=typeof e=="number"?e:Math.round((o-s)/(i-1))}return m},ce=e=>a.jsx("div",{className:"tooltip",style:{transform:e.transform,visibility:e.display?"visible":"hidden",zIndex:e.top?10:1},children:Math.round(e.children)});function Ze([e,t],r,o,[s,m]){let i=!0,f=!0;return(e<r||e>o)&&(i=!1),(t>o||t<r)&&(f=!1),document.activeElement===s.current&&e>t&&(i=!1),document.activeElement===m.current&&t<e&&(f=!1),[i,f]}function et(e,t){const r=10**t;return Math.round(e*r)/r}const de=(e,t,r,o,s,m,i)=>{const f=+e.target.value,p=t==1?[r[0],f]:[f,r[1]];p[0]>=m&&p[1]<=i&&p[1]>=p[0]?o(p,t,!0):(console.warn("Input outside range."),s(p))};y.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onChange:{required:!1,tsType:{name:"any"},description:""},onChangeAfter:{required:!1,tsType:{name:"any"},description:""},max:{required:!1,tsType:{name:"number"},description:`The greatest value in the range of permitted values
@default 100`,defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`The lowest value in the range of permitted values
@default 0`,defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"Specifies the value granularity",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled"},"aria-label":{required:!1,tsType:{name:"string"},description:"String value that labels the slider"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element that labels the slider"},"aria-valuetext":{required:!1,tsType:{name:"string"},description:"Human readable text alternative for the value"},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.04",computed:!1}},markers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},markerCount:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"10",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showInputs:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Mt={title:"Forms/Slider"},T=()=>{const[e,t]=u.useState(2e4);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(y,{onChange:r=>t(r),value:e,min:1e4,max:6e4,step:10,showInputs:!0}),a.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},A=()=>{const[e,t]=u.useState(2e4);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(y,{onChange:r=>t(r),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:30,step:"auto"}),a.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},I=()=>{const[e,t]=u.useState(2e4);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(y,{onChange:r=>t(r),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:"auto",step:2e3}),a.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},_=()=>{const[e,t]=u.useState(3);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(y,{onChange:r=>t(r),value:e,min:0,max:6,showTooltip:!0,markers:!0,markerCount:"auto",showInputs:!0}),a.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},M=()=>{const[e,t]=u.useState(3);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(y,{onChange:r=>t(r),value:e,min:1,max:8,showTooltip:!0,markers:!0,markerCount:"auto",showInputs:!0}),a.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},N=()=>{const[e,t]=u.useState([1e3,5008970]);return a.jsxs("div",{children:[a.jsxs("output",{children:[e[0]," - ",e[1]]}),a.jsx(y,{values:e,onChange:r=>t(r),min:1e3,max:1e7,step:1e3,showTooltip:!0,markers:!0,showInputs:!0}),a.jsx("button",{onClick:()=>t([1e3,5008970]),children:"Reset"})]})},q=()=>{const[e,t]=u.useState(625e3);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(y,{onChange:r=>t(r),value:e,disabled:!0,min:1e3,max:1e7,step:1e3})]})},E=()=>{const[e,t]=u.useState(625e3),[r,o]=u.useState(e);return a.jsxs("div",{children:[a.jsx("output",{children:r}),a.jsx(y,{onChange:s=>t(s),onChangeAfter:s=>o(s),value:e,min:1e3,max:1e7,step:1e3})]})};T.__docgenInfo={description:"",methods:[],displayName:"Regular"};A.__docgenInfo={description:"",methods:[],displayName:"Regular2"};I.__docgenInfo={description:"",methods:[],displayName:"Regular3"};_.__docgenInfo={description:"",methods:[],displayName:"Regular4"};M.__docgenInfo={description:"",methods:[],displayName:"Regular5"};N.__docgenInfo={description:"",methods:[],displayName:"Range"};q.__docgenInfo={description:"",methods:[],displayName:"Disabled"};E.__docgenInfo={description:"",methods:[],displayName:"ChangeAfter"};var pe,me,fe;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={10} showInputs />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(fe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var he,ge,ve;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount={30} step="auto" />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(ve=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,xe,ye;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount="auto" step={2000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(ye=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var we,ke,Ce;_.parameters={..._.parameters,docs:{...(we=_.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={0} max={6} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(Ce=(ke=_.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var Ve,je,Se;M.parameters={...M.parameters,docs:{...(Ve=M.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={1} max={8} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(Se=(je=M.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var Re,Te,Ae;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 5008970]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={1000} max={10_000_000} step={1000} showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>;
}`,...(Ae=(Te=N.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var Ie,_e,Me;q.parameters={...q.parameters,docs:{...(Ie=q.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Me=(_e=q.parameters)==null?void 0:_e.docs)==null?void 0:Me.source}}};var Ne,qe,Ee;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);
  return <div>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Ee=(qe=E.parameters)==null?void 0:qe.docs)==null?void 0:Ee.source}}};const Nt=["Regular","Regular2","Regular3","Regular4","Regular5","Range","Disabled","ChangeAfter"];export{E as ChangeAfter,q as Disabled,N as Range,T as Regular,A as Regular2,I as Regular3,_ as Regular4,M as Regular5,Nt as __namedExportsOrder,Mt as default};
