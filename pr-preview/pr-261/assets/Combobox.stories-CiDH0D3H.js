import{j as t,r as C}from"./index-DlkTJtIW.js";import{r as g,R as i}from"./index-RYns6xqu.js";import{a as h}from"./chunk-454WOBUV-CM0pFb8Z.js";import{A as _e}from"./unstyled-heading-d141Os7s.js";import{r as $}from"./index.m-CtIADANO.js";import{a as Ue}from"./i18n-CHMFe01U.js";import{T as X}from"./component-CgOdOai7.js";import{g as He,u as Ke}from"./useId-CY2WEmb6.js";import{i as Y}from"./index-1YnX0IqW.js";import"./v4-CQkTLCs1.js";import"./item-6kOQFyLV.js";import"./close-16-BgEbf248.js";const Je=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.noResults":"Ingen resultater"}'),qe=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," result"],"other":["#"," results"]}]],"combobox.aria.noResults":"No results"}'),Ge=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," tulos"],"other":["#"," tulosta"]}]],"combobox.aria.noResults":"Ei tuloksia"}'),ze=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.noResults":"Ingen resultater"}');function Qe(l,a){return l.map(e=>({...e,id:He(),currentInputValue:a}))}function Xe(l,a){if(!l)return;const e=l.filter(u=>u.value.toLowerCase().includes(a.toLowerCase())),r=Y._({id:"combobox.aria.pluralResults",message:"{numResults, plural, one {# result} other {# results}}",comment:"Aria text for combobox when one or more results",values:{numResults:e.length}}),o=Y._({id:"combobox.aria.noResults",message:"No results.....",comment:"Aria text for combobox when no results"});return e.length?r:o}const Ye="w-react-combobox-option",Ze="w-react-combobox-match",p=g.forwardRef(({id:l,...a},e)=>{const r=Ke(l),o=`${r}-listbox`,u=g.useRef(null),m=g.useRef(null),f=g.useRef(null);Ue(qe,ze,Ge,Je);const[x,c]=g.useState(!1),[n,S]=g.useState(null),[v,W]=g.useState([]),{options:U,value:b,label:Te,invalid:Ne,helpText:Ee,placeholder:Be,openOnFocus:Le,selectOnBlur:Oe=!0,className:$e,listClassName:De,disableStaticFiltering:j=!1,matchTextSegments:D,children:H,highlightValueMatch:L,onSelect:O,onChange:V,onFocus:K,onBlur:J,optional:Me,...We}=a,M=(n==null?void 0:n.value)||b;g.useEffect(()=>{W(Qe(U,b).filter(s=>j?!0:s.value.toLocaleLowerCase().includes(b.toLowerCase())))},[U,j]),g.useEffect(()=>{j&&v.length&&v.length===1&&!v.some(s=>s.value===b)&&c(!0)},[v,b,j]);function q(s){const d=["ArrowDown","ArrowUp","PageUp","PageDown","Home","End"].includes(s.key),P=["ArrowDown","ArrowLeft","ArrowUp","ArrowRight"];if(d&&!x)return c(!0);if(d&&x)et(s,{setNavigationOption:S,navigationOption:n,currentOptions:v});else if(s.altKey||s.ctrlKey||s.metaKey||s.shiftKey)return;switch(s.key){case"Enter":n&&(s.preventDefault(),G(n)),c(!1);break;case"Tab":case"Delete":c(!1);break;case"Escape":x?c(!1):V(""),S(null);break;case"Backspace":V(M),S(null),c(!0);break;default:if(P.includes(s.key))break;c(!0),n?(V(n.value),S(null)):V(b);break}}g.useEffect(()=>{if(!u.current)return;const s=u.current;return s.addEventListener("keydown",q),()=>{s.removeEventListener("keydown",q)}});function G(s){O&&O(s.value),c(!1),S(null),j&&W([])}const z={id:r,value:M,label:Te,optional:Me,invalid:Ne,helpText:Ee,placeholder:Be,role:"combobox","aria-label":a["aria-label"],"aria-labelledby":a["aria-labelledby"],"aria-autocomplete":"list","aria-expanded":x&&v.length!==0,"aria-activedescendant":x?n==null?void 0:n.id:void 0,"aria-controls":o,onChange:function(s){V(s.target.value)},onFocus:function(){Le&&(K&&K(),c(!0))},onBlur:function(s){at(f,m,s,c),Oe&&(n||!n&&v.findIndex(d=>d.value===b)!==-1)&&O&&O((n==null?void 0:n.value)||b),S(null),J&&J(M)},ref:function(s){u.current=s,e&&(typeof e=="function"?e(s):e.current=s)},...We};return t.jsxs("div",{className:$($e,C.wrapper),onBlur:s=>tt(s,c),ref:f,children:[t.jsx("div",{ref:m,children:H?t.jsx(X,{...z,children:H}):t.jsx(X,{...z})}),t.jsx("span",{className:C.a11y,role:"status",children:Xe(v,b)}),t.jsx("div",{hidden:!x||!v.length,className:$(De,C.combobox),style:{zIndex:3},children:t.jsx("ul",{id:o,role:"listbox",className:$(C.listbox,{[Ze]:D}),children:v.map(s=>{const d=s.label||s.value;let P=[];if(D&&!L){const k=d.toLowerCase().indexOf(s.currentInputValue.toLowerCase());if(k!==-1){const Q=k+s.currentInputValue.length;P=t.jsxs(t.Fragment,{children:[d.substring(0,k),t.jsx("span",{"data-combobox-text-match":!0,className:C.textMatch,children:d.substring(k,Q)}),d.substring(Q)]})}else P=t.jsx("span",{children:d})}else L&&(P=L(d,b));return t.jsx("li",{id:s.id,role:"option","aria-selected":(n==null?void 0:n.id)===s.id,tabIndex:-1,onClick:()=>{new Promise(k=>k(S(s))).then(()=>{G(s)})},className:$({[`${C.option} ${Ye}`]:!0,[C.optionSelected]:(n==null?void 0:n.id)===s.id}),children:D||L?P:d},s.id)})})})]})});function et(l,{setNavigationOption:a,navigationOption:e,currentOptions:r}){l.preventDefault();const o=r.findIndex(f=>f.id===(e==null?void 0:e.id)),u=o+1,m=o-1;switch(l.key){case"ArrowDown":a(u>r.length?null:r[u]);break;case"ArrowUp":a(m===-2?r[r.length-1]:m<0?null:r[m]);break;case"PageUp":a(o-10<0?r[0]:r[o-10]);break;case"PageDown":a(o+10>r.length?r[r.length-1]:r[o+10]);break;case"Home":a(r[0]);break;case"End":a(r[r.length-1]);break}}function tt(l,a){!l.currentTarget.contains(l.relatedTarget)&&a(!1)}function at(l,a,e,r){var u,m;if(!l.current)return;(!((u=l.current)!=null&&u.contains(e.relatedTarget))||((m=a.current)==null?void 0:m.contains(e.relatedTarget)))&&r(!1)}p.__docgenInfo={description:"",methods:[],displayName:"Combobox"};const vt={title:"Forms/Combobox"},y=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(p,{label:"Stillingstittel",value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},R=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(p,{label:"Stillingstittel",disableStaticFiltering:!0,matchTextSegments:!0,value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},w=()=>{const[l,a]=i.useState("");return i.useEffect(()=>{console.log("Bubbled value",l)},[l]),t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx("form",{onSubmit:e=>{e.preventDefault(),alert(l)},children:t.jsx(p,{label:"Stillingstittel",value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})})]})},A=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(p,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},matchTextSegments:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},F=()=>{const[l,a]=i.useState("");function e(r){return[...r].map((o,u)=>[...l.toLowerCase()].includes(o.toLowerCase())?t.jsx("span",{"data-combobox-text-match":!0,className:"font-bold bg-blue-100 text-blue-800",children:o},`${r}-bold-letter-${o}-${u}`):t.jsx("span",{children:o},`${r}-letter-${o}-${u}`))}return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(p,{value:l,onChange:r=>a(r),onSelect:r=>{a(r),h("select")(r)},highlightValueMatch:e,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},I=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"The comboboxlist opens when the input has focus"}),t.jsx(p,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},openOnFocus:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},_=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(p,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},T=()=>{const[l,a]=i.useState("");return t.jsx(t.Fragment,{children:t.jsx(p,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}]})})},N=()=>{const[l,a]=i.useState("");return t.jsx(t.Fragment,{children:t.jsx(p,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}],children:t.jsx(_e,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>a("")})})})},E=()=>{const[l,a]=i.useState(""),e=r(l,300);function r(o,u){const[m,f]=i.useState([]);return i.useEffect(()=>{o.length||f([]);const x=setTimeout(()=>{fetch("https://swapi.dev/api/people/?search="+o.trim()).then(c=>c.json()).then(c=>{console.log("Results from API",o),f(c.results.map(n=>({value:n.name})))})},u);return()=>{clearTimeout(x)}},[u,o]),m}return t.jsx(p,{label:"Star Wars character",disableStaticFiltering:!0,matchTextSegments:!0,openOnFocus:!0,value:l,onChange:o=>{a(o)},onSelect:o=>{a(o),h("select")(o)},options:e,children:t.jsx(_e,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>{a("")}})})},B=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(p,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},label:"Stillingstittel",optional:!0,options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})};y.__docgenInfo={description:"",methods:[],displayName:"Basic"};R.__docgenInfo={description:"",methods:[],displayName:"DisableStaticListFiltering"};w.__docgenInfo={description:"",methods:[],displayName:"BubbleEventOnEnter"};A.__docgenInfo={description:"",methods:[],displayName:"MatchTextSegments"};F.__docgenInfo={description:"",methods:[],displayName:"CustomMatchAlgorithm"};I.__docgenInfo={description:"",methods:[],displayName:"OpenOnFocus"};_.__docgenInfo={description:"",methods:[],displayName:"SelectOnClick"};T.__docgenInfo={description:"",methods:[],displayName:"OptionText"};N.__docgenInfo={description:"",methods:[],displayName:"WithAffix"};E.__docgenInfo={description:"",methods:[],displayName:"AsyncFetch"};B.__docgenInfo={description:"",methods:[],displayName:"Optional"};var Z,ee,te;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,le,se;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(se=(le=R.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var re,oe,ne;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(ne=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ue,ce,ie;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(ie=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,pe,me;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(me=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,ve,be;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(be=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var ge,xe,fe;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(fe=(xe=_.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var Se,Ce,Pe;T.parameters={...T.parameters,docs:{...(Se=T.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Pe=(Ce=T.parameters)==null?void 0:Ce.docs)==null?void 0:Pe.source}}};var ke,je,Ve;N.parameters={...N.parameters,docs:{...(ke=N.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(Ve=(je=N.parameters)==null?void 0:je.docs)==null?void 0:Ve.source}}};var ye,Re,we;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
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
}`,...(we=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:we.source}}};var Ae,Fe,Ie;B.parameters={...B.parameters,docs:{...(Ae=B.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(Ie=(Fe=B.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.source}}};const bt=["Basic","DisableStaticListFiltering","BubbleEventOnEnter","MatchTextSegments","CustomMatchAlgorithm","OpenOnFocus","SelectOnClick","OptionText","WithAffix","AsyncFetch","Optional"];export{E as AsyncFetch,y as Basic,w as BubbleEventOnEnter,F as CustomMatchAlgorithm,R as DisableStaticListFiltering,A as MatchTextSegments,I as OpenOnFocus,T as OptionText,B as Optional,_ as SelectOnClick,N as WithAffix,bt as __namedExportsOrder,vt as default};
