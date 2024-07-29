"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[8064],{8064:(r,e,t)=>{t.d(e,{$5:()=>_,CN:()=>O,JP:()=>N,KM:()=>R,Mv:()=>C,X4:()=>h,gr:()=>M,project:()=>k,qs:()=>E,si:()=>F,xA:()=>x});var n=t(68628),o=t(63051),i=t(6067),l=t(19618),a=t(51516),c=t(14173),u=t(5163),f=t(48460),s=t(47813),T=t(44442),p=t(31163),y=t(60066),m=(t(71941),t(57362)),A=t(57974),P=t(81259),d=t(75435),g=t(84137);const N="Projection may be possible after calling projection.load().";function O(r,e,t,n){r.error(`Failed to project from (wkid:${e.wkid}) to (wkid:${t.wkid}).${n?" ":""}${n}`)}function h(r,e,t,n,o){return X(v.TO_PCPF,P.xs.fromTypedArray(r),j.NORMAL,P.Xm.fromTypedArray(e),P.Xm.fromTypedArray(t),n,P.xs.fromTypedArray(o))?o:null}function F(r,e,t,n,o){return X(v.FROM_PCPF,P.xs.fromTypedArray(r),j.NORMAL,P.Xm.fromTypedArray(e),P.Xm.fromTypedArray(t),n,P.xs.fromTypedArray(o))?o:null}function M(r,e,t){return(0,p.projectBuffer)(r,e,0,t,(0,s.lO)(e),0,r.length/3)?t:null}function _(r,e,t){return(0,p.projectBuffer)(r,(0,s.lO)(t),0,e,t,0,r.length/3)?e:null}function E(r,e,t){return(0,o.Ge)(B,t),(0,d.t)(e,r,B),(0,n.or)(B)&&(0,d.n)(e,e),e}function R(r,e,t){return(0,o.z0)(B,t),(0,g.t)(e,r,B),(0,n.or)(B)&&(0,d.n)(e,e,4),e}function x(r,e,t,n,o){if(!X(v.TO_PCPF,P.xs.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),j.TANGENT,P.Xm.fromTypedArray(e),P.Xm.fromTypedArray(t),n,P.xs.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let e=3;e<r.length;e+=4)o[e]=r[e];return o}function C(r,e,t,n,o){if(!X(v.FROM_PCPF,P.xs.fromTypedArray(r,16),j.TANGENT,P.Xm.fromTypedArray(e),P.Xm.fromTypedArray(t),n,P.xs.fromTypedArray(o,16)))return null;for(let e=3;e<r.length;e+=4)o[e]=r[e];return o}var j,v,S;function G(r,e,t,n,i){switch((0,T.l)(n,t,z,n),r===v.FROM_PCPF&&(0,l.B8)(z,z),e){case j.NORMAL:return(0,o.Ge)(i,z);case j.TANGENT:return(0,o.z0)(i,z)}}function X(r,e,t,n,o,i,l){if(!e)return;const a=n.count,u=(0,s.lO)(i);if(function(r){return r.isWGS84||(0,m.x1)(r)||(0,m.q8)(r)||(0,m.KQ)(r)}(i))for(let n=0;n<a;n++)o.getVec(n,w),e.getVec(n,b),(0,c.t)(b,b,G(r,t,w,u,B)),l.setVec(n,b);else for(let i=0;i<a;i++){o.getVec(i,w),e.getVec(i,b);const a=(0,A.jg)(n.get(i,1));let f=Math.cos(a);t===j.TANGENT!=(r===v.TO_PCPF)&&(f=1/f),G(r,t,w,u,B),r===v.TO_PCPF?(B[0]*=f,B[1]*=f,B[2]*=f,B[3]*=f,B[4]*=f,B[5]*=f):(B[0]*=f,B[3]*=f,B[6]*=f,B[1]*=f,B[4]*=f,B[7]*=f),(0,c.t)(b,b,B),(0,c.n)(b,b),l.setVec(i,b)}return l}function k(r){return"local"===r.vertexSpace.type?function({vertexSpace:r,transform:e,inSpatialReference:t,outSpatialReference:n,localMode:o,outPositions:i,positions:c}){const m=r.origin??u.uY,A=null!=r.origin?e?.localMatrix??a.zK:a.zK,P=(0,s.lO)(t),g=n.isWebMercator&&o||!(0,f.canProjectWithoutEngine)(t,P)?t:P;(0,T.l)(t,m,z,g),(0,l.lw)(z,z,A);const N=i??(0,y.jh)(c.length);return(0,d.a)(N,c,z),(0,p.projectBuffer)(N,g,0,N,n,0,N.length/3),N}(r):function({vertexSpace:r,transform:e,outPositions:t,positions:n,inSpatialReference:o,outSpatialReference:i}){const f=null!=r.origin?e?.localMatrix??a.zK:a.zK,s=t??(0,y.jh)(n.length);(0,l.aI)(f,a.zK)?(0,y.s)(s,n):(0,d.a)(s,n,f);const T=r.origin??u.uY;if(!(0,c.e)(T,u.uY)){const[r,e,t]=T;for(let n=0;n<s.length;n+=3)s[n]+=r,s[n+1]+=e,s[n+2]+=t}return(0,p.projectBuffer)(s,o,0,s,i,0,s.length/3)?s:null}(r)}(S=j||(j={}))[S.NORMAL=0]="NORMAL",S[S.TANGENT=1]="TANGENT",function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"}(v||(v={}));const w=(0,u.vt)(),b=(0,u.vt)(),z=(0,a.vt)(),B=(0,i.vt)()}}]);