import{f as a,j as b}from"./index-B5Zu8qyh.js";import{r as f}from"./index-RYns6xqu.js";import{r as D}from"./index.m-CtIADANO.js";import{i as h}from"./index-1YnX0IqW.js";import{a as k}from"./i18n-CHMFe01U.js";const x=JSON.parse('{"button.aria.loading":"Indlæser..."}'),N=JSON.parse('{"button.aria.loading":"Loading..."}'),j=JSON.parse('{"button.aria.loading":"Ladataan…"}'),B=JSON.parse('{"button.aria.loading":"Laster..."}'),C=["primary","secondary","negative","utility","pill","link"],J=f.forwardRef((l,g)=>{const{primary:t,secondary:S,negative:n,utility:s,quiet:d,small:i,link:o,pill:u,loading:e,fullWidth:c,...Q}=l,m=S||!C.find(r=>!!l[r]),y=D(l.className,{[a.secondary]:m&&!i&&!d&&!e&&!l.disabled,[a.secondaryDisabled]:m&&!i&&!d&&!e&&l.disabled,[a.secondarySmall]:m&&i&&!d&&!e&&!l.disabled,[a.secondarySmallDisabled]:m&&i&&!d&&!e&&l.disabled,[a.secondarySmallLoading]:m&&i&&!d&&e,[a.secondarySmallQuiet]:m&&i&&d&&!e&&!l.disabled,[a.secondarySmallQuietDisabled]:m&&i&&d&&!e&&l.disabled,[a.secondarySmallQuietLoading]:m&&i&&d&&e,[a.secondaryQuiet]:m&&!i&&d&&!e&&!l.disabled,[a.secondaryQuietDisabled]:m&&!i&&d&&!e&&l.disabled,[a.secondaryQuietLoading]:m&&!i&&d&&e,[a.secondaryLoading]:m&&!i&&!d&&e,[a.primary]:t&&!i&&!d&&!e&&!l.disabled,[a.primaryDisabled]:t&&!i&&!d&&!e&&l.disabled,[a.primarySmall]:t&&i&&!d&&!e&&!l.disabled,[a.primarySmallDisabled]:t&&i&&!d&&!e&&l.disabled,[a.primarySmallQuiet]:t&&i&&d&&!e&&!l.disabled,[a.primarySmallQuietDisabled]:t&&i&&d&&!e&&l.disabled,[a.primarySmallLoading]:t&&i&&!d&&e,[a.primarySmallQuietLoading]:t&&i&&d&&e,[a.primaryQuiet]:t&&!i&&d&&!e&&!l.disabled,[a.primaryQuietDisabled]:t&&!i&&d&&!e&&l.disabled,[a.primaryQuietLoading]:t&&!i&&d&&e,[a.primaryLoading]:t&&!i&&!d&&e,[a.utility]:s&&!i&&!d&&!e&&!l.disabled,[a.utilityDisabled]:s&&!i&&!d&&!e&&l.disabled,[a.utilitySmall]:s&&i&&!d&&!e&&!l.disabled,[a.utilitySmallDisabled]:s&&i&&!d&&!e&&l.disabled,[a.utilitySmallQuiet]:s&&i&&d&&!e&&!l.disabled,[a.utilitySmallQuietDisabled]:s&&i&&d&&!e&&l.disabled,[a.utilitySmallLoading]:s&&i&&!d&&e,[a.utilitySmallQuietLoading]:s&&i&&d&&e,[a.utilityQuiet]:s&&!i&&d&&!e&&!l.disabled,[a.utilityQuietDisabled]:s&&!i&&d&&!e&&l.disabled,[a.utilityQuietLoading]:s&&!i&&d&&e,[a.utilityLoading]:s&&!i&&!d&&e,[a.negative]:n&&!i&&!d&&!e&&!l.disabled,[a.negativeDisabled]:n&&!i&&!d&&!e&&l.disabled,[a.negativeSmall]:n&&i&&!d&&!e&&!l.disabled,[a.negativeSmallDisabled]:n&&i&&!d&&!e&&l.disabled,[a.negativeSmallQuiet]:n&&i&&d&&!e&&!l.disabled,[a.negativeSmallQuietDisabled]:n&&i&&d&&!e&&l.disabled,[a.negativeSmallLoading]:n&&i&&!d&&e,[a.negativeSmallQuietLoading]:n&&i&&d&&e,[a.negativeQuiet]:n&&!i&&d&&!e&&!l.disabled,[a.negativeQuietDisabled]:n&&!i&&d&&!e&&l.disabled,[a.negativeQuietLoading]:n&&!i&&d&&e,[a.negativeLoading]:n&&!i&&!d&&e,[a.pill]:u&&!i&&!e,[a.pillSmall]:u&&i&&!e,[a.pillLoading]:u&&!i&&e,[a.pillSmallLoading]:u&&i&&e,[a.link]:o&&!i,[a.linkSmall]:o&&i,[a.linkAsButton]:!!l.href,[a.fullWidth]:c,[a.contentWidth]:!c}),L=r=>{l.onClick&&l.onClick(r)};k(N,B,j,x);const v=h._({id:"button.aria.loading",message:"Loading...",comment:"Screenreader message for buttons that are loading"});return b.jsxs(b.Fragment,{children:[l.href?b.jsx("a",{onClick:L,"aria-current":l["aria-current"],href:l.disabled?void 0:l.href,target:l.target,rel:l.target==="_blank"?l.rel||"noopener":void 0,ref:g,className:y,role:"button","aria-disabled":l.disabled,children:l.children}):b.jsx("button",{...Q,type:l.type||"button",ref:g,className:y,role:l.link?"link":"button",children:l.children}),l.loading?b.jsx("span",{className:"sr-only",role:"progressbar","aria-valuenow":0,"aria-valuetext":v}):null]})});J.__docgenInfo={description:"",methods:[],displayName:"Button"};export{J as B};
