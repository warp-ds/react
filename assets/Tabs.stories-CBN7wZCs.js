import{j as e,g as f,h as D,i as ne}from"./index-C4tyfTTA.js";import{a as u}from"./index-C6u5luyS.js";import{r as g}from"./index.m-CtIADANO.js";import{r as p}from"./index-CBqU2yxZ.js";import"./index-ClUvnnK6.js";import"./_commonjsHelpers-BosuxZz1.js";const te=({className:n,isActive:s,setActive:r,...l})=>({tab:g(f.tab,{[n]:!!n,[f.tabActive]:s}),icon:g(f.icon,{[f.iconUnderlinedActive]:s}),content:g(f.contentUnderlined,{[f.contentUnderlinedActive]:s}),attrs:{...l}});function t(n){const{children:s,label:r,setActive:l=()=>{},name:o,onClick:i,isActive:b}=n,{tab:w,icon:P,content:j,attrs:v}=te(n),{over:C,...A}=v,V=k=>{l(o),i&&i(k)};return e.jsxs("button",{type:"button",...A,role:"tab","aria-selected":b?"true":"false","aria-controls":b?`warp-tabpanel-${o}`:void 0,id:`warp-tab-${o}`,tabIndex:b?0:-1,className:w,onClick:V,children:[!s&&e.jsx("span",{className:j,children:r}),s&&C&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:P,children:s}),e.jsx("span",{className:j,children:r})]}),s&&!C&&e.jsxs("div",{className:f.content,children:[s,r]})]})}try{t.displayName="Tab",t.__docgenInfo={description:"",displayName:"Tab",props:{setActive:{defaultValue:null,description:"",name:"setActive",required:!1,type:{name:"((name: string) => void)"}},className:{defaultValue:null,description:"Additional CSS class for the tab.",name:"className",required:!1,type:{name:"string"}},over:{defaultValue:{value:"false"},description:"Set the over prop to true if you need to move icons to above the tab label",name:"over",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Additional content to be included in the tab (eg. icons). Content is placed above the label.",name:"children",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"Tab name identifier. This value will be omitted as the argument to the Tabs onChange handler.",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"The label of the tab item.",name:"label",required:!0,type:{name:"ReactNode"}},isActive:{defaultValue:null,description:"Used to set which tab should be active on mount. Defaults to the first tab if not present.",name:"isActive",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Additional CSS styles for the tab.",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Action to be called when the component is clicked",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}function m(n){var i,b;const{children:s,name:r,hidden:l,...o}=n;return e.jsx("div",{tabIndex:-1,...o,role:"tabpanel","aria-labelledby":`warp-tab-${r}`,id:`warp-tabpanel-${r}`,hidden:l===void 0&&typeof document=="object"?!((b=(i=document==null?void 0:document.getElementById(`warp-tab-${r}`))==null?void 0:i.classList)!=null&&b.contains(f.tabActive)):l,children:s})}try{m.displayName="TabPanel",m.__docgenInfo={description:"",displayName:"TabPanel",props:{name:{defaultValue:null,description:"Tab name identifier. Must exactly match the name identifier of a Tab.",name:"name",required:!0,type:{name:"string"}},hidden:{defaultValue:null,description:"Show/hide panel manually (in server-side rendering).",name:"hidden",required:!1,type:{name:"boolean"}}}}}catch{}function re(n,s=200,r=!1){let l;return function(){var o=()=>{l=null,r||n.apply(this,arguments)};let i=r&&!l;clearTimeout(l),l=setTimeout(o,s),i&&n.apply(this,arguments)}}const se=({className:n,children:s,onClick:r,active:l,...o},i,b)=>({nav:g(D.wrapperUnderlined,{[n]:!!n}),div:g(D.tabContainer,{[ne[`cols${s.length}`]]:!0}),wunderbar:g(D.wunderbar),attrs:o,updateWunderbar:()=>{window.requestAnimationFrame(()=>{if(i.current&&b.current){const w=i.current.querySelector('button[role="tab"][aria-selected="true"]');if(w){const P=i.current.getBoundingClientRect().left,{left:j,width:v}=w.getBoundingClientRect();b.current.style.left=`${j-P}px`,b.current.style.width=`${v}px`}}})}}),x=n=>{const s=!!(typeof document=="object"&&(document!=null&&document.createElement)),r=p.useRef(null),l=p.useRef(null),{children:o,onChange:i}=n,{nav:b,div:w,wunderbar:P,attrs:j,updateWunderbar:v}=se(n,r,l);p.useEffect(()=>{s&&k(),v();const a=re(v,100);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)});const C=()=>{var a;if(n.active)return String(n.active);if(p.Children.count(o)>0){const c=p.Children.toArray(o),T=(c==null?void 0:c.find(d=>{var h;return(h=d==null?void 0:d.props)==null?void 0:h.isActive}))||c[0];return String(((a=T==null?void 0:T.props)==null?void 0:a.name)||"")}return""},[A,V]=p.useState(C()),k=()=>{p.Children.forEach(o,a=>{var c,T;if(typeof a=="object"){const d=document.getElementById(`warp-tabpanel-${(c=a==null?void 0:a.props)==null?void 0:c.name}`);d&&(d.hidden=((T=a==null?void 0:a.props)==null?void 0:T.name)!==A)}})},$=a=>{V(a),v(),i&&i(a)},ae=a=>{var c,T;if(!a.altKey&&!a.ctrlKey&&!a.shiftKey&&["ArrowLeft","ArrowRight","Home","End"].includes(a.key)){const d=Array.from(((c=r==null?void 0:r.current)==null?void 0:c.querySelectorAll('button[role="tab"]'))??[]),h=d.findIndex(y=>y.name===A);if(h>=0){const y=(()=>{switch(a.key){case"Home":return 0;case"End":return d.length-1;case"ArrowLeft":return Math.max(0,h-1);case"ArrowRight":return Math.min(d.length-1,h+1);default:return h}})();h!==y&&((T=d[y])!=null&&T.name)&&(a.preventDefault(),$(d[y].name),d[y].focus())}}};return e.jsx("div",{...j,className:b,children:e.jsxs("div",{role:"tablist",className:w,ref:r,onKeyDown:ae,children:[p.Children.map(o,a=>{var c;return a&&p.cloneElement(a,{setActive:$,isActive:((c=a==null?void 0:a.props)==null?void 0:c.name)===A})}),e.jsx("span",{className:P,ref:l})]})})};try{x.displayName="Tabs",x.__docgenInfo={description:"",displayName:"Tabs",props:{children:{defaultValue:null,description:"The Tabs within the container.",name:"children",required:!0,type:{name:"ReactNode"}},active:{defaultValue:null,description:`Used to set the name of the Tab that should be active on mount.
Defaults to the first tab if not present and isActive is not set on any Tab.`,name:"active",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler that is called when the tab changes.",name:"onChange",required:!1,type:{name:"((name: string) => void)"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ue={title:"Navigation/Tabs"},I=()=>e.jsxs(x,{onChange:n=>console.log(n),children:[e.jsx(t,{label:"Tab 1",name:"one"}),!1,e.jsx(t,{label:"Tab 3",name:"three",isActive:!0})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx(t,{label:"Tab 1",name:"one"}),e.jsx(t,{label:"Tab 2",name:"two"}),e.jsx(t,{label:"Tab 3",name:"three"})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(m,{name:"one",children:"Tab one selected!"}),e.jsx(m,{name:"two",children:"Tab two selected!"}),e.jsx(m,{name:"three",children:"Tab three selected!"})]})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx(t,{label:"Tab 1",name:"one"}),e.jsx(t,{label:"Tab 2 (www.finn.no)",name:"two",onClick:()=>alert("opened tab 2")}),e.jsx(t,{label:"Tab 3 (www.schibsted.com without panel)",name:"three",onClick:()=>alert("opened tab 3")})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(m,{name:"one",children:"Tab one selected!"}),e.jsx(m,{name:"two",children:"Tab two selected!"})]})]}),S=()=>e.jsxs(x,{children:[e.jsx(t,{label:"Tab 1",name:"one",isActive:!0,children:e.jsx(u,{})}),e.jsx(t,{label:"Tab 2",name:"two",children:e.jsx(u,{})}),e.jsx(t,{label:"Tab 3",name:"three",children:e.jsx(u,{})}),e.jsx(t,{label:"Tab 4",name:"four",children:e.jsx(u,{})})]}),q=()=>e.jsxs(x,{children:[e.jsx(t,{label:"Tab 1",name:"one",over:!0,isActive:!0,children:e.jsx(u,{})}),e.jsx(t,{label:"Tab 2",name:"two",over:!0,children:e.jsx(u,{})}),e.jsx(t,{label:"Tab 3",name:"three",over:!0,children:e.jsx(u,{})}),e.jsx(t,{label:"Tab 4",name:"four",over:!0,children:e.jsx(u,{})})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx(t,{label:"Tab 1",name:"one",isActive:!0,children:e.jsx(u,{})}),e.jsx(t,{label:"Tab 2",name:"two",children:e.jsx(u,{})}),e.jsx(t,{label:"Tab 3",name:"three",children:e.jsx(u,{})}),e.jsx(t,{label:"Tab 4",name:"four",children:e.jsx(u,{})})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(m,{name:"one",children:"Tab one selected!"}),e.jsx(m,{name:"two",children:"Tab two selected!"}),e.jsx(m,{name:"three",children:"Tab three selected!"}),e.jsx(m,{name:"four",children:"Tab four selected!"})]})]});var L,W,B;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`() => <Tabs onChange={e => console.log(e)}>
    <Tab label="Tab 1" name="one" />
    {false && <Tab label="Tab 2" name="two" />}
    <Tab label="Tab 3" name="three" isActive />
  </Tabs>`,...(B=(W=I.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var M,R,U;N.parameters={...N.parameters,docs:{...(M=N.parameters)==null?void 0:M.docs,source:{originalSource:`() => <>
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
  </>`,...(U=(R=N.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var F,K,O;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:`() => <>
    <Tabs>
      <Tab label="Tab 1" name="one" />
      <Tab label="Tab 2 (www.finn.no)" name="two" onClick={() => alert('opened tab 2')} />
      <Tab label="Tab 3 (www.schibsted.com without panel)" name="three" onClick={() => alert('opened tab 3')} />
    </Tabs>
    <div className="mb-16">
      <TabPanel name="one">Tab one selected!</TabPanel>
      <TabPanel name="two">Tab two selected!</TabPanel>
    </div>
  </>`,...(O=(K=_.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var H,z,G;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`() => <Tabs>
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
  </Tabs>`,...(G=(z=S.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,Q,X;q.parameters={...q.parameters,docs:{...(J=q.parameters)==null?void 0:J.docs,source:{originalSource:`() => <Tabs>
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
  </Tabs>`,...(X=(Q=q.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`() => <>
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
  </>`,...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const me=["Default","DefaultWithPanel","DefaultWithOnClickAction","Icon","IconOvertop","IconWithPanel"];export{I as Default,_ as DefaultWithOnClickAction,N as DefaultWithPanel,S as Icon,q as IconOvertop,E as IconWithPanel,me as __namedExportsOrder,ue as default};
