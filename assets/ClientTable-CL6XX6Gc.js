import{g as L,R as O,j as r,o as k,a as z,r as y,S as W}from"./index-F0uvlsHd.js";import{S as D,a as G,b as A,c as B,d as q,f as R,P as H,e as V}from"./index-BB-SF9mV.js";import{S as U}from"./simplebar-react.esm-Cne10Fc6.js";import{c as E}from"./clsx-B-dksMZM.js";import{_ as X,i as N,d as Z}from"./object-DkfBSX30.js";import{R as J}from"./Row-9hTZkyBg.js";import{C as K}from"./Col-CeeRnQxB.js";var Q=X,Y=function(){return Q.Date.now()},ee=Y,te=/\s/;function ne(e){for(var t=e.length;t--&&te.test(e.charAt(t)););return t}var re=ne,ae=re,ie=/^\s+/;function se(e){return e&&e.slice(0,ae(e)+1).replace(ie,"")}var oe=se,le=oe,F=N,de=Z,_=NaN,ce=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,ue=/^0o[0-7]+$/i,fe=parseInt;function me(e){if(typeof e=="number")return e;if(de(e))return _;if(F(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=F(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=le(e);var a=ge.test(e);return a||ue.test(e)?fe(e.slice(2),a?2:8):ce.test(e)?_:+e}var xe=me,be=N,T=ee,M=xe,pe="Expected a function",Se=Math.max,he=Math.min;function ve(e,t,a){var o,g,m,i,s,u,x=0,S=!1,b=!1,l=!0;if(typeof e!="function")throw new TypeError(pe);t=M(t)||0,be(a)&&(S=!!a.leading,b="maxWait"in a,m=b?Se(M(a.maxWait)||0,t):m,l="trailing"in a?!!a.trailing:l);function c(n){var f=o,p=g;return o=g=void 0,x=n,i=e.apply(p,f),i}function d(n){return x=n,s=setTimeout(h,t),S?c(n):i}function v(n){var f=n-u,p=n-x,C=t-f;return b?he(C,m-p):C}function I(n){var f=n-u,p=n-x;return u===void 0||f>=t||f<0||b&&p>=m}function h(){var n=T();if(I(n))return P(n);s=setTimeout(h,v(n))}function P(n){return s=void 0,l&&o?c(n):(o=g=void 0,i)}function w(){s!==void 0&&clearTimeout(s),x=0,o=u=g=s=void 0}function $(){return s===void 0?i:P(T())}function j(){var n=T(),f=I(n);if(o=arguments,g=this,u=n,f){if(s===void 0)return d(u);if(b)return clearTimeout(s),s=setTimeout(h,t),c(u)}return s===void 0&&(s=setTimeout(h,t)),i}return j.cancel=w,j.flush=$,j}var je=ve;const Te=L(je),Ie=({globalFilter:e,setGlobalFilter:t,inputProps:a})=>{const[o,g]=O.useState(e),m=Te(i=>{t(i||"")},200);return r.jsx(D,{style:{maxWidth:"250px"},value:o||"",label:"Search",onChange:i=>{g(i.target.value),m(i.target.value)},...a})},Pe=e=>r.jsx(J,{children:r.jsx(K,{xs:12,md:3,className:"mb-2",children:r.jsx(Ie,{...e})})});function Ce(e){const{filterFieldPlaceholder:t,isLoading:a,rowClick:o,hidePagination:g,showFooter:m,...i}=e,{layoutStore:s}=z(),[u,x]=y.useState(""),[S,b]=y.useState([]),l=G({getFilteredRowModel:A(),getPaginationRowModel:B(),getSortedRowModel:q(),state:{globalFilter:u,sorting:S},onGlobalFilterChange:c=>{x(c)},onSortingChange:b,initialState:{pagination:{pageIndex:0,pageSize:s.pageSize}},...i});return r.jsxs("div",{children:[r.jsx(Pe,{globalFilter:l.getState().globalFilter,setGlobalFilter:l.setGlobalFilter,inputProps:{placeholder:t}}),r.jsxs("div",{className:"table-responsive",children:[r.jsxs(U,{children:[r.jsxs("table",{className:E("table table-striped table-centered w-100 nowrap dataTable no-footer"),children:[r.jsx("thead",{children:l.getHeaderGroups().map(c=>r.jsx("tr",{children:c.headers.map(({column:d,getContext:v})=>r.jsx("th",{onClick:d.getToggleSortingHandler(),className:E({sorting_desc:d.getIsSorted()==="desc",sorting_asc:d.getIsSorted()==="asc",sorting:d.columnDef.enableSorting===!0,"cursor-pointer":d.columnDef.enableSorting===!0}),children:R(d.columnDef.header,v())},d.id))},c.id))}),!a&&r.jsx("tbody",{children:l.getRowModel().rows.map(c=>r.jsx("tr",{onClick:o?()=>o==null?void 0:o(c.original):void 0,children:c.getVisibleCells().map(d=>r.jsx("td",{children:R(d.column.columnDef.cell,d.getContext())},d.id))},c.id))})]}),a&&r.jsx("div",{className:"my-4 w-100 d-flex justify-content-center",children:r.jsx(W,{})})]}),!g&&r.jsx(H,{queryPageCount:l.getPageCount(),queryPageSize:l.getState().pagination.pageSize,queryPageIndex:l.getState().pagination.pageIndex,totalCount:i.data.length,isLoading:a===void 0?!0:a,goToPage:l.setPageIndex,setPageSize:l.setPageSize,sizePerPageList:V})]})]})}const we=k(Ce);export{we as C};
