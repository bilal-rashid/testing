import{r as c,j as b}from"./index-F0uvlsHd.js";const x=["as","disabled"];function y(n,t){if(n==null)return{};var o={},i=Object.keys(n),e,u;for(u=0;u<i.length;u++)e=i[u],!(t.indexOf(e)>=0)&&(o[e]=n[e]);return o}function j(n){return!n||n.trim()==="#"}function P({tagName:n,disabled:t,href:o,target:i,rel:e,role:u,onClick:s,tabIndex:a=0,type:d}){n||(o!=null||i!=null||e!=null?n="a":n="button");const f={tagName:n};if(n==="button")return[{type:d||"button",disabled:t},f];const l=r=>{if((t||n==="a"&&j(o))&&r.preventDefault(),t){r.stopPropagation();return}s==null||s(r)},p=r=>{r.key===" "&&(r.preventDefault(),l(r))};return n==="a"&&(o||(o="#"),t&&(o=void 0)),[{role:u??"button",disabled:void 0,tabIndex:t?void 0:a,href:o,target:n==="a"?i:void 0,"aria-disabled":t||void 0,rel:n==="a"?e:void 0,onClick:l,onKeyDown:p},f]}const k=c.forwardRef((n,t)=>{let{as:o,disabled:i}=n,e=y(n,x);const[u,{tagName:s}]=P(Object.assign({tagName:o,disabled:i},e));return b.jsx(s,Object.assign({},e,u,{ref:t}))});k.displayName="Button";export{k as B,P as u};
