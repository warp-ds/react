import{c as m,j as e}from"./index-BHUOraRV.js";import{R as o,r as f}from"./index-CBqU2yxZ.js";import{C as n,D as i}from"./unstyled-heading-N0JG9owt.js";import{r as v}from"./index.m-CtIADANO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./item-_fhpI4e4.js";import"./useId-Cfvm1aBZ.js";import"./close-16-C8lDrxCI.js";import"./index-ClUvnnK6.js";function s(a){const{as:c="div",children:t,flat:r,...l}=a;return o.createElement(c,{...l,className:v(a.className,{[m.card]:!0,[m.cardShadow]:!a.flat,[m.cardSelected]:!a.flat&&a.selected,[m.cardFlat]:a.flat,[a.selected?m.cardFlatSelected:m.cardFlatUnselected]:a.flat})},e.jsxs(e.Fragment,{children:[!a.flat&&e.jsx("div",{className:v([m.cardOutline,a.selected?m.cardOutlineSelected:m.cardOutlineUnselected])}),t]}))}try{s.displayName="Card",s.__docgenInfo={description:"",displayName:"Card",props:{flat:{defaultValue:null,description:"Removes box shadow around card",name:"flat",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The contents of the Card",name:"children",required:!0,type:{name:"Element | Element[]"}},selected:{defaultValue:null,description:"If the card is selected",name:"selected",required:!1,type:{name:"boolean"}},as:{defaultValue:{value:"div"},description:"The wrapping container element",name:"as",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Add your own custom styles to the container element",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ee={title:"Navigation/Card"},p=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Single Card"}),e.jsxs("div",{className:"space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 my-20",children:[e.jsxs("div",{children:[e.jsx("p",{children:"Standard card (with box-shadow):"}),e.jsxs(s,{children:[e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e.jsx("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12",children:"Ukens bolig"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("p",{children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Flat card (without box-shadow):"}),e.jsxs(s,{flat:!0,children:[e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e.jsx("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12",children:"Ukens bolig"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"Flat Card"}),e.jsx("p",{children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]})]})]})]}),x=()=>{const[a,c]=f.useState(!1),[t,r]=f.useState(!1);return e.jsxs("div",{children:[e.jsx("h2",{children:"Selectable Card"}),e.jsxs("div",{className:"space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 my-20",children:[e.jsxs("div",{children:[e.jsx("p",{children:"Standard card (with box-shadow):"}),e.jsxs(s,{selected:a,children:[e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e.jsx("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12",children:"Ukens bolig"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("p",{children:e.jsx(n,{checkbox:!0,onClick:()=>c(!a),children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."})}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Flat card (without box-shadow):"}),e.jsxs(s,{flat:!0,selected:t,children:[e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e.jsx("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12",children:"Ukens bolig"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("p",{children:e.jsx(n,{checkbox:!0,onClick:()=>r(!t),children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."})}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]})]})]})]})},g=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Grid Cards"}),e.jsx("p",{children:"Standard cards (with box-shadow):"}),e.jsxs("div",{className:"space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 mb-20",children:[e.jsxs(s,{children:[e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e.jsx("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12",children:"Ukens bolig"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("p",{children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]}),e.jsxs(s,{children:[e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/402x402",alt:"Description"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("p",{children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]}),e.jsxs(s,{children:[e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/404x404",alt:"Description"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("p",{children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]})]}),e.jsx("p",{className:"mt-16",children:"Flat cards (without box-shadow):"}),e.jsxs("div",{className:"space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 mb-20",children:[e.jsxs(s,{flat:!0,children:[e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e.jsx("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12",children:"Ukens bolig"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("p",{children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]}),e.jsxs(s,{flat:!0,children:[e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/402x402",alt:"Description"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("p",{children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]}),e.jsxs(s,{flat:!0,children:[e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/404x404",alt:"Description"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("p",{children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]})]})]}),h=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Anchor Cards"}),e.jsxs("div",{className:"flex gap-16",children:[e.jsxs("div",{children:[e.jsx("p",{children:"Standard card (with box-shadow):"}),e.jsxs(s,{children:[e.jsx("div",{"aria-owns":"title_id"}),e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e.jsx("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12",children:"Ukens bolig"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("h3",{className:"text-16 font-normal text-gray-800",id:"title_id",children:e.jsx(n,{href:"//finn.no",target:"_blank",title:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.",className:"text-current hover:no-underline focus:no-underline",children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."})}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Flat card (without box-shadow):"}),e.jsxs(s,{flat:!0,children:[e.jsx("div",{"aria-owns":"title_id"}),e.jsx("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e.jsx("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12",children:"Ukens bolig"}),e.jsxs("div",{className:"p-16",children:[e.jsx("p",{className:"text-12 text-gray-300",children:"DNB Eiendom"}),e.jsx("h3",{className:"text-16 font-normal text-gray-800",id:"title_id",children:e.jsx(n,{href:"//finn.no",target:"_blank",title:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.",className:"text-current hover:no-underline focus:no-underline",children:"Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."})}),e.jsx("p",{className:"text-14 text-gray-400 mb-4",children:"Bøgata 25C, 0655 Oslo"}),e.jsxs("p",{className:"font-bold my-8",children:["52 m",e.jsx("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5},children:"2"}),"Totalpris: 4 869 039 kr"]}),e.jsxs("p",{className:"text-14 text-gray-400 mb-0",children:["Eier (Selveier) ",e.jsx("span",{className:"text-gray-200",children:"•"})," Leilighet",e.jsx("span",{className:"text-gray-200",children:"•"})," 2 soverom"]})]})]})]})]})]}),u=()=>{const[a,c]=o.useState(!1),[t,r]=o.useState(!1),[l,d]=o.useState("");return e.jsxs("div",{children:[e.jsx("h2",{children:"Toggles in Card"}),e.jsxs("div",{className:"flex gap-32",children:[e.jsxs(s,{selected:a,className:"mt-32 w-max p-24 flex items-center",children:[e.jsx(i,{checkbox:!0,checked:a,className:"-mt-8"}),e.jsx(n,{checkbox:!0,labelClassName:"ml-12",onClick:()=>c(!a),children:"Checkbox in a standard card"})]}),e.jsxs(s,{flat:!0,selected:t,className:"mt-32 w-max p-24 flex items-center",children:[e.jsx(i,{checkbox:!0,checked:t,className:"-mt-8"}),e.jsx(n,{checkbox:!0,labelClassName:"ml-12",onClick:()=>r(!t),children:"Checkbox in a flat card"})]})]}),e.jsxs("div",{className:"flex gap-32 mt-32",children:[e.jsxs(s,{selected:l==="a",className:"p-24 flex items-center",children:[e.jsx(i,{radio:!0,checked:l==="a",className:"-mt-8"}),e.jsx(n,{radio:!0,name:"gfhjdkh4",labelClassName:"ml-12",onClick:()=>d("a"),children:"Radio in a card - A"})]}),e.jsxs(s,{selected:l==="b",className:"p-24 flex items-center",children:[e.jsx(i,{radio:!0,checked:l==="b",className:"-mt-8"}),e.jsx(n,{radio:!0,name:"gfhjdkh4",labelClassName:"ml-12",onClick:()=>d("b"),children:"Radio in a card - B"})]}),e.jsxs(s,{flat:!0,selected:l==="c",className:"p-24 flex items-center",children:[e.jsx(i,{radio:!0,checked:l==="c",className:"-mt-8"}),e.jsx(n,{radio:!0,name:"gfhjdkh4",labelClassName:"ml-12",onClick:()=>d("c"),children:"Radio in a flat card - C"})]})]})]})},b=()=>{const[a,c]=o.useState(""),[t,r]=o.useState(""),[l,d]=o.useState(!1),[j,W]=o.useState(!1);return e.jsxs("div",{children:[e.jsx("h2",{children:"DeadToggles in Card"}),e.jsx("p",{children:"Standard cards (with box-shadow):"}),e.jsxs("div",{className:"flex gap-16 mb-16",children:[e.jsxs(s,{className:"py-12 px-16 w-max flex items-center",selected:a==="a",children:[e.jsx(i,{radio:!0,checked:a==="a",className:"-mt-6"}),e.jsxs("div",{className:"ml-16",children:[e.jsx("h4",{className:"mb-0",children:e.jsx(n,{radio:!0,name:"purchase",onClick:()=>c("a"),children:"Purchase foo"})}),e.jsx("p",{className:"mb-0 text-14",children:"520 kr/mnd"})]})]}),e.jsxs(s,{className:"py-12 px-16 w-max flex items-center",selected:a==="b",children:[e.jsx(i,{radio:!0,checked:a==="b",className:"-mt-6"}),e.jsxs("div",{className:"ml-16",children:[e.jsx("h4",{className:"mb-0",children:e.jsx(n,{radio:!0,name:"purchase",onClick:()=>c("b"),children:"Purchase bar"})}),e.jsx("p",{className:"mb-0 text-14",children:"124 kr/mnd"})]})]})]}),e.jsxs(s,{className:"py-12 px-16 w-max flex items-center",selected:l,children:[e.jsx(i,{checkbox:!0,checked:l,className:"-mt-6"}),e.jsxs("div",{className:"ml-16",children:[e.jsx("h4",{className:"mb-0",children:e.jsx(n,{radio:!0,name:"purchase",onClick:()=>d(!l),children:"Standard card checkbox"})}),e.jsx("p",{className:"mb-0 text-14",children:"124 kr/mnd"})]})]}),e.jsx("p",{className:"mt-32",children:"Flat cards (without box-shadow):"}),e.jsxs("div",{className:"flex gap-16 mb-16",children:[e.jsxs(s,{flat:!0,className:"py-12 px-16 w-max flex items-center",selected:t==="a",children:[e.jsx(i,{name:"flattoggle",radio:!0,checked:t==="a",className:"-mt-6"}),e.jsxs("div",{className:"ml-16",children:[e.jsx("h4",{className:"mb-0",children:e.jsx(n,{radio:!0,name:"flatclickable",onClick:()=>r("a"),children:"Purchase foo"})}),e.jsx("p",{className:"mb-0 text-14",children:"520 kr/mnd"})]})]}),e.jsxs(s,{flat:!0,className:"py-12 px-16 w-max flex items-center",selected:t==="b",children:[e.jsx(i,{name:"flattoggle",radio:!0,checked:t==="b",className:"-mt-6"}),e.jsxs("div",{className:"ml-16",children:[e.jsx("h4",{className:"mb-0",children:e.jsx(n,{radio:!0,name:"flatclickable",onClick:()=>r("b"),children:"Purchase bar"})}),e.jsx("p",{className:"mb-0 text-14",children:"124 kr/mnd"})]})]})]}),e.jsxs(s,{flat:!0,className:"py-12 px-16 w-max flex items-center",selected:j,children:[e.jsx(i,{checkbox:!0,checked:j,className:"-mt-6"}),e.jsxs("div",{className:"ml-16",children:[e.jsx("h4",{className:"mb-0",children:e.jsx(n,{radio:!0,name:"purchase",onClick:()=>W(!j),children:"Flat card checkbox"})}),e.jsx("p",{className:"mb-0 text-14",children:"124 kr/mnd"})]})]})]})},k=({id:a,isSelected:c,setSelected:t,name:r})=>e.jsxs(s,{className:"w-full flex items-center py-14 px-14 gap-14 my-12 font-bold",selected:c,children:[e.jsx(i,{radio:!0,checked:c,name:r,className:"-mt-6"}),e.jsx(n,{radio:!0,name:r,onClick:()=>t(a),autofocus:!0,children:a.toString()})]}),N=()=>{const[a,c]=f.useState(null),[t,r]=f.useState(null);return e.jsxs("div",{children:[e.jsxs("fieldset",{className:"mb-12",role:"radiogroup",children:["Radio group 1",[0,1,2].map(l=>e.jsx(k,{id:l,isSelected:a===l,setSelected:d=>c(d),name:"first-group"},l))]},1),e.jsxs("fieldset",{role:"radiogroup",children:["Radio group 2",[3,4,5].map(l=>e.jsx(k,{id:l,isSelected:t===l,setSelected:d=>r(d),name:"second-group"},l))]},2)]})};var y,C,S;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`() => <div>
    <h2>Single Card</h2>
    <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 my-20">
      <div>
        <p>Standard card (with box-shadow):</p>
        <Card>
          <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
          <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
          <div className="p-16">
            <p className="text-12 text-gray-300">DNB Eiendom</p>
            <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
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
      </div>
      <div>
        <p>Flat card (without box-shadow):</p>
        <Card flat>
          <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
          <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
          <div className="p-16">
            <p className="text-12 text-gray-300">Flat Card</p>
            <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
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
      </div>
    </div>
  </div>`,...(S=(C=p.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var w,D,E;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState(false);
  const [flatSelected, setFlatSelected] = useState(false);
  return <div>
      <h2>Selectable Card</h2>
      <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 my-20">
        <div>
          <p>Standard card (with box-shadow):</p>
          <Card selected={selected}>
            <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
            <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
            <div className="p-16">
              <p className="text-12 text-gray-300">DNB Eiendom</p>
              <p>
                <Clickable checkbox onClick={() => setSelected(!selected)}>
                  Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.
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
        </div>
        <div>
          <p>Flat card (without box-shadow):</p>
          <Card flat selected={flatSelected}>
            <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
            <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
            <div className="p-16">
              <p className="text-12 text-gray-300">DNB Eiendom</p>
              <p>
                <Clickable checkbox onClick={() => setFlatSelected(!flatSelected)}>
                  Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.
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
        </div>
      </div>
    </div>;
}`,...(E=(D=x.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var R,O,T;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`() => <div>
    <h2>Grid Cards</h2>
    <p>Standard cards (with box-shadow):</p>
    <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 mb-20">
      <Card>
        <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
        <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
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
          <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
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
          <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
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
    </div>
    <p className="mt-16">Flat cards (without box-shadow):</p>
    <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 mb-20">
      <Card flat>
        <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
        <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
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
      <Card flat>
        <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/402x402" alt="Description" />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
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
      <Card flat>
        <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/404x404" alt="Description" />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
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
    </div>
  </div>`,...(T=(O=g.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var B,F,q;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div>
    <h2>Anchor Cards</h2>
    <div className="flex gap-16">
      <div>
        <p>Standard card (with box-shadow):</p>
        <Card>
          <div aria-owns="title_id"></div>
          <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
          <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
          <div className="p-16">
            <p className="text-12 text-gray-300">DNB Eiendom</p>
            <h3 className="text-16 font-normal text-gray-800" id="title_id">
              <Clickable href="//finn.no" target="_blank" title="Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring." className="text-current hover:no-underline focus:no-underline">
                Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.
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
        </Card>
      </div>
      <div>
        <p>Flat card (without box-shadow):</p>
        <Card flat>
          <div aria-owns="title_id"></div>
          <img className="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" alt="Description" />
          <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
          <div className="p-16">
            <p className="text-12 text-gray-300">DNB Eiendom</p>
            <h3 className="text-16 font-normal text-gray-800" id="title_id">
              <Clickable href="//finn.no" target="_blank" title="Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring." className="text-current hover:no-underline focus:no-underline">
                Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.
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
        </Card>
      </div>
    </div>
  </div>`,...(q=(F=h.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var I,A,z;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [checked, setChecked] = React.useState(false);
  const [flatChecked, setFlatChecked] = React.useState(false);
  const [selected, setSelected] = React.useState('');
  return <div>
      <h2>Toggles in Card</h2>
      <div className="flex gap-32">
        <Card selected={checked} className="mt-32 w-max p-24 flex items-center">
          <DeadToggle checkbox checked={checked} className="-mt-8" />
          <Clickable checkbox labelClassName="ml-12" onClick={() => setChecked(!checked)}>
            Checkbox in a standard card
          </Clickable>
        </Card>
        <Card flat selected={flatChecked} className="mt-32 w-max p-24 flex items-center">
          <DeadToggle checkbox checked={flatChecked} className="-mt-8" />
          <Clickable checkbox labelClassName="ml-12" onClick={() => setFlatChecked(!flatChecked)}>
            Checkbox in a flat card
          </Clickable>
        </Card>
      </div>
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
        <Card flat selected={selected === 'c'} className="p-24 flex items-center">
          <DeadToggle radio checked={selected === 'c'} className="-mt-8" />
          <Clickable radio name="gfhjdkh4" labelClassName="ml-12" onClick={() => setSelected('c')}>
            Radio in a flat card - C
          </Clickable>
        </Card>
      </div>
    </div>;
}`,...(z=(A=u.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var L,_,U;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [selected, setSelected] = React.useState('');
  const [flatSelected, setFlatSelected] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [flatChecked, setFlatChecked] = React.useState(false);
  return <div>
      <h2>DeadToggles in Card</h2>
      <p>Standard cards (with box-shadow):</p>
      <div className="flex gap-16 mb-16">
        <Card className="py-12 px-16 w-max flex items-center" selected={selected === 'a'}>
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
        <Card className="py-12 px-16 w-max flex items-center" selected={selected === 'b'}>
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
      </div>
      <Card className="py-12 px-16 w-max flex items-center" selected={checked}>
        <DeadToggle checkbox checked={checked} className="-mt-6" />
        <div className="ml-16">
          <h4 className="mb-0">
            <Clickable radio name="purchase" onClick={() => setChecked(!checked)}>
              Standard card checkbox
            </Clickable>
          </h4>
          <p className="mb-0 text-14">124 kr/mnd</p>
        </div>
      </Card>
      <p className="mt-32">Flat cards (without box-shadow):</p>
      <div className="flex gap-16 mb-16">
        <Card flat className="py-12 px-16 w-max flex items-center" selected={flatSelected === 'a'}>
          <DeadToggle name="flattoggle" radio checked={flatSelected === 'a'} className="-mt-6" />
          <div className="ml-16">
            <h4 className="mb-0">
              <Clickable radio name="flatclickable" onClick={() => setFlatSelected('a')}>
                Purchase foo
              </Clickable>
            </h4>
            <p className="mb-0 text-14">520 kr/mnd</p>
          </div>
        </Card>
        <Card flat className="py-12 px-16 w-max flex items-center" selected={flatSelected === 'b'}>
          <DeadToggle name="flattoggle" radio checked={flatSelected === 'b'} className="-mt-6" />
          <div className="ml-16">
            <h4 className="mb-0">
              <Clickable radio name="flatclickable" onClick={() => setFlatSelected('b')}>
                Purchase bar
              </Clickable>
            </h4>
            <p className="mb-0 text-14">124 kr/mnd</p>
          </div>
        </Card>
      </div>
      <Card flat className="py-12 px-16 w-max flex items-center" selected={flatChecked}>
        <DeadToggle checkbox checked={flatChecked} className="-mt-6" />
        <div className="ml-16">
          <h4 className="mb-0">
            <Clickable radio name="purchase" onClick={() => setFlatChecked(!flatChecked)}>
              Flat card checkbox
            </Clickable>
          </h4>
          <p className="mb-0 text-14">124 kr/mnd</p>
        </div>
      </Card>
    </div>;
}`,...(U=(_=b.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var P,G,V;N.parameters={...N.parameters,docs:{...(P=N.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [selectedRadio, setSelectedRadio] = useState<number | null>(null);
  const [secondSelectedRadio, setSecondSelectedRadio] = useState<number | null>(null);
  return <div>
      <fieldset key={1} className="mb-12" role="radiogroup">
        Radio group 1
        {[0, 1, 2].map(i => <ClickableCardWithDeadToggle key={i} id={i} isSelected={selectedRadio === i} setSelected={x => setSelectedRadio(x)} name="first-group" />)}
      </fieldset>
      <fieldset key={2} role="radiogroup">
        Radio group 2
        {[3, 4, 5].map(i => <ClickableCardWithDeadToggle key={i} id={i} isSelected={secondSelectedRadio === i} setSelected={x => setSecondSelectedRadio(x)} name="second-group" />)}
      </fieldset>
    </div>;
}`,...(V=(G=N.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};const ae=["SingleCard","SelectableCard","GridCards","AnchorCard","TogglesInCard","DeadToggleInCard","MultipleDeadToggleGroups"];export{h as AnchorCard,b as DeadToggleInCard,g as GridCards,N as MultipleDeadToggleGroups,x as SelectableCard,p as SingleCard,u as TogglesInCard,ae as __namedExportsOrder,ee as default};
