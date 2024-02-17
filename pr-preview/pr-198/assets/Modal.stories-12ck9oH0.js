import{j as u,B as y}from"./index-GDd0F7ki.js";import{r as c,R as Ze}from"./index-4g5l5LRQ.js";import{r as j}from"./index.m-0-FAh1ao.js";import{u as en}from"./useId-LEwi1_oF.js";import{_ as ie,a as tn}from"./inheritsLoose-lRRTvJTO.js";import{i as P}from"./index-XwI9xEnt.js";import{a as nn}from"./i18n-RORRLZQ_.js";import{c as rn}from"./close-16-AfVZA5w4.js";import{B as k}from"./component-3zTGx7yI.js";import{T as on}from"./component-zn_lWx9z.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./item-RIDZg1no.js";function an(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var ue="data-focus-lock",et="data-focus-lock-disabled",un="data-no-focus-lock",cn="data-autofocus-inside",ln="data-no-autofocus";function ee(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function sn(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Be=new WeakMap;function fn(e,t){var n=sn(t||null,function(r){return e.forEach(function(o){return ee(o,r)})});return c.useLayoutEffect(function(){var r=Be.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(l){a.has(l)||ee(l,null)}),a.forEach(function(l){o.has(l)||ee(l,i)})}Be.set(n,e)},[e]),n}var te={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},ce=function(){return ce=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},ce.apply(this,arguments)};function tt(e){return e}function nt(e,t){t===void 0&&(t=tt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(l){return l!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(l){return a(l)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var l=n;n=[],l.forEach(a),i=n}var h=function(){var d=i;i=[],d.forEach(a)},s=function(){return Promise.resolve().then(h)};s(),n={push:function(d){i.push(d),s()},filter:function(d){return i=i.filter(d),n}}}};return o}function de(e,t){return t===void 0&&(t=tt),nt(e,t)}function dn(e){e===void 0&&(e={});var t=nt(null);return t.options=ce({async:!0,ssr:!1},e),t}var rt=de({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),ot=de(),vn=de(),mn=dn({async:!0,ssr:typeof document<"u"}),pn=c.createContext(void 0),hn=[],at=c.forwardRef(function(t,n){var r,o=c.useState(),a=o[0],i=o[1],l=c.useRef(),h=c.useRef(!1),s=c.useRef(null),d=c.useState({}),f=d[1],p=t.children,g=t.disabled,v=g===void 0?!1:g,m=t.noFocusGuards,b=m===void 0?!1:m,O=t.persistentFocus,E=O===void 0?!1:O,M=t.crossFrame,It=M===void 0?!0:M,Me=t.autoFocus,At=Me===void 0?!0:Me;t.allowTextSelection;var _t=t.group,Nt=t.className,jt=t.whiteList,Dt=t.hasPositiveIndices,Ee=t.shards,z=Ee===void 0?hn:Ee,we=t.as,Lt=we===void 0?"div":we,Fe=t.lockProps,Pt=Fe===void 0?{}:Fe,Ht=t.sideCar,Re=t.returnFocus,q=Re===void 0?!1:Re,Wt=t.focusOptions,X=t.onActivation,Z=t.onDeactivation,Ut=c.useState({}),qt=Ut[0],Vt=c.useCallback(function(C){var T=C.captureFocusRestore;if(!s.current){var B,w=(B=document)==null?void 0:B.activeElement;s.current=w,w!==document.body&&(s.current=T(w))}l.current&&X&&X(l.current),h.current=!0,f()},[X]),$t=c.useCallback(function(){h.current=!1,Z&&Z(l.current),f()},[Z]),Gt=c.useCallback(function(C){var T=s.current;if(T){var B=(typeof T=="function"?T():T)||document.body,w=typeof q=="function"?q(B):q;if(w){var Te=typeof w=="object"?w:void 0;s.current=null,C?Promise.resolve().then(function(){return B.focus(Te)}):B.focus(Te)}}},[q]),Jt=c.useCallback(function(C){h.current&&rt.useMedium(C)},[]),Kt=ot.useMedium,Yt=c.useCallback(function(C){l.current!==C&&(l.current=C,i(C))},[]),Qt=ie((r={},r[et]=v&&"disabled",r[ue]=_t,r),Pt),Se=b!==!0,zt=Se&&b!=="tail",Xt=fn([n,Yt]),Zt=c.useMemo(function(){return{observed:l,shards:z,enabled:!v,active:h.current}},[v,h.current,z,a]);return c.createElement(c.Fragment,null,Se&&[c.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:v?-1:0,style:te}),Dt?c.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:v?-1:1,style:te}):null],!v&&c.createElement(Ht,{id:qt,sideCar:mn,observed:a,disabled:v,persistentFocus:E,crossFrame:It,autoFocus:At,whiteList:jt,shards:z,onActivation:Vt,onDeactivation:$t,returnFocus:Gt,focusOptions:Wt}),c.createElement(Lt,ie({ref:Xt},Qt,{className:Nt,onBlur:Kt,onFocus:Jt}),c.createElement(pn.Provider,{value:Zt},p)),zt&&c.createElement("div",{"data-focus-guard":!0,tabIndex:v?-1:0,style:te}))});at.propTypes={};const it=at;function H(e){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(e)}function gn(e,t){if(H(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(H(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function bn(e){var t=gn(e,"string");return H(t)=="symbol"?t:String(t)}function yn(e,t,n){return t=bn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kn(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function l(){i=e(a.map(function(s){return s.props})),t(i)}var h=function(s){tn(d,s);function d(){return s.apply(this,arguments)||this}d.peek=function(){return i};var f=d.prototype;return f.componentDidMount=function(){a.push(this),l()},f.componentDidUpdate=function(){l()},f.componentWillUnmount=function(){var g=a.indexOf(this);a.splice(g,1),l()},f.render=function(){return Ze.createElement(o,this.props)},d}(c.PureComponent);return yn(h,"displayName","SideEffect("+n(o)+")"),h}}var x=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},R=function(e){return Array.isArray(e)?e:[e]},ut=function(e){return Array.isArray(e)?e[0]:e},On=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},ct=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},lt=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},xn=function(e){return e.hasAttribute("inert")},Cn=function(e,t){return!e||lt(e)||!On(e)&&!xn(e)&&t(ct(e))},st=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Cn(t,st.bind(void 0,e));return e.set(t,r),r},Mn=function(e,t){return e&&!lt(e)?Fn(e)?t(ct(e)):!1:!0},ft=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Mn(t,ft.bind(void 0,e));return e.set(t,r),r},dt=function(e){return e.dataset},En=function(e){return e.tagName==="BUTTON"},vt=function(e){return e.tagName==="INPUT"},mt=function(e){return vt(e)&&e.type==="radio"},wn=function(e){return!((vt(e)||En(e))&&(e.type==="hidden"||e.disabled))},Fn=function(e){var t=e.getAttribute(ln);return![!0,"true",""].includes(t)},ve=function(e){var t;return!!(e&&(!((t=dt(e))===null||t===void 0)&&t.focusGuard))},le=function(e){return!ve(e)},Rn=function(e){return!!e},Sn=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},Tn=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},me=function(e,t,n){return x(e).map(function(r,o){var a=Tn(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(Sn)},Bn=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],pe=Bn.join(","),In="".concat(pe,", [data-focus-guard]"),pt=function(e,t){return x((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?In:pe)?[r]:[],pt(r))},[])},An=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?N([e.contentDocument.body],t):[e]},N=function(e,t){return e.reduce(function(n,r){var o,a=pt(r,t),i=(o=[]).concat.apply(o,a.map(function(l){return An(l,t)}));return n.concat(i,r.parentNode?x(r.parentNode.querySelectorAll(pe)).filter(function(l){return l===r}):[])},[])},_n=function(e){var t=e.querySelectorAll("[".concat(cn,"]"));return x(t).map(function(n){return N([n])}).reduce(function(n,r){return n.concat(r)},[])},he=function(e,t){return x(e).filter(function(n){return st(t,n)}).filter(function(n){return wn(n)})},Ie=function(e,t){return t===void 0&&(t=new Map),x(e).filter(function(n){return ft(t,n)})},ge=function(e,t,n){return me(he(N(e,n),t),!0,n)},Y=function(e,t){return me(he(N(e),t),!1)},Nn=function(e,t){return he(_n(e),t)},F=function(e,t){return e.shadowRoot?F(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:x(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?F(o,t):!1}return F(n,t)})},jn=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,l){return!t.has(l)})},ht=function(e){return e.parentNode?ht(e.parentNode):e},be=function(e){var t=R(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(ue);return n.push.apply(n,o?jn(x(ht(r).querySelectorAll("[".concat(ue,'="').concat(o,'"]:not([').concat(et,'="disabled"])')))):[r]),n},[])},Dn=function(e){try{return e()}catch{return}},W=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?W(t.shadowRoot):t instanceof HTMLIFrameElement&&Dn(function(){return t.contentWindow.document})?W(t.contentWindow.document):t}},Ln=function(e,t){return e===t},Pn=function(e,t){return!!x(e.querySelectorAll("iframe")).some(function(n){return Ln(n,t)})},gt=function(e,t){return t===void 0&&(t=W(ut(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:be(e).some(function(n){return F(n,t)||Pn(n,t)})},Hn=function(e){e===void 0&&(e=document);var t=W(e);return t?x(e.querySelectorAll("[".concat(un,"]"))).some(function(n){return F(n,t)}):!1},Wn=function(e,t){return t.filter(mt).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},ye=function(e,t){return mt(e)&&e.name?Wn(e,t):e},Un=function(e){var t=new Set;return e.forEach(function(n){return t.add(ye(n,e))}),e.filter(function(n){return t.has(n)})},Ae=function(e){return e[0]&&e.length>1?ye(e[0],e):e[0]},_e=function(e,t){return e.indexOf(ye(t,e))},se="NEW_FOCUS",qn=function(e,t,n,r,o){var a=e.length,i=e[0],l=e[a-1],h=ve(r);if(!(r&&e.indexOf(r)>=0)){var s=r!==void 0?n.indexOf(r):-1,d=o?n.indexOf(o):s,f=o?e.indexOf(o):-1;if(s===-1)return f!==-1?f:se;if(f===-1)return se;var p=s-d,g=n.indexOf(i),v=n.indexOf(l),m=Un(n),b=r!==void 0?m.indexOf(r):-1,O=b-(o?m.indexOf(o):s);if(!p&&f>=0||t.length===0)return f;var E=_e(e,t[0]),M=_e(e,t[t.length-1]);if(s<=g&&h&&Math.abs(p)>1)return M;if(s>=v&&h&&Math.abs(p)>1)return E;if(p&&Math.abs(O)>1)return f;if(s<=g)return M;if(s>v)return E;if(p)return Math.abs(p)>1?f:(a+f+p)%a}},Vn=function(e){return function(t){var n,r=(n=dt(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},$n=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=Ie(r.filter(Vn(n)));return o&&o.length?Ae(o):Ae(Ie(t))},fe=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&fe(e.parentNode.host||e.parentNode,t),t},ne=function(e,t){for(var n=fe(e),r=fe(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},bt=function(e,t,n){var r=R(e),o=R(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(l){i=ne(i||l,l)||i,n.filter(Boolean).forEach(function(h){var s=ne(a,h);s&&(!i||F(s,i)?i=s:i=ne(s,i))})}),i},Gn=function(e,t){return e.reduce(function(n,r){return n.concat(Nn(r,t))},[])},Jn=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(Rn)},Kn=function(e,t){var n=W(R(e).length>0?document:ut(e).ownerDocument),r=be(e).filter(le),o=bt(n||e,e,r),a=new Map,i=Y(r,a),l=i.filter(function(v){var m=v.node;return le(m)});if(l[0]){var h=Y([o],a).map(function(v){var m=v.node;return m}),s=Jn(h,l),d=s.map(function(v){var m=v.node;return m}),f=s.filter(function(v){var m=v.tabIndex;return m>=0}).map(function(v){var m=v.node;return m}),p=qn(d,f,h,n,t);if(p===se){var g=$n(i,f,Gn(r,a));if(g)return{node:g};console.warn("focus-lock: cannot find any node to move focus into");return}return p===void 0?p:s[p]}},Yn=function(e){var t=be(e).filter(le),n=bt(e,e,t),r=me(N([n],!0),!0,!0),o=N(t,!1);return r.map(function(a){var i=a.node,l=a.index;return{node:i,index:l,lockItem:o.indexOf(i)>=0,guard:ve(i)}})},ke=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},re=0,oe=!1,yt=function(e,t,n){n===void 0&&(n={});var r=Kn(e,t);if(!oe&&r){if(re>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),oe=!0,setTimeout(function(){oe=!1},1);return}re++,ke(r.node,n.focusOptions),re--}};function D(e){if(!e)return null;var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var Qn=function(e){for(var t=[],n=e;n&&n!==document.body;)t.push({current:D(n),parent:D(n.parentElement),left:D(n.previousElementSibling),right:D(n.nextElementSibling)}),n=n.parentElement;return{element:D(e),stack:t,ownerDocument:e.ownerDocument}},zn=function(e){for(var t,n,r,o,a,i=e.stack,l=e.ownerDocument,h=new Map,s=0,d=i;s<d.length;s++){var f=d[s],p=(t=f.parent)===null||t===void 0?void 0:t.call(f);if(p&&l.contains(p)){for(var g=(n=f.left)===null||n===void 0?void 0:n.call(f),v=(r=f.right)===null||r===void 0?void 0:r.call(f),m=ge([p],h),b=(a=(o=g==null?void 0:g.nextElementSibling)!==null&&o!==void 0?o:v)!==null&&a!==void 0?a:g;b;){for(var O=0,E=m;O<E.length;O++){var M=E[O];if(b!=null&&b.contains(M.node))return M.node}b=b.nextElementSibling}if(m.length)return m[0].node}}},Xn=function(e){var t=Qn(e);return function(){return zn(t)}},Zn=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=R(t);if(r.every(function(i){return!F(i,e)}))return console.error("Active element is not contained in the scope"),{};var o=n?ge(r,new Map):Y(r,new Map),a=o.findIndex(function(i){var l=i.node;return l===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},er=function(e,t){var n=t?ge(R(e),new Map):Y(R(e),new Map);return{first:n[0],last:n[n.length-1]}},tr=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},kt=function(e,t,n){t===void 0&&(t={});var r=tr(t),o=Zn(e,r.scope,r.onlyTabbable);if(o){var a=n(o,r.cycle);a&&ke(a.node,r.focusOptions)}},nr=function(e,t){t===void 0&&(t={}),kt(e,t,function(n,r){var o=n.next,a=n.first;return o||r&&a})},rr=function(e,t){t===void 0&&(t={}),kt(e,t,function(n,r){var o=n.prev,a=n.last;return o||r&&a})},Ot=function(e,t,n){var r,o=er(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),a=o[n];a&&ke(a.node,t.focusOptions)},or=function(e,t){t===void 0&&(t={}),Ot(e,t,"first")},ar=function(e,t){t===void 0&&(t={}),Ot(e,t,"last")};function Oe(e){setTimeout(e,1)}var ir=function(t){return t&&"current"in t?t.current:t},ur=function(){return document&&document.activeElement===document.body},cr=function(){return ur()||Hn()},A=null,I=null,_=null,U=!1,lr=function(){return!0},sr=function(t){return(A.whiteList||lr)(t)},fr=function(t,n){_={observerNode:t,portaledElement:n}},dr=function(t){return _&&_.portaledElement===t};function Ne(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var vr=function(t){return t?!!U:U==="meanwhile"},mr=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},pr=function(t,n){return n.some(function(r){return mr(t,r,r)})},Q=function(){var t=!1;if(A){var n=A,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,l=n.crossFrame,h=n.focusOptions,s=r||_&&_.portaledElement,d=document&&document.activeElement;if(s){var f=[s].concat(i.map(ir).filter(Boolean));if((!d||sr(d))&&(o||vr(l)||!cr()||!I&&a)&&(s&&!(gt(f)||d&&pr(d,f)||dr(d))&&(document&&!I&&d&&!a?(d.blur&&d.blur(),document.body.focus()):(t=yt(f,I,{focusOptions:h}),_={})),U=!1,I=document&&document.activeElement),document&&d!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var p=document&&document.activeElement,g=Yn(f),v=g.map(function(m){var b=m.node;return b}).indexOf(p);v>-1&&(g.filter(function(m){var b=m.guard,O=m.node;return b&&O.dataset.focusAutoGuard}).forEach(function(m){var b=m.node;return b.removeAttribute("tabIndex")}),Ne(v,g.length,1,g),Ne(v,-1,-1,g))}}}return t},xt=function(t){Q()&&t&&(t.stopPropagation(),t.preventDefault())},xe=function(){return Oe(Q)},hr=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||fr(r,n)},gr=function(){return null},Ct=function(){U="just",Oe(function(){U="meanwhile"})},br=function(){document.addEventListener("focusin",xt),document.addEventListener("focusout",xe),window.addEventListener("blur",Ct)},yr=function(){document.removeEventListener("focusin",xt),document.removeEventListener("focusout",xe),window.removeEventListener("blur",Ct)};function kr(e){return e.filter(function(t){var n=t.disabled;return!n})}var Mt={moveFocusInside:yt,focusInside:gt,focusNextElement:nr,focusPrevElement:rr,focusFirstElement:or,focusLastElement:ar,captureFocusRestore:Xn};function Or(e){var t=e.slice(-1)[0];t&&!A&&br();var n=A,r=n&&t&&t.id===n.id;A=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(I=null,(!r||n.observed!==t.observed)&&t.onActivation(Mt),Q(),Oe(Q)):(yr(),I=null)}rt.assignSyncMedium(hr);ot.assignMedium(xe);vn.assignMedium(function(e){return e(Mt)});const xr=kn(kr,Or)(gr);var Et=c.forwardRef(function(t,n){return c.createElement(it,ie({sideCar:xr,ref:n},t))}),wt=it.propTypes||{};wt.sideCar;an(wt,["sideCar"]);Et.propTypes={};const Cr=Et;let L=[];const Ce={documentElement:{},body:{}},Mr=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),Ft=e=>{var t;e.touches.length>1||((t=e.preventDefault)==null||t.call(e))},Er=e=>([t,n])=>{Ce[e][t]=document[e].style[t],document[e].style[t]=n},wr=()=>Object.entries(Mr).forEach(([e,t])=>{Object.entries(t).forEach(Er(e))}),Fr=e=>([t,n])=>{document[e].style[t]=Ce[e][t]},Rr=()=>Object.entries(Ce).forEach(([e,t])=>{Object.entries(t).forEach(Fr(e))}),Sr=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function Tr(e){let t=-1;const n=r=>{if(r.targetTouches.length!==1)return;const o=r.targetTouches[0].clientY-t;return e.scrollTop===0&&o>0||Sr(e)&&o<0?Ft(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=n}function Br(e){e.ontouchstart=null,e.ontouchmove=null}const Rt=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",Ft,{passive:!1}),Ir=Rt(!0),Ar=Rt();function _r(e){if(!e)throw Error("Could not run setup, an element must be provided");L.some(t=>t===e)||(L.length||(wr(),Ir()),Tr(e),L.push(e))}function Nr(){L.forEach(Br),Ar(),Rr(),L=[]}const jr=JSON.parse('{"modal.aria.back":"Tilbake","modal.aria.close":"Lukk"}'),Dr=JSON.parse('{"modal.aria.back":"Back","modal.aria.close":"Close"}'),Lr=JSON.parse('{"modal.aria.back":"Takaisin","modal.aria.close":"Sulje"}');var Pr={},Hr=Object.defineProperty,je=Object.getOwnPropertySymbols,Wr=Object.prototype.hasOwnProperty,Ur=Object.prototype.propertyIsEnumerable,De=(e,t,n)=>t in e?Hr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qr=(e,t)=>{for(var n in t||(t={}))Wr.call(t,n)&&De(e,n,t[n]);if(je)for(var n of je(t))Ur.call(t,n)&&De(e,n,t[n]);return e},Vr=JSON.parse('{"icon.title.arrow-left":"Pil som peker mot venstre"}'),$r=JSON.parse('{"icon.title.arrow-left":"Leftward-pointing arrow"}'),Gr=JSON.parse('{"icon.title.arrow-left":"Vasemmalle osoittava nuoli"}'),St=["en","nb","fi","da","sv"],Tt="en",Jr=()=>{let e;switch(Pr.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Bt=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":Tt},ae=e=>St.find(t=>e===t||e.toLowerCase().includes(t))||Bt();function Kr(){var e;if(typeof window>"u"){const t=Jr();return ae(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=Bt();return St.includes(t)?ae(t??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),ae(n))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Tt}}var Yr=(e,t,n,r)=>e==="nb"?n:e==="fi"?r:t,Qr=(e,t,n)=>{const r=Kr(),o=Yr(r,e,t,n);P.load(r,o),P.activate(r)};Qr($r,Vr,Gr);var zr=P.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"}),Xr=e=>Ze.createElement("svg",qr({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${zr}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path>`}},e)),Zr=Xr;const S=({"aria-label":e,"aria-labelledby":t,...n})=>{const r=c.useRef(null),o=en(n.id),a=c.useRef(null);return nn(Dr,jr,Lr),c.useEffect(()=>{Nr(),r.current&&n.open&&_r(r.current)},[n.open,r]),c.useEffect(()=>{var i,l;n.initialFocusRef?(l=n.initialFocusRef.current)==null||l.focus():n.right&&((i=a.current)==null||i.focus())},[n.open,n.initialFocusRef,n.right]),n.open?u.jsx(Cr,{children:u.jsx("div",{onClick:n.onDismiss,className:j(n.className,y.backdrop),style:{...n.style},children:u.jsxs("div",{role:"dialog","aria-modal":"true",id:o,onClick:i=>{i.stopPropagation()},"aria-label":e,"aria-labelledby":t??(n.title&&!e?`${o}__title`:void 0),onKeyDown:i=>{n.onDismiss&&i.key==="Escape"&&n.onDismiss()},className:y.modal,tabIndex:-1,children:[u.jsxs("div",{className:y.title,children:[typeof n.left=="boolean"&&n.left?u.jsx("button",{type:"button","aria-label":P._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:j(y.transitionTitle,y.titleButton,y.titleButtonLeft),onClick:n.onLeftClick?n.onLeftClick:n.onDismiss,children:u.jsx(Zr,{className:j(y.titleButtonIcon)})}):n.left,u.jsx("div",{id:`${o}__title`,className:j(y.transitionTitle,n.left?y.transitionTitleCenter:y.transitionTitleColSpan),children:typeof n.title=="string"?u.jsx("h1",{className:y.titleText,children:n.title}):n.title}),typeof n.right=="boolean"&&n.right?u.jsx("button",{ref:a,type:"button","aria-label":P._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:n.onDismiss,className:j(y.transitionTitle,y.titleButton,y.titleButtonRight),children:u.jsx(rn,{className:y.titleButtonIcon})}):n.right]}),u.jsx("div",{ref:r,className:y.content,children:n.children}),!!n.footer&&u.jsx("div",{className:y.footer,children:n.footer})]})})}):u.jsx(u.Fragment,{})};try{S.displayName="Modal",S.__docgenInfo={description:"A Modal dialog that renders on top the page",displayName:"Modal",props:{title:{defaultValue:null,description:"A string or your own custom elements",name:"title",required:!1,type:{name:"string | Element | Element[]"}},open:{defaultValue:null,description:"Whether the modal is open or not",name:"open",required:!0,type:{name:"boolean"}},left:{defaultValue:null,description:"A default back button or your own custom elements",name:"left",required:!1,type:{name:"boolean | Element | Element[]"}},right:{defaultValue:null,description:"A default close button or your own custom elements",name:"right",required:!1,type:{name:"boolean | Element | Element[]"}},footer:{defaultValue:null,description:"Buttons passed to the footer",name:"footer",required:!1,type:{name:"Element | Element[]"}},className:{defaultValue:null,description:"Additional classes added to the container",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"An id for the container and ARIA attributes. A random id is generated if none is provided.",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional styles to the contianer",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The modal contents",name:"children",required:!0,type:{name:"Element | Element[]"}},onDismiss:{defaultValue:null,description:"Handler that is called when the user presses *esc* or clicks outside the modal",name:"onDismiss",required:!1,type:{name:"(() => void)"}},onLeftClick:{defaultValue:null,description:"Handler that is called when the user clicks the left button",name:"onLeftClick",required:!1,type:{name:"(() => void)"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined.",name:"aria-labelledby",required:!1,type:{name:"string"}},initialFocusRef:{defaultValue:null,description:"A reference to the element that should be focused. By default it'll be the first interactive element.",name:"initialFocusRef",required:!1,type:{name:"RefObject<any>"}}}}}catch{}const vo={title:"Overlays/Modal"},V=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(k,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(S,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(k,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(k,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},$=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(k,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(S,{open:e,left:!0,right:!0,onDismiss:n,onLeftClick:()=>{console.log("left clicked"),n()},title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(k,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(k,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},G=()=>{const[e,t]=c.useState(!1),[n,r]=c.useState(!1),o=c.useRef(null);c.useEffect(()=>{var i;e||(r(!1),(i=o.current)==null||i.focus())},[e]);const a=()=>t(!e);return u.jsxs(u.Fragment,{children:[u.jsx(k,{ref:o,utility:!0,onClick:a,children:"Open modal"}),u.jsxs(S,{open:e,onDismiss:a,title:"Do you agree to these terms?",footer:u.jsx(k,{primary:!0,onClick:a,disabled:!n,children:"Accept"}),children:[u.jsx("p",{children:"1. You must give me 10 pushups right now"}),u.jsx(on,{type:"checkbox",label:"I agree",onChange:r})]})]})},J=()=>{const[e,t]=c.useState(!1),n=()=>t(!e),r=c.useRef(),o=c.useRef(null);return c.useEffect(()=>{var a;e||(a=o.current)==null||a.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(k,{ref:o,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(S,{open:e,onDismiss:n,initialFocusRef:r,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(k,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(k,{ref:r,primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Optional link to read more."})]})]})},K=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e&&((o=r.current)==null||o.focus())},[e]),u.jsxs(u.Fragment,{children:[u.jsx(k,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsx(S,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(k,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(k,{primary:!0,onClick:n,children:"Accept"})]}),children:[...new Array(10)].map((o,a)=>u.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},a))})]})};var Le,Pe,He;V.parameters={...V.parameters,docs:{...(Le=V.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
        <p>
          Content information goes here. Optional illustration on top. Can
          contain links.
        </p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(He=(Pe=V.parameters)==null?void 0:Pe.docs)==null?void 0:He.source}}};var We,Ue,qe;$.parameters={...$.parameters,docs:{...(We=$.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
        <p>
          Content information goes here. Optional illustration on top. Can
          contain links.
        </p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(qe=(Ue=$.parameters)==null?void 0:Ue.docs)==null?void 0:qe.source}}};var Ve,$e,Ge;G.parameters={...G.parameters,docs:{...(Ve=G.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
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
}`,...(Ge=($e=G.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source}}};var Je,Ke,Ye;J.parameters={...J.parameters,docs:{...(Je=J.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
        <p>
          Content information goes here. Optional illustration on top. Can
          contain links.
        </p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(Ye=(Ke=J.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};var Qe,ze,Xe;K.parameters={...K.parameters,docs:{...(Qe=K.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>)}
      </Modal>
    </>;
}`,...(Xe=(ze=K.parameters)==null?void 0:ze.docs)==null?void 0:Xe.source}}};const mo=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{V as Example,J as InitialFocus,G as MustConfirmToProceed,K as Overflowing,$ as WithBackAndCloseButton,mo as __namedExportsOrder,vo as default};
