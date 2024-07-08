import{j as i}from"./jsx-runtime-QvZ8i92b.js";import{R as tt,r as s}from"./index-uubelm5h.js";import{B as y}from"./component-C4X8oE4j.js";import{T as zt}from"./component-CGvj3jrB.js";import{r as P}from"./index.m-CtIADANO.js";import{i as q}from"./index-1YnX0IqW.js";import{B as b}from"./index-3IeVCiwq.js";import{c as Qt}from"./close-16-CED6tocK.js";import{c as de,a as Zt,_ as ue,u as en,b as tn}from"./inheritsLoose-DD8t1Q9S.js";import{a as nn}from"./i18n-CHMFe01U.js";import{u as rn}from"./useId-DOeVWIUX.js";import"./item-CihnVZBZ.js";var on={},an=Object.defineProperty,Be=Object.getOwnPropertySymbols,un=Object.prototype.hasOwnProperty,sn=Object.prototype.propertyIsEnumerable,Ae=(e,t,n)=>t in e?an(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cn=(e,t)=>{for(var n in t||(t={}))un.call(t,n)&&Ae(e,n,t[n]);if(Be)for(var n of Be(t))sn.call(t,n)&&Ae(e,n,t[n]);return e},ln=JSON.parse('{"icon.title.arrow-left":"Pil som peker mot venstre"}'),fn=JSON.parse('{"icon.title.arrow-left":"Leftward-pointing arrow"}'),dn=JSON.parse('{"icon.title.arrow-left":"Vasemmalle osoittava nuoli"}'),nt=["en","nb","fi","da","sv"],rt="en",mn=()=>{let e;switch(on.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ot=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":rt},ne=e=>nt.find(t=>e===t||e.toLowerCase().includes(t))||ot();function vn(){var e;if(typeof window>"u"){const t=mn();return ne(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=ot();return nt.includes(t)?ne(t??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),ne(n))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),rt}}var pn=(e,t,n,r)=>e==="nb"?n:e==="fi"?r:t,hn=(e,t,n)=>{const r=vn(),o=pn(r,e,t,n);q.load(r,o),q.activate(r)};hn(fn,ln,dn);var gn=q.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"}),bn=e=>tt.createElement("svg",cn({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${gn}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path>`}},e)),yn=bn;function kn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var se="data-focus-lock",at="data-focus-lock-disabled",xn="data-no-focus-lock",On="data-autofocus-inside",En="data-no-autofocus",re={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},it=de({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),ut=de(),Cn=de(),Mn=Zt({async:!0,ssr:typeof document<"u"}),Sn=s.createContext(void 0),wn=[],me=s.forwardRef(function(t,n){var r,o=s.useState(),a=o[0],u=o[1],l=s.useRef(),g=s.useRef(!1),c=s.useRef(null),p=s.useState({}),f=p[1],m=t.children,h=t.disabled,d=h===void 0?!1:h,v=t.noFocusGuards,k=v===void 0?!1:v,O=t.persistentFocus,x=O===void 0?!1:O,C=t.crossFrame,Y=C===void 0?!0:C,j=t.autoFocus,Ft=j===void 0?!0:j;t.allowTextSelection;var Bt=t.group,At=t.className,It=t.whiteList,Nt=t.hasPositiveIndices,Me=t.shards,Z=Me===void 0?wn:Me,Se=t.as,_t=Se===void 0?"div":Se,we=t.lockProps,jt=we===void 0?{}:we,Pt=t.sideCar,Re=t.returnFocus,K=Re===void 0?!1:Re,Dt=t.focusOptions,ee=t.onActivation,te=t.onDeactivation,Lt=s.useState({}),Jt=Lt[0],Wt=s.useCallback(function(M){var T=M.captureFocusRestore;if(!c.current){var F,S=(F=document)==null?void 0:F.activeElement;c.current=S,S!==document.body&&(c.current=T(S))}l.current&&ee&&ee(l.current),g.current=!0,f()},[ee]),Ht=s.useCallback(function(){g.current=!1,te&&te(l.current),f()},[te]),Ut=s.useCallback(function(M){var T=c.current;if(T){var F=(typeof T=="function"?T():T)||document.body,S=typeof K=="function"?K(F):K;if(S){var Fe=typeof S=="object"?S:void 0;c.current=null,M?Promise.resolve().then(function(){return F.focus(Fe)}):F.focus(Fe)}}},[K]),Xt=s.useCallback(function(M){g.current&&it.useMedium(M)},[]),qt=ut.useMedium,$t=s.useCallback(function(M){l.current!==M&&(l.current=M,u(M))},[]),Gt=ue((r={},r[at]=d&&"disabled",r[se]=Bt,r),jt),Te=k!==!0,Vt=Te&&k!=="tail",Yt=en([n,$t]),Kt=s.useMemo(function(){return{observed:l,shards:Z,enabled:!d,active:g.current}},[d,g.current,Z,a]);return s.createElement(s.Fragment,null,Te&&[s.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:d?-1:0,style:re}),Nt?s.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:d?-1:1,style:re}):null],!d&&s.createElement(Pt,{id:Jt,sideCar:Mn,observed:a,disabled:d,persistentFocus:x,crossFrame:Y,autoFocus:Ft,whiteList:It,shards:Z,onActivation:Wt,onDeactivation:Ht,returnFocus:Ut,focusOptions:Dt}),s.createElement(_t,ue({ref:Yt},Gt,{className:At,onBlur:qt,onFocus:Xt}),s.createElement(Sn.Provider,{value:Kt},m)),Vt&&s.createElement("div",{"data-focus-guard":!0,tabIndex:d?-1:0,style:re}))});me.propTypes={};function $(e){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(e)}function Rn(e,t){if($(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if($(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Tn(e){var t=Rn(e,"string");return $(t)=="symbol"?t:t+""}function Fn(e,t,n){return(t=Tn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bn(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],u;function l(){u=e(a.map(function(c){return c.props})),t(u)}var g=function(c){tn(p,c);function p(){return c.apply(this,arguments)||this}p.peek=function(){return u};var f=p.prototype;return f.componentDidMount=function(){a.push(this),l()},f.componentDidUpdate=function(){l()},f.componentWillUnmount=function(){var h=a.indexOf(this);a.splice(h,1),l()},f.render=function(){return tt.createElement(o,this.props)},p}(s.PureComponent);return Fn(g,"displayName","SideEffect("+n(o)+")"),g}}var E=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},R=function(e){return Array.isArray(e)?e:[e]},st=function(e){return Array.isArray(e)?e[0]:e},An=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},ct=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},lt=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},In=function(e){return e.hasAttribute("inert")},Nn=function(e,t){return!e||lt(e)||!An(e)&&!In(e)&&t(ct(e))},ft=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Nn(t,ft.bind(void 0,e));return e.set(t,r),r},_n=function(e,t){return e&&!lt(e)?Dn(e)?t(ct(e)):!1:!0},dt=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=_n(t,dt.bind(void 0,e));return e.set(t,r),r},mt=function(e){return e.dataset},jn=function(e){return e.tagName==="BUTTON"},vt=function(e){return e.tagName==="INPUT"},pt=function(e){return vt(e)&&e.type==="radio"},Pn=function(e){return!((vt(e)||jn(e))&&(e.type==="hidden"||e.disabled))},Dn=function(e){var t=e.getAttribute(En);return![!0,"true",""].includes(t)},ve=function(e){var t;return!!(e&&(!((t=mt(e))===null||t===void 0)&&t.focusGuard))},ce=function(e){return!ve(e)},Ln=function(e){return!!e},Jn=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},Wn=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},pe=function(e,t,n){return E(e).map(function(r,o){var a=Wn(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(Jn)},Hn=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],he=Hn.join(","),Un="".concat(he,", [data-focus-guard]"),ht=function(e,t){return E((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?Un:he)?[r]:[],ht(r))},[])},Xn=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?N([e.contentDocument.body],t):[e]},N=function(e,t){return e.reduce(function(n,r){var o,a=ht(r,t),u=(o=[]).concat.apply(o,a.map(function(l){return Xn(l,t)}));return n.concat(u,r.parentNode?E(r.parentNode.querySelectorAll(he)).filter(function(l){return l===r}):[])},[])},qn=function(e){var t=e.querySelectorAll("[".concat(On,"]"));return E(t).map(function(n){return N([n])}).reduce(function(n,r){return n.concat(r)},[])},ge=function(e,t){return E(e).filter(function(n){return ft(t,n)}).filter(function(n){return Pn(n)})},Ie=function(e,t){return t===void 0&&(t=new Map),E(e).filter(function(n){return dt(t,n)})},be=function(e,t,n){return pe(ge(N(e,n),t),!0,n)},z=function(e,t){return pe(ge(N(e),t),!1)},$n=function(e,t){return ge(qn(e),t)},w=function(e,t){return e.shadowRoot?w(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:E(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?w(o,t):!1}return w(n,t)})},Gn=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(u,l){return!t.has(l)})},gt=function(e){return e.parentNode?gt(e.parentNode):e},ye=function(e){var t=R(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(se);return n.push.apply(n,o?Gn(E(gt(r).querySelectorAll("[".concat(se,'="').concat(o,'"]:not([').concat(at,'="disabled"])')))):[r]),n},[])},Vn=function(e){try{return e()}catch{return}},G=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?G(t.shadowRoot):t instanceof HTMLIFrameElement&&Vn(function(){return t.contentWindow.document})?G(t.contentWindow.document):t}},Yn=function(e,t){return e===t},Kn=function(e,t){return!!E(e.querySelectorAll("iframe")).some(function(n){return Yn(n,t)})},bt=function(e,t){return t===void 0&&(t=G(st(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:ye(e).some(function(n){return w(n,t)||Kn(n,t)})},zn=function(e){e===void 0&&(e=document);var t=G(e);return t?E(e.querySelectorAll("[".concat(xn,"]"))).some(function(n){return w(n,t)}):!1},Qn=function(e,t){return t.filter(pt).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},ke=function(e,t){return pt(e)&&e.name?Qn(e,t):e},Zn=function(e){var t=new Set;return e.forEach(function(n){return t.add(ke(n,e))}),e.filter(function(n){return t.has(n)})},Ne=function(e){return e[0]&&e.length>1?ke(e[0],e):e[0]},_e=function(e,t){return e.indexOf(ke(t,e))},le="NEW_FOCUS",er=function(e,t,n,r,o){var a=e.length,u=e[0],l=e[a-1],g=ve(r);if(!(r&&e.indexOf(r)>=0)){var c=r!==void 0?n.indexOf(r):-1,p=o?n.indexOf(o):c,f=o?e.indexOf(o):-1;if(c===-1)return f!==-1?f:le;if(f===-1)return le;var m=c-p,h=n.indexOf(u),d=n.indexOf(l),v=Zn(n),k=r!==void 0?v.indexOf(r):-1,O=k-(o?v.indexOf(o):c);if(!m&&f>=0||t.length===0)return f;var x=_e(e,t[0]),C=_e(e,t[t.length-1]);if(c<=h&&g&&Math.abs(m)>1)return C;if(c>=d&&g&&Math.abs(m)>1)return x;if(m&&Math.abs(O)>1)return f;if(c<=h)return C;if(c>d)return x;if(m)return Math.abs(m)>1?f:(a+f+m)%a}},tr=function(e){return function(t){var n,r=(n=mt(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},je=function(e,t,n){var r=e.map(function(a){var u=a.node;return u}),o=Ie(r.filter(tr(n)));return o&&o.length?Ne(o):Ne(Ie(t))},fe=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&fe(e.parentNode.host||e.parentNode,t),t},oe=function(e,t){for(var n=fe(e),r=fe(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},yt=function(e,t,n){var r=R(e),o=R(t),a=r[0],u=!1;return o.filter(Boolean).forEach(function(l){u=oe(u||l,l)||u,n.filter(Boolean).forEach(function(g){var c=oe(a,g);c&&(!u||w(c,u)?u=c:u=oe(c,u))})}),u},Pe=function(e,t){return e.reduce(function(n,r){return n.concat($n(r,t))},[])},nr=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(Ln)},rr=function(e,t){var n=G(R(e).length>0?document:st(e).ownerDocument),r=ye(e).filter(ce),o=yt(n||e,e,r),a=new Map,u=z(r,a),l=u.filter(function(d){var v=d.node;return ce(v)});if(l[0]){var g=z([o],a).map(function(d){var v=d.node;return v}),c=nr(g,l),p=c.map(function(d){var v=d.node;return v}),f=c.filter(function(d){var v=d.tabIndex;return v>=0}).map(function(d){var v=d.node;return v}),m=er(p,f,g,n,t);if(m===le){var h=je(u,f,Pe(r,a))||je(u,p,Pe(r,a));if(h)return{node:h};console.warn("focus-lock: cannot find any node to move focus into");return}return m===void 0?m:c[m]}},or=function(e){var t=ye(e).filter(ce),n=yt(e,e,t),r=pe(N([n],!0),!0,!0),o=N(t,!1);return r.map(function(a){var u=a.node,l=a.index;return{node:u,index:l,lockItem:o.indexOf(u)>=0,guard:ve(u)}})},xe=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},ae=0,ie=!1,kt=function(e,t,n){n===void 0&&(n={});var r=rr(e,t);if(!ie&&r){if(ae>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),ie=!0,setTimeout(function(){ie=!1},1);return}ae++,xe(r.node,n.focusOptions),ae--}};function D(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var ar=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:D(n),parent:D(n.parentElement),left:D(n.previousElementSibling),right:D(n.nextElementSibling)}),n=n.parentElement;return{element:D(e),stack:t,ownerDocument:e.ownerDocument}},ir=function(e){var t,n,r,o,a;if(e)for(var u=e.stack,l=e.ownerDocument,g=new Map,c=0,p=u;c<p.length;c++){var f=p[c],m=(t=f.parent)===null||t===void 0?void 0:t.call(f);if(m&&l.contains(m)){for(var h=(n=f.left)===null||n===void 0?void 0:n.call(f),d=f.current(),v=m.contains(d)?d:void 0,k=(r=f.right)===null||r===void 0?void 0:r.call(f),O=be([m],g),x=(a=(o=v??(h==null?void 0:h.nextElementSibling))!==null&&o!==void 0?o:k)!==null&&a!==void 0?a:h;x;){for(var C=0,Y=O;C<Y.length;C++){var j=Y[C];if(x!=null&&x.contains(j.node))return j.node}x=x.nextElementSibling}if(O.length)return O[0].node}}},ur=function(e){var t=ar(e);return function(){return ir(t)}},sr=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=R(t);if(r.every(function(u){return!w(u,e)}))return console.error("Active element is not contained in the scope"),{};var o=n?be(r,new Map):z(r,new Map),a=o.findIndex(function(u){var l=u.node;return l===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},cr=function(e,t){var n=t?be(R(e),new Map):z(R(e),new Map);return{first:n[0],last:n[n.length-1]}},lr=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},xt=function(e,t,n){t===void 0&&(t={});var r=lr(t),o=sr(e,r.scope,r.onlyTabbable);if(o){var a=n(o,r.cycle);a&&xe(a.node,r.focusOptions)}},fr=function(e,t){t===void 0&&(t={}),xt(e,t,function(n,r){var o=n.next,a=n.first;return o||r&&a})},dr=function(e,t){t===void 0&&(t={}),xt(e,t,function(n,r){var o=n.prev,a=n.last;return o||r&&a})},Ot=function(e,t,n){var r,o=cr(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),a=o[n];a&&xe(a.node,t.focusOptions)},mr=function(e,t){t===void 0&&(t={}),Ot(e,t,"first")},vr=function(e,t){t===void 0&&(t={}),Ot(e,t,"last")};function Oe(e){setTimeout(e,1)}var pr=function(t){return t&&"current"in t?t.current:t},hr=function(){return document&&document.activeElement===document.body},gr=function(){return hr()||zn()},A=null,B=null,I=null,V=!1,br=function(){return!0},yr=function(t){return(A.whiteList||br)(t)},kr=function(t,n){I={observerNode:t,portaledElement:n}},xr=function(t){return I&&I.portaledElement===t};function De(e,t,n,r){var o=null,a=e;do{var u=r[a];if(u.guard)u.node.dataset.focusAutoGuard&&(o=u);else if(u.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var Or=function(t){return t?!!V:V==="meanwhile"},Er=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},Cr=function(t,n){return n.some(function(r){return Er(t,r,r)})},Q=function(){var t=!1;if(A){var n=A,r=n.observed,o=n.persistentFocus,a=n.autoFocus,u=n.shards,l=n.crossFrame,g=n.focusOptions,c=r||I&&I.portaledElement,p=document&&document.activeElement;if(c){var f=[c].concat(u.map(pr).filter(Boolean));if((!p||yr(p))&&(o||Or(l)||!gr()||!B&&a)&&(c&&!(bt(f)||p&&Cr(p,f)||xr(p))&&(document&&!B&&p&&!a?(p.blur&&p.blur(),document.body.focus()):(t=kt(f,B,{focusOptions:g}),I={})),V=!1,B=document&&document.activeElement),document&&p!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var m=document&&document.activeElement,h=or(f),d=h.map(function(v){var k=v.node;return k}).indexOf(m);d>-1&&(h.filter(function(v){var k=v.guard,O=v.node;return k&&O.dataset.focusAutoGuard}).forEach(function(v){var k=v.node;return k.removeAttribute("tabIndex")}),De(d,h.length,1,h),De(d,-1,-1,h))}}}return t},Et=function(t){Q()&&t&&(t.stopPropagation(),t.preventDefault())},Ee=function(){return Oe(Q)},Mr=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||kr(r,n)},Sr=function(){return null},Ct=function(){V="just",Oe(function(){V="meanwhile"})},wr=function(){document.addEventListener("focusin",Et),document.addEventListener("focusout",Ee),window.addEventListener("blur",Ct)},Rr=function(){document.removeEventListener("focusin",Et),document.removeEventListener("focusout",Ee),window.removeEventListener("blur",Ct)};function Tr(e){return e.filter(function(t){var n=t.disabled;return!n})}var Mt={moveFocusInside:kt,focusInside:bt,focusNextElement:fr,focusPrevElement:dr,focusFirstElement:mr,focusLastElement:vr,captureFocusRestore:ur};function Fr(e){var t=e.slice(-1)[0];t&&!A&&wr();var n=A,r=n&&t&&t.id===n.id;A=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(B=null,(!r||n.observed!==t.observed)&&t.onActivation(Mt),Q(),Oe(Q)):(Rr(),B=null)}it.assignSyncMedium(Mr);ut.assignMedium(Ee);Cn.assignMedium(function(e){return e(Mt)});const Br=Bn(Tr,Fr)(Sr);var St=s.forwardRef(function(t,n){return s.createElement(me,ue({sideCar:Br,ref:n},t))}),wt=me.propTypes||{};wt.sideCar;kn(wt,["sideCar"]);St.propTypes={};let X=[];const Ce={documentElement:{},body:{}},Ar=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),Rt=e=>{var t;e.touches.length>1||((t=e.preventDefault)==null||t.call(e))},Ir=e=>([t,n])=>{Ce[e][t]=document[e].style[t],document[e].style[t]=n},Nr=()=>Object.entries(Ar).forEach(([e,t])=>{Object.entries(t).forEach(Ir(e))}),_r=e=>([t,n])=>{document[e].style[t]=Ce[e][t]},jr=()=>Object.entries(Ce).forEach(([e,t])=>{Object.entries(t).forEach(_r(e))}),Pr=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function Dr(e){let t=-1;const n=r=>{if(r.targetTouches.length!==1)return;const o=r.targetTouches[0].clientY-t;return e.scrollTop===0&&o>0||Pr(e)&&o<0?Rt(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=n}function Lr(e){e.ontouchstart=null,e.ontouchmove=null}const Tt=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",Rt,{passive:!1}),Jr=Tt(!0),Wr=Tt();function Hr(e){if(!e)throw Error("Could not run setup, an element must be provided");X.some(t=>t===e)||(X.length||(Nr(),Jr()),Dr(e),X.push(e))}function Le(){X.forEach(Lr),Wr(),jr(),X=[]}const Ur=JSON.parse('{"modal.aria.back":"Tilbage","modal.aria.close":"Luk"}'),Xr=JSON.parse('{"modal.aria.back":"Back","modal.aria.close":"Close"}'),qr=JSON.parse('{"modal.aria.back":"Takaisin","modal.aria.close":"Sulje"}'),$r=JSON.parse('{"modal.aria.back":"Tilbake","modal.aria.close":"Lukk"}'),_=({"aria-label":e,"aria-labelledby":t,...n})=>{const r=s.useRef(null),o=rn(n.id),a=s.useRef(null);return nn(Xr,$r,qr,Ur),s.useEffect(()=>()=>Le(),[]),s.useEffect(()=>{Le(),r.current&&n.open&&Hr(r.current)},[n.open,r]),s.useEffect(()=>{var u,l;n.initialFocusRef?(l=n.initialFocusRef.current)==null||l.focus():n.right&&((u=a.current)==null||u.focus())},[n.open,n.initialFocusRef,n.right]),n.open?i.jsx(St,{children:i.jsx("div",{onClick:n.onDismiss,className:P(n.className,b.backdrop),style:{...n.style},children:i.jsxs("div",{role:"dialog","aria-modal":"true",id:o,onClick:u=>{u.stopPropagation()},"aria-label":e,"aria-labelledby":t??(n.title&&!e?`${o}__title`:void 0),onKeyDown:u=>{n.onDismiss&&u.key==="Escape"&&n.onDismiss()},className:b.modal,tabIndex:-1,children:[i.jsxs("div",{className:b.title,children:[typeof n.left=="boolean"&&n.left?i.jsx("button",{type:"button","aria-label":q._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:P(b.transitionTitle,b.titleButton,b.titleButtonLeft),onClick:n.onLeftClick?n.onLeftClick:n.onDismiss,children:i.jsx(yn,{className:P(b.titleButtonIcon)})}):n.left,i.jsx("div",{id:`${o}__title`,className:P(b.transitionTitle,n.left?b.transitionTitleCenter:b.transitionTitleColSpan),children:typeof n.title=="string"?i.jsx("h1",{className:b.titleText,children:n.title}):n.title}),typeof n.right=="boolean"&&n.right?i.jsx("button",{ref:a,type:"button","aria-label":q._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:n.onDismiss,className:P(b.transitionTitle,b.titleButton,b.titleButtonRight),children:i.jsx(Qt,{className:b.titleButtonIcon})}):n.right]}),i.jsx("div",{ref:r,className:b.content,children:n.children}),!!n.footer&&i.jsx("div",{className:b.footer,children:n.footer})]})})}):i.jsx(i.Fragment,{})};_.__docgenInfo={description:"A Modal dialog that renders on top the page",methods:[],displayName:"Modal",props:{title:{required:!1,tsType:{name:"union",raw:"string | JSX.Element | JSX.Element[]",elements:[{name:"string"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A string or your own custom elements"},open:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open or not"},left:{required:!1,tsType:{name:"union",raw:"boolean | JSX.Element | JSX.Element[]",elements:[{name:"boolean"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A default back button or your own custom elements"},right:{required:!1,tsType:{name:"union",raw:"boolean | JSX.Element | JSX.Element[]",elements:[{name:"boolean"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A default close button or your own custom elements"},footer:{required:!1,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"Buttons passed to the footer"},className:{required:!1,tsType:{name:"string"},description:"Additional classes added to the container"},id:{required:!1,tsType:{name:"string"},description:"An id for the container and ARIA attributes. A random id is generated if none is provided."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional styles to the contianer"},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"The modal contents"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler that is called when the user presses *esc* or clicks outside the modal"},onLeftClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler that is called when the user clicks the left button"},"aria-label":{required:!1,tsType:{name:"string"},description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined."},initialFocusRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<any>",elements:[{name:"any"}]},description:"A reference to the element that should be focused. By default it'll be the first interactive element."}}};const ao={title:"Overlays/Modal"},L=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),i.jsxs(i.Fragment,{children:[i.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),i.jsxs(_,{open:e,onDismiss:n,title:"Title of the content goes here",footer:i.jsxs(i.Fragment,{children:[i.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),i.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[i.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),i.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},J=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),i.jsxs(i.Fragment,{children:[i.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),i.jsxs(_,{open:e,left:!0,right:!0,onDismiss:n,onLeftClick:()=>{console.log("left clicked"),n()},title:"Title of the content goes here",footer:i.jsxs(i.Fragment,{children:[i.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),i.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[i.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),i.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},W=()=>{const[e,t]=s.useState(!1),[n,r]=s.useState(!1),o=s.useRef(null);s.useEffect(()=>{var u;e||(r(!1),(u=o.current)==null||u.focus())},[e]);const a=()=>t(!e);return i.jsxs(i.Fragment,{children:[i.jsx(y,{ref:o,utility:!0,onClick:a,children:"Open modal"}),i.jsxs(_,{open:e,onDismiss:a,title:"Do you agree to these terms?",footer:i.jsx(y,{primary:!0,onClick:a,disabled:!n,children:"Accept"}),children:[i.jsx("p",{children:"1. You must give me 10 pushups right now"}),i.jsx(zt,{type:"checkbox",label:"I agree",onChange:r})]})]})},H=()=>{const[e,t]=s.useState(!1),n=()=>t(!e),r=s.useRef(),o=s.useRef(null);return s.useEffect(()=>{var a;e||(a=o.current)==null||a.focus()},[e]),i.jsxs(i.Fragment,{children:[i.jsx(y,{ref:o,utility:!0,onClick:n,children:"Open modal"}),i.jsxs(_,{open:e,onDismiss:n,initialFocusRef:r,title:"Title of the content goes here",footer:i.jsxs(i.Fragment,{children:[i.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),i.jsx(y,{ref:r,primary:!0,onClick:n,children:"Accept"})]}),children:[i.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),i.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Optional link to read more."})]})]})},U=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e&&((o=r.current)==null||o.focus())},[e]),i.jsxs(i.Fragment,{children:[i.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),i.jsx(_,{open:e,onDismiss:n,title:"Title of the content goes here",footer:i.jsxs(i.Fragment,{children:[i.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),i.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[...new Array(10)].map((o,a)=>i.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},a))})]})};L.__docgenInfo={description:"",methods:[],displayName:"Example"};J.__docgenInfo={description:"",methods:[],displayName:"WithBackAndCloseButton"};W.__docgenInfo={description:"",methods:[],displayName:"MustConfirmToProceed"};H.__docgenInfo={description:"",methods:[],displayName:"InitialFocus"};U.__docgenInfo={description:"",methods:[],displayName:"Overflowing"};var Je,We,He;L.parameters={...L.parameters,docs:{...(Je=L.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
}`,...(He=(We=L.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Ue,Xe,qe;J.parameters={...J.parameters,docs:{...(Ue=J.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(qe=(Xe=J.parameters)==null?void 0:Xe.docs)==null?void 0:qe.source}}};var $e,Ge,Ve;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
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
}`,...(Ve=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source}}};var Ye,Ke,ze;H.parameters={...H.parameters,docs:{...(Ye=H.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
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
}`,...(ze=(Ke=H.parameters)==null?void 0:Ke.docs)==null?void 0:ze.source}}};var Qe,Ze,et;U.parameters={...U.parameters,docs:{...(Qe=U.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
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
}`,...(et=(Ze=U.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};const io=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{L as Example,H as InitialFocus,W as MustConfirmToProceed,U as Overflowing,J as WithBackAndCloseButton,io as __namedExportsOrder,ao as default};
