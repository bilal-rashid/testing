import{o as U,a as T,r as i,j as e,Q as S,R as Q,b as q}from"./index-F0uvlsHd.js";import{c as V,a as R}from"./object-DkfBSX30.js";import{u as $}from"./index.esm-D7_iMr1k.js";import{o as A}from"./yup-T7nDE8GX.js";import{F as B}from"./FormInput-BqRBY1DN.js";import"./world-J20cQgd_.js";import{L as G}from"./LoadingButton-B6IRlRGW.js";import{M as J,u as E,g as W}from"./index-BB-SF9mV.js";import{R as X}from"./Row-9hTZkyBg.js";import{C as L}from"./Col-CeeRnQxB.js";import{B as N}from"./Button-DEBuu1m2.js";import{O as K,T as O}from"./OverlayTrigger-CEqUEWRT.js";import{T as Y,S as Z}from"./TableFilters-C726Ijqr.js";import{P as _}from"./PageLayout-Cd-4jQXh.js";import{C as M}from"./Card-Cmn7cKYw.js";import"./Form-CTfXWlVo.js";import"./ElementChildren-DaDnB9c6.js";import"./InputGroupContext-C-h8jlw8.js";import"./setPrototypeOf-DgZC2w_0.js";import"./warning-BsyeZTUT.js";import"./clsx-B-dksMZM.js";import"./Modal-C5mqPxj_.js";import"./listen-DOhMskc_.js";import"./useCallbackRef-C_9nMhi0.js";import"./useEventCallback-s6m76CRA.js";import"./useMergedRefs-B_kWwTNW.js";import"./hasClass-CJ0GaH7t.js";import"./useWindow-m91wy-Xa.js";import"./NoopTransition-DmAqiXSQ.js";import"./TransitionWrapper-Cb4OEx4M.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./AbstractModalHeader-fWu4g0rU.js";import"./contains-xpjwsOxO.js";import"./usePrevious-gswdWBZu.js";import"./DataKey-COGXBUcQ.js";import"./CloseButton-BKCUVlX4.js";import"./Fade-Do2bjijw.js";import"./divWithClassName-B4nvZjDC.js";import"./Button-DEBg3Qkk.js";import"./hook-BcehJP6k.js";import"./extends-CF3RwP-h.js";import"./mergeOptionsWithPopperConfig-Bgqxz8md.js";import"./simplebar-react.esm-Cne10Fc6.js";import"./index-DERQo0GJ.js";import"./Stack-B2DR9NGx.js";const ee=({show:g,onHide:f,paginationState:a,filteredQuery:s,sorting:d,isEdit:t=!1,data:r})=>{const{productsStore:m}=T(),{createProduct:y,loading:h,updateProduct:p,loadProducts:b}=m,[n]=i.useState({id:t&&(r==null?void 0:r.id)||"",name:t&&(r==null?void 0:r.name)||"",description:t&&(r==null?void 0:r.description)||"",createdOn:t&&(r==null?void 0:r.createdOn)||""}),j=V({name:R().required("Product name is required"),description:R().required("Description is required")}),o={name:n.name,description:n.description},{reset:z,register:c,handleSubmit:C,formState:{isDirty:v,isValid:I,isSubmitting:w}}=$({defaultValues:o,resolver:A(j)}),x=()=>{z(),f()},k=async u=>{if(t){if(!(r!=null&&r.id))return;try{await p(u,r.id),x(),S.info("Product Updated Successfully!"),await b({pageNumber:a.pageIndex,pageSize:a.pageSize,keyword:s,sorting:d})}catch(l){const F=(l==null?void 0:l.message)||"Update product failed";S.error(F)}}else try{await y(u),x(),S.success("Product Added Successfully!"),await b({pageNumber:a.pageIndex,pageSize:a.pageSize,keyword:s,sorting:d})}catch(l){const F=(l==null?void 0:l.message)||"Create product failed";S.error(F)}},P=async()=>{try{if(!(r!=null&&r.id))return;await m.deleteProduct(r.id),S.error("Product Deleted Successfully!"),await m.loadProducts({pageNumber:1,pageSize:a.pageSize,keyword:s,sorting:d})}catch(u){const l=(u==null?void 0:u.message)||"Update product failed";S.error(l)}};return e.jsx(J,{show:g,onHide:x,headerTitle:t?"Edit Product":"Add Product",children:e.jsxs("form",{onSubmit:C(k),children:[e.jsxs(X,{className:"mt-1",children:[e.jsx(L,{className:"mt-2",xs:12,sm:8,children:e.jsx(B,{type:"text",label:"Name",placeholder:"Enter Product Name",register:c,name:"name"})}),e.jsx(L,{className:"mt-2",xs:12,children:e.jsx(B,{type:"textarea",rows:"2",label:"Description",placeholder:"Enter Product Description",register:c,name:"description"})})]}),e.jsxs("div",{className:"d-flex w-100 my-3 gap-2",children:[t&&e.jsx(N,{variant:"danger",onClick:P,children:"Delete"}),e.jsx(N,{size:"sm",variant:"light",onClick:()=>x(),className:"ms-auto",children:"Cancel"}),e.jsx(G,{type:"submit",variant:"primary",disabled:!v||!I||w,loading:w||h,children:"Save"})]})]})})},H=U(ee),D=({pagination:g,filteredQuery:f,sorting:a})=>[{header:"Name",enableSorting:!0,accessorKey:"name",cell:({row:s})=>e.jsx("strong",{className:"text-capitalize text-dark",children:s.original.name})},{header:"Description",enableSorting:!0,accessorKey:"description"},{header:"Guid",enableSorting:!0,accessorKey:"id"},{header:"",accessorKey:"edit",cell:s=>{var h;const{accountStore:d}=T(),{show:t,onShow:r,onHide:m}=E(),y=p=>e.jsx(O,{id:"button-tooltip",className:"font-14",...p,children:"Basic user cannot use this feature"});return e.jsxs(Q.Fragment,{children:[((h=d.currentUser)==null?void 0:h.roleId)!==q.basic?e.jsx("button",{className:"btn btn-soft-primary rounded-pill",onClick:r,children:"Edit"}):e.jsx(K,{placement:"bottom-start",delay:{show:250,hide:400},overlay:y,children:e.jsx("button",{className:"btn btn-soft-primary rounded-pill","aria-readonly":"true",children:"Edit"})}),t&&e.jsx(H,{isEdit:!0,show:t,onHide:m,data:s.row.original,paginationState:{pageIndex:g.pageIndex+1,pageSize:g.pageSize},filteredQuery:f,sorting:a})]})}}],re=()=>{var P;const{productsStore:g,accountStore:f,layoutStore:a}=T(),{loadProducts:s,products:d,productMetaData:t,loadingInitial:r}=g,{show:m,onShow:y,onHide:h}=E(),[p,b]=i.useState(""),[n,j]=i.useState(""),[o,z]=i.useState({pageIndex:0,pageSize:a.pageSize}),[c,C]=i.useState([]),v=i.useMemo(()=>d,[d]),I=i.useMemo(()=>D({pagination:o,filteredQuery:n,sorting:c}),[D,o,n,c]),w=i.useCallback(()=>{b(""),j(p),s({pageNumber:o.pageIndex+1,pageSize:o.pageSize,keyword:p})},[o,p]),x=i.useCallback(()=>{j(""),s({pageNumber:o.pageIndex+1,pageSize:o.pageSize})},[o]),k=u=>e.jsx(O,{id:"button-tooltip",className:"font-14",...u,children:"Basic user cannot use this feature"});return i.useEffect(()=>{s({pageNumber:o.pageIndex+1,pageSize:o.pageSize,keyword:n,sorting:c})},[s,o.pageSize,o.pageIndex,n,c]),e.jsxs(_,{title:"Products",action:((P=f.currentUser)==null?void 0:P.roleId)!==q.basic?e.jsx(N,{variant:"primary",onClick:y,children:"New Product"}):e.jsx(K,{placement:"bottom-start",delay:{show:250,hide:400},overlay:k,children:e.jsx("span",{children:e.jsx(N,{disabled:!0,variant:"primary",children:"New Product"})})}),children:[e.jsx(M,{className:"pt-2",children:e.jsxs(M.Body,{children:[e.jsx(Y,{searchInputPlaceholder:"Search products...",handleClearFilters:x,searchQuery:p,setSearchQuery:b,filteredQuery:n,setFilteredQuery:j,handleFilter:w}),m&&e.jsx(H,{show:m,onHide:h,isEdit:!1,paginationState:{pageIndex:o.pageIndex+1,pageSize:o.pageSize},filteredQuery:n,sorting:c}),e.jsx(Z,{data:v,columns:I,getCoreRowModel:W(),sorting:c,setSorting:C,pagination:o,setPagination:z,pageCount:(t==null?void 0:t.totalPages)??0,totalCount:(t==null?void 0:t.totalCount)??0,isLoading:r})]})}),e.jsx("div",{className:"mb-2",children:e.jsx("small",{children:"Server-side pagination with sorting & filtering"})})]})},Ge=U(re);export{Ge as default};
