import{j as s}from"./index-DSOYRR-y.js";import{r as a}from"./index-RYns6xqu.js";import"./unstyled-heading-B2wjEl7S.js";import"./help-text-BWbwCBp4.js";import"./component-CA_utTiw.js";import"./component-DGkHE89C.js";import"./component-CPUGlFdC.js";import"./component-CFTMq9rF.js";import"./component-C2cg9OAn.js";import"./component-DfcuE9an.js";import"./component-Dl300uvO.js";import"./component-DEMQPCsw.js";import"./component-BOaFOH0e.js";import"./component-DXMdkRbQ.js";import"./component-BnN6aAmj.js";import"./component-BoklHLeD.js";import"./step-U_ZgDATq.js";import"./component-BUVcJvVe.js";import"./component-tabs-CEajmaHx.js";import"./component-BqfkGBST.js";import{T as ye}from"./component-DwXPycX6.js";import"./component-Blth2Uzk.js";import"./Pagination-B6VpBs_V.js";import"./index.m-CtIADANO.js";import"./close-16-cHDvCKuO.js";import"./index-C6dB-k_R.js";import"./item-BU3_qfee.js";import"./info-16-CkEITmUl.js";import"./i18n-BJez-btc.js";import"./chevron-down-16-yi201Ybz.js";function S(e,t){if(!t)return Math.round(e);const n=10**(t||0);return Math.round(e*n)/n}function le(e,t,n){return Math.min(Math.max(e,t),n)}function ht(e,t,n){return[le(e[0],t,n),le(e[1],t,n)]}const G=28,St=`
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
      width: 28px;
      height: 28px;
      background-color: var(--w-s-color-background-primary);
      border-radius: 0%;
      cursor: pointer;
      transform: translateY(-12.5px);
      border-radius: 14px;
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
      transform: translateY(-4px);
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
`;function f({min:e=0,max:t=100,rangeValues:n,step:l=1,value:o,values:u,disabled:v,onChange:w,onChangeAfter:g,"aria-label":T,"aria-labelledby":ft,"aria-valuetext":gt,keyboardStepFactor:vt=.04,showTooltip:xt=!1,markers:ce=!1,markerCount:Q=10,showInputs:Z=!1}){const c=(u?"range":"standard")==="range",x=a.useMemo(()=>At(l,ce,Q,t,e),[]);n&&(e=0,t=n.length-1);const R=r=>n?n==null?void 0:n.findIndex(i=>i===r):0,bt=()=>{let r;return n?c&&u?r=[R(u[0]),R(u[1])]:r=[e,R(o)]:r=c&&u?J(u,x):[e,C(o,x)],r},ee=()=>u?J(u,x):[e,C(o,x)],[d,de]=a.useState(()=>bt()),[I,L]=a.useState(()=>ee()),[te,B]=a.useState(!1),ne=a.useRef(null),V=a.useRef(null),b=a.useRef(null),y=a.useRef(null),pe=a.useRef(null),me=a.useRef(null),he=a.useRef(0),se=xt&&te,re=a.useCallback(r=>{var h;const i=((h=V.current)==null?void 0:h.clientWidth)||500;return(r[1]-r[0])/(t-e)*i<G?(t-e)/i*G:0},[V.current]);a.useEffect(()=>{if(Tt(o,u,e,t),!(document.activeElement===b.current||document.activeElement===y.current)){n&&(c&&u?u=[R(u[0]),R(u[1])]:o=R(o));const r=ee();de(r),u?L(u):o&&L([0,o]),we(ne,r,V,c,t,e),A({values:u,value:o},c,b,y)}},[u,o]),a.useEffect(()=>{let r=o,i=u;n&&(c&&u?i=[R(u[0]),R(u[1])]:r=R(o)),A({values:i,value:r},c,b,y)},[b.current,y.current]),a.useEffect(()=>{!te&&g&&g(c?d:d[1])},[te,d]),a.useEffect(()=>{b.current&&b.current.setAttribute("value",d[0].toString()),y.current&&y.current.setAttribute("value",d[1].toString())},[d]);const ae=a.useCallback((r,i)=>{const p={left:-1,right:1},m=t*vt,h=d[i]+p[r]*m,k=ie(h,i,c,d,e,t,x,!0);A({values:k,value:h},c,b,y),_(k,i)},[d]),yt=a.useCallback((r,i)=>{["ArrowUp","ArrowDown"].includes(r.key)&&r.preventDefault(),["ArrowLeft","ArrowRight"].includes(r.key)&&(B(!0),r.key==="ArrowLeft"&&ae("left",i),r.key==="ArrowRight"&&ae("right",i))},[ae]),fe=a.useCallback(r=>{if(B(!0),!v&&r.target.nodeName!=="INPUT"){const i=r.touches?_t(r):r.nativeEvent.offsetX,p=V.current.clientWidth,m=C(i/p*(t-e)+e,x),h=(d[0]+d[1])/2,k=m>C(h,x)?1:0,j=ie(m,k,c,d,e,t,x);_(j,k),A({values:j,value:j[1]},c,b,y)}},[u,o,d]),_=a.useCallback((r,i,p=!0)=>{if(clearTimeout(he.current),c){const m=re(r);m>0&&(i==0?r[0]=C(r[1]-m,l):r[1]=C(r[0]+m,l)),A({values:r,value:r[1]},c,b,y)}he.current=setTimeout(()=>{if(r=ht(r,e,t),de(r),Z&&p&&L(r),w){let m;n?m=c?[n[r[0]],n[r[1]]]:n[r[1]]:m=c?[S(r[0]),S(r[1])]:Math.round(r[1]),w(m)}},1),we(ne,r,V,c,t,e)},[]),wt=a.useCallback((r,i)=>{const p=ie(+r.target.value,i,c,d,e,t,x);_(p,i)},[d]),H=()=>B(!1),ge=a.useCallback((r,i)=>v?s.jsx("input",{type:"range",disabled:!0,value:d[r],min:e,max:t}):s.jsx("input",{ref:i,type:"range",step:x,min:e,max:t,onKeyDown:p=>yt(p,r),onKeyUp:()=>B(!1),onChange:p=>wt(p,r),...jt({ariaLabel:T,ariaLabelledBy:ft,ariaValueText:gt})}),[d]),ve=a.useCallback((r,i,p,m)=>{const h=+r.target.value,k=i==0?[h,m[1]]:[m[0],h];L(k);const j=re(k);if(i==0){const ue=[h,p[1]];h>=e&&h<=p[1]-j&&_(ue,i,!1)}else if(i==1){const ue=[p[0],h];(c?h<=t&&h>=p[0]+j:h<=t)&&_(ue,i,!1)}},[]),oe=a.useMemo(()=>Q==="auto"&&typeof x=="number"?(t-e)/x+1:Q,[]),Rt=a.useCallback(()=>Array.from(Array(oe).keys()).map(r=>{let i="";if(oe<15&&(i=(t-e)/(oe-1)*r+e,t>100)){const p=t.toString().length-1,m=S(i/10**p,1);i=m>0?m+"e"+p:0}return s.jsxs("div",{className:"marker",children:[s.jsx("div",{children:"|"}),s.jsx("div",{children:i})]},r)}),[]),[kt,Ct]=se?Vt(ee(),t,e):[0,0],xe=Z?Nt(I,e,t,[pe,me],re):[!0,!0],be=r=>{if(n){const i=d[r];return n[i]}else return d[r]};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:St}),s.jsxs("div",{className:"ccSlider.wrapper wrapper",onContextMenu:r=>r.preventDefault(),children:[s.jsxs("div",{className:"active-track",ref:ne,children:[s.jsx(Re,{display:se&&c,top:document.activeElement===b.current,transform:`translateY(-50px) translateX(calc(-50% + ${kt}px))`,children:be(0)}),s.jsx(Re,{display:se,top:document.activeElement===y.current,transform:`translateY(-50px) translateX(calc(50% + ${Ct}px))`,children:be(1)})]}),s.jsxs("div",{className:"input-wrapper",ref:V,onMouseDown:fe,onTouchStart:fe,onKeyUp:H,onMouseUp:H,onTouchEnd:H,onMouseOut:H,children:[c&&ge(0,b),ge(1,y),s.jsx("div",{className:"steps",children:ce&&Rt()})]}),Z&&s.jsxs("div",{className:`inputs ${c?"dual":""}`,children:[c&&s.jsx(ye,{value:I[0].toString(),ref:pe,invalid:!xe[0],onChange:r=>ve(r,0,d,I)}),s.jsx(ye,{value:I[1].toString(),ref:me,invalid:!xe[1],onChange:r=>ve(r,1,d,I)})]})]})]})}const Vt=(e,t,n)=>{const l=-((e[0]-n)/(t-n)-.5)*G,o=-((e[1]-n)/(t-n)-.5)*G;return[l,o]};function jt({ariaLabel:e,ariaLabelledBy:t,ariaValueText:n}){return{"aria-label":e,"aria-labelledby":t,"aria-valuetext":n}}function Tt(e,t,n,l){(e&&e<n||t&&t[0]<n)&&console.warn("Value too low."),(e&&e>l||t&&t[1]>l)&&console.warn("Value too high.")}function A({value:e,values:t},n,l,o){n?(l.current&&(l.current.value=t[0]),o.current&&(o.current.value=t[1])):o.current&&(o.current.value=e)}const ie=(e,t=1,n,l,o,u,v,w=!1)=>{let g;return e=Math.round(e),n?t===1?g=[l[0],e]:g=[e,l[1]]:g=[o,e],w?ht(J(g,v),o,u):J(g,v)},It=(e,t,n,l,o)=>{var g;let u=(e[1]-e[0])/(l-o);const v=((g=t.current)==null?void 0:g.clientWidth)||500;(u<0||u>1)&&(console.warn("Values outside of range."),u=le(u,0,1));const w=n?(e[0]-o)/(l-o)*v:0;return`
    width: ${u*100+"%"};
    margin-left: ${w+"px"};`},we=(e,t,n,l,o,u)=>{e.current&&(e.current.style.cssText=It(t,n,l,o,u))},_t=e=>{const t=e.target.getBoundingClientRect(),n=e.touches[0].clientX-t.left;return S(n)},C=(e,t)=>typeof t!="string"&&t>1?S(e/t)*t:S(e),J=(e,t)=>[C(e[0],t),C(e[1],t)],At=(e,t,n,l,o)=>{let u=e;if(t){const v=n;u=typeof e=="number"?e:S((l-o)/(v-1))}return u},Re=({transform:e,display:t,top:n,children:l})=>s.jsx("div",{className:"tooltip",style:{transform:e,visibility:t?"visible":"hidden",zIndex:n?10:1},children:l});function Nt([e,t],n,l,[o,u],v){let w=!0,g=!0;if((e<n||e>l)&&(w=!1),(t>l||t<n)&&(g=!1),document.activeElement===o.current){const T=v([e,t]);e+T>t&&(w=!1)}if(document.activeElement===u.current){const T=v([e,t]);t<e+T&&(g=!1)}return[w,g]}f.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},rangeValues:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"number | any",elements:[{name:"number"},{name:"any"}]},description:""},values:{required:!1,tsType:{name:"union",raw:"number[] | any[]",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"Array",elements:[{name:"any"}],raw:"any[]"}]},description:""},onChange:{required:!1,tsType:{name:"any"},description:""},onChangeAfter:{required:!1,tsType:{name:"any"},description:""},step:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"Specifies the value granularity",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled"},"aria-label":{required:!1,tsType:{name:"string"},description:"String value that labels the slider"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element that labels the slider"},"aria-valuetext":{required:!1,tsType:{name:"string"},description:"Human readable text alternative for the value"},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.04",computed:!1}},markers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},markerCount:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"10",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showInputs:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const pn={title:"Forms/Slider"},N=()=>{const[e,t]=a.useState(2e4);return s.jsxs("div",{children:[s.jsx("output",{children:e}),s.jsx(f,{onChange:n=>t(n),value:e,min:1e4,max:6e4,step:10,showInputs:!0}),s.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},q=()=>{const[e,t]=a.useState(2e4);return s.jsxs("div",{children:[s.jsx("output",{children:e}),s.jsx(f,{onChange:n=>t(n),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:30,step:"auto"}),s.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},E=()=>{const[e,t]=a.useState(2e4);return s.jsxs("div",{children:[s.jsx("output",{children:e}),s.jsx(f,{onChange:n=>t(n),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:"auto",step:2e3}),s.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},M=()=>{const[e,t]=a.useState(3);return s.jsxs("div",{children:[s.jsx("output",{children:e}),s.jsx(f,{onChange:n=>t(n),value:e,min:0,max:6,showTooltip:!0,markers:!0,markerCount:"auto",showInputs:!0}),s.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},D=()=>{const[e,t]=a.useState(3);return s.jsxs("div",{children:[s.jsx("output",{children:e}),s.jsx(f,{onChange:n=>t(n),value:e,min:1,max:8,showTooltip:!0,markers:!0,markerCount:"auto",showInputs:!0}),s.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},F=()=>{const[e,t]=a.useState([1e3,5008970]);return s.jsxs("div",{children:[s.jsxs("output",{children:[e[0]," - ",e[1]]}),s.jsx(f,{values:e,onChange:n=>t(n),min:1e3,max:1e7,step:1e3,showTooltip:!0,markers:!0,showInputs:!0}),s.jsx("button",{onClick:()=>t([1e3,5008970]),children:"Reset"})]})},W=()=>{const[e,t]=a.useState([100,1500]);return s.jsxs("div",{children:[s.jsxs("output",{children:[e[0]," - ",e[1]]}),s.jsx(f,{values:e,onChange:n=>t(n),min:100,max:1500,step:10,showTooltip:!0,markers:!0,showInputs:!0}),s.jsx("button",{onClick:()=>t([100,1500]),children:"Reset"})]})},P=()=>{const[e,t]=a.useState([1e3,9e3]);return s.jsxs("div",{children:[s.jsxs("output",{children:[e[0]," - ",e[1]]}),s.jsx(f,{values:e,onChange:n=>t(n),min:0,max:1e4,step:100,markerCount:3,showTooltip:!0,markers:!0,showInputs:!0}),s.jsx("button",{onClick:()=>t([1e3,9e3]),children:"Reset"})]})},O=()=>{const[e,t]=a.useState([10,1e3]);return s.jsxs("div",{children:[s.jsxs("output",{children:[e[0]," - ",e[1]]}),s.jsx(f,{values:e,onChange:n=>t(n),min:0,max:4e3,showTooltip:!0,markers:!0,showInputs:!0,markerCount:3}),s.jsx("button",{onClick:()=>t([10,1e3]),children:"Reset"})]})},U=()=>{const[e,t]=a.useState([0,1e4]);return s.jsxs("div",{children:[s.jsxs("output",{children:[e[0]," - ",e[1]]}),s.jsx(f,{values:e,onChange:n=>t(n),min:0,max:1e4,showTooltip:!0,markers:!0,showInputs:!0,markerCount:21,step:100}),s.jsx("button",{onClick:()=>t([0,1e4]),children:"Reset"})]})},X=()=>{const[e,t]=a.useState([1,15]);return s.jsxs("div",{children:[s.jsxs("output",{children:[e[0]," - ",e[1]]}),s.jsx(f,{values:e,onChange:n=>t(n),min:0,max:20,step:1,markerCount:5,showTooltip:!0,markers:!0,showInputs:!0}),s.jsx("button",{onClick:()=>t([1,15]),children:"Reset"})]})},Y=()=>{const[e,t]=a.useState("yes"),n=["hi","haha","yes","nr","ok","1","2"];return s.jsxs("div",{children:[s.jsx("output",{children:e}),s.jsx(f,{onChange:l=>t(l),value:e,rangeValues:n,showTooltip:!0}),s.jsx("button",{onClick:()=>t("yes"),children:"Reset"})]})},$=()=>{const[e,t]=a.useState(["yes","1"]),n=["hi","haha","yes","nr","ok","1","2"];return s.jsxs("div",{children:[s.jsxs("output",{children:[e[0]," - ",e[1]]}),s.jsx(f,{onChange:l=>t(l),values:e,rangeValues:n,showTooltip:!0}),s.jsx("button",{onClick:()=>t(["yes","1"]),children:"Reset"})]})},K=()=>{const[e,t]=a.useState(625e3);return s.jsxs("div",{children:[s.jsx("output",{children:e}),s.jsx(f,{onChange:n=>t(n),value:e,disabled:!0,min:1e3,max:1e7,step:1e3})]})},z=()=>{const[e,t]=a.useState(625e3),[n,l]=a.useState(e);return s.jsxs("div",{children:[s.jsx("output",{children:n}),s.jsx(f,{onChange:o=>t(o),onChangeAfter:o=>l(o),value:e,min:1e3,max:1e7,step:1e3})]})};N.__docgenInfo={description:"",methods:[],displayName:"Regular"};q.__docgenInfo={description:"",methods:[],displayName:"Regular2"};E.__docgenInfo={description:"",methods:[],displayName:"Regular3"};M.__docgenInfo={description:"",methods:[],displayName:"Regular4"};D.__docgenInfo={description:"",methods:[],displayName:"Regular5"};F.__docgenInfo={description:"",methods:[],displayName:"Range"};W.__docgenInfo={description:"",methods:[],displayName:"Range2"};P.__docgenInfo={description:"",methods:[],displayName:"Range4"};O.__docgenInfo={description:"",methods:[],displayName:"Range5"};U.__docgenInfo={description:"",methods:[],displayName:"Range6"};X.__docgenInfo={description:"",methods:[],displayName:"Range7"};Y.__docgenInfo={description:"",methods:[],displayName:"RegularRangeValues"};$.__docgenInfo={description:"",methods:[],displayName:"DualRangeValues"};K.__docgenInfo={description:"",methods:[],displayName:"Disabled"};z.__docgenInfo={description:"",methods:[],displayName:"ChangeAfter"};var ke,Ce,Se;N.parameters={...N.parameters,docs:{...(ke=N.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={10} showInputs />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(Se=(Ce=N.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var Ve,je,Te;q.parameters={...q.parameters,docs:{...(Ve=q.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount={30} step="auto" />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(Te=(je=q.parameters)==null?void 0:je.docs)==null?void 0:Te.source}}};var Ie,_e,Ae;E.parameters={...E.parameters,docs:{...(Ie=E.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount="auto" step={2000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(Ae=(_e=E.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};var Ne,qe,Ee;M.parameters={...M.parameters,docs:{...(Ne=M.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={0} max={6} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(Ee=(qe=M.parameters)==null?void 0:qe.docs)==null?void 0:Ee.source}}};var Me,De,Fe;D.parameters={...D.parameters,docs:{...(Me=D.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={1} max={8} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(Fe=(De=D.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var We,Pe,Oe;F.parameters={...F.parameters,docs:{...(We=F.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 5008970]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={1000} max={10_000_000} step={1000} showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>;
}`,...(Oe=(Pe=F.parameters)==null?void 0:Pe.docs)==null?void 0:Oe.source}}};var Ue,Xe,Ye;W.parameters={...W.parameters,docs:{...(Ue=W.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([100, 1500]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={100} max={1500} step={10} showTooltip markers showInputs />
      <button onClick={() => setValues([100, 1500])}>Reset</button>
    </div>;
}`,...(Ye=(Xe=W.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var $e,Ke,ze;P.parameters={...P.parameters,docs:{...($e=P.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 9000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={10000} step={100} markerCount={3} showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 9000])}>Reset</button>
    </div>;
}`,...(ze=(Ke=P.parameters)==null?void 0:Ke.docs)==null?void 0:ze.source}}};var Le,Be,He;O.parameters={...O.parameters,docs:{...(Le=O.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([10, 1000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={4000} showTooltip markers showInputs markerCount={3} />
      <button onClick={() => setValues([10, 1000])}>Reset</button>
    </div>;
}`,...(He=(Be=O.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};var Ge,Je,Qe;U.parameters={...U.parameters,docs:{...(Ge=U.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([0, 10000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={10000} showTooltip markers showInputs markerCount={21} step={100} />
      <button onClick={() => setValues([0, 10000])}>Reset</button>
    </div>;
}`,...(Qe=(Je=U.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,et,tt;X.parameters={...X.parameters,docs:{...(Ze=X.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1, 15]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={20} step={1} markerCount={5} showTooltip markers showInputs />
      <button onClick={() => setValues([1, 15])}>Reset</button>
    </div>;
}`,...(tt=(et=X.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,st,rt;Y.parameters={...Y.parameters,docs:{...(nt=Y.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('yes');

  //const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //const range = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 110];
  const range = ['hi', 'haha', 'yes', 'nr', 'ok', '1', '2'];
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} rangeValues={range} showTooltip />
      <button onClick={() => setValue('yes')}>Reset</button>
    </div>;
}`,...(rt=(st=Y.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};var at,ot,ut;$.parameters={...$.parameters,docs:{...(at=$.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState(['yes', '1']);

  //const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //const range = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 110];
  const range = ['hi', 'haha', 'yes', 'nr', 'ok', '1', '2'];
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider onChange={values => setValues(values)} values={values} rangeValues={range} showTooltip />
      <button onClick={() => setValues(['yes', '1'])}>Reset</button>
    </div>;
}`,...(ut=(ot=$.parameters)==null?void 0:ot.docs)==null?void 0:ut.source}}};var it,lt,ct;K.parameters={...K.parameters,docs:{...(it=K.parameters)==null?void 0:it.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(ct=(lt=K.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var dt,pt,mt;z.parameters={...z.parameters,docs:{...(dt=z.parameters)==null?void 0:dt.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);
  return <div>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(mt=(pt=z.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};const mn=["Regular","Regular2","Regular3","Regular4","Regular5","Range","Range2","Range4","Range5","Range6","Range7","RegularRangeValues","DualRangeValues","Disabled","ChangeAfter"];export{z as ChangeAfter,K as Disabled,$ as DualRangeValues,F as Range,W as Range2,P as Range4,O as Range5,U as Range6,X as Range7,N as Regular,q as Regular2,E as Regular3,M as Regular4,D as Regular5,Y as RegularRangeValues,mn as __namedExportsOrder,pn as default};
