"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[732],{10732:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var s=r(71566),o=r(41509),i=r(87216),n=r(42565),p=r(85464),l=(r(82555),r(16431),r(1724),r(37755)),a=r(88999),d=r(36414);let u=class extends((0,d.A)((0,i.P)(a.A))){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise(((e,t)=>{(0,n._)((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unsupported layer type";e&&(r+=" "+e),t(new o.A("layer:unsupported-layer-type",r,{layerType:e}))}))})))}read(e,t){const r={resourceInfo:e};null!=e.id&&(r.id=e.id),null!=e.title&&(r.title=e.title),super.read(r,t)}write(e,t){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};(0,s._)([(0,p.MZ)({readOnly:!0})],u.prototype,"resourceInfo",void 0),(0,s._)([(0,p.MZ)({type:["show","hide"]})],u.prototype,"listMode",void 0),(0,s._)([(0,p.MZ)({type:Boolean,readOnly:!1})],u.prototype,"persistenceEnabled",void 0),(0,s._)([(0,p.MZ)({json:{read:!1},readOnly:!0,value:"unsupported"})],u.prototype,"type",void 0),u=(0,s._)([(0,l.$)("esri.layers.UnsupportedLayer")],u);const y=u}}]);