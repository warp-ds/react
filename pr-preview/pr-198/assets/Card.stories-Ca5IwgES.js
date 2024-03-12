import{c as t,j as e}from"./index-DLccU1-8.js";import{r as N,R as g}from"./index-CBqU2yxZ.js";import{C as r,D as c}from"./unstyled-heading-C0x7yz-s.js";import{r as b}from"./index.m-CtIADANO.js";import"./useId-BdPc6t19.js";import"./_commonjsHelpers-BosuxZz1.js";import"./item-DaQZyCGt.js";import"./close-16-Bbv2Ms6W.js";import"./index-CJs1nTlS.js";const z=({condition:a,message:n})=>{const l=N.useRef(!1);N.useEffect(()=>{l.current||a&&(console.warn(n),l.current=!0)},[a,n])};function s(a){const{as:n="div",children:l,flat:u,...L}=a;return z({condition:!!a.onClick,message:"'onClick' prop in Card is deprecated. Use Clickable component to handle click events in Cards."}),g.createElement(n,{...L,className:b(a.className,{[t.card]:!0,[t.cardShadow]:!a.flat,[a.selected?t.cardSelected:t.cardUnselected]:!a.flat,[t.cardFlat]:a.flat,[a.selected?t.cardFlatSelected:t.cardFlatUnselected]:a.flat}),tabIndex:a.onClick?0:void 0,onKeyDown:a.onClick?h=>{if(typeof a.onClick=="function"&&(h.key==="Enter"||h.key===" ")){h.preventDefault(),a.onClick();return}}:void 0},e.jsxs(e.Fragment,{children:[a.onClick&&e.jsx("button",{className:"sr-only","aria-pressed":a.selected,tabIndex:-1,type:"button",children:"Velg"}),!a.flat&&e.jsx("div",{className:b({[t.cardOutline]:!0,[a.selected?t.cardOutlineSelected:t.cardOutlineUnselected]:!0})}),l]}))}try{s.displayName="Card",s.__docgenInfo={description:"",displayName:"Card",props:{flat:{defaultValue:null,description:"Removes box shadow around card",name:"flat",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The contents of the Card",name:"children",required:!0,type:{name:"Element | Element[]"}},selected:{defaultValue:null,description:"If the card is selected",name:"selected",required:!1,type:{name:"boolean"}},as:{defaultValue:{value:"div"},description:"The wrapping container element",name:"as",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Add your own custom styles to the container element",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"When the card is clicked (deprecated)",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const M={title:"Navigation/Card"},i=()=>e.jsx("div",{className:"space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 my-20",children:e.jsxs(s,{children:[e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e.jsx("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12",children:"Ukens bolig"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("p",{children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]})}),d=()=>{const[a,n]=N.useState(!1);return e.jsx("div",{className:"space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 my-20",children:e.jsxs(s,{selected:a,children:[e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e.jsx("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12",children:"Ukens bolig"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("p",{children:e.jsx(r,{checkbox:!0,onClick:()=>n(!a),children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."})}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]})})},m=()=>e.jsxs("div",{className:"space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 my-20",children:[e.jsxs(s,{children:[e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e.jsx("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12",children:"Ukens bolig"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("p",{children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]}),e.jsxs(s,{children:[e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/402x402",alt:"Description"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("p",{children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]}),e.jsxs(s,{children:[e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/404x404",alt:"Description"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("p",{children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]})]}),o=()=>e.jsxs(s,{children:[e.jsx("div",{"aria-owns":"title_id"}),e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e.jsx("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12",children:"Ukens bolig"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("h3",{className:"text-16 font-normal text-gray-800",id:"title_id",children:e.jsx(r,{href:"//finn.no",target:"_blank",title:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.",className:"text-current hover:no-underline focus:no-underline",children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."})}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]}),p=()=>{const[a,n]=g.useState(!1),[l,u]=g.useState("");return e.jsxs("div",{children:[e.jsxs(s,{selected:a,className:"mt-32 w-max p-24 flex items-center",children:[e.jsx(c,{checkbox:!0,checked:a,className:"-mt-8"}),e.jsx(r,{checkbox:!0,labelClassName:"ml-12",onClick:()=>n(!a),children:"Checkbox in a card"})]}),e.jsxs("div",{className:"flex gap-32 mt-32",children:[e.jsxs(s,{selected:l==="a",className:"p-24 flex items-center",children:[e.jsx(c,{radio:!0,checked:l==="a",className:"-mt-8"}),e.jsx(r,{radio:!0,name:"gfhjdkh4",labelClassName:"ml-12",onClick:()=>u("a"),children:"Radio in a card - A"})]}),e.jsxs(s,{selected:l==="b",className:"p-24 flex items-center",children:[e.jsx(c,{radio:!0,checked:l==="b",className:"-mt-8"}),e.jsx(r,{radio:!0,name:"gfhjdkh4",labelClassName:"ml-12",onClick:()=>u("b"),children:"Radio in a card - B"})]})]})]})},x=()=>{const[a,n]=g.useState("");return e.jsxs("div",{className:"flex",children:[e.jsxs(s,{flat:!0,className:"py-12 px-16 w-max flex items-center",selected:a==="a",children:[e.jsx(c,{radio:!0,checked:a==="a",className:"-mt-6"}),e.jsxs("div",{className:"ml-16",children:[e.jsx("h4",{className:"mb-0",children:e.jsx(r,{radio:!0,name:"purchase",onClick:()=>n("a"),children:"Purchase foo"})}),e.jsx("p",{className:"mb-0 text-14",children:"520 kr/mnd"})]})]}),e.jsxs(s,{flat:!0,className:"py-12 px-16 w-max ml-20 flex items-center",selected:a==="b",children:[e.jsx(c,{radio:!0,checked:a==="b",className:"-mt-6"}),e.jsxs("div",{className:"ml-16",children:[e.jsx("h4",{className:"mb-0",children:e.jsx(r,{radio:!0,name:"purchase",onClick:()=>n("b"),children:"Purchase bar"})}),e.jsx("p",{className:"mb-0 text-14",children:"124 kr/mnd"})]})]})]})};var f,y,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 my-20">
      <Card>
        <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
        <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">
          Ukens bolig
        </p>
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl.
            bl.a. vv/fyring.
          </p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span style={{
            fontSize: 10,
            verticalAlign: 'super',
            marginRight: 5
          }}>
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
    </div>;
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var v,k,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState(false);
  return <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 my-20">
      <Card selected={selected}>
        <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
        <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">
          Ukens bolig
        </p>
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            <Clickable checkbox onClick={() => setSelected(!selected)}>
              Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl.
              bl.a. vv/fyring.
            </Clickable>
          </p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span style={{
            fontSize: 10,
            verticalAlign: 'super',
            marginRight: 5
          }}>
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
    </div>;
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var S,E,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 my-20">
      <Card>
        <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
        <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">
          Ukens bolig
        </p>
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl.
            bl.a. vv/fyring.
          </p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span style={{
            fontSize: 10,
            verticalAlign: 'super',
            marginRight: 5
          }}>
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
      <Card>
        <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/402x402" alt="Description" />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl.
            bl.a. vv/fyring.
          </p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span style={{
            fontSize: 10,
            verticalAlign: 'super',
            marginRight: 5
          }}>
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
      <Card>
        <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/404x404" alt="Description" />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl.
            bl.a. vv/fyring.
          </p>
          <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span style={{
            fontSize: 10,
            verticalAlign: 'super',
            marginRight: 5
          }}>
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
            <span className="text-gray-200">•</span> 2 soverom
          </p>
        </div>
      </Card>
    </div>;
}`,...(D=(E=m.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var O,w,B;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Card>
      <div aria-owns="title_id"></div>
      <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
      <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">
        Ukens bolig
      </p>
      <div className="p-16">
        <p className="text-12 text-gray-300">DNB Eiendom</p>
        <h3 className="text-16 font-normal text-gray-800" id="title_id">
          <Clickable href="//finn.no" target="_blank" title="Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring." className="text-current hover:no-underline focus:no-underline">
            Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl.
            bl.a. vv/fyring.
          </Clickable>
        </h3>
        <p className="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
        <p className="font-bold my-8">
          52 m
          <span style={{
          fontSize: 10,
          verticalAlign: 'super',
          marginRight: 5
        }}>
            2
          </span>
          Totalpris: 4 869 039 kr
        </p>
        <p className="text-14 text-gray-400 mb-0">
          Eier (Selveier) <span className="text-gray-200">•</span> Leilighet
          <span className="text-gray-200">•</span> 2 soverom
        </p>
      </div>
    </Card>;
}`,...(B=(w=o.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var R,T,q;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [checked, setChecked] = React.useState(false);
  const [selected, setSelected] = React.useState('');
  return <div>
      <Card selected={checked} className="mt-32 w-max p-24 flex items-center">
        <DeadToggle checkbox checked={checked} className="-mt-8" />
        <Clickable checkbox labelClassName="ml-12" onClick={() => setChecked(!checked)}>
          Checkbox in a card
        </Clickable>
      </Card>

      <div className="flex gap-32 mt-32">
        <Card selected={selected === 'a'} className="p-24 flex items-center">
          <DeadToggle radio checked={selected === 'a'} className="-mt-8" />
          <Clickable radio name="gfhjdkh4" labelClassName="ml-12" onClick={() => setSelected('a')}>
            Radio in a card - A
          </Clickable>
        </Card>
        <Card selected={selected === 'b'} className="p-24 flex items-center">
          <DeadToggle radio checked={selected === 'b'} className="-mt-8" />
          <Clickable radio name="gfhjdkh4" labelClassName="ml-12" onClick={() => setSelected('b')}>
            Radio in a card - B
          </Clickable>
        </Card>
      </div>
    </div>;
}`,...(q=(T=p.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var I,A,_;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [selected, setSelected] = React.useState('');
  return <div className="flex">
      <Card flat className="py-12 px-16 w-max flex items-center" selected={selected === 'a'}>
        <DeadToggle radio checked={selected === 'a'} className="-mt-6" />
        <div className="ml-16">
          <h4 className="mb-0">
            <Clickable radio name="purchase" onClick={() => setSelected('a')}>
              Purchase foo
            </Clickable>
          </h4>
          <p className="mb-0 text-14">520 kr/mnd</p>
        </div>
      </Card>
      <Card flat className="py-12 px-16 w-max ml-20 flex items-center" selected={selected === 'b'}>
        <DeadToggle radio checked={selected === 'b'} className="-mt-6" />
        <div className="ml-16">
          <h4 className="mb-0">
            <Clickable radio name="purchase" onClick={() => setSelected('b')}>
              Purchase bar
            </Clickable>
          </h4>
          <p className="mb-0 text-14">124 kr/mnd</p>
        </div>
      </Card>
    </div>;
}`,...(_=(A=x.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const Q=["SingleCard","SelectableCard","GridCards","AnchorCard","TogglesInCard","DeadToggleInCard"];export{o as AnchorCard,x as DeadToggleInCard,m as GridCards,d as SelectableCard,i as SingleCard,p as TogglesInCard,Q as __namedExportsOrder,M as default};
