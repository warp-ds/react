import{j as u}from"./jsx-runtime-CkxqCPlQ.js";import{R as st,r as s}from"./index-DJO9vBfz.js";import{B as O}from"./component-D3Kp87Eg.js";import{T as ln}from"./component-dbfFhB1p.js";import{r as z}from"./index.m-CtIADANO.js";import{i as q}from"./index-XDhxfy0k.js";import{B as E}from"./index-CDQzWLZ0.js";import{c as fn}from"./close-16-C57eqN4L.js";import{a as dn}from"./i18n-ClE17yBR.js";import{u as mn}from"./help-text-ZUZ6yO5S.js";import"./item-2WgqVm50.js";var vn={},pn=Object.defineProperty,je=Object.getOwnPropertySymbols,hn=Object.prototype.hasOwnProperty,gn=Object.prototype.propertyIsEnumerable,Pe=(e,t,n)=>t in e?pn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bn=(e,t)=>{for(var n in t||(t={}))hn.call(t,n)&&Pe(e,n,t[n]);if(je)for(var n of je(t))gn.call(t,n)&&Pe(e,n,t[n]);return e},yn=JSON.parse('{"icon.title.arrow-left":"Pil som peker mot venstre"}'),En=JSON.parse('{"icon.title.arrow-left":"Leftward-pointing arrow"}'),On=JSON.parse('{"icon.title.arrow-left":"Vasemmalle osoittava nuoli"}'),kn=JSON.parse('{"icon.title.arrow-left":"Pil til venstre"}'),ct=["en","nb","fi","da","sv"],lt="en",xn=()=>{var e;let t;switch((e=process==null?void 0:vn)==null?void 0:e.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},ft=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t!=null&&t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":lt},oe=e=>ct.find(t=>e===t||e.toLowerCase().includes(t))||ft();function wn(){var e;if(typeof window>"u"){const t=xn();return oe(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=ft();return ct.includes(t)?oe(t??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),oe(n))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),lt}}var Cn=(e,t,n,r,o)=>e==="nb"?n:e==="fi"?r:e==="da"?o:t,Sn=(e,t,n,r)=>{const o=wn(),a=Cn(o,e,t,n,r);q.load(o,a),q.activate(o)};Sn(En,yn,On,kn);var Mn=q.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"}),Fn=e=>st.createElement("svg",bn({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Mn}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path>`}},e)),Rn=Fn;function Tn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(null,arguments)}var le="data-focus-lock",dt="data-focus-lock-disabled",In="data-no-focus-lock",Bn="data-autofocus-inside",Nn="data-no-autofocus";function ae(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function An(e,t){var n=s.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var _n=typeof window<"u"?s.useLayoutEffect:s.useEffect,Le=new WeakMap;function jn(e,t){var n=An(null,function(r){return e.forEach(function(o){return ae(o,r)})});return _n(function(){var r=Le.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(c){a.has(c)||ae(c,null)}),a.forEach(function(c){o.has(c)||ae(c,i)})}Le.set(n,e)},[e]),n}var ie={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},fe=function(){return fe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},fe.apply(this,arguments)};function mt(e){return e}function vt(e,t){t===void 0&&(t=mt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(c){return c!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(c){return a(c)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var c=n;n=[],c.forEach(a),i=n}var p=function(){var v=i;i=[],v.forEach(a)},l=function(){return Promise.resolve().then(p)};l(),n={push:function(v){i.push(v),l()},filter:function(v){return i=i.filter(v),n}}}};return o}function he(e,t){return t===void 0&&(t=mt),vt(e,t)}function Pn(e){e===void 0&&(e={});var t=vt(null);return t.options=fe({async:!0,ssr:!1},e),t}var pt=he({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),ht=he(),Ln=he(),Dn=Pn({async:!0,ssr:typeof document<"u"}),Wn=s.createContext(void 0),Jn=[],ge=s.forwardRef(function(t,n){var r,o=s.useState(),a=o[0],i=o[1],c=s.useRef(),p=s.useRef(!1),l=s.useRef(null),v=s.useState({}),d=v[1],f=t.children,h=t.disabled,m=h===void 0?!1:h,g=t.noFocusGuards,k=g===void 0?!1:g,w=t.persistentFocus,b=w===void 0?!1:w,y=t.crossFrame,S=y===void 0?!0:y,F=t.autoFocus,ee=F===void 0?!0:F;t.allowTextSelection;var Ut=t.group,Xt=t.className,qt=t.whiteList,$t=t.hasPositiveIndices,Te=t.shards,te=Te===void 0?Jn:Te,Ie=t.as,Gt=Ie===void 0?"div":Ie,Be=t.lockProps,Vt=Be===void 0?{}:Be,Yt=t.sideCar,Ne=t.returnFocus,Q=Ne===void 0?!1:Ne,Kt=t.focusOptions,ne=t.onActivation,re=t.onDeactivation,Qt=s.useState({}),zt=Qt[0],Zt=s.useCallback(function(M){var B=M.captureFocusRestore;if(!l.current){var N,R=(N=document)==null?void 0:N.activeElement;l.current=R,R!==document.body&&(l.current=B(R))}c.current&&ne&&ne(c.current),p.current=!0,d()},[ne]),en=s.useCallback(function(){p.current=!1,re&&re(c.current),d()},[re]),tn=s.useCallback(function(M){var B=l.current;if(B){var N=(typeof B=="function"?B():B)||document.body,R=typeof Q=="function"?Q(N):Q;if(R){var _e=typeof R=="object"?R:void 0;l.current=null,M?Promise.resolve().then(function(){return N.focus(_e)}):N.focus(_e)}}},[Q]),nn=s.useCallback(function(M){p.current&&pt.useMedium(M)},[]),rn=ht.useMedium,on=s.useCallback(function(M){c.current!==M&&(c.current=M,i(M))},[]),an=$((r={},r[dt]=m&&"disabled",r[le]=Ut,r),Vt),Ae=k!==!0,un=Ae&&k!=="tail",sn=jn([n,on]),cn=s.useMemo(function(){return{observed:c,shards:te,enabled:!m,active:p.current}},[m,p.current,te,a]);return s.createElement(s.Fragment,null,Ae&&[s.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:m?-1:0,style:ie}),$t?s.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:m?-1:1,style:ie}):null],!m&&s.createElement(Yt,{id:zt,sideCar:Dn,observed:a,disabled:m,persistentFocus:b,crossFrame:S,autoFocus:ee,whiteList:qt,shards:te,onActivation:Zt,onDeactivation:en,returnFocus:tn,focusOptions:Kt,noFocusGuards:k}),s.createElement(Gt,$({ref:sn},an,{className:Xt,onBlur:rn,onFocus:nn}),s.createElement(Wn.Provider,{value:cn},f)),un&&s.createElement("div",{"data-focus-guard":!0,tabIndex:m?-1:0,style:ie}))});ge.propTypes={};function de(e,t){return de=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},de(e,t)}function Hn(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,de(e,t)}function G(e){"@babel/helpers - typeof";return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(e)}function Un(e,t){if(G(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(G(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xn(e){var t=Un(e,"string");return G(t)=="symbol"?t:t+""}function qn(e,t,n){return(t=Xn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $n(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function c(){i=e(a.map(function(l){return l.props})),t(i)}var p=function(l){Hn(v,l);function v(){return l.apply(this,arguments)||this}v.peek=function(){return i};var d=v.prototype;return d.componentDidMount=function(){a.push(this),c()},d.componentDidUpdate=function(){c()},d.componentWillUnmount=function(){var h=a.indexOf(this);a.splice(h,1),c()},d.render=function(){return st.createElement(o,this.props)},v}(s.PureComponent);return qn(p,"displayName","SideEffect("+n(o)+")"),p}}var C=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},I=function(e){return Array.isArray(e)?e:[e]},gt=function(e){return Array.isArray(e)?e[0]:e},Gn=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},bt=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},yt=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},Vn=function(e){return e.hasAttribute("inert")},Yn=function(e,t){return!e||yt(e)||!Gn(e)&&!Vn(e)&&t(bt(e))},Et=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Yn(t,Et.bind(void 0,e));return e.set(t,r),r},Kn=function(e,t){return e&&!yt(e)?Zn(e)?t(bt(e)):!1:!0},Ot=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Kn(t,Ot.bind(void 0,e));return e.set(t,r),r},kt=function(e){return e.dataset},Qn=function(e){return e.tagName==="BUTTON"},xt=function(e){return e.tagName==="INPUT"},wt=function(e){return xt(e)&&e.type==="radio"},zn=function(e){return!((xt(e)||Qn(e))&&(e.type==="hidden"||e.disabled))},Zn=function(e){var t=e.getAttribute(Nn);return![!0,"true",""].includes(t)},be=function(e){var t;return!!(e&&(!((t=kt(e))===null||t===void 0)&&t.focusGuard))},me=function(e){return!be(e)},er=function(e){return!!e},tr=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},nr=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},ye=function(e,t,n){return C(e).map(function(r,o){var a=nr(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(tr)},rr=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Ee=rr.join(","),or="".concat(Ee,", [data-focus-guard]"),Ct=function(e,t){return C((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?or:Ee)?[r]:[],Ct(r))},[])},ar=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?j([e.contentDocument.body],t):[e]},j=function(e,t){return e.reduce(function(n,r){var o,a=Ct(r,t),i=(o=[]).concat.apply(o,a.map(function(c){return ar(c,t)}));return n.concat(i,r.parentNode?C(r.parentNode.querySelectorAll(Ee)).filter(function(c){return c===r}):[])},[])},ir=function(e){var t=e.querySelectorAll("[".concat(Bn,"]"));return C(t).map(function(n){return j([n])}).reduce(function(n,r){return n.concat(r)},[])},Oe=function(e,t){return C(e).filter(function(n){return Et(t,n)}).filter(function(n){return zn(n)})},De=function(e,t){return t===void 0&&(t=new Map),C(e).filter(function(n){return Ot(t,n)})},ke=function(e,t,n){return ye(Oe(j(e,n),t),!0,n)},V=function(e,t){return ye(Oe(j(e),t),!1)},ur=function(e,t){return Oe(ir(e),t)},T=function(e,t){return e.shadowRoot?T(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:C(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?T(o,t):!1}return T(n,t)})},sr=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,c){return!t.has(c)})},St=function(e){return e.parentNode?St(e.parentNode):e},xe=function(e){var t=I(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(le);return n.push.apply(n,o?sr(C(St(r).querySelectorAll("[".concat(le,'="').concat(o,'"]:not([').concat(dt,'="disabled"])')))):[r]),n},[])},cr=function(e){try{return e()}catch{return}},Y=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?Y(t.shadowRoot):t instanceof HTMLIFrameElement&&cr(function(){return t.contentWindow.document})?Y(t.contentWindow.document):t}},lr=function(e,t){return e===t},fr=function(e,t){return!!C(e.querySelectorAll("iframe")).some(function(n){return lr(n,t)})},Mt=function(e,t){return t===void 0&&(t=Y(gt(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:xe(e).some(function(n){return T(n,t)||fr(n,t)})},dr=function(e){e===void 0&&(e=document);var t=Y(e);return t?C(e.querySelectorAll("[".concat(In,"]"))).some(function(n){return T(n,t)}):!1},mr=function(e,t){return t.filter(wt).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},we=function(e,t){return wt(e)&&e.name?mr(e,t):e},vr=function(e){var t=new Set;return e.forEach(function(n){return t.add(we(n,e))}),e.filter(function(n){return t.has(n)})},We=function(e){return e[0]&&e.length>1?we(e[0],e):e[0]},Je=function(e,t){return e.indexOf(we(t,e))},ve="NEW_FOCUS",pr=function(e,t,n,r,o){var a=e.length,i=e[0],c=e[a-1],p=be(r);if(!(r&&e.indexOf(r)>=0)){var l=r!==void 0?n.indexOf(r):-1,v=o?n.indexOf(o):l,d=o?e.indexOf(o):-1;if(l===-1)return d!==-1?d:ve;if(d===-1)return ve;var f=l-v,h=n.indexOf(i),m=n.indexOf(c),g=vr(n),k=r!==void 0?g.indexOf(r):-1,w=k-(o?g.indexOf(o):l);if(!f&&d>=0||t.length===0)return d;var b=Je(e,t[0]),y=Je(e,t[t.length-1]);if(l<=h&&p&&Math.abs(f)>1)return y;if(l>=m&&p&&Math.abs(f)>1)return b;if(f&&Math.abs(w)>1)return d;if(l<=h)return y;if(l>m)return b;if(f)return Math.abs(f)>1?d:(a+d+f)%a}},hr=function(e){return function(t){var n,r=(n=kt(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},He=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=De(r.filter(hr(n)));return o&&o.length?We(o):We(De(t))},pe=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&pe(e.parentNode.host||e.parentNode,t),t},ue=function(e,t){for(var n=pe(e),r=pe(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},Ft=function(e,t,n){var r=I(e),o=I(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(c){i=ue(i||c,c)||i,n.filter(Boolean).forEach(function(p){var l=ue(a,p);l&&(!i||T(l,i)?i=l:i=ue(l,i))})}),i},Ue=function(e,t){return e.reduce(function(n,r){return n.concat(ur(r,t))},[])},gr=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(er)},br=function(e,t){var n=Y(I(e).length>0?document:gt(e).ownerDocument),r=xe(e).filter(me),o=Ft(n||e,e,r),a=new Map,i=V(r,a),c=i.filter(function(m){var g=m.node;return me(g)});if(c[0]){var p=V([o],a).map(function(m){var g=m.node;return g}),l=gr(p,c),v=l.map(function(m){var g=m.node;return g}),d=l.filter(function(m){var g=m.tabIndex;return g>=0}).map(function(m){var g=m.node;return g}),f=pr(v,d,p,n,t);if(f===ve){var h=He(i,d,Ue(r,a))||He(i,v,Ue(r,a));if(h)return{node:h};console.warn("focus-lock: cannot find any node to move focus into");return}return f===void 0?f:l[f]}},yr=function(e){var t=xe(e).filter(me),n=Ft(e,e,t),r=ye(j([n],!0),!0,!0),o=j(t,!1);return r.map(function(a){var i=a.node,c=a.index;return{node:i,index:c,lockItem:o.indexOf(i)>=0,guard:be(i)}})},Ce=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},se=0,ce=!1,Rt=function(e,t,n){n===void 0&&(n={});var r=br(e,t);if(!ce&&r){if(se>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),ce=!0,setTimeout(function(){ce=!1},1);return}se++,Ce(r.node,n.focusOptions),se--}};function L(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var Er=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:L(n),parent:L(n.parentElement),left:L(n.previousElementSibling),right:L(n.nextElementSibling)}),n=n.parentElement;return{element:L(e),stack:t,ownerDocument:e.ownerDocument}},Or=function(e){var t,n,r,o,a;if(e)for(var i=e.stack,c=e.ownerDocument,p=new Map,l=0,v=i;l<v.length;l++){var d=v[l],f=(t=d.parent)===null||t===void 0?void 0:t.call(d);if(f&&c.contains(f)){for(var h=(n=d.left)===null||n===void 0?void 0:n.call(d),m=d.current(),g=f.contains(m)?m:void 0,k=(r=d.right)===null||r===void 0?void 0:r.call(d),w=ke([f],p),b=(a=(o=g??(h==null?void 0:h.nextElementSibling))!==null&&o!==void 0?o:k)!==null&&a!==void 0?a:h;b;){for(var y=0,S=w;y<S.length;y++){var F=S[y];if(b!=null&&b.contains(F.node))return F.node}b=b.nextElementSibling}if(w.length)return w[0].node}}},Tt=function(e){var t=Er(e);return function(){return Or(t)}},kr=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=I(t);if(r.every(function(i){return!T(i,e)}))return console.error("Active element is not contained in the scope"),{};var o=n?ke(r,new Map):V(r,new Map),a=o.findIndex(function(i){var c=i.node;return c===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},xr=function(e,t){var n=t?ke(I(e),new Map):V(I(e),new Map);return{first:n[0],last:n[n.length-1]}},wr=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},It=function(e,t,n){t===void 0&&(t={});var r=wr(t),o=kr(e,r.scope,r.onlyTabbable);if(o){var a=n(o,r.cycle);a&&Ce(a.node,r.focusOptions)}},Cr=function(e,t){t===void 0&&(t={}),It(e,t,function(n,r){var o=n.next,a=n.first;return o||r&&a})},Sr=function(e,t){t===void 0&&(t={}),It(e,t,function(n,r){var o=n.prev,a=n.last;return o||r&&a})},Bt=function(e,t,n){var r,o=xr(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),a=o[n];a&&Ce(a.node,t.focusOptions)},Mr=function(e,t){t===void 0&&(t={}),Bt(e,t,"first")},Fr=function(e,t){t===void 0&&(t={}),Bt(e,t,"last")};function Se(e){setTimeout(e,1)}var Rr=function(t){return t&&"current"in t?t.current:t},Nt=function(){return document&&document.activeElement===document.body},Tr=function(){return Nt()||dr()},A=null,x=null,Xe=function(){return null},_=null,K=!1,Me=!1,Ir=function(){return!0},Br=function(t){return(A.whiteList||Ir)(t)},Nr=function(t,n){_={observerNode:t,portaledElement:n}},Ar=function(t){return _&&_.portaledElement===t};function qe(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var _r=function(t){return t?!!K:K==="meanwhile"},jr=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},Pr=function(t,n){return n.some(function(r){return jr(t,r,r)})},At=function(t){return V(t,new Map)},Lr=function(t){return!At([t.parentNode]).some(function(n){return n.node===t})},Z=function(){var t=!1;if(A){var n=A,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,c=n.crossFrame,p=n.focusOptions,l=n.noFocusGuards,v=r||_&&_.portaledElement;if(Nt()&&x&&(!document.body.contains(x)||Lr(x))){x=null;var d=Xe();d&&d.focus()}var f=document&&document.activeElement;if(v){var h=[v].concat(i.map(Rr).filter(Boolean)),m=function(){if(!_r(c)||!l||!x||Me)return!1;var y=At(h),S=y.findIndex(function(F){var ee=F.node;return ee===x});return S===0||S===y.length-1};if((!f||Br(f))&&(o||m()||!Tr()||!x&&a)&&(v&&!(Mt(h)||f&&Pr(f,h)||Ar(f))&&(document&&!x&&f&&!a?(f.blur&&f.blur(),document.body.focus()):(t=Rt(h,x,{focusOptions:p}),_={})),K=!1,x=document&&document.activeElement,Xe=Tt(x)),document&&f!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var g=document&&document.activeElement,k=yr(h),w=k.map(function(b){var y=b.node;return y}).indexOf(g);w>-1&&(k.filter(function(b){var y=b.guard,S=b.node;return y&&S.dataset.focusAutoGuard}).forEach(function(b){var y=b.node;return y.removeAttribute("tabIndex")}),qe(w,k.length,1,k),qe(w,-1,-1,k))}}}return t},_t=function(t){Z()&&t&&(t.stopPropagation(),t.preventDefault())},Fe=function(){return Se(Z)},Dr=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||Nr(r,n)},Wr=function(){return null},jt=function(){Me=!0},Pt=function(){Me=!1,K="just",Se(function(){K="meanwhile"})},Jr=function(){document.addEventListener("focusin",_t),document.addEventListener("focusout",Fe),window.addEventListener("focus",jt),window.addEventListener("blur",Pt)},Hr=function(){document.removeEventListener("focusin",_t),document.removeEventListener("focusout",Fe),window.removeEventListener("focus",jt),window.removeEventListener("blur",Pt)};function Ur(e){return e.filter(function(t){var n=t.disabled;return!n})}var Lt={moveFocusInside:Rt,focusInside:Mt,focusNextElement:Cr,focusPrevElement:Sr,focusFirstElement:Mr,focusLastElement:Fr,captureFocusRestore:Tt};function Xr(e){var t=e.slice(-1)[0];t&&!A&&Jr();var n=A,r=n&&t&&t.id===n.id;A=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(x=null,(!r||n.observed!==t.observed)&&t.onActivation(Lt),Z(),Se(Z)):(Hr(),x=null)}pt.assignSyncMedium(Dr);ht.assignMedium(Fe);Ln.assignMedium(function(e){return e(Lt)});const qr=$n(Ur,Xr)(Wr);var Dt=s.forwardRef(function(t,n){return s.createElement(ge,$({sideCar:qr,ref:n},t))}),Wt=ge.propTypes||{};Wt.sideCar;Tn(Wt,["sideCar"]);Dt.propTypes={};let X=[];const Re={documentElement:{},body:{}},$r=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),Jt=e=>{var t;e.touches.length>1||((t=e.preventDefault)==null||t.call(e))},Gr=e=>([t,n])=>{Re[e][t]=document[e].style[t],document[e].style[t]=n},Vr=()=>Object.entries($r).forEach(([e,t])=>{Object.entries(t).forEach(Gr(e))}),Yr=e=>([t,n])=>{document[e].style[t]=Re[e][t]},Kr=()=>Object.entries(Re).forEach(([e,t])=>{Object.entries(t).forEach(Yr(e))}),Qr=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function zr(e){let t=-1;const n=r=>{if(r.targetTouches.length!==1)return;const o=r.targetTouches[0].clientY-t;return e.scrollTop===0&&o>0||Qr(e)&&o<0?Jt(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=n}function Zr(e){e.ontouchstart=null,e.ontouchmove=null}const Ht=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",Jt,{passive:!1}),eo=Ht(!0),to=Ht();function no(e){if(!e)throw Error("Could not run setup, an element must be provided");X.some(t=>t===e)||(X.length||(Vr(),eo()),zr(e),X.push(e))}function $e(){X.forEach(Zr),to(),Kr(),X=[]}const ro=JSON.parse('{"modal.aria.back":"Tilbage","modal.aria.close":"Luk"}'),oo=JSON.parse('{"modal.aria.back":"Back","modal.aria.close":"Close"}'),ao=JSON.parse('{"modal.aria.back":"Takaisin","modal.aria.close":"Sulje"}'),io=JSON.parse('{"modal.aria.back":"Tilbake","modal.aria.close":"Lukk"}'),P=({"aria-label":e,"aria-labelledby":t,...n})=>{const r=s.useRef(null),o=mn(n.id),a=s.useRef(null);return dn(oo,io,ao,ro),s.useEffect(()=>()=>$e(),[]),s.useEffect(()=>{$e(),r.current&&n.open&&no(r.current)},[n.open,r]),s.useEffect(()=>{var i,c;n.initialFocusRef?(c=n.initialFocusRef.current)==null||c.focus():n.right&&((i=a.current)==null||i.focus())},[n.open,n.initialFocusRef,n.right]),n.open?u.jsx(Dt,{children:u.jsx("div",{onClick:n.onDismiss,className:z(n.className,E.backdrop),style:{...n.style},children:u.jsxs("div",{role:"dialog","aria-modal":"true",id:o,onClick:i=>i.stopPropagation(),"aria-label":e,"aria-labelledby":t??(n.title&&!e?`${o}__title`:void 0),onKeyDown:i=>{n.onDismiss&&i.key==="Escape"&&n.onDismiss()},className:E.base,tabIndex:-1,children:[u.jsxs("div",{className:E.title,children:[typeof n.left=="boolean"&&n.left?u.jsx("button",{type:"button","aria-label":q._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:z([E.transitionTitle,E.titleButton,E.titleButtonLeft]),onClick:n.onLeftClick?n.onLeftClick:n.onDismiss,children:u.jsx(Rn,{className:E.titleButtonIcon})}):n.left,u.jsx("div",{id:`${o}__title`,className:z([E.transitionTitle,n.left?E.transitionTitleCenter:E.transitionTitleColSpan]),children:typeof n.title=="string"?u.jsx("h1",{className:E.titleText,children:n.title}):n.title}),typeof n.right=="boolean"&&n.right?u.jsx("button",{ref:a,type:"button","aria-label":q._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:n.onDismiss,className:z([E.transitionTitle,E.titleButton,E.titleButtonRight]),children:u.jsx(fn,{className:E.titleButtonIcon})}):n.right]}),u.jsx("div",{ref:r,className:E.content,children:n.children}),!!n.footer&&u.jsx("div",{className:E.footer,children:n.footer})]})})}):u.jsx(u.Fragment,{})};P.__docgenInfo={description:"A Modal dialog that renders on top of the page",methods:[],displayName:"Modal",props:{title:{required:!1,tsType:{name:"union",raw:"string | JSX.Element | JSX.Element[]",elements:[{name:"string"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A string or your own custom elements"},open:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open or not"},left:{required:!1,tsType:{name:"union",raw:"boolean | JSX.Element | JSX.Element[]",elements:[{name:"boolean"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A default back button or your own custom elements"},right:{required:!1,tsType:{name:"union",raw:"boolean | JSX.Element | JSX.Element[]",elements:[{name:"boolean"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A default close button or your own custom elements"},footer:{required:!1,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"Buttons passed to the footer"},className:{required:!1,tsType:{name:"string"},description:"Additional classes added to the container"},id:{required:!1,tsType:{name:"string"},description:"An id for the container and ARIA attributes. A random id is generated if none is provided."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional styles to the contianer"},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"The modal contents"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler that is called when the user presses *esc* or clicks outside the modal"},onLeftClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler that is called when the user clicks the left button"},"aria-label":{required:!1,tsType:{name:"string"},description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined."},initialFocusRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<any>",elements:[{name:"any"}]},description:"A reference to the element that should be focused. By default it'll be the first interactive element."}}};const yo={title:"Overlays/Modal"},D=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(O,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(P,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(O,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(O,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},W=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(O,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(P,{open:e,left:!0,right:!0,onDismiss:n,onLeftClick:()=>{console.log("left clicked"),n()},title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(O,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(O,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},J=()=>{const[e,t]=s.useState(!1),[n,r]=s.useState(!1),o=s.useRef(null);s.useEffect(()=>{var i;e||(r(!1),(i=o.current)==null||i.focus())},[e]);const a=()=>t(!e);return u.jsxs(u.Fragment,{children:[u.jsx(O,{ref:o,utility:!0,onClick:a,children:"Open modal"}),u.jsxs(P,{open:e,onDismiss:a,title:"Do you agree to these terms?",footer:u.jsx(O,{primary:!0,onClick:a,disabled:!n,children:"Accept"}),children:[u.jsx("p",{children:"1. You must give me 10 pushups right now"}),u.jsx(ln,{type:"checkbox",label:"I agree",onChange:r})]})]})},H=()=>{const[e,t]=s.useState(!1),n=()=>t(!e),r=s.useRef(),o=s.useRef(null);return s.useEffect(()=>{var a;e||(a=o.current)==null||a.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(O,{ref:o,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(P,{open:e,onDismiss:n,initialFocusRef:r,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(O,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(O,{ref:r,primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Optional link to read more."})]})]})},U=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e&&((o=r.current)==null||o.focus())},[e]),u.jsxs(u.Fragment,{children:[u.jsx(O,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsx(P,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(O,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(O,{primary:!0,onClick:n,children:"Accept"})]}),children:[...new Array(10)].map((o,a)=>u.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},a))})]})};D.__docgenInfo={description:"",methods:[],displayName:"Example"};W.__docgenInfo={description:"",methods:[],displayName:"WithBackAndCloseButton"};J.__docgenInfo={description:"",methods:[],displayName:"MustConfirmToProceed"};H.__docgenInfo={description:"",methods:[],displayName:"InitialFocus"};U.__docgenInfo={description:"",methods:[],displayName:"Overflowing"};var Ge,Ve,Ye;D.parameters={...D.parameters,docs:{...(Ge=D.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(Ye=(Ve=D.parameters)==null?void 0:Ve.docs)==null?void 0:Ye.source}}};var Ke,Qe,ze;W.parameters={...W.parameters,docs:{...(Ke=W.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(ze=(Qe=W.parameters)==null?void 0:Qe.docs)==null?void 0:ze.source}}};var Ze,et,tt;J.parameters={...J.parameters,docs:{...(Ze=J.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
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
}`,...(tt=(et=J.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,rt,ot;H.parameters={...H.parameters,docs:{...(nt=H.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
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
}`,...(ot=(rt=H.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var at,it,ut;U.parameters={...U.parameters,docs:{...(at=U.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
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
}`,...(ut=(it=U.parameters)==null?void 0:it.docs)==null?void 0:ut.source}}};const Eo=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{D as Example,H as InitialFocus,J as MustConfirmToProceed,U as Overflowing,W as WithBackAndCloseButton,Eo as __namedExportsOrder,yo as default};
