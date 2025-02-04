import{l as a,j as s}from"./index-DUX2OMdT.js";import{r as j}from"./index-unuZPxnm.js";import{r as J}from"./index.m-DF_LekKB.js";import{i as O}from"./index-9vLJjdTH.js";import{a as B}from"./i18n-CaMY4ZeX.js";const _=JSON.parse('{"button.aria.loading":["Indlæser..."]}'),$=JSON.parse('{"button.aria.loading":["Loading..."]}'),I=JSON.parse('{"button.aria.loading":["Ladataan…"]}'),V=JSON.parse('{"button.aria.loading":["Laster..."]}'),W=JSON.parse('{"button.aria.loading":["Laddar ..."]}'),w=["primary","secondary","negative","utility","pill","link"],E=j.forwardRef((n,d)=>{const{primary:u,secondary:g,negative:c,utility:y,quiet:t,small:i,link:b,href:r,pill:S,loading:e,disabled:l,fullWidth:L,...Q}=n,v=g||!w.find(o=>!!n[o]),f=[!i&&!t&&!e&&(l?a.primaryDisabled:a.primary),i&&!t&&!e&&(l?a.primarySmallDisabled:a.primarySmall),i&&t&&!e&&(l?a.primarySmallQuietDisabled:a.primarySmallQuiet),i&&e&&(t?a.primarySmallQuietLoading:a.primarySmallLoading),!i&&t&&!e&&(l?a.primaryQuietDisabled:a.primaryQuiet),!i&&e&&(t?a.primaryQuietLoading:a.primaryLoading)],p=[!i&&!t&&!e&&(l?a.secondaryDisabled:a.secondary),i&&!t&&!e&&(l?a.secondarySmallDisabled:a.secondarySmall),i&&t&&!e&&(l?a.secondarySmallQuietDisabled:a.secondarySmallQuiet),i&&e&&(t?a.secondarySmallQuietLoading:a.secondarySmallLoading),!i&&t&&!e&&(l?a.secondaryQuietDisabled:a.secondaryQuiet),!i&&e&&(t?a.secondaryQuietLoading:a.secondaryLoading)],D=[!i&&!t&&!e&&(l?a.utilityDisabled:a.utility),i&&!t&&!e&&(l?a.utilitySmallDisabled:a.utilitySmall),i&&t&&!e&&(l?a.utilitySmallQuietDisabled:a.utilitySmallQuiet),i&&e&&(t?a.utilitySmallQuietLoading:a.utilitySmallLoading),!i&&t&&!e&&(l?a.utilityQuietDisabled:a.utilityQuiet),!i&&e&&(t?a.utilityQuietLoading:a.utilityLoading)],h=[!i&&!t&&!e&&(l?a.negativeDisabled:a.negative),i&&!t&&!e&&(l?a.negativeSmallDisabled:a.negativeSmall),i&&t&&!e&&(l?a.negativeSmallQuietDisabled:a.negativeSmallQuiet),i&&e&&(t?a.negativeSmallQuietLoading:a.negativeSmallLoading),!i&&t&&!e&&(l?a.negativeQuietDisabled:a.negativeQuiet),!i&&e&&(t?a.negativeQuietLoading:a.negativeLoading)],k=[!e&&(i?a.pillSmall:a.pill),e&&(i?a.pillSmallLoading:a.pillLoading)],x=[i?a.linkSmall:a.link],m=J(n.className,[u&&f,v&&p,y&&D,c&&h,S&&k,b&&x,r&&a.linkAsButton,L?a.fullWidth:a.contentWidth]),C=o=>{n.onClick&&n.onClick(o)};B($,V,I,_,W);const N=O._({id:"button.aria.loading",message:"Loading...",comment:"Screenreader message for buttons that are loading"});return s.jsxs(s.Fragment,{children:[r?s.jsx("a",{onClick:C,"aria-current":n["aria-current"],href:l?void 0:r,target:n.target,rel:n.target==="_blank"?n.rel||"noopener":void 0,ref:d,className:m,role:"button","aria-disabled":l,children:n.children}):s.jsx("button",{...Q,type:n.type||"button",ref:d,className:m,role:n.link?"link":"button",disabled:l,children:n.children}),n.loading?s.jsx("span",{className:"sr-only",role:"progressbar","aria-valuenow":0,"aria-valuetext":N}):null]})});E.__docgenInfo={description:"",methods:[],displayName:"Button"};export{E as B};
