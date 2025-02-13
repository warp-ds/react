import{j as t}from"./index-DSOYRR-y.js";import{R as r}from"./index-RYns6xqu.js";import{a as o}from"./chunk-454WOBUV-CM0pFb8Z.js";import{A as ae}from"./unstyled-heading-B2wjEl7S.js";import"./help-text-BWbwCBp4.js";import{C as n}from"./component-DEMQPCsw.js";import"./v4-CQkTLCs1.js";import"./index.m-CtIADANO.js";import"./close-16-cHDvCKuO.js";import"./index-C6dB-k_R.js";import"./item-BU3_qfee.js";import"./i18n-BJez-btc.js";import"./component-DwXPycX6.js";const xe={title:"Forms/Combobox"},i=()=>{const[l,a]=r.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(n,{label:"Stillingstittel",value:l,onChange:e=>a(e),onSelect:e=>{a(e),o("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},p=()=>{const[l,a]=r.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(n,{label:"Stillingstittel",disableStaticFiltering:!0,matchTextSegments:!0,value:l,onChange:e=>a(e),onSelect:e=>{a(e),o("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},v=()=>{const[l,a]=r.useState("");return r.useEffect(()=>{console.log("Bubbled value",l)},[l]),t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx("form",{onSubmit:e=>{e.preventDefault(),alert(l)},children:t.jsx(n,{label:"Stillingstittel",value:l,onChange:e=>a(e),onSelect:e=>{a(e),o("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})})]})},d=()=>{const[l,a]=r.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(n,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),o("select")(e)},matchTextSegments:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},m=()=>{const[l,a]=r.useState("");function e(u){return[...u].map((s,c)=>[...l.toLowerCase()].includes(s.toLowerCase())?t.jsx("span",{"data-combobox-text-match":!0,className:"font-bold bg-blue-100 text-blue-800",children:s},`${u}-bold-letter-${s}-${c}`):t.jsx("span",{children:s},`${u}-letter-${s}-${c}`))}return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(n,{value:l,onChange:u=>a(u),onSelect:u=>{a(u),o("select")(u)},highlightValueMatch:e,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},h=()=>{const[l,a]=r.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"The comboboxlist opens when the input has focus"}),t.jsx(n,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),o("select")(e)},openOnFocus:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},g=()=>{const[l,a]=r.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(n,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),o("select")(e)},label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},b=()=>{const[l,a]=r.useState("");return t.jsx(t.Fragment,{children:t.jsx(n,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),o("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}]})})},S=()=>{const[l,a]=r.useState("");return t.jsx(t.Fragment,{children:t.jsx(n,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),o("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}],children:t.jsx(ae,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>a("")})})})},x=()=>{const[l,a]=r.useState(""),e=u(l,300);function u(s,c){const[le,C]=r.useState([]);return r.useEffect(()=>{s.length||C([]);const se=setTimeout(()=>{fetch("https://swapi.dev/api/people/?search="+s.trim()).then(P=>P.json()).then(P=>{console.log("Results from API",s),C(P.results.map(re=>({value:re.name})))})},c);return()=>{clearTimeout(se)}},[c,s]),le}return t.jsx(n,{label:"Star Wars character",disableStaticFiltering:!0,matchTextSegments:!0,openOnFocus:!0,value:l,onChange:s=>{a(s)},onSelect:s=>{a(s),o("select")(s)},options:e,children:t.jsx(ae,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>{a("")}})})},f=()=>{const[l,a]=r.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(n,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),o("select")(e)},label:"Stillingstittel",optional:!0,options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})};i.__docgenInfo={description:"",methods:[],displayName:"Basic"};p.__docgenInfo={description:"",methods:[],displayName:"DisableStaticListFiltering"};v.__docgenInfo={description:"",methods:[],displayName:"BubbleEventOnEnter"};d.__docgenInfo={description:"",methods:[],displayName:"MatchTextSegments"};m.__docgenInfo={description:"",methods:[],displayName:"CustomMatchAlgorithm"};h.__docgenInfo={description:"",methods:[],displayName:"OpenOnFocus"};g.__docgenInfo={description:"",methods:[],displayName:"SelectOnClick"};b.__docgenInfo={description:"",methods:[],displayName:"OptionText"};S.__docgenInfo={description:"",methods:[],displayName:"WithAffix"};x.__docgenInfo={description:"",methods:[],displayName:"AsyncFetch"};f.__docgenInfo={description:"",methods:[],displayName:"Optional"};var j,V,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
}`,...(k=(V=i.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var F,O,y;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...(y=(O=p.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var _,A,R;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(R=(A=v.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var T,w,B;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(B=(w=d.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var I,N,W;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(W=(N=m.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var E,$,L;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(L=($=h.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var M,D,H;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(H=(D=g.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var U,q,G;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(G=(q=b.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var z,J,K;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const fe=["Basic","DisableStaticListFiltering","BubbleEventOnEnter","MatchTextSegments","CustomMatchAlgorithm","OpenOnFocus","SelectOnClick","OptionText","WithAffix","AsyncFetch","Optional"];export{x as AsyncFetch,i as Basic,v as BubbleEventOnEnter,m as CustomMatchAlgorithm,p as DisableStaticListFiltering,d as MatchTextSegments,h as OpenOnFocus,b as OptionText,f as Optional,g as SelectOnClick,S as WithAffix,fe as __namedExportsOrder,xe as default};
