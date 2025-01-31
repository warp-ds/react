import{j as u}from"./jsx-runtime-CkxqCPlQ.js";import{R as S,r as c}from"./index-DJO9vBfz.js";import{B as k}from"./component-DYZ-GJfv.js";import{T as ln}from"./component-D6DOlRwp.js";import{r as Z}from"./index.m-CtIADANO.js";import{i as $}from"./index-XDhxfy0k.js";import{B as O}from"./index-Cz-jOo8O.js";import{c as fn}from"./close-16-Dit-C8Gf.js";import{a as dn}from"./i18n-BKeluYSb.js";import{u as mn}from"./help-text-Br6UFxe2.js";import"./item-CogSVk5k.js";var vn={},pn=Object.defineProperty,Pe=Object.getOwnPropertySymbols,hn=Object.prototype.hasOwnProperty,gn=Object.prototype.propertyIsEnumerable,Le=(e,t,n)=>t in e?pn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bn=(e,t)=>{for(var n in t||(t={}))hn.call(t,n)&&Le(e,n,t[n]);if(Pe)for(var n of Pe(t))gn.call(t,n)&&Le(e,n,t[n]);return e},yn=JSON.parse('{"icon.title.arrow-left":"Pil som peker mot venstre"}'),On=JSON.parse('{"icon.title.arrow-left":"Leftward-pointing arrow"}'),En=JSON.parse('{"icon.title.arrow-left":"Vasemmalle osoittava nuoli"}'),kn=JSON.parse('{"icon.title.arrow-left":"Pil til venstre"}'),wn=JSON.parse('{"icon.title.arrow-left":"Pil som pekar vänster"}'),ct=["en","nb","fi","da","sv"],lt="en",xn=()=>{var e;let t;switch((e=process==null?void 0:vn)==null?void 0:e.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},ft=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t!=null&&t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":lt},ae=e=>ct.find(t=>e===t||e.toLowerCase().includes(t))||ft();function Sn(){var e;if(typeof window>"u"){const t=xn();return ae(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=ft();return ct.includes(t)?ae(t??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),ae(n))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),lt}}var Cn=(e,t,n,r,o,a)=>e==="nb"?n:e==="fi"?r:e==="da"?o:e==="sv"?a:t,Mn=(e,t,n,r,o)=>{const a=Sn(),i=Cn(a,e,t,n,r,o);$.load(a,i),$.activate(a)};Mn(On,yn,En,kn,wn);var Fn=$.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"}),Rn=e=>S.createElement("svg",bn({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Fn}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path>`}},e)),Tn=Rn;function In(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(null,arguments)}var fe="data-focus-lock",dt="data-focus-lock-disabled",Bn="data-no-focus-lock",Nn="data-autofocus-inside",An="data-no-autofocus";function ie(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function _n(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var jn=typeof window<"u"?c.useLayoutEffect:c.useEffect,De=new WeakMap;function Pn(e,t){var n=_n(null,function(r){return e.forEach(function(o){return ie(o,r)})});return jn(function(){var r=De.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(s){a.has(s)||ie(s,null)}),a.forEach(function(s){o.has(s)||ie(s,i)})}De.set(n,e)},[e]),n}var ue={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},de=function(){return de=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},de.apply(this,arguments)};function mt(e){return e}function vt(e,t){t===void 0&&(t=mt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(s){return s!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(s){return a(s)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var s=n;n=[],s.forEach(a),i=n}var p=function(){var v=i;i=[],v.forEach(a)},l=function(){return Promise.resolve().then(p)};l(),n={push:function(v){i.push(v),l()},filter:function(v){return i=i.filter(v),n}}}};return o}function ge(e,t){return t===void 0&&(t=mt),vt(e,t)}function Ln(e){e===void 0&&(e={});var t=vt(null);return t.options=de({async:!0,ssr:!1},e),t}var pt=ge({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),ht=ge(),Dn=ge(),Jn=Ln({async:!0,ssr:typeof document<"u"}),Wn=c.createContext(void 0),Hn=[],be=c.forwardRef(function(t,n){var r,o=c.useState(),a=o[0],i=o[1],s=c.useRef(),p=c.useRef(!1),l=c.useRef(null),v=c.useState({}),d=v[1],f=t.children,h=t.disabled,m=h===void 0?!1:h,g=t.noFocusGuards,w=g===void 0?!1:g,x=t.persistentFocus,b=x===void 0?!1:x,y=t.crossFrame,M=y===void 0?!0:y,R=t.autoFocus,te=R===void 0?!0:R;t.allowTextSelection;var Ut=t.group,Xt=t.className,qt=t.whiteList,$t=t.hasPositiveIndices,Ie=t.shards,ne=Ie===void 0?Hn:Ie,Be=t.as,Gt=Be===void 0?"div":Be,Ne=t.lockProps,Vt=Ne===void 0?{}:Ne,Yt=t.sideCar,Ae=t.returnFocus,z=Ae===void 0?!1:Ae,Kt=t.focusOptions,re=t.onActivation,oe=t.onDeactivation,Qt=c.useState({}),zt=Qt[0],Zt=c.useCallback(function(F){var N=F.captureFocusRestore;if(!l.current){var A,T=(A=document)==null?void 0:A.activeElement;l.current=T,T!==document.body&&(l.current=N(T))}s.current&&re&&re(s.current),p.current=!0,d()},[re]),en=c.useCallback(function(){p.current=!1,oe&&oe(s.current),d()},[oe]),tn=c.useCallback(function(F){var N=l.current;if(N){var A=(typeof N=="function"?N():N)||document.body,T=typeof z=="function"?z(A):z;if(T){var je=typeof T=="object"?T:void 0;l.current=null,F?Promise.resolve().then(function(){return A.focus(je)}):A.focus(je)}}},[z]),nn=c.useCallback(function(F){p.current&&pt.useMedium(F)},[]),rn=ht.useMedium,on=c.useCallback(function(F){s.current!==F&&(s.current=F,i(F))},[]),an=G((r={},r[dt]=m&&"disabled",r[fe]=Ut,r),Vt),_e=w!==!0,un=_e&&w!=="tail",sn=Pn([n,on]),cn=c.useMemo(function(){return{observed:s,shards:ne,enabled:!m,active:p.current}},[m,p.current,ne,a]);return S.createElement(c.Fragment,null,_e&&[S.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:m?-1:0,style:ue}),$t?S.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:m?-1:1,style:ue}):null],!m&&S.createElement(Yt,{id:zt,sideCar:Jn,observed:a,disabled:m,persistentFocus:b,crossFrame:M,autoFocus:te,whiteList:qt,shards:ne,onActivation:Zt,onDeactivation:en,returnFocus:tn,focusOptions:Kt,noFocusGuards:w}),S.createElement(Gt,G({ref:sn},an,{className:Xt,onBlur:rn,onFocus:nn}),S.createElement(Wn.Provider,{value:cn},f)),un&&S.createElement("div",{"data-focus-guard":!0,tabIndex:m?-1:0,style:ue}))});be.propTypes={};function me(e,t){return me=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},me(e,t)}function Un(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,me(e,t)}function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(e)}function Xn(e,t){if(V(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(V(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qn(e){var t=Xn(e,"string");return V(t)=="symbol"?t:t+""}function $n(e,t,n){return(t=qn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gn(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function s(){i=e(a.map(function(l){return l.props})),t(i)}var p=function(l){Un(v,l);function v(){return l.apply(this,arguments)||this}v.peek=function(){return i};var d=v.prototype;return d.componentDidMount=function(){a.push(this),s()},d.componentDidUpdate=function(){s()},d.componentWillUnmount=function(){var h=a.indexOf(this);a.splice(h,1),s()},d.render=function(){return S.createElement(o,this.props)},v}(c.PureComponent);return $n(p,"displayName","SideEffect("+n(o)+")"),p}}var C=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},B=function(e){return Array.isArray(e)?e:[e]},gt=function(e){return Array.isArray(e)?e[0]:e},Vn=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},bt=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},yt=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},Yn=function(e){return e.hasAttribute("inert")},Kn=function(e,t){return!e||yt(e)||!Vn(e)&&!Yn(e)&&t(bt(e))},Ot=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Kn(t,Ot.bind(void 0,e));return e.set(t,r),r},Qn=function(e,t){return e&&!yt(e)?er(e)?t(bt(e)):!1:!0},Et=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Qn(t,Et.bind(void 0,e));return e.set(t,r),r},kt=function(e){return e.dataset},zn=function(e){return e.tagName==="BUTTON"},wt=function(e){return e.tagName==="INPUT"},xt=function(e){return wt(e)&&e.type==="radio"},Zn=function(e){return!((wt(e)||zn(e))&&(e.type==="hidden"||e.disabled))},er=function(e){var t=e.getAttribute(An);return![!0,"true",""].includes(t)},ye=function(e){var t;return!!(e&&(!((t=kt(e))===null||t===void 0)&&t.focusGuard))},ve=function(e){return!ye(e)},tr=function(e){return!!e},nr=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},rr=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},Oe=function(e,t,n){return C(e).map(function(r,o){var a=rr(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(nr)},or=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Ee=or.join(","),ar="".concat(Ee,", [data-focus-guard]"),St=function(e,t){return C((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?ar:Ee)?[r]:[],St(r))},[])},ir=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?P([e.contentDocument.body],t):[e]},P=function(e,t){return e.reduce(function(n,r){var o,a=St(r,t),i=(o=[]).concat.apply(o,a.map(function(s){return ir(s,t)}));return n.concat(i,r.parentNode?C(r.parentNode.querySelectorAll(Ee)).filter(function(s){return s===r}):[])},[])},ur=function(e){var t=e.querySelectorAll("[".concat(Nn,"]"));return C(t).map(function(n){return P([n])}).reduce(function(n,r){return n.concat(r)},[])},ke=function(e,t){return C(e).filter(function(n){return Ot(t,n)}).filter(function(n){return Zn(n)})},Je=function(e,t){return t===void 0&&(t=new Map),C(e).filter(function(n){return Et(t,n)})},we=function(e,t,n){return Oe(ke(P(e,n),t),!0,n)},Y=function(e,t){return Oe(ke(P(e),t),!1)},sr=function(e,t){return ke(ur(e),t)},I=function(e,t){return e.shadowRoot?I(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:C(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?I(o,t):!1}return I(n,t)})},cr=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,s){return!t.has(s)})},Ct=function(e){return e.parentNode?Ct(e.parentNode):e},xe=function(e){var t=B(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(fe);return n.push.apply(n,o?cr(C(Ct(r).querySelectorAll("[".concat(fe,'="').concat(o,'"]:not([').concat(dt,'="disabled"])')))):[r]),n},[])},lr=function(e){try{return e()}catch{return}},K=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?K(t.shadowRoot):t instanceof HTMLIFrameElement&&lr(function(){return t.contentWindow.document})?K(t.contentWindow.document):t}},fr=function(e,t){return e===t},dr=function(e,t){return!!C(e.querySelectorAll("iframe")).some(function(n){return fr(n,t)})},Mt=function(e,t){return t===void 0&&(t=K(gt(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:xe(e).some(function(n){return I(n,t)||dr(n,t)})},mr=function(e){e===void 0&&(e=document);var t=K(e);return t?C(e.querySelectorAll("[".concat(Bn,"]"))).some(function(n){return I(n,t)}):!1},vr=function(e,t){return t.filter(xt).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},Se=function(e,t){return xt(e)&&e.name?vr(e,t):e},pr=function(e){var t=new Set;return e.forEach(function(n){return t.add(Se(n,e))}),e.filter(function(n){return t.has(n)})},We=function(e){return e[0]&&e.length>1?Se(e[0],e):e[0]},He=function(e,t){return e.indexOf(Se(t,e))},pe="NEW_FOCUS",hr=function(e,t,n,r,o){var a=e.length,i=e[0],s=e[a-1],p=ye(r);if(!(r&&e.indexOf(r)>=0)){var l=r!==void 0?n.indexOf(r):-1,v=o?n.indexOf(o):l,d=o?e.indexOf(o):-1;if(l===-1)return d!==-1?d:pe;if(d===-1)return pe;var f=l-v,h=n.indexOf(i),m=n.indexOf(s),g=pr(n),w=r!==void 0?g.indexOf(r):-1,x=w-(o?g.indexOf(o):l);if(!f&&d>=0||t.length===0)return d;var b=He(e,t[0]),y=He(e,t[t.length-1]);if(l<=h&&p&&Math.abs(f)>1)return y;if(l>=m&&p&&Math.abs(f)>1)return b;if(f&&Math.abs(x)>1)return d;if(l<=h)return y;if(l>m)return b;if(f)return Math.abs(f)>1?d:(a+d+f)%a}},gr=function(e){return function(t){var n,r=(n=kt(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},Ue=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=Je(r.filter(gr(n)));return o&&o.length?We(o):We(Je(t))},he=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&he(e.parentNode.host||e.parentNode,t),t},se=function(e,t){for(var n=he(e),r=he(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},Ft=function(e,t,n){var r=B(e),o=B(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(s){i=se(i||s,s)||i,n.filter(Boolean).forEach(function(p){var l=se(a,p);l&&(!i||I(l,i)?i=l:i=se(l,i))})}),i},Xe=function(e,t){return e.reduce(function(n,r){return n.concat(sr(r,t))},[])},br=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(tr)},yr=function(e,t){var n=K(B(e).length>0?document:gt(e).ownerDocument),r=xe(e).filter(ve),o=Ft(n||e,e,r),a=new Map,i=Y(r,a),s=i.filter(function(m){var g=m.node;return ve(g)});if(s[0]){var p=Y([o],a).map(function(m){var g=m.node;return g}),l=br(p,s),v=l.map(function(m){var g=m.node;return g}),d=l.filter(function(m){var g=m.tabIndex;return g>=0}).map(function(m){var g=m.node;return g}),f=hr(v,d,p,n,t);if(f===pe){var h=Ue(i,d,Xe(r,a))||Ue(i,v,Xe(r,a));if(h)return{node:h};console.warn("focus-lock: cannot find any node to move focus into");return}return f===void 0?f:l[f]}},Or=function(e){var t=xe(e).filter(ve),n=Ft(e,e,t),r=Oe(P([n],!0),!0,!0),o=P(t,!1);return r.map(function(a){var i=a.node,s=a.index;return{node:i,index:s,lockItem:o.indexOf(i)>=0,guard:ye(i)}})},Ce=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},ce=0,le=!1,Rt=function(e,t,n){n===void 0&&(n={});var r=yr(e,t);if(!le&&r){if(ce>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),le=!0,setTimeout(function(){le=!1},1);return}ce++,Ce(r.node,n.focusOptions),ce--}};function D(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var Er=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:D(n),parent:D(n.parentElement),left:D(n.previousElementSibling),right:D(n.nextElementSibling)}),n=n.parentElement;return{element:D(e),stack:t,ownerDocument:e.ownerDocument}},kr=function(e){var t,n,r,o,a;if(e)for(var i=e.stack,s=e.ownerDocument,p=new Map,l=0,v=i;l<v.length;l++){var d=v[l],f=(t=d.parent)===null||t===void 0?void 0:t.call(d);if(f&&s.contains(f)){for(var h=(n=d.left)===null||n===void 0?void 0:n.call(d),m=d.current(),g=f.contains(m)?m:void 0,w=(r=d.right)===null||r===void 0?void 0:r.call(d),x=we([f],p),b=(a=(o=g??(h==null?void 0:h.nextElementSibling))!==null&&o!==void 0?o:w)!==null&&a!==void 0?a:h;b;){for(var y=0,M=x;y<M.length;y++){var R=M[y];if(b!=null&&b.contains(R.node))return R.node}b=b.nextElementSibling}if(x.length)return x[0].node}}},Tt=function(e){var t=Er(e);return function(){return kr(t)}},wr=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=B(t);if(r.every(function(i){return!I(i,e)}))return console.error("Active element is not contained in the scope"),{};var o=n?we(r,new Map):Y(r,new Map),a=o.findIndex(function(i){var s=i.node;return s===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},xr=function(e,t){var n=t?we(B(e),new Map):Y(B(e),new Map);return{first:n[0],last:n[n.length-1]}},Sr=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},It=function(e,t,n){t===void 0&&(t={});var r=Sr(t),o=wr(e,r.scope,r.onlyTabbable);if(o){var a=n(o,r.cycle);a&&Ce(a.node,r.focusOptions)}},Cr=function(e,t){t===void 0&&(t={}),It(e,t,function(n,r){var o=n.next,a=n.first;return o||r&&a})},Mr=function(e,t){t===void 0&&(t={}),It(e,t,function(n,r){var o=n.prev,a=n.last;return o||r&&a})},Bt=function(e,t,n){var r,o=xr(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),a=o[n];a&&Ce(a.node,t.focusOptions)},Fr=function(e,t){t===void 0&&(t={}),Bt(e,t,"first")},Rr=function(e,t){t===void 0&&(t={}),Bt(e,t,"last")};function Me(e){setTimeout(e,1)}var Tr=function(t){return t&&"current"in t?t.current:t},Nt=function(){return document&&document.activeElement===document.body},Ir=function(){return Nt()||mr()},_=null,E=null,qe=function(){return null},j=null,Q=!1,Fe=!1,Br=function(){return!0},Nr=function(t){return(_.whiteList||Br)(t)},Ar=function(t,n){j={observerNode:t,portaledElement:n}},_r=function(t){return j&&j.portaledElement===t};function $e(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var jr=function(t){return t?!!Q:Q==="meanwhile"},Pr=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},Lr=function(t,n){return n.some(function(r){return Pr(t,r,r)})},At=function(t){return Y(t,new Map)},Dr=function(t){return!At([t.parentNode]).some(function(n){return n.node===t})},ee=function(){var t=!1;if(_){var n=_,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,s=n.crossFrame,p=n.focusOptions,l=n.noFocusGuards,v=r||j&&j.portaledElement;if(Nt()&&E&&E!==document.body&&(!document.body.contains(E)||Dr(E))){var d=qe();d&&d.focus()}var f=document&&document.activeElement;if(v){var h=[v].concat(i.map(Tr).filter(Boolean)),m=function(){if(!jr(s)||!l||!E||Fe)return!1;var y=At(h),M=y.findIndex(function(R){var te=R.node;return te===E});return M===0||M===y.length-1};if((!f||Nr(f))&&(o||m()||!Ir()||!E&&a)&&(v&&!(Mt(h)||f&&Lr(f,h)||_r(f))&&(document&&!E&&f&&!a?(f.blur&&f.blur(),document.body.focus()):(t=Rt(h,E,{focusOptions:p}),j={})),E=document&&document.activeElement,E!==document.body&&(qe=Tt(E)),Q=!1),document&&f!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var g=document&&document.activeElement,w=Or(h),x=w.map(function(b){var y=b.node;return y}).indexOf(g);x>-1&&(w.filter(function(b){var y=b.guard,M=b.node;return y&&M.dataset.focusAutoGuard}).forEach(function(b){var y=b.node;return y.removeAttribute("tabIndex")}),$e(x,w.length,1,w),$e(x,-1,-1,w))}}}return t},_t=function(t){ee()&&t&&(t.stopPropagation(),t.preventDefault())},Re=function(){return Me(ee)},Jr=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||Ar(r,n)},Wr=function(){return null},jt=function(){Fe=!0},Pt=function(){Fe=!1,Q="just",Me(function(){Q="meanwhile"})},Hr=function(){document.addEventListener("focusin",_t),document.addEventListener("focusout",Re),window.addEventListener("focus",jt),window.addEventListener("blur",Pt)},Ur=function(){document.removeEventListener("focusin",_t),document.removeEventListener("focusout",Re),window.removeEventListener("focus",jt),window.removeEventListener("blur",Pt)};function Xr(e){return e.filter(function(t){var n=t.disabled;return!n})}var Lt={moveFocusInside:Rt,focusInside:Mt,focusNextElement:Cr,focusPrevElement:Mr,focusFirstElement:Fr,focusLastElement:Rr,captureFocusRestore:Tt};function qr(e){var t=e.slice(-1)[0];t&&!_&&Hr();var n=_,r=n&&t&&t.id===n.id;_=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(E=null,(!r||n.observed!==t.observed)&&t.onActivation(Lt),ee(),Me(ee)):(Ur(),E=null)}pt.assignSyncMedium(Jr);ht.assignMedium(Re);Dn.assignMedium(function(e){return e(Lt)});const $r=Gn(Xr,qr)(Wr);var Dt=c.forwardRef(function(t,n){return S.createElement(be,G({sideCar:$r,ref:n},t))}),Jt=be.propTypes||{};Jt.sideCar;In(Jt,["sideCar"]);Dt.propTypes={};let q=[];const Te={documentElement:{},body:{}},Gr=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),Wt=e=>{var t;e.touches.length>1||((t=e.preventDefault)==null||t.call(e))},Vr=e=>([t,n])=>{Te[e][t]=document[e].style[t],document[e].style[t]=n},Yr=()=>Object.entries(Gr).forEach(([e,t])=>{Object.entries(t).forEach(Vr(e))}),Kr=e=>([t,n])=>{document[e].style[t]=Te[e][t]},Qr=()=>Object.entries(Te).forEach(([e,t])=>{Object.entries(t).forEach(Kr(e))}),zr=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function Zr(e){let t=-1;const n=r=>{if(r.targetTouches.length!==1)return;const o=r.targetTouches[0].clientY-t;return e.scrollTop===0&&o>0||zr(e)&&o<0?Wt(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=n}function eo(e){e.ontouchstart=null,e.ontouchmove=null}const Ht=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",Wt,{passive:!1}),to=Ht(!0),no=Ht();function ro(e){if(!e)throw Error("Could not run setup, an element must be provided");q.some(t=>t===e)||(q.length||(Yr(),to()),Zr(e),q.push(e))}function Ge(){q.forEach(eo),no(),Qr(),q=[]}const oo=JSON.parse('{"modal.aria.back":"Tilbage","modal.aria.close":"Luk"}'),ao=JSON.parse('{"modal.aria.back":"Back","modal.aria.close":"Close"}'),io=JSON.parse('{"modal.aria.back":"Takaisin","modal.aria.close":"Sulje"}'),uo=JSON.parse('{"modal.aria.back":"Tilbake","modal.aria.close":"Lukk"}'),so=JSON.parse('{"modal.aria.back":"Tillbaka","modal.aria.close":"Stäng"}'),L=({"aria-label":e,"aria-labelledby":t,...n})=>{const r=c.useRef(null),o=mn(n.id),a=c.useRef(null);return dn(ao,uo,io,oo,so),c.useEffect(()=>()=>Ge(),[]),c.useEffect(()=>{Ge(),r.current&&n.open&&ro(r.current)},[n.open,r]),c.useEffect(()=>{var i,s;n.initialFocusRef?(s=n.initialFocusRef.current)==null||s.focus():n.right&&((i=a.current)==null||i.focus())},[n.open,n.initialFocusRef,n.right]),n.open?u.jsx(Dt,{children:u.jsx("div",{onClick:n.onDismiss,className:Z(n.className,O.backdrop),style:{...n.style},children:u.jsxs("div",{role:"dialog","aria-modal":"true",id:o,onClick:i=>i.stopPropagation(),"aria-label":e,"aria-labelledby":t??(n.title&&!e?`${o}__title`:void 0),onKeyDown:i=>{n.onDismiss&&i.key==="Escape"&&n.onDismiss()},className:O.base,tabIndex:-1,children:[u.jsxs("div",{className:O.title,children:[typeof n.left=="boolean"&&n.left?u.jsx("button",{type:"button","aria-label":$._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:Z([O.transitionTitle,O.titleButton,O.titleButtonLeft]),onClick:n.onLeftClick?n.onLeftClick:n.onDismiss,children:u.jsx(Tn,{className:O.titleButtonIcon})}):n.left,u.jsx("div",{id:`${o}__title`,className:Z([O.transitionTitle,n.left?O.transitionTitleCenter:O.transitionTitleColSpan]),children:typeof n.title=="string"?u.jsx("h1",{className:O.titleText,children:n.title}):n.title}),typeof n.right=="boolean"&&n.right?u.jsx("button",{ref:a,type:"button","aria-label":$._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:n.onDismiss,className:Z([O.transitionTitle,O.titleButton,O.titleButtonRight]),children:u.jsx(fn,{className:O.titleButtonIcon})}):n.right]}),u.jsx("div",{ref:r,className:O.content,children:n.children}),!!n.footer&&u.jsx("div",{className:O.footer,children:n.footer})]})})}):u.jsx(u.Fragment,{})};L.__docgenInfo={description:"A Modal dialog that renders on top of the page",methods:[],displayName:"Modal",props:{title:{required:!1,tsType:{name:"union",raw:"string | JSX.Element | JSX.Element[]",elements:[{name:"string"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A string or your own custom elements"},open:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open or not"},left:{required:!1,tsType:{name:"union",raw:"boolean | JSX.Element | JSX.Element[]",elements:[{name:"boolean"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A default back button or your own custom elements"},right:{required:!1,tsType:{name:"union",raw:"boolean | JSX.Element | JSX.Element[]",elements:[{name:"boolean"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A default close button or your own custom elements"},footer:{required:!1,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"Buttons passed to the footer"},className:{required:!1,tsType:{name:"string"},description:"Additional classes added to the container"},id:{required:!1,tsType:{name:"string"},description:"An id for the container and ARIA attributes. A random id is generated if none is provided."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional styles to the contianer"},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"The modal contents"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler that is called when the user presses *esc* or clicks outside the modal"},onLeftClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler that is called when the user clicks the left button"},"aria-label":{required:!1,tsType:{name:"string"},description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined."},initialFocusRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<any>",elements:[{name:"any"}]},description:"A reference to the element that should be focused. By default it'll be the first interactive element."}}};const Eo={title:"Overlays/Modal"},J=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(k,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(L,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(k,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(k,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},W=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(k,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(L,{open:e,left:!0,right:!0,onDismiss:n,onLeftClick:()=>{console.log("left clicked"),n()},title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(k,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(k,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},H=()=>{const[e,t]=c.useState(!1),[n,r]=c.useState(!1),o=c.useRef(null);c.useEffect(()=>{var i;e||(r(!1),(i=o.current)==null||i.focus())},[e]);const a=()=>t(!e);return u.jsxs(u.Fragment,{children:[u.jsx(k,{ref:o,utility:!0,onClick:a,children:"Open modal"}),u.jsxs(L,{open:e,onDismiss:a,title:"Do you agree to these terms?",footer:u.jsx(k,{primary:!0,onClick:a,disabled:!n,children:"Accept"}),children:[u.jsx("p",{children:"1. You must give me 10 pushups right now"}),u.jsx(ln,{type:"checkbox",label:"I agree",onChange:r})]})]})},U=()=>{const[e,t]=c.useState(!1),n=()=>t(!e),r=c.useRef(),o=c.useRef(null);return c.useEffect(()=>{var a;e||(a=o.current)==null||a.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(k,{ref:o,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(L,{open:e,onDismiss:n,initialFocusRef:r,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(k,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(k,{ref:r,primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Optional link to read more."})]})]})},X=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e&&((o=r.current)==null||o.focus())},[e]),u.jsxs(u.Fragment,{children:[u.jsx(k,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsx(L,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(k,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(k,{primary:!0,onClick:n,children:"Accept"})]}),children:[...new Array(10)].map((o,a)=>u.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},a))})]})};J.__docgenInfo={description:"",methods:[],displayName:"Example"};W.__docgenInfo={description:"",methods:[],displayName:"WithBackAndCloseButton"};H.__docgenInfo={description:"",methods:[],displayName:"MustConfirmToProceed"};U.__docgenInfo={description:"",methods:[],displayName:"InitialFocus"};X.__docgenInfo={description:"",methods:[],displayName:"Overflowing"};var Ve,Ye,Ke;J.parameters={...J.parameters,docs:{...(Ve=J.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
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
}`,...(Ke=(Ye=J.parameters)==null?void 0:Ye.docs)==null?void 0:Ke.source}}};var Qe,ze,Ze;W.parameters={...W.parameters,docs:{...(Qe=W.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
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
}`,...(Ze=(ze=W.parameters)==null?void 0:ze.docs)==null?void 0:Ze.source}}};var et,tt,nt;H.parameters={...H.parameters,docs:{...(et=H.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
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
}`,...(nt=(tt=H.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var rt,ot,at;U.parameters={...U.parameters,docs:{...(rt=U.parameters)==null?void 0:rt.docs,source:{originalSource:`() => {
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
}`,...(at=(ot=U.parameters)==null?void 0:ot.docs)==null?void 0:at.source}}};var it,ut,st;X.parameters={...X.parameters,docs:{...(it=X.parameters)==null?void 0:it.docs,source:{originalSource:`() => {
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
}`,...(st=(ut=X.parameters)==null?void 0:ut.docs)==null?void 0:st.source}}};const ko=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{J as Example,U as InitialFocus,H as MustConfirmToProceed,X as Overflowing,W as WithBackAndCloseButton,ko as __namedExportsOrder,Eo as default};
