import{j as u,C as b}from"./index-BUlP55RO.js";import{R as ot,r as c}from"./index-RYns6xqu.js";import{B as y}from"./component-0pMDiltq.js";import{T as nn}from"./component-h6vbxwOl.js";import{r as K}from"./index.m-CtIADANO.js";import{i as X}from"./index-1YnX0IqW.js";import{c as rn}from"./close-16-0TgEVJUF.js";import{_ as ce,a as on}from"./inheritsLoose-Bt6Ne3b9.js";import{a as an}from"./i18n-CHMFe01U.js";import{u as un}from"./help-text-Jf_bghft.js";import"./item-D3nzUygf.js";var cn={},sn=Object.defineProperty,Ae=Object.getOwnPropertySymbols,ln=Object.prototype.hasOwnProperty,fn=Object.prototype.propertyIsEnumerable,Ne=(e,t,n)=>t in e?sn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dn=(e,t)=>{for(var n in t||(t={}))ln.call(t,n)&&Ne(e,n,t[n]);if(Ae)for(var n of Ae(t))fn.call(t,n)&&Ne(e,n,t[n]);return e},mn=JSON.parse('{"icon.title.arrow-left":"Pil som peker mot venstre"}'),vn=JSON.parse('{"icon.title.arrow-left":"Leftward-pointing arrow"}'),pn=JSON.parse('{"icon.title.arrow-left":"Vasemmalle osoittava nuoli"}'),hn=JSON.parse('{"icon.title.arrow-left":"Pil til venstre"}'),at=["en","nb","fi","da","sv"],it="en",gn=()=>{var e;let t;switch((e=process==null?void 0:cn)==null?void 0:e.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},ut=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t!=null&&t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":it},ne=e=>at.find(t=>e===t||e.toLowerCase().includes(t))||ut();function bn(){var e;if(typeof window>"u"){const t=gn();return ne(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=ut();return at.includes(t)?ne(t??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),ne(n))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),it}}var yn=(e,t,n,r,o)=>e==="nb"?n:e==="fi"?r:e==="da"?o:t,En=(e,t,n,r)=>{const o=bn(),a=yn(o,e,t,n,r);X.load(o,a),X.activate(o)};En(vn,mn,pn,hn);var kn=X.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"}),On=e=>ot.createElement("svg",dn({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${kn}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path>`}},e)),xn=On;function Cn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}var se="data-focus-lock",ct="data-focus-lock-disabled",Sn="data-no-focus-lock",Mn="data-autofocus-inside",wn="data-no-autofocus";function re(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Rn(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Tn=typeof window<"u"?c.useLayoutEffect:c.useEffect,_e=new WeakMap;function Fn(e,t){var n=Rn(null,function(r){return e.forEach(function(o){return re(o,r)})});return Tn(function(){var r=_e.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(s){a.has(s)||re(s,null)}),a.forEach(function(s){o.has(s)||re(s,i)})}_e.set(n,e)},[e]),n}var oe={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},le=function(){return le=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},le.apply(this,arguments)};function st(e){return e}function lt(e,t){t===void 0&&(t=st);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(s){return s!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(s){return a(s)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var s=n;n=[],s.forEach(a),i=n}var h=function(){var d=i;i=[],d.forEach(a)},l=function(){return Promise.resolve().then(h)};l(),n={push:function(d){i.push(d),l()},filter:function(d){return i=i.filter(d),n}}}};return o}function ve(e,t){return t===void 0&&(t=st),lt(e,t)}function In(e){e===void 0&&(e={});var t=lt(null);return t.options=le({async:!0,ssr:!1},e),t}var ft=ve({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),dt=ve(),Bn=ve(),An=In({async:!0,ssr:typeof document<"u"}),Nn=c.createContext(void 0),_n=[],pe=c.forwardRef(function(t,n){var r,o=c.useState(),a=o[0],i=o[1],s=c.useRef(),h=c.useRef(!1),l=c.useRef(null),d=c.useState({}),f=d[1],v=t.children,g=t.disabled,m=g===void 0?!1:g,p=t.noFocusGuards,E=p===void 0?!1:p,O=t.persistentFocus,k=O===void 0?!1:O,C=t.crossFrame,V=C===void 0?!0:C,j=t.autoFocus,_t=j===void 0?!0:j;t.allowTextSelection;var jt=t.group,Pt=t.className,Dt=t.whiteList,Lt=t.hasPositiveIndices,we=t.shards,Z=we===void 0?_n:we,Re=t.as,Jt=Re===void 0?"div":Re,Te=t.lockProps,Wt=Te===void 0?{}:Te,Ht=t.sideCar,Fe=t.returnFocus,Y=Fe===void 0?!1:Fe,Ut=t.focusOptions,ee=t.onActivation,te=t.onDeactivation,Xt=c.useState({}),qt=Xt[0],$t=c.useCallback(function(S){var T=S.captureFocusRestore;if(!l.current){var F,M=(F=document)==null?void 0:F.activeElement;l.current=M,M!==document.body&&(l.current=T(M))}s.current&&ee&&ee(s.current),h.current=!0,f()},[ee]),Gt=c.useCallback(function(){h.current=!1,te&&te(s.current),f()},[te]),Vt=c.useCallback(function(S){var T=l.current;if(T){var F=(typeof T=="function"?T():T)||document.body,M=typeof Y=="function"?Y(F):Y;if(M){var Be=typeof M=="object"?M:void 0;l.current=null,S?Promise.resolve().then(function(){return F.focus(Be)}):F.focus(Be)}}},[Y]),Yt=c.useCallback(function(S){h.current&&ft.useMedium(S)},[]),Kt=dt.useMedium,Qt=c.useCallback(function(S){s.current!==S&&(s.current=S,i(S))},[]),zt=ce((r={},r[ct]=m&&"disabled",r[se]=jt,r),Wt),Ie=E!==!0,Zt=Ie&&E!=="tail",en=Fn([n,Qt]),tn=c.useMemo(function(){return{observed:s,shards:Z,enabled:!m,active:h.current}},[m,h.current,Z,a]);return c.createElement(c.Fragment,null,Ie&&[c.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:m?-1:0,style:oe}),Lt?c.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:m?-1:1,style:oe}):null],!m&&c.createElement(Ht,{id:qt,sideCar:An,observed:a,disabled:m,persistentFocus:k,crossFrame:V,autoFocus:_t,whiteList:Dt,shards:Z,onActivation:$t,onDeactivation:Gt,returnFocus:Vt,focusOptions:Ut}),c.createElement(Jt,ce({ref:en},zt,{className:Pt,onBlur:Kt,onFocus:Yt}),c.createElement(Nn.Provider,{value:tn},v)),Zt&&c.createElement("div",{"data-focus-guard":!0,tabIndex:m?-1:0,style:oe}))});pe.propTypes={};function q(e){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(e)}function jn(e,t){if(q(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(q(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Pn(e){var t=jn(e,"string");return q(t)=="symbol"?t:t+""}function Dn(e,t,n){return(t=Pn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ln(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function s(){i=e(a.map(function(l){return l.props})),t(i)}var h=function(l){on(d,l);function d(){return l.apply(this,arguments)||this}d.peek=function(){return i};var f=d.prototype;return f.componentDidMount=function(){a.push(this),s()},f.componentDidUpdate=function(){s()},f.componentWillUnmount=function(){var g=a.indexOf(this);a.splice(g,1),s()},f.render=function(){return ot.createElement(o,this.props)},d}(c.PureComponent);return Dn(h,"displayName","SideEffect("+n(o)+")"),h}}var x=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},R=function(e){return Array.isArray(e)?e:[e]},mt=function(e){return Array.isArray(e)?e[0]:e},Jn=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},vt=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},pt=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},Wn=function(e){return e.hasAttribute("inert")},Hn=function(e,t){return!e||pt(e)||!Jn(e)&&!Wn(e)&&t(vt(e))},ht=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Hn(t,ht.bind(void 0,e));return e.set(t,r),r},Un=function(e,t){return e&&!pt(e)?$n(e)?t(vt(e)):!1:!0},gt=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Un(t,gt.bind(void 0,e));return e.set(t,r),r},bt=function(e){return e.dataset},Xn=function(e){return e.tagName==="BUTTON"},yt=function(e){return e.tagName==="INPUT"},Et=function(e){return yt(e)&&e.type==="radio"},qn=function(e){return!((yt(e)||Xn(e))&&(e.type==="hidden"||e.disabled))},$n=function(e){var t=e.getAttribute(wn);return![!0,"true",""].includes(t)},he=function(e){var t;return!!(e&&(!((t=bt(e))===null||t===void 0)&&t.focusGuard))},fe=function(e){return!he(e)},Gn=function(e){return!!e},Vn=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},Yn=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},ge=function(e,t,n){return x(e).map(function(r,o){var a=Yn(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(Vn)},Kn=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],be=Kn.join(","),Qn="".concat(be,", [data-focus-guard]"),kt=function(e,t){return x((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?Qn:be)?[r]:[],kt(r))},[])},zn=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?N([e.contentDocument.body],t):[e]},N=function(e,t){return e.reduce(function(n,r){var o,a=kt(r,t),i=(o=[]).concat.apply(o,a.map(function(s){return zn(s,t)}));return n.concat(i,r.parentNode?x(r.parentNode.querySelectorAll(be)).filter(function(s){return s===r}):[])},[])},Zn=function(e){var t=e.querySelectorAll("[".concat(Mn,"]"));return x(t).map(function(n){return N([n])}).reduce(function(n,r){return n.concat(r)},[])},ye=function(e,t){return x(e).filter(function(n){return ht(t,n)}).filter(function(n){return qn(n)})},je=function(e,t){return t===void 0&&(t=new Map),x(e).filter(function(n){return gt(t,n)})},Ee=function(e,t,n){return ge(ye(N(e,n),t),!0,n)},Q=function(e,t){return ge(ye(N(e),t),!1)},er=function(e,t){return ye(Zn(e),t)},w=function(e,t){return e.shadowRoot?w(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:x(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?w(o,t):!1}return w(n,t)})},tr=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,s){return!t.has(s)})},Ot=function(e){return e.parentNode?Ot(e.parentNode):e},ke=function(e){var t=R(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(se);return n.push.apply(n,o?tr(x(Ot(r).querySelectorAll("[".concat(se,'="').concat(o,'"]:not([').concat(ct,'="disabled"])')))):[r]),n},[])},nr=function(e){try{return e()}catch{return}},$=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?$(t.shadowRoot):t instanceof HTMLIFrameElement&&nr(function(){return t.contentWindow.document})?$(t.contentWindow.document):t}},rr=function(e,t){return e===t},or=function(e,t){return!!x(e.querySelectorAll("iframe")).some(function(n){return rr(n,t)})},xt=function(e,t){return t===void 0&&(t=$(mt(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:ke(e).some(function(n){return w(n,t)||or(n,t)})},ar=function(e){e===void 0&&(e=document);var t=$(e);return t?x(e.querySelectorAll("[".concat(Sn,"]"))).some(function(n){return w(n,t)}):!1},ir=function(e,t){return t.filter(Et).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},Oe=function(e,t){return Et(e)&&e.name?ir(e,t):e},ur=function(e){var t=new Set;return e.forEach(function(n){return t.add(Oe(n,e))}),e.filter(function(n){return t.has(n)})},Pe=function(e){return e[0]&&e.length>1?Oe(e[0],e):e[0]},De=function(e,t){return e.indexOf(Oe(t,e))},de="NEW_FOCUS",cr=function(e,t,n,r,o){var a=e.length,i=e[0],s=e[a-1],h=he(r);if(!(r&&e.indexOf(r)>=0)){var l=r!==void 0?n.indexOf(r):-1,d=o?n.indexOf(o):l,f=o?e.indexOf(o):-1;if(l===-1)return f!==-1?f:de;if(f===-1)return de;var v=l-d,g=n.indexOf(i),m=n.indexOf(s),p=ur(n),E=r!==void 0?p.indexOf(r):-1,O=E-(o?p.indexOf(o):l);if(!v&&f>=0||t.length===0)return f;var k=De(e,t[0]),C=De(e,t[t.length-1]);if(l<=g&&h&&Math.abs(v)>1)return C;if(l>=m&&h&&Math.abs(v)>1)return k;if(v&&Math.abs(O)>1)return f;if(l<=g)return C;if(l>m)return k;if(v)return Math.abs(v)>1?f:(a+f+v)%a}},sr=function(e){return function(t){var n,r=(n=bt(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},Le=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=je(r.filter(sr(n)));return o&&o.length?Pe(o):Pe(je(t))},me=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&me(e.parentNode.host||e.parentNode,t),t},ae=function(e,t){for(var n=me(e),r=me(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},Ct=function(e,t,n){var r=R(e),o=R(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(s){i=ae(i||s,s)||i,n.filter(Boolean).forEach(function(h){var l=ae(a,h);l&&(!i||w(l,i)?i=l:i=ae(l,i))})}),i},Je=function(e,t){return e.reduce(function(n,r){return n.concat(er(r,t))},[])},lr=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(Gn)},fr=function(e,t){var n=$(R(e).length>0?document:mt(e).ownerDocument),r=ke(e).filter(fe),o=Ct(n||e,e,r),a=new Map,i=Q(r,a),s=i.filter(function(m){var p=m.node;return fe(p)});if(s[0]){var h=Q([o],a).map(function(m){var p=m.node;return p}),l=lr(h,s),d=l.map(function(m){var p=m.node;return p}),f=l.filter(function(m){var p=m.tabIndex;return p>=0}).map(function(m){var p=m.node;return p}),v=cr(d,f,h,n,t);if(v===de){var g=Le(i,f,Je(r,a))||Le(i,d,Je(r,a));if(g)return{node:g};console.warn("focus-lock: cannot find any node to move focus into");return}return v===void 0?v:l[v]}},dr=function(e){var t=ke(e).filter(fe),n=Ct(e,e,t),r=ge(N([n],!0),!0,!0),o=N(t,!1);return r.map(function(a){var i=a.node,s=a.index;return{node:i,index:s,lockItem:o.indexOf(i)>=0,guard:he(i)}})},xe=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},ie=0,ue=!1,St=function(e,t,n){n===void 0&&(n={});var r=fr(e,t);if(!ue&&r){if(ie>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),ue=!0,setTimeout(function(){ue=!1},1);return}ie++,xe(r.node,n.focusOptions),ie--}};function P(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var mr=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:P(n),parent:P(n.parentElement),left:P(n.previousElementSibling),right:P(n.nextElementSibling)}),n=n.parentElement;return{element:P(e),stack:t,ownerDocument:e.ownerDocument}},vr=function(e){var t,n,r,o,a;if(e)for(var i=e.stack,s=e.ownerDocument,h=new Map,l=0,d=i;l<d.length;l++){var f=d[l],v=(t=f.parent)===null||t===void 0?void 0:t.call(f);if(v&&s.contains(v)){for(var g=(n=f.left)===null||n===void 0?void 0:n.call(f),m=f.current(),p=v.contains(m)?m:void 0,E=(r=f.right)===null||r===void 0?void 0:r.call(f),O=Ee([v],h),k=(a=(o=p??(g==null?void 0:g.nextElementSibling))!==null&&o!==void 0?o:E)!==null&&a!==void 0?a:g;k;){for(var C=0,V=O;C<V.length;C++){var j=V[C];if(k!=null&&k.contains(j.node))return j.node}k=k.nextElementSibling}if(O.length)return O[0].node}}},pr=function(e){var t=mr(e);return function(){return vr(t)}},hr=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=R(t);if(r.every(function(i){return!w(i,e)}))return console.error("Active element is not contained in the scope"),{};var o=n?Ee(r,new Map):Q(r,new Map),a=o.findIndex(function(i){var s=i.node;return s===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},gr=function(e,t){var n=t?Ee(R(e),new Map):Q(R(e),new Map);return{first:n[0],last:n[n.length-1]}},br=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},Mt=function(e,t,n){t===void 0&&(t={});var r=br(t),o=hr(e,r.scope,r.onlyTabbable);if(o){var a=n(o,r.cycle);a&&xe(a.node,r.focusOptions)}},yr=function(e,t){t===void 0&&(t={}),Mt(e,t,function(n,r){var o=n.next,a=n.first;return o||r&&a})},Er=function(e,t){t===void 0&&(t={}),Mt(e,t,function(n,r){var o=n.prev,a=n.last;return o||r&&a})},wt=function(e,t,n){var r,o=gr(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),a=o[n];a&&xe(a.node,t.focusOptions)},kr=function(e,t){t===void 0&&(t={}),wt(e,t,"first")},Or=function(e,t){t===void 0&&(t={}),wt(e,t,"last")};function Ce(e){setTimeout(e,1)}var xr=function(t){return t&&"current"in t?t.current:t},Cr=function(){return document&&document.activeElement===document.body},Sr=function(){return Cr()||ar()},B=null,I=null,A=null,G=!1,Mr=function(){return!0},wr=function(t){return(B.whiteList||Mr)(t)},Rr=function(t,n){A={observerNode:t,portaledElement:n}},Tr=function(t){return A&&A.portaledElement===t};function We(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var Fr=function(t){return t?!!G:G==="meanwhile"},Ir=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},Br=function(t,n){return n.some(function(r){return Ir(t,r,r)})},z=function(){var t=!1;if(B){var n=B,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,s=n.crossFrame,h=n.focusOptions,l=r||A&&A.portaledElement,d=document&&document.activeElement;if(l){var f=[l].concat(i.map(xr).filter(Boolean));if((!d||wr(d))&&(o||Fr(s)||!Sr()||!I&&a)&&(l&&!(xt(f)||d&&Br(d,f)||Tr(d))&&(document&&!I&&d&&!a?(d.blur&&d.blur(),document.body.focus()):(t=St(f,I,{focusOptions:h}),A={})),G=!1,I=document&&document.activeElement),document&&d!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var v=document&&document.activeElement,g=dr(f),m=g.map(function(p){var E=p.node;return E}).indexOf(v);m>-1&&(g.filter(function(p){var E=p.guard,O=p.node;return E&&O.dataset.focusAutoGuard}).forEach(function(p){var E=p.node;return E.removeAttribute("tabIndex")}),We(m,g.length,1,g),We(m,-1,-1,g))}}}return t},Rt=function(t){z()&&t&&(t.stopPropagation(),t.preventDefault())},Se=function(){return Ce(z)},Ar=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||Rr(r,n)},Nr=function(){return null},Tt=function(){G="just",Ce(function(){G="meanwhile"})},_r=function(){document.addEventListener("focusin",Rt),document.addEventListener("focusout",Se),window.addEventListener("blur",Tt)},jr=function(){document.removeEventListener("focusin",Rt),document.removeEventListener("focusout",Se),window.removeEventListener("blur",Tt)};function Pr(e){return e.filter(function(t){var n=t.disabled;return!n})}var Ft={moveFocusInside:St,focusInside:xt,focusNextElement:yr,focusPrevElement:Er,focusFirstElement:kr,focusLastElement:Or,captureFocusRestore:pr};function Dr(e){var t=e.slice(-1)[0];t&&!B&&_r();var n=B,r=n&&t&&t.id===n.id;B=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(I=null,(!r||n.observed!==t.observed)&&t.onActivation(Ft),z(),Ce(z)):(jr(),I=null)}ft.assignSyncMedium(Ar);dt.assignMedium(Se);Bn.assignMedium(function(e){return e(Ft)});const Lr=Ln(Pr,Dr)(Nr);var It=c.forwardRef(function(t,n){return c.createElement(pe,ce({sideCar:Lr,ref:n},t))}),Bt=pe.propTypes||{};Bt.sideCar;Cn(Bt,["sideCar"]);It.propTypes={};let U=[];const Me={documentElement:{},body:{}},Jr=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),At=e=>{var t;e.touches.length>1||((t=e.preventDefault)==null||t.call(e))},Wr=e=>([t,n])=>{Me[e][t]=document[e].style[t],document[e].style[t]=n},Hr=()=>Object.entries(Jr).forEach(([e,t])=>{Object.entries(t).forEach(Wr(e))}),Ur=e=>([t,n])=>{document[e].style[t]=Me[e][t]},Xr=()=>Object.entries(Me).forEach(([e,t])=>{Object.entries(t).forEach(Ur(e))}),qr=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function $r(e){let t=-1;const n=r=>{if(r.targetTouches.length!==1)return;const o=r.targetTouches[0].clientY-t;return e.scrollTop===0&&o>0||qr(e)&&o<0?At(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=n}function Gr(e){e.ontouchstart=null,e.ontouchmove=null}const Nt=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",At,{passive:!1}),Vr=Nt(!0),Yr=Nt();function Kr(e){if(!e)throw Error("Could not run setup, an element must be provided");U.some(t=>t===e)||(U.length||(Hr(),Vr()),$r(e),U.push(e))}function He(){U.forEach(Gr),Yr(),Xr(),U=[]}const Qr=JSON.parse('{"modal.aria.back":"Tilbage","modal.aria.close":"Luk"}'),zr=JSON.parse('{"modal.aria.back":"Back","modal.aria.close":"Close"}'),Zr=JSON.parse('{"modal.aria.back":"Takaisin","modal.aria.close":"Sulje"}'),eo=JSON.parse('{"modal.aria.back":"Tilbake","modal.aria.close":"Lukk"}'),_=({"aria-label":e,"aria-labelledby":t,...n})=>{const r=c.useRef(null),o=un(n.id),a=c.useRef(null);return an(zr,eo,Zr,Qr),c.useEffect(()=>()=>He(),[]),c.useEffect(()=>{He(),r.current&&n.open&&Kr(r.current)},[n.open,r]),c.useEffect(()=>{var i,s;n.initialFocusRef?(s=n.initialFocusRef.current)==null||s.focus():n.right&&((i=a.current)==null||i.focus())},[n.open,n.initialFocusRef,n.right]),n.open?u.jsx(It,{children:u.jsx("div",{onClick:n.onDismiss,className:K(n.className,b.backdrop),style:{...n.style},children:u.jsxs("div",{role:"dialog","aria-modal":"true",id:o,onClick:i=>i.stopPropagation(),"aria-label":e,"aria-labelledby":t??(n.title&&!e?`${o}__title`:void 0),onKeyDown:i=>{n.onDismiss&&i.key==="Escape"&&n.onDismiss()},className:b.base,tabIndex:-1,children:[u.jsxs("div",{className:b.title,children:[typeof n.left=="boolean"&&n.left?u.jsx("button",{type:"button","aria-label":X._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:K([b.transitionTitle,b.titleButton,b.titleButtonLeft]),onClick:n.onLeftClick?n.onLeftClick:n.onDismiss,children:u.jsx(xn,{className:b.titleButtonIcon})}):n.left,u.jsx("div",{id:`${o}__title`,className:K([b.transitionTitle,n.left?b.transitionTitleCenter:b.transitionTitleColSpan]),children:typeof n.title=="string"?u.jsx("h1",{className:b.titleText,children:n.title}):n.title}),typeof n.right=="boolean"&&n.right?u.jsx("button",{ref:a,type:"button","aria-label":X._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:n.onDismiss,className:K([b.transitionTitle,b.titleButton,b.titleButtonRight]),children:u.jsx(rn,{className:b.titleButtonIcon})}):n.right]}),u.jsx("div",{ref:r,className:b.content,children:n.children}),!!n.footer&&u.jsx("div",{className:b.footer,children:n.footer})]})})}):u.jsx(u.Fragment,{})};_.__docgenInfo={description:"A Modal dialog that renders on top of the page",methods:[],displayName:"Modal",props:{title:{required:!1,tsType:{name:"union",raw:"string | JSX.Element | JSX.Element[]",elements:[{name:"string"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A string or your own custom elements"},open:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open or not"},left:{required:!1,tsType:{name:"union",raw:"boolean | JSX.Element | JSX.Element[]",elements:[{name:"boolean"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A default back button or your own custom elements"},right:{required:!1,tsType:{name:"union",raw:"boolean | JSX.Element | JSX.Element[]",elements:[{name:"boolean"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A default close button or your own custom elements"},footer:{required:!1,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"Buttons passed to the footer"},className:{required:!1,tsType:{name:"string"},description:"Additional classes added to the container"},id:{required:!1,tsType:{name:"string"},description:"An id for the container and ARIA attributes. A random id is generated if none is provided."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional styles to the contianer"},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"The modal contents"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler that is called when the user presses *esc* or clicks outside the modal"},onLeftClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler that is called when the user clicks the left button"},"aria-label":{required:!1,tsType:{name:"string"},description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined."},initialFocusRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<any>",elements:[{name:"any"}]},description:"A reference to the element that should be focused. By default it'll be the first interactive element."}}};const mo={title:"Overlays/Modal"},D=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(_,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},L=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(_,{open:e,left:!0,right:!0,onDismiss:n,onLeftClick:()=>{console.log("left clicked"),n()},title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},J=()=>{const[e,t]=c.useState(!1),[n,r]=c.useState(!1),o=c.useRef(null);c.useEffect(()=>{var i;e||(r(!1),(i=o.current)==null||i.focus())},[e]);const a=()=>t(!e);return u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:o,utility:!0,onClick:a,children:"Open modal"}),u.jsxs(_,{open:e,onDismiss:a,title:"Do you agree to these terms?",footer:u.jsx(y,{primary:!0,onClick:a,disabled:!n,children:"Accept"}),children:[u.jsx("p",{children:"1. You must give me 10 pushups right now"}),u.jsx(nn,{type:"checkbox",label:"I agree",onChange:r})]})]})},W=()=>{const[e,t]=c.useState(!1),n=()=>t(!e),r=c.useRef(),o=c.useRef(null);return c.useEffect(()=>{var a;e||(a=o.current)==null||a.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:o,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(_,{open:e,onDismiss:n,initialFocusRef:r,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{ref:r,primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Optional link to read more."})]})]})},H=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e&&((o=r.current)==null||o.focus())},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsx(_,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[...new Array(10)].map((o,a)=>u.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},a))})]})};D.__docgenInfo={description:"",methods:[],displayName:"Example"};L.__docgenInfo={description:"",methods:[],displayName:"WithBackAndCloseButton"};J.__docgenInfo={description:"",methods:[],displayName:"MustConfirmToProceed"};W.__docgenInfo={description:"",methods:[],displayName:"InitialFocus"};H.__docgenInfo={description:"",methods:[],displayName:"Overflowing"};var Ue,Xe,qe;D.parameters={...D.parameters,docs:{...(Ue=D.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(qe=(Xe=D.parameters)==null?void 0:Xe.docs)==null?void 0:qe.source}}};var $e,Ge,Ve;L.parameters={...L.parameters,docs:{...($e=L.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
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
}`,...(Ve=(Ge=L.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source}}};var Ye,Ke,Qe;J.parameters={...J.parameters,docs:{...(Ye=J.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
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
}`,...(Qe=(Ke=J.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var ze,Ze,et;W.parameters={...W.parameters,docs:{...(ze=W.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
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
}`,...(et=(Ze=W.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,rt;H.parameters={...H.parameters,docs:{...(tt=H.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
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
}`,...(rt=(nt=H.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};const vo=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{D as Example,W as InitialFocus,J as MustConfirmToProceed,H as Overflowing,L as WithBackAndCloseButton,vo as __namedExportsOrder,mo as default};
