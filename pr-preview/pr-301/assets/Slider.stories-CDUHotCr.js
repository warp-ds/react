import{j as n}from"./index-DSOYRR-y.js";import{r as a}from"./index-RYns6xqu.js";import"./unstyled-heading-B2wjEl7S.js";import"./help-text-BWbwCBp4.js";import"./component-CA_utTiw.js";import"./component-DGkHE89C.js";import"./component-CPUGlFdC.js";import"./component-CFTMq9rF.js";import"./component-C2cg9OAn.js";import"./component-DfcuE9an.js";import"./component-Dl300uvO.js";import"./component-DEMQPCsw.js";import"./component-BOaFOH0e.js";import"./component-DXMdkRbQ.js";import"./component-BnN6aAmj.js";import"./component-BoklHLeD.js";import"./step-U_ZgDATq.js";import"./component-BUVcJvVe.js";import"./component-tabs-CEajmaHx.js";import"./component-BqfkGBST.js";import{T as ge}from"./component-DwXPycX6.js";import"./component-Blth2Uzk.js";import"./Pagination-B6VpBs_V.js";import"./index.m-CtIADANO.js";import"./close-16-cHDvCKuO.js";import"./index-C6dB-k_R.js";import"./item-BU3_qfee.js";import"./info-16-CkEITmUl.js";import"./i18n-BJez-btc.js";import"./chevron-down-16-yi201Ybz.js";function R(e,t){if(!t)return Math.round(e);const s=10**(t||0);return Math.round(e*s)/s}function ae(e,t,s){return Math.min(Math.max(e,t),s)}function rt(e,t,s){return[ae(e[0],t,s),ae(e[1],t,s)]}const B=28,mt=`
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
`;function g({min:e=0,max:t=100,step:s=1,value:u,values:o,disabled:p,onChange:v,onChangeAfter:w,"aria-label":f,"aria-labelledby":j,"aria-valuetext":at,keyboardStepFactor:ot=.04,showTooltip:ut=!1,markers:ue=!1,markerCount:H=10,showInputs:G=!1}){const d=(o?"range":"standard")==="range",k=a.useMemo(()=>bt(s,ue,H,t,e),[]),$=()=>o?oe(o,k):[e,C(u,k)],[l,ie]=a.useState(()=>$()),[T,K]=a.useState(()=>$()),[J,z]=a.useState(!1),Q=a.useRef(null),S=a.useRef(null),x=a.useRef(null),b=a.useRef(null),le=a.useRef(null),ce=a.useRef(null),de=a.useRef(0),Z=ut&&J,ee=a.useCallback(r=>{var m;const i=((m=S.current)==null?void 0:m.clientWidth)||500;return(r[1]-r[0])/(t-e)*i<B?(t-e)/i*B:0},[S.current]);a.useEffect(()=>{if(gt(u,o,e,t),!(document.activeElement===x.current||document.activeElement===b.current)){const r=$();ie(r),o?K(o):u&&K([0,u]),ve(Q,r,S,d,t,e),_({values:o,value:u},d,x,b)}},[o,u]),a.useEffect(()=>{_({values:o,value:u},d,x,b)},[x.current,b.current]),a.useEffect(()=>{!J&&w&&w(d?l:l[1])},[J,l]),a.useEffect(()=>{x.current&&x.current.setAttribute("value",l[0].toString()),b.current&&b.current.setAttribute("value",l[1].toString())},[l]);const te=a.useCallback((r,i)=>{const c={left:-1,right:1},h=t*ot,m=l[i]+c[r]*h,y=re(m,i,d,l,e,t,k,!0);_({values:y,value:m},d,x,b),I(y,i)},[l]),it=a.useCallback((r,i)=>{["ArrowUp","ArrowDown"].includes(r.key)&&r.preventDefault(),["ArrowLeft","ArrowRight"].includes(r.key)&&(z(!0),r.key==="ArrowLeft"&&te("left",i),r.key==="ArrowRight"&&te("right",i))},[te]),pe=a.useCallback(r=>{if(z(!0),!p&&r.target.nodeName!=="INPUT"){const i=r.touches?xt(r):r.nativeEvent.offsetX,c=S.current.clientWidth,h=C(i/c*(t-e)+e,k),m=(l[0]+l[1])/2,y=h>C(m,k)?1:0,V=re(h,y,d,l,e,t,k);I(V,y),_({values:V,value:V[1]},d,x,b)}},[o,u,l]),I=a.useCallback((r,i,c=!0)=>{if(clearTimeout(de.current),d){const h=ee(r);h>0&&(i==0?r[0]=C(r[1]-h,s):r[1]=C(r[0]+h,s)),_({values:r,value:r[1]},d,x,b)}de.current=setTimeout(()=>{r=rt(r,e,t),ie(r),G&&c&&K(r),v&&v(d?[R(r[0]),R(r[1])]:Math.round(r[1]))},1),ve(Q,r,S,d,t,e)},[]),lt=a.useCallback((r,i)=>{const c=re(+r.target.value,i,d,l,e,t,k);I(c,i)},[l]),L=()=>z(!1),me=a.useCallback((r,i)=>p?n.jsx("input",{type:"range",disabled:!0,value:l[r],min:e,max:t}):n.jsx("input",{ref:i,type:"range",step:k,min:e,max:t,onKeyDown:c=>it(c,r),onKeyUp:()=>z(!1),onChange:c=>lt(c,r),...ft({ariaLabel:f,ariaLabelledBy:j,ariaValueText:at})}),[l]),he=a.useCallback((r,i,c,h)=>{const m=+r.target.value,y=i==0?[m,h[1]]:[h[0],m];K(y);const V=ee(y);if(i==0){const se=[m,c[1]];m>=e&&m<=c[1]-V&&I(se,i,!1)}else if(i==1){const se=[c[0],m];(d?m<=t&&m>=c[0]+V:m<=t)&&I(se,i,!1)}},[]),ne=a.useMemo(()=>H==="auto"&&typeof k=="number"?(t-e)/k+1:H,[]),ct=a.useCallback(()=>Array.from(Array(ne).keys()).map(r=>{let i="";if(ne<15&&(i=(t-e)/(ne-1)*r+e,t>100)){const c=t.toString().length-1,h=R(i/10**c,1);i=h>0?h+"e"+c:0}return n.jsxs("div",{className:"marker",children:[n.jsx("div",{children:"|"}),n.jsx("div",{children:i})]},r)}),[]),[dt,pt]=Z?ht($(),t,e):[0,0],fe=G?wt(T,e,t,[le,ce],ee):[!0,!0];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:mt}),n.jsxs("div",{className:"ccSlider.wrapper wrapper",onContextMenu:r=>r.preventDefault(),children:[n.jsxs("div",{className:"active-track",ref:Q,children:[n.jsx(xe,{display:Z&&d,top:document.activeElement===x.current,transform:`translateY(-50px) translateX(calc(-50% + ${dt}px))`,children:l[0]}),n.jsx(xe,{display:Z,top:document.activeElement===b.current,transform:`translateY(-50px) translateX(calc(50% + ${pt}px))`,children:l[1]})]}),n.jsxs("div",{className:"input-wrapper",ref:S,onMouseDown:pe,onTouchStart:pe,onKeyUp:L,onMouseUp:L,onTouchEnd:L,onMouseOut:L,children:[d&&me(0,x),me(1,b),n.jsx("div",{className:"steps",children:ue&&ct()})]}),G&&n.jsxs("div",{className:`inputs ${d?"dual":""}`,children:[d&&n.jsx(ge,{value:T[0].toString(),ref:le,invalid:!fe[0],onChange:r=>he(r,0,l,T)}),n.jsx(ge,{value:T[1].toString(),ref:ce,invalid:!fe[1],onChange:r=>he(r,1,l,T)})]})]})]})}const ht=(e,t,s)=>{const u=-((e[0]-s)/(t-s)-.5)*B,o=-((e[1]-s)/(t-s)-.5)*B;return[u,o]};function ft({ariaLabel:e,ariaLabelledBy:t,ariaValueText:s}){return{"aria-label":e,"aria-labelledby":t,"aria-valuetext":s}}function gt(e,t,s,u){(e&&e<s||t&&t[0]<s)&&console.warn("Value too low."),(e&&e>u||t&&t[1]>u)&&console.warn("Value too high.")}function _({value:e,values:t},s,u,o){s?(u.current&&(u.current.value=t[0]),o.current&&(o.current.value=t[1])):o.current&&(o.current.value=e)}const re=(e,t=1,s,u,o,p,v,w=!1)=>{let f;return e=Math.round(e),s?t===1?f=[u[0],e]:f=[e,u[1]]:f=[o,e],w?rt(oe(f,v),o,p):oe(f,v)},vt=(e,t,s,u,o)=>{var f;let p=(e[1]-e[0])/(u-o);const v=((f=t.current)==null?void 0:f.clientWidth)||500;(p<0||p>1)&&(console.warn("Values outside of range."),p=ae(p,0,1));const w=s?(e[0]-o)/(u-o)*v:0;return`
    width: ${p*100+"%"};
    margin-left: ${w+"px"};`},ve=(e,t,s,u,o,p)=>{e.current&&(e.current.style.cssText=vt(t,s,u,o,p))},xt=e=>{const t=e.target.getBoundingClientRect(),s=e.touches[0].clientX-t.left;return R(s)},C=(e,t)=>typeof t!="string"&&t>1?R(e/t)*t:R(e),oe=(e,t)=>[C(e[0],t),C(e[1],t)],bt=(e,t,s,u,o)=>{let p=e;if(t){const v=s;p=typeof e=="number"?e:R((u-o)/(v-1))}return p},xe=({transform:e,display:t,top:s,children:u})=>n.jsx("div",{className:"tooltip",style:{transform:e,visibility:t?"visible":"hidden",zIndex:s?10:1},children:u});function wt([e,t],s,u,[o,p],v){let w=!0,f=!0;if((e<s||e>u)&&(w=!1),(t>u||t<s)&&(f=!1),document.activeElement===o.current){const j=v([e,t]);e+j>t&&(w=!1)}if(document.activeElement===p.current){const j=v([e,t]);t<e+j&&(f=!1)}return[w,f]}g.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onChange:{required:!1,tsType:{name:"any"},description:""},onChangeAfter:{required:!1,tsType:{name:"any"},description:""},max:{required:!1,tsType:{name:"number"},description:`The greatest value in the range of permitted values
@default 100`,defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`The lowest value in the range of permitted values
@default 0`,defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"Specifies the value granularity",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled"},"aria-label":{required:!1,tsType:{name:"string"},description:"String value that labels the slider"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element that labels the slider"},"aria-valuetext":{required:!1,tsType:{name:"string"},description:"Human readable text alternative for the value"},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.04",computed:!1}},markers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},markerCount:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"10",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showInputs:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Zt={title:"Forms/Slider"},A=()=>{const[e,t]=a.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(g,{onChange:s=>t(s),value:e,min:1e4,max:6e4,step:10,showInputs:!0}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},N=()=>{const[e,t]=a.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(g,{onChange:s=>t(s),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:30,step:"auto"}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},q=()=>{const[e,t]=a.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(g,{onChange:s=>t(s),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:"auto",step:2e3}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},E=()=>{const[e,t]=a.useState(3);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(g,{onChange:s=>t(s),value:e,min:0,max:6,showTooltip:!0,markers:!0,markerCount:"auto",showInputs:!0}),n.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},M=()=>{const[e,t]=a.useState(3);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(g,{onChange:s=>t(s),value:e,min:1,max:8,showTooltip:!0,markers:!0,markerCount:"auto",showInputs:!0}),n.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},D=()=>{const[e,t]=a.useState([1e3,5008970]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(g,{values:e,onChange:s=>t(s),min:1e3,max:1e7,step:1e3,showTooltip:!0,markers:!0,showInputs:!0}),n.jsx("button",{onClick:()=>t([1e3,5008970]),children:"Reset"})]})},F=()=>{const[e,t]=a.useState([100,1500]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(g,{values:e,onChange:s=>t(s),min:100,max:1500,step:10,showTooltip:!0,markers:!0,showInputs:!0}),n.jsx("button",{onClick:()=>t([100,1500]),children:"Reset"})]})},W=()=>{const[e,t]=a.useState([1e3,9e3]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(g,{values:e,onChange:s=>t(s),min:0,max:1e4,step:100,markerCount:3,showTooltip:!0,markers:!0,showInputs:!0}),n.jsx("button",{onClick:()=>t([1e3,9e3]),children:"Reset"})]})},P=()=>{const[e,t]=a.useState([10,1e3]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(g,{values:e,onChange:s=>t(s),min:0,max:4e3,showTooltip:!0,markers:!0,showInputs:!0,markerCount:3}),n.jsx("button",{onClick:()=>t([10,1e3]),children:"Reset"})]})},O=()=>{const[e,t]=a.useState([0,1e4]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(g,{values:e,onChange:s=>t(s),min:0,max:1e4,showTooltip:!0,markers:!0,showInputs:!0,markerCount:21,step:100}),n.jsx("button",{onClick:()=>t([0,1e4]),children:"Reset"})]})},U=()=>{const[e,t]=a.useState([1,15]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(g,{values:e,onChange:s=>t(s),min:0,max:20,step:1,markerCount:5,showTooltip:!0,markers:!0,showInputs:!0}),n.jsx("button",{onClick:()=>t([1,15]),children:"Reset"})]})},X=()=>{const[e,t]=a.useState(625e3);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(g,{onChange:s=>t(s),value:e,disabled:!0,min:1e3,max:1e7,step:1e3})]})},Y=()=>{const[e,t]=a.useState(625e3),[s,u]=a.useState(e);return n.jsxs("div",{children:[n.jsx("output",{children:s}),n.jsx(g,{onChange:o=>t(o),onChangeAfter:o=>u(o),value:e,min:1e3,max:1e7,step:1e3})]})};A.__docgenInfo={description:"",methods:[],displayName:"Regular"};N.__docgenInfo={description:"",methods:[],displayName:"Regular2"};q.__docgenInfo={description:"",methods:[],displayName:"Regular3"};E.__docgenInfo={description:"",methods:[],displayName:"Regular4"};M.__docgenInfo={description:"",methods:[],displayName:"Regular5"};D.__docgenInfo={description:"",methods:[],displayName:"Range"};F.__docgenInfo={description:"",methods:[],displayName:"Range2"};W.__docgenInfo={description:"",methods:[],displayName:"Range4"};P.__docgenInfo={description:"",methods:[],displayName:"Range5"};O.__docgenInfo={description:"",methods:[],displayName:"Range6"};U.__docgenInfo={description:"",methods:[],displayName:"Range7"};X.__docgenInfo={description:"",methods:[],displayName:"Disabled"};Y.__docgenInfo={description:"",methods:[],displayName:"ChangeAfter"};var be,we,ke;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={10} showInputs />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(ke=(we=A.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var ye,Ce,Re;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount={30} step="auto" />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(Re=(Ce=N.parameters)==null?void 0:Ce.docs)==null?void 0:Re.source}}};var Se,Ve,je;q.parameters={...q.parameters,docs:{...(Se=q.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount="auto" step={2000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(je=(Ve=q.parameters)==null?void 0:Ve.docs)==null?void 0:je.source}}};var Te,Ie,_e;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={0} max={6} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(_e=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:_e.source}}};var Ae,Ne,qe;M.parameters={...M.parameters,docs:{...(Ae=M.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={1} max={8} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(qe=(Ne=M.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var Ee,Me,De;D.parameters={...D.parameters,docs:{...(Ee=D.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 5008970]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={1000} max={10_000_000} step={1000} showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>;
}`,...(De=(Me=D.parameters)==null?void 0:Me.docs)==null?void 0:De.source}}};var Fe,We,Pe;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([100, 1500]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={100} max={1500} step={10} showTooltip markers showInputs />
      <button onClick={() => setValues([100, 1500])}>Reset</button>
    </div>;
}`,...(Pe=(We=F.parameters)==null?void 0:We.docs)==null?void 0:Pe.source}}};var Oe,Ue,Xe;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 9000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={10000} step={100} markerCount={3} showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 9000])}>Reset</button>
    </div>;
}`,...(Xe=(Ue=W.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,$e,Ke;P.parameters={...P.parameters,docs:{...(Ye=P.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([10, 1000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={4000} showTooltip markers showInputs markerCount={3} />
      <button onClick={() => setValues([10, 1000])}>Reset</button>
    </div>;
}`,...(Ke=($e=P.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var ze,Le,Be;O.parameters={...O.parameters,docs:{...(ze=O.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([0, 10000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={10000} showTooltip markers showInputs markerCount={21} step={100} />
      <button onClick={() => setValues([0, 10000])}>Reset</button>
    </div>;
}`,...(Be=(Le=O.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var He,Ge,Je;U.parameters={...U.parameters,docs:{...(He=U.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1, 15]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={20} step={1} markerCount={5} showTooltip markers showInputs />
      <button onClick={() => setValues([1, 15])}>Reset</button>
    </div>;
}`,...(Je=(Ge=U.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Qe,Ze,et;X.parameters={...X.parameters,docs:{...(Qe=X.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(et=(Ze=X.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,st;Y.parameters={...Y.parameters,docs:{...(tt=Y.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);
  return <div>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(st=(nt=Y.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};const en=["Regular","Regular2","Regular3","Regular4","Regular5","Range","Range2","Range4","Range5","Range6","Range7","Disabled","ChangeAfter"];export{Y as ChangeAfter,X as Disabled,D as Range,F as Range2,W as Range4,P as Range5,O as Range6,U as Range7,A as Regular,N as Regular2,q as Regular3,E as Regular4,M as Regular5,en as __namedExportsOrder,Zt as default};
