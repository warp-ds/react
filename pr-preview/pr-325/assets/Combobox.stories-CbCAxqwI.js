import{j as t,x as f}from"./index-CsaUr60p.js";import{r as g,R as i}from"./index-RYns6xqu.js";import{a as v}from"./chunk-454WOBUV-CM0pFb8Z.js";import{A as Te}from"./unstyled-heading-DK_wVzkz.js";import{g as Je,u as Ke}from"./help-text-CxFUUEfI.js";import{r as M}from"./index.m-CtIADANO.js";import{a as qe}from"./i18n-BJez-btc.js";import{T as Y}from"./component-DNjZ4qOL.js";import{i as Z}from"./index-C6dB-k_R.js";import"./v4-CQkTLCs1.js";import"./close-16-cHDvCKuO.js";import"./item-Bv4PyDRv.js";const Ge=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.noResults":["Ingen resultater"]}'),ze=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," result"],"other":["#"," results"]}]],"combobox.aria.noResults":["No results"]}'),Qe=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," tulos"],"other":["#"," tulosta"]}]],"combobox.aria.noResults":["Ei tuloksia"]}'),Xe=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.noResults":["Ingen resultater"]}'),Ye=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultat"]}]],"combobox.aria.noResults":["Inga resultat"]}');function Ze(s,a){return s.map(e=>({...e,id:Je(),key:e.key||e.value,currentInputValue:a}))}function et(s,a){if(!s)return;const e=s.filter(u=>u.value.toLowerCase().includes(a.toLowerCase())),r=Z._({id:"combobox.aria.pluralResults",message:"{numResults, plural, one {# result} other {# results}}",comment:"Aria text for combobox when one or more results",values:{numResults:e.length}}),o=Z._({id:"combobox.aria.noResults",message:"No results.....",comment:"Aria text for combobox when no results"});return e.length?r:o}const tt="w-react-combobox-option",at="w-react-combobox-match";qe(ze,Xe,Qe,Ge,Ye);const m=g.forwardRef(({id:s,...a},e)=>{const r=Ke(s),o=`${r}-listbox`,u=g.useRef(null),p=g.useRef(null),S=g.useRef(null),[x,c]=g.useState(!1),[n,C]=g.useState(null),[b,U]=g.useState([]),{options:H,value:h,label:Ne,invalid:Ee,helpText:Be,placeholder:Le,openOnFocus:Oe,selectOnBlur:De=!0,className:Me,listClassName:$e,disableStaticFiltering:k=!1,matchTextSegments:$,children:J,highlightValueMatch:B,onSelect:L,onChange:j,onFocus:K,onBlur:q,optional:We,...Ue}=a,W=(n==null?void 0:n.value)||h,He=l=>M(f.option,tt,(n==null?void 0:n.id)===(l==null?void 0:l.id)?f.optionSelected:f.optionUnselected);g.useEffect(()=>{U(Ze(H,h).filter(l=>k?!0:l.value.toLocaleLowerCase().includes(String(h).toLowerCase())))},[H,k,h]),g.useEffect(()=>{k&&b.length&&b.length===1&&!b.some(l=>l.value===h)&&c(!0)},[b,h,k]);function G(l){const d=["ArrowDown","ArrowUp","PageUp","PageDown","Home","End"].includes(l.key),O=["ArrowDown","ArrowLeft","ArrowUp","ArrowRight"];if(d&&!x)return c(!0);if(d&&x)lt(l,{setNavigationOption:C,navigationOption:n,currentOptions:b});else if(l.altKey||l.ctrlKey||l.metaKey||l.shiftKey)return;switch(l.key){case"Enter":n&&(l.preventDefault(),z(n)),c(!1);break;case"Tab":case"Delete":c(!1);break;case"Escape":x?c(!1):j(""),C(null);break;case"Backspace":j(W),C(null),c(!0);break;default:if(O.includes(l.key))break;c(!0),n?(j(n.value),C(null)):j(h);break}}g.useEffect(()=>{if(!u.current)return;const l=u.current;return l.addEventListener("keydown",G),()=>{l.removeEventListener("keydown",G)}});function z(l){L&&L(l.value),c(!1),C(null),k&&U([])}const Q={id:r,value:W,label:Ne,optional:We,invalid:Ee,helpText:Be,placeholder:Le,role:"combobox","aria-label":a["aria-label"],"aria-labelledby":a["aria-labelledby"],"aria-autocomplete":"list","aria-expanded":x&&b.length!==0,"aria-activedescendant":x?n==null?void 0:n.id:void 0,"aria-controls":o,onChange:function(l){j(l.target.value)},onFocus:function(){Oe&&(K&&K(),c(!0))},onBlur:function(l){rt(S,p,l,c),De&&(n||!n&&b.findIndex(d=>d.value===h)!==-1)&&L&&L((n==null?void 0:n.value)||h),C(null),q&&q(W)},ref:function(l){u.current=l,e&&(typeof e=="function"?e(l):e.current=l)},...Ue};return t.jsxs("div",{className:M(Me,f.wrapper),onBlur:l=>st(l,c),ref:S,children:[t.jsx("div",{ref:p,children:J?t.jsx(Y,{...Q,children:J}):t.jsx(Y,{...Q})}),t.jsx("span",{className:f.a11y,role:"status",children:et(b,h)}),t.jsx("div",{hidden:!x||!b.length,className:M($e,f.base),style:{zIndex:3},children:t.jsx("ul",{id:o,role:"listbox",className:M(f.listbox,{[at]:$}),children:b.map(l=>{const d=l.label||l.value,O=typeof d=="string";let D=[];if(O&&$&&!B){const P=d.toLowerCase().indexOf(l.currentInputValue.toLowerCase());if(P!==-1){const X=P+l.currentInputValue.length;D=t.jsxs(t.Fragment,{children:[d.substring(0,P),t.jsx("span",{"data-combobox-text-match":!0,className:f.textMatch,children:d.substring(P,X)}),d.substring(X)]})}else D=t.jsx("span",{children:d})}else O&&B&&(D=B(d,h));return t.jsx("li",{id:l.id,role:"option","aria-selected":(n==null?void 0:n.id)===l.id,tabIndex:-1,onClick:()=>{new Promise(P=>P(C(l))).then(()=>{z(l)})},className:He(l),children:$||B?D:d},l.key)})})})]})});function lt(s,{setNavigationOption:a,navigationOption:e,currentOptions:r}){s.preventDefault();const o=r.findIndex(S=>S.id===(e==null?void 0:e.id)),u=o+1,p=o-1;switch(s.key){case"ArrowDown":a(u>r.length?null:r[u]);break;case"ArrowUp":a(p===-2?r[r.length-1]:p<0?null:r[p]);break;case"PageUp":a(o-10<0?r[0]:r[o-10]);break;case"PageDown":a(o+10>r.length?r[r.length-1]:r[o+10]);break;case"Home":a(r[0]);break;case"End":a(r[r.length-1]);break}}function st(s,a){!s.currentTarget.contains(s.relatedTarget)&&a(!1)}function rt(s,a,e,r){var u,p;if(!s.current)return;(!((u=s.current)!=null&&u.contains(e.relatedTarget))||((p=a.current)==null?void 0:p.contains(e.relatedTarget)))&&r(!1)}m.__docgenInfo={description:"",methods:[],displayName:"Combobox"};const xt={title:"Forms/Combobox"},V=()=>{const[s,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(m,{label:"Stillingstittel",value:s,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},y=()=>{const[s,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(m,{label:"Stillingstittel",disableStaticFiltering:!0,matchTextSegments:!0,value:s,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},R=()=>{const[s,a]=i.useState("");return i.useEffect(()=>{console.log("Bubbled value",s)},[s]),t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx("form",{onSubmit:e=>{e.preventDefault(),alert(s)},children:t.jsx(m,{label:"Stillingstittel",value:s,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})})]})},w=()=>{const[s,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(m,{value:s,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},matchTextSegments:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},A=()=>{const[s,a]=i.useState("");function e(r){return[...r].map((o,u)=>[...s.toLowerCase()].includes(o.toLowerCase())?t.jsx("span",{"data-combobox-text-match":!0,className:"font-bold bg-blue-100 text-blue-800",children:o},`${r}-bold-letter-${o}-${u}`):t.jsx("span",{children:o},`${r}-letter-${o}-${u}`))}return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(m,{value:s,onChange:r=>a(r),onSelect:r=>{a(r),v("select")(r)},highlightValueMatch:e,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},F=()=>{const[s,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"The comboboxlist opens when the input has focus"}),t.jsx(m,{value:s,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},openOnFocus:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},I=()=>{const[s,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(m,{value:s,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},_=()=>{const[s,a]=i.useState("");return t.jsx(t.Fragment,{children:t.jsx(m,{value:s,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}]})})},T=()=>{const[s,a]=i.useState("");return t.jsx(t.Fragment,{children:t.jsx(m,{value:s,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}],children:t.jsx(Te,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>a("")})})})},N=()=>{const[s,a]=i.useState(""),e=r(s,300);function r(o,u){const[p,S]=i.useState([]);return i.useEffect(()=>{o.length||S([]);const x=setTimeout(()=>{fetch("https://swapi.dev/api/people/?search="+o.trim()).then(c=>c.json()).then(c=>{console.log("Results from API",o),S(c.results.map(n=>({value:n.name})))})},u);return()=>{clearTimeout(x)}},[u,o]),p}return t.jsx(m,{label:"Star Wars character",disableStaticFiltering:!0,matchTextSegments:!0,openOnFocus:!0,value:s,onChange:o=>{a(o)},onSelect:o=>{a(o),v("select")(o)},options:e,children:t.jsx(Te,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>{a("")}})})},E=()=>{const[s,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(m,{value:s,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},label:"Stillingstittel",optional:!0,options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})};V.__docgenInfo={description:"",methods:[],displayName:"Basic"};y.__docgenInfo={description:"",methods:[],displayName:"DisableStaticListFiltering"};R.__docgenInfo={description:"",methods:[],displayName:"BubbleEventOnEnter"};w.__docgenInfo={description:"",methods:[],displayName:"MatchTextSegments"};A.__docgenInfo={description:"",methods:[],displayName:"CustomMatchAlgorithm"};F.__docgenInfo={description:"",methods:[],displayName:"OpenOnFocus"};I.__docgenInfo={description:"",methods:[],displayName:"SelectOnClick"};_.__docgenInfo={description:"",methods:[],displayName:"OptionText"};T.__docgenInfo={description:"",methods:[],displayName:"WithAffix"};N.__docgenInfo={description:"",methods:[],displayName:"AsyncFetch"};E.__docgenInfo={description:"",methods:[],displayName:"Optional"};var ee,te,ae;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(ae=(te=V.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var le,se,re;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(re=(se=y.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,ne,ue;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(ue=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:ue.source}}};var ce,ie,de;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(de=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var me,pe,he;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(he=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ve,be,ge;F.parameters={...F.parameters,docs:{...(ve=F.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(ge=(be=F.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var xe,fe,Se;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(Se=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var Ce,Pe,ke;_.parameters={..._.parameters,docs:{...(Ce=_.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
}`,...(ke=(Pe=_.parameters)==null?void 0:Pe.docs)==null?void 0:ke.source}}};var je,Ve,ye;T.parameters={...T.parameters,docs:{...(je=T.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(ye=(Ve=T.parameters)==null?void 0:Ve.docs)==null?void 0:ye.source}}};var Re,we,Ae;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(Ae=(we=N.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};var Fe,Ie,_e;E.parameters={...E.parameters,docs:{...(Fe=E.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(_e=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:_e.source}}};const ft=["Basic","DisableStaticListFiltering","BubbleEventOnEnter","MatchTextSegments","CustomMatchAlgorithm","OpenOnFocus","SelectOnClick","OptionText","WithAffix","AsyncFetch","Optional"];export{N as AsyncFetch,V as Basic,R as BubbleEventOnEnter,A as CustomMatchAlgorithm,y as DisableStaticListFiltering,w as MatchTextSegments,F as OpenOnFocus,_ as OptionText,E as Optional,I as SelectOnClick,T as WithAffix,ft as __namedExportsOrder,xt as default};
