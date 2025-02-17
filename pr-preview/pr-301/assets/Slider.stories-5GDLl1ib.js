import{j as r}from"./index-DSOYRR-y.js";import{r as a}from"./index-RYns6xqu.js";import"./unstyled-heading-B2wjEl7S.js";import"./help-text-BWbwCBp4.js";import"./component-CA_utTiw.js";import"./component-DGkHE89C.js";import"./component-CPUGlFdC.js";import"./component-CFTMq9rF.js";import"./component-C2cg9OAn.js";import"./component-DfcuE9an.js";import"./component-Dl300uvO.js";import"./component-DEMQPCsw.js";import"./component-BOaFOH0e.js";import"./component-DXMdkRbQ.js";import"./component-BnN6aAmj.js";import"./component-BoklHLeD.js";import"./step-U_ZgDATq.js";import"./component-BUVcJvVe.js";import"./component-tabs-CEajmaHx.js";import"./component-BqfkGBST.js";import{T as de}from"./component-DwXPycX6.js";import"./component-Blth2Uzk.js";import"./Pagination-B6VpBs_V.js";import"./index.m-CtIADANO.js";import"./close-16-cHDvCKuO.js";import"./index-C6dB-k_R.js";import"./item-BU3_qfee.js";import"./info-16-CkEITmUl.js";import"./i18n-BJez-btc.js";import"./chevron-down-16-yi201Ybz.js";const Ze=`
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
`;function b({min:e=0,max:t=100,step:n=1,value:u,values:o,disabled:f,onChange:d,onChangeAfter:w,"aria-label":h,"aria-labelledby":V,"aria-valuetext":Ke,keyboardStepFactor:ze=.04,showTooltip:Le=!1,markers:te=!1,markerCount:Y=10,showInputs:$=!1}){const p=(o?"range":"standard")==="range",g=a.useMemo(()=>at(n,te,Y,t,e),[]),W=()=>o?ee(o,g):[e,C(u,g)],K=a.useCallback(s=>{var y;let i=C(s[1]-s[0],g)/(t-e);const l=((y=S.current)==null?void 0:y.clientWidth)||500;return i*l<24?(t-e)/l*24:0},[]),[c,re]=a.useState(()=>W()),[R,O]=a.useState(()=>W()),[z,L]=a.useState(!1),B=a.useRef(null),S=a.useRef(null),v=a.useRef(null),x=a.useRef(null),ne=a.useRef(null),se=a.useRef(null),ae=a.useRef(0),H=Le&&z;a.useEffect(()=>{if(rt(u,o,e,t),!(document.activeElement===v.current||document.activeElement===x.current)){const s=W();re(s),o?O(o):u&&O([0,u]),pe(B,s,S,p,t,e,g),T({values:o,value:u},p,v,x)}},[o,u]),a.useEffect(()=>{T({values:o,value:u},p,v,x)},[v.current,x.current]),a.useEffect(()=>{!z&&w&&w(p?c:c[1])},[z,c]),a.useEffect(()=>{v.current&&v.current.setAttribute("value",c[0]),x.current&&x.current.setAttribute("value",c[1])},[c]);const G=a.useCallback((s,i)=>{const l={left:-1,right:1},m=t*ze,y=c[i]+l[s]*m,k=Q(y,i,p,c,e,t,g,!0);T({values:k,value:y},p,v,x),j(k,i)},[c]),Be=a.useCallback((s,i)=>{["ArrowUp","ArrowDown"].includes(s.key)&&s.preventDefault(),["ArrowLeft","ArrowRight"].includes(s.key)&&(L(!0),s.key==="ArrowLeft"&&G("left",i),s.key==="ArrowRight"&&G("right",i))},[G]),oe=a.useCallback(s=>{if(L(!0),!f&&s.target.nodeName!=="INPUT"){const i=s.touches?st(s):s.nativeEvent.offsetX,l=S.current.clientWidth,m=C(i/l*(t-e)+e,g),y=(c[0]+c[1])/2,k=m>C(y,g)?1:0,X=Q(m,k,p,c,e,t,g);j(X,k),T({values:X,value:X[1]},p,v,x)}},[o,u,c]),j=a.useCallback((s,i,l=!0)=>{if(clearTimeout(ae.current),p){const m=K(s);m>0&&(i==0?s[0]=s[1]-m:s[1]=s[0]+m),T({values:s,value:s[1]},p,v,x)}ae.current=setTimeout(()=>{s=$e(s,e,t),re(s),$&&l&&O(s),d&&d(p?[Math.round(s[0]),Math.round(s[1])]:Math.round(s[1]))},1),pe(B,s,S,p,t,e,g)},[]),He=a.useCallback((s,i)=>{const l=Q(+s.target.value,i,p,c,e,t,g);j(l,i)},[c]),U=()=>{ue()},ue=()=>{L(!1)},ie=a.useCallback((s,i)=>f?r.jsx("input",{type:"range",disabled:!0,value:c[s],min:e,max:t}):r.jsx("input",{ref:i,type:"range",step:g,min:e,max:t,onKeyDown:l=>Be(l,s),onKeyUp:ue,onChange:l=>He(l,s),...tt({ariaLabel:h,ariaLabelledBy:V,ariaValueText:Ke})}),[c]),le=(s,i)=>{const l=+s.target.value,m=i==0?[l,R[1]]:[R[0],l];O(m);const y=K(m);if(i==0){const k=[l,c[1]];l>=e&&l<=c[1]-y&&j(k,i,!1)}else if(i==1){const k=[c[0],l];(p?l<=t&&l>=c[0]+y:l<=t)&&j(k,i,!1)}},J=a.useMemo(()=>Y==="auto"&&typeof g=="number"?(t-e)/g+1:Y,[]),Ge=a.useCallback(()=>Array.from(Array(J).keys()).map(s=>{let i="";if(J<15&&(i=(t-e)/(J-1)*s+e,t>100)){const l=t.toString().length-1,m=ut(i/10**l,1);i=m>0?m+"e"+l:0}return r.jsxs("div",{className:"marker",children:[r.jsx("div",{children:"|"}),r.jsx("div",{children:i})]},s)}),[]),[Je,Qe]=H?et(W(),t,e):[0,0],ce=$?ot(R,e,t,[ne,se],K):[!0,!0];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Ze}),r.jsxs("div",{className:"ccSlider.wrapper wrapper",onContextMenu:s=>s.preventDefault(),children:[r.jsxs("div",{className:"active-track",ref:B,children:[r.jsx(me,{display:H&&p,top:document.activeElement===v.current,transform:`translateY(-50px) translateX(calc(-50% + ${Je}px))`,children:c[0]}),r.jsx(me,{display:H,top:document.activeElement===x.current,transform:`translateY(-50px) translateX(calc(50% + ${Qe}px))`,children:c[1]})]}),r.jsxs("div",{className:"input-wrapper",ref:S,onMouseDown:oe,onTouchStart:oe,onKeyUp:U,onMouseUp:U,onTouchEnd:U,onMouseOut:U,children:[p&&ie(0,v),ie(1,x),r.jsx("div",{className:"steps",children:te&&Ge()})]}),$&&r.jsxs("div",{className:`inputs ${p?"dual":""}`,children:[p&&r.jsx(de,{value:R[0].toString(),ref:ne,invalid:!ce[0],onChange:s=>le(s,0)}),r.jsx(de,{value:R[1].toString(),ref:se,invalid:!ce[1],onChange:s=>le(s,1)})]})]})]})}const et=(e,t,n)=>{const u=-((e[0]-n)/(t-n)-.5)*24,o=-((e[1]-n)/(t-n)-.5)*24;return[u,o]};function tt({ariaLabel:e,ariaLabelledBy:t,ariaValueText:n}){return{"aria-label":e,"aria-labelledby":t,"aria-valuetext":n}}function Z(e,t,n){return Math.min(Math.max(e,t),n)}function rt(e,t,n,u){(e&&e<n||t&&t[0]<n)&&console.warn("Value too low."),(e&&e>u||t&&t[1]>u)&&console.warn("Value too high.")}function T({value:e,values:t},n,u,o){n?(u.current&&(u.current.value=t[0]),o.current&&(o.current.value=t[1])):o.current&&(o.current.value=e)}const Q=(e,t=1,n,u,o,f,d,w=!1)=>{let h;return e=Math.round(e),n?t===1?h=[u[0],e]:h=[e,u[1]]:h=[o,e],w?$e(ee(h,d),o,f):ee(h,d)},nt=(e,t,n,u,o,f)=>{var V;let d=C(e[1]-e[0],f)/(u-o);const w=((V=t.current)==null?void 0:V.clientWidth)||500;(d<0||d>1)&&(console.warn("Values outside of range."),d=Z(d,0,1));const h=n?(e[0]-o)/(u-o)*w:0;return`
    width: ${d*100+"%"};
    margin-left: ${h+"px"};`},pe=(e,t,n,u,o,f,d)=>{e.current&&(e.current.style.cssText=nt(t,n,u,o,f,d))},$e=(e,t,n)=>[Z(e[0],t,n),Z(e[1],t,n)],st=e=>{const t=e.target.getBoundingClientRect(),n=e.touches[0].clientX-t.left;return Math.round(n)},C=(e,t)=>t>1?Math.round(e/t)*t:e,ee=(e,t)=>[C(e[0],t),C(e[1],t)],at=(e,t,n,u,o)=>{let f=e;if(t){const d=n;f=typeof e=="number"?e:Math.round((u-o)/(d-1))}return f},me=e=>r.jsx("div",{className:"tooltip",style:{transform:e.transform,visibility:e.display?"visible":"hidden",zIndex:e.top?10:1},children:Math.round(e.children)});function ot([e,t],n,u,[o,f],d){let w=!0,h=!0;if((e<n||e>u)&&(w=!1),(t>u||t<n)&&(h=!1),document.activeElement===o.current){const V=d([e,t]);e+V>t&&(w=!1)}if(document.activeElement===f.current){const V=d([e,t]);t<e+V&&(h=!1)}return[w,h]}function ut(e,t){const n=10**t;return Math.round(e*n)/n}b.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onChange:{required:!1,tsType:{name:"any"},description:""},onChangeAfter:{required:!1,tsType:{name:"any"},description:""},max:{required:!1,tsType:{name:"number"},description:`The greatest value in the range of permitted values
@default 100`,defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`The lowest value in the range of permitted values
@default 0`,defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"Specifies the value granularity",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled"},"aria-label":{required:!1,tsType:{name:"string"},description:"String value that labels the slider"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element that labels the slider"},"aria-valuetext":{required:!1,tsType:{name:"string"},description:"Human readable text alternative for the value"},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.04",computed:!1}},markers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},markerCount:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"10",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showInputs:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Wt={title:"Forms/Slider"},I=()=>{const[e,t]=a.useState(2e4);return r.jsxs("div",{children:[r.jsx("output",{children:e}),r.jsx(b,{onChange:n=>t(n),value:e,min:1e4,max:6e4,step:10,showInputs:!0}),r.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},_=()=>{const[e,t]=a.useState(2e4);return r.jsxs("div",{children:[r.jsx("output",{children:e}),r.jsx(b,{onChange:n=>t(n),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:30,step:"auto"}),r.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},A=()=>{const[e,t]=a.useState(2e4);return r.jsxs("div",{children:[r.jsx("output",{children:e}),r.jsx(b,{onChange:n=>t(n),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:"auto",step:2e3}),r.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},N=()=>{const[e,t]=a.useState(3);return r.jsxs("div",{children:[r.jsx("output",{children:e}),r.jsx(b,{onChange:n=>t(n),value:e,min:0,max:6,showTooltip:!0,markers:!0,markerCount:"auto",showInputs:!0}),r.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},M=()=>{const[e,t]=a.useState(3);return r.jsxs("div",{children:[r.jsx("output",{children:e}),r.jsx(b,{onChange:n=>t(n),value:e,min:1,max:8,showTooltip:!0,markers:!0,markerCount:"auto",showInputs:!0}),r.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},q=()=>{const[e,t]=a.useState([1e3,5008970]);return r.jsxs("div",{children:[r.jsxs("output",{children:[e[0]," - ",e[1]]}),r.jsx(b,{values:e,onChange:n=>t(n),min:1e3,max:1e7,step:1e3,showTooltip:!0,markers:!0,showInputs:!0}),r.jsx("button",{onClick:()=>t([1e3,5008970]),children:"Reset"})]})},E=()=>{const[e,t]=a.useState([100,1500]);return r.jsxs("div",{children:[r.jsxs("output",{children:[e[0]," - ",e[1]]}),r.jsx(b,{values:e,onChange:n=>t(n),min:100,max:1500,step:10,showTooltip:!0,markers:!0,showInputs:!0}),r.jsx("button",{onClick:()=>t([100,1500]),children:"Reset"})]})},D=()=>{const[e,t]=a.useState([1e3,9e3]);return r.jsxs("div",{children:[r.jsxs("output",{children:[e[0]," - ",e[1]]}),r.jsx(b,{values:e,onChange:n=>t(n),min:0,max:1e4,step:100,showTooltip:!0,markers:!0,showInputs:!0}),r.jsx("button",{onClick:()=>t([1e3,9e3]),children:"Reset"})]})},F=()=>{const[e,t]=a.useState(625e3);return r.jsxs("div",{children:[r.jsx("output",{children:e}),r.jsx(b,{onChange:n=>t(n),value:e,disabled:!0,min:1e3,max:1e7,step:1e3})]})},P=()=>{const[e,t]=a.useState(625e3),[n,u]=a.useState(e);return r.jsxs("div",{children:[r.jsx("output",{children:n}),r.jsx(b,{onChange:o=>t(o),onChangeAfter:o=>u(o),value:e,min:1e3,max:1e7,step:1e3})]})};I.__docgenInfo={description:"",methods:[],displayName:"Regular"};_.__docgenInfo={description:"",methods:[],displayName:"Regular2"};A.__docgenInfo={description:"",methods:[],displayName:"Regular3"};N.__docgenInfo={description:"",methods:[],displayName:"Regular4"};M.__docgenInfo={description:"",methods:[],displayName:"Regular5"};q.__docgenInfo={description:"",methods:[],displayName:"Range"};E.__docgenInfo={description:"",methods:[],displayName:"Range2"};D.__docgenInfo={description:"",methods:[],displayName:"Range4"};F.__docgenInfo={description:"",methods:[],displayName:"Disabled"};P.__docgenInfo={description:"",methods:[],displayName:"ChangeAfter"};var fe,he,ge;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={10} showInputs />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(ge=(he=I.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ve,xe,be;_.parameters={..._.parameters,docs:{...(ve=_.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount={30} step="auto" />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(be=(xe=_.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var we,ye,ke;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount="auto" step={2000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(ke=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:ke.source}}};var Ve,Ce,Re;N.parameters={...N.parameters,docs:{...(Ve=N.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={0} max={6} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(Re=(Ce=N.parameters)==null?void 0:Ce.docs)==null?void 0:Re.source}}};var Se,je,Te;M.parameters={...M.parameters,docs:{...(Se=M.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={1} max={8} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(Te=(je=M.parameters)==null?void 0:je.docs)==null?void 0:Te.source}}};var Ie,_e,Ae;q.parameters={...q.parameters,docs:{...(Ie=q.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 5008970]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={1000} max={10_000_000} step={1000} showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>;
}`,...(Ae=(_e=q.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};var Ne,Me,qe;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([100, 1500]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={100} max={1500} step={10} showTooltip markers showInputs />
      <button onClick={() => setValues([100, 1500])}>Reset</button>
    </div>;
}`,...(qe=(Me=E.parameters)==null?void 0:Me.docs)==null?void 0:qe.source}}};var Ee,De,Fe;D.parameters={...D.parameters,docs:{...(Ee=D.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 9000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={10000} step={100} showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 9000])}>Reset</button>
    </div>;
}`,...(Fe=(De=D.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var Pe,We,Oe;F.parameters={...F.parameters,docs:{...(Pe=F.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Oe=(We=F.parameters)==null?void 0:We.docs)==null?void 0:Oe.source}}};var Ue,Xe,Ye;P.parameters={...P.parameters,docs:{...(Ue=P.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);
  return <div>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Ye=(Xe=P.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};const Ot=["Regular","Regular2","Regular3","Regular4","Regular5","Range","Range2","Range4","Disabled","ChangeAfter"];export{P as ChangeAfter,F as Disabled,q as Range,E as Range2,D as Range4,I as Regular,_ as Regular2,A as Regular3,N as Regular4,M as Regular5,Ot as __namedExportsOrder,Wt as default};
