import{j as n}from"./index-DSOYRR-y.js";import{r as a}from"./index-RYns6xqu.js";import"./unstyled-heading-B2wjEl7S.js";import"./help-text-BWbwCBp4.js";import"./component-CA_utTiw.js";import"./component-DGkHE89C.js";import"./component-CPUGlFdC.js";import"./component-CFTMq9rF.js";import"./component-C2cg9OAn.js";import"./component-DfcuE9an.js";import"./component-Dl300uvO.js";import"./component-DEMQPCsw.js";import"./component-BOaFOH0e.js";import"./component-DXMdkRbQ.js";import"./component-BnN6aAmj.js";import"./component-BoklHLeD.js";import"./step-U_ZgDATq.js";import"./component-BUVcJvVe.js";import"./component-tabs-CEajmaHx.js";import"./component-BqfkGBST.js";import{T as he}from"./component-DwXPycX6.js";import"./component-Blth2Uzk.js";import"./Pagination-B6VpBs_V.js";import"./index.m-CtIADANO.js";import"./close-16-cHDvCKuO.js";import"./index-C6dB-k_R.js";import"./item-BU3_qfee.js";import"./info-16-CkEITmUl.js";import"./i18n-BJez-btc.js";import"./chevron-down-16-yi201Ybz.js";function R(e,t){if(!t)return Math.round(e);const r=10**(t||0);return Math.round(e*r)/r}function se(e,t,r){return Math.min(Math.max(e,t),r)}function et(e,t,r){return[se(e[0],t,r),se(e[1],t,r)]}const L=28,lt=`
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
`;function g({min:e=0,max:t=100,step:r=1,value:u,values:o,disabled:p,onChange:v,onChangeAfter:y,"aria-label":h,"aria-labelledby":j,"aria-valuetext":tt,keyboardStepFactor:nt=.04,showTooltip:rt=!1,markers:oe=!1,markerCount:B=10,showInputs:H=!1}){const d=(o?"range":"standard")==="range",x=a.useMemo(()=>ht(r,oe,B,t,e),[]),$=()=>o?ae(o,x):[e,C(u,x)],[l,ue]=a.useState(()=>$()),[T,K]=a.useState(()=>$()),[G,P]=a.useState(!1),J=a.useRef(null),S=a.useRef(null),b=a.useRef(null),w=a.useRef(null),ie=a.useRef(null),le=a.useRef(null),ce=a.useRef(0),Q=rt&&G,Z=a.useCallback(s=>{var m;const i=((m=S.current)==null?void 0:m.clientWidth)||500;if(C(s[1]-s[0],x)/(t-e)*i<L){const k=(t-e)/i;return C(k*L,r)}else return 0},[S.current]);a.useEffect(()=>{if(pt(u,o,e,t),!(document.activeElement===b.current||document.activeElement===w.current)){const s=$();ue(s),o?K(o):u&&K([0,u]),ge(J,s,S,d,t,e),_({values:o,value:u},d,b,w)}},[o,u]),a.useEffect(()=>{_({values:o,value:u},d,b,w)},[b.current,w.current]),a.useEffect(()=>{!G&&y&&y(d?l:l[1])},[G,l]),a.useEffect(()=>{b.current&&b.current.setAttribute("value",l[0].toString()),w.current&&w.current.setAttribute("value",l[1].toString())},[l]);const ee=a.useCallback((s,i)=>{const c={left:-1,right:1},f=t*nt,m=l[i]+c[s]*f,k=re(m,i,d,l,e,t,x,!0);_({values:k,value:m},d,b,w),I(k,i)},[l]),st=a.useCallback((s,i)=>{["ArrowUp","ArrowDown"].includes(s.key)&&s.preventDefault(),["ArrowLeft","ArrowRight"].includes(s.key)&&(P(!0),s.key==="ArrowLeft"&&ee("left",i),s.key==="ArrowRight"&&ee("right",i))},[ee]),de=a.useCallback(s=>{if(P(!0),!p&&s.target.nodeName!=="INPUT"){const i=s.touches?ft(s):s.nativeEvent.offsetX,c=S.current.clientWidth,f=C(i/c*(t-e)+e,x),m=(l[0]+l[1])/2,k=f>C(m,x)?1:0,V=re(f,k,d,l,e,t,x);I(V,k),_({values:V,value:V[1]},d,b,w)}},[o,u,l]),I=a.useCallback((s,i,c=!0)=>{if(clearTimeout(ce.current),d){const f=Z(s);f>0&&(i==0?s[0]=s[1]-f:s[1]=s[0]+f),_({values:s,value:s[1]},d,b,w)}ce.current=setTimeout(()=>{s=et(s,e,t),ue(s),H&&c&&K(s),v&&v(d?[R(s[0]),R(s[1])]:Math.round(s[1]))},1),ge(J,s,S,d,t,e)},[]),at=a.useCallback((s,i)=>{const c=re(+s.target.value,i,d,l,e,t,x);I(c,i)},[l]),z=()=>P(!1),pe=a.useCallback((s,i)=>p?n.jsx("input",{type:"range",disabled:!0,value:l[s],min:e,max:t}):n.jsx("input",{ref:i,type:"range",step:x,min:e,max:t,onKeyDown:c=>st(c,s),onKeyUp:()=>P(!1),onChange:c=>at(c,s),...dt({ariaLabel:h,ariaLabelledBy:j,ariaValueText:tt})}),[l]),me=a.useCallback((s,i,c,f)=>{const m=+s.target.value,k=i==0?[m,f[1]]:[f[0],m];K(k);const V=Z(k);if(i==0){const ne=[m,c[1]];m>=e&&m<=c[1]-V&&I(ne,i,!1)}else if(i==1){const ne=[c[0],m];(d?m<=t&&m>=c[0]+V:m<=t)&&I(ne,i,!1)}},[]),te=a.useMemo(()=>B==="auto"&&typeof x=="number"?(t-e)/x+1:B,[]),ot=a.useCallback(()=>Array.from(Array(te).keys()).map(s=>{let i="";if(te<15&&(i=(t-e)/(te-1)*s+e,t>100)){const c=t.toString().length-1,f=R(i/10**c,1);i=f>0?f+"e"+c:0}return n.jsxs("div",{className:"marker",children:[n.jsx("div",{children:"|"}),n.jsx("div",{children:i})]},s)}),[]),[ut,it]=Q?ct($(),t,e):[0,0],fe=H?gt(T,e,t,[ie,le],Z):[!0,!0];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:lt}),n.jsxs("div",{className:"ccSlider.wrapper wrapper",onContextMenu:s=>s.preventDefault(),children:[n.jsxs("div",{className:"active-track",ref:J,children:[n.jsx(ve,{display:Q&&d,top:document.activeElement===b.current,transform:`translateY(-50px) translateX(calc(-50% + ${ut}px))`,children:l[0]}),n.jsx(ve,{display:Q,top:document.activeElement===w.current,transform:`translateY(-50px) translateX(calc(50% + ${it}px))`,children:l[1]})]}),n.jsxs("div",{className:"input-wrapper",ref:S,onMouseDown:de,onTouchStart:de,onKeyUp:z,onMouseUp:z,onTouchEnd:z,onMouseOut:z,children:[d&&pe(0,b),pe(1,w),n.jsx("div",{className:"steps",children:oe&&ot()})]}),H&&n.jsxs("div",{className:`inputs ${d?"dual":""}`,children:[d&&n.jsx(he,{value:T[0].toString(),ref:ie,invalid:!fe[0],onChange:s=>me(s,0,l,T)}),n.jsx(he,{value:T[1].toString(),ref:le,invalid:!fe[1],onChange:s=>me(s,1,l,T)})]})]})]})}const ct=(e,t,r)=>{const u=-((e[0]-r)/(t-r)-.5)*L,o=-((e[1]-r)/(t-r)-.5)*L;return[u,o]};function dt({ariaLabel:e,ariaLabelledBy:t,ariaValueText:r}){return{"aria-label":e,"aria-labelledby":t,"aria-valuetext":r}}function pt(e,t,r,u){(e&&e<r||t&&t[0]<r)&&console.warn("Value too low."),(e&&e>u||t&&t[1]>u)&&console.warn("Value too high.")}function _({value:e,values:t},r,u,o){r?(u.current&&(u.current.value=t[0]),o.current&&(o.current.value=t[1])):o.current&&(o.current.value=e)}const re=(e,t=1,r,u,o,p,v,y=!1)=>{let h;return e=Math.round(e),r?t===1?h=[u[0],e]:h=[e,u[1]]:h=[o,e],y?et(ae(h,v),o,p):ae(h,v)},mt=(e,t,r,u,o)=>{var h;let p=(e[1]-e[0])/(u-o);const v=((h=t.current)==null?void 0:h.clientWidth)||500;(p<0||p>1)&&(console.warn("Values outside of range."),p=se(p,0,1));const y=r?(e[0]-o)/(u-o)*v:0;return`
    width: ${p*100+"%"};
    margin-left: ${y+"px"};`},ge=(e,t,r,u,o,p)=>{e.current&&(e.current.style.cssText=mt(t,r,u,o,p))},ft=e=>{const t=e.target.getBoundingClientRect(),r=e.touches[0].clientX-t.left;return R(r)},C=(e,t)=>typeof t!="string"&&t>1?R(e/t)*t:e,ae=(e,t)=>[C(e[0],t),C(e[1],t)],ht=(e,t,r,u,o)=>{let p=e;if(t){const v=r;p=typeof e=="number"?e:R((u-o)/(v-1))}return p},ve=e=>n.jsx("div",{className:"tooltip",style:{transform:e.transform,visibility:e.display?"visible":"hidden",zIndex:e.top?10:1},children:R(e.children)});function gt([e,t],r,u,[o,p],v){let y=!0,h=!0;if((e<r||e>u)&&(y=!1),(t>u||t<r)&&(h=!1),document.activeElement===o.current){const j=v([e,t]);e+j>t&&(y=!1)}if(document.activeElement===p.current){const j=v([e,t]);t<e+j&&(h=!1)}return[y,h]}g.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onChange:{required:!1,tsType:{name:"any"},description:""},onChangeAfter:{required:!1,tsType:{name:"any"},description:""},max:{required:!1,tsType:{name:"number"},description:`The greatest value in the range of permitted values
@default 100`,defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`The lowest value in the range of permitted values
@default 0`,defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"Specifies the value granularity",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled"},"aria-label":{required:!1,tsType:{name:"string"},description:"String value that labels the slider"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element that labels the slider"},"aria-valuetext":{required:!1,tsType:{name:"string"},description:"Human readable text alternative for the value"},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.04",computed:!1}},markers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},markerCount:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"10",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showInputs:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ht={title:"Forms/Slider"},A=()=>{const[e,t]=a.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(g,{onChange:r=>t(r),value:e,min:1e4,max:6e4,step:10,showInputs:!0}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},N=()=>{const[e,t]=a.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(g,{onChange:r=>t(r),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:30,step:"auto"}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},q=()=>{const[e,t]=a.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(g,{onChange:r=>t(r),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:"auto",step:2e3}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},E=()=>{const[e,t]=a.useState(3);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(g,{onChange:r=>t(r),value:e,min:0,max:6,showTooltip:!0,markers:!0,markerCount:"auto",showInputs:!0}),n.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},M=()=>{const[e,t]=a.useState(3);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(g,{onChange:r=>t(r),value:e,min:1,max:8,showTooltip:!0,markers:!0,markerCount:"auto",showInputs:!0}),n.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},D=()=>{const[e,t]=a.useState([1e3,5008970]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(g,{values:e,onChange:r=>t(r),min:1e3,max:1e7,step:1e3,showTooltip:!0,markers:!0,showInputs:!0}),n.jsx("button",{onClick:()=>t([1e3,5008970]),children:"Reset"})]})},F=()=>{const[e,t]=a.useState([100,1500]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(g,{values:e,onChange:r=>t(r),min:100,max:1500,step:10,showTooltip:!0,markers:!0,showInputs:!0}),n.jsx("button",{onClick:()=>t([100,1500]),children:"Reset"})]})},W=()=>{const[e,t]=a.useState([1e3,9e3]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(g,{values:e,onChange:r=>t(r),min:0,max:1e4,step:100,showTooltip:!0,markers:!0,showInputs:!0}),n.jsx("button",{onClick:()=>t([1e3,9e3]),children:"Reset"})]})},O=()=>{const[e,t]=a.useState([10,1e3]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(g,{values:e,onChange:r=>t(r),min:0,max:4e3,showTooltip:!0,markers:!0,showInputs:!0,markerCount:9}),n.jsx("button",{onClick:()=>t([10,1e3]),children:"Reset"})]})},U=()=>{const[e,t]=a.useState([0,1e4]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(g,{values:e,onChange:r=>t(r),min:0,max:1e4,showTooltip:!0,markers:!0,showInputs:!0,markerCount:21,step:100}),n.jsx("button",{onClick:()=>t([0,1e4]),children:"Reset"})]})},X=()=>{const[e,t]=a.useState(625e3);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(g,{onChange:r=>t(r),value:e,disabled:!0,min:1e3,max:1e7,step:1e3})]})},Y=()=>{const[e,t]=a.useState(625e3),[r,u]=a.useState(e);return n.jsxs("div",{children:[n.jsx("output",{children:r}),n.jsx(g,{onChange:o=>t(o),onChangeAfter:o=>u(o),value:e,min:1e3,max:1e7,step:1e3})]})};A.__docgenInfo={description:"",methods:[],displayName:"Regular"};N.__docgenInfo={description:"",methods:[],displayName:"Regular2"};q.__docgenInfo={description:"",methods:[],displayName:"Regular3"};E.__docgenInfo={description:"",methods:[],displayName:"Regular4"};M.__docgenInfo={description:"",methods:[],displayName:"Regular5"};D.__docgenInfo={description:"",methods:[],displayName:"Range"};F.__docgenInfo={description:"",methods:[],displayName:"Range2"};W.__docgenInfo={description:"",methods:[],displayName:"Range4"};O.__docgenInfo={description:"",methods:[],displayName:"Range5"};U.__docgenInfo={description:"",methods:[],displayName:"Range6"};X.__docgenInfo={description:"",methods:[],displayName:"Disabled"};Y.__docgenInfo={description:"",methods:[],displayName:"ChangeAfter"};var xe,be,we;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={10} showInputs />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(we=(be=A.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var ye,ke,Ce;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount={30} step="auto" />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(Ce=(ke=N.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var Re,Se,Ve;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount="auto" step={2000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(Ve=(Se=q.parameters)==null?void 0:Se.docs)==null?void 0:Ve.source}}};var je,Te,Ie;E.parameters={...E.parameters,docs:{...(je=E.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={0} max={6} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(Ie=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source}}};var _e,Ae,Ne;M.parameters={...M.parameters,docs:{...(_e=M.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={1} max={8} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(Ne=(Ae=M.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var qe,Ee,Me;D.parameters={...D.parameters,docs:{...(qe=D.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 5008970]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={1000} max={10_000_000} step={1000} showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>;
}`,...(Me=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source}}};var De,Fe,We;F.parameters={...F.parameters,docs:{...(De=F.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([100, 1500]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={100} max={1500} step={10} showTooltip markers showInputs />
      <button onClick={() => setValues([100, 1500])}>Reset</button>
    </div>;
}`,...(We=(Fe=F.parameters)==null?void 0:Fe.docs)==null?void 0:We.source}}};var Oe,Ue,Xe;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 9000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={10000} step={100} showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 9000])}>Reset</button>
    </div>;
}`,...(Xe=(Ue=W.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,$e,Ke;O.parameters={...O.parameters,docs:{...(Ye=O.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([10, 1000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={4000} showTooltip markers showInputs markerCount={9} />
      <button onClick={() => setValues([10, 1000])}>Reset</button>
    </div>;
}`,...(Ke=($e=O.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Pe,ze,Le;U.parameters={...U.parameters,docs:{...(Pe=U.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([0, 10000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={10000} showTooltip markers showInputs markerCount={21} step={100} />
      <button onClick={() => setValues([0, 10000])}>Reset</button>
    </div>;
}`,...(Le=(ze=U.parameters)==null?void 0:ze.docs)==null?void 0:Le.source}}};var Be,He,Ge;X.parameters={...X.parameters,docs:{...(Be=X.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Ge=(He=X.parameters)==null?void 0:He.docs)==null?void 0:Ge.source}}};var Je,Qe,Ze;Y.parameters={...Y.parameters,docs:{...(Je=Y.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);
  return <div>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Ze=(Qe=Y.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};const Gt=["Regular","Regular2","Regular3","Regular4","Regular5","Range","Range2","Range4","Range5","Range6","Disabled","ChangeAfter"];export{Y as ChangeAfter,X as Disabled,D as Range,F as Range2,W as Range4,O as Range5,U as Range6,A as Regular,N as Regular2,q as Regular3,E as Regular4,M as Regular5,Gt as __namedExportsOrder,Ht as default};
