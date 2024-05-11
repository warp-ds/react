import{j as u,C as b}from"./index-CwqZuCdu.js";import{r as c,R as at}from"./index-BwDkhjyp.js";import{r as P}from"./index.m-CtIADANO.js";import{u as rn}from"./useId-DI35503U.js";import{i as W}from"./index-B83nmiF0.js";import{a as on}from"./i18n-DX2T9MF2.js";import{c as an}from"./close-16-DOtqM6ny.js";import{B as y}from"./component-D_-Te-BC.js";import{T as un}from"./component-CF56NRVA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./item-DJtcfYSn.js";function cn(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}var le="data-focus-lock",it="data-focus-lock-disabled",ln="data-no-focus-lock",sn="data-autofocus-inside",fn="data-no-autofocus";function re(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function dn(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var vn=typeof window<"u"?c.useLayoutEffect:c.useEffect,je=new WeakMap;function mn(e,t){var n=dn(null,function(r){return e.forEach(function(o){return re(o,r)})});return vn(function(){var r=je.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(l){a.has(l)||re(l,null)}),a.forEach(function(l){o.has(l)||re(l,i)})}je.set(n,e)},[e]),n}var oe={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},se=function(){return se=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},se.apply(this,arguments)};function ut(e){return e}function ct(e,t){t===void 0&&(t=ut);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(l){return l!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(l){return a(l)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var l=n;n=[],l.forEach(a),i=n}var h=function(){var d=i;i=[],d.forEach(a)},s=function(){return Promise.resolve().then(h)};s(),n={push:function(d){i.push(d),s()},filter:function(d){return i=i.filter(d),n}}}};return o}function pe(e,t){return t===void 0&&(t=ut),ct(e,t)}function pn(e){e===void 0&&(e={});var t=ct(null);return t.options=se({async:!0,ssr:!1},e),t}var lt=pe({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),st=pe(),hn=pe(),gn=pn({async:!0,ssr:typeof document<"u"}),bn=c.createContext(void 0),yn=[],he=c.forwardRef(function(t,n){var r,o=c.useState(),a=o[0],i=o[1],l=c.useRef(),h=c.useRef(!1),s=c.useRef(null),d=c.useState({}),f=d[1],m=t.children,g=t.disabled,v=g===void 0?!1:g,p=t.noFocusGuards,O=p===void 0?!1:p,x=t.persistentFocus,k=x===void 0?!1:x,M=t.crossFrame,$=M===void 0?!0:M,N=t.autoFocus,Nt=N===void 0?!0:N;t.allowTextSelection;var Pt=t.group,Dt=t.className,Lt=t.whiteList,Wt=t.hasPositiveIndices,Se=t.shards,ee=Se===void 0?yn:Se,Fe=t.as,Ht=Fe===void 0?"div":Fe,Te=t.lockProps,Ut=Te===void 0?{}:Te,Vt=t.sideCar,Be=t.returnFocus,G=Be===void 0?!1:Be,qt=t.focusOptions,te=t.onActivation,ne=t.onDeactivation,$t=c.useState({}),Gt=$t[0],Jt=c.useCallback(function(C){var T=C.captureFocusRestore;if(!s.current){var B,w=(B=document)==null?void 0:B.activeElement;s.current=w,w!==document.body&&(s.current=T(w))}l.current&&te&&te(l.current),h.current=!0,f()},[te]),Kt=c.useCallback(function(){h.current=!1,ne&&ne(l.current),f()},[ne]),Yt=c.useCallback(function(C){var T=s.current;if(T){var B=(typeof T=="function"?T():T)||document.body,w=typeof G=="function"?G(B):G;if(w){var _e=typeof w=="object"?w:void 0;s.current=null,C?Promise.resolve().then(function(){return B.focus(_e)}):B.focus(_e)}}},[G]),Qt=c.useCallback(function(C){h.current&&lt.useMedium(C)},[]),zt=st.useMedium,Xt=c.useCallback(function(C){l.current!==C&&(l.current=C,i(C))},[]),Zt=H((r={},r[it]=v&&"disabled",r[le]=Pt,r),Ut),Ie=O!==!0,en=Ie&&O!=="tail",tn=mn([n,Xt]),nn=c.useMemo(function(){return{observed:l,shards:ee,enabled:!v,active:h.current}},[v,h.current,ee,a]);return c.createElement(c.Fragment,null,Ie&&[c.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:v?-1:0,style:oe}),Wt?c.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:v?-1:1,style:oe}):null],!v&&c.createElement(Vt,{id:Gt,sideCar:gn,observed:a,disabled:v,persistentFocus:k,crossFrame:$,autoFocus:Nt,whiteList:Lt,shards:ee,onActivation:Jt,onDeactivation:Kt,returnFocus:Yt,focusOptions:qt}),c.createElement(Ht,H({ref:tn},Zt,{className:Dt,onBlur:zt,onFocus:Qt}),c.createElement(bn.Provider,{value:nn},m)),en&&c.createElement("div",{"data-focus-guard":!0,tabIndex:v?-1:0,style:oe}))});he.propTypes={};function fe(e,t){return fe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},fe(e,t)}function On(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,fe(e,t)}function U(e){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(e)}function kn(e,t){if(U(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(U(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function xn(e){var t=kn(e,"string");return U(t)=="symbol"?t:String(t)}function En(e,t,n){return t=xn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mn(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function l(){i=e(a.map(function(s){return s.props})),t(i)}var h=function(s){On(d,s);function d(){return s.apply(this,arguments)||this}d.peek=function(){return i};var f=d.prototype;return f.componentDidMount=function(){a.push(this),l()},f.componentDidUpdate=function(){l()},f.componentWillUnmount=function(){var g=a.indexOf(this);a.splice(g,1),l()},f.render=function(){return at.createElement(o,this.props)},d}(c.PureComponent);return En(h,"displayName","SideEffect("+n(o)+")"),h}}var E=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},S=function(e){return Array.isArray(e)?e:[e]},ft=function(e){return Array.isArray(e)?e[0]:e},Cn=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},dt=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},vt=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},wn=function(e){return e.hasAttribute("inert")},Rn=function(e,t){return!e||vt(e)||!Cn(e)&&!wn(e)&&t(dt(e))},mt=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Rn(t,mt.bind(void 0,e));return e.set(t,r),r},Sn=function(e,t){return e&&!vt(e)?Bn(e)?t(dt(e)):!1:!0},pt=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Sn(t,pt.bind(void 0,e));return e.set(t,r),r},ht=function(e){return e.dataset},Fn=function(e){return e.tagName==="BUTTON"},gt=function(e){return e.tagName==="INPUT"},bt=function(e){return gt(e)&&e.type==="radio"},Tn=function(e){return!((gt(e)||Fn(e))&&(e.type==="hidden"||e.disabled))},Bn=function(e){var t=e.getAttribute(fn);return![!0,"true",""].includes(t)},ge=function(e){var t;return!!(e&&(!((t=ht(e))===null||t===void 0)&&t.focusGuard))},de=function(e){return!ge(e)},In=function(e){return!!e},_n=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},jn=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},be=function(e,t,n){return E(e).map(function(r,o){var a=jn(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(_n)},An=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],ye=An.join(","),Nn="".concat(ye,", [data-focus-guard]"),yt=function(e,t){return E((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?Nn:ye)?[r]:[],yt(r))},[])},Pn=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?A([e.contentDocument.body],t):[e]},A=function(e,t){return e.reduce(function(n,r){var o,a=yt(r,t),i=(o=[]).concat.apply(o,a.map(function(l){return Pn(l,t)}));return n.concat(i,r.parentNode?E(r.parentNode.querySelectorAll(ye)).filter(function(l){return l===r}):[])},[])},Dn=function(e){var t=e.querySelectorAll("[".concat(sn,"]"));return E(t).map(function(n){return A([n])}).reduce(function(n,r){return n.concat(r)},[])},Oe=function(e,t){return E(e).filter(function(n){return mt(t,n)}).filter(function(n){return Tn(n)})},Ae=function(e,t){return t===void 0&&(t=new Map),E(e).filter(function(n){return pt(t,n)})},ke=function(e,t,n){return be(Oe(A(e,n),t),!0,n)},X=function(e,t){return be(Oe(A(e),t),!1)},Ln=function(e,t){return Oe(Dn(e),t)},R=function(e,t){return e.shadowRoot?R(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:E(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?R(o,t):!1}return R(n,t)})},Wn=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,l){return!t.has(l)})},Ot=function(e){return e.parentNode?Ot(e.parentNode):e},xe=function(e){var t=S(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(le);return n.push.apply(n,o?Wn(E(Ot(r).querySelectorAll("[".concat(le,'="').concat(o,'"]:not([').concat(it,'="disabled"])')))):[r]),n},[])},Hn=function(e){try{return e()}catch{return}},V=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?V(t.shadowRoot):t instanceof HTMLIFrameElement&&Hn(function(){return t.contentWindow.document})?V(t.contentWindow.document):t}},Un=function(e,t){return e===t},Vn=function(e,t){return!!E(e.querySelectorAll("iframe")).some(function(n){return Un(n,t)})},kt=function(e,t){return t===void 0&&(t=V(ft(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:xe(e).some(function(n){return R(n,t)||Vn(n,t)})},qn=function(e){e===void 0&&(e=document);var t=V(e);return t?E(e.querySelectorAll("[".concat(ln,"]"))).some(function(n){return R(n,t)}):!1},$n=function(e,t){return t.filter(bt).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},Ee=function(e,t){return bt(e)&&e.name?$n(e,t):e},Gn=function(e){var t=new Set;return e.forEach(function(n){return t.add(Ee(n,e))}),e.filter(function(n){return t.has(n)})},Ne=function(e){return e[0]&&e.length>1?Ee(e[0],e):e[0]},Pe=function(e,t){return e.indexOf(Ee(t,e))},ve="NEW_FOCUS",Jn=function(e,t,n,r,o){var a=e.length,i=e[0],l=e[a-1],h=ge(r);if(!(r&&e.indexOf(r)>=0)){var s=r!==void 0?n.indexOf(r):-1,d=o?n.indexOf(o):s,f=o?e.indexOf(o):-1;if(s===-1)return f!==-1?f:ve;if(f===-1)return ve;var m=s-d,g=n.indexOf(i),v=n.indexOf(l),p=Gn(n),O=r!==void 0?p.indexOf(r):-1,x=O-(o?p.indexOf(o):s);if(!m&&f>=0||t.length===0)return f;var k=Pe(e,t[0]),M=Pe(e,t[t.length-1]);if(s<=g&&h&&Math.abs(m)>1)return M;if(s>=v&&h&&Math.abs(m)>1)return k;if(m&&Math.abs(x)>1)return f;if(s<=g)return M;if(s>v)return k;if(m)return Math.abs(m)>1?f:(a+f+m)%a}},Kn=function(e){return function(t){var n,r=(n=ht(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},De=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=Ae(r.filter(Kn(n)));return o&&o.length?Ne(o):Ne(Ae(t))},me=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&me(e.parentNode.host||e.parentNode,t),t},ae=function(e,t){for(var n=me(e),r=me(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},xt=function(e,t,n){var r=S(e),o=S(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(l){i=ae(i||l,l)||i,n.filter(Boolean).forEach(function(h){var s=ae(a,h);s&&(!i||R(s,i)?i=s:i=ae(s,i))})}),i},Le=function(e,t){return e.reduce(function(n,r){return n.concat(Ln(r,t))},[])},Yn=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(In)},Qn=function(e,t){var n=V(S(e).length>0?document:ft(e).ownerDocument),r=xe(e).filter(de),o=xt(n||e,e,r),a=new Map,i=X(r,a),l=i.filter(function(v){var p=v.node;return de(p)});if(l[0]){var h=X([o],a).map(function(v){var p=v.node;return p}),s=Yn(h,l),d=s.map(function(v){var p=v.node;return p}),f=s.filter(function(v){var p=v.tabIndex;return p>=0}).map(function(v){var p=v.node;return p}),m=Jn(d,f,h,n,t);if(m===ve){var g=De(i,f,Le(r,a))||De(i,d,Le(r,a));if(g)return{node:g};console.warn("focus-lock: cannot find any node to move focus into");return}return m===void 0?m:s[m]}},zn=function(e){var t=xe(e).filter(de),n=xt(e,e,t),r=be(A([n],!0),!0,!0),o=A(t,!1);return r.map(function(a){var i=a.node,l=a.index;return{node:i,index:l,lockItem:o.indexOf(i)>=0,guard:ge(i)}})},Me=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},ie=0,ue=!1,Et=function(e,t,n){n===void 0&&(n={});var r=Qn(e,t);if(!ue&&r){if(ie>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),ue=!0,setTimeout(function(){ue=!1},1);return}ie++,Me(r.node,n.focusOptions),ie--}};function D(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var Xn=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:D(n),parent:D(n.parentElement),left:D(n.previousElementSibling),right:D(n.nextElementSibling)}),n=n.parentElement;return{element:D(e),stack:t,ownerDocument:e.ownerDocument}},Zn=function(e){var t,n,r,o,a;if(e)for(var i=e.stack,l=e.ownerDocument,h=new Map,s=0,d=i;s<d.length;s++){var f=d[s],m=(t=f.parent)===null||t===void 0?void 0:t.call(f);if(m&&l.contains(m)){for(var g=(n=f.left)===null||n===void 0?void 0:n.call(f),v=f.current(),p=m.contains(v)?v:void 0,O=(r=f.right)===null||r===void 0?void 0:r.call(f),x=ke([m],h),k=(a=(o=p??(g==null?void 0:g.nextElementSibling))!==null&&o!==void 0?o:O)!==null&&a!==void 0?a:g;k;){for(var M=0,$=x;M<$.length;M++){var N=$[M];if(k!=null&&k.contains(N.node))return N.node}k=k.nextElementSibling}if(x.length)return x[0].node}}},er=function(e){var t=Xn(e);return function(){return Zn(t)}},tr=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=S(t);if(r.every(function(i){return!R(i,e)}))return console.error("Active element is not contained in the scope"),{};var o=n?ke(r,new Map):X(r,new Map),a=o.findIndex(function(i){var l=i.node;return l===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},nr=function(e,t){var n=t?ke(S(e),new Map):X(S(e),new Map);return{first:n[0],last:n[n.length-1]}},rr=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},Mt=function(e,t,n){t===void 0&&(t={});var r=rr(t),o=tr(e,r.scope,r.onlyTabbable);if(o){var a=n(o,r.cycle);a&&Me(a.node,r.focusOptions)}},or=function(e,t){t===void 0&&(t={}),Mt(e,t,function(n,r){var o=n.next,a=n.first;return o||r&&a})},ar=function(e,t){t===void 0&&(t={}),Mt(e,t,function(n,r){var o=n.prev,a=n.last;return o||r&&a})},Ct=function(e,t,n){var r,o=nr(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),a=o[n];a&&Me(a.node,t.focusOptions)},ir=function(e,t){t===void 0&&(t={}),Ct(e,t,"first")},ur=function(e,t){t===void 0&&(t={}),Ct(e,t,"last")};function Ce(e){setTimeout(e,1)}var cr=function(t){return t&&"current"in t?t.current:t},lr=function(){return document&&document.activeElement===document.body},sr=function(){return lr()||qn()},_=null,I=null,j=null,q=!1,fr=function(){return!0},dr=function(t){return(_.whiteList||fr)(t)},vr=function(t,n){j={observerNode:t,portaledElement:n}},mr=function(t){return j&&j.portaledElement===t};function We(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var pr=function(t){return t?!!q:q==="meanwhile"},hr=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},gr=function(t,n){return n.some(function(r){return hr(t,r,r)})},Z=function(){var t=!1;if(_){var n=_,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,l=n.crossFrame,h=n.focusOptions,s=r||j&&j.portaledElement,d=document&&document.activeElement;if(s){var f=[s].concat(i.map(cr).filter(Boolean));if((!d||dr(d))&&(o||pr(l)||!sr()||!I&&a)&&(s&&!(kt(f)||d&&gr(d,f)||mr(d))&&(document&&!I&&d&&!a?(d.blur&&d.blur(),document.body.focus()):(t=Et(f,I,{focusOptions:h}),j={})),q=!1,I=document&&document.activeElement),document&&d!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var m=document&&document.activeElement,g=zn(f),v=g.map(function(p){var O=p.node;return O}).indexOf(m);v>-1&&(g.filter(function(p){var O=p.guard,x=p.node;return O&&x.dataset.focusAutoGuard}).forEach(function(p){var O=p.node;return O.removeAttribute("tabIndex")}),We(v,g.length,1,g),We(v,-1,-1,g))}}}return t},wt=function(t){Z()&&t&&(t.stopPropagation(),t.preventDefault())},we=function(){return Ce(Z)},br=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||vr(r,n)},yr=function(){return null},Rt=function(){q="just",Ce(function(){q="meanwhile"})},Or=function(){document.addEventListener("focusin",wt),document.addEventListener("focusout",we),window.addEventListener("blur",Rt)},kr=function(){document.removeEventListener("focusin",wt),document.removeEventListener("focusout",we),window.removeEventListener("blur",Rt)};function xr(e){return e.filter(function(t){var n=t.disabled;return!n})}var St={moveFocusInside:Et,focusInside:kt,focusNextElement:or,focusPrevElement:ar,focusFirstElement:ir,focusLastElement:ur,captureFocusRestore:er};function Er(e){var t=e.slice(-1)[0];t&&!_&&Or();var n=_,r=n&&t&&t.id===n.id;_=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(I=null,(!r||n.observed!==t.observed)&&t.onActivation(St),Z(),Ce(Z)):(kr(),I=null)}lt.assignSyncMedium(br);st.assignMedium(we);hn.assignMedium(function(e){return e(St)});const Mr=Mn(xr,Er)(yr);var Ft=c.forwardRef(function(t,n){return c.createElement(he,H({sideCar:Mr,ref:n},t))}),Tt=he.propTypes||{};Tt.sideCar;cn(Tt,["sideCar"]);Ft.propTypes={};let L=[];const Re={documentElement:{},body:{}},Cr=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),Bt=e=>{var t;e.touches.length>1||((t=e.preventDefault)==null||t.call(e))},wr=e=>([t,n])=>{Re[e][t]=document[e].style[t],document[e].style[t]=n},Rr=()=>Object.entries(Cr).forEach(([e,t])=>{Object.entries(t).forEach(wr(e))}),Sr=e=>([t,n])=>{document[e].style[t]=Re[e][t]},Fr=()=>Object.entries(Re).forEach(([e,t])=>{Object.entries(t).forEach(Sr(e))}),Tr=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function Br(e){let t=-1;const n=r=>{if(r.targetTouches.length!==1)return;const o=r.targetTouches[0].clientY-t;return e.scrollTop===0&&o>0||Tr(e)&&o<0?Bt(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=n}function Ir(e){e.ontouchstart=null,e.ontouchmove=null}const It=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",Bt,{passive:!1}),_r=It(!0),jr=It();function Ar(e){if(!e)throw Error("Could not run setup, an element must be provided");L.some(t=>t===e)||(L.length||(Rr(),_r()),Br(e),L.push(e))}function He(){L.forEach(Ir),jr(),Fr(),L=[]}const Nr=JSON.parse('{"modal.aria.back":"Tilbake","modal.aria.close":"Lukk"}'),Pr=JSON.parse('{"modal.aria.back":"Back","modal.aria.close":"Close"}'),Dr=JSON.parse('{"modal.aria.back":"Takaisin","modal.aria.close":"Sulje"}');var Lr={},Wr=Object.defineProperty,Ue=Object.getOwnPropertySymbols,Hr=Object.prototype.hasOwnProperty,Ur=Object.prototype.propertyIsEnumerable,Ve=(e,t,n)=>t in e?Wr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vr=(e,t)=>{for(var n in t||(t={}))Hr.call(t,n)&&Ve(e,n,t[n]);if(Ue)for(var n of Ue(t))Ur.call(t,n)&&Ve(e,n,t[n]);return e},qr=JSON.parse('{"icon.title.arrow-left":"Pil som peker mot venstre"}'),$r=JSON.parse('{"icon.title.arrow-left":"Leftward-pointing arrow"}'),Gr=JSON.parse('{"icon.title.arrow-left":"Vasemmalle osoittava nuoli"}'),_t=["en","nb","fi","da","sv"],jt="en",Jr=()=>{let e;switch(Lr.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},At=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":jt},ce=e=>_t.find(t=>e===t||e.toLowerCase().includes(t))||At();function Kr(){var e;if(typeof window>"u"){const t=Jr();return ce(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=At();return _t.includes(t)?ce(t??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),ce(n))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),jt}}var Yr=(e,t,n,r)=>e==="nb"?n:e==="fi"?r:t,Qr=(e,t,n)=>{const r=Kr(),o=Yr(r,e,t,n);W.load(r,o),W.activate(r)};Qr($r,qr,Gr);var zr=W.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"}),Xr=e=>at.createElement("svg",Vr({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${zr}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path>`}},e)),Zr=Xr;const F=({"aria-label":e,"aria-labelledby":t,...n})=>{const r=c.useRef(null),o=rn(n.id),a=c.useRef(null);return on(Pr,Nr,Dr),c.useEffect(()=>()=>He(),[]),c.useEffect(()=>{He(),r.current&&n.open&&Ar(r.current)},[n.open,r]),c.useEffect(()=>{var i,l;n.initialFocusRef?(l=n.initialFocusRef.current)==null||l.focus():n.right&&((i=a.current)==null||i.focus())},[n.open,n.initialFocusRef,n.right]),n.open?u.jsx(Ft,{children:u.jsx("div",{onClick:n.onDismiss,className:P(n.className,b.backdrop),style:{...n.style},children:u.jsxs("div",{role:"dialog","aria-modal":"true",id:o,onClick:i=>{i.stopPropagation()},"aria-label":e,"aria-labelledby":t??(n.title&&!e?`${o}__title`:void 0),onKeyDown:i=>{n.onDismiss&&i.key==="Escape"&&n.onDismiss()},className:b.modal,tabIndex:-1,children:[u.jsxs("div",{className:b.title,children:[typeof n.left=="boolean"&&n.left?u.jsx("button",{type:"button","aria-label":W._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:P(b.transitionTitle,b.titleButton,b.titleButtonLeft),onClick:n.onLeftClick?n.onLeftClick:n.onDismiss,children:u.jsx(Zr,{className:P(b.titleButtonIcon)})}):n.left,u.jsx("div",{id:`${o}__title`,className:P(b.transitionTitle,n.left?b.transitionTitleCenter:b.transitionTitleColSpan),children:typeof n.title=="string"?u.jsx("h1",{className:b.titleText,children:n.title}):n.title}),typeof n.right=="boolean"&&n.right?u.jsx("button",{ref:a,type:"button","aria-label":W._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:n.onDismiss,className:P(b.transitionTitle,b.titleButton,b.titleButtonRight),children:u.jsx(an,{className:b.titleButtonIcon})}):n.right]}),u.jsx("div",{ref:r,className:b.content,children:n.children}),!!n.footer&&u.jsx("div",{className:b.footer,children:n.footer})]})})}):u.jsx(u.Fragment,{})};try{F.displayName="Modal",F.__docgenInfo={description:"A Modal dialog that renders on top the page",displayName:"Modal",props:{title:{defaultValue:null,description:"A string or your own custom elements",name:"title",required:!1,type:{name:"string | Element | Element[]"}},open:{defaultValue:null,description:"Whether the modal is open or not",name:"open",required:!0,type:{name:"boolean"}},left:{defaultValue:null,description:"A default back button or your own custom elements",name:"left",required:!1,type:{name:"boolean | Element | Element[]"}},right:{defaultValue:null,description:"A default close button or your own custom elements",name:"right",required:!1,type:{name:"boolean | Element | Element[]"}},footer:{defaultValue:null,description:"Buttons passed to the footer",name:"footer",required:!1,type:{name:"Element | Element[]"}},className:{defaultValue:null,description:"Additional classes added to the container",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"An id for the container and ARIA attributes. A random id is generated if none is provided.",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional styles to the contianer",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The modal contents",name:"children",required:!0,type:{name:"Element | Element[]"}},onDismiss:{defaultValue:null,description:"Handler that is called when the user presses *esc* or clicks outside the modal",name:"onDismiss",required:!1,type:{name:"(() => void)"}},onLeftClick:{defaultValue:null,description:"Handler that is called when the user clicks the left button",name:"onLeftClick",required:!1,type:{name:"(() => void)"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined.",name:"aria-labelledby",required:!1,type:{name:"string"}},initialFocusRef:{defaultValue:null,description:"A reference to the element that should be focused. By default it'll be the first interactive element.",name:"initialFocusRef",required:!1,type:{name:"RefObject<any>"}}}}}catch{}const fo={title:"Overlays/Modal"},J=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(F,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},K=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(F,{open:e,left:!0,right:!0,onDismiss:n,onLeftClick:()=>{console.log("left clicked"),n()},title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},Y=()=>{const[e,t]=c.useState(!1),[n,r]=c.useState(!1),o=c.useRef(null);c.useEffect(()=>{var i;e||(r(!1),(i=o.current)==null||i.focus())},[e]);const a=()=>t(!e);return u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:o,utility:!0,onClick:a,children:"Open modal"}),u.jsxs(F,{open:e,onDismiss:a,title:"Do you agree to these terms?",footer:u.jsx(y,{primary:!0,onClick:a,disabled:!n,children:"Accept"}),children:[u.jsx("p",{children:"1. You must give me 10 pushups right now"}),u.jsx(un,{type:"checkbox",label:"I agree",onChange:r})]})]})},Q=()=>{const[e,t]=c.useState(!1),n=()=>t(!e),r=c.useRef(),o=c.useRef(null);return c.useEffect(()=>{var a;e||(a=o.current)==null||a.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:o,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(F,{open:e,onDismiss:n,initialFocusRef:r,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{ref:r,primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Optional link to read more."})]})]})},z=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e&&((o=r.current)==null||o.focus())},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsx(F,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[...new Array(10)].map((o,a)=>u.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},a))})]})};var qe,$e,Ge;J.parameters={...J.parameters,docs:{...(qe=J.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(Ge=($e=J.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source}}};var Je,Ke,Ye;K.parameters={...K.parameters,docs:{...(Je=K.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
}`,...(Ye=(Ke=K.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};var Qe,ze,Xe;Y.parameters={...Y.parameters,docs:{...(Qe=Y.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
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
}`,...(Xe=(ze=Y.parameters)==null?void 0:ze.docs)==null?void 0:Xe.source}}};var Ze,et,tt;Q.parameters={...Q.parameters,docs:{...(Ze=Q.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>)}
      </Modal>
    </>;
}`,...(ot=(rt=z.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};const vo=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{J as Example,Q as InitialFocus,Y as MustConfirmToProceed,z as Overflowing,K as WithBackAndCloseButton,vo as __namedExportsOrder,fo as default};