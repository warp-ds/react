import{j as u,C as b}from"./index-ByHan1Yq.js";import{R as ot,r as s}from"./index-wSCK2UMg.js";import{B as y}from"./component-CJb2L8a2.js";import{T as nn}from"./component-CDYPmTtN.js";import{r as K}from"./index.m-CtIADANO.js";import{i as X}from"./index-CO0CvHzQ.js";import{c as rn}from"./close-16-BYNUk4mZ.js";import{_ as se,a as on}from"./inheritsLoose-Bt6Ne3b9.js";import{a as an}from"./i18n-D_GeL-Ou.js";import{u as un}from"./help-text-DD1vYDq4.js";import"./item-BZ6-5TON.js";var sn={},cn=Object.defineProperty,Ae=Object.getOwnPropertySymbols,ln=Object.prototype.hasOwnProperty,fn=Object.prototype.propertyIsEnumerable,Ne=(e,t,n)=>t in e?cn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dn=(e,t)=>{for(var n in t||(t={}))ln.call(t,n)&&Ne(e,n,t[n]);if(Ae)for(var n of Ae(t))fn.call(t,n)&&Ne(e,n,t[n]);return e},mn=JSON.parse('{"icon.title.arrow-left":"Pil som peker mot venstre"}'),vn=JSON.parse('{"icon.title.arrow-left":"Leftward-pointing arrow"}'),pn=JSON.parse('{"icon.title.arrow-left":"Vasemmalle osoittava nuoli"}'),hn=JSON.parse('{"icon.title.arrow-left":"Pil til venstre"}'),gn=JSON.parse('{"icon.title.arrow-left":"Pil som pekar vänster"}'),at=["en","nb","fi","da","sv"],it="en",bn=()=>{var e;let t;switch((e=process==null?void 0:sn)==null?void 0:e.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},ut=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t!=null&&t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":it},ne=e=>at.find(t=>e===t||e.toLowerCase().includes(t))||ut();function yn(){var e;if(typeof window>"u"){const t=bn();return ne(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=ut();return at.includes(t)?ne(t??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),ne(n))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),it}}var kn=(e,t,n,r,o,a)=>e==="nb"?n:e==="fi"?r:e==="da"?o:e==="sv"?a:t,En=(e,t,n,r,o)=>{const a=yn(),i=kn(a,e,t,n,r,o);X.load(a,i),X.activate(a)};En(vn,mn,pn,hn,gn);var On=X.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"}),xn=e=>ot.createElement("svg",dn({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${On}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path>`}},e)),Sn=xn;function Cn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}var ce="data-focus-lock",st="data-focus-lock-disabled",wn="data-no-focus-lock",Mn="data-autofocus-inside",Rn="data-no-autofocus";function re(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Tn(e,t){var n=s.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Fn=typeof window<"u"?s.useLayoutEffect:s.useEffect,_e=new WeakMap;function In(e,t){var n=Tn(null,function(r){return e.forEach(function(o){return re(o,r)})});return Fn(function(){var r=_e.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(c){a.has(c)||re(c,null)}),a.forEach(function(c){o.has(c)||re(c,i)})}_e.set(n,e)},[e]),n}var oe={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},le=function(){return le=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},le.apply(this,arguments)};function ct(e){return e}function lt(e,t){t===void 0&&(t=ct);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(c){return c!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(c){return a(c)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var c=n;n=[],c.forEach(a),i=n}var h=function(){var d=i;i=[],d.forEach(a)},l=function(){return Promise.resolve().then(h)};l(),n={push:function(d){i.push(d),l()},filter:function(d){return i=i.filter(d),n}}}};return o}function ve(e,t){return t===void 0&&(t=ct),lt(e,t)}function Bn(e){e===void 0&&(e={});var t=lt(null);return t.options=le({async:!0,ssr:!1},e),t}var ft=ve({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),dt=ve(),An=ve(),Nn=Bn({async:!0,ssr:typeof document<"u"}),_n=s.createContext(void 0),jn=[],pe=s.forwardRef(function(t,n){var r,o=s.useState(),a=o[0],i=o[1],c=s.useRef(),h=s.useRef(!1),l=s.useRef(null),d=s.useState({}),f=d[1],v=t.children,g=t.disabled,m=g===void 0?!1:g,p=t.noFocusGuards,k=p===void 0?!1:p,O=t.persistentFocus,E=O===void 0?!1:O,S=t.crossFrame,V=S===void 0?!0:S,j=t.autoFocus,_t=j===void 0?!0:j;t.allowTextSelection;var jt=t.group,Pt=t.className,Dt=t.whiteList,Lt=t.hasPositiveIndices,Me=t.shards,Z=Me===void 0?jn:Me,Re=t.as,Jt=Re===void 0?"div":Re,Te=t.lockProps,Wt=Te===void 0?{}:Te,Ht=t.sideCar,Fe=t.returnFocus,Y=Fe===void 0?!1:Fe,Ut=t.focusOptions,ee=t.onActivation,te=t.onDeactivation,Xt=s.useState({}),qt=Xt[0],$t=s.useCallback(function(C){var T=C.captureFocusRestore;if(!l.current){var F,w=(F=document)==null?void 0:F.activeElement;l.current=w,w!==document.body&&(l.current=T(w))}c.current&&ee&&ee(c.current),h.current=!0,f()},[ee]),Gt=s.useCallback(function(){h.current=!1,te&&te(c.current),f()},[te]),Vt=s.useCallback(function(C){var T=l.current;if(T){var F=(typeof T=="function"?T():T)||document.body,w=typeof Y=="function"?Y(F):Y;if(w){var Be=typeof w=="object"?w:void 0;l.current=null,C?Promise.resolve().then(function(){return F.focus(Be)}):F.focus(Be)}}},[Y]),Yt=s.useCallback(function(C){h.current&&ft.useMedium(C)},[]),Kt=dt.useMedium,Qt=s.useCallback(function(C){c.current!==C&&(c.current=C,i(C))},[]),zt=se((r={},r[st]=m&&"disabled",r[ce]=jt,r),Wt),Ie=k!==!0,Zt=Ie&&k!=="tail",en=In([n,Qt]),tn=s.useMemo(function(){return{observed:c,shards:Z,enabled:!m,active:h.current}},[m,h.current,Z,a]);return s.createElement(s.Fragment,null,Ie&&[s.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:m?-1:0,style:oe}),Lt?s.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:m?-1:1,style:oe}):null],!m&&s.createElement(Ht,{id:qt,sideCar:Nn,observed:a,disabled:m,persistentFocus:E,crossFrame:V,autoFocus:_t,whiteList:Dt,shards:Z,onActivation:$t,onDeactivation:Gt,returnFocus:Vt,focusOptions:Ut}),s.createElement(Jt,se({ref:en},zt,{className:Pt,onBlur:Kt,onFocus:Yt}),s.createElement(_n.Provider,{value:tn},v)),Zt&&s.createElement("div",{"data-focus-guard":!0,tabIndex:m?-1:0,style:oe}))});pe.propTypes={};function q(e){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(e)}function Pn(e,t){if(q(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(q(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Dn(e){var t=Pn(e,"string");return q(t)=="symbol"?t:t+""}function Ln(e,t,n){return(t=Dn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jn(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function c(){i=e(a.map(function(l){return l.props})),t(i)}var h=function(l){on(d,l);function d(){return l.apply(this,arguments)||this}d.peek=function(){return i};var f=d.prototype;return f.componentDidMount=function(){a.push(this),c()},f.componentDidUpdate=function(){c()},f.componentWillUnmount=function(){var g=a.indexOf(this);a.splice(g,1),c()},f.render=function(){return ot.createElement(o,this.props)},d}(s.PureComponent);return Ln(h,"displayName","SideEffect("+n(o)+")"),h}}var x=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},R=function(e){return Array.isArray(e)?e:[e]},mt=function(e){return Array.isArray(e)?e[0]:e},Wn=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},vt=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},pt=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},Hn=function(e){return e.hasAttribute("inert")},Un=function(e,t){return!e||pt(e)||!Wn(e)&&!Hn(e)&&t(vt(e))},ht=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Un(t,ht.bind(void 0,e));return e.set(t,r),r},Xn=function(e,t){return e&&!pt(e)?Gn(e)?t(vt(e)):!1:!0},gt=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Xn(t,gt.bind(void 0,e));return e.set(t,r),r},bt=function(e){return e.dataset},qn=function(e){return e.tagName==="BUTTON"},yt=function(e){return e.tagName==="INPUT"},kt=function(e){return yt(e)&&e.type==="radio"},$n=function(e){return!((yt(e)||qn(e))&&(e.type==="hidden"||e.disabled))},Gn=function(e){var t=e.getAttribute(Rn);return![!0,"true",""].includes(t)},he=function(e){var t;return!!(e&&(!((t=bt(e))===null||t===void 0)&&t.focusGuard))},fe=function(e){return!he(e)},Vn=function(e){return!!e},Yn=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},Kn=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},ge=function(e,t,n){return x(e).map(function(r,o){var a=Kn(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(Yn)},Qn=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],be=Qn.join(","),zn="".concat(be,", [data-focus-guard]"),Et=function(e,t){return x((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?zn:be)?[r]:[],Et(r))},[])},Zn=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?N([e.contentDocument.body],t):[e]},N=function(e,t){return e.reduce(function(n,r){var o,a=Et(r,t),i=(o=[]).concat.apply(o,a.map(function(c){return Zn(c,t)}));return n.concat(i,r.parentNode?x(r.parentNode.querySelectorAll(be)).filter(function(c){return c===r}):[])},[])},er=function(e){var t=e.querySelectorAll("[".concat(Mn,"]"));return x(t).map(function(n){return N([n])}).reduce(function(n,r){return n.concat(r)},[])},ye=function(e,t){return x(e).filter(function(n){return ht(t,n)}).filter(function(n){return $n(n)})},je=function(e,t){return t===void 0&&(t=new Map),x(e).filter(function(n){return gt(t,n)})},ke=function(e,t,n){return ge(ye(N(e,n),t),!0,n)},Q=function(e,t){return ge(ye(N(e),t),!1)},tr=function(e,t){return ye(er(e),t)},M=function(e,t){return e.shadowRoot?M(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:x(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?M(o,t):!1}return M(n,t)})},nr=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,c){return!t.has(c)})},Ot=function(e){return e.parentNode?Ot(e.parentNode):e},Ee=function(e){var t=R(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(ce);return n.push.apply(n,o?nr(x(Ot(r).querySelectorAll("[".concat(ce,'="').concat(o,'"]:not([').concat(st,'="disabled"])')))):[r]),n},[])},rr=function(e){try{return e()}catch{return}},$=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?$(t.shadowRoot):t instanceof HTMLIFrameElement&&rr(function(){return t.contentWindow.document})?$(t.contentWindow.document):t}},or=function(e,t){return e===t},ar=function(e,t){return!!x(e.querySelectorAll("iframe")).some(function(n){return or(n,t)})},xt=function(e,t){return t===void 0&&(t=$(mt(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:Ee(e).some(function(n){return M(n,t)||ar(n,t)})},ir=function(e){e===void 0&&(e=document);var t=$(e);return t?x(e.querySelectorAll("[".concat(wn,"]"))).some(function(n){return M(n,t)}):!1},ur=function(e,t){return t.filter(kt).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},Oe=function(e,t){return kt(e)&&e.name?ur(e,t):e},sr=function(e){var t=new Set;return e.forEach(function(n){return t.add(Oe(n,e))}),e.filter(function(n){return t.has(n)})},Pe=function(e){return e[0]&&e.length>1?Oe(e[0],e):e[0]},De=function(e,t){return e.indexOf(Oe(t,e))},de="NEW_FOCUS",cr=function(e,t,n,r,o){var a=e.length,i=e[0],c=e[a-1],h=he(r);if(!(r&&e.indexOf(r)>=0)){var l=r!==void 0?n.indexOf(r):-1,d=o?n.indexOf(o):l,f=o?e.indexOf(o):-1;if(l===-1)return f!==-1?f:de;if(f===-1)return de;var v=l-d,g=n.indexOf(i),m=n.indexOf(c),p=sr(n),k=r!==void 0?p.indexOf(r):-1,O=k-(o?p.indexOf(o):l);if(!v&&f>=0||t.length===0)return f;var E=De(e,t[0]),S=De(e,t[t.length-1]);if(l<=g&&h&&Math.abs(v)>1)return S;if(l>=m&&h&&Math.abs(v)>1)return E;if(v&&Math.abs(O)>1)return f;if(l<=g)return S;if(l>m)return E;if(v)return Math.abs(v)>1?f:(a+f+v)%a}},lr=function(e){return function(t){var n,r=(n=bt(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},Le=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=je(r.filter(lr(n)));return o&&o.length?Pe(o):Pe(je(t))},me=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&me(e.parentNode.host||e.parentNode,t),t},ae=function(e,t){for(var n=me(e),r=me(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},St=function(e,t,n){var r=R(e),o=R(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(c){i=ae(i||c,c)||i,n.filter(Boolean).forEach(function(h){var l=ae(a,h);l&&(!i||M(l,i)?i=l:i=ae(l,i))})}),i},Je=function(e,t){return e.reduce(function(n,r){return n.concat(tr(r,t))},[])},fr=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(Vn)},dr=function(e,t){var n=$(R(e).length>0?document:mt(e).ownerDocument),r=Ee(e).filter(fe),o=St(n||e,e,r),a=new Map,i=Q(r,a),c=i.filter(function(m){var p=m.node;return fe(p)});if(c[0]){var h=Q([o],a).map(function(m){var p=m.node;return p}),l=fr(h,c),d=l.map(function(m){var p=m.node;return p}),f=l.filter(function(m){var p=m.tabIndex;return p>=0}).map(function(m){var p=m.node;return p}),v=cr(d,f,h,n,t);if(v===de){var g=Le(i,f,Je(r,a))||Le(i,d,Je(r,a));if(g)return{node:g};console.warn("focus-lock: cannot find any node to move focus into");return}return v===void 0?v:l[v]}},mr=function(e){var t=Ee(e).filter(fe),n=St(e,e,t),r=ge(N([n],!0),!0,!0),o=N(t,!1);return r.map(function(a){var i=a.node,c=a.index;return{node:i,index:c,lockItem:o.indexOf(i)>=0,guard:he(i)}})},xe=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},ie=0,ue=!1,Ct=function(e,t,n){n===void 0&&(n={});var r=dr(e,t);if(!ue&&r){if(ie>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),ue=!0,setTimeout(function(){ue=!1},1);return}ie++,xe(r.node,n.focusOptions),ie--}};function P(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var t=e?new WeakRef(e):null;return function(){return(t==null?void 0:t.deref())||null}}var vr=function(e){if(!e)return null;for(var t=[],n=e;n&&n!==document.body;)t.push({current:P(n),parent:P(n.parentElement),left:P(n.previousElementSibling),right:P(n.nextElementSibling)}),n=n.parentElement;return{element:P(e),stack:t,ownerDocument:e.ownerDocument}},pr=function(e){var t,n,r,o,a;if(e)for(var i=e.stack,c=e.ownerDocument,h=new Map,l=0,d=i;l<d.length;l++){var f=d[l],v=(t=f.parent)===null||t===void 0?void 0:t.call(f);if(v&&c.contains(v)){for(var g=(n=f.left)===null||n===void 0?void 0:n.call(f),m=f.current(),p=v.contains(m)?m:void 0,k=(r=f.right)===null||r===void 0?void 0:r.call(f),O=ke([v],h),E=(a=(o=p??(g==null?void 0:g.nextElementSibling))!==null&&o!==void 0?o:k)!==null&&a!==void 0?a:g;E;){for(var S=0,V=O;S<V.length;S++){var j=V[S];if(E!=null&&E.contains(j.node))return j.node}E=E.nextElementSibling}if(O.length)return O[0].node}}},hr=function(e){var t=vr(e);return function(){return pr(t)}},gr=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=R(t);if(r.every(function(i){return!M(i,e)}))return console.error("Active element is not contained in the scope"),{};var o=n?ke(r,new Map):Q(r,new Map),a=o.findIndex(function(i){var c=i.node;return c===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},br=function(e,t){var n=t?ke(R(e),new Map):Q(R(e),new Map);return{first:n[0],last:n[n.length-1]}},yr=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},wt=function(e,t,n){t===void 0&&(t={});var r=yr(t),o=gr(e,r.scope,r.onlyTabbable);if(o){var a=n(o,r.cycle);a&&xe(a.node,r.focusOptions)}},kr=function(e,t){t===void 0&&(t={}),wt(e,t,function(n,r){var o=n.next,a=n.first;return o||r&&a})},Er=function(e,t){t===void 0&&(t={}),wt(e,t,function(n,r){var o=n.prev,a=n.last;return o||r&&a})},Mt=function(e,t,n){var r,o=br(e,(r=t.onlyTabbable)!==null&&r!==void 0?r:!0),a=o[n];a&&xe(a.node,t.focusOptions)},Or=function(e,t){t===void 0&&(t={}),Mt(e,t,"first")},xr=function(e,t){t===void 0&&(t={}),Mt(e,t,"last")};function Se(e){setTimeout(e,1)}var Sr=function(t){return t&&"current"in t?t.current:t},Cr=function(){return document&&document.activeElement===document.body},wr=function(){return Cr()||ir()},B=null,I=null,A=null,G=!1,Mr=function(){return!0},Rr=function(t){return(B.whiteList||Mr)(t)},Tr=function(t,n){A={observerNode:t,portaledElement:n}},Fr=function(t){return A&&A.portaledElement===t};function We(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var Ir=function(t){return t?!!G:G==="meanwhile"},Br=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},Ar=function(t,n){return n.some(function(r){return Br(t,r,r)})},z=function(){var t=!1;if(B){var n=B,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,c=n.crossFrame,h=n.focusOptions,l=r||A&&A.portaledElement,d=document&&document.activeElement;if(l){var f=[l].concat(i.map(Sr).filter(Boolean));if((!d||Rr(d))&&(o||Ir(c)||!wr()||!I&&a)&&(l&&!(xt(f)||d&&Ar(d,f)||Fr(d))&&(document&&!I&&d&&!a?(d.blur&&d.blur(),document.body.focus()):(t=Ct(f,I,{focusOptions:h}),A={})),G=!1,I=document&&document.activeElement),document&&d!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var v=document&&document.activeElement,g=mr(f),m=g.map(function(p){var k=p.node;return k}).indexOf(v);m>-1&&(g.filter(function(p){var k=p.guard,O=p.node;return k&&O.dataset.focusAutoGuard}).forEach(function(p){var k=p.node;return k.removeAttribute("tabIndex")}),We(m,g.length,1,g),We(m,-1,-1,g))}}}return t},Rt=function(t){z()&&t&&(t.stopPropagation(),t.preventDefault())},Ce=function(){return Se(z)},Nr=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||Tr(r,n)},_r=function(){return null},Tt=function(){G="just",Se(function(){G="meanwhile"})},jr=function(){document.addEventListener("focusin",Rt),document.addEventListener("focusout",Ce),window.addEventListener("blur",Tt)},Pr=function(){document.removeEventListener("focusin",Rt),document.removeEventListener("focusout",Ce),window.removeEventListener("blur",Tt)};function Dr(e){return e.filter(function(t){var n=t.disabled;return!n})}var Ft={moveFocusInside:Ct,focusInside:xt,focusNextElement:kr,focusPrevElement:Er,focusFirstElement:Or,focusLastElement:xr,captureFocusRestore:hr};function Lr(e){var t=e.slice(-1)[0];t&&!B&&jr();var n=B,r=n&&t&&t.id===n.id;B=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(I=null,(!r||n.observed!==t.observed)&&t.onActivation(Ft),z(),Se(z)):(Pr(),I=null)}ft.assignSyncMedium(Nr);dt.assignMedium(Ce);An.assignMedium(function(e){return e(Ft)});const Jr=Jn(Dr,Lr)(_r);var It=s.forwardRef(function(t,n){return s.createElement(pe,se({sideCar:Jr,ref:n},t))}),Bt=pe.propTypes||{};Bt.sideCar;Cn(Bt,["sideCar"]);It.propTypes={};let U=[];const we={documentElement:{},body:{}},Wr=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),At=e=>{var t;e.touches.length>1||((t=e.preventDefault)==null||t.call(e))},Hr=e=>([t,n])=>{we[e][t]=document[e].style[t],document[e].style[t]=n},Ur=()=>Object.entries(Wr).forEach(([e,t])=>{Object.entries(t).forEach(Hr(e))}),Xr=e=>([t,n])=>{document[e].style[t]=we[e][t]},qr=()=>Object.entries(we).forEach(([e,t])=>{Object.entries(t).forEach(Xr(e))}),$r=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function Gr(e){let t=-1;const n=r=>{if(r.targetTouches.length!==1)return;const o=r.targetTouches[0].clientY-t;return e.scrollTop===0&&o>0||$r(e)&&o<0?At(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=n}function Vr(e){e.ontouchstart=null,e.ontouchmove=null}const Nt=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",At,{passive:!1}),Yr=Nt(!0),Kr=Nt();function Qr(e){if(!e)throw Error("Could not run setup, an element must be provided");U.some(t=>t===e)||(U.length||(Ur(),Yr()),Gr(e),U.push(e))}function He(){U.forEach(Vr),Kr(),qr(),U=[]}const zr=JSON.parse('{"modal.aria.back":"Tilbage","modal.aria.close":"Luk"}'),Zr=JSON.parse('{"modal.aria.back":"Back","modal.aria.close":"Close"}'),eo=JSON.parse('{"modal.aria.back":"Takaisin","modal.aria.close":"Sulje"}'),to=JSON.parse('{"modal.aria.back":"Tilbake","modal.aria.close":"Lukk"}'),no=JSON.parse('{"modal.aria.back":"Tillbaka","modal.aria.close":"Stäng"}'),_=({"aria-label":e,"aria-labelledby":t,...n})=>{const r=s.useRef(null),o=un(n.id),a=s.useRef(null);return an(Zr,to,eo,zr,no),s.useEffect(()=>()=>He(),[]),s.useEffect(()=>{He(),r.current&&n.open&&Qr(r.current)},[n.open,r]),s.useEffect(()=>{var i,c;n.initialFocusRef?(c=n.initialFocusRef.current)==null||c.focus():n.right&&((i=a.current)==null||i.focus())},[n.open,n.initialFocusRef,n.right]),n.open?u.jsx(It,{children:u.jsx("div",{onClick:n.onDismiss,className:K(n.className,b.backdrop),style:{...n.style},children:u.jsxs("div",{role:"dialog","aria-modal":"true",id:o,onClick:i=>i.stopPropagation(),"aria-label":e,"aria-labelledby":t??(n.title&&!e?`${o}__title`:void 0),onKeyDown:i=>{n.onDismiss&&i.key==="Escape"&&n.onDismiss()},className:b.base,tabIndex:-1,children:[u.jsxs("div",{className:b.title,children:[typeof n.left=="boolean"&&n.left?u.jsx("button",{type:"button","aria-label":X._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:K([b.transitionTitle,b.titleButton,b.titleButtonLeft]),onClick:n.onLeftClick?n.onLeftClick:n.onDismiss,children:u.jsx(Sn,{className:b.titleButtonIcon})}):n.left,u.jsx("div",{id:`${o}__title`,className:K([b.transitionTitle,n.left?b.transitionTitleCenter:b.transitionTitleColSpan]),children:typeof n.title=="string"?u.jsx("h1",{className:b.titleText,children:n.title}):n.title}),typeof n.right=="boolean"&&n.right?u.jsx("button",{ref:a,type:"button","aria-label":X._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:n.onDismiss,className:K([b.transitionTitle,b.titleButton,b.titleButtonRight]),children:u.jsx(rn,{className:b.titleButtonIcon})}):n.right]}),u.jsx("div",{ref:r,className:b.content,children:n.children}),!!n.footer&&u.jsx("div",{className:b.footer,children:n.footer})]})})}):u.jsx(u.Fragment,{})};_.__docgenInfo={description:"A Modal dialog that renders on top of the page",methods:[],displayName:"Modal",props:{title:{required:!1,tsType:{name:"union",raw:"string | JSX.Element | JSX.Element[]",elements:[{name:"string"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A string or your own custom elements"},open:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open or not"},left:{required:!1,tsType:{name:"union",raw:"boolean | JSX.Element | JSX.Element[]",elements:[{name:"boolean"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A default back button or your own custom elements"},right:{required:!1,tsType:{name:"union",raw:"boolean | JSX.Element | JSX.Element[]",elements:[{name:"boolean"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A default close button or your own custom elements"},footer:{required:!1,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"Buttons passed to the footer"},className:{required:!1,tsType:{name:"string"},description:"Additional classes added to the container"},id:{required:!1,tsType:{name:"string"},description:"An id for the container and ARIA attributes. A random id is generated if none is provided."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional styles to the contianer"},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"The modal contents"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler that is called when the user presses *esc* or clicks outside the modal"},onLeftClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler that is called when the user clicks the left button"},"aria-label":{required:!1,tsType:{name:"string"},description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined."},initialFocusRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<any>",elements:[{name:"any"}]},description:"A reference to the element that should be focused. By default it'll be the first interactive element."}}};const po={title:"Overlays/Modal"},D=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(_,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},L=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(_,{open:e,left:!0,right:!0,onDismiss:n,onLeftClick:()=>{console.log("left clicked"),n()},title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},J=()=>{const[e,t]=s.useState(!1),[n,r]=s.useState(!1),o=s.useRef(null);s.useEffect(()=>{var i;e||(r(!1),(i=o.current)==null||i.focus())},[e]);const a=()=>t(!e);return u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:o,utility:!0,onClick:a,children:"Open modal"}),u.jsxs(_,{open:e,onDismiss:a,title:"Do you agree to these terms?",footer:u.jsx(y,{primary:!0,onClick:a,disabled:!n,children:"Accept"}),children:[u.jsx("p",{children:"1. You must give me 10 pushups right now"}),u.jsx(nn,{type:"checkbox",label:"I agree",onChange:r})]})]})},W=()=>{const[e,t]=s.useState(!1),n=()=>t(!e),r=s.useRef(),o=s.useRef(null);return s.useEffect(()=>{var a;e||(a=o.current)==null||a.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:o,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(_,{open:e,onDismiss:n,initialFocusRef:r,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{ref:r,primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Optional link to read more."})]})]})},H=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e&&((o=r.current)==null||o.focus())},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsx(_,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[...new Array(10)].map((o,a)=>u.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},a))})]})};D.__docgenInfo={description:"",methods:[],displayName:"Example"};L.__docgenInfo={description:"",methods:[],displayName:"WithBackAndCloseButton"};J.__docgenInfo={description:"",methods:[],displayName:"MustConfirmToProceed"};W.__docgenInfo={description:"",methods:[],displayName:"InitialFocus"};H.__docgenInfo={description:"",methods:[],displayName:"Overflowing"};var Ue,Xe,qe;D.parameters={...D.parameters,docs:{...(Ue=D.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(rt=(nt=H.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};const ho=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{D as Example,W as InitialFocus,J as MustConfirmToProceed,H as Overflowing,L as WithBackAndCloseButton,ho as __namedExportsOrder,po as default};
