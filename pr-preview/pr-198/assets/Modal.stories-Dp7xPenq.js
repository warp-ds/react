import{j as u,C as h}from"./index-CkQYNE3v.js";import{r as l,R as Ye}from"./index-CBqU2yxZ.js";import{r as T}from"./index.m-CtIADANO.js";import{u as Gt}from"./useId-BdPc6t19.js";import{i as B}from"./index-ClUvnnK6.js";import{a as Jt}from"./i18n-BsTzIrPx.js";import{c as Kt}from"./close-16-C8lDrxCI.js";import{B as b}from"./component-C6txbd1Q.js";import{T as Yt}from"./component-B9nqoB9M.js";import"./_commonjsHelpers-BosuxZz1.js";import"./item-4JmbcY6t.js";function Qt(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}var re="data-focus-lock",Qe="data-focus-lock-disabled",zt="data-no-focus-lock",Xt="data-autofocus-inside",Zt="data-no-autofocus";function z(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function en(e,t){var n=l.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Ee=new WeakMap;function tn(e,t){var n=en(null,function(r){return e.forEach(function(o){return z(o,r)})});return l.useLayoutEffect(function(){var r=Ee.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(c){a.has(c)||z(c,null)}),a.forEach(function(c){o.has(c)||z(c,i)})}Ee.set(n,e)},[e]),n}var X={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},oe=function(){return oe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},oe.apply(this,arguments)};function ze(e){return e}function Xe(e,t){t===void 0&&(t=ze);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(c){return c!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(c){return a(c)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var c=n;n=[],c.forEach(a),i=n}var d=function(){var s=i;i=[],s.forEach(a)},f=function(){return Promise.resolve().then(d)};f(),n={push:function(s){i.push(s),f()},filter:function(s){return i=i.filter(s),n}}}};return o}function ce(e,t){return t===void 0&&(t=ze),Xe(e,t)}function nn(e){e===void 0&&(e={});var t=Xe(null);return t.options=oe({async:!0,ssr:!1},e),t}var Ze=ce({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),et=ce(),rn=ce(),on=nn({async:!0}),an=[],le=l.forwardRef(function(t,n){var r,o=l.useState(),a=o[0],i=o[1],c=l.useRef(),d=l.useRef(!1),f=l.useRef(null),s=t.children,m=t.disabled,v=m===void 0?!1:m,p=t.noFocusGuards,g=p===void 0?!1:p,y=t.persistentFocus,k=y===void 0?!1:y,C=t.crossFrame,P=C===void 0?!0:C,be=t.autoFocus,Et=be===void 0?!0:be;t.allowTextSelection;var Ft=t.group,wt=t.className,Rt=t.whiteList,St=t.hasPositiveIndices,ye=t.shards,Tt=ye===void 0?an:ye,Oe=t.as,_t=Oe===void 0?"div":Oe,ke=t.lockProps,Bt=ke===void 0?{}:ke,jt=t.sideCar,Ce=t.returnFocus,D=Ce===void 0?!1:Ce,It=t.focusOptions,K=t.onActivation,Y=t.onDeactivation,At=l.useState({}),Nt=At[0],Pt=l.useCallback(function(){f.current=f.current||document&&document.activeElement,c.current&&K&&K(c.current),d.current=!0},[K]),Dt=l.useCallback(function(){d.current=!1,Y&&Y(c.current)},[Y]);l.useEffect(function(){v||(f.current=null)},[]);var Lt=l.useCallback(function(M){var S=f.current;if(S&&S.focus){var Q=typeof D=="function"?D(S):D;if(Q){var xe=typeof Q=="object"?Q:void 0;f.current=null,M?Promise.resolve().then(function(){return S.focus(xe)}):S.focus(xe)}}},[D]),Ht=l.useCallback(function(M){d.current&&Ze.useMedium(M)},[]),Wt=et.useMedium,Ut=l.useCallback(function(M){c.current!==M&&(c.current=M,i(M))},[]),Vt=j((r={},r[Qe]=v&&"disabled",r[re]=Ft,r),Bt),Me=g!==!0,qt=Me&&g!=="tail",$t=tn([n,Ut]);return l.createElement(l.Fragment,null,Me&&[l.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:v?-1:0,style:X}),St?l.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:v?-1:1,style:X}):null],!v&&l.createElement(jt,{id:Nt,sideCar:on,observed:a,disabled:v,persistentFocus:k,crossFrame:P,autoFocus:Et,whiteList:Rt,shards:Tt,onActivation:Pt,onDeactivation:Dt,returnFocus:Lt,focusOptions:It}),l.createElement(_t,j({ref:$t},Vt,{className:wt,onBlur:Wt,onFocus:Ht}),s),qt&&l.createElement("div",{"data-focus-guard":!0,tabIndex:v?-1:0,style:X}))});le.propTypes={};function ae(e,t){return ae=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},ae(e,t)}function un(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ae(e,t)}function I(e){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}function cn(e,t){if(I(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(I(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ln(e){var t=cn(e,"string");return I(t)=="symbol"?t:String(t)}function sn(e,t,n){return t=ln(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fn(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function c(){i=e(a.map(function(f){return f.props})),t(i)}var d=function(f){un(s,f);function s(){return f.apply(this,arguments)||this}s.peek=function(){return i};var m=s.prototype;return m.componentDidMount=function(){a.push(this),c()},m.componentDidUpdate=function(){c()},m.componentWillUnmount=function(){var p=a.indexOf(this);a.splice(p,1),c()},m.render=function(){return Ye.createElement(o,this.props)},s}(l.PureComponent);return sn(d,"displayName","SideEffect("+n(o)+")"),d}}var O=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},q=function(e){return Array.isArray(e)?e:[e]},tt=function(e){return Array.isArray(e)?e[0]:e},dn=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},nt=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},rt=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},mn=function(e,t){return!e||rt(e)||!dn(e)&&t(nt(e))},ot=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=mn(t,ot.bind(void 0,e));return e.set(t,r),r},vn=function(e,t){return e&&!rt(e)?gn(e)?t(nt(e)):!1:!0},at=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=vn(t,at.bind(void 0,e));return e.set(t,r),r},it=function(e){return e.dataset},pn=function(e){return e.tagName==="BUTTON"},ut=function(e){return e.tagName==="INPUT"},ct=function(e){return ut(e)&&e.type==="radio"},hn=function(e){return!((ut(e)||pn(e))&&(e.type==="hidden"||e.disabled))},gn=function(e){var t=e.getAttribute(Zt);return![!0,"true",""].includes(t)},se=function(e){var t;return!!(e&&(!((t=it(e))===null||t===void 0)&&t.focusGuard))},$=function(e){return!se(e)},bn=function(e){return!!e},yn=function(e,t){var n=e.tabIndex-t.tabIndex,r=e.index-t.index;if(n){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return n||r},lt=function(e,t,n){return O(e).map(function(r,o){return{node:r,index:o,tabIndex:n&&r.tabIndex===-1?(r.dataset||{}).focusGuard?0:-1:r.tabIndex}}).filter(function(r){return!t||r.tabIndex>=0}).sort(yn)},On=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],fe=On.join(","),kn="".concat(fe,", [data-focus-guard]"),st=function(e,t){return O((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?kn:fe)?[r]:[],st(r))},[])},Cn=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?J([e.contentDocument.body],t):[e]},J=function(e,t){return e.reduce(function(n,r){var o,a=st(r,t),i=(o=[]).concat.apply(o,a.map(function(c){return Cn(c,t)}));return n.concat(i,r.parentNode?O(r.parentNode.querySelectorAll(fe)).filter(function(c){return c===r}):[])},[])},Mn=function(e){var t=e.querySelectorAll("[".concat(Xt,"]"));return O(t).map(function(n){return J([n])}).reduce(function(n,r){return n.concat(r)},[])},de=function(e,t){return O(e).filter(function(n){return ot(t,n)}).filter(function(n){return hn(n)})},Fe=function(e,t){return t===void 0&&(t=new Map),O(e).filter(function(n){return at(t,n)})},ie=function(e,t,n){return lt(de(J(e,n),t),!0,n)},we=function(e,t){return lt(de(J(e),t),!1)},xn=function(e,t){return de(Mn(e),t)},F=function(e,t){return e.shadowRoot?F(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:O(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?F(o,t):!1}return F(n,t)})},En=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,c){return!t.has(c)})},ft=function(e){return e.parentNode?ft(e.parentNode):e},me=function(e){var t=q(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(re);return n.push.apply(n,o?En(O(ft(r).querySelectorAll("[".concat(re,'="').concat(o,'"]:not([').concat(Qe,'="disabled"])')))):[r]),n},[])},Fn=function(e){try{return e()}catch{return}},A=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?A(t.shadowRoot):t instanceof HTMLIFrameElement&&Fn(function(){return t.contentWindow.document})?A(t.contentWindow.document):t}},wn=function(e,t){return e===t},Rn=function(e,t){return!!O(e.querySelectorAll("iframe")).some(function(n){return wn(n,t)})},dt=function(e,t){return t===void 0&&(t=A(tt(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:me(e).some(function(n){return F(n,t)||Rn(n,t)})},Sn=function(e){e===void 0&&(e=document);var t=A(e);return t?O(e.querySelectorAll("[".concat(zt,"]"))).some(function(n){return F(n,t)}):!1},Tn=function(e,t){return t.filter(ct).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},ve=function(e,t){return ct(e)&&e.name?Tn(e,t):e},_n=function(e){var t=new Set;return e.forEach(function(n){return t.add(ve(n,e))}),e.filter(function(n){return t.has(n)})},Re=function(e){return e[0]&&e.length>1?ve(e[0],e):e[0]},Se=function(e,t){return e.length>1?e.indexOf(ve(e[t],e)):t},mt="NEW_FOCUS",Bn=function(e,t,n,r){var o=e.length,a=e[0],i=e[o-1],c=se(n);if(!(n&&e.indexOf(n)>=0)){var d=n!==void 0?t.indexOf(n):-1,f=r?t.indexOf(r):d,s=r?e.indexOf(r):-1,m=d-f,v=t.indexOf(a),p=t.indexOf(i),g=_n(t),y=n!==void 0?g.indexOf(n):-1,k=y-(r?g.indexOf(r):d),C=Se(e,0),P=Se(e,o-1);if(d===-1||s===-1)return mt;if(!m&&s>=0)return s;if(d<=v&&c&&Math.abs(m)>1)return P;if(d>=p&&c&&Math.abs(m)>1)return C;if(m&&Math.abs(k)>1)return s;if(d<=v)return P;if(d>p)return C;if(m)return Math.abs(m)>1?s:(o+s+m)%o}},jn=function(e){return function(t){var n,r=(n=it(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},In=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=Fe(r.filter(jn(n)));return o&&o.length?Re(o):Re(Fe(t))},ue=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&ue(e.parentNode.host||e.parentNode,t),t},Z=function(e,t){for(var n=ue(e),r=ue(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},vt=function(e,t,n){var r=q(e),o=q(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(c){i=Z(i||c,c)||i,n.filter(Boolean).forEach(function(d){var f=Z(a,d);f&&(!i||F(f,i)?i=f:i=Z(f,i))})}),i},An=function(e,t){return e.reduce(function(n,r){return n.concat(xn(r,t))},[])},Nn=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(bn)},Pn=function(e,t){var n=A(q(e).length>0?document:tt(e).ownerDocument),r=me(e).filter($),o=vt(n||e,e,r),a=new Map,i=we(r,a),c=ie(r,a).filter(function(p){var g=p.node;return $(g)});if(!(!c[0]&&(c=i,!c[0]))){var d=we([o],a).map(function(p){var g=p.node;return g}),f=Nn(d,c),s=f.map(function(p){var g=p.node;return g}),m=Bn(s,d,n,t);if(m===mt){var v=In(i,s,An(r,a));if(v)return{node:v};console.warn("focus-lock: cannot find any node to move focus into");return}return m===void 0?m:f[m]}},Dn=function(e){var t=me(e).filter($),n=vt(e,e,t),r=new Map,o=ie([n],r,!0),a=ie(t,r).filter(function(i){var c=i.node;return $(c)}).map(function(i){var c=i.node;return c});return o.map(function(i){var c=i.node,d=i.index;return{node:c,index:d,lockItem:a.indexOf(c)>=0,guard:se(c)}})},Ln=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},ee=0,te=!1,pt=function(e,t,n){n===void 0&&(n={});var r=Pn(e,t);if(!te&&r){if(ee>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),te=!0,setTimeout(function(){te=!1},1);return}ee++,Ln(r.node,n.focusOptions),ee--}};function pe(e){setTimeout(e,1)}var Hn=function(){return document&&document.activeElement===document.body},Wn=function(){return Hn()||Sn()},w=null,E=null,R=null,N=!1,Un=function(){return!0},Vn=function(t){return(w.whiteList||Un)(t)},qn=function(t,n){R={observerNode:t,portaledElement:n}},$n=function(t){return R&&R.portaledElement===t};function Te(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var Gn=function(t){return t&&"current"in t?t.current:t},Jn=function(t){return t?!!N:N==="meanwhile"},Kn=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},Yn=function(t,n){return n.some(function(r){return Kn(t,r,r)})},G=function(){var t=!1;if(w){var n=w,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,c=n.crossFrame,d=n.focusOptions,f=r||R&&R.portaledElement,s=document&&document.activeElement;if(f){var m=[f].concat(i.map(Gn).filter(Boolean));if((!s||Vn(s))&&(o||Jn(c)||!Wn()||!E&&a)&&(f&&!(dt(m)||s&&Yn(s,m)||$n(s))&&(document&&!E&&s&&!a?(s.blur&&s.blur(),document.body.focus()):(t=pt(m,E,{focusOptions:d}),R={})),N=!1,E=document&&document.activeElement),document){var v=document&&document.activeElement,p=Dn(m),g=p.map(function(y){var k=y.node;return k}).indexOf(v);g>-1&&(p.filter(function(y){var k=y.guard,C=y.node;return k&&C.dataset.focusAutoGuard}).forEach(function(y){var k=y.node;return k.removeAttribute("tabIndex")}),Te(g,p.length,1,p),Te(g,-1,-1,p))}}}return t},ht=function(t){G()&&t&&(t.stopPropagation(),t.preventDefault())},he=function(){return pe(G)},Qn=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||qn(r,n)},zn=function(){return null},gt=function(){N="just",pe(function(){N="meanwhile"})},Xn=function(){document.addEventListener("focusin",ht),document.addEventListener("focusout",he),window.addEventListener("blur",gt)},Zn=function(){document.removeEventListener("focusin",ht),document.removeEventListener("focusout",he),window.removeEventListener("blur",gt)};function er(e){return e.filter(function(t){var n=t.disabled;return!n})}function tr(e){var t=e.slice(-1)[0];t&&!w&&Xn();var n=w,r=n&&t&&t.id===n.id;w=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(E=null,(!r||n.observed!==t.observed)&&t.onActivation(),G(),pe(G)):(Zn(),E=null)}Ze.assignSyncMedium(Qn);et.assignMedium(he);rn.assignMedium(function(e){return e({moveFocusInside:pt,focusInside:dt})});const nr=fn(er,tr)(zn);var bt=l.forwardRef(function(t,n){return l.createElement(le,j({sideCar:nr,ref:n},t))}),yt=le.propTypes||{};yt.sideCar;Qt(yt,["sideCar"]);bt.propTypes={};let _=[];const ge={documentElement:{},body:{}},rr=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),Ot=e=>{var t;e.touches.length>1||((t=e.preventDefault)==null||t.call(e))},or=e=>([t,n])=>{ge[e][t]=document[e].style[t],document[e].style[t]=n},ar=()=>Object.entries(rr).forEach(([e,t])=>{Object.entries(t).forEach(or(e))}),ir=e=>([t,n])=>{document[e].style[t]=ge[e][t]},ur=()=>Object.entries(ge).forEach(([e,t])=>{Object.entries(t).forEach(ir(e))}),cr=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function lr(e){let t=-1;const n=r=>{if(r.targetTouches.length!==1)return;const o=r.targetTouches[0].clientY-t;return e.scrollTop===0&&o>0||cr(e)&&o<0?Ot(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=n}function sr(e){e.ontouchstart=null,e.ontouchmove=null}const kt=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",Ot,{passive:!1}),fr=kt(!0),dr=kt();function mr(e){if(!e)throw Error("Could not run setup, an element must be provided");_.some(t=>t===e)||(_.length||(ar(),fr()),lr(e),_.push(e))}function _e(){_.forEach(sr),dr(),ur(),_=[]}const vr=JSON.parse('{"modal.aria.back":"Tilbake","modal.aria.close":"Lukk"}'),pr=JSON.parse('{"modal.aria.back":"Back","modal.aria.close":"Close"}'),hr=JSON.parse('{"modal.aria.back":"Takaisin","modal.aria.close":"Sulje"}');var gr={},br=Object.defineProperty,Be=Object.getOwnPropertySymbols,yr=Object.prototype.hasOwnProperty,Or=Object.prototype.propertyIsEnumerable,je=(e,t,n)=>t in e?br(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kr=(e,t)=>{for(var n in t||(t={}))yr.call(t,n)&&je(e,n,t[n]);if(Be)for(var n of Be(t))Or.call(t,n)&&je(e,n,t[n]);return e},Cr=JSON.parse('{"icon.title.arrow-left":"Pil som peker mot venstre"}'),Mr=JSON.parse('{"icon.title.arrow-left":"Leftward-pointing arrow"}'),xr=JSON.parse('{"icon.title.arrow-left":"Vasemmalle osoittava nuoli"}'),Ct=["en","nb","fi","da","sv"],Mt="en",Er=()=>{let e;switch(gr.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},xt=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":Mt},ne=e=>Ct.find(t=>e===t||e.toLowerCase().includes(t))||xt();function Fr(){var e;if(typeof window>"u"){const t=Er();return ne(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=xt();return Ct.includes(t)?ne(t??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),ne(n))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Mt}}var wr=(e,t,n,r)=>e==="nb"?n:e==="fi"?r:t,Rr=(e,t,n)=>{const r=Fr(),o=wr(r,e,t,n);B.load(r,o),B.activate(r)};Rr(Mr,Cr,xr);var Sr=B.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"}),Tr=e=>Ye.createElement("svg",kr({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Sr}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path>`}},e)),_r=Tr;const x=({"aria-label":e,"aria-labelledby":t,...n})=>{const r=l.useRef(null),o=Gt(n.id),a=l.useRef(null);return Jt(pr,vr,hr),l.useEffect(()=>()=>_e(),[]),l.useEffect(()=>{_e(),r.current&&n.open&&mr(r.current)},[n.open,r]),l.useEffect(()=>{var i,c;n.initialFocusRef?(c=n.initialFocusRef.current)==null||c.focus():n.right&&((i=a.current)==null||i.focus())},[n.open,n.initialFocusRef,n.right]),n.open?u.jsx(bt,{children:u.jsx("div",{onClick:n.onDismiss,className:T(n.className,h.backdrop),style:{...n.style},children:u.jsxs("div",{role:"dialog","aria-modal":"true",id:o,onClick:i=>{i.stopPropagation()},"aria-label":e,"aria-labelledby":t??(n.title&&!e?`${o}__title`:void 0),onKeyDown:i=>{n.onDismiss&&i.key==="Escape"&&n.onDismiss()},className:h.modal,tabIndex:-1,children:[u.jsxs("div",{className:h.title,children:[typeof n.left=="boolean"&&n.left?u.jsx("button",{type:"button","aria-label":B._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:T(h.transitionTitle,h.titleButton,h.titleButtonLeft),onClick:n.onLeftClick?n.onLeftClick:n.onDismiss,children:u.jsx(_r,{className:T(h.titleButtonIcon)})}):n.left,u.jsx("div",{id:`${o}__title`,className:T(h.transitionTitle,n.left?h.transitionTitleCenter:h.transitionTitleColSpan),children:typeof n.title=="string"?u.jsx("h1",{className:h.titleText,children:n.title}):n.title}),typeof n.right=="boolean"&&n.right?u.jsx("button",{ref:a,type:"button","aria-label":B._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:n.onDismiss,className:T(h.transitionTitle,h.titleButton,h.titleButtonRight),children:u.jsx(Kt,{className:h.titleButtonIcon})}):n.right]}),u.jsx("div",{ref:r,className:h.content,children:n.children}),!!n.footer&&u.jsx("div",{className:h.footer,children:n.footer})]})})}):u.jsx(u.Fragment,{})};try{x.displayName="Modal",x.__docgenInfo={description:"A Modal dialog that renders on top the page",displayName:"Modal",props:{title:{defaultValue:null,description:"A string or your own custom elements",name:"title",required:!1,type:{name:"string | Element | Element[]"}},open:{defaultValue:null,description:"Whether the modal is open or not",name:"open",required:!0,type:{name:"boolean"}},left:{defaultValue:null,description:"A default back button or your own custom elements",name:"left",required:!1,type:{name:"boolean | Element | Element[]"}},right:{defaultValue:null,description:"A default close button or your own custom elements",name:"right",required:!1,type:{name:"boolean | Element | Element[]"}},footer:{defaultValue:null,description:"Buttons passed to the footer",name:"footer",required:!1,type:{name:"Element | Element[]"}},className:{defaultValue:null,description:"Additional classes added to the container",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"An id for the container and ARIA attributes. A random id is generated if none is provided.",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional styles to the contianer",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The modal contents",name:"children",required:!0,type:{name:"Element | Element[]"}},onDismiss:{defaultValue:null,description:"Handler that is called when the user presses *esc* or clicks outside the modal",name:"onDismiss",required:!1,type:{name:"(() => void)"}},onLeftClick:{defaultValue:null,description:"Handler that is called when the user clicks the left button",name:"onLeftClick",required:!1,type:{name:"(() => void)"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined.",name:"aria-labelledby",required:!1,type:{name:"string"}},initialFocusRef:{defaultValue:null,description:"A reference to the element that should be focused. By default it'll be the first interactive element.",name:"initialFocusRef",required:!1,type:{name:"RefObject<any>"}}}}}catch{}const Vr={title:"Overlays/Modal"},L=()=>{const[e,t]=l.useState(!0),n=()=>t(!e),r=l.useRef(null);return l.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(b,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(x,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(b,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(b,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},H=()=>{const[e,t]=l.useState(!0),n=()=>t(!e),r=l.useRef(null);return l.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(b,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(x,{open:e,left:!0,right:!0,onDismiss:n,onLeftClick:()=>{console.log("left clicked"),n()},title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(b,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(b,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},W=()=>{const[e,t]=l.useState(!1),[n,r]=l.useState(!1),o=l.useRef(null);l.useEffect(()=>{var i;e||(r(!1),(i=o.current)==null||i.focus())},[e]);const a=()=>t(!e);return u.jsxs(u.Fragment,{children:[u.jsx(b,{ref:o,utility:!0,onClick:a,children:"Open modal"}),u.jsxs(x,{open:e,onDismiss:a,title:"Do you agree to these terms?",footer:u.jsx(b,{primary:!0,onClick:a,disabled:!n,children:"Accept"}),children:[u.jsx("p",{children:"1. You must give me 10 pushups right now"}),u.jsx(Yt,{type:"checkbox",label:"I agree",onChange:r})]})]})},U=()=>{const[e,t]=l.useState(!1),n=()=>t(!e),r=l.useRef(),o=l.useRef(null);return l.useEffect(()=>{var a;e||(a=o.current)==null||a.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(b,{ref:o,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(x,{open:e,onDismiss:n,initialFocusRef:r,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(b,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(b,{ref:r,primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Optional link to read more."})]})]})},V=()=>{const[e,t]=l.useState(!0),n=()=>t(!e),r=l.useRef(null);return l.useEffect(()=>{var o;e&&((o=r.current)==null||o.focus())},[e]),u.jsxs(u.Fragment,{children:[u.jsx(b,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsx(x,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(b,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(b,{primary:!0,onClick:n,children:"Accept"})]}),children:[...new Array(10)].map((o,a)=>u.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},a))})]})};var Ie,Ae,Ne;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(Ne=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var Pe,De,Le;H.parameters={...H.parameters,docs:{...(Pe=H.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
}`,...(Le=(De=H.parameters)==null?void 0:De.docs)==null?void 0:Le.source}}};var He,We,Ue;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
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
}`,...(Ue=(We=W.parameters)==null?void 0:We.docs)==null?void 0:Ue.source}}};var Ve,qe,$e;U.parameters={...U.parameters,docs:{...(Ve=U.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
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
}`,...($e=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:$e.source}}};var Ge,Je,Ke;V.parameters={...V.parameters,docs:{...(Ge=V.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(Ke=(Je=V.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};const qr=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{L as Example,U as InitialFocus,W as MustConfirmToProceed,V as Overflowing,H as WithBackAndCloseButton,qr as __namedExportsOrder,Vr as default};
