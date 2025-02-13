import{j as a}from"./jsx-runtime-DEdD30eg.js";import{r as o}from"./index-RYns6xqu.js";const Ne=`
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
          > div:nth-child(2){
              width: 0;
              overflow: visible;
              display: grid;
              justify-content: center;
          }
      }
  }
`;function b({min:e=0,max:t=100,step:n=1,value:u,values:s,disabled:f,onChange:i,onChangeAfter:k,"aria-label":v,"aria-labelledby":q,"aria-valuetext":Ve,keyboardStepFactor:Re=.04,showTooltip:Se=!1,markers:L=!1,markerCount:D=10}){const c=(s?"range":"standard")==="range",p=o.useMemo(()=>We(n,L,D,t,e),[]),F=()=>s?z(s,p):[e,w(u,p)],[l,B]=o.useState(()=>F()),[W,O]=o.useState(!1),U=o.useRef(null),C=o.useRef(null),h=o.useRef(null),g=o.useRef(null),H=o.useRef(0);o.useEffect(()=>{if(Ee(u,s,e,t),!(document.activeElement===h.current||document.activeElement===g.current)){const r=F();B(r),te(U,r,C,c,t,e,p),R({values:r,value:u},c,h,g)}},[s,u]),o.useEffect(()=>{R({values:s,value:u},c,h,g)},[h.current,g.current]),o.useEffect(()=>{!W&&k&&k(c?l:l[1])},[W,l]),o.useEffect(()=>{h.current&&h.current.setAttribute("value",l[0]),g.current&&g.current.setAttribute("value",l[1])},[l]);const X=o.useCallback((r,d)=>{const m={left:-1,right:1},x=t*Re,V=l[d]+m[r]*x,y=P(V,d,c,l,e,t,p,!0);R({values:y,value:V},c,h,g),Y(y,d)},[l]),Te=o.useCallback((r,d)=>{["ArrowUp","ArrowDown"].includes(r.key)&&r.preventDefault(),["ArrowLeft","ArrowRight"].includes(r.key)&&(O(!0),r.key==="ArrowLeft"&&X("left",d),r.key==="ArrowRight"&&X("right",d))},[X]),G=o.useCallback(r=>{if(setTimeout(()=>{O(!0)},1),!f&&r.target.nodeName!=="INPUT"){const d=r.touches?Fe(r):r.nativeEvent.offsetX,m=C.current.clientWidth,x=w(d/m*(t-e)+e,p),V=(l[0]+l[1])/2,y=x>w(V,p)?1:0,j=P(x,y,c,l,e,t,p);Y(j,y),R({values:j,value:j[1]},c,h,g)}},[s,u,l]),Y=o.useCallback((r,d)=>{var m,x;if(clearTimeout(H.current),c){const y=w(r[1]-r[0],p)/(t-e)*(((m=C.current)==null?void 0:m.clientWidth)||500),j=(t-e)/(((x=C.current)==null?void 0:x.clientWidth)||500);y<24&&(d==0?r[0]=r[1]-j*24:r[1]=r[0]+j*24,R({values:r,value:r[1]},c,h,g))}H.current=setTimeout(()=>{r=je(r,e,t),B(r),i&&i(c?[Math.round(r[0]),Math.round(r[1])]:Math.round(r[1]))},1),te(U,r,C,c,t,e,p)},[]),Ae=o.useCallback((r,d)=>{const m=P(+r.target.value,d,c,l,e,t,p);Y(m,d)},[l]),E=()=>{J()};function J(){O(!1)}const Q=o.useCallback((r,d)=>f?a.jsx("input",{type:"range",disabled:!0,value:l[r],min:e,max:t}):a.jsx("input",{ref:d,type:"range",step:p,min:e,max:t,onKeyDown:m=>Te(m,r),onKeyUp:J,onChange:m=>Ae(m,r),...qe({ariaLabel:v,ariaLabelledBy:q,ariaValueText:Ve})}),[l]),_e=o.useMemo(()=>D==="auto"&&typeof p=="number"?(t-e)/p+1:D,[]),Me=o.useCallback(()=>Array.from(Array(_e).keys()).map(r=>a.jsxs("div",{className:"marker",children:[a.jsx("div",{children:"|"}),a.jsx("div",{children:r})]},r)),[]),K=Se&&W;let Z=0,ee=0;return K&&([Z,ee]=Ie(F(),t,e)),a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Ne}),a.jsxs("div",{className:"ccSlider.wrapper wrapper",onContextMenu:r=>r.preventDefault(),children:[a.jsxs("div",{className:"active-track",ref:U,children:[a.jsx(re,{display:K&&c,top:document.activeElement===h.current,transform:`translateY(-50px) translateX(calc(-50% + ${Z}px))`,children:l[0]}),a.jsx(re,{display:K,top:document.activeElement===g.current,transform:`translateY(-50px) translateX(calc(50% + ${ee}px))`,children:l[1]})]}),a.jsxs("div",{className:"input-wrapper",ref:C,onMouseDown:G,onTouchStart:G,onKeyUp:E,onMouseUp:E,onTouchEnd:E,onMouseOut:E,children:[c&&Q(0,h),Q(1,g),a.jsx("div",{className:"steps",children:L&&Me()})]})]})]})}const Ie=(e,t,n)=>{const u=-((e[0]-n)/(t-n)-.5)*24,s=-((e[1]-n)/(t-n)-.5)*24;return[u,s]};function qe({ariaLabel:e,ariaLabelledBy:t,ariaValueText:n}){return{"aria-label":e,"aria-labelledby":t,"aria-valuetext":n}}function $(e,t,n){return Math.min(Math.max(e,t),n)}function Ee(e,t,n,u){(e&&e<n||t&&t[0]<n)&&console.warn("Value too low."),(e&&e>u||t&&t[1]>u)&&console.warn("Value too high.")}function R({value:e,values:t},n,u,s){n?(u.current&&(u.current.value=t[0]),s.current&&(s.current.value=t[1])):s.current&&(s.current.value=e)}const P=(e,t=1,n,u,s,f,i,k=!1)=>{let v;return e=Math.round(e),n?t===1?v=[u[0],e]:v=[e,u[1]]:v=[s,e],k?je(z(v,i),s,f):z(v,i)},De=(e,t,n,u,s,f)=>{var q;let i=w(e[1]-e[0],f)/(u-s);const k=((q=t.current)==null?void 0:q.clientWidth)||500;(i<0||i>1)&&(console.warn("Values outside of range."),i=$(i,0,1));const v=n?(e[0]-s)/(u-s)*k:0;return`
    width: ${i*100+"%"};
    margin-left: ${v+"px"};`},te=(e,t,n,u,s,f,i)=>{e.current&&(e.current.style.cssText=De(t,n,u,s,f,i))},je=(e,t,n)=>[$(e[0],t,n),$(e[1],t,n)],Fe=e=>{const t=e.target.getBoundingClientRect(),n=e.touches[0].clientX-t.left;return Math.round(n)},w=(e,t)=>t>1?Math.round(e/t)*t:e,z=(e,t)=>[w(e[0],t),w(e[1],t)],We=(e,t,n,u,s)=>{let f=e;if(t){const i=n;f=typeof e=="number"?e:Math.round((u-s)/(i-1))}return f},re=e=>a.jsx("div",{className:"tooltip",style:{transform:e.transform,visibility:e.display?"visible":"hidden",zIndex:e.top?10:1},children:Math.round(e.children)});b.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onChange:{required:!1,tsType:{name:"any"},description:""},onChangeAfter:{required:!1,tsType:{name:"any"},description:""},max:{required:!1,tsType:{name:"number"},description:`The greatest value in the range of permitted values
@default 100`,defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`The lowest value in the range of permitted values
@default 0`,defaultValue:{value:"0",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"Specifies the value granularity",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the slider is disabled"},"aria-label":{required:!1,tsType:{name:"string"},description:"String value that labels the slider"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element that labels the slider"},"aria-valuetext":{required:!1,tsType:{name:"string"},description:"Human readable text alternative for the value"},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.04",computed:!1}},markers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},markerCount:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"10",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ye={title:"Forms/Slider"},S=()=>{const[e,t]=o.useState(2e4);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(b,{onChange:n=>t(n),value:e,min:1e4,max:6e4,step:10}),a.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},T=()=>{const[e,t]=o.useState(2e4);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(b,{onChange:n=>t(n),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:30,step:"auto"}),a.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},A=()=>{const[e,t]=o.useState(2e4);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(b,{onChange:n=>t(n),value:e,min:1e4,max:6e4,showTooltip:!0,markers:!0,markerCount:"auto",step:2e3}),a.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},_=()=>{const[e,t]=o.useState(3);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(b,{onChange:n=>t(n),value:e,min:0,max:6,showTooltip:!0,markers:!0,markerCount:"auto"}),a.jsx("button",{onClick:()=>t(3),children:"Reset"})]})},M=()=>{const[e,t]=o.useState([1e3,5008970]);return a.jsxs("div",{children:[a.jsxs("output",{children:[e[0]," - ",e[1]]}),a.jsx(b,{values:e,onChange:n=>t(n),min:1e3,max:1e7,step:1e3,showTooltip:!0,markers:!0}),a.jsx("button",{onClick:()=>t([1e3,5008970]),children:"Reset"})]})},N=()=>{const[e,t]=o.useState(625e3);return a.jsxs("div",{children:[a.jsx("output",{children:e}),a.jsx(b,{onChange:n=>t(n),value:e,disabled:!0,min:1e3,max:1e7,step:1e3})]})},I=()=>{const[e,t]=o.useState(625e3),[n,u]=o.useState(e);return a.jsxs("div",{children:[a.jsx("output",{children:n}),a.jsx(b,{onChange:s=>t(s),onChangeAfter:s=>u(s),value:e,min:1e3,max:1e7,step:1e3})]})};S.__docgenInfo={description:"",methods:[],displayName:"Regular"};T.__docgenInfo={description:"",methods:[],displayName:"Regular2"};A.__docgenInfo={description:"",methods:[],displayName:"Regular3"};_.__docgenInfo={description:"",methods:[],displayName:"Regular4"};M.__docgenInfo={description:"",methods:[],displayName:"Range"};N.__docgenInfo={description:"",methods:[],displayName:"Disabled"};I.__docgenInfo={description:"",methods:[],displayName:"ChangeAfter"};var ne,ae,se;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={10} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(se=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ue,le;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount={30} step="auto" />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(le=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};var ie,ce,de;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount="auto" step={2000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(de=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,me,fe;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(3);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={0} max={6} showTooltip markers markerCount="auto" />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(fe=(me=_.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var he,ge,ve;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState([1000, 5008970]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={nums => setValues(nums)} min={1000} max={10_000_000} step={1000} showTooltip markers />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>;
}`,...(ve=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,xe,ye;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  return <div>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(ye=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var we,ke,Ce;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);
  return <div>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Ce=(ke=I.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};const Ke=["Regular","Regular2","Regular3","Regular4","Range","Disabled","ChangeAfter"];export{I as ChangeAfter,N as Disabled,M as Range,S as Regular,T as Regular2,A as Regular3,_ as Regular4,Ke as __namedExportsOrder,Ye as default};
