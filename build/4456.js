"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[4456],{47953:(e,n,t)=>{t.d(n,{u:()=>f});var i=t(84516),s=t(57362);function o(e,n,t){if(null==e.hasM||e.hasZ)for(const e of n)for(const n of e)n.length>2&&(n[2]*=t)}function f(e,n,t){if(!e&&!n||!t)return;const s=(0,i.G9)(t);r(e,t,s),r(n,t,s)}function r(e,n,t){if(e)for(const i of e)a(i.geometry,n,t)}function a(e,n,t){if(!e?.spatialReference||(0,s.aI)(e.spatialReference,n))return;const f=(0,i.G9)(e.spatialReference)/t;if(1!==f)if("x"in e)null!=e.z&&(e.z*=f);else if("rings"in e)o(e,e.rings,f);else if("paths"in e)o(e,e.paths,f);else if("points"in e&&(null==e.hasM||e.hasZ))for(const n of e.points)n.length>2&&(n[2]*=f)}},40552:(e,n,t)=>{t.d(n,{q:()=>s});var i=t(99790);function s(e,n,t){if(!t?.features||!t.hasZ)return;const s=(0,i.N)(t.geometryType,n,e.outSpatialReference);if(null!=s)for(const e of t.features)s(e.geometry)}}}]);