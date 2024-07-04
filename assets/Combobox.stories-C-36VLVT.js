import{j as t,r as C}from"./index-C4tyfTTA.js";import{r as g,R as c}from"./index-CBqU2yxZ.js";import{a as m}from"./chunk-WFFRPTHA-DEDbbGN5.js";import{A as De}from"./unstyled-heading-DUk2rLMs.js";import{r as w}from"./index.m-CtIADANO.js";import{a as We}from"./i18n-DZg136wd.js";import{T as X}from"./component-D-p7-Aqq.js";import{g as He,u as Ue}from"./useId-Cfvm1aBZ.js";import{i as Y}from"./index-ClUvnnK6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./preview-errors-B42RpLod.js";import"./index-DrFu-skq.js";import"./item-DSNFZ0rV.js";import"./close-16-C8lDrxCI.js";const Ke=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.noResults":"Ingen resultater"}'),Je=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," result"],"other":["#"," results"]}]],"combobox.aria.noResults":"No results"}'),Ge=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," tulos"],"other":["#"," tulosta"]}]],"combobox.aria.noResults":"Ei tuloksia"}'),ze=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.noResults":"Ingen resultater"}');function Qe(l,a){return l.map(e=>({...e,id:He(),currentInputValue:a}))}function Xe(l,a){if(!l)return;const e=l.filter(u=>u.value.toLowerCase().includes(a.toLowerCase())),s=Y._({id:"combobox.aria.pluralResults",message:"{numResults, plural, one {# result} other {# results}}",comment:"Aria text for combobox when one or more results",values:{numResults:e.length}}),r=Y._({id:"combobox.aria.noResults",message:"No results.....",comment:"Aria text for combobox when no results"});return e.length?s:r}const Ye="w-react-combobox-option",Ze="w-react-combobox-match",d=g.forwardRef(({id:l,...a},e)=>{const s=Ue(l),r=`${s}-listbox`,u=g.useRef(null),h=g.useRef(null),x=g.useRef(null);We(Je,ze,Ge,Ke);const[f,i]=g.useState(!1),[o,S]=g.useState(null),[v,_]=g.useState([]),{options:W,value:b,label:Ee,invalid:Ie,helpText:Le,placeholder:Be,openOnFocus:Ne,selectOnBlur:qe=!0,className:Me,listClassName:Oe,disableStaticFiltering:k=!1,matchTextSegments:O,children:H,highlightValueMatch:j,onSelect:F,onChange:y,onFocus:U,onBlur:K,optional:$e,..._e}=a,$=(o==null?void 0:o.value)||b;g.useEffect(()=>{_(Qe(W,b).filter(n=>k?!0:n.value.toLocaleLowerCase().includes(b.toLowerCase())))},[W,k]),g.useEffect(()=>{k&&v.length&&v.length===1&&!v.some(n=>n.value===b)&&i(!0)},[v,b,k]);function J(n){const p=["ArrowDown","ArrowUp","PageUp","PageDown","Home","End"].includes(n.key),V=["ArrowDown","ArrowLeft","ArrowUp","ArrowRight"];if(p&&!f)return i(!0);if(p&&f)et(n,{setNavigationOption:S,navigationOption:o,currentOptions:v});else if(n.altKey||n.ctrlKey||n.metaKey||n.shiftKey)return;switch(n.key){case"Enter":o&&(n.preventDefault(),G(o)),i(!1);break;case"Tab":case"Delete":i(!1);break;case"Escape":f?i(!1):y(""),S(null);break;case"Backspace":y($),S(null),i(!0);break;default:if(V.includes(n.key))break;i(!0),o?(y(o.value),S(null)):y(b);break}}g.useEffect(()=>{if(!u.current)return;const n=u.current;return n.addEventListener("keydown",J),()=>{n.removeEventListener("keydown",J)}});function G(n){F&&F(n.value),i(!1),S(null),k&&_([])}const z={id:s,value:$,label:Ee,optional:$e,invalid:Ie,helpText:Le,placeholder:Be,role:"combobox","aria-label":a["aria-label"],"aria-labelledby":a["aria-labelledby"],"aria-autocomplete":"list","aria-expanded":f&&v.length!==0,"aria-activedescendant":f?o==null?void 0:o.id:void 0,"aria-controls":r,onChange:function(n){y(n.target.value)},onFocus:function(){Ne&&(U&&U(),i(!0))},onBlur:function(n){at(x,h,n,i),qe&&(o||!o&&v.findIndex(p=>p.value===b)!==-1)&&F&&F((o==null?void 0:o.value)||b),S(null),K&&K($)},ref:function(n){u.current=n,e&&(typeof e=="function"?e(n):e.current=n)},..._e};return t.jsxs("div",{className:w(Me,C.wrapper),onBlur:n=>tt(n,i),ref:x,children:[t.jsx("div",{ref:h,children:H?t.jsx(X,{...z,children:H}):t.jsx(X,{...z})}),t.jsx("span",{className:C.a11y,role:"status",children:Xe(v,b)}),t.jsx("div",{hidden:!f||!v.length,className:w(Oe,C.combobox),style:{zIndex:3},children:t.jsx("ul",{id:r,role:"listbox",className:w(C.listbox,{[Ze]:O}),children:v.map(n=>{const p=n.label||n.value;let V=[];if(O&&!j){const P=p.toLowerCase().indexOf(n.currentInputValue.toLowerCase());if(P!==-1){const Q=P+n.currentInputValue.length;V=t.jsxs(t.Fragment,{children:[p.substring(0,P),t.jsx("span",{"data-combobox-text-match":!0,className:C.textMatch,children:p.substring(P,Q)}),p.substring(Q)]})}else V=t.jsx("span",{children:p})}else j&&(V=j(p,b));return t.jsx("li",{id:n.id,role:"option","aria-selected":(o==null?void 0:o.id)===n.id,tabIndex:-1,onClick:()=>{new Promise(P=>P(S(n))).then(()=>{G(n)})},className:w({[`${C.option} ${Ye}`]:!0,[C.optionSelected]:(o==null?void 0:o.id)===n.id}),children:O||j?V:p},n.id)})})})]})});function et(l,{setNavigationOption:a,navigationOption:e,currentOptions:s}){l.preventDefault();const r=s.findIndex(x=>x.id===(e==null?void 0:e.id)),u=r+1,h=r-1;switch(l.key){case"ArrowDown":a(u>s.length?null:s[u]);break;case"ArrowUp":a(h===-2?s[s.length-1]:h<0?null:s[h]);break;case"PageUp":a(r-10<0?s[0]:s[r-10]);break;case"PageDown":a(r+10>s.length?s[s.length-1]:s[r+10]);break;case"Home":a(s[0]);break;case"End":a(s[s.length-1]);break}}function tt(l,a){!l.currentTarget.contains(l.relatedTarget)&&a(!1)}function at(l,a,e,s){var u,h;if(!l.current)return;(!((u=l.current)!=null&&u.contains(e.relatedTarget))||((h=a.current)==null?void 0:h.contains(e.relatedTarget)))&&s(!1)}try{d.displayName="Combobox",d.__docgenInfo={description:"",displayName:"Combobox",props:{id:{defaultValue:null,description:"Unique identifier for the input field",name:"id",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"The available options to select from",name:"options",required:!0,type:{name:"ComboboxOption[]"}},label:{defaultValue:null,description:"Label above input",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Input placeholder",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The TextField input value",name:"value",required:!0,type:{name:"string"}},openOnFocus:{defaultValue:{value:"false"},description:"Whether the popover opens when focus is on the text field.",name:"openOnFocus",required:!1,type:{name:"boolean"}},selectOnBlur:{defaultValue:{value:"true"},description:"Select active option on blur",name:"selectOnBlur",required:!1,type:{name:"boolean"}},matchTextSegments:{defaultValue:{value:"false"},description:"Whether the matching text segments in the options should be highlighted. Customise the styling by using CSS selectors to override `[data-combobox-text-match]`.\nThis uses the default matching algorithm. Use the `highlightValueMatch` to pass your own matching function.",name:"matchTextSegments",required:!1,type:{name:"boolean"}},disableStaticFiltering:{defaultValue:{value:"false"},description:"Disable client-side static filtering",name:"disableStaticFiltering",required:!1,type:{name:"boolean"}},highlightValueMatch:{defaultValue:null,description:"Pass your own function for highlight matching",name:"highlightValueMatch",required:!1,type:{name:"((optionValue: string, inputValue: string) => ReactNode)"}},onSelect:{defaultValue:null,description:"Called when the user selects an option",name:"onSelect",required:!1,type:{name:"(((value: string) => void) & ReactEventHandler<HTMLInputElement>)"}},onChange:{defaultValue:null,description:"Called when the value of the input changes",name:"onChange",required:!0,type:{name:"(value: string) => void"}},onFocus:{defaultValue:null,description:"Called when the input is focus",name:"onFocus",required:!1,type:{name:"((() => void) & FocusEventHandler<HTMLInputElement>)"}},onBlur:{defaultValue:null,description:"Called when the input loses focus with the current navigation value or input value",name:"onBlur",required:!1,type:{name:"(((value: string) => void) & FocusEventHandler<HTMLInputElement>)"}},invalid:{defaultValue:null,description:"Renders the input field in an invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",required:!1,type:{name:"boolean"}},helpText:{defaultValue:null,description:"The content to display as the help text.",name:"helpText",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional container styling",name:"className",required:!1,type:{name:"string"}},listClassName:{defaultValue:null,description:"Additional list styling",name:"listClassName",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if `aria-labelledby` is not defined,\nDefines a string value that labels the current element.\n@see aria-labelledby.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if `aria-label` is not defined.\nIdentifies the element (or elements) that labels the current element.\n@see aria-describedby.",name:"aria-labelledby",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"For affix use",name:"children",required:!1,type:{name:"ReactNode"}},optional:{defaultValue:null,description:"Whether to show optional text",name:"optional",required:!1,type:{name:"boolean"}}}}}catch{}const gt={title:"Forms/Combobox"},R=()=>{const[l,a]=c.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(d,{label:"Stillingstittel",value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},A=()=>{const[l,a]=c.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(d,{label:"Stillingstittel",disableStaticFiltering:!0,matchTextSegments:!0,value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},T=()=>{const[l,a]=c.useState("");return c.useEffect(()=>{console.log("Bubbled value",l)},[l]),t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx("form",{onSubmit:e=>{e.preventDefault(),alert(l)},children:t.jsx(d,{label:"Stillingstittel",value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})})]})},D=()=>{const[l,a]=c.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(d,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},matchTextSegments:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},E=()=>{const[l,a]=c.useState("");function e(s){return[...s].map((r,u)=>[...l.toLowerCase()].includes(r.toLowerCase())?t.jsx("span",{"data-combobox-text-match":!0,className:"font-bold bg-blue-100 text-blue-800",children:r},`${s}-bold-letter-${r}-${u}`):t.jsx("span",{children:r},`${s}-letter-${r}-${u}`))}return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(d,{value:l,onChange:s=>a(s),onSelect:s=>{a(s),m("select")(s)},highlightValueMatch:e,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},I=()=>{const[l,a]=c.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"The comboboxlist opens when the input has focus"}),t.jsx(d,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},openOnFocus:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},L=()=>{const[l,a]=c.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(d,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},B=()=>{const[l,a]=c.useState("");return t.jsx(t.Fragment,{children:t.jsx(d,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}]})})},N=()=>{const[l,a]=c.useState("");return t.jsx(t.Fragment,{children:t.jsx(d,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}],children:t.jsx(De,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>a("")})})})},q=()=>{const[l,a]=c.useState(""),e=s(l,300);function s(r,u){const[h,x]=c.useState([]);return c.useEffect(()=>{r.length||x([]);const f=setTimeout(()=>{fetch("https://swapi.dev/api/people/?search="+r.trim()).then(i=>i.json()).then(i=>{console.log("Results from API",r),x(i.results.map(o=>({value:o.name})))})},u);return()=>{clearTimeout(f)}},[u,r]),h}return t.jsx(d,{label:"Star Wars character",disableStaticFiltering:!0,matchTextSegments:!0,openOnFocus:!0,value:l,onChange:r=>{a(r)},onSelect:r=>{a(r),m("select")(r)},options:e,children:t.jsx(De,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>{a("")}})})},M=()=>{const[l,a]=c.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(d,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},label:"Stillingstittel",optional:!0,options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})};var Z,ee,te;R.parameters={...R.parameters,docs:{...(Z=R.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(te=(ee=R.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,le,ne;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(ne=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var se,re,oe;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(oe=(re=T.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ue,ie,ce;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(ce=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,pe,he;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(he=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var me,ve,be;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(be=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var ge,fe,xe;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(xe=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Se,Ce,Ve;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Ve=(Ce=B.parameters)==null?void 0:Ce.docs)==null?void 0:Ve.source}}};var Pe,ke,ye;N.parameters={...N.parameters,docs:{...(Pe=N.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
}`,...(ye=(ke=N.parameters)==null?void 0:ke.docs)==null?void 0:ye.source}}};var je,Fe,we;q.parameters={...q.parameters,docs:{...(je=q.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(we=(Fe=q.parameters)==null?void 0:Fe.docs)==null?void 0:we.source}}};var Re,Ae,Te;M.parameters={...M.parameters,docs:{...(Re=M.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(Te=(Ae=M.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};const ft=["Basic","DisableStaticListFiltering","BubbleEventOnEnter","MatchTextSegments","CustomMatchAlgorithm","OpenOnFocus","SelectOnClick","OptionText","WithAffix","AsyncFetch","Optional"];export{q as AsyncFetch,R as Basic,T as BubbleEventOnEnter,E as CustomMatchAlgorithm,A as DisableStaticListFiltering,D as MatchTextSegments,I as OpenOnFocus,B as OptionText,M as Optional,L as SelectOnClick,N as WithAffix,ft as __namedExportsOrder,gt as default};
