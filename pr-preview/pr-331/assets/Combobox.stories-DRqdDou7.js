import{j as t,x as f}from"./index-CwegDaZy.js";import{r as g,R as i}from"./index-RYns6xqu.js";import{a as v}from"./chunk-454WOBUV-CM0pFb8Z.js";import{A as _e}from"./unstyled-heading-fX2K47ev.js";import{g as Je,u as Ke}from"./help-text-D2jCHyCB.js";import{r as M}from"./index.m-CtIADANO.js";import{a as qe}from"./i18n-BJez-btc.js";import{T as Y}from"./component-xGLXubgA.js";import{i as Z}from"./index-C6dB-k_R.js";import"./v4-CQkTLCs1.js";import"./close-16-cHDvCKuO.js";import"./item-BpHa25y2.js";const Ge=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.noResults":["Ingen resultater"]}'),ze=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," result"],"other":["#"," results"]}]],"combobox.aria.noResults":["No results"]}'),Qe=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," tulos"],"other":["#"," tulosta"]}]],"combobox.aria.noResults":["Ei tuloksia"]}'),Xe=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.noResults":["Ingen resultater"]}'),Ye=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultat"]}]],"combobox.aria.noResults":["Inga resultat"]}');function Ze(l,a){return l.map(e=>({...e,id:Je(),key:e.key||e.value,currentInputValue:a}))}function et(l,a){if(!l)return;const e=l.filter(u=>u.value.toLowerCase().includes(a.toLowerCase())),r=Z._({id:"combobox.aria.pluralResults",message:"{numResults, plural, one {# result} other {# results}}",comment:"Aria text for combobox when one or more results",values:{numResults:e.length}}),o=Z._({id:"combobox.aria.noResults",message:"No results.....",comment:"Aria text for combobox when no results"});return e.length?r:o}function tt(l){return l?typeof l.label=="string"||typeof l.label=="number"?l.label.toString():l.value:""}const at="w-react-combobox-option",lt="w-react-combobox-match";qe(ze,Xe,Qe,Ge,Ye);const m=g.forwardRef(({id:l,...a},e)=>{const r=Ke(l),o=`${r}-listbox`,u=g.useRef(null),p=g.useRef(null),S=g.useRef(null),[x,c]=g.useState(!1),[n,C]=g.useState(null),[b,U]=g.useState([]),{options:H,value:h,label:Ne,invalid:Ee,helpText:Be,placeholder:Le,openOnFocus:Oe,selectOnBlur:De=!0,className:Me,listClassName:$e,disableStaticFiltering:k=!1,matchTextSegments:$,children:J,highlightValueMatch:B,onSelect:L,onChange:j,onFocus:K,onBlur:q,optional:We,...Ue}=a,W=tt(n)||h,He=s=>M(f.option,at,(n==null?void 0:n.id)===(s==null?void 0:s.id)?f.optionSelected:f.optionUnselected);g.useEffect(()=>{U(Ze(H,h).filter(s=>k?!0:s.value.toLocaleLowerCase().includes(String(h).toLowerCase())))},[H,k,h]),g.useEffect(()=>{k&&b.length&&b.length===1&&!b.some(s=>s.value===h)&&c(!0)},[b,h,k]);function G(s){const d=["ArrowDown","ArrowUp","PageUp","PageDown","Home","End"].includes(s.key),O=["ArrowDown","ArrowLeft","ArrowUp","ArrowRight"];if(d&&!x)return c(!0);if(d&&x)st(s,{setNavigationOption:C,navigationOption:n,currentOptions:b});else if(s.altKey||s.ctrlKey||s.metaKey||s.shiftKey)return;switch(s.key){case"Enter":n&&(s.preventDefault(),z(n)),c(!1);break;case"Tab":case"Delete":c(!1);break;case"Escape":x?c(!1):j(""),C(null);break;case"Backspace":j(W),C(null),c(!0);break;default:if(O.includes(s.key))break;c(!0),n?(j(n.value),C(null)):j(h);break}}g.useEffect(()=>{if(!u.current)return;const s=u.current;return s.addEventListener("keydown",G),()=>{s.removeEventListener("keydown",G)}});function z(s){L&&L(s.value),c(!1),C(null),k&&U([])}const Q={id:r,value:W,label:Ne,optional:We,invalid:Ee,helpText:Be,placeholder:Le,role:"combobox","aria-label":a["aria-label"],"aria-labelledby":a["aria-labelledby"],"aria-autocomplete":"list","aria-expanded":x&&b.length!==0,"aria-activedescendant":x?n==null?void 0:n.id:void 0,"aria-controls":o,onChange:function(s){j(s.target.value)},onFocus:function(){Oe&&(K&&K(),c(!0))},onBlur:function(s){ot(S,p,s,c),De&&(n||!n&&b.findIndex(d=>d.value===h)!==-1)&&L&&L((n==null?void 0:n.value)||h),C(null),q&&q(W)},ref:function(s){u.current=s,e&&(typeof e=="function"?e(s):e.current=s)},...Ue};return t.jsxs("div",{className:M(Me,f.wrapper),onBlur:s=>rt(s,c),ref:S,children:[t.jsx("div",{ref:p,children:J?t.jsx(Y,{...Q,children:J}):t.jsx(Y,{...Q})}),t.jsx("span",{className:f.a11y,role:"status",children:et(b,h)}),t.jsx("div",{hidden:!x||!b.length,className:M($e,f.base),style:{zIndex:3},children:t.jsx("ul",{id:o,role:"listbox",className:M(f.listbox,{[lt]:$}),children:b.map(s=>{const d=s.label||s.value,O=typeof d=="string";let D=[];if(O&&$&&!B){const P=d.toLowerCase().indexOf(s.currentInputValue.toLowerCase());if(P!==-1){const X=P+s.currentInputValue.length;D=t.jsxs(t.Fragment,{children:[d.substring(0,P),t.jsx("span",{"data-combobox-text-match":!0,className:f.textMatch,children:d.substring(P,X)}),d.substring(X)]})}else D=t.jsx("span",{children:d})}else O&&B&&(D=B(d,h));return t.jsx("li",{id:s.id,role:"option","aria-selected":(n==null?void 0:n.id)===s.id,tabIndex:-1,onClick:()=>{new Promise(P=>P(C(s))).then(()=>{z(s)})},className:He(s),children:$||B?D:d},s.key)})})})]})});function st(l,{setNavigationOption:a,navigationOption:e,currentOptions:r}){l.preventDefault();const o=r.findIndex(S=>S.id===(e==null?void 0:e.id)),u=o+1,p=o-1;switch(l.key){case"ArrowDown":a(u>r.length?null:r[u]);break;case"ArrowUp":a(p===-2?r[r.length-1]:p<0?null:r[p]);break;case"PageUp":a(o-10<0?r[0]:r[o-10]);break;case"PageDown":a(o+10>r.length?r[r.length-1]:r[o+10]);break;case"Home":a(r[0]);break;case"End":a(r[r.length-1]);break}}function rt(l,a){!l.currentTarget.contains(l.relatedTarget)&&a(!1)}function ot(l,a,e,r){var u,p;if(!l.current)return;(!((u=l.current)!=null&&u.contains(e.relatedTarget))||((p=a.current)==null?void 0:p.contains(e.relatedTarget)))&&r(!1)}m.__docgenInfo={description:"",methods:[],displayName:"Combobox"};const ft={title:"Forms/Combobox"},V=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(m,{label:"Stillingstittel",value:l,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},y=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(m,{label:"Stillingstittel",disableStaticFiltering:!0,matchTextSegments:!0,value:l,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},R=()=>{const[l,a]=i.useState("");return i.useEffect(()=>{console.log("Bubbled value",l)},[l]),t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx("form",{onSubmit:e=>{e.preventDefault(),alert(l)},children:t.jsx(m,{label:"Stillingstittel",value:l,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})})]})},w=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(m,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},matchTextSegments:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},A=()=>{const[l,a]=i.useState("");function e(r){return[...r].map((o,u)=>[...l.toLowerCase()].includes(o.toLowerCase())?t.jsx("span",{"data-combobox-text-match":!0,className:"font-bold bg-blue-100 text-blue-800",children:o},`${r}-bold-letter-${o}-${u}`):t.jsx("span",{children:o},`${r}-letter-${o}-${u}`))}return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(m,{value:l,onChange:r=>a(r),onSelect:r=>{a(r),v("select")(r)},highlightValueMatch:e,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},F=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"The comboboxlist opens when the input has focus"}),t.jsx(m,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},openOnFocus:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},I=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(m,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},T=()=>{const[l,a]=i.useState("");return t.jsx(t.Fragment,{children:t.jsx(m,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}]})})},_=()=>{const[l,a]=i.useState("");return t.jsx(t.Fragment,{children:t.jsx(m,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}],children:t.jsx(_e,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>a("")})})})},N=()=>{const[l,a]=i.useState(""),e=r(l,300);function r(o,u){const[p,S]=i.useState([]);return i.useEffect(()=>{o.length||S([]);const x=setTimeout(()=>{fetch("https://swapi.dev/api/people/?search="+o.trim()).then(c=>c.json()).then(c=>{console.log("Results from API",o),S(c.results.map(n=>({value:n.name})))})},u);return()=>{clearTimeout(x)}},[u,o]),p}return t.jsx(m,{label:"Star Wars character",disableStaticFiltering:!0,matchTextSegments:!0,openOnFocus:!0,value:l,onChange:o=>{a(o)},onSelect:o=>{a(o),v("select")(o)},options:e,children:t.jsx(_e,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>{a("")}})})},E=()=>{const[l,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(m,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),v("select")(e)},label:"Stillingstittel",optional:!0,options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})};V.__docgenInfo={description:"",methods:[],displayName:"Basic"};y.__docgenInfo={description:"",methods:[],displayName:"DisableStaticListFiltering"};R.__docgenInfo={description:"",methods:[],displayName:"BubbleEventOnEnter"};w.__docgenInfo={description:"",methods:[],displayName:"MatchTextSegments"};A.__docgenInfo={description:"",methods:[],displayName:"CustomMatchAlgorithm"};F.__docgenInfo={description:"",methods:[],displayName:"OpenOnFocus"};I.__docgenInfo={description:"",methods:[],displayName:"SelectOnClick"};T.__docgenInfo={description:"",methods:[],displayName:"OptionText"};_.__docgenInfo={description:"",methods:[],displayName:"WithAffix"};N.__docgenInfo={description:"",methods:[],displayName:"AsyncFetch"};E.__docgenInfo={description:"",methods:[],displayName:"Optional"};var ee,te,ae;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(Se=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var Ce,Pe,ke;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
}`,...(ke=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:ke.source}}};var je,Ve,ye;_.parameters={..._.parameters,docs:{...(je=_.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(ye=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:ye.source}}};var Re,we,Ae;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(Ae=(we=N.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};var Fe,Ie,Te;E.parameters={...E.parameters,docs:{...(Fe=E.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(Te=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:Te.source}}};const St=["Basic","DisableStaticListFiltering","BubbleEventOnEnter","MatchTextSegments","CustomMatchAlgorithm","OpenOnFocus","SelectOnClick","OptionText","WithAffix","AsyncFetch","Optional"];export{N as AsyncFetch,V as Basic,R as BubbleEventOnEnter,A as CustomMatchAlgorithm,y as DisableStaticListFiltering,w as MatchTextSegments,F as OpenOnFocus,T as OptionText,E as Optional,I as SelectOnClick,_ as WithAffix,St as __namedExportsOrder,ft as default};
