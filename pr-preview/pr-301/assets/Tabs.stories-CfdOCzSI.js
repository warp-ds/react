import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as m}from"./index-zT3PBbrq.js";import{r as E}from"./index.m-CtIADANO.js";import{d as x,f as _,g as ae}from"./index-Dy0vwcRg.js";import{r as p}from"./index-RYns6xqu.js";import"./index-1YnX0IqW.js";const ne=({className:t,isActive:r,setActive:s,...o})=>({tab:E(t,[x.base,r?x.active:x.inactive]),attrs:{...o}});function n(t){const{children:r,label:s,setActive:o=()=>{},name:l,onClick:i,isActive:b}=t,{tab:h,attrs:g}=ne(t),{over:f,...y}=g,P=q=>{o(l),i&&i(q)};return e.jsxs("button",{type:"button",...y,role:"tab","aria-selected":b?"true":"false","aria-controls":b?`warp-tabpanel-${l}`:void 0,id:`warp-tab-${l}`,tabIndex:b?0:-1,className:h,onClick:P,children:[!r&&e.jsx("span",{className:x.contentUnderlined,children:s}),r&&f&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:x.icon,children:r}),e.jsx("span",{className:x.contentUnderlined,children:s})]}),r&&!f&&e.jsxs("div",{className:x.content,children:[r,s]})]})}n.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{setActive:{required:!1,tsType:{name:"signature",type:"function",raw:"(name: string) => void",signature:{arguments:[{type:{name:"string"},name:"name"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the tab."},over:{required:!1,tsType:{name:"boolean"},description:`Set the over prop to true if you need to move icons to above the tab label
@default false`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Additional content to be included in the tab (eg. icons). Content is placed above the label."},name:{required:!0,tsType:{name:"string"},description:"Tab name identifier. This value will be omitted as the argument to the Tabs onChange handler."},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label of the tab item."},isActive:{required:!1,tsType:{name:"boolean"},description:"Used to set which tab should be active on mount. Defaults to the first tab if not present."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional CSS styles for the tab."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Action to be called when the component is clicked"}}};function u(t){var i,b;const{children:r,name:s,hidden:o,...l}=t;return e.jsx("div",{tabIndex:-1,...l,role:"tabpanel","aria-labelledby":`warp-tab-${s}`,id:`warp-tabpanel-${s}`,hidden:o===void 0&&typeof document=="object"?!((b=(i=document==null?void 0:document.getElementById(`warp-tab-${s}`))==null?void 0:i.classList)!=null&&b.contains(x.active)):o,children:r})}u.__docgenInfo={description:"",methods:[],displayName:"TabPanel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},name:{required:!0,tsType:{name:"string"},description:"Tab name identifier. Must exactly match the name identifier of a Tab."},hidden:{required:!1,tsType:{name:"boolean"},description:"Show/hide panel manually (in server-side rendering)."}}};function te(t,r=200,s=!1){let o;return function(){var l=()=>{o=null,s||t.apply(this,arguments)};let i=s&&!o;clearTimeout(o),o=setTimeout(l,r),i&&t.apply(this,arguments)}}const se=({className:t,children:r,onClick:s,active:o,...l},i,b)=>({nav:E(t,_.wrapper),div:E([_.base,ae[`cols${r.filter(h=>h).length}`]]),attrs:l,updateSelectionIndicator:()=>{window.requestAnimationFrame(()=>{if(i.current&&b.current){const h=i.current.querySelector('button[role="tab"][aria-selected="true"]');if(h){const g=i.current.getBoundingClientRect().left,{left:f,width:y}=h.getBoundingClientRect();b.current.style.left=`${f-g}px`,b.current.style.width=`${y}px`}}})}}),w=t=>{const r=!!(typeof document=="object"&&(document!=null&&document.createElement)),s=p.useRef(null),o=p.useRef(null),{children:l,onChange:i}=t,{nav:b,div:h,attrs:g,updateSelectionIndicator:f}=se(t,s,o);p.useEffect(()=>{r&&Z(),f();const a=te(f,100);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)});const y=()=>{var a;if(t.active)return String(t.active);if(p.Children.count(l)>0){const c=p.Children.toArray(l),T=(c==null?void 0:c.find(d=>{var v;return(v=d==null?void 0:d.props)==null?void 0:v.isActive}))||c[0];return String(((a=T==null?void 0:T.props)==null?void 0:a.name)||"")}return""},[P,q]=p.useState(y()),Z=()=>{p.Children.forEach(l,a=>{var c,T;if(typeof a=="object"){const d=document.getElementById(`warp-tabpanel-${(c=a==null?void 0:a.props)==null?void 0:c.name}`);d&&(d.hidden=((T=a==null?void 0:a.props)==null?void 0:T.name)!==P)}})},k=a=>{q(a),f(),i&&i(a)},ee=a=>{var c,T;if(!a.altKey&&!a.ctrlKey&&!a.shiftKey&&["ArrowLeft","ArrowRight","Home","End"].includes(a.key)){const d=Array.from(((c=s==null?void 0:s.current)==null?void 0:c.querySelectorAll('button[role="tab"]'))??[]),v=d.findIndex(j=>j.name===P);if(v>=0){const j=(()=>{switch(a.key){case"Home":return 0;case"End":return d.length-1;case"ArrowLeft":return Math.max(0,v-1);case"ArrowRight":return Math.min(d.length-1,v+1);default:return v}})();v!==j&&((T=d[j])!=null&&T.name)&&(a.preventDefault(),k(d[j].name),d[j].focus())}}};return e.jsx("div",{...g,className:b,children:e.jsxs("div",{role:"tablist",className:h,ref:s,onKeyDown:ee,children:[p.Children.map(l,a=>{var c;return a&&p.cloneElement(a,{setActive:k,isActive:((c=a==null?void 0:a.props)==null?void 0:c.name)===P})}),e.jsx("span",{"data-testid":"selection-indicator",className:_.selectionIndicator,ref:o})]})})};w.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The Tabs within the container."},active:{required:!1,tsType:{name:"string"},description:`Used to set the name of the Tab that should be active on mount.
Defaults to the first tab if not present and isActive is not set on any Tab.`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the container"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(name: string) => void",signature:{arguments:[{type:{name:"string"},name:"name"}],return:{name:"void"}}},description:"Handler that is called when the tab changes."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional CSS styles for the container."}}};const be={title:"Navigation/Tabs"},I=()=>e.jsxs(w,{onChange:t=>console.log(t),children:[e.jsx(n,{label:"Tab 1",name:"one"}),!1,e.jsx(n,{label:"Tab 3",name:"three",isActive:!0})]}),A=()=>e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[e.jsx(n,{label:"Tab 1",name:"one"}),e.jsx(n,{label:"Tab 2",name:"two"}),e.jsx(n,{label:"Tab 3",name:"three"})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(u,{name:"one",children:"Tab one selected!"}),e.jsx(u,{name:"two",children:"Tab two selected!"}),e.jsx(u,{name:"three",children:"Tab three selected!"})]})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[e.jsx(n,{label:"Tab 1",name:"one"}),e.jsx(n,{label:"Tab 2 (www.finn.no)",name:"two",onClick:()=>alert("opened tab 2")}),e.jsx(n,{label:"Tab 3 (www.schibsted.com without panel)",name:"three",onClick:()=>alert("opened tab 3")})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(u,{name:"one",children:"Tab one selected!"}),e.jsx(u,{name:"two",children:"Tab two selected!"})]})]}),C=()=>e.jsxs(w,{children:[e.jsx(n,{label:"Tab 1",name:"one",isActive:!0,children:e.jsx(m,{})}),e.jsx(n,{label:"Tab 2",name:"two",children:e.jsx(m,{})}),e.jsx(n,{label:"Tab 3",name:"three",children:e.jsx(m,{})}),e.jsx(n,{label:"Tab 4",name:"four",children:e.jsx(m,{})})]}),S=()=>e.jsxs(w,{children:[e.jsx(n,{label:"Tab 1",name:"one",over:!0,isActive:!0,children:e.jsx(m,{})}),e.jsx(n,{label:"Tab 2",name:"two",over:!0,children:e.jsx(m,{})}),e.jsx(n,{label:"Tab 3",name:"three",over:!0,children:e.jsx(m,{})}),e.jsx(n,{label:"Tab 4",name:"four",over:!0,children:e.jsx(m,{})})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[e.jsx(n,{label:"Tab 1",name:"one",isActive:!0,children:e.jsx(m,{})}),e.jsx(n,{label:"Tab 2",name:"two",children:e.jsx(m,{})}),e.jsx(n,{label:"Tab 3",name:"three",children:e.jsx(m,{})}),e.jsx(n,{label:"Tab 4",name:"four",children:e.jsx(m,{})})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(u,{name:"one",children:"Tab one selected!"}),e.jsx(u,{name:"two",children:"Tab two selected!"}),e.jsx(u,{name:"three",children:"Tab three selected!"}),e.jsx(u,{name:"four",children:"Tab four selected!"})]})]});I.__docgenInfo={description:"",methods:[],displayName:"Default"};A.__docgenInfo={description:"",methods:[],displayName:"DefaultWithPanel"};N.__docgenInfo={description:"",methods:[],displayName:"DefaultWithOnClickAction"};C.__docgenInfo={description:"",methods:[],displayName:"Icon"};S.__docgenInfo={description:"",methods:[],displayName:"IconOvertop"};R.__docgenInfo={description:"",methods:[],displayName:"IconWithPanel"};var D,$,L;I.parameters={...I.parameters,docs:{...(D=I.parameters)==null?void 0:D.docs,source:{originalSource:`() => <Tabs onChange={e => console.log(e)}>
    <Tab label="Tab 1" name="one" />
    {false && <Tab label="Tab 2" name="two" />}
    <Tab label="Tab 3" name="three" isActive />
  </Tabs>`,...(L=($=I.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var B,M,W;A.parameters={...A.parameters,docs:{...(B=A.parameters)==null?void 0:B.docs,source:{originalSource:`() => <>
    <Tabs>
      <Tab label="Tab 1" name="one" />
      <Tab label="Tab 2" name="two" />
      <Tab label="Tab 3" name="three" />
    </Tabs>
    <div className="mb-16">
      <TabPanel name="one">Tab one selected!</TabPanel>
      <TabPanel name="two">Tab two selected!</TabPanel>
      <TabPanel name="three">Tab three selected!</TabPanel>
    </div>
  </>`,...(W=(M=A.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var O,H,F;N.parameters={...N.parameters,docs:{...(O=N.parameters)==null?void 0:O.docs,source:{originalSource:`() => <>
    <Tabs>
      <Tab label="Tab 1" name="one" />
      <Tab label="Tab 2 (www.finn.no)" name="two" onClick={() => alert('opened tab 2')} />
      <Tab label="Tab 3 (www.schibsted.com without panel)" name="three" onClick={() => alert('opened tab 3')} />
    </Tabs>
    <div className="mb-16">
      <TabPanel name="one">Tab one selected!</TabPanel>
      <TabPanel name="two">Tab two selected!</TabPanel>
    </div>
  </>`,...(F=(H=N.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var K,U,z;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`() => <Tabs>
    <Tab label="Tab 1" name="one" isActive>
      <IconPlus16 />
    </Tab>
    <Tab label="Tab 2" name="two">
      <IconPlus16 />
    </Tab>
    <Tab label="Tab 3" name="three">
      <IconPlus16 />
    </Tab>
    <Tab label="Tab 4" name="four">
      <IconPlus16 />
    </Tab>
  </Tabs>`,...(z=(U=C.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var G,J,Q;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`() => <Tabs>
    <Tab label="Tab 1" name="one" over isActive>
      <IconPlus16 />
    </Tab>
    <Tab label="Tab 2" name="two" over>
      <IconPlus16 />
    </Tab>
    <Tab label="Tab 3" name="three" over>
      <IconPlus16 />
    </Tab>
    <Tab label="Tab 4" name="four" over>
      <IconPlus16 />
    </Tab>
  </Tabs>`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var V,X,Y;R.parameters={...R.parameters,docs:{...(V=R.parameters)==null?void 0:V.docs,source:{originalSource:`() => <>
    <Tabs>
      <Tab label="Tab 1" name="one" isActive>
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 2" name="two">
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 3" name="three">
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 4" name="four">
        <IconPlus16 />
      </Tab>
    </Tabs>
    <div className="mb-16">
      <TabPanel name="one">Tab one selected!</TabPanel>
      <TabPanel name="two">Tab two selected!</TabPanel>
      <TabPanel name="three">Tab three selected!</TabPanel>
      <TabPanel name="four">Tab four selected!</TabPanel>
    </div>
  </>`,...(Y=(X=R.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const me=["Default","DefaultWithPanel","DefaultWithOnClickAction","Icon","IconOvertop","IconWithPanel"];export{I as Default,N as DefaultWithOnClickAction,A as DefaultWithPanel,C as Icon,S as IconOvertop,R as IconWithPanel,me as __namedExportsOrder,be as default};
