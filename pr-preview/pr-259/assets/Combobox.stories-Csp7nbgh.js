import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{r as g,R as i}from"./index-uubelm5h.js";import{a as h}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{A as De}from"./unstyled-heading-DYD_4XM9.js";import{r as O}from"./index.m-CtIADANO.js";import{q as C}from"./index-3IeVCiwq.js";import{a as Ue}from"./i18n-CHMFe01U.js";import{T as X}from"./component-B0iRFIMb.js";import{g as He,u as Ke}from"./useId-DOeVWIUX.js";import{i as Y}from"./index-1YnX0IqW.js";import"./v4-CQkTLCs1.js";import"./item-CihnVZBZ.js";import"./close-16-CED6tocK.js";const Je=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.noResults":"Ingen resultater"}'),qe=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," result"],"other":["#"," results"]}]],"combobox.aria.noResults":"No results"}'),Ge=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," tulos"],"other":["#"," tulosta"]}]],"combobox.aria.noResults":"Ei tuloksia"}'),ze=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.noResults":"Ingen resultater"}');function Qe(l,a){return l.map(e=>({...e,id:He(),currentInputValue:a}))}function Xe(l,a){if(!l)return;const e=l.filter(u=>u.value.toLowerCase().includes(a.toLowerCase())),s=Y._({id:"combobox.aria.pluralResults",message:"{numResults, plural, one {# result} other {# results}}",comment:"Aria text for combobox when one or more results",values:{numResults:e.length}}),r=Y._({id:"combobox.aria.noResults",message:"No results.....",comment:"Aria text for combobox when no results"});return e.length?s:r}const Ye="w-react-combobox-option",Ze="w-react-combobox-match",p=g.forwardRef(({id:l,...a},e)=>{const s=Ke(l),r=`${s}-listbox`,u=g.useRef(null),m=g.useRef(null),f=g.useRef(null);Ue(qe,ze,Ge,Je);const[x,c]=g.useState(!1),[o,S]=g.useState(null),[v,W]=g.useState([]),{options:U,value:b,label:_e,invalid:Te,helpText:Ee,placeholder:Ne,openOnFocus:Be,selectOnBlur:Le=!0,className:Oe,listClassName:$e,disableStaticFiltering:j=!1,matchTextSegments:$,children:H,highlightValueMatch:B,onSelect:L,onChange:V,onFocus:K,onBlur:J,optional:Me,...We}=a,M=(o==null?void 0:o.value)||b;g.useEffect(()=>{W(Qe(U,b).filter(n=>j?!0:n.value.toLocaleLowerCase().includes(b.toLowerCase())))},[U,j]),g.useEffect(()=>{j&&v.length&&v.length===1&&!v.some(n=>n.value===b)&&c(!0)},[v,b,j]);function q(n){const d=["ArrowDown","ArrowUp","PageUp","PageDown","Home","End"].includes(n.key),P=["ArrowDown","ArrowLeft","ArrowUp","ArrowRight"];if(d&&!x)return c(!0);if(d&&x)et(n,{setNavigationOption:S,navigationOption:o,currentOptions:v});else if(n.altKey||n.ctrlKey||n.metaKey||n.shiftKey)return;switch(n.key){case"Enter":o&&(n.preventDefault(),G(o)),c(!1);break;case"Tab":case"Delete":c(!1);break;case"Escape":x?c(!1):V(""),S(null);break;case"Backspace":V(M),S(null),c(!0);break;default:if(P.includes(n.key))break;c(!0),o?(V(o.value),S(null)):V(b);break}}g.useEffect(()=>{if(!u.current)return;const n=u.current;return n.addEventListener("keydown",q),()=>{n.removeEventListener("keydown",q)}});function G(n){L&&L(n.value),c(!1),S(null),j&&W([])}const z={id:s,value:M,label:_e,optional:Me,invalid:Te,helpText:Ee,placeholder:Ne,role:"combobox","aria-label":a["aria-label"],"aria-labelledby":a["aria-labelledby"],"aria-autocomplete":"list","aria-expanded":x&&v.length!==0,"aria-activedescendant":x?o==null?void 0:o.id:void 0,"aria-controls":r,onChange:function(n){V(n.target.value)},onFocus:function(){Be&&(K&&K(),c(!0))},onBlur:function(n){at(f,m,n,c),Le&&(o||!o&&v.findIndex(d=>d.value===b)!==-1)&&L&&L((o==null?void 0:o.value)||b),S(null),J&&J(M)},ref:function(n){u.current=n,e&&(typeof e=="function"?e(n):e.current=n)},...We};return t.jsxs("div",{className:O(Oe,C.wrapper),onBlur:n=>tt(n,c),ref:f,children:[t.jsx("div",{ref:m,children:H?t.jsx(X,{...z,children:H}):t.jsx(X,{...z})}),t.jsx("span",{className:C.a11y,role:"status",children:Xe(v,b)}),t.jsx("div",{hidden:!x||!v.length,className:O($e,C.combobox),style:{zIndex:3},children:t.jsx("ul",{id:r,role:"listbox",className:O(C.listbox,{[Ze]:$}),children:v.map(n=>{const d=n.label||n.value;let P=[];if($&&!B){const k=d.toLowerCase().indexOf(n.currentInputValue.toLowerCase());if(k!==-1){const Q=k+n.currentInputValue.length;P=t.jsxs(t.Fragment,{children:[d.substring(0,k),t.jsx("span",{"data-combobox-text-match":!0,className:C.textMatch,children:d.substring(k,Q)}),d.substring(Q)]})}else P=t.jsx("span",{children:d})}else B&&(P=B(d,b));return t.jsx("li",{id:n.id,role:"option","aria-selected":(o==null?void 0:o.id)===n.id,tabIndex:-1,onClick:()=>{new Promise(k=>k(S(n))).then(()=>{G(n)})},className:O({[`${C.option} ${Ye}`]:!0,[C.optionSelected]:(o==null?void 0:o.id)===n.id}),children:$||B?P:d},n.id)})})})]})});function et(l,{setNavigationOption:a,navigationOption:e,currentOptions:s}){l.preventDefault();const r=s.findIndex(f=>f.id===(e==null?void 0:e.id)),u=r+1,m=r-1;switch(l.key){case"ArrowDown":a(u>s.length?null:s[u]);break;case"ArrowUp":a(m===-2?s[s.length-1]:m<0?null:s[m]);break;case"PageUp":a(r-10<0?s[0]:s[r-10]);break;case"PageDown":a(r+10>s.length?s[s.length-1]:s[r+10]);break;case"Home":a(s[0]);break;case"End":a(s[s.length-1]);break}}function tt(l,a){!l.currentTarget.contains(l.relatedTarget)&&a(!1)}function at(l,a,e,s){var u,m;if(!l.current)return;(!((u=l.current)!=null&&u.contains(e.relatedTarget))||((m=a.current)==null?void 0:m.contains(e.relatedTarget)))&&s(!1)}p.__docgenInfo={description:"",methods:[],displayName:"Combobox"};const bt={title:"Forms/Combobox"},F=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(p,{label:"Stillingstittel",value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},y=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(p,{label:"Stillingstittel",disableStaticFiltering:!0,matchTextSegments:!0,value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},R=()=>{const[l,a]=i.useState("");return i.useEffect(()=>{console.log("Bubbled value",l)},[l]),t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx("form",{onSubmit:e=>{e.preventDefault(),alert(l)},children:t.jsx(p,{label:"Stillingstittel",value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})})]})},w=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(p,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},matchTextSegments:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},A=()=>{const[l,a]=i.useState("");function e(s){return[...s].map((r,u)=>[...l.toLowerCase()].includes(r.toLowerCase())?t.jsx("span",{"data-combobox-text-match":!0,className:"font-bold bg-blue-100 text-blue-800",children:r},`${s}-bold-letter-${r}-${u}`):t.jsx("span",{children:r},`${s}-letter-${r}-${u}`))}return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(p,{value:l,onChange:s=>a(s),onSelect:s=>{a(s),h("select")(s)},highlightValueMatch:e,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},I=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"The comboboxlist opens when the input has focus"}),t.jsx(p,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},openOnFocus:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},D=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(p,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},_=()=>{const[l,a]=i.useState("");return t.jsx(t.Fragment,{children:t.jsx(p,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}]})})},T=()=>{const[l,a]=i.useState("");return t.jsx(t.Fragment,{children:t.jsx(p,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}],children:t.jsx(De,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>a("")})})})},E=()=>{const[l,a]=i.useState(""),e=s(l,300);function s(r,u){const[m,f]=i.useState([]);return i.useEffect(()=>{r.length||f([]);const x=setTimeout(()=>{fetch("https://swapi.dev/api/people/?search="+r.trim()).then(c=>c.json()).then(c=>{console.log("Results from API",r),f(c.results.map(o=>({value:o.name})))})},u);return()=>{clearTimeout(x)}},[u,r]),m}return t.jsx(p,{label:"Star Wars character",disableStaticFiltering:!0,matchTextSegments:!0,openOnFocus:!0,value:l,onChange:r=>{a(r)},onSelect:r=>{a(r),h("select")(r)},options:e,children:t.jsx(De,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>{a("")}})})},N=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(p,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},label:"Stillingstittel",optional:!0,options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})};F.__docgenInfo={description:"",methods:[],displayName:"Basic"};y.__docgenInfo={description:"",methods:[],displayName:"DisableStaticListFiltering"};R.__docgenInfo={description:"",methods:[],displayName:"BubbleEventOnEnter"};w.__docgenInfo={description:"",methods:[],displayName:"MatchTextSegments"};A.__docgenInfo={description:"",methods:[],displayName:"CustomMatchAlgorithm"};I.__docgenInfo={description:"",methods:[],displayName:"OpenOnFocus"};D.__docgenInfo={description:"",methods:[],displayName:"SelectOnClick"};_.__docgenInfo={description:"",methods:[],displayName:"OptionText"};T.__docgenInfo={description:"",methods:[],displayName:"WithAffix"};E.__docgenInfo={description:"",methods:[],displayName:"AsyncFetch"};N.__docgenInfo={description:"",methods:[],displayName:"Optional"};var Z,ee,te;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <p>Start typing to see suggestions</p>
      <Combobox label="Stillingstittel" value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} options={[{
      value: 'Product manager'
    }, {
      value: 'Produktledelse'
    }, {
      value: 'Prosessoperatør'
    }, {
      value: 'Prosjekteier'
    }]} />
    </>;
}`,...(te=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,le,ne;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <p>Start typing to see suggestions</p>
      <Combobox label="Stillingstittel" disableStaticFiltering matchTextSegments value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} options={[{
      value: 'Product manager'
    }, {
      value: 'Produktledelse'
    }, {
      value: 'Prosessoperatør'
    }, {
      value: 'Prosjekteier'
    }]} />
    </>;
}`,...(ne=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var se,re,oe;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  React.useEffect(() => {
    console.log('Bubbled value', value);
  }, [value]);
  return <>
      <p>Start typing to see suggestions</p>
      <form onSubmit={e => {
      e.preventDefault();
      alert(value);
    }}>
        <Combobox label="Stillingstittel" value={value} onChange={val => setValue(val)} onSelect={val => {
        setValue(val);
        action('select')(val);
      }} options={[{
        value: 'Product manager'
      }, {
        value: 'Produktledelse'
      }, {
        value: 'Prosessoperatør'
      }, {
        value: 'Prosjekteier'
      }]} />
      </form>
    </>;
}`,...(oe=(re=R.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ue,ce,ie;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <p>Highlight text matches</p>
      <Combobox value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} matchTextSegments label="Stillingstittel" options={[{
      value: 'Product manager'
    }, {
      value: 'Produktledelse'
    }, {
      value: 'Prosessoperatør'
    }, {
      value: 'Prosjekteier'
    }]} />
    </>;
}`,...(ie=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,pe,me;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  function highlightValueMatch(optionValue: string) {
    return [...optionValue].map((letter, i) => {
      if ([...value.toLowerCase()].includes(letter.toLowerCase())) {
        return <span data-combobox-text-match key={\`\${optionValue}-bold-letter-\${letter}-\${i}\`} className="font-bold bg-blue-100 text-blue-800">
            {letter}
          </span>;
      } else {
        return <span key={\`\${optionValue}-letter-\${letter}-\${i}\`}>{letter}</span>;
      }
    });
  }
  return <>
      <p>Highlight text matches</p>
      <Combobox value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} highlightValueMatch={highlightValueMatch} label="Stillingstittel" options={[{
      value: 'Product manager'
    }, {
      value: 'Produktledelse'
    }, {
      value: 'Prosessoperatør'
    }, {
      value: 'Prosjekteier'
    }]} />
    </>;
}`,...(me=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,ve,be;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <p>The comboboxlist opens when the input has focus</p>
      <Combobox value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} openOnFocus label="Stillingstittel" options={[{
      value: 'Product manager'
    }, {
      value: 'Produktledelse'
    }, {
      value: 'Prosessoperatør'
    }, {
      value: 'Prosjekteier'
    }]} />
    </>;
}`,...(be=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var ge,xe,fe;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <p>When the user clicks inside the text box the current value will be selected (like the URL bar in browsers).</p>
      <Combobox value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} label="Stillingstittel" options={[{
      value: 'Product manager'
    }, {
      value: 'Produktledelse'
    }, {
      value: 'Prosessoperatør'
    }, {
      value: 'Prosjekteier'
    }]} />
    </>;
}`,...(fe=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var Se,Ce,Pe;_.parameters={..._.parameters,docs:{...(Se=_.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <Combobox value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} label="Favorite fruit" placeholder="What's your favorite fruit?" options={[{
      value: 'Apple',
      label: '🍎 Apple'
    }, {
      value: 'Banana',
      label: '🍌 Banana'
    }, {
      value: 'Orange',
      label: '🍊 Orange'
    }, {
      value: 'Pineapple',
      label: '🍍 Pineapple'
    }]} />
    </>;
}`,...(Pe=(Ce=_.parameters)==null?void 0:Ce.docs)==null?void 0:Pe.source}}};var ke,je,Ve;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <Combobox value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} label="Favorite fruit" placeholder="What's your favorite fruit?" options={[{
      value: 'Apple',
      label: '🍎 Apple'
    }, {
      value: 'Banana',
      label: '🍌 Banana'
    }, {
      value: 'Orange',
      label: '🍊 Orange'
    }, {
      value: 'Pineapple',
      label: '🍍 Pineapple'
    }]}>
        <Affix suffix clear aria-label="Clear text" onClick={() => setValue('')} />
      </Combobox>
    </>;
}`,...(Ve=(je=T.parameters)==null?void 0:je.docs)==null?void 0:Ve.source}}};var Fe,ye,Re;E.parameters={...E.parameters,docs:{...(Fe=E.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  const characters = useDebouncedSearch(value, 300);

  // Generic debouncer
  function useDebouncedSearch(query, delay) {
    const [characters, setCharacters] = React.useState([]);
    React.useEffect(() => {
      if (!query.length) setCharacters([]);
      const handler = setTimeout(() => {
        fetch('https://swapi.dev/api/people/?search=' + query.trim()).then(res => res.json()).then(res => {
          console.log('Results from API', query);
          setCharacters(res.results.map(c => ({
            value: c.name
          })));
        });
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [delay, query]);
    return characters;
  }
  return <Combobox label="Star Wars character" disableStaticFiltering matchTextSegments openOnFocus value={value} onChange={val => {
    setValue(val);
  }} onSelect={val => {
    setValue(val);
    action('select')(val);
  }} options={characters}>
      <Affix suffix clear aria-label="Clear text" onClick={() => {
      setValue('');
    }} />
    </Combobox>;
}`,...(Re=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:Re.source}}};var we,Ae,Ie;N.parameters={...N.parameters,docs:{...(we=N.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <p>When the user clicks inside the text box the current value will be selected (like the URL bar in browsers).</p>
      <Combobox value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} label="Stillingstittel" optional options={[{
      value: 'Product manager'
    }, {
      value: 'Produktledelse'
    }, {
      value: 'Prosessoperatør'
    }, {
      value: 'Prosjekteier'
    }]} />
    </>;
}`,...(Ie=(Ae=N.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};const gt=["Basic","DisableStaticListFiltering","BubbleEventOnEnter","MatchTextSegments","CustomMatchAlgorithm","OpenOnFocus","SelectOnClick","OptionText","WithAffix","AsyncFetch","Optional"];export{E as AsyncFetch,F as Basic,R as BubbleEventOnEnter,A as CustomMatchAlgorithm,y as DisableStaticListFiltering,w as MatchTextSegments,I as OpenOnFocus,_ as OptionText,N as Optional,D as SelectOnClick,T as WithAffix,gt as __namedExportsOrder,bt as default};
