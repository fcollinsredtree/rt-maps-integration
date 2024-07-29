"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[3921],{31357:(e,t,n)=>{var i,r,a,o,s,l,c,u,p,g,d,N,f,m,S;n.d(t,{Pl:()=>h,Qg:()=>S,vE:()=>b}),function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet"}(i||(i={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet"}(r||(r={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.NotSet="NotSet"}(a||(a={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.NotSet="NotSet"}(o||(o={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend"}(s||(s={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet"}(l||(l={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet"}(c||(c={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet"}(u||(u={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet"}(p||(p={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet"}(g||(g={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet"}(d||(d={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet"}(N||(N={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet"}(f||(f={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit"}(m||(m={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs"}(S||(S={}));const h=-1,b=-2},95019:(e,t,n)=>{n.d(t,{a:()=>r,h:()=>a});var i=n(42134);function r(){return new Promise((e=>n.e(6687).then(n.bind(n,56687)).then((e=>e.l)).then((({default:t})=>{const n=t({locateFile:o,onRuntimeInitialized:()=>e(n)})})))).catch((e=>{throw e}))}function a(){return new Promise((e=>n.e(5252).then(n.bind(n,75252)).then((e=>e.l)).then((({default:t})=>{const n=t({locateFile:o,onRuntimeInitialized:()=>e(n)})})))).catch((e=>{throw e}))}function o(e){return(0,i.s)(`esri/libs/lyr3d/${e}`)}},3921:(e,t,n)=>{n.r(t),n.d(t,{destroyWasm:()=>l,initialize:()=>c,process:()=>s});var i=n(31357),r=n(95019);let a,o;async function s(e){if(await c(),e.inputs.length<1)return{result:{status:i.Qg.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const t={ptrs:[],sizes:[]};for(const n of e.inputs){const e=o._malloc(n.byteLength);new Uint8Array(o.HEAPU8.buffer,e,n.byteLength).set(new Uint8Array(n)),t.ptrs.push(e),t.sizes.push(n.byteLength)}const n=o.process(e.jobDescJson,t,e.isMissingResourceCase),r=n.status===i.Qg.Succeeded&&n.data,a=n.status===i.Qg.MissingInputs&&n.missingInputUrls.length>0;if(r){const e=n.data.slice();n.data=e}else a&&(n.jobDescJson=n.jobDescJson.slice(0),n.originalInputs=e.inputs);for(let e=0;e<t.ptrs.length;++e)o._free(t.ptrs[e]);const s=[];if(r)s.push(n.data.buffer);else if(a)for(const t of e.inputs)s.push(t);return{result:n,transferList:s}}function l(){o&&(o.uninitialize_lyr3d_worker_wasm(),o=null)}function c(){return o?Promise.resolve():(a||(a=(0,r.h)().then((e=>{o=e,o.initialize_lyr3d_worker_wasm(),a=null}))),a)}}}]);