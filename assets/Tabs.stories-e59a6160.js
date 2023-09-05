import{j as e,t as T,r as I,u as ae}from"./index-a783ab12.js";import{r as x}from"./index.m-73ef1fbe.js";import{r as p}from"./index-b75aab2a.js";const ne=({className:n,isActive:r,setActive:s,...l})=>({tab:x(T.tab,{[n]:!!n,[T.tabActive]:r}),icon:x(T.icon,{[T.iconUnderlinedActive]:r}),content:x(T.contentUnderlined,{[T.contentUnderlinedActive]:r}),attrs:{...l}});function t(n){const{children:r,label:s,setActive:l=()=>{},name:i,onClick:c,isActive:b}=n,{tab:w,icon:y,content:g,attrs:v}=ne(n),{over:A,...j}=v,E=V=>{l(i),c&&c(V)};return e.jsxs("button",{type:"button",...j,role:"tab","aria-selected":b?"true":"false","aria-controls":b?`warp-tabpanel-${i}`:void 0,id:`warp-tab-${i}`,tabIndex:b?0:-1,className:w,onClick:E,children:[!r&&e.jsx("span",{className:g,children:s}),r&&A&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:y,children:r}),e.jsx("span",{className:g,children:s})]}),r&&!A&&e.jsxs("div",{className:T.content,children:[r,s]})]})}try{t.displayName="Tab",t.__docgenInfo={description:"",displayName:"Tab",props:{setActive:{defaultValue:null,description:"",name:"setActive",required:!1,type:{name:"((name: string) => void)"}},className:{defaultValue:null,description:"Additional CSS class for the tab.",name:"className",required:!1,type:{name:"string"}},over:{defaultValue:{value:"false"},description:"Set the over prop to true if you need to move icons to above the tab label",name:"over",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Additional content to be included in the tab (eg. icons). Content is placed above the label.",name:"children",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"Tab name identifier. This value will be omitted as the argument to the Tabs onChange handler.",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"The label of the tab item.",name:"label",required:!0,type:{name:"ReactNode"}},isActive:{defaultValue:null,description:"Used to set which tab should be active on mount. Defaults to the first tab if not present.",name:"isActive",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Additional CSS styles for the tab.",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Action to be called when the component is clicked",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}function m(n){var c,b;const{children:r,name:s,hidden:l,...i}=n;return e.jsx("div",{tabIndex:-1,...i,role:"tabpanel","aria-labelledby":`warp-tab-${s}`,id:`warp-tabpanel-${s}`,hidden:l===void 0&&typeof document=="object"?!((b=(c=document==null?void 0:document.getElementById(`warp-tab-${s}`))==null?void 0:c.classList)!=null&&b.contains(T.tabActive)):l,children:r})}try{m.displayName="TabPanel",m.__docgenInfo={description:"",displayName:"TabPanel",props:{name:{defaultValue:null,description:"Tab name identifier. Must exactly match the name identifier of a Tab.",name:"name",required:!0,type:{name:"string"}},hidden:{defaultValue:null,description:"Show/hide panel manually (in server-side rendering).",name:"hidden",required:!1,type:{name:"boolean"}}}}}catch{}function te(n,r=200,s=!1){let l;return function(){var i=()=>{l=null,s||n.apply(this,arguments)};let c=s&&!l;clearTimeout(l),l=setTimeout(i,r),c&&n.apply(this,arguments)}}const re=({className:n,children:r,onClick:s,active:l,...i},c,b)=>({nav:x(I.wrapperUnderlined,{[n]:!!n}),div:x(I.tabContainer,{[ae[`cols${r.length}`]]:!0}),wunderbar:x(I.wunderbar),attrs:i,updateWunderbar:()=>{window.requestAnimationFrame(()=>{try{const w=c.current.querySelector('button[role="tab"][aria-selected="true"]'),{left:y}=c.current.getBoundingClientRect(),{left:g,width:v}=w.getBoundingClientRect();b.current.style.left=`${g-y}px`,b.current.style.width=`${v}px`}catch(w){console.warn("Problem updating tabs",w)}})}}),f=n=>{const r=!!(typeof document=="object"&&(document!=null&&document.createElement)),s=p.useRef(null),l=p.useRef(null),{children:i,onChange:c}=n,{nav:b,div:w,wunderbar:y,attrs:g,updateWunderbar:v}=re(n,s,l);p.useEffect(()=>{r&&V(),v();const a=te(v,100);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)});const A=()=>{var a;if(n.active)return String(n.active);if(p.Children.count(i)>0){const o=p.Children.toArray(i),u=(o==null?void 0:o.find(h=>{var C;return(C=h==null?void 0:h.props)==null?void 0:C.isActive}))||o[0];return String(((a=u==null?void 0:u.props)==null?void 0:a.name)||"")}return""},[j,E]=p.useState(A()),V=()=>{p.Children.forEach(i,a=>{var o,u;if(typeof a=="object"){const h=document.getElementById(`warp-tabpanel-${(o=a==null?void 0:a.props)==null?void 0:o.name}`);h&&(h.hidden=((u=a==null?void 0:a.props)==null?void 0:u.name)!==j)}})},D=a=>{E(a),v(),c&&c(a)},ee=a=>{if(!a.altKey&&!a.ctrlKey&&!a.shiftKey&&["ArrowLeft","ArrowRight","Home","End"].includes(a.key))try{const o=[...s.current.querySelectorAll('button[role="tab"]')],u=o.findIndex(C=>C.name===j),h=(()=>{switch(a.key){case"Home":return 0;case"End":return o.length-1;case"ArrowLeft":return Math.max(0,u-1);case"ArrowRight":return Math.min(o.length-1,u+1);default:return u}})();u!==h&&(a.preventDefault(),D(o[h].name),o[h].focus())}catch(o){console.warn("Problem handling keydown",o)}};return e.jsx("div",{...g,className:b,children:e.jsxs("div",{role:"tablist",className:w,ref:s,onKeyDown:ee,children:[p.Children.map(i,a=>p.cloneElement(a,{setActive:D,isActive:a.props.name===j})),e.jsx("span",{className:y,ref:l})]})})};try{f.displayName="Tabs",f.__docgenInfo={description:"",displayName:"Tabs",props:{children:{defaultValue:null,description:"The Tabs within the container.",name:"children",required:!0,type:{name:"ReactNode"}},active:{defaultValue:null,description:`Used to set the name of the Tab that should be active on mount.
Defaults to the first tab if not present and isActive is not set on any Tab.`,name:"active",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler that is called when the tab changes.",name:"onChange",required:!1,type:{name:"((name: string) => void)"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ie={title:"Navigation/Tabs"},d=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 32 32",style:{verticalAlign:"sub"},children:e.jsxs("g",{fill:"none",fillRule:"evenodd",children:[e.jsx("path",{d:"M0 0h32v32H0z"}),e.jsx("path",{fill:"currentColor",fillRule:"nonzero",d:"M17 15V4h-2v11H4v2h11v11h2V17h11v-2z"})]})}),P=()=>e.jsxs(f,{onChange:n=>console.log(n),children:[e.jsx(t,{label:"Tab 1",name:"one"}),e.jsx(t,{label:"Tab 2",name:"two"}),e.jsx(t,{label:"Tab 3",name:"three",isActive:!0})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx(t,{label:"Tab 1",name:"one"}),e.jsx(t,{label:"Tab 2",name:"two"}),e.jsx(t,{label:"Tab 3",name:"three"})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(m,{name:"one",children:"Tab one selected!"}),e.jsx(m,{name:"two",children:"Tab two selected!"}),e.jsx(m,{name:"three",children:"Tab three selected!"})]})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx(t,{label:"Tab 1",name:"one"}),e.jsx(t,{label:"Tab 2 (www.finn.no)",name:"two",onClick:n=>window.open("https://www.finn.no/","_blank")}),e.jsx(t,{label:"Tab 3 (www.schibsted.com without panel)",name:"three",onClick:n=>window.open("https://www.schibsted.com/","_blank")})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(m,{name:"one",children:"Tab one selected!"}),e.jsx(m,{name:"two",children:"Tab two selected!"})]})]}),S=()=>e.jsxs(f,{children:[e.jsx(t,{label:"Tab 1",name:"one",isActive:!0,children:d}),e.jsx(t,{label:"Tab 2",name:"two",children:d}),e.jsx(t,{label:"Tab 3",name:"three",children:d}),e.jsx(t,{label:"Tab 4",name:"four",children:d})]}),k=()=>e.jsxs(f,{children:[e.jsx(t,{label:"Tab 1",name:"one",over:!0,isActive:!0,children:d}),e.jsx(t,{label:"Tab 2",name:"two",over:!0,children:d}),e.jsx(t,{label:"Tab 3",name:"three",over:!0,children:d}),e.jsx(t,{label:"Tab 4",name:"four",over:!0,children:d})]}),q=()=>e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx(t,{label:"Tab 1",name:"one",isActive:!0,children:d}),e.jsx(t,{label:"Tab 2",name:"two",children:d}),e.jsx(t,{label:"Tab 3",name:"three",children:d}),e.jsx(t,{label:"Tab 4",name:"four",children:d})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(m,{name:"one",children:"Tab one selected!"}),e.jsx(m,{name:"two",children:"Tab two selected!"}),e.jsx(m,{name:"three",children:"Tab three selected!"}),e.jsx(m,{name:"four",children:"Tab four selected!"})]})]});var R,$,L;P.parameters={...P.parameters,docs:{...(R=P.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Tabs onChange={e => console.log(e)}>
      <Tab label="Tab 1" name="one" />
      <Tab label="Tab 2" name="two" />
      <Tab label="Tab 3" name="three" isActive />
    </Tabs>;
}`,...(L=($=P.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var B,M,W;_.parameters={..._.parameters,docs:{...(B=_.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <>
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
    </>;
}`,...(W=(M=_.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var H,U,z;N.parameters={...N.parameters,docs:{...(H=N.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <>
      <Tabs>
        <Tab label="Tab 1" name="one" />
        <Tab label="Tab 2 (www.finn.no)" name="two" onClick={e => window.open('https://www.finn.no/', '_blank')} />
        <Tab label="Tab 3 (www.schibsted.com without panel)" name="three" onClick={e => window.open('https://www.schibsted.com/', '_blank')} />
      </Tabs>
      <div className="mb-16">
        <TabPanel name="one">Tab one selected!</TabPanel>
        <TabPanel name="two">Tab two selected!</TabPanel>
      </div>
    </>;
}`,...(z=(U=N.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var F,K,O;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tab label="Tab 1" name="one" isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two">
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three">
        {svgicon}
      </Tab>
      <Tab label="Tab 4" name="four">
        {svgicon}
      </Tab>
    </Tabs>;
}`,...(O=(K=S.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var G,J,Q;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tab label="Tab 1" name="one" over isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two" over>
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three" over>
        {svgicon}
      </Tab>
      <Tab label="Tab 4" name="four" over>
        {svgicon}
      </Tab>
    </Tabs>;
}`,...(Q=(J=k.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;q.parameters={...q.parameters,docs:{...(X=q.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <Tabs>
        <Tab label="Tab 1" name="one" isActive>
          {svgicon}
        </Tab>
        <Tab label="Tab 2" name="two">
          {svgicon}
        </Tab>
        <Tab label="Tab 3" name="three">
          {svgicon}
        </Tab>
        <Tab label="Tab 4" name="four">
          {svgicon}
        </Tab>
      </Tabs>
      <div className="mb-16">
        <TabPanel name="one">Tab one selected!</TabPanel>
        <TabPanel name="two">Tab two selected!</TabPanel>
        <TabPanel name="three">Tab three selected!</TabPanel>
        <TabPanel name="four">Tab four selected!</TabPanel>
      </div>
    </>;
}`,...(Z=(Y=q.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ce=["Default","DefaultWithPanel","DefaultWithExternalLinks","Icon","IconOvertop","IconWithPanel"];export{P as Default,N as DefaultWithExternalLinks,_ as DefaultWithPanel,S as Icon,k as IconOvertop,q as IconWithPanel,ce as __namedExportsOrder,ie as default};
//# sourceMappingURL=Tabs.stories-e59a6160.js.map
