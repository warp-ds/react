import{j as e}from"./index-DSOYRR-y.js";import{r as l}from"./index-RYns6xqu.js";import{B as r}from"./component-DfcuE9an.js";import{T as A}from"./component-Blth2Uzk.js";import{M as m}from"./component-DXMdkRbQ.js";import"./index.m-CtIADANO.js";import"./index-C6dB-k_R.js";import"./i18n-BJez-btc.js";import"./help-text-BWbwCBp4.js";import"./item-BU3_qfee.js";import"./close-16-cHDvCKuO.js";const Y={title:"Overlays/Modal"},c=()=>{const[n,i]=l.useState(!0),o=()=>i(!n),s=l.useRef(null);return l.useEffect(()=>{var t;n||(t=s.current)==null||t.focus()},[n]),e.jsxs(e.Fragment,{children:[e.jsx(r,{ref:s,utility:!0,onClick:o,children:"Open modal"}),e.jsxs(m,{open:n,onDismiss:o,title:"Title of the content goes here",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:o,className:"mr-12",children:"Cancel"}),e.jsx(r,{primary:!0,onClick:o,children:"Accept"})]}),children:[e.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),e.jsx("a",{href:"#",onClick:t=>t.preventDefault(),children:"Optional link to read more."})]})]})},u=()=>{const[n,i]=l.useState(!0),o=()=>i(!n),s=l.useRef(null);return l.useEffect(()=>{var t;n||(t=s.current)==null||t.focus()},[n]),e.jsxs(e.Fragment,{children:[e.jsx(r,{ref:s,utility:!0,onClick:o,children:"Open modal"}),e.jsxs(m,{open:n,left:!0,right:!0,onDismiss:o,onLeftClick:()=>{console.log("left clicked"),o()},title:"Title of the content goes here",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:o,className:"mr-12",children:"Cancel"}),e.jsx(r,{primary:!0,onClick:o,children:"Accept"})]}),children:[e.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),e.jsx("a",{href:"#",onClick:t=>t.preventDefault(),children:"Optional link to read more."})]})]})},p=()=>{const[n,i]=l.useState(!1),[o,s]=l.useState(!1),t=l.useRef(null);l.useEffect(()=>{var g;n||(s(!1),(g=t.current)==null||g.focus())},[n]);const a=()=>i(!n);return e.jsxs(e.Fragment,{children:[e.jsx(r,{ref:t,utility:!0,onClick:a,children:"Open modal"}),e.jsxs(m,{open:n,onDismiss:a,title:"Do you agree to these terms?",footer:e.jsx(r,{primary:!0,onClick:a,disabled:!o,children:"Accept"}),children:[e.jsx("p",{children:"1. You must give me 10 pushups right now"}),e.jsx(A,{type:"checkbox",label:"I agree",onChange:s})]})]})},d=()=>{const[n,i]=l.useState(!1),o=()=>i(!n),s=l.useRef(),t=l.useRef(null);return l.useEffect(()=>{var a;n||(a=t.current)==null||a.focus()},[n]),e.jsxs(e.Fragment,{children:[e.jsx(r,{ref:t,utility:!0,onClick:o,children:"Open modal"}),e.jsxs(m,{open:n,onDismiss:o,initialFocusRef:s,title:"Title of the content goes here",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:o,className:"mr-12",children:"Cancel"}),e.jsx(r,{ref:s,primary:!0,onClick:o,children:"Accept"})]}),children:[e.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),e.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Optional link to read more."})]})]})},f=()=>{const[n,i]=l.useState(!0),o=()=>i(!n),s=l.useRef(null);return l.useEffect(()=>{var t;n&&((t=s.current)==null||t.focus())},[n]),e.jsxs(e.Fragment,{children:[e.jsx(r,{ref:s,utility:!0,onClick:o,children:"Open modal"}),e.jsx(m,{open:n,onDismiss:o,title:"Title of the content goes here",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:o,className:"mr-12",children:"Cancel"}),e.jsx(r,{primary:!0,onClick:o,children:"Accept"})]}),children:[...new Array(10)].map((t,a)=>e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},a))})]})};c.__docgenInfo={description:"",methods:[],displayName:"Example"};u.__docgenInfo={description:"",methods:[],displayName:"WithBackAndCloseButton"};p.__docgenInfo={description:"",methods:[],displayName:"MustConfirmToProceed"};d.__docgenInfo={description:"",methods:[],displayName:"InitialFocus"};f.__docgenInfo={description:"",methods:[],displayName:"Overflowing"};var h,M,C;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>Content information goes here. Optional illustration on top. Can contain links.</p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(C=(M=c.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var k,R,x;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} left right onDismiss={toggleModal} onLeftClick={() => {
      console.log('left clicked');
      toggleModal();
    }} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>Content information goes here. Optional illustration on top. Can contain links.</p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(x=(R=u.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var B,O,j;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      setChecked(false);
      openModalRef.current?.focus();
    }
  }, [open]);
  const toggleModal = () => setOpen(!open);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} title="Do you agree to these terms?" footer={<Button primary onClick={toggleModal} disabled={!checked}>
            Accept
          </Button>}>
        <p>1. You must give me 10 pushups right now</p>
        <Toggle type="checkbox" label="I agree" onChange={setChecked} />
      </Modal>
    </>;
}`,...(j=(O=p.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var y,E,T;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => setOpen(!open);
  const focusRef = React.useRef<HTMLButtonElement>();
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} initialFocusRef={focusRef} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button ref={focusRef} primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>Content information goes here. Optional illustration on top. Can contain links.</p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(T=(E=d.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var v,D,S;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        {[...new Array(10)].map((e, i) => <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>)}
      </Modal>
    </>;
}`,...(S=(D=f.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const z=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{c as Example,d as InitialFocus,p as MustConfirmToProceed,f as Overflowing,u as WithBackAndCloseButton,z as __namedExportsOrder,Y as default};
