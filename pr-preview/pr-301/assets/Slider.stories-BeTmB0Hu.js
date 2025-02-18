import{j as n}from"./index-DSOYRR-y.js";import{r as a}from"./index-RYns6xqu.js";import"./unstyled-heading-B2wjEl7S.js";import"./help-text-BWbwCBp4.js";import"./component-CA_utTiw.js";import"./component-DGkHE89C.js";import"./component-CPUGlFdC.js";import"./component-CFTMq9rF.js";import"./component-C2cg9OAn.js";import"./component-DfcuE9an.js";import"./component-Dl300uvO.js";import"./component-DEMQPCsw.js";import"./component-BOaFOH0e.js";import"./component-DXMdkRbQ.js";import"./component-BnN6aAmj.js";import"./component-BoklHLeD.js";import"./step-U_ZgDATq.js";import"./component-BUVcJvVe.js";import"./component-tabs-CEajmaHx.js";import"./component-BqfkGBST.js";import{T as me}from"./component-DwXPycX6.js";import"./component-Blth2Uzk.js";import"./Pagination-B6VpBs_V.js";import"./index.m-CtIADANO.js";import"./close-16-cHDvCKuO.js";import"./index-C6dB-k_R.js";import"./item-BU3_qfee.js";import"./info-16-CkEITmUl.js";import"./i18n-BJez-btc.js";import"./chevron-down-16-yi201Ybz.js";const ut=`
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
`;function f({min:e=0,max:t=100,step:s=1,value:u,values:o,disabled:p,onChange:g,onChangeAfter:w,"aria-label":h,"aria-labelledby":R,"aria-valuetext":Ze,keyboardStepFactor:et=.04,showTooltip:tt=!1,markers:se=!1,markerCount:K=10,showInputs:z=!1}){const d=(o?"range":"standard")==="range",v=a.useMemo(()=>mt(s,se,K,t,e),[]),U=()=>o?ne(o,v):[e,C(u,v)],L=a.useCallback(r=>{var y;let i=C(r[1]-r[0],v)/(t-e);const l=((y=S.current)==null?void 0:y.clientWidth)||500;return i*l<24?(t-e)/l*24:0},[]),[c,re]=a.useState(()=>U()),[V,X]=a.useState(()=>U()),[B,H]=a.useState(!1),G=a.useRef(null),S=a.useRef(null),x=a.useRef(null),b=a.useRef(null),ae=a.useRef(null),oe=a.useRef(null),ue=a.useRef(0),J=tt&&B;a.useEffect(()=>{if(ct(u,o,e,t),!(document.activeElement===x.current||document.activeElement===b.current)){const r=U();re(r),o?X(o):u&&X([0,u]),he(G,r,S,d,t,e),T({values:o,value:u},d,x,b)}},[o,u]),a.useEffect(()=>{T({values:o,value:u},d,x,b)},[x.current,b.current]),a.useEffect(()=>{!B&&w&&w(d?c:c[1])},[B,c]),a.useEffect(()=>{x.current&&x.current.setAttribute("value",c[0]),b.current&&b.current.setAttribute("value",c[1])},[c]);const Q=a.useCallback((r,i)=>{const l={left:-1,right:1},m=t*et,y=c[i]+l[r]*m,k=ee(y,i,d,c,e,t,v,!0);T({values:k,value:y},d,x,b),j(k,i)},[c]),nt=a.useCallback((r,i)=>{["ArrowUp","ArrowDown"].includes(r.key)&&r.preventDefault(),["ArrowLeft","ArrowRight"].includes(r.key)&&(H(!0),r.key==="ArrowLeft"&&Q("left",i),r.key==="ArrowRight"&&Q("right",i))},[Q]),ie=a.useCallback(r=>{if(H(!0),!p&&r.target.nodeName!=="INPUT"){const i=r.touches?pt(r):r.nativeEvent.offsetX,l=S.current.clientWidth,m=C(i/l*(t-e)+e,v),y=(c[0]+c[1])/2,k=m>C(y,v)?1:0,$=ee(m,k,d,c,e,t,v);j($,k),T({values:$,value:$[1]},d,x,b)}},[o,u,c]),j=a.useCallback((r,i,l=!0)=>{if(clearTimeout(ue.current),d){const m=L(r);m>0&&(i==0?r[0]=r[1]-m:r[1]=r[0]+m),T({values:r,value:r[1]},d,x,b)}ue.current=setTimeout(()=>{r=Qe(r,e,t),re(r),z&&l&&X(r),g&&g(d?[Math.round(r[0]),Math.round(r[1])]:Math.round(r[1]))},1),he(G,r,S,d,t,e)},[]),st=a.useCallback((r,i)=>{const l=ee(+r.target.value,i,d,c,e,t,v);j(l,i)},[c]),Y=()=>{le()},le=()=>{H(!1)},ce=a.useCallback((r,i)=>p?n.jsx("input",{type:"range",disabled:!0,value:c[r],min:e,max:t}):n.jsx("input",{ref:i,type:"range",step:v,min:e,max:t,onKeyDown:l=>nt(l,r),onKeyUp:le,onChange:l=>st(l,r),...lt({ariaLabel:h,ariaLabelledBy:R,ariaValueText:Ze})}),[c]),de=(r,i)=>{const l=+r.target.value,m=i==0?[l,V[1]]:[V[0],l];X(m);const y=L(m);if(i==0){const k=[l,c[1]];l>=e&&l<=c[1]-y&&j(k,i,!1)}else if(i==1){const k=[c[0],l];(d?l<=t&&l>=c[0]+y:l<=t)&&j(k,i,!1)}},Z=a.useMemo(()=>K==="auto"&&typeof v=="number"?(t-e)/v+1:K,[]),rt=a.useCallback(()=>Array.from(Array(Z).keys()).map(r=>{let i="";if(Z<15&&(i=(t-e)/(Z-1)*r+e,t>100)){const l=t.toString().length-1,m=ft(i/10**l,1);i=m>0?m+"e"+l:0}return n.jsxs("div",{className:"marker",children:[n.jsx("div",{children:"|"}),n.jsx("div",{children:i})]},r)}),[]),[at,ot]=J?it(U(),t,e):[0,0],pe=z?ht(V,e,t,[ae,oe],L):[!0,!0];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:ut}),n.jsxs("div",{className:"ccSlider.wrapper wrapper",onContextMenu:r=>r.preventDefault(),children:[n.jsxs("div",{className:"active-track",ref:G,children:[n.jsx(fe,{display:J&&d,top:document.activeElement===x.current,transform:`translateY(-50px) translateX(calc(-50% + ${at}px))`,children:c[0]}),n.jsx(fe,{display:J,top:document.activeElement===b.current,transform:`translateY(-50px) translateX(calc(50% + ${ot}px))`,children:c[1]})]}),n.jsxs("div",{className:"input-wrapper",ref:S,onMouseDown:ie,onTouchStart:ie,onKeyUp:Y,onMouseUp:Y,onTouchEnd:Y,onMouseOut:Y,children:[d&&ce(0,x),ce(1,b),n.jsx("div",{className:"steps",children:se&&rt()})]}),z&&n.jsxs("div",{className:`inputs ${d?"dual":""}`,children:[d&&n.jsx(me,{value:V[0].toString(),ref:ae,invalid:!pe[0],onChange:r=>de(r,0)}),n.jsx(me,{value:V[1].toString(),ref:oe,invalid:!pe[1],onChange:r=>de(r,1)})]})]})]})}const it=(e,t,s)=>{const u=-((e[0]-s)/(t-s)-.5)*24,o=-((e[1]-s)/(t-s)-.5)*24;return[u,o]};function lt({ariaLabel:e,ariaLabelledBy:t,ariaValueText:s}){return{"aria-label":e,"aria-labelledby":t,"aria-valuetext":s}}function te(e,t,s){return Math.min(Math.max(e,t),s)}function ct(e,t,s,u){(e&&e<s||t&&t[0]<s)&&console.warn("Value too low."),(e&&e>u||t&&t[1]>u)&&console.warn("Value too high.")}function T({value:e,values:t},s,u,o){s?(u.current&&(u.current.value=t[0]),o.current&&(o.current.value=t[1])):o.current&&(o.current.value=e)}const ee=(e,t=1,s,u,o,p,g,w=!1)=>{let h;return e=Math.round(e),s?t===1?h=[u[0],e]:h=[e,u[1]]:h=[o,e],w?Qe(ne(h,g),o,p):ne(h,g)},dt=(e,t,s,u,o)=>{var h;let p=(e[1]-e[0])/(u-o);const g=((h=t.current)==null?void 0:h.clientWidth)||500;(p<0||p>1)&&(console.warn("Values outside of range."),p=te(p,0,1));const w=s?(e[0]-o)/(u-o)*g:0;return`
    width: ${p*100+"%"};
    margin-left: ${w+"px"};`},he=(e,t,s,u,o,p)=>{e.current&&(e.current.style.cssText=dt(t,s,u,o,p))},Qe=(e,t,s)=>[te(e[0],t,s),te(e[1],t,s)],pt=e=>{const t=e.target.getBoundingClientRect(),s=e.touches[0].clientX-t.left;return Math.round(s)},C=(e,t)=>t>1?Math.round(e/t)*t:e,ne=(e,t)=>[C(e[0],t),C(e[1],t)],mt=(e,t,s,u,o)=>{let p=e;if(t){const g=s;p=typeof e=="number"?e:Math.round((u-o)/(g-1))}return p},fe=e=>n.jsx("div",{className:"tooltip",style:{transform:e.transform,visibility:e.display?"visible":"hidden",zIndex:e.top?10:1},children:Math.round(e.children)});function ht([e,t],s,u,[o,p],g){let w=!0,h=!0;if((e<s||e>u)&&(w=!1),(t>u||t<s)&&(h=!1),document.activeElement===o.current){const R=g([e,t]);e+R>t&&(w=!1)}if(document.activeElement===p.current){const R=g([e,t]);t<e+R&&(h=!1)}return[w,h]}function ft(e,t){const s=10**t;return Math.round(e*s)/s}f.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onChange:{required:!1,tsType:{name:"any"},description:""},onChangeAfter:{required:!1,tsType:{name:"any"},description:""},max:{required:!1,tsType:{name:"number"},description:`The greatest value in the range of permitted values
@default 100`,defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`The lowest value in the range of permitted values
@default 0`,defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"Specifies the value granularity",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled"},"aria-label":{required:!1,tsType:{name:"string"},description:"String value that labels the slider"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element that labels the slider"},"aria-valuetext":{required:!1,tsType:{name:"string"},description:"Human readable text alternative for the value"},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.04",computed:!1}},markers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},markerCount:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"10",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showInputs:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Lt={title:"Forms/Slider"},I=()=>{const[e,t]=a.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(f,{onChange:s=>t(s),value:e,min:1e4,max:6e4,step:10,showInputs:!0}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},_=()=>{const[e,t]=a.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(f,{onChange:s=>t(s),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:30,step:"auto"}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},A=()=>{const[e,t]=a.useState(2e4);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(f,{onChange:s=>t(s),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:"auto",step:2e3}),n.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},N=()=>{const[e,t]=a.useState(3);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(f,{onChange:s=>t(s),value:e,min:0,max:6,showTooltip:!0,markers:!0,markerCount:"auto",showInputs:!0}),n.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},M=()=>{const[e,t]=a.useState(3);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(f,{onChange:s=>t(s),value:e,min:1,max:8,showTooltip:!0,markers:!0,markerCount:"auto",showInputs:!0}),n.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},q=()=>{const[e,t]=a.useState([1e3,5008970]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(f,{values:e,onChange:s=>t(s),min:1e3,max:1e7,step:1e3,showTooltip:!0,markers:!0,showInputs:!0}),n.jsx("button",{onClick:()=>t([1e3,5008970]),children:"Reset"})]})},E=()=>{const[e,t]=a.useState([100,1500]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(f,{values:e,onChange:s=>t(s),min:100,max:1500,step:10,showTooltip:!0,markers:!0,showInputs:!0}),n.jsx("button",{onClick:()=>t([100,1500]),children:"Reset"})]})},D=()=>{const[e,t]=a.useState([1e3,9e3]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(f,{values:e,onChange:s=>t(s),min:0,max:1e4,step:100,showTooltip:!0,markers:!0,showInputs:!0}),n.jsx("button",{onClick:()=>t([1e3,9e3]),children:"Reset"})]})},F=()=>{const[e,t]=a.useState([10,1e3]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(f,{values:e,onChange:s=>t(s),min:0,max:4e3,showTooltip:!0,markers:!0,showInputs:!0,markerCount:9}),n.jsx("button",{onClick:()=>t([10,1e3]),children:"Reset"})]})},P=()=>{const[e,t]=a.useState([0,1e4]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(f,{values:e,onChange:s=>t(s),min:0,max:1e4,showTooltip:!0,markers:!0,showInputs:!0,markerCount:21,step:100}),n.jsx("button",{onClick:()=>t([0,1e4]),children:"Reset"})]})},W=()=>{const[e,t]=a.useState(625e3);return n.jsxs("div",{children:[n.jsx("output",{children:e}),n.jsx(f,{onChange:s=>t(s),value:e,disabled:!0,min:1e3,max:1e7,step:1e3})]})},O=()=>{const[e,t]=a.useState(625e3),[s,u]=a.useState(e);return n.jsxs("div",{children:[n.jsx("output",{children:s}),n.jsx(f,{onChange:o=>t(o),onChangeAfter:o=>u(o),value:e,min:1e3,max:1e7,step:1e3})]})};I.__docgenInfo={description:"",methods:[],displayName:"Regular"};_.__docgenInfo={description:"",methods:[],displayName:"Regular2"};A.__docgenInfo={description:"",methods:[],displayName:"Regular3"};N.__docgenInfo={description:"",methods:[],displayName:"Regular4"};M.__docgenInfo={description:"",methods:[],displayName:"Regular5"};q.__docgenInfo={description:"",methods:[],displayName:"Range"};E.__docgenInfo={description:"",methods:[],displayName:"Range2"};D.__docgenInfo={description:"",methods:[],displayName:"Range4"};F.__docgenInfo={description:"",methods:[],displayName:"Range5"};P.__docgenInfo={description:"",methods:[],displayName:"Range6"};W.__docgenInfo={description:"",methods:[],displayName:"Disabled"};O.__docgenInfo={description:"",methods:[],displayName:"ChangeAfter"};var ge,ve,xe;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={10} showInputs />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(xe=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var be,we,ye;_.parameters={..._.parameters,docs:{...(be=_.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount={30} step="auto" />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(ye=(we=_.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var ke,Ce,Re;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount="auto" step={2000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(Re=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:Re.source}}};var Ve,Se,je;N.parameters={...N.parameters,docs:{...(Ve=N.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={0} max={6} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(je=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var Te,Ie,_e;M.parameters={...M.parameters,docs:{...(Te=M.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={1} max={8} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(_e=(Ie=M.parameters)==null?void 0:Ie.docs)==null?void 0:_e.source}}};var Ae,Ne,Me;q.parameters={...q.parameters,docs:{...(Ae=q.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 5008970]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={1000} max={10_000_000} step={1000} showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>;
}`,...(Me=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};var qe,Ee,De;E.parameters={...E.parameters,docs:{...(qe=E.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([100, 1500]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={100} max={1500} step={10} showTooltip markers showInputs />
      <button onClick={() => setValues([100, 1500])}>Reset</button>
    </div>;
}`,...(De=(Ee=E.parameters)==null?void 0:Ee.docs)==null?void 0:De.source}}};var Fe,Pe,We;D.parameters={...D.parameters,docs:{...(Fe=D.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 9000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={10000} step={100} showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 9000])}>Reset</button>
    </div>;
}`,...(We=(Pe=D.parameters)==null?void 0:Pe.docs)==null?void 0:We.source}}};var Oe,Ue,Xe;F.parameters={...F.parameters,docs:{...(Oe=F.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([10, 1000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={4000} showTooltip markers showInputs markerCount={9} />
      <button onClick={() => setValues([10, 1000])}>Reset</button>
    </div>;
}`,...(Xe=(Ue=F.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,$e,Ke;P.parameters={...P.parameters,docs:{...(Ye=P.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([0, 10000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={10000} showTooltip markers showInputs markerCount={21} step={100} />
      <button onClick={() => setValues([0, 10000])}>Reset</button>
    </div>;
}`,...(Ke=($e=P.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var ze,Le,Be;W.parameters={...W.parameters,docs:{...(ze=W.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Be=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var He,Ge,Je;O.parameters={...O.parameters,docs:{...(He=O.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);
  return <div>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Je=(Ge=O.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};const Bt=["Regular","Regular2","Regular3","Regular4","Regular5","Range","Range2","Range4","Range5","Range6","Disabled","ChangeAfter"];export{O as ChangeAfter,W as Disabled,q as Range,E as Range2,D as Range4,F as Range5,P as Range6,I as Regular,_ as Regular2,A as Regular3,N as Regular4,M as Regular5,Bt as __namedExportsOrder,Lt as default};
