import{j as s}from"./index-DSOYRR-y.js";import{r as a}from"./index-RYns6xqu.js";import"./unstyled-heading-B2wjEl7S.js";import"./help-text-BWbwCBp4.js";import"./component-CA_utTiw.js";import"./component-DGkHE89C.js";import"./component-CPUGlFdC.js";import"./component-CFTMq9rF.js";import"./component-C2cg9OAn.js";import"./component-DfcuE9an.js";import"./component-Dl300uvO.js";import"./component-DEMQPCsw.js";import"./component-BOaFOH0e.js";import"./component-DXMdkRbQ.js";import"./component-BnN6aAmj.js";import"./component-BoklHLeD.js";import"./step-U_ZgDATq.js";import"./component-BUVcJvVe.js";import"./component-tabs-CEajmaHx.js";import"./component-BqfkGBST.js";import{T as ve}from"./component-DwXPycX6.js";import"./component-Blth2Uzk.js";import"./Pagination-B6VpBs_V.js";import"./index.m-CtIADANO.js";import"./close-16-cHDvCKuO.js";import"./index-C6dB-k_R.js";import"./item-BU3_qfee.js";import"./info-16-CkEITmUl.js";import"./i18n-BJez-btc.js";import"./chevron-down-16-yi201Ybz.js";function L(e,t){return Math.round(e)}function ue(e,t,n){return Math.min(Math.max(e,t),n)}function dt(e,t,n){return[ue(e[0],t,n),ue(e[1],t,n)]}const G=28,Ct=`
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
input[type='range'] {
  appearance: none;
  height: 44px;
  grid-row: 1;
  grid-column: 1;
  pointer-events: none;
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-thumb {
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
input[type='range']:focus::-webkit-slider-thumb {
  box-shadow: var(--w-shadow-slider-handle-active);
}
input[type='range']::-webkit-slider-thumb:active {
  background: #2f98f9;
  box-shadow: var(--w-shadow-slider-handle-active);
}
input[type='range']::-webkit-slider-runnable-track {
  height: 4px;
  border: 0px solid #b2b2b2;
  background: #efefef;
  box-shadow: none;
  pointer-events: none;
  border-radius: 2px;
}
.active-track {
  background-color: var(--w-s-color-background-primary);
  height: 6px;
  border-radius: 3px;
  width: 50%;
  pointer-events: none;
  transform: translateY(19px);
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
  color: rgb(138, 138, 138);
  pointer-events: none;
  grid-column: 1;
  align-self: end;
  margin: 0px 11.5px;
  grid-auto-columns: minmax(0, 1fr);

  .marker {
    display: grid;
    justify-items: center;
    grid-row-gap: 3.5px;

    > div:nth-child(1) {
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
.marker-line {
  display: block;
  overflow: hidden;
  width: 4px;
  height: 8px;
  border-radius: 2px;
  background-color: rgb(224, 224, 224);
}
.inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.inputs.dual {
  grid-gap: 2rem;
}
.markervalues {
  display: grid;
  color: rgb(138, 138, 138);
  grid-template-columns: auto auto;
  margin-bottom: 3.5px;
  > div:nth-child(1) {
    justify-self: start;
  }
  > div:nth-child(2) {
    justify-self: end;
  }
}
`;function f({min:e=0,max:t=100,rangeValues:n,step:l=1,value:u,values:i,disabled:y,onChange:b,onChangeAfter:g,"aria-label":C,"aria-labelledby":pt,"aria-valuetext":mt,keyboardStepFactor:ht=.04,showTooltip:ft=!1,markers:gt=!1,showInputs:Q=!1,markAlignment:vt="center"}){const c=(i?"range":"standard")==="range",w=l;n&&(e=0,t=n.length-1);const k=r=>n?n==null?void 0:n.findIndex(o=>o===r):0,xt=()=>{let r;return n?c&&i?r=[k(i[0]),k(i[1])]:r=[e,k(u)]:r=c&&i?J(i,w):[e,j(u,w)],r},Z=()=>i?J(i,w):[e,j(u,w)],[d,ie]=a.useState(()=>xt()),[T,z]=a.useState(()=>Z()),[ee,B]=a.useState(!1),te=a.useRef(null),S=a.useRef(null),v=a.useRef(null),x=a.useRef(null),le=a.useRef(null),ce=a.useRef(null),de=a.useRef(0),se=ft&&ee,ne=a.useCallback(r=>{var m;const o=((m=S.current)==null?void 0:m.clientWidth)||500;return(r[1]-r[0])/(t-e)*o<G?(t-e)/o*G:0},[S.current]);a.useEffect(()=>{if(_t(u,i,e,t),!(document.activeElement===v.current||document.activeElement===x.current)){n&&(c&&i?i=[k(i[0]),k(i[1])]:u=k(u));const r=Z();ie(r),i?z(i):u&&z([0,u]),xe(te,r,S,c,t,e),_({values:i,value:u},c,v,x)}},[i,u]),a.useEffect(()=>{let r=u,o=i;n&&(c&&i?o=[k(i[0]),k(i[1])]:r=k(u)),_({values:o,value:r},c,v,x)},[v.current,x.current]),a.useEffect(()=>{!ee&&g&&g(c?d:d[1])},[ee,d]),a.useEffect(()=>{v.current&&v.current.setAttribute("value",d[0].toString()),x.current&&x.current.setAttribute("value",d[1].toString())},[d]);const re=a.useCallback((r,o)=>{const p={left:-1,right:1},h=t*ht,m=d[o]+p[r]*h,R=oe(m,o,c,d,e,t,w,!0);_({values:R,value:m},c,v,x),I(R,o)},[d]),yt=a.useCallback((r,o)=>{["ArrowUp","ArrowDown"].includes(r.key)&&r.preventDefault(),["ArrowLeft","ArrowRight"].includes(r.key)&&(B(!0),r.key==="ArrowLeft"&&re("left",o),r.key==="ArrowRight"&&re("right",o))},[re]),pe=a.useCallback(r=>{if(B(!0),!y&&r.target.nodeName!=="INPUT"){const o=r.touches?Nt(r):r.nativeEvent.offsetX,p=S.current.clientWidth,h=j(o/p*(t-e)+e,w),m=(d[0]+d[1])/2,R=h>j(m,w)?1:0,V=oe(h,R,c,d,e,t,w);I(V,R),_({values:V,value:V[1]},c,v,x)}},[i,u,d]),I=a.useCallback((r,o,p=!0)=>{if(clearTimeout(de.current),c){const h=ne(r);h>0&&(o==0?r[0]=j(r[1]-h,l):r[1]=j(r[0]+h,l)),_({values:r,value:r[1]},c,v,x)}de.current=setTimeout(()=>{if(r=dt(r,e,t),ie(r),Q&&p&&z(r),b){let h;n?h=c?[n[r[0]],n[r[1]]]:n[r[1]]:h=c?[L(r[0]),L(r[1])]:Math.round(r[1]),b(h)}},1),xe(te,r,S,c,t,e)},[]),bt=a.useCallback((r,o)=>{const p=oe(+r.target.value,o,c,d,e,t,w);I(p,o)},[d]),H=()=>B(!1),me=a.useCallback((r,o)=>y?s.jsx("input",{type:"range",disabled:!0,value:d[r],min:e,max:t}):s.jsx("input",{ref:o,type:"range",step:w,min:e,max:t,onKeyDown:p=>yt(p,r),onKeyUp:()=>B(!1),onChange:p=>bt(p,r),...It({ariaLabel:C,ariaLabelledBy:pt,ariaValueText:mt})}),[d]),he=a.useCallback((r,o,p,h)=>{const m=+r.target.value,R=o==0?[m,h[1]]:[h[0],m];z(R);const V=ne(R);if(o==0){const ae=[m,p[1]];m>=e&&m<=p[1]-V&&I(ae,o,!1)}else if(o==1){const ae=[p[0],m];(c?m<=t&&m>=p[0]+V:m<=t)&&I(ae,o,!1)}},[]),wt=()=>vt==="center"?s.jsx("div",{className:"steps",children:jt()}):s.jsxs("div",{className:"steps2",children:[s.jsx("div",{className:"steps",children:kt()}),s.jsx("div",{className:"markervalues",children:Rt()})]}),kt=()=>Array.from(Array(2).keys()).map(()=>s.jsx("div",{className:"marker-line"})),Rt=()=>Array.from(Array(2).keys()).map(r=>{let o="";return o=(t-e)*r+e,s.jsx("div",{children:o})}),jt=a.useCallback(()=>Array.from(Array(2).keys()).map(r=>{let o="";return o=(t-e)*r+e,s.jsxs("div",{className:"marker",children:[s.jsx("div",{className:"marker-line"}),s.jsx("div",{children:o})]},r)}),[]),[St,Vt]=se?Tt(Z(),t,e):[0,0],fe=Q?qt(T,e,t,[le,ce],ne):[!0,!0],ge=r=>{if(n){const o=d[r];return n[o]}else return d[r]};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:Ct}),s.jsxs("div",{className:"ccSlider.wrapper wrapper",onContextMenu:r=>r.preventDefault(),children:[s.jsxs("div",{className:"active-track",ref:te,children:[s.jsx(ye,{display:se&&c,top:document.activeElement===v.current,transform:`translateY(-50px) translateX(calc(-50% + ${St}px))`,children:ge(0)}),s.jsx(ye,{display:se,top:document.activeElement===x.current,transform:`translateY(-50px) translateX(calc(50% + ${Vt}px))`,children:ge(1)})]}),s.jsxs("div",{className:"input-wrapper",ref:S,onMouseDown:pe,onTouchStart:pe,onKeyUp:H,onMouseUp:H,onTouchEnd:H,onMouseOut:H,children:[c&&me(0,v),me(1,x),gt&&wt()]}),Q&&s.jsxs("div",{className:`inputs ${c?"dual":""}`,children:[c&&s.jsx(ve,{value:T[0].toString(),ref:le,invalid:!fe[0],onChange:r=>he(r,0,d,T)}),s.jsx(ve,{value:T[1].toString(),ref:ce,invalid:!fe[1],onChange:r=>he(r,1,d,T)})]})]})]})}const Tt=(e,t,n)=>{const l=-((e[0]-n)/(t-n)-.5)*G,u=-((e[1]-n)/(t-n)-.5)*G;return[l,u]};function It({ariaLabel:e,ariaLabelledBy:t,ariaValueText:n}){return{"aria-label":e,"aria-labelledby":t,"aria-valuetext":n}}function _t(e,t,n,l){(e&&e<n||t&&t[0]<n)&&console.warn("Value too low."),(e&&e>l||t&&t[1]>l)&&console.warn("Value too high.")}function _({value:e,values:t},n,l,u){n?(l.current&&(l.current.value=t[0]),u.current&&(u.current.value=t[1])):u.current&&(u.current.value=e)}const oe=(e,t=1,n,l,u,i,y,b=!1)=>{let g;return e=Math.round(e),n?t===1?g=[l[0],e]:g=[e,l[1]]:g=[u,e],b?dt(J(g,y),u,i):J(g,y)},At=(e,t,n,l,u)=>{var g;let i=(e[1]-e[0])/(l-u);const y=((g=t.current)==null?void 0:g.clientWidth)||500;(i<0||i>1)&&(console.warn("Values outside of range."),i=ue(i,0,1));const b=n?(e[0]-u)/(l-u)*y:0;return`
    width: ${i*100+"%"};
    margin-left: ${b+"px"};`},xe=(e,t,n,l,u,i)=>{e.current&&(e.current.style.cssText=At(t,n,l,u,i))},Nt=e=>{const t=e.target.getBoundingClientRect(),n=e.touches[0].clientX-t.left;return L(n)},j=(e,t)=>typeof t!="string"&&t>1?L(e/t)*t:L(e),J=(e,t)=>[j(e[0],t),j(e[1],t)],ye=({transform:e,display:t,top:n,children:l})=>s.jsx("div",{className:"tooltip",style:{transform:e,visibility:t?"visible":"hidden",zIndex:n?10:1},children:l});function qt([e,t],n,l,[u,i],y){let b=!0,g=!0;if((e<n||e>l)&&(b=!1),(t>l||t<n)&&(g=!1),document.activeElement===u.current){const C=y([e,t]);e+C>t&&(b=!1)}if(document.activeElement===i.current){const C=y([e,t]);t<e+C&&(g=!1)}return[b,g]}f.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},rangeValues:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"number | any",elements:[{name:"number"},{name:"any"}]},description:""},values:{required:!1,tsType:{name:"union",raw:"number[] | any[]",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"Array",elements:[{name:"any"}],raw:"any[]"}]},description:""},onChange:{required:!1,tsType:{name:"any"},description:""},onChangeAfter:{required:!1,tsType:{name:"any"},description:""},step:{required:!1,tsType:{name:"number"},description:"Specifies the value granularity",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled"},"aria-label":{required:!1,tsType:{name:"string"},description:"String value that labels the slider"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element that labels the slider"},"aria-valuetext":{required:!1,tsType:{name:"string"},description:"Human readable text alternative for the value"},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.04",computed:!1}},markers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showInputs:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},markAlignment:{required:!1,tsType:{name:"union",raw:"'center' | 'justified'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'justified'"}]},description:"",defaultValue:{value:"'center'",computed:!1}}}};const ps={title:"Forms/Slider"},A=()=>{const[e,t]=a.useState(2e4);return s.jsxs("div",{children:[s.jsx("output",{children:e}),s.jsx(f,{onChange:n=>t(n),value:e,min:1e4,max:6e4,step:10,showInputs:!0}),s.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},N=()=>{const[e,t]=a.useState(2e4);return s.jsxs("div",{children:[s.jsx("output",{children:e}),s.jsx(f,{onChange:n=>t(n),markAlignment:"justified",value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,step:100}),s.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},q=()=>{const[e,t]=a.useState(2e4);return s.jsxs("div",{children:[s.jsx("output",{children:e}),s.jsx(f,{onChange:n=>t(n),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,step:2e3}),s.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},E=()=>{const[e,t]=a.useState(3);return s.jsxs("div",{children:[s.jsx("output",{children:e}),s.jsx(f,{onChange:n=>t(n),value:e,min:0,max:6,showTooltip:!0,markers:!0,showInputs:!0}),s.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},M=()=>{const[e,t]=a.useState(3);return s.jsxs("div",{children:[s.jsx("output",{children:e}),s.jsx(f,{onChange:n=>t(n),value:e,min:1,max:8,showTooltip:!0,markers:!0,showInputs:!0}),s.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},D=()=>{const[e,t]=a.useState([1e3,5008970]);return s.jsxs("div",{children:[s.jsxs("output",{children:[e[0]," - ",e[1]]}),s.jsx(f,{values:e,onChange:n=>t(n),min:1e3,max:1e7,step:1e3,markAlignment:"justified",showTooltip:!0,markers:!0,showInputs:!0}),s.jsx("button",{onClick:()=>t([1e3,5008970]),children:"Reset"})]})},F=()=>{const[e,t]=a.useState([100,1500]);return s.jsxs("div",{children:[s.jsxs("output",{children:[e[0]," - ",e[1]]}),s.jsx(f,{values:e,onChange:n=>t(n),min:100,max:1500,step:10,showTooltip:!0,markers:!0,showInputs:!0}),s.jsx("button",{onClick:()=>t([100,1500]),children:"Reset"})]})},W=()=>{const[e,t]=a.useState([1e3,9e3]);return s.jsxs("div",{children:[s.jsxs("output",{children:[e[0]," - ",e[1]]}),s.jsx(f,{values:e,onChange:n=>t(n),min:0,max:1e4,step:100,showTooltip:!0,markers:!0,showInputs:!0}),s.jsx("button",{onClick:()=>t([1e3,9e3]),children:"Reset"})]})},P=()=>{const[e,t]=a.useState([10,1e3]);return s.jsxs("div",{children:[s.jsxs("output",{children:[e[0]," - ",e[1]]}),s.jsx(f,{values:e,onChange:n=>t(n),min:0,max:4e3,showTooltip:!0,markers:!0,showInputs:!0}),s.jsx("button",{onClick:()=>t([10,1e3]),children:"Reset"})]})},O=()=>{const[e,t]=a.useState([0,1e4]);return s.jsxs("div",{children:[s.jsxs("output",{children:[e[0]," - ",e[1]]}),s.jsx(f,{values:e,onChange:n=>t(n),min:0,max:1e4,showTooltip:!0,markers:!0,showInputs:!0,step:100}),s.jsx("button",{onClick:()=>t([0,1e4]),children:"Reset"})]})},U=()=>{const[e,t]=a.useState([1,15]);return s.jsxs("div",{children:[s.jsxs("output",{children:[e[0]," - ",e[1]]}),s.jsx(f,{values:e,onChange:n=>t(n),min:0,max:20,step:1,showTooltip:!0,markers:!0,showInputs:!0}),s.jsx("button",{onClick:()=>t([1,15]),children:"Reset"})]})},X=()=>{const[e,t]=a.useState("yes"),n=["hi","haha","yes","nr","ok","1","2"];return s.jsxs("div",{children:[s.jsx("output",{children:e}),s.jsx(f,{onChange:l=>t(l),value:e,rangeValues:n,showTooltip:!0}),s.jsx("button",{onClick:()=>t("yes"),children:"Reset"})]})},Y=()=>{const[e,t]=a.useState(["yes","1"]),n=["hi","haha","yes","nr","ok","1","2"];return s.jsxs("div",{children:[s.jsxs("output",{children:[e[0]," - ",e[1]]}),s.jsx(f,{onChange:l=>t(l),values:e,rangeValues:n,showTooltip:!0}),s.jsx("button",{onClick:()=>t(["yes","1"]),children:"Reset"})]})},$=()=>{const[e,t]=a.useState(625e3);return s.jsxs("div",{children:[s.jsx("output",{children:e}),s.jsx(f,{onChange:n=>t(n),value:e,disabled:!0,min:1e3,max:1e7,step:1e3})]})},K=()=>{const[e,t]=a.useState(625e3),[n,l]=a.useState(e);return s.jsxs("div",{children:[s.jsx("output",{children:n}),s.jsx(f,{onChange:u=>t(u),onChangeAfter:u=>l(u),value:e,min:1e3,max:1e7,step:1e3})]})};A.__docgenInfo={description:"",methods:[],displayName:"Regular"};N.__docgenInfo={description:"",methods:[],displayName:"Regular2"};q.__docgenInfo={description:"",methods:[],displayName:"Regular3"};E.__docgenInfo={description:"",methods:[],displayName:"Regular4"};M.__docgenInfo={description:"",methods:[],displayName:"Regular5"};D.__docgenInfo={description:"",methods:[],displayName:"Range"};F.__docgenInfo={description:"",methods:[],displayName:"Range2"};W.__docgenInfo={description:"",methods:[],displayName:"Range4"};P.__docgenInfo={description:"",methods:[],displayName:"Range5"};O.__docgenInfo={description:"",methods:[],displayName:"Range6"};U.__docgenInfo={description:"",methods:[],displayName:"Range7"};X.__docgenInfo={description:"",methods:[],displayName:"RegularRangeValues"};Y.__docgenInfo={description:"",methods:[],displayName:"DualRangeValues"};$.__docgenInfo={description:"",methods:[],displayName:"Disabled"};K.__docgenInfo={description:"",methods:[],displayName:"ChangeAfter"};var be,we,ke;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={10} showInputs />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(ke=(we=A.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var Re,je,Se;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} markAlignment='justified' value={value} min={10000} max={60000} showTooltip markers step={100} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(Se=(je=N.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var Ve,Ce,Te;q.parameters={...q.parameters,docs:{...(Ve=q.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers step={2000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(Te=(Ce=q.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var Ie,_e,Ae;E.parameters={...E.parameters,docs:{...(Ie=E.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={0} max={6} showTooltip markers showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(Ae=(_e=E.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};var Ne,qe,Ee;M.parameters={...M.parameters,docs:{...(Ne=M.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={1} max={8} showTooltip markers showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(Ee=(qe=M.parameters)==null?void 0:qe.docs)==null?void 0:Ee.source}}};var Me,De,Fe;D.parameters={...D.parameters,docs:{...(Me=D.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 5008970]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={1000} max={10_000_000} step={1000} markAlignment="justified" showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>;
}`,...(Fe=(De=D.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var We,Pe,Oe;F.parameters={...F.parameters,docs:{...(We=F.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([100, 1500]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={100} max={1500} step={10} showTooltip markers showInputs />
      <button onClick={() => setValues([100, 1500])}>Reset</button>
    </div>;
}`,...(Oe=(Pe=F.parameters)==null?void 0:Pe.docs)==null?void 0:Oe.source}}};var Ue,Xe,Ye;W.parameters={...W.parameters,docs:{...(Ue=W.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 9000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={10000} step={100} showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 9000])}>Reset</button>
    </div>;
}`,...(Ye=(Xe=W.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var $e,Ke,Le;P.parameters={...P.parameters,docs:{...($e=P.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([10, 1000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={4000} showTooltip markers showInputs />
      <button onClick={() => setValues([10, 1000])}>Reset</button>
    </div>;
}`,...(Le=(Ke=P.parameters)==null?void 0:Ke.docs)==null?void 0:Le.source}}};var ze,Be,He;O.parameters={...O.parameters,docs:{...(ze=O.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([0, 10000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={10000} showTooltip markers showInputs step={100} />
      <button onClick={() => setValues([0, 10000])}>Reset</button>
    </div>;
}`,...(He=(Be=O.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};var Ge,Je,Qe;U.parameters={...U.parameters,docs:{...(Ge=U.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1, 15]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={0} max={20} step={1} showTooltip markers showInputs />
      <button onClick={() => setValues([1, 15])}>Reset</button>
    </div>;
}`,...(Qe=(Je=U.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,et,tt;X.parameters={...X.parameters,docs:{...(Ze=X.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('yes');

  //const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //const range = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 110];
  const range = ['hi', 'haha', 'yes', 'nr', 'ok', '1', '2'];
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} rangeValues={range} showTooltip />
      <button onClick={() => setValue('yes')}>Reset</button>
    </div>;
}`,...(tt=(et=X.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var st,nt,rt;Y.parameters={...Y.parameters,docs:{...(st=Y.parameters)==null?void 0:st.docs,source:{originalSource:`() => {
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
}`,...(rt=(nt=Y.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var at,ot,ut;$.parameters={...$.parameters,docs:{...(at=$.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(ut=(ot=$.parameters)==null?void 0:ot.docs)==null?void 0:ut.source}}};var it,lt,ct;K.parameters={...K.parameters,docs:{...(it=K.parameters)==null?void 0:it.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);
  return <div>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(ct=(lt=K.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};const ms=["Regular","Regular2","Regular3","Regular4","Regular5","Range","Range2","Range4","Range5","Range6","Range7","RegularRangeValues","DualRangeValues","Disabled","ChangeAfter"];export{K as ChangeAfter,$ as Disabled,Y as DualRangeValues,D as Range,F as Range2,W as Range4,P as Range5,O as Range6,U as Range7,A as Regular,N as Regular2,q as Regular3,E as Regular4,M as Regular5,X as RegularRangeValues,ms as __namedExportsOrder,ps as default};
