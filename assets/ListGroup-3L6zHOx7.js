import{r as b,u as N,j as e,c as y}from"./index-F0uvlsHd.js";import"./world-J20cQgd_.js";import{P as A}from"./PageLayout-Cd-4jQXh.js";import{R as x}from"./Row-9hTZkyBg.js";import{C as i}from"./Col-CeeRnQxB.js";import{C as t}from"./Card-Cmn7cKYw.js";import{u as C}from"./hook-BcehJP6k.js";import{u as B,B as G}from"./Nav-CvQLGRrc.js";import{u as P}from"./useEventCallback-s6m76CRA.js";import{m as L}from"./NavContext-DCzKn6gs.js";import{B as r}from"./Badge-DxtUJ9I1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./warning-BsyeZTUT.js";import"./clsx-B-dksMZM.js";import"./divWithClassName-B4nvZjDC.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./DataKey-COGXBUcQ.js";import"./useMergedRefs-B_kWwTNW.js";import"./Button-DEBg3Qkk.js";const f=b.forwardRef(({bsPrefix:l,active:j,disabled:d,eventKey:u,className:m,variant:n,action:h,as:p,...a},c)=>{l=N(l,"list-group-item");const[o,v]=B({key:L(u,a.href),active:j,...a}),k=P(g=>{if(d){g.preventDefault(),g.stopPropagation();return}o.onClick(g)});d&&a.tabIndex===void 0&&(a.tabIndex=-1,a["aria-disabled"]=!0);const w=p||(h?a.href?"a":"button":"div");return e.jsx(w,{ref:c,...a,...o,onClick:k,className:y(m,l,v.isActive&&"active",d&&"disabled",n&&`${l}-${n}`,h&&`${l}-action`)})});f.displayName="ListGroupItem";const I=b.forwardRef((l,j)=>{const{className:d,bsPrefix:u,variant:m,horizontal:n,numbered:h,as:p="div",...a}=C(l,{activeKey:"onSelect"}),c=N(u,"list-group");let o;return n&&(o=n===!0?"horizontal":`horizontal-${n}`),e.jsx(G,{ref:j,...a,as:p,className:y(d,c,m&&`${c}-${m}`,o&&`${c}-${o}`,h&&`${c}-numbered`)})});I.displayName="ListGroup";const s=Object.assign(I,{Item:f}),S=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Basic example"}),e.jsx("p",{className:"text-muted font-14",children:"The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed."}),e.jsxs(s,{children:[e.jsxs(s.Item,{children:[e.jsx("i",{className:"uil-google-drive-alt me-1"})," Google Drive"]}),e.jsxs(s.Item,{children:[e.jsx("i",{className:"uil-facebook-messenger me-1"})," Facebook Messenger"]}),e.jsxs(s.Item,{children:[e.jsx("i",{className:"uil-apple me-1"})," Apple Technology Company"]}),e.jsxs(s.Item,{children:[e.jsx("i",{className:"uil-intercom me-1"})," Intercom Support System"]}),e.jsxs(s.Item,{children:[e.jsx("i",{className:"uil-paypal me-1"})," Paypal Payment Gateway"]})]})]})}),D=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Active items"}),e.jsxs("p",{className:"text-muted font-14",children:["Add ",e.jsx("code",{children:".active"})," to a ",e.jsx("code",{children:"ListGroup.Item"})," to indicate the current active selection."]}),e.jsxs(s,{children:[e.jsxs(s.Item,{className:"active",children:[e.jsx("i",{className:"uil-google-drive-alt me-1"})," Google Drive"]}),e.jsxs(s.Item,{children:[e.jsx("i",{className:"uil-facebook-messenger me-1"})," Facebook Messenger"]}),e.jsxs(s.Item,{children:[e.jsx("i",{className:"uil-apple me-1"})," Apple Technology Company"]}),e.jsxs(s.Item,{children:[e.jsx("i",{className:"uil-intercom me-1"})," Intercom Support System"]}),e.jsxs(s.Item,{children:[e.jsx("i",{className:"uil-paypal me-1"})," Paypal Payment Gateway"]})]})]})}),F=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Disabled items"}),e.jsxs("p",{className:"text-muted font-14",children:["Add ",e.jsx("code",{children:".disabled"})," to a ",e.jsx("code",{children:"ListGroup.Item"})," to make it",e.jsx("em",{children:"appear"})," disabled."]}),e.jsxs(s,{children:[e.jsxs(s.Item,{className:"disabled",children:[e.jsx("i",{className:"uil-google-drive-alt me-1"})," Google Drive"]}),e.jsxs(s.Item,{children:[e.jsx("i",{className:"uil-facebook-messenger me-1"})," Facebook Messenger"]}),e.jsxs(s.Item,{children:[e.jsx("i",{className:"uil-apple me-1"})," Apple Technology Company"]}),e.jsxs(s.Item,{children:[e.jsx("i",{className:"uil-intercom me-1"})," Intercom Support System"]}),e.jsxs(s.Item,{children:[e.jsx("i",{className:"uil-paypal me-1"})," Paypal Payment Gateway"]})]})]})}),z=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Links and Buttons"}),e.jsxs("p",{className:"text-muted font-14",children:["Use ",e.jsx("code",{children:"tag"})," attribute along with ",e.jsx("code",{children:"action"})," to create",e.jsx("em",{children:"actionable"})," list group items with hover, disabled, and active states."]}),e.jsxs(s,{children:[e.jsx(s.Item,{href:"",action:!0,className:"active",children:"Google Drive"}),e.jsx(s.Item,{href:"",action:!0,children:"Facebook Messenger"}),e.jsx(s.Item,{as:"button",action:!0,children:"Apple Technology Company"}),e.jsx(s.Item,{as:"button",action:!0,children:"Intercom Support System"}),e.jsx(s.Item,{as:"button",action:!0,children:"Paypal Payment Gateway"})]})]})}),$=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Flush"}),e.jsxs("p",{className:"text-muted font-14",children:["Add ",e.jsx("code",{children:"flush"})," attribute to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards)."]}),e.jsxs(s,{variant:"flush",children:[e.jsx(s.Item,{children:"Google Drive"}),e.jsx(s.Item,{children:"Facebook Messenger"}),e.jsx(s.Item,{children:"Apple Technology Company"}),e.jsx(s.Item,{children:"Intercom Support System"}),e.jsx(s.Item,{children:"Paypal Payment Gateway"})]})]})}),M=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Horizontal"}),e.jsxs("p",{className:"text-muted font-14",children:["Add ",e.jsx("code",{children:"horizontal"})," prop to change the layout of list group items from vertical to horizontal across all breakpoints."]}),e.jsxs(s,{horizontal:!0,className:"mb-3",children:[e.jsx(s.Item,{children:"Google"}),e.jsx(s.Item,{children:"Whatsapp"}),e.jsx(s.Item,{children:"Facebook"})]}),e.jsxs(s,{horizontal:"sm",className:"mb-3",children:[e.jsx(s.Item,{children:"Apple"}),e.jsx(s.Item,{children:"PayPal"}),e.jsx(s.Item,{children:"Intercom"})]}),e.jsxs(s,{horizontal:"md",children:[e.jsx(s.Item,{children:"Google"}),e.jsx(s.Item,{children:"Whatsapp"}),e.jsx(s.Item,{children:"Facebook"})]})]})}),T=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Contextual classes"}),e.jsx("p",{className:"text-muted font-14",children:"Use contextual classes to style list items with a stateful background and color."}),e.jsxs(s,{children:[e.jsx(s.Item,{variant:"link",children:"Dapibus ac facilisis in"}),e.jsx(s.Item,{variant:"primary",children:"A simple primary list group item"}),e.jsx(s.Item,{variant:"secondary",children:"A simple secondary list group item"}),e.jsx(s.Item,{variant:"success",children:"A simple success list group item"}),e.jsx(s.Item,{variant:"info",children:"A simple info list group item"}),e.jsx(s.Item,{variant:"warning",children:"A simple warning list group item"}),e.jsx(s.Item,{variant:"danger",children:"A simple danger list group item"}),e.jsx(s.Item,{variant:"light",children:"A simple light list group item"}),e.jsx(s.Item,{variant:"dark",children:"A simple dark list group item"})]})]})}),R=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Contextual classes with Link"}),e.jsx("p",{className:"text-muted font-14",children:"Use contextual classes to style list items with a stateful background and color."}),e.jsxs(s,{children:[e.jsx(s.Item,{variant:"link",as:"a",href:"",action:!0,children:"Porta ac consectetur ac"}),e.jsx(s.Item,{variant:"primary",as:"a",href:"",action:!0,children:"A simple primary list group item"}),e.jsx(s.Item,{variant:"secondary",as:"a",href:"",action:!0,children:"A simple secondary list group item"}),e.jsx(s.Item,{variant:"success",as:"a",href:"",action:!0,children:"A simple success list group item"}),e.jsx(s.Item,{variant:"info",as:"a",href:"",action:!0,children:"A simple info list group item"}),e.jsx(s.Item,{variant:"warning",as:"a",href:"",action:!0,children:"A simple warning list group item"}),e.jsx(s.Item,{variant:"danger",as:"a",href:"",action:!0,children:"A simple danger list group item"}),e.jsx(s.Item,{variant:"light",as:"a",href:"",action:!0,children:"A simple light list group item"}),e.jsx(s.Item,{variant:"dark",as:"a",href:"",action:!0,children:"A simple dark list group item"})]})]})}),E=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Custom content"}),e.jsx("p",{className:"text-muted font-14",children:"Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox utilities."}),e.jsxs(s,{children:[e.jsxs(s.Item,{active:!0,children:[e.jsxs("div",{className:"d-flex w-100 justify-content-between",children:[e.jsx("h5",{className:"mb-1",children:"List group item heading"}),e.jsx("small",{className:"text-muted",children:"3 days ago"})]}),e.jsx("p",{className:"mb-1",children:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."}),e.jsx("small",{className:"text-muted",children:"Donec id elit non mi porta."})]}),e.jsxs(s.Item,{children:[e.jsxs("div",{className:"d-flex w-100 justify-content-between",children:[e.jsx("h5",{className:"mb-1",children:"List group item heading"}),e.jsx("small",{className:"text-muted",children:"3 days ago"})]}),e.jsx("p",{className:"mb-1",children:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."}),e.jsx("small",{className:"text-muted",children:"Donec id elit non mi porta."})]}),e.jsxs(s.Item,{children:[e.jsxs("div",{className:"d-flex w-100 justify-content-between",children:[e.jsx("h5",{className:"mb-1",children:"List group item heading"}),e.jsx("small",{className:"text-muted",children:"3 days ago"})]}),e.jsx("p",{className:"mb-1",children:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."}),e.jsx("small",{className:"text-muted",children:"Donec id elit non mi porta."})]})]})]})}),U=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"With badges"}),e.jsx("p",{className:"text-muted font-14",children:"Add badges to any list group item to show unread counts, activity, and more with the help of some utilities."}),e.jsxs(s,{children:[e.jsxs(s.Item,{className:"d-flex justify-content-between align-items-center",children:["Gmail Emails",e.jsx(r,{pill:!0,className:"badge bg-primary",children:"14"})]}),e.jsxs(s.Item,{className:"d-flex justify-content-between align-items-center",children:["Pending Payments",e.jsx(r,{pill:!0,className:"badge bg-success",children:"2"})]}),e.jsxs(s.Item,{className:"d-flex justify-content-between align-items-center",children:["Action Needed",e.jsx(r,{pill:!0,className:"badge bg-danger",children:"99+"})]}),e.jsxs(s.Item,{className:"d-flex justify-content-between align-items-center",children:["Payments Done",e.jsx(r,{pill:!0,className:"badge bg-success",children:"20+"})]})]})]})}),H=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Checkboxes and radios"}),e.jsxs("p",{className:"text-muted font-14",children:["Place Bootstrap’s checkboxes and radios within list group items and customize as needed. You can use them without"," ",e.jsx("code",{children:"<label>"}),"s, but please remember to include an"," ",e.jsx("code",{children:"aria-label"})," attribute and value for accessibility."]}),e.jsxs(s,{children:[e.jsxs(s.Item,{children:[e.jsx("input",{className:"form-check-input me-1",type:"checkbox",id:"listgroupcheckbox1",value:"","aria-label":"..."}),e.jsx("label",{htmlFor:"listgroupcheckbox1",children:"First checkbox"})]}),e.jsxs(s.Item,{children:[e.jsx("input",{className:"form-check-input me-1",type:"checkbox",id:"listgroupcheckbox2",value:"","aria-label":"..."}),e.jsx("label",{htmlFor:"listgroupcheckbox2",children:"Second checkbox"})]}),e.jsxs(s.Item,{children:[e.jsx("input",{className:"form-check-input me-1",type:"checkbox",id:"listgroupcheckbox3",value:"","aria-label":"..."}),e.jsx("label",{htmlFor:"listgroupcheckbox3",children:"Third checkbox"})]}),e.jsxs(s.Item,{children:[e.jsx("input",{className:"form-check-input me-1",type:"checkbox",id:"listgroupcheckbox4",value:"","aria-label":"..."}),e.jsx("label",{htmlFor:"listgroupcheckbox4",children:"Fourth checkbox"})]})]})]})}),W=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Numbered"}),e.jsxs("p",{className:"text-muted font-14",children:["Numbers are generated by ",e.jsx("code",{children:"counter-reset"})," on the",e.jsx("code",{children:"<ol>"}),", and then styled and placed with a"," ",e.jsx("code",{children:"::before"}),"psuedo-element on the ",e.jsx("code",{children:"<li>"})," with",e.jsx("code",{children:"counter-increment"})," and ",e.jsx("code",{children:"content"}),"."]}),e.jsxs(s,{as:"ol",className:"list-group-numbered",children:[e.jsxs(s.Item,{as:"li",className:"d-flex justify-content-between align-items-center",children:[e.jsxs("div",{className:"ms-2 me-auto",children:[e.jsx("div",{className:"fw-bold",children:"Subheading"}),"Cras justo odio"]}),e.jsx(r,{pill:!0,className:"badge bg-primary",children:"14"})]}),e.jsxs(s.Item,{as:"li",className:"d-flex justify-content-between align-items-center",children:[e.jsxs("div",{className:"ms-2 me-auto",children:[e.jsx("div",{className:"fw-bold",children:"Subheading"}),"Cras justo odio"]}),e.jsx(r,{pill:!0,className:"badge bg-primary",children:"14"})]}),e.jsxs(s.Item,{as:"li",className:"d-flex justify-content-between align-items-center",children:[e.jsxs("div",{className:"ms-2 me-auto",children:[e.jsx("div",{className:"fw-bold",children:"Subheading"}),"Cras justo odio"]}),e.jsx(r,{pill:!0,className:"badge bg-primary",children:"14"})]})]})]})}),de=()=>e.jsxs(A,{title:"List Group",children:[e.jsxs(x,{children:[e.jsx(i,{xl:4,children:e.jsx(S,{})}),e.jsx(i,{xl:4,children:e.jsx(D,{})}),e.jsx(i,{xl:4,children:e.jsx(F,{})})]}),e.jsxs(x,{children:[e.jsx(i,{xl:4,children:e.jsx(z,{})}),e.jsx(i,{xl:4,children:e.jsx($,{})}),e.jsx(i,{xl:4,children:e.jsx(M,{})})]}),e.jsxs(x,{children:[e.jsx(i,{xl:4,children:e.jsx(T,{})}),e.jsx(i,{xl:4,children:e.jsx(R,{})}),e.jsx(i,{xl:4,children:e.jsx(E,{})})]}),e.jsxs(x,{children:[e.jsx(i,{xl:4,children:e.jsx(U,{})}),e.jsx(i,{xl:4,children:e.jsx(H,{})}),e.jsx(i,{xl:4,children:e.jsx(W,{})})]})]});export{de as default};
