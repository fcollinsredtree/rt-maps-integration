"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[7562],{37562:(e,t,i)=>{i.d(t,{previewWebStyleSymbol:()=>l});var n=i(18798),h=i(6478),a=i(12056),s=i(72620);function l(e,t,i){const l=e.thumbnail?.url;return l?(0,n.A)(l,{responseType:"image"}).then((e=>{const t=function(e,t){const i=!/\\.svg$/i.test(e.src)&&t?.disableUpsampling,n=Math.max(e.width,e.height);let s=null!=t?.maxSize?(0,h.Lz)(t.maxSize):a.CB.maxSize;i&&(s=Math.min(n,s));const l="number"==typeof t?.size?t?.size:null,r=Math.min(s,null!=l?(0,h.Lz)(l):n);if(r!==n){const t=0!==e.width&&0!==e.height?e.width/e.height:1;t>=1?(e.width=r,e.height=r/t):(e.width=r*t,e.height=r)}return e}(e.data,i);return i?.node?(i.node.appendChild(t),i.node):t})):(0,s.yG)(e).then((e=>e?t(e,i):null))}}}]);