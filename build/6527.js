"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[6527],{49685:(e,t,a)=>{a.d(t,{Al:()=>c,Vb:()=>i,af:()=>h,rK:()=>u});var n=a(41965);const i="arial-unicode-ms",o="woff2",l=new Map,s=new Set;class r{constructor(e,t){this.fontFace=e,this.promise=t}}async function c(e){const t=m(e),a=u(e),i=l.get(t);if(i)return i.promise;const c=new FontFace(e.family,`url('${n.A.fontsUrl}/woff2/${a}.${o}') format('${o}')`,{style:e.style,weight:e.weight}),h=document.fonts;if(h.has(c)&&"loading"===c.status)return c.loaded;const d=c.load().then((()=>(h.add(c),c)));return l.set(t,new r(c,d)),s.add(c),d}function h(e){if(!e)return i;const t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function u(e){const t=d(e)+f(e);return h(e.family)+(t.length>0?t:"-regular")}function m(e){const t=d(e)+f(e);return(e.family||i)+(t.length>0?t:"-regular")}function d(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function f(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}},46527:(e,t,a)=>{a.d(t,{previewSymbol2D:()=>S});var n=a(29880),i=a(26163),o=a(41509),l=a(49685),s=a(6478),r=a(11149),c=a(12056),h=a(3160),u=a(4957);const m="picture-fill",d="picture-marker",f="simple-fill",p="simple-line",y="simple-marker",g="text",w="Aa",b=c.CB.size,v=c.CB.maxSize,L=c.CB.maxOutlineSize,z=c.CB.lineWidth,k=225,M=document.createElement("canvas");function x(e,t){const a=M.getContext("2d"),n=[];t&&(t.weight&&n.push(t.weight),t.size&&n.push(t.size+"px"),t.family&&n.push(t.family)),a.font=n.join(" ");const{width:i,actualBoundingBoxLeft:o,actualBoundingBoxRight:l,actualBoundingBoxAscent:s,actualBoundingBoxDescent:r}=a.measureText(e);return{width:Math.ceil(Math.max(i,o+l)),height:Math.ceil(s+r),x:Math.floor(o),y:Math.floor((s-r)/2)}}function C(e){const t=e?.size;return{width:null!=t&&"object"==typeof t&&"width"in t?(0,s.Lz)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?(0,s.Lz)(t.height):null}}function B(e,t){return e>t?"dark":"light"}async function S(e,t){const{shapeDescriptor:a,size:n,renderOptions:i}=function(e,t){const a="number"==typeof t?.size?t?.size:null,n=null!=a?(0,s.Lz)(a):null,i=null!=t?.maxSize?(0,s.Lz)(t.maxSize):null,o=null!=t?.rotation?t.rotation:"angle"in e?e.angle:null,l=(0,r.eH)(e);let h=(0,r.$4)(e);"dark"!==A(e,245)||t?.ignoreWhiteSymbols||(h={width:.75,...h,color:"#bdc3c7"});const u={shape:null,fill:l,stroke:h,offset:[0,0]};h?.width&&(h.width=Math.min(h.width,L));const k=h?.width||0;let M=null!=t?.size&&(null==t?.scale||t?.scale),B=0,S=0,F=!1;switch(e.type){case y:{const a=e.style,{width:l,height:r}=C(t),c=l===r&&null!=l?l:null!=n?n:Math.min((0,s.Lz)(e.size),i||v);switch(B=c,S=c,a){case"circle":u.shape={type:"circle",cx:0,cy:0,r:.5*c},M||(B+=k,S+=k);break;case"cross":u.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[B,.5*S]},{command:"M",values:[.5*B,0]},{command:"L",values:[.5*B,S]}]};break;case"diamond":u.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[.5*B,0]},{command:"L",values:[B,.5*S]},{command:"L",values:[.5*B,S]},{command:"Z",values:[]}]},M||(B+=k,S+=k);break;case"square":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[B,0]},{command:"L",values:[B,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},M||(B+=k,S+=k),o&&(F=!0);break;case"triangle":u.shape={type:"path",path:[{command:"M",values:[.5*B,0]},{command:"L",values:[B,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},M||(B+=k,S+=k),o&&(F=!0);break;case"x":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[B,S]},{command:"M",values:[B,0]},{command:"L",values:[0,S]}]},o&&(F=!0);break;case"path":u.shape={type:"path",path:e.path||""},M||(B+=k,S+=k),o&&(F=!0),M=!0}break}case p:{const{width:e,height:a}=C(t),i=(0,r.O0)(h).reduce(((e,t)=>e+t),0),o=i&&Math.ceil(z/i),l=a??n??k,s=e??(i*o||z);h&&(h.width=l),B=s,S=l,M=!0,u.shape={type:"path",path:[{command:"M",values:[l/2,S/2]},{command:"L",values:[B-l/2,S/2]}]};break}case m:case f:{const e="object"==typeof t?.symbolConfig&&!!t?.symbolConfig?.isSquareFill,{width:a,height:i}=C(t);B=!e&&a!==i||null==a?null!=n?n:b:a,S=!e&&a!==i||null==i?B:i,M||(B+=k,S+=k),M=!0,u.shape=e?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[B,0]},{command:"L",values:[B,S]},{command:"L",values:[0,S]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:c.nq.fill[0];break}case d:{const a=Math.min((0,s.Lz)(e.width),i||v),l=Math.min((0,s.Lz)(e.height),i||v),{width:r,height:c}=C(t),h=r===c&&null!=r?r:null!=n?n:Math.max(a,l),m=a/l;B=m<=1?Math.ceil(h*m):h,S=m<=1?h:Math.ceil(h/m),u.shape={type:"image",x:-Math.round(B/2),y:-Math.round(S/2),width:B,height:S,src:e.url||""},o&&(F=!0);break}case g:{const a=e,o=t?.overrideText||a.text||w,l=a.font,{width:r,height:c}=C(t),h=null!=c?c:null!=n?n:Math.min((0,s.Lz)(l.size),i||v),{width:m,height:d}=x(o,{weight:l.weight,size:h,family:l.family}),f=/[\uE600-\uE6FF]/.test(o);B=r??(f?h:m),S=f?h:d;let p=.5*(f?h:d);f&&(p+=5),u.shape={type:"text",text:o,x:a.xoffset||0,y:a.yoffset||p,align:"middle",alignBaseline:a.verticalAlignment,decoration:l&&l.decoration,rotated:a.rotated,kerning:a.kerning},u.font=l&&{size:h,style:l.style,decoration:l.decoration,weight:l.weight,family:l.family};break}}return{shapeDescriptor:u,size:[B,S],renderOptions:{node:t?.node,scale:M,opacity:t?.opacity,rotation:o,useRotationSize:F,effectView:t?.effectView,ariaLabel:t?.ariaLabel}}}(e,t);if(!a.shape)throw new o.A("symbolPreview: renderPreviewHTML2D","symbol not supported.");await async function(e,t){const a=t.fill,n=e.color;if("pattern"===a?.type&&n&&e.type!==m){const e=await(0,r.rc)(a.src,n.toCss(!0));a.src=e,t.fill=a}}(e,a),await async function(e,t,a,n){if(!("font"in e)||!e.font||"text"!==t.shape.type)return;try{await(0,l.Al)(e.font)}catch{}const{width:i,height:o}=C(n);if(!/[\uE600-\uE6FF]/.test(t.shape.text)){const{width:l,height:s,x:r,y:c}=x(t.shape.text,{weight:t.font?.weight,size:t.font?.size,family:t.font?.family});a[0]=i??l,a[1]=o??s,t.shape.x=r,t.shape.y=c;const h=null!=n?.rotation?n.rotation:"angle"in e?e.angle:null;if(h){const e=h*(Math.PI/180),t=Math.abs(Math.sin(e)),n=Math.abs(Math.cos(e));a[1]=a[0]*t+a[1]*n}}}(e,a,n,t);const k=[[a]];if("object"==typeof t?.symbolConfig&&t?.symbolConfig?.applyColorModulation){const e=.6*n[0];k.unshift([{...a,offset:[-e,0],fill:(0,c.QC)(a.fill,-.3)}]),k.push([{...a,offset:[e,0],fill:(0,c.QC)(a.fill,.3)}]),n[0]+=2*e,i.scale=!1}return"text"===e.type&&function(e,t,a,n,i){if(null!=e.haloColor&&null!=e.haloSize){i.masking??=a.map((()=>[]));const o=(0,s.Lz)(e.haloSize);n[0]+=o,n[1]+=o,a.unshift([{...t,fill:null,stroke:{color:e.haloColor,width:2*o,join:"round",cap:"round"}}]),i.masking.unshift([{shape:{type:"rect",x:0,y:0,width:n[0]+2*u.y7,height:n[1]+2*u.y7},fill:[255,255,255],stroke:null},{...t,fill:[0,0,0,0],stroke:null}])}null==e.backgroundColor&&null==e.borderLineColor||(n[0]+=2*u.y7,n[1]+=2*u.y7,a.unshift([{shape:{type:"rect",x:0,y:0,width:n[0],height:n[1]},fill:e.backgroundColor,stroke:{color:e.borderLineColor,width:(0,s.Lz)(e.borderLineSize)}}]),i.masking?.unshift([]))}(e,a,k,n,i),(0,h.fz)(k,n,i)}function A(e,t=k){const a=(0,r.eH)(e),o=(0,r.$4)(e),l=!a||"type"in a?null:new n.A(a),s=o?.color?new n.A(o?.color):null,c=l?B((0,i.Ws)(l),t):null,h=s?B((0,i.Ws)(s),t):null;return h?c?c===h?c:t>=k?"light":"dark":h:c}}}]);