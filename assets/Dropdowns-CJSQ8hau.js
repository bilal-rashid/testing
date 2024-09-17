import{P as i,r as B,j as e,L as k}from"./index-F0uvlsHd.js";import{c as x}from"./color-variants-ZafkIRTa.js";import{P as T}from"./PageLayout-Cd-4jQXh.js";import{S as j}from"./SampleWrapper-DIB_9P9B.js";import{R as p}from"./Row-9hTZkyBg.js";import{C as c}from"./Col-CeeRnQxB.js";import{C as t}from"./Card-Cmn7cKYw.js";import{a as C,D as l}from"./DropdownButton-Ro6VXwNR.js";import{D as n}from"./Dropdown-CCtc8wHV.js";import{B as a}from"./ButtonGroup-C141adPl.js";import{B as K}from"./Button-DEBuu1m2.js";import"./divWithClassName-B4nvZjDC.js";import"./DataKey-COGXBUcQ.js";import"./listen-DOhMskc_.js";import"./SSRProvider-wOBfTkjq.js";import"./usePrevious-gswdWBZu.js";import"./NavContext-DCzKn6gs.js";import"./useEventCallback-s6m76CRA.js";import"./useCallbackRef-C_9nMhi0.js";import"./mergeOptionsWithPopperConfig-Bgqxz8md.js";import"./useWindow-m91wy-Xa.js";import"./warning-BsyeZTUT.js";import"./contains-xpjwsOxO.js";import"./Button-DEBg3Qkk.js";import"./hook-BcehJP6k.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Anchor-BaQl6fCi.js";import"./useMergedRefs-B_kWwTNW.js";import"./InputGroupContext-C-h8jlw8.js";import"./NavbarContext-C6pngPXu.js";const P={id:i.string,toggleLabel:i.string,href:i.string,target:i.string,onClick:i.func,title:i.node.isRequired,type:i.string,disabled:i.bool,align:C,menuRole:i.string,renderMenuOnMount:i.bool,rootCloseEvent:i.string,flip:i.bool,bsPrefix:i.string,variant:i.string,size:i.string},d=B.forwardRef(({id:r,bsPrefix:s,size:o,variant:m,title:g,type:f="button",toggleLabel:w="Toggle dropdown",children:I,onClick:y,href:v,target:N,menuRole:b,renderMenuOnMount:D,rootCloseEvent:A,flip:S,...h},M)=>e.jsxs(n,{ref:M,...h,as:a,children:[e.jsx(K,{size:o,variant:m,disabled:h.disabled,bsPrefix:s,href:v,target:N,onClick:y,type:f,children:g}),e.jsx(n.Toggle,{split:!0,id:r,size:o,variant:m,disabled:h.disabled,childBsPrefix:s,children:e.jsx("span",{className:"visually-hidden",children:w})}),e.jsx(n.Menu,{role:b,renderOnMount:D,rootCloseEvent:A,flip:S,children:I})]}));d.propTypes=P;d.displayName="SplitButton";function u(r){return r.charAt(0).toUpperCase()+r.slice(1)}const F=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Single button dropdowns"}),e.jsxs("p",{className:"text-muted font-14",children:["You can use ",e.jsx("code",{children:"DropdownButton"})," to create a simple dropdown. Also, you can use prop ",e.jsx("code",{children:"as"})," to create custom element typeof dropdown."]}),e.jsxs(p,{children:[e.jsx(c,{className:"col-auto",children:e.jsxs(l,{variant:"light",title:"Dropdown button",children:[e.jsx(n.Item,{href:"",children:"Action"}),e.jsx(n.Item,{href:"",children:"Another action"}),e.jsx(n.Item,{href:"",children:"Something else here"})]})}),e.jsx(c,{className:"col-auto",children:e.jsxs(n,{children:[e.jsx(n.Toggle,{as:k,to:"",className:"btn btn-secondary",id:"dropdown-basic",children:"Dropdown link"}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{href:"",children:"Action"}),e.jsx(n.Item,{href:"",children:"Another action"}),e.jsx(n.Item,{href:"",children:"Something else here"})]})]})})]})]})}),R=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Menu alignment"}),e.jsxs("p",{className:"text-muted font-14",children:["Passing ",e.jsx("code",{children:"right"})," to the ",e.jsx("code",{children:"menuAlign"})," prop on the",e.jsx("code",{children:" DropdownButton"})," to right align the dropdown menu."]}),e.jsxs(l,{variant:"light",align:"end",title:"Right-aligned menu",children:[e.jsx(n.Item,{href:"",children:"Action"}),e.jsx(n.Item,{href:"",children:"Another action"}),e.jsx(n.Item,{href:"",children:"Something else here"})]})]})}),z=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Variant"}),e.jsx("p",{className:"text-muted font-14 mb-3",children:"The best part is you can do this with any button variant, too:"}),x.map((r,s)=>e.jsxs(n,{as:a,className:"me-1",children:[e.jsx(n.Toggle,{variant:r,children:u(r)}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{href:"",children:"Action"}),e.jsx(n.Item,{href:"",children:"Another action"}),e.jsx(n.Item,{href:"",children:"Something else here"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{href:"",children:"Separated link"})]})]},s.toString()))]})}),E=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Animated Dropdown"}),e.jsxs("p",{className:"text-muted font-14",children:["Add ",e.jsx("code",{children:".dropdown-menu-animated"})," to a"," ",e.jsx("code",{children:"Dropdown.Menu"})," to have animated dropdown menu."]}),e.jsxs(n,{children:[e.jsx(n.Toggle,{variant:"light",children:"Animated Dropdown"}),e.jsxs(n.Menu,{className:"dropdown-menu-animated",children:[e.jsx(n.Item,{href:"",children:"Action"}),e.jsx(n.Item,{href:"",children:"Another action"}),e.jsx(n.Item,{href:"",children:"Something else here"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{href:"",children:"Separated link"})]})]})]})}),V=()=>{const r=[{type:l,name:"Dropup"},{type:d,name:"Split dropup"}];return e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Dropup variation"}),e.jsxs("p",{className:"text-muted font-14 mb-3",children:["Trigger dropdown menus above of their toggle elements, with the",e.jsx("code",{children:"drop"})," prop."]}),r.map((s,o)=>e.jsxs(s.type,{as:a,drop:"up",title:s.name,variant:"light",className:"me-1",children:[e.jsx(n.Item,{eventKey:"1",children:"Action"}),e.jsx(n.Item,{eventKey:"2",children:"Another action"}),e.jsx(n.Item,{eventKey:"3",children:"Something else here"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{eventKey:"4",children:"Separated link"})]},o.toString()))]})})},L=()=>{const r=[{type:l,name:"Dropstart"},{type:d,name:"Split dropstart"}];return e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Dropup variation"}),e.jsxs("p",{className:"text-muted font-14 mb-3",children:["Trigger dropdown menus left of their toggle elements, with the"," ",e.jsx("code",{children:"drop"}),"prop."]}),r.map((s,o)=>e.jsxs(s.type,{as:a,drop:"start",title:s.name,variant:"secondary",className:"me-1",children:[e.jsx(n.Item,{eventKey:"1",children:"Action"}),e.jsx(n.Item,{eventKey:"2",children:"Another action"}),e.jsx(n.Item,{eventKey:"3",children:"Something else here"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{eventKey:"4",children:"Separated link"})]},o.toString()))]})})},H=()=>{const r=[{type:l,name:"Dropend"},{type:d,name:"Split dropend"}];return e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Dropup variation"}),e.jsxs("p",{className:"text-muted font-14 mb-3",children:["Trigger dropdown menus right of their toggle elements, with the",e.jsx("code",{children:"drop"})," prop."]}),r.map((s,o)=>e.jsxs(s.type,{as:a,drop:"end",title:s.name,variant:"primary",className:"me-1",children:[e.jsx(n.Item,{eventKey:"1",children:"Action"}),e.jsx(n.Item,{eventKey:"2",children:"Another action"}),e.jsx(n.Item,{eventKey:"3",children:"Something else here"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{eventKey:"4",children:"Separated link"})]},o.toString()))]})})},W=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Split button dropdowns"}),e.jsxs("p",{className:"text-muted font-14 mb-3",children:["You can split button dropdowns by adding ",e.jsx("code",{children:"SplitButton"}),"."]}),x.map((r,s)=>e.jsxs(d,{variant:r,title:u(r),className:"me-1 mb-1",children:[e.jsx(n.Item,{eventKey:"1",children:"Action"}),e.jsx(n.Item,{eventKey:"2",children:"Another action"}),e.jsx(n.Item,{eventKey:"3",children:"Something else here"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{eventKey:"4",children:"Separated link"})]},s.toString()))]})}),O=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Sizing"}),e.jsx("p",{className:"text-muted font-14",children:"Button dropdowns work with buttons of all sizes, including default and split dropdown buttons."}),[l,d].map((r,s)=>e.jsxs(r,{as:a,className:"me-1",size:"lg",title:"Large button",variant:"light",children:[e.jsx(n.Item,{eventKey:"1",children:"Action"}),e.jsx(n.Item,{eventKey:"2",children:"Another action"}),e.jsx(n.Item,{eventKey:"3",children:"Something else here"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{eventKey:"4",children:"Separated link"})]},s.toString())),[l,d].map((r,s)=>e.jsxs(r,{as:a,className:"me-1",size:"sm",title:"Small button",variant:"light",children:[e.jsx(n.Item,{eventKey:"1",children:"Action"}),e.jsx(n.Item,{eventKey:"2",children:"Another action"}),e.jsx(n.Item,{eventKey:"3",children:"Something else here"}),e.jsx(n.Divider,{}),e.jsx(n.Item,{eventKey:"4",children:"Separated link"})]},s.toString()))]})}),Y=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Active Item"}),e.jsxs("p",{className:"text-muted font-14",children:["Add ",e.jsx("code",{children:"active"})," prop to item in the dropdown to",e.jsx("strong",{children:"style them as active"}),"."]}),e.jsxs(n,{children:[e.jsx(n.Toggle,{variant:"secondary",children:"Active Item"}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{children:"Regular link"}),e.jsx(n.Item,{active:!0,children:"Active link"}),e.jsx(n.Item,{children:"Another link"})]})]})]})}),q=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Disabled Item"}),e.jsxs("p",{className:"text-muted font-14",children:["Add ",e.jsx("code",{children:"disabled"})," prop to item in the dropdown to",e.jsx("strong",{children:"style them as disabled"}),"."]}),e.jsxs(n,{children:[e.jsx(n.Toggle,{children:"Active Item"}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{children:"Regular link"}),e.jsx(n.Item,{disabled:!0,children:"Disabled link"}),e.jsx(n.Item,{children:"Another link"})]})]})]})}),G=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Headers"}),e.jsx("p",{className:"text-muted font-14",children:"Add a header to label sections of actions."}),e.jsxs(n,{children:[e.jsx(n.Toggle,{variant:"secondary",children:"Header"}),e.jsxs(n.Menu,{children:[e.jsx(n.Header,{children:"Dropdown header"}),e.jsx(n.Item,{children:"Action"}),e.jsx(n.Item,{children:"Another action"})]})]})]})}),U=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Text"}),e.jsx("p",{className:"text-muted font-14",children:"Place any freeform text within a dropdown menu with text and use spacing utilities. Note that you’ll likely need additional sizing styles to constrain the menu width."}),e.jsxs(n,{children:[e.jsx(n.Toggle,{children:"Text Dropdown"}),e.jsxs(n.Menu,{className:"p-3 text-muted",style:{maxWidth:"200px"},children:[e.jsx("p",{children:"Some example text that's free-flowing within the dropdown menu."}),e.jsx("p",{className:"mb-0",children:"And this is more example text."})]})]})]})}),J=()=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx("h4",{className:"header-title",children:"Forms"}),e.jsx("p",{className:"text-muted font-14",children:"Put a form within a dropdown menu, or make it into a dropdown menu, and use margin or padding utilities to give it the negative space you require."}),e.jsxs(n,{children:[e.jsx(n.Toggle,{variant:"secondary",children:"Form"}),e.jsxs(n.Menu,{children:[e.jsxs("form",{className:"px-4 py-3",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"exampleDropdownFormEmail1",className:"form-label",children:"Email address"}),e.jsx("input",{type:"email",className:"form-control",id:"exampleDropdownFormEmail1",placeholder:"email@example.com"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"exampleDropdownFormPassword1",className:"form-label",children:"Password"}),e.jsx("input",{type:"password",className:"form-control",id:"exampleDropdownFormPassword1",placeholder:"Password"})]}),e.jsx("div",{className:"mb-2",children:e.jsxs("div",{className:"form-check",children:[e.jsx("input",{type:"checkbox",className:"form-check-input",id:"dropdownCheck"}),e.jsx("label",{className:"form-check-label",htmlFor:"dropdownCheck",children:"Remember me"})]})}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Sign in"})]}),e.jsx(n.Divider,{}),e.jsx(n.Item,{eventKey:"4",children:"New around here? Sign up"}),e.jsx(n.Item,{eventKey:"4",children:"Forgot password?"})]})]})]})}),Q=()=>e.jsx(j,{title:"Auto Close Behaviour",subText:e.jsxs(e.Fragment,{children:["By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the",e.jsx("code",{children:"autoClose"})," option to change this behavior of the dropdown."]}),children:e.jsxs("div",{className:"d-flex gap-1",children:[e.jsxs(n,{className:"d-inline",children:[e.jsx(n.Toggle,{variant:"secondary",children:"Default Dropdown"}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{href:"#",children:"Menu Item"}),e.jsx(n.Item,{href:"#",children:"Menu Item"}),e.jsx(n.Item,{href:"#",children:"Menu Item"})]})]}),e.jsxs(n,{className:"d-inline",autoClose:"inside",children:[e.jsx(n.Toggle,{variant:"secondary",id:"dropdown-autoclose-inside",children:"Clickable Outside"}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{href:"#",children:"Menu Item"}),e.jsx(n.Item,{href:"#",children:"Menu Item"}),e.jsx(n.Item,{href:"#",children:"Menu Item"})]})]}),e.jsxs(n,{className:"d-inline",autoClose:"outside",children:[e.jsx(n.Toggle,{variant:"secondary",id:"dropdown-autoclose-outside",children:"Clickable Inside"}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{href:"#",children:"Menu Item"}),e.jsx(n.Item,{href:"#",children:"Menu Item"}),e.jsx(n.Item,{href:"#",children:"Menu Item"})]})]}),e.jsxs(n,{className:"d-inline",autoClose:!1,children:[e.jsx(n.Toggle,{variant:"secondary",id:"dropdown-autoclose-false",children:"Manual Close"}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{href:"#",children:"Menu Item"}),e.jsx(n.Item,{href:"#",children:"Menu Item"}),e.jsx(n.Item,{href:"#",children:"Menu Item"})]})]})]})}),X=()=>e.jsx(j,{title:"Centered Dropdowns",subText:e.jsxs(e.Fragment,{children:["Make the dropdown menu centered below the toggle with"," ",e.jsx("code",{children:".dropdown-center"})," on the parent element."]}),children:e.jsxs("div",{className:"hstack gap-2",children:[e.jsxs(n,{drop:"down-centered",children:[e.jsx(n.Toggle,{variant:"secondary",children:"Centered Dropdown"}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{href:"#",children:"Menu Item"}),e.jsx(n.Item,{href:"#",children:"Menu Item"}),e.jsx(n.Item,{href:"#",children:"Menu Item"})]})]}),e.jsxs(n,{drop:"up-centered",children:[e.jsx(n.Toggle,{variant:"secondary",id:"dropdown-autoclose-inside",children:"Centered Dropup"}),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{href:"#",children:"Menu Item"}),e.jsx(n.Item,{href:"#",children:"Menu Item"}),e.jsx(n.Item,{href:"#",children:"Menu Item"})]})]})]})}),Me=()=>e.jsx(T,{title:"Dropdowns",children:e.jsxs(p,{children:[e.jsxs(c,{lg:6,children:[e.jsx(F,{}),e.jsx(z,{}),e.jsx(E,{}),e.jsx(V,{}),e.jsx(H,{}),e.jsx(q,{}),e.jsx(U,{})]}),e.jsxs(c,{lg:6,children:[e.jsx(R,{}),e.jsx(W,{}),e.jsx(O,{}),e.jsx(L,{}),e.jsx(Y,{}),e.jsx(G,{}),e.jsx(X,{}),e.jsx(Q,{}),e.jsx(J,{})]})]})});export{Me as default};
