import{r as u,j as e,L as c,R as g}from"./index-F0uvlsHd.js";import{C as w}from"./world-J20cQgd_.js";import{P as y}from"./PageLayout-Cd-4jQXh.js";import{S as v}from"./simplebar-react.esm-Cne10Fc6.js";import{c as r}from"./clsx-B-dksMZM.js";import{D as h}from"./Dropdown-CCtc8wHV.js";import{C as l}from"./Card-Cmn7cKYw.js";import{_ as N}from"./react-apexcharts.min-CoVsIMwg.js";import{T as S}from"./Table-DibADfYr.js";import{P as p}from"./ProgressBar-DZZJPJZT.js";import{R as x}from"./Row-9hTZkyBg.js";import{C as i}from"./Col-CeeRnQxB.js";import"./setPrototypeOf-DgZC2w_0.js";import"./warning-BsyeZTUT.js";import"./index-DERQo0GJ.js";import"./DataKey-COGXBUcQ.js";import"./listen-DOhMskc_.js";import"./SSRProvider-wOBfTkjq.js";import"./usePrevious-gswdWBZu.js";import"./NavContext-DCzKn6gs.js";import"./useEventCallback-s6m76CRA.js";import"./useCallbackRef-C_9nMhi0.js";import"./mergeOptionsWithPopperConfig-Bgqxz8md.js";import"./useWindow-m91wy-Xa.js";import"./contains-xpjwsOxO.js";import"./Button-DEBg3Qkk.js";import"./hook-BcehJP6k.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./Anchor-BaQl6fCi.js";import"./useMergedRefs-B_kWwTNW.js";import"./InputGroupContext-C-h8jlw8.js";import"./NavbarContext-C6pngPXu.js";import"./Button-DEBuu1m2.js";import"./divWithClassName-B4nvZjDC.js";import"./ElementChildren-DaDnB9c6.js";function k(s={},t){const a=t+new Date().getTime(),[n,m]=u.useState();return u.useEffect(()=>{if(!n){const o=new window.jsVectorMap({selector:"#"+a,map:t,...s});m(o)}},[a,n,s,t]),{selectorId:a}}const C=({width:s,height:t,options:a})=>{const{selectorId:n}=k(a,"world");return e.jsx("div",{id:n,style:{width:s,height:t}})},j=({title:s,containerClass:t,icon:a,menuItems:n})=>e.jsxs("div",{className:r(t),children:[typeof s=="string"?e.jsx("h4",{className:"header-title mb-0",children:s}):s,e.jsxs(h,{children:[e.jsx(h.Toggle,{as:c,to:"",className:"arrow-none card-drop",children:e.jsx("i",{className:r(a||"mdi mdi-dots-vertical")})}),e.jsx(h.Menu,{align:"end",children:(n||[]).map((m,o)=>e.jsxs(g.Fragment,{children:[m.hasDivider&&e.jsx(h.Divider,{as:"div"}),e.jsxs(h.Item,{className:r(m.variant?m.variant:""),children:[m.icon&&e.jsx("i",{className:r(m.icon,"me-1")}),m.label]})]},o.toString()))})]})]}),f=({textClass:s,bgClass:t,icon:a,title:n,stats:m,trend:o,description:b})=>e.jsx(l,{className:r("widget-flat",t),children:e.jsxs(l.Body,{children:[a&&e.jsx("div",{className:"float-end",children:e.jsx("i",{className:r(a,"widget-icon")})}),e.jsx("h5",{className:r("fw-normal","mt-0",s||"text-muted"),title:b,children:n}),e.jsx("h3",{className:r("mt-3","mb-3",s||null),children:m}),o&&e.jsxs("p",{className:r("mb-0",s||"text-muted"),children:[e.jsxs("span",{className:r(o.textClass,"me-2"),children:[e.jsx("i",{className:r(o.icon)})," ",o.value]}),e.jsx("span",{className:"text-nowrap",children:o.time})]})]})}),D=({className:s,children:t,tag:a="div"})=>{const n=a;return e.jsx(n,{className:r("timeline-alt","py-0",s),children:t})},d=({className:s,children:t,tag:a="div"})=>{const n=a;return e.jsx(n,{className:r("timeline-item",s),children:t})},A=()=>e.jsxs(l,{children:[e.jsx(l.Body,{className:"pb-0",children:e.jsx(j,{containerClass:"d-flex align-items-center justify-content-between mb-2",title:"Recent Activity",menuItems:[{label:"Sales Report"},{label:"Export Report"},{label:"Profit"},{label:"Action"}]})}),e.jsx(v,{style:{maxHeight:"412px",width:"100%"},children:e.jsx(l.Body,{className:"py-0",children:e.jsxs(D,{children:[e.jsxs(d,{children:[e.jsx("i",{className:"mdi mdi-upload bg-info-lighten text-info timeline-icon"}),e.jsxs("div",{className:"timeline-item-info",children:[e.jsx(c,{to:"",className:"text-info fw-bold mb-1 d-block",children:"You sold an item"}),e.jsx("small",{children:"Paul Burgess just purchased “Nano - Admin Dashboard”!"}),e.jsx("p",{className:"mb-0 pb-2",children:e.jsx("small",{className:"text-muted",children:"5 minutes ago"})})]})]}),e.jsxs(d,{children:[e.jsx("i",{className:"mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"}),e.jsxs("div",{className:"timeline-item-info",children:[e.jsx(c,{to:"",className:"text-primary fw-bold mb-1 d-block",children:"Product on the Bootstrap Market"}),e.jsxs("small",{children:["Dave Gamache added",e.jsx("span",{className:"fw-bold",children:"Admin Dashboard"})]}),e.jsx("p",{className:"mb-0 pb-2",children:e.jsx("small",{className:"text-muted",children:"30 minutes ago"})})]})]}),e.jsxs(d,{children:[e.jsx("i",{className:"mdi mdi-microphone bg-info-lighten text-info timeline-icon"}),e.jsxs("div",{className:"timeline-item-info",children:[e.jsx(c,{to:"",className:"text-info fw-bold mb-1 d-block",children:"Robert Delaney"}),e.jsxs("small",{children:["Send you message",e.jsx("span",{className:"fw-bold",children:'"Are you there?"'})]}),e.jsx("p",{className:"mb-0 pb-2",children:e.jsx("small",{className:"text-muted",children:"2 hours ago"})})]})]}),e.jsxs(d,{children:[e.jsx("i",{className:"mdi mdi-upload bg-primary-lighten text-primary timeline-icon"}),e.jsxs("div",{className:"timeline-item-info",children:[e.jsx(c,{to:"",className:"text-primary fw-bold mb-1 d-block",children:"Audrey Tobey"}),e.jsxs("small",{children:["Uploaded a photo ",e.jsx("span",{className:"fw-bold",children:'"Error.jpg"'})]}),e.jsx("p",{className:"mb-0 pb-2",children:e.jsx("small",{className:"text-muted",children:"14 hours ago"})})]})]}),e.jsxs(d,{children:[e.jsx("i",{className:"mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"}),e.jsxs("div",{className:"timeline-item-info",children:[e.jsx(c,{to:"",className:"text-primary fw-bold mb-1 d-block",children:"Product on the Bootstrap Market"}),e.jsxs("small",{children:["Dave Gamache added",e.jsx("span",{className:"fw-bold",children:"Admin Dashboard"})]}),e.jsx("p",{className:"mb-0 pb-2",children:e.jsx("small",{className:"text-muted",children:"30 minutes ago"})})]})]}),e.jsxs(d,{children:[e.jsx("i",{className:"mdi mdi-microphone bg-info-lighten text-info timeline-icon"}),e.jsxs("div",{className:"timeline-item-info",children:[e.jsx(c,{to:"",className:"text-info fw-bold mb-1 d-block",children:"Robert Delaney"}),e.jsxs("small",{children:["Send you message",e.jsx("span",{className:"fw-bold",children:'"Are you there?"'})]}),e.jsx("p",{className:"mb-0 pb-2",children:e.jsx("small",{className:"text-muted",children:"2 hours ago"})})]})]}),e.jsxs(d,{children:[e.jsx("i",{className:"mdi mdi-upload bg-primary-lighten text-primary timeline-icon"}),e.jsxs("div",{className:"timeline-item-info",children:[e.jsx(c,{to:"",className:"text-primary fw-bold mb-1 d-block",children:"Audrey Tobey"}),e.jsxs("small",{children:["Uploaded a photo ",e.jsx("span",{className:"fw-bold",children:'"Error.jpg"'})]}),e.jsx("p",{className:"mb-0 pb-2",children:e.jsx("small",{className:"text-muted",children:"14 hours ago"})})]})]})]})})})]}),P=()=>{const s={chart:{height:260,type:"bar",stacked:!0,parentHeightOffset:0,toolbar:{show:!1},zoom:{enabled:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"20%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},legend:{show:!1},colors:["#727cf5","#e3eaef"],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{labels:{formatter:function(a){return a+"k"}}},fill:{opacity:1},tooltip:{y:{formatter:function(a){return"$"+a+"k"}}}},t=[{name:"Actual",data:[65,59,80,81,56,89,40,32,65,59,80,81]},{name:"Projection",data:[89,40,32,65,59,80,81,56,89,40,65,59]}];return e.jsx(l,{className:"card-h-100",children:e.jsxs(l.Body,{children:[e.jsx(j,{containerClass:"d-flex align-items-center justify-content-between mb-2",title:"Projections Vs Actuals",menuItems:[{label:"Sales Report"},{label:"Export Report"},{label:"Profit"},{label:"Action"}]}),e.jsx("div",{dir:"ltr",children:e.jsx(N,{options:s,series:t,type:"bar",className:"apex-charts",height:255})})]})})},R=()=>e.jsxs(l,{children:[e.jsxs(l.Header,{className:"d-flex justify-content-between align-items-center",children:[e.jsx("h4",{className:"header-title",children:"Top Selling Products"}),e.jsxs(c,{to:"",className:"btn btn-sm btn-light",children:["Export ",e.jsx("i",{className:"mdi mdi-download ms-1"})]})]}),e.jsx(l.Body,{className:"pt-0",children:e.jsx(S,{hover:!0,responsive:!0,className:"mb-0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"ASOS Ridley High Waist"}),e.jsx("span",{className:"text-muted font-13",children:"07 April 2018"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$79.49"}),e.jsx("span",{className:"text-muted font-13",children:"Price"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"82"}),e.jsx("span",{className:"text-muted font-13",children:"Quantity"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$6,518.18"}),e.jsx("span",{className:"text-muted font-13",children:"Amount"})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"Marco Lightweight Shirt"}),e.jsx("span",{className:"text-muted font-13",children:"25 March 2018"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$128.50"}),e.jsx("span",{className:"text-muted font-13",children:"Price"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"37"}),e.jsx("span",{className:"text-muted font-13",children:"Quantity"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$4,754.50"}),e.jsx("span",{className:"text-muted font-13",children:"Amount"})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"Half Sleeve Shirt"}),e.jsx("span",{className:"text-muted font-13",children:"17 March 2018"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$39.99"}),e.jsx("span",{className:"text-muted font-13",children:"Price"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"64"}),e.jsx("span",{className:"text-muted font-13",children:"Quantity"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$2,559.36"}),e.jsx("span",{className:"text-muted font-13",children:"Amount"})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"Lightweight Jacket"}),e.jsx("span",{className:"text-muted font-13",children:"12 March 2018"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$20.00"}),e.jsx("span",{className:"text-muted font-13",children:"Price"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"184"}),e.jsx("span",{className:"text-muted font-13",children:"Quantity"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$3,680.00"}),e.jsx("span",{className:"text-muted font-13",children:"Amount"})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"Marco Shoes"}),e.jsx("span",{className:"text-muted font-13",children:"05 March 2018"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$28.49"}),e.jsx("span",{className:"text-muted font-13",children:"Price"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"69"}),e.jsx("span",{className:"text-muted font-13",children:"Quantity"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$1,965.81"}),e.jsx("span",{className:"text-muted font-13",children:"Amount"})]})]})]})})})]}),$=()=>{const s={zoomOnScroll:!1,markers:[{name:"New York",coords:[40.71,-74]},{name:"San Francisco",coords:[37.77,-122.41]},{name:"Sydney",coords:[-33.86,151.2]},{name:"Singapore",coords:[1.3,103.8]}],markerStyle:{initial:{r:9,fill:"#727cf5","fill-opacity":.9,stroke:"#fff","stroke-width":7,"stroke-opacity":.4},hover:{fill:"#727cf5",stroke:"#fff","fill-opacity":1,"stroke-width":1.5}},regionStyle:{initial:{fill:"#e3eaef"}}};return e.jsx(l,{children:e.jsxs(l.Body,{children:[e.jsx(j,{containerClass:"d-flex align-items-center justify-content-between",title:"Revenue By Location",menuItems:[{label:"Sales Report"},{label:"Export Report"},{label:"Profit"},{label:"Action"}]}),e.jsx("div",{className:"mb-4 mt-4",children:e.jsx(C,{height:"224px",width:"100%",options:s})}),e.jsx("h5",{className:"mb-1 mt-0 fw-normal",children:"New York"}),e.jsxs("div",{className:"progress-w-percent",children:[e.jsx("span",{className:"progress-value fw-bold",children:"72k"}),e.jsx(p,{now:72,className:"progress-sm"})]}),e.jsx("h5",{className:"mb-1 mt-0 fw-normal",children:"San Francisco"}),e.jsxs("div",{className:"progress-w-percent",children:[e.jsx("span",{className:"progress-value fw-bold",children:"39k"}),e.jsx(p,{now:39,className:"progress-sm"})]}),e.jsx("h5",{className:"mb-1 mt-0 fw-normal",children:"Sydney"}),e.jsxs("div",{className:"progress-w-percent",children:[e.jsx("span",{className:"progress-value fw-bold",children:"25k"}),e.jsx(p,{now:25,className:"progress-sm"})]}),e.jsx("h5",{className:"mb-1 mt-0 fw-normal",children:"Singapore"}),e.jsxs("div",{className:"progress-w-percent mb-0",children:[e.jsx("span",{className:"progress-value fw-bold",children:"61k"}),e.jsx(p,{now:61,className:"progress-sm"})]})]})})},B=()=>{const s={chart:{height:364,type:"line",dropShadow:{enabled:!0,opacity:.1,blur:7,left:-7,top:7},toolbar:{show:!1},zoom:{enabled:!1},parentHeightOffset:0},grid:{padding:{left:0,right:0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:4},legend:{show:!1},colors:["#727cf5","#0acf97","#fa5c7c","#ffbc00"],xaxis:{categories:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],tooltip:{enabled:!1},axisBorder:{show:!1}},yaxis:{labels:{formatter:function(a){return a+"k"}}}},t=[{name:"Current Week",data:[10,20,15,25,20,30,20]},{name:"Previous Week",data:[0,15,10,30,15,35,25]}];return e.jsx(l,{children:e.jsxs(l.Body,{children:[e.jsx(j,{containerClass:"d-flex align-items-center justify-content-between mb-2",title:"Revenue",menuItems:[{label:"Sales Report"},{label:"Export Report"},{label:"Profit"},{label:"Action"}]}),e.jsx("div",{className:"chart-content-bg",children:e.jsxs(x,{className:"text-center",children:[e.jsxs(i,{md:6,children:[e.jsx("p",{className:"text-muted mb-0 mt-3",children:"Current Week"}),e.jsxs("h2",{className:"fw-normal mb-3",children:[e.jsx("small",{className:"mdi mdi-checkbox-blank-circle text-primary align-middle me-1"}),e.jsx("span",{children:"$58,254"})]})]}),e.jsxs(i,{md:6,children:[e.jsx("p",{className:"text-muted mb-0 mt-3",children:"Previous Week"}),e.jsxs("h2",{className:"fw-normal mb-3",children:[e.jsx("small",{className:"mdi mdi-checkbox-blank-circle text-success align-middle me-1"}),e.jsx("span",{children:"$69,524"})]})]})]})}),e.jsxs("div",{className:"dash-item-overlay d-none d-md-block",children:[e.jsx("h5",{children:"Today's Earning: $2,562.30"}),e.jsx("p",{className:"text-muted font-13 mb-3 mt-2",children:"Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus..."}),e.jsxs(c,{to:"",className:"btn btn-outline-primary",children:["View Statements",e.jsx("i",{className:"mdi mdi-arrow-right ms-2"})]})]}),e.jsx(N,{options:s,series:t,type:"line",className:"apex-charts mt-3",height:378})]})})},M=()=>{const s={chart:{height:340,type:"donut"},colors:["#727cf5","#0acf97","#fa5c7c","#ffbc00"],legend:{show:!1},responsive:[{breakpoint:376,options:{chart:{width:250,height:250},legend:{position:"bottom"}}}]},t=[44,55,41,17];return e.jsx(l,{children:e.jsxs(l.Body,{children:[e.jsx(j,{containerClass:"d-flex align-items-center justify-content-between",title:"Total Sales",menuItems:[{label:"Sales Report"},{label:"Export Report"},{label:"Profit"},{label:"Action"}]}),e.jsx(N,{options:s,series:t,type:"donut",height:222,className:"apex-charts mb-4 mt-4"}),e.jsxs("div",{className:"chart-widget-list",children:[e.jsxs("p",{children:[e.jsx("i",{className:"mdi mdi-square text-primary"})," Direct",e.jsx("span",{className:"float-end",children:"$300.56"})]}),e.jsxs("p",{children:[e.jsx("i",{className:"mdi mdi-square text-danger"})," Affilliate",e.jsx("span",{className:"float-end",children:"$135.18"})]}),e.jsxs("p",{children:[e.jsx("i",{className:"mdi mdi-square text-success"})," Sponsored",e.jsx("span",{className:"float-end",children:"$48.96"})]}),e.jsxs("p",{className:"mb-0",children:[e.jsx("i",{className:"mdi mdi-square text-warning"})," E-mail",e.jsx("span",{className:"float-end",children:"$154.02"})]})]})]})})},T=()=>e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx(i,{sm:6,children:e.jsx(f,{icon:"mdi mdi-account-multiple",description:"Number of Customers",title:"Customers",stats:"36,254",trend:{textClass:"text-success",icon:"mdi mdi-arrow-up-bold",value:"5.27%",time:"Since last month"}})}),e.jsx(i,{sm:6,children:e.jsx(f,{icon:"mdi mdi-cart-plus",description:"Number of Orders",title:"Orders",stats:"5,543",trend:{textClass:"text-danger",icon:"mdi mdi-arrow-down-bold",value:"1.08%",time:"Since last month"}})})]}),e.jsxs(x,{children:[e.jsx(i,{sm:6,children:e.jsx(f,{icon:"mdi mdi-currency-usd",description:"Revenue",title:"Revenue",stats:"$6,254",trend:{textClass:"text-danger",icon:"mdi mdi-arrow-down-bold",value:"7.00%",time:"Since last month"}})}),e.jsx(i,{sm:6,children:e.jsx(f,{icon:"mdi mdi-pulse",description:"Growth",title:"Growth",stats:"+ 30.56%",trend:{textClass:"text-success",icon:"mdi mdi-arrow-up-bold",value:"4.87%",time:"Since last month"}})})]})]}),E=()=>{const[s,t]=u.useState(new Date);return e.jsxs(y,{title:"Dashboard",children:[e.jsx(x,{children:e.jsx(i,{xs:12,children:e.jsxs("div",{className:"page-title-box",children:[e.jsx("div",{className:"page-title-right",children:e.jsxs("form",{className:"d-flex",children:[e.jsx("div",{className:"input-group",children:e.jsx(w,{value:s,inputClass:"form-control-light",onChange:a=>{t(a)}})}),e.jsx(c,{to:"",className:"btn btn-primary ms-2",children:e.jsx("i",{className:"mdi mdi-autorenew"})}),e.jsx(c,{to:"",className:"btn btn-primary ms-1",children:e.jsx("i",{className:"mdi mdi-filter-variant"})})]})}),e.jsx("h4",{className:"page-title",children:"Dashboard"})]})})}),e.jsxs(x,{children:[e.jsx(i,{xl:5,lg:6,children:e.jsx(T,{})}),e.jsx(i,{xl:7,lg:6,children:e.jsx(P,{})})]}),e.jsxs(x,{children:[e.jsx(i,{lg:8,children:e.jsx(B,{})}),e.jsx(i,{lg:4,children:e.jsx($,{})})]}),e.jsxs(x,{children:[e.jsx(i,{xl:{span:6,order:1},lg:{span:12,order:2},children:e.jsx(R,{})}),e.jsx(i,{xl:3,lg:{span:6,order:1},children:e.jsx(M,{})}),e.jsx(i,{xl:3,lg:{span:6,order:1},children:e.jsx(A,{})})]})]})},Ne=E;export{Ne as default};
