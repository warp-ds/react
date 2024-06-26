import{j as u,C as b}from"./index-Qu8W46vS.js";import{R as at,r as c}from"./index-BwDkhjyp.js";import{B as y}from"./component-DUYsPMgf.js";import{T as rn}from"./component-0IWA2c-T.js";import{r as P}from"./index.m-CtIADANO.js";import{i as W}from"./index-1YnX0IqW.js";import{c as on}from"./close-16-DZukE-JG.js";import{a as an}from"./i18n-CxlFdrFq.js";import{u as un}from"./useId-CsjNNO75.js";import"./_commonjsHelpers-BosuxZz1.js";import"./item--kbpa4lO.js";var cn={},ln=Object.defineProperty,je=Object.getOwnPropertySymbols,sn=Object.prototype.hasOwnProperty,fn=Object.prototype.propertyIsEnumerable,Ae=(e,t,n)=>t in e?ln(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dn=(e,t)=>{for(var n in t||(t={}))sn.call(t,n)&&Ae(e,n,t[n]);if(je)for(var n of je(t))fn.call(t,n)&&Ae(e,n,t[n]);return e},vn=JSON.parse('{"icon.title.arrow-left":"Pil som peker mot venstre"}'),mn=JSON.parse('{"icon.title.arrow-left":"Leftward-pointing arrow"}'),pn=JSON.parse('{"icon.title.arrow-left":"Vasemmalle osoittava nuoli"}'),it=["en","nb","fi","da","sv"],ut="en",hn=()=>{let e;switch(cn.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ct=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":ut},re=e=>it.find(t=>e===t||e.toLowerCase().includes(t))||ct();function gn(){var e;if(typeof window>"u"){const t=hn();return re(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=ct();return it.includes(t)?re(t??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),re(n))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),ut}}var bn=(e,t,n,r)=>e==="nb"?n:e==="fi"?r:t,yn=(e,t,n)=>{const r=gn(),o=bn(r,e,t,n);W.load(r,o),W.activate(r)};yn(mn,vn,pn);var On=W.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"}),kn=e=>at.createElement("svg",dn({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${On}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path>`}},e)),xn=kn;function En(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}var le="data-focus-lock",lt="data-focus-lock-disabled",Mn="data-no-focus-lock",Cn="data-autofocus-inside",wn="data-no-autofocus";function oe(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Rn(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Fn=typeof window<"u"?c.useLayoutEffect:c.useEffect,Ne=new WeakMap;function Sn(e,t){var n=Rn(null,function(r){return e.forEach(function(o){return oe(o,r)})});return Fn(function(){var r=Ne.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(l){a.has(l)||oe(l,null)}),a.forEach(function(l){o.has(l)||oe(l,i)})}Ne.set(n,e)},[e]),n}var ae={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},se=function(){return se=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},se.apply(this,arguments)};function st(e){return e}function ft(e,t){t===void 0&&(t=st);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(l){return l!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(l){return a(l)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var l=n;n=[],l.forEach(a),i=n}var h=function(){var d=i;i=[],d.forEach(a)},s=function(){return Promise.resolve().then(h)};s(),n={push:function(d){i.push(d),s()},filter:function(d){return i=i.filter(d),n}}}};return o}function pe(e,t){return t===void 0&&(t=st),ft(e,t)}function Tn(e){e===void 0&&(e={});var t=ft(null);return t.options=se({async:!0,ssr:!1},e),t}var dt=pe({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),vt=pe(),Bn=pe(),In=Tn({async:!0,ssr:typeof document<"u"}),_n=c.createContext(void 0),jn=[],he=c.forwardRef(function(t,n){var r,o=c.useState(),a=o[0],i=o[1],l=c.useRef(),h=c.useRef(!1),s=c.useRef(null),d=c.useState({}),f=d[1],m=t.children,g=t.disabled,v=g===void 0?!1:g,p=t.noFocusGuards,O=p===void 0?!1:p,x=t.persistentFocus,k=x===void 0?!1:x,M=t.crossFrame,$=M===void 0?!0:M,N=t.autoFocus,Nt=N===void 0?!0:N;t.allowTextSelection;var Pt=t.group,Dt=t.className,Lt=t.whiteList,Wt=t.hasPositiveIndices,Fe=t.shards,ee=Fe===void 0?jn:Fe,Se=t.as,Ht=Se===void 0?"div":Se,Te=t.lockProps,Ut=Te===void 0?{}:Te,Vt=t.sideCar,Be=t.returnFocus,G=Be===void 0?!1:Be,qt=t.focusOptions,te=t.onActivation,ne=t.onDeactivation,$t=c.useState({}),Gt=$t[0],Jt=c.useCallback(function(C){var T=C.captureFocusRestore;if(!s.current){var B,w=(B=document)==null?void 0:B.activeElement;s.current=w,w!==document.body&&(s.current=T(w))}l.current&&te&&te(l.current),h.current=!0,f()},[te]),Yt=c.useCallback(function(){h.current=!1,ne&&ne(l.current),f()},[ne]),Kt=c.useCallback(function(C){var T=s.current;if(T){var B=(typeof T=="function"?T():T)||document.body,w=typeof G=="function"?G(B):G;if(w){var _e=typeof w=="object"?w:void 0;s.current=null,C?Promise.resolve().then(function(){return B.focus(_e)}):B.focus(_e)}}},[G]),Qt=c.useCallback(function(C){h.current&&dt.useMedium(C)},[]),zt=vt.useMedium,Xt=c.useCallback(function(C){l.current!==C&&(l.current=C,i(C))},[]),Zt=H((r={},r[lt]=v&&"disabled",r[le]=Pt,r),Ut),Ie=O!==!0,en=Ie&&O!=="tail",tn=Sn([n,Xt]),nn=c.useMemo(function(){return{observed:l,shards:ee,enabled:!v,active:h.current}},[v,h.current,ee,a]);return c.createElement(c.Fragment,null,Ie&&[c.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:v?-1:0,style:ae}),Wt?c.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:v?-1:1,style:ae}):null],!v&&c.createElement(Vt,{id:Gt,sideCar:In,observed:a,disabled:v,persistentFocus:k,crossFrame:$,autoFocus:Nt,whiteList:Lt,shards:ee,onActivation:Jt,onDeactivation:Yt,returnFocus:Kt,focusOptions:qt}),c.createElement(Ht,H({ref:tn},Zt,{className:Dt,onBlur:zt,onFocus:Qt}),c.createElement(_n.Provider,{value:nn},m)),en&&c.createElement("div",{"data-focus-guard":!0,tabIndex:v?-1:0,style:ae}))});he.propTypes={};function fe(e,t){return fe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},fe(e,t)}function An(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,fe(e,t)}function U(e){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(e)}function Nn(e,t){if(U(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(U(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Pn(e){var t=Nn(e,"string");return U(t)=="symbol"?t:t+""}function Dn(e,t,n){return t=Pn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ln(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function l(){i=e(a.map(function(s){return s.props})),t(i)}var h=function(s){An(d,s);function d(){return s.apply(this,arguments)||this}d.peek=function(){return i};var f=d.prototype;return f.componentDidMount=function(){a.push(this),l()},f.componentDidUpdate=function(){l()},f.componentWillUnmount=function(){var g=a.indexOf(this);a.splice(g,1),l()},f.render=function(){return at.createElement(o,this.props)},d}(c.PureComponent);return Dn(h,"displayName","SideEffect("+n(o)+")"),h}}var E=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},F=function(e){return Array.isArray(e)?e:[e]},mt=function(e){return Array.isArray(e)?e[0]:e},Wn=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},pt=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},ht=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},Hn=function(e){return e.hasAttribute("inert")},Un=function(e,t){return!e||ht(e)||!Wn(e)&&!Hn(e)&&t(pt(e))},gt=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Un(t,gt.bind(void 0,e));return e.set(t,r),r},Vn=function(e,t){return e&&!ht(e)?Gn(e)?t(pt(e)):!1:!0},bt=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Vn(t,bt.bind(void 0,e));return e.set(t,r),r},yt=function(e){return e.dataset},qn=function(e){return e.tagName==="BUTTON"},Ot=function(e){return e.tagName==="INPUT"},kt=function(e){return Ot(e)&&e.type==="radio"},$n=function(e){return!((Ot(e)||qn(e))&&(e.type==="hidden"||e.disabled))},Gn=function(e){var t=e.getAttribute(wn);return![!0,"true",""].includes(t)},ge=function(e){var t;return!!(e&&(!((t=yt(e))===null||t===void 0)&&t.focusGuard))},de=function(e){return!ge(e)},Jn=function(e){return!!e},Yn=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},Kn=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},be=function(e,t,n){return E(e).map(function(r,o){var a=Kn(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(Yn)},Qn=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],ye=Qn.join(","),zn="".concat(ye,", [data-focus-guard]"),xt=function(e,t){return E((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?zn:ye)?[r]:[],xt(r))},[])},Xn=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?A([e.contentDocument.body],t):[e]},A=function(e,t){return e.reduce(function(n,r){var o,a=xt(r,t),i=(o=[]).concat.apply(o,a.map(function(l){return Xn(l,t)}));return n.concat(i,r.parentNode?E(r.parentNode.querySelectorAll(ye)).filter(function(l){return l===r}):[])},[])},Zn=function(e){var t=e.querySelectorAll("[".concat(Cn,"]"));return E(t).map(function(n){return A([n])}).reduce(function(n,r){return n.concat(r)},[])},Oe=function(e,t){return E(e).filter(function(n){return gt(t,n)}).filter(function(n){return $n(n)})},Pe=function(e,t){return t===void 0&&(t=new Map),E(e).filter(function(n){return bt(t,n)})},ke=function(e,t,n){return be(Oe(A(e,n),t),!0,n)},X=function(e,t){return be(Oe(A(e),t),!1)},er=function(e,t){return Oe(Zn(e),t)},R=function(e,t){return e.shadowRoot?R(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:E(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?R(o,t):!1}return R(n,t)})},tr=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,l){return!t.has(l)})},Et=function(e){return e.parentNode?Et(e.parentNode):e},xe=function(e){var t=F(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(le);return n.push.apply(n,o?tr(E(Et(r).querySelectorAll("[".concat(le,'="').concat(o,'"]:not([').concat(lt,'="disabled"])')))):[r]),n},[])},nr=function(e){try{return e()}catch{return}},V=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?V(t.shadowRoot):t instanceof HTMLIFrameElement&&nr(function(){return t.contentWindow.document})?V(t.contentWindow.document):t}},rr=function(e,t){return e===t},or=function(e,t){return!!E(e.querySelectorAll("iframe")).some(function(n){return rr(n,t)})},Mt=function(e,t){return t===void 0&&(t=V(mt(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:xe(e).some(function(n){return R(n,t)||or(n,t)})},ar=function(e){e===void 0&&(e=document);var t=V(e);return t?E(e.querySelectorAll("[".concat(Mn,"]"))).some(function(n){return R(n,t)}):!1},ir=function(e,t){return t.filter(kt).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},Ee=function(e,t){return kt(e)&&e.name?ir(e,t):e},ur=function(e){var t=new Set;return e.forEach(function(n){return t.add(Ee(n,e))}),e.filter(function(n){return t.has(n)})},De=function(e){return e[0]&&e.length>1?Ee(e[0],e):e[0]},Le=function(e,t){return e.indexOf(Ee(t,e))},ve="NEW_FOCUS",cr=function(e,t,n,r,o){var a=e.length,i=e[0],l=e[a-1],h=ge(r);if(!(r&&e.indexOf(r)>=0)){var s=r!==void 0?n.indexOf(r):-1,d=o?n.indexOf(o):s,f=o?e.indexOf(o):-1;if(s===-1)return f!==-1?f:ve;if(f===-1)return ve;var m=s-d,g=n.indexOf(i),v=n.indexOf(l),p=ur(n),O=r!==void 0?p.indexOf(r):-1,x=O-(o?p.indexOf(o):s);if(!m&&f>=0||t.length===0)return f;var k=Le(e,t[0]),M=Le(e,t[t.length-1]);if(s<=g&&h&&Math.abs(m)>1)return M;if(s>=v&&h&&Math.abs(m)>1)return k;if(m&&Math.abs(x)>1)return f;if(s<=g)return M;if(s>v)return k;if(m)return Math.abs(m)>1?f:(a+f+m)%a}},lr=function(e){return function(t){var n,r=(n=yt(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},We=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=Pe(r.filter(lr(n)));return o&&o.length?De(o):De(Pe(t))},me=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&me(e.parentNode.host||e.parentNode,t),t},ie=function(e,t){for(var n=me(e),r=me(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},Ct=function(e,t,n){var r=F(e),o=F(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(l){i=ie(i||l,l)||i,n.filter(Boolean).forEach(function(h){var s=ie(a,h);s&&(!i||R(s,i)?i=s:i=ie(s,i))})}),i},He=function(e,t){return e.reduce(function(n,r){return n.concat(er(r,t))},[])},sr=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(Jn)},fr=function(e,t){var n=V(F(e).length>0?document:mt(e).ownerDocument),r=xe(e).filter(de),o=Ct(n||e,e,r),a=new Map,i=X(r,a),l=i.filter(function(v){var p=v.node;return de(p)});if(l[0]){var h=X([o],a).map(function(v){var p=v.node;return p}),s=sr(h,l),d=s.map(function(v){var p=v.node;return p}),f=s.filter(function(v){var p=v.tabIndex;return p>=0}).map(function(v){var p=v.node;return p}),m=cr(d,f,h,n,t);if(m===ve){var g=We(i,f,He(r,a))||We(i,d,He(r,a));if(g)return{node:g};console.warn("focus-lock: cannot find any node to move focus into");return}return m===void 0?m:s[m]}},dr=function(e){var t=xe(e).filter(de),n=Ct(e,e,t),r=be(A([n],!0),!0,!0),o=A(t,!1);return r.map(function(a){var i=a.node,l=a.index;return{node:i,index:l,lockItem:o.indexOf(i)>=0,guard:ge(i)}})},Me=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},ue=0,ce=!1,wt=function(e,t,n){n===void 0&&(n={});var r=fr(e,t);if(!ce&&r){if(ue>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),ce=!0,setTimeout(function(){ce=!1},1);return}ue++,Me(r.node,n.focusOptions),ue--}};function D(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var vr=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:D(n),parent:D(n.parentElement),left:D(n.previousElementSibling),right:D(n.nextElementSibling)}),n=n.parentElement;return{element:D(e),stack:t,ownerDocument:e.ownerDocument}},mr=function(e){var t,n,r,o,a;if(e)for(var i=e.stack,l=e.ownerDocument,h=new Map,s=0,d=i;s<d.length;s++){var f=d[s],m=(t=f.parent)===null||t===void 0?void 0:t.call(f);if(m&&l.contains(m)){for(var g=(n=f.left)===null||n===void 0?void 0:n.call(f),v=f.current(),p=m.contains(v)?v:void 0,O=(r=f.right)===null||r===void 0?void 0:r.call(f),x=ke([m],h),k=(a=(o=p??(g==null?void 0:g.nextElementSibling))!==null&&o!==void 0?o:O)!==null&&a!==void 0?a:g;k;){for(var M=0,$=x;M<$.length;M++){var N=$[M];if(k!=null&&k.contains(N.node))return N.node}k=k.nextElementSibling}if(x.length)return x[0].node}}},pr=function(e){var t=vr(e);return function(){return mr(t)}},hr=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=F(t);if(r.every(function(i){return!R(i,e)}))return console.error("Active element is not contained in the scope"),{};var o=n?ke(r,new Map):X(r,new Map),a=o.findIndex(function(i){var l=i.node;return l===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},gr=function(e,t){var n=t?ke(F(e),new Map):X(F(e),new Map);return{first:n[0],last:n[n.length-1]}},br=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},Rt=function(e,t,n){t===void 0&&(t={});var r=br(t),o=hr(e,r.scope,r.onlyTabbable);if(o){var a=n(o,r.cycle);a&&Me(a.node,r.focusOptions)}},yr=function(e,t){t===void 0&&(t={}),Rt(e,t,function(n,r){var o=n.next,a=n.first;return o||r&&a})},Or=function(e,t){t===void 0&&(t={}),Rt(e,t,function(n,r){var o=n.prev,a=n.last;return o||r&&a})},Ft=function(e,t,n){var r,o=gr(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),a=o[n];a&&Me(a.node,t.focusOptions)},kr=function(e,t){t===void 0&&(t={}),Ft(e,t,"first")},xr=function(e,t){t===void 0&&(t={}),Ft(e,t,"last")};function Ce(e){setTimeout(e,1)}var Er=function(t){return t&&"current"in t?t.current:t},Mr=function(){return document&&document.activeElement===document.body},Cr=function(){return Mr()||ar()},_=null,I=null,j=null,q=!1,wr=function(){return!0},Rr=function(t){return(_.whiteList||wr)(t)},Fr=function(t,n){j={observerNode:t,portaledElement:n}},Sr=function(t){return j&&j.portaledElement===t};function Ue(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var Tr=function(t){return t?!!q:q==="meanwhile"},Br=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},Ir=function(t,n){return n.some(function(r){return Br(t,r,r)})},Z=function(){var t=!1;if(_){var n=_,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,l=n.crossFrame,h=n.focusOptions,s=r||j&&j.portaledElement,d=document&&document.activeElement;if(s){var f=[s].concat(i.map(Er).filter(Boolean));if((!d||Rr(d))&&(o||Tr(l)||!Cr()||!I&&a)&&(s&&!(Mt(f)||d&&Ir(d,f)||Sr(d))&&(document&&!I&&d&&!a?(d.blur&&d.blur(),document.body.focus()):(t=wt(f,I,{focusOptions:h}),j={})),q=!1,I=document&&document.activeElement),document&&d!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var m=document&&document.activeElement,g=dr(f),v=g.map(function(p){var O=p.node;return O}).indexOf(m);v>-1&&(g.filter(function(p){var O=p.guard,x=p.node;return O&&x.dataset.focusAutoGuard}).forEach(function(p){var O=p.node;return O.removeAttribute("tabIndex")}),Ue(v,g.length,1,g),Ue(v,-1,-1,g))}}}return t},St=function(t){Z()&&t&&(t.stopPropagation(),t.preventDefault())},we=function(){return Ce(Z)},_r=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||Fr(r,n)},jr=function(){return null},Tt=function(){q="just",Ce(function(){q="meanwhile"})},Ar=function(){document.addEventListener("focusin",St),document.addEventListener("focusout",we),window.addEventListener("blur",Tt)},Nr=function(){document.removeEventListener("focusin",St),document.removeEventListener("focusout",we),window.removeEventListener("blur",Tt)};function Pr(e){return e.filter(function(t){var n=t.disabled;return!n})}var Bt={moveFocusInside:wt,focusInside:Mt,focusNextElement:yr,focusPrevElement:Or,focusFirstElement:kr,focusLastElement:xr,captureFocusRestore:pr};function Dr(e){var t=e.slice(-1)[0];t&&!_&&Ar();var n=_,r=n&&t&&t.id===n.id;_=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(I=null,(!r||n.observed!==t.observed)&&t.onActivation(Bt),Z(),Ce(Z)):(Nr(),I=null)}dt.assignSyncMedium(_r);vt.assignMedium(we);Bn.assignMedium(function(e){return e(Bt)});const Lr=Ln(Pr,Dr)(jr);var It=c.forwardRef(function(t,n){return c.createElement(he,H({sideCar:Lr,ref:n},t))}),_t=he.propTypes||{};_t.sideCar;En(_t,["sideCar"]);It.propTypes={};let L=[];const Re={documentElement:{},body:{}},Wr=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),jt=e=>{var t;e.touches.length>1||((t=e.preventDefault)==null||t.call(e))},Hr=e=>([t,n])=>{Re[e][t]=document[e].style[t],document[e].style[t]=n},Ur=()=>Object.entries(Wr).forEach(([e,t])=>{Object.entries(t).forEach(Hr(e))}),Vr=e=>([t,n])=>{document[e].style[t]=Re[e][t]},qr=()=>Object.entries(Re).forEach(([e,t])=>{Object.entries(t).forEach(Vr(e))}),$r=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function Gr(e){let t=-1;const n=r=>{if(r.targetTouches.length!==1)return;const o=r.targetTouches[0].clientY-t;return e.scrollTop===0&&o>0||$r(e)&&o<0?jt(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=n}function Jr(e){e.ontouchstart=null,e.ontouchmove=null}const At=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",jt,{passive:!1}),Yr=At(!0),Kr=At();function Qr(e){if(!e)throw Error("Could not run setup, an element must be provided");L.some(t=>t===e)||(L.length||(Ur(),Yr()),Gr(e),L.push(e))}function Ve(){L.forEach(Jr),Kr(),qr(),L=[]}const zr=JSON.parse('{"modal.aria.back":"Back","modal.aria.close":"Close"}'),Xr=JSON.parse('{"modal.aria.back":"Takaisin","modal.aria.close":"Sulje"}'),Zr=JSON.parse('{"modal.aria.back":"Tilbake","modal.aria.close":"Lukk"}'),S=({"aria-label":e,"aria-labelledby":t,...n})=>{const r=c.useRef(null),o=un(n.id),a=c.useRef(null);return an(zr,Zr,Xr),c.useEffect(()=>()=>Ve(),[]),c.useEffect(()=>{Ve(),r.current&&n.open&&Qr(r.current)},[n.open,r]),c.useEffect(()=>{var i,l;n.initialFocusRef?(l=n.initialFocusRef.current)==null||l.focus():n.right&&((i=a.current)==null||i.focus())},[n.open,n.initialFocusRef,n.right]),n.open?u.jsx(It,{children:u.jsx("div",{onClick:n.onDismiss,className:P(n.className,b.backdrop),style:{...n.style},children:u.jsxs("div",{role:"dialog","aria-modal":"true",id:o,onClick:i=>{i.stopPropagation()},"aria-label":e,"aria-labelledby":t??(n.title&&!e?`${o}__title`:void 0),onKeyDown:i=>{n.onDismiss&&i.key==="Escape"&&n.onDismiss()},className:b.modal,tabIndex:-1,children:[u.jsxs("div",{className:b.title,children:[typeof n.left=="boolean"&&n.left?u.jsx("button",{type:"button","aria-label":W._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:P(b.transitionTitle,b.titleButton,b.titleButtonLeft),onClick:n.onLeftClick?n.onLeftClick:n.onDismiss,children:u.jsx(xn,{className:P(b.titleButtonIcon)})}):n.left,u.jsx("div",{id:`${o}__title`,className:P(b.transitionTitle,n.left?b.transitionTitleCenter:b.transitionTitleColSpan),children:typeof n.title=="string"?u.jsx("h1",{className:b.titleText,children:n.title}):n.title}),typeof n.right=="boolean"&&n.right?u.jsx("button",{ref:a,type:"button","aria-label":W._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:n.onDismiss,className:P(b.transitionTitle,b.titleButton,b.titleButtonRight),children:u.jsx(on,{className:b.titleButtonIcon})}):n.right]}),u.jsx("div",{ref:r,className:b.content,children:n.children}),!!n.footer&&u.jsx("div",{className:b.footer,children:n.footer})]})})}):u.jsx(u.Fragment,{})};try{S.displayName="Modal",S.__docgenInfo={description:"A Modal dialog that renders on top the page",displayName:"Modal",props:{title:{defaultValue:null,description:"A string or your own custom elements",name:"title",required:!1,type:{name:"string | Element | Element[]"}},open:{defaultValue:null,description:"Whether the modal is open or not",name:"open",required:!0,type:{name:"boolean"}},left:{defaultValue:null,description:"A default back button or your own custom elements",name:"left",required:!1,type:{name:"boolean | Element | Element[]"}},right:{defaultValue:null,description:"A default close button or your own custom elements",name:"right",required:!1,type:{name:"boolean | Element | Element[]"}},footer:{defaultValue:null,description:"Buttons passed to the footer",name:"footer",required:!1,type:{name:"Element | Element[]"}},className:{defaultValue:null,description:"Additional classes added to the container",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"An id for the container and ARIA attributes. A random id is generated if none is provided.",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional styles to the contianer",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The modal contents",name:"children",required:!0,type:{name:"Element | Element[]"}},onDismiss:{defaultValue:null,description:"Handler that is called when the user presses *esc* or clicks outside the modal",name:"onDismiss",required:!1,type:{name:"(() => void)"}},onLeftClick:{defaultValue:null,description:"Handler that is called when the user clicks the left button",name:"onLeftClick",required:!1,type:{name:"(() => void)"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined.",name:"aria-labelledby",required:!1,type:{name:"string"}},initialFocusRef:{defaultValue:null,description:"A reference to the element that should be focused. By default it'll be the first interactive element.",name:"initialFocusRef",required:!1,type:{name:"RefObject<any>"}}}}}catch{}const fo={title:"Overlays/Modal"},J=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(S,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},Y=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(S,{open:e,left:!0,right:!0,onDismiss:n,onLeftClick:()=>{console.log("left clicked"),n()},title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},K=()=>{const[e,t]=c.useState(!1),[n,r]=c.useState(!1),o=c.useRef(null);c.useEffect(()=>{var i;e||(r(!1),(i=o.current)==null||i.focus())},[e]);const a=()=>t(!e);return u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:o,utility:!0,onClick:a,children:"Open modal"}),u.jsxs(S,{open:e,onDismiss:a,title:"Do you agree to these terms?",footer:u.jsx(y,{primary:!0,onClick:a,disabled:!n,children:"Accept"}),children:[u.jsx("p",{children:"1. You must give me 10 pushups right now"}),u.jsx(rn,{type:"checkbox",label:"I agree",onChange:r})]})]})},Q=()=>{const[e,t]=c.useState(!1),n=()=>t(!e),r=c.useRef(),o=c.useRef(null);return c.useEffect(()=>{var a;e||(a=o.current)==null||a.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:o,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(S,{open:e,onDismiss:n,initialFocusRef:r,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{ref:r,primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Optional link to read more."})]})]})},z=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e&&((o=r.current)==null||o.focus())},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsx(S,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[...new Array(10)].map((o,a)=>u.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},a))})]})};var qe,$e,Ge;J.parameters={...J.parameters,docs:{...(qe=J.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>Content information goes here. Optional illustration on top. Can contain links.</p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(Ge=($e=J.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source}}};var Je,Ye,Ke;Y.parameters={...Y.parameters,docs:{...(Je=Y.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} left right onDismiss={toggleModal} onLeftClick={() => {
      console.log('left clicked');
      toggleModal();
    }} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>Content information goes here. Optional illustration on top. Can contain links.</p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(Ke=(Ye=Y.parameters)==null?void 0:Ye.docs)==null?void 0:Ke.source}}};var Qe,ze,Xe;K.parameters={...K.parameters,docs:{...(Qe=K.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      setChecked(false);
      openModalRef.current?.focus();
    }
  }, [open]);
  const toggleModal = () => setOpen(!open);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} title="Do you agree to these terms?" footer={<Button primary onClick={toggleModal} disabled={!checked}>
            Accept
          </Button>}>
        <p>1. You must give me 10 pushups right now</p>
        <Toggle type="checkbox" label="I agree" onChange={setChecked} />
      </Modal>
    </>;
}`,...(Xe=(ze=K.parameters)==null?void 0:ze.docs)==null?void 0:Xe.source}}};var Ze,et,tt;Q.parameters={...Q.parameters,docs:{...(Ze=Q.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => setOpen(!open);
  const focusRef = React.useRef<HTMLButtonElement>();
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} initialFocusRef={focusRef} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button ref={focusRef} primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>Content information goes here. Optional illustration on top. Can contain links.</p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(tt=(et=Q.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,rt,ot;z.parameters={...z.parameters,docs:{...(nt=z.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        {[...new Array(10)].map((e, i) => <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>)}
      </Modal>
    </>;
}`,...(ot=(rt=z.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};const vo=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{J as Example,Q as InitialFocus,K as MustConfirmToProceed,z as Overflowing,Y as WithBackAndCloseButton,vo as __namedExportsOrder,fo as default};
