"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[4462],{23121:(t,e,n)=>{n.d(e,{a:()=>b,b:()=>v,c:()=>m,f:()=>A,g:()=>w,j:()=>T,n:()=>L}),n(82555),n(16431);var r=n(68628),o=n(19618),i=n(14173),c=n(5163),s=n(9810),a=n(8884),u=n(9293),l=n(75543),f=n(48984),d=n(66945),h=n(81389);const g=m();function m(){return(0,a.vt)()}const p=s.e,y=s.e;function b(t,e){return(0,s.c)(e,t)}function v(t){return t[3]}function w(t){return t}function A(t,e,n,r){return(0,a.fA)(t,e,n,r)}function C(t,e,n){if(null==e)return!1;if(!M(t,e,U))return!1;let{t0:r,t1:o}=U;if((r<0||o<r&&o>0)&&(r=o),r<0)return!1;if(n){const{origin:t,direction:o}=e;n[0]=t[0]+o[0]*r,n[1]=t[1]+o[1]*r,n[2]=t[2]+o[2]*r}return!0}const U={t0:0,t1:0};function M(t,e,n){const{origin:r,direction:o}=e,i=S;i[0]=r[0]-t[0],i[1]=r[1]-t[1],i[2]=r[2]-t[2];const c=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===c)return!1;const s=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),a=s*s-4*c*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(a<0)return!1;const u=Math.sqrt(a);return n.t0=(-s-u)/(2*c),n.t1=(-s+u)/(2*c),!0}const S=(0,c.vt)();function T(t,e){return C(t,e,null)}function E(t,e,n){const r=h.rq.get(),c=h.Rc.get();(0,i.b)(r,e.origin,e.direction);const s=v(t);(0,i.b)(n,r,e.origin),(0,i.j)(n,n,1/(0,i.l)(n)*s);const a=x(t,e.origin),u=(0,d.g7)(e.origin,n);return(0,o.$0)(c,u+a,r),(0,i.h)(n,n,c),n}function I(t,e,n){const r=(0,i.f)(h.rq.get(),e,t),o=(0,i.j)(h.rq.get(),r,t[3]/(0,i.l)(r));return(0,i.g)(n,o,t)}function x(t,e){const n=(0,i.f)(h.rq.get(),e,t),o=(0,i.l)(n),c=v(t),s=c+Math.abs(c-o);return(0,r.XM)(c/s)}const O=(0,c.vt)();function P(t,e,n,o){const c=(0,i.f)(O,e,t);switch(n){case l._.X:{const t=(0,r.jU)(c,O)[2];return(0,i.s)(o,-Math.sin(t),Math.cos(t),0)}case l._.Y:{const t=(0,r.jU)(c,O),e=t[1],n=t[2],s=Math.sin(e);return(0,i.s)(o,-s*Math.cos(n),-s*Math.sin(n),Math.cos(e))}case l._.Z:return(0,i.n)(o,c);default:return}}function _(t,e){const n=(0,i.f)(D,e,t);return(0,i.l)(n)-t[3]}function L(t,e){const n=(0,i.a)(t,e),r=v(t);return n<=r*r}const D=(0,c.vt)(),N=m();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:g,altitudeAt:_,angleToSilhouette:x,axisAt:P,clear:function(t){t[0]=t[1]=t[2]=t[3]=0},closestPoint:function(t,e,n){return C(t,e,n)?n:((0,f.oC)(e,t,n),I(t,n,n))},closestPointOnSilhouette:E,containsPoint:L,copy:b,create:m,distanceToSilhouette:function(t,e){const n=(0,i.f)(h.rq.get(),e,t),r=(0,i.q)(n),o=t[3]*t[3];return Math.sqrt(Math.abs(r-o))},elevate:function(t,e,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+e,n},equals:y,exactEquals:p,fromCenterAndRadius:function(t,e){return(0,a.fA)(t[0],t[1],t[2],e)},fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},fromValues:A,getCenter:w,getRadius:v,intersectLine:function(t,e,n){const r=(0,f.Cr)(e,n);if(!M(t,r,U))return[];const{origin:o,direction:s}=r,{t0:a,t1:l}=U,d=e=>{const n=(0,c.vt)();return(0,i.r)(n,o,s,e),I(t,n,n)};return Math.abs(a-l)<(0,u.FD)()?[d(a)]:[d(a),d(l)]},intersectRay:C,intersectRayClosestSilhouette:function(t,e,n){if(C(t,e,n))return n;const r=E(t,e,h.rq.get());return(0,i.g)(n,e.origin,(0,i.j)(h.rq.get(),e.direction,(0,i.p)(e.origin,r)/(0,i.l)(e.direction))),n},intersectsRay:T,projectPoint:I,setAltitudeAt:function(t,e,n,r){const o=_(t,e),c=P(t,e,l._.Z,D),s=(0,i.j)(D,c,n-o);return(0,i.g)(r,e,s)},setExtent:function(t,e,n){return t!==n&&b(t,n),n},tmpSphere:N,union:function(t,e,n=(0,a.vt)()){const r=(0,i.p)(t,e),o=t[3],c=e[3];return r+c<o?((0,s.c)(n,t),n):r+o<c?((0,s.c)(n,e),n):((0,i.o)(n,t,e,(r+c-o)/(2*r)),n[3]=(r+o+c)/2,n)},wrap:function(t){return t}},Symbol.toStringTag,{value:"Module"}))},37206:(t,e,n)=>{n.d(e,{I:()=>o});var r=n(11883);class o{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,r.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator())}}const i=1024},60127:(t,e,n)=>{n.d(e,{T:()=>i,U:()=>o});var r=n(68628);function o(t,e,n=0){const o=(0,r.qE)(t,0,a);for(let t=0;t<4;t++)e[n+t]=Math.floor(256*u(o*c[t]))}function i(t,e=0){let n=0;for(let r=0;r<4;r++)n+=t[e+r]*s[r];return n}const c=[1,256,65536,16777216],s=[1/256,1/65536,1/16777216,1/4294967296],a=i(new Uint8ClampedArray([255,255,255,255]));function u(t){return t-Math.floor(t)}},30101:(t,e,n)=>{n.d(e,{g:()=>c});var r=n(5163),o=n(48460),i=n(31163);function c(t,e,n,r){if((0,o.canProjectWithoutEngine)(t.spatialReference,n)){s[0]=t.x,s[1]=t.y;const o=t.z;return s[2]=o??r??0,(0,i.projectBuffer)(s,t.spatialReference,0,e,n,0,1)}const c=(0,o.tryProjectWithZConversion)(t,n);return!!c&&(e[0]=c?.x,e[1]=c?.y,e[2]=c?.z??r??0,!0)}const s=(0,r.vt)()},48984:(t,e,n)=>{n.d(e,{Cr:()=>u,LV:()=>a,oC:()=>l,vt:()=>c}),n(36581);var r=n(37206),o=n(14173),i=n(5163);function c(t){return t?s((0,i.o8)(t.origin),(0,i.o8)(t.direction)):s((0,i.vt)(),(0,i.vt)())}function s(t,e){return{origin:t,direction:e}}function a(t,e){const n=f.get();return n.origin=t,n.direction=e,n}function u(t,e,n=c()){return(0,o.c)(n.origin,t),(0,o.f)(n.direction,e,t),n}function l(t,e,n){const r=(0,o.m)(t.direction,(0,o.f)(n,e,t.origin));return(0,o.g)(n,t.origin,(0,o.j)(n,t.direction,r)),n}n(81389);const f=new r.I((()=>c()));(0,i.vt)()},53278:(t,e,n)=>{n.d(e,{MA:()=>d,m0:()=>y,wH:()=>m});var r=n(41509),o=n(80327),i=n(16431),c=n(22670),s=n(47849);const a=()=>i.A.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function u(t,e,n){let o="",i=0;for(;i<n;){const c=t[e+i];if(c<128)o+=String.fromCharCode(c),i++;else if(c>=192&&c<224){if(i+1>=n)throw new r.A("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const s=(31&c)<<6|63&t[e+i+1];o+=String.fromCharCode(s),i+=2}else if(c>=224&&c<240){if(i+2>=n)throw new r.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(15&c)<<12|(63&t[e+i+1])<<6|63&t[e+i+2];o+=String.fromCharCode(s),i+=3}else{if(!(c>=240&&c<248))throw new r.A("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=n)throw new r.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(7&c)<<18|(63&t[e+i+1])<<12|(63&t[e+i+2])<<6|63&t[e+i+3];if(s>=65536){const t=55296+(s-65536>>10),e=56320+(1023&s);o+=String.fromCharCode(t,e)}else o+=String.fromCharCode(s);i+=4}}}return o}function l(t,e){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<e.length;o++){const i=e[o],c=i.valueType||i.type,s=v[c];n.fields[i.property]=s(t,r),r+=b[c].BYTES_PER_ELEMENT}return n.byteCount=r,n}function f(t,e,n){const o=[];let i,c,s=0;for(c=0;c<t;c+=1){if(i=e[c],i>0){if(o.push(u(n,s,i-1)),0!==n[s+i-1])throw new r.A("string-array-error","Invalid string array: missing null termination.")}else o.push(null);s+=i}return o}function d(t,e){return new(0,b[e.valueType])(t,e.byteOffset,e.count*e.valuesPerElement)}function h(t,e,n){const i=null!=e.header?l(t,e.header):{byteOffset:0,byteCount:0,fields:{count:n}},c={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let s=i.byteCount;for(let t=0;t<e.ordering.length;t++){const n=e.ordering[t],a=(0,o.o8)(e[n]);if(a.count=i.fields.count??0,"String"===a.valueType){if(a.byteOffset=s,a.byteCount=i.fields[n+"ByteCount"],"UTF-8"!==a.encoding)throw new r.A("unsupported-encoding","Unsupported String encoding.",{encoding:a.encoding});if(a.timeEncoding&&"ECMA_ISO8601"!==a.timeEncoding)throw new r.A("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:a.timeEncoding})}else{if(!w(a.valueType))throw new r.A("unsupported-value-type","Unsupported binary valueType",{valueType:a.valueType});{const t=A(a.valueType);s+=s%t!=0?t-s%t:0,a.byteOffset=s,a.byteCount=t*a.valuesPerElement*a.count}}s+=a.byteCount??0,c.entries[n]=a}return c.byteCount=s-c.byteOffset,c}function g(t,e,n){if(e!==t&&a().error(`Invalid ${n} buffer size\n expected: ${t}, actual: ${e})`),e<t)throw new r.A("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:e})}function m(t,e){const n=l(t,e&&e.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,c=null!=i.vertexCount?i.vertexCount:i.count;for(const t of e.ordering){if(!e.vertexAttributes[t])continue;const n={...e.vertexAttributes[t],byteOffset:r,count:c},i=p[t]||"_"+t;o.vertexAttributes[i]=n,r+=A(n.valueType)*n.valuesPerElement*c}const s=i.faceCount;if(e.faces&&s){o.faces={};for(const t of e.ordering){if(!e.faces[t])continue;const n={...e.faces[t],byteOffset:r,count:s};o.faces[t]=n,r+=A(n.valueType)*n.valuesPerElement*s}}const a=i.featureCount;if(e.featureAttributes&&e.featureAttributeOrder&&a){o.featureAttributes={};for(const t of e.featureAttributeOrder){if(!e.featureAttributes[t])continue;const n={...e.featureAttributes[t],byteOffset:r,count:a};o.featureAttributes[t]=n,r+=("UInt64"===n.valueType?8:A(n.valueType))*n.valuesPerElement*a}}return g(r,t.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}const p={position:s.r.POSITION,normal:s.r.NORMAL,color:s.r.COLOR,uv0:s.r.UV0,region:s.r.UVREGION};function y(t,e,n){if("lepcc-rgb"===t.encoding)return(0,c.mb)(e);if("lepcc-intensity"===t.encoding)return(0,c.Ax)(e);if(null!=t.encoding&&""!==t.encoding)throw new r.A("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(a().warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),"ObjectIds"===t.ordering[0]&&t.hasOwnProperty("objectIds")&&(a().warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const o=h(e,t,n);g(o.byteOffset+o.byteCount,e.byteLength,"attribute");const i=o.entries.attributeValues||o.entries.objectIds;if(i){if("String"===i.valueType){const t=o.entries.attributeByteCounts,n=d(e,t),r=function(t,e){return new Uint8Array(t,e.byteOffset,e.byteCount)}(e,i);return i.timeEncoding?function(t,e,n){return f(t,e,n).map((t=>{const e=t?Date.parse(t):null;return null==e||Number.isNaN(e)?null:e}))}(t.count,n,r):f(t.count,n,r)}return d(e,i)}throw new r.A("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const b={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},v={Float32:(t,e)=>new DataView(t,0).getFloat32(e,!0),Float64:(t,e)=>new DataView(t,0).getFloat64(e,!0),UInt8:(t,e)=>new DataView(t,0).getUint8(e),Int8:(t,e)=>new DataView(t,0).getInt8(e),UInt16:(t,e)=>new DataView(t,0).getUint16(e,!0),Int16:(t,e)=>new DataView(t,0).getInt16(e,!0),UInt32:(t,e)=>new DataView(t,0).getUint32(e,!0),Int32:(t,e)=>new DataView(t,0).getInt32(e,!0)};function w(t){return b.hasOwnProperty(t)}function A(t){return w(t)?b[t].BYTES_PER_ELEMENT:0}},34462:(t,e,n)=>{n.d(e,{Q7:()=>M,s1:()=>w}),n(29747);var r=n(18798),o=(n(36581),n(41509),n(82555),n(85258)),i=(n(19618),n(51516)),c=(n(14173),n(5163)),s=(n(48460),n(47813),n(62771));n(30101),s.A.WGS84;var a=n(59130),u=(n(23121),n(9993),n(53278));n(47692),n(44442),n(29880);var l,f=n(8884);!function(t){t[t.INVISIBLE=0]="INVISIBLE",t[t.TRANSPARENT=1]="TRANSPARENT",t[t.OPAQUE=2]="OPAQUE"}(l||(l={})),n(62029),n(60127),n(4012),n(72630),n(19300);var d,h,g,m,p=n(43242);n(59234),p.n,p.n,n(48468),n(29129),n(47849),(h=d||(d={}))[h.Uniform=0]="Uniform",h[h.Varying=1]="Varying",h[h.COUNT=2]="COUNT",n(16903),n(50866),n(23513),n(24644),n(28589),n(64716),n(41477),n(89958),function(t){t[t.Solid=0]="Solid",t[t.Sketch=1]="Sketch",t[t.Mixed=2]="Mixed",t[t.COUNT=3]="COUNT"}(g||(g={})),function(t){t[t.REGULAR=0]="REGULAR",t[t.SILHOUETTE=1]="SILHOUETTE"}(m||(m={}));(0,f.fA)(0,0,0,.2),l.OPAQUE;(0,f.fA)(0,0,0,.2),l.OPAQUE,n(35171);var y,b,v=n(27484);async function w(t,e,n,o,i,c,s,a){const l=[];for(const r of e)if(r&&i.includes(r.name)){const e=`${t}/nodes/${n}/attributes/${r.key}/0`;l.push({url:e,storageInfo:r})}const f=await Promise.allSettled(l.map((t=>(0,r.A)(t.url,{responseType:"array-buffer",query:{...s,token:c},signal:a?.signal}).then((e=>(0,u.m0)(t.storageInfo,e.data)))))),d=[];for(const t of o){const e={};for(let n=0;n<f.length;n++){const r=f[n];if("fulfilled"===r.status){const o=r.value;e[l[n].storageInfo.name]=U(o,t)}}d.push(e)}return d}(0,a.vt)(),(b=y||(y={}))[b.OUTSIDE=0]="OUTSIDE",b[b.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",b[b.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",b[b.INSIDE=3]="INSIDE";const A=-32768,C=-(2**31);function U(t,e){if(!t)return null;const n=t[e];return(0,o.IY)(t)?n===A?null:n:(0,o._G)(t)?n===C?null:n:n!=n?null:n}function M(t){null!=t&&(t[3]=-1)}!function(){g.Solid}({color:[0,0,0,0],opacity:0}),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,a.vt)(),(0,a.vt)(),new v.ab,(0,c.vt)(),new Array(72),(0,i.vt)()},22670:(t,e,n)=>{n.d(e,{Ax:()=>y,Me:()=>u,mb:()=>g});var r=n(41509);const o=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function c(t,e,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(t,n+i.identifierOffset,i.identifierLength)),version:e.getUint16(n+i.versionOffset,o),checksum:e.getUint32(n+i.checksumOffset,o)}}const s={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function a(t,e){return{sizeLo:t.getUint32(e+s.sizeLo,o),sizeHi:t.getUint32(e+s.sizeHi,o),minX:t.getFloat64(e+s.minX,o),minY:t.getFloat64(e+s.minY,o),minZ:t.getFloat64(e+s.minZ,o),maxX:t.getFloat64(e+s.maxX,o),maxY:t.getFloat64(e+s.maxY,o),maxZ:t.getFloat64(e+s.maxZ,o),errorX:t.getFloat64(e+s.errorX,o),errorY:t.getFloat64(e+s.errorY,o),errorZ:t.getFloat64(e+s.errorZ,o),count:t.getUint32(e+s.count,o),reserved:t.getUint32(e+s.reserved,o)}}function u(t){const e=new DataView(t,0);let n=0;const{identifier:o,version:u}=c(t,e,n);if(n+=i.byteCount,"LEPCC     "!==o)throw new r.A("lepcc-decode-error","Bad identifier");if(u>1)throw new r.A("lepcc-decode-error","Unknown version");const f=a(e,n);if(n+=s.byteCount,f.sizeHi*2**32+f.sizeLo!==t.byteLength)throw new r.A("lepcc-decode-error","Bad size");const d=new Float64Array(3*f.count),h=[],g=[],m=[],p=[];if(n=l(t,n,h),n=l(t,n,g),n=l(t,n,m),n=l(t,n,p),n!==t.byteLength)throw new r.A("lepcc-decode-error","Bad length");let y=0,b=0;for(let t=0;t<h.length;t++){b+=h[t];let e=0;for(let n=0;n<g[t];n++){e+=m[y];const t=p[y];d[3*y]=Math.min(f.maxX,f.minX+2*f.errorX*e),d[3*y+1]=Math.min(f.maxY,f.minY+2*f.errorY*b),d[3*y+2]=Math.min(f.maxZ,f.minZ+2*f.errorZ*t),y++}}return{errorX:f.errorX,errorY:f.errorY,errorZ:f.errorZ,result:d}}function l(t,e,n){const r=[];e=f(t,e,r);const o=[];for(let i=0;i<r.length;i++){o.length=0,e=f(t,e,o);for(let t=0;t<o.length;t++)n.push(o[t]+r[i])}return e}function f(t,e,n){const i=new DataView(t,e),c=i.getUint8(0),s=31&c,a=!!(32&c),u=(192&c)>>6;let l=0;if(0===u)l=i.getUint32(1,o),e+=5;else if(1===u)l=i.getUint16(1,o),e+=3;else{if(2!==u)throw new r.A("lepcc-decode-error","Bad count type");l=i.getUint8(1),e+=2}if(a)throw new r.A("lepcc-decode-error","LUT not implemented");const f=Math.ceil(l*s/8),d=new Uint8Array(t,e,f);let h=0,g=0,m=0;const p=-1>>>32-s;for(let t=0;t<l;t++){for(;g<s;)h|=d[m]<<g,g+=8,m+=1;n[t]=h&p,h>>>=s,g-=s,g+s>32&&(h|=d[m-1]>>8-g)}return e+m}const d={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function h(t,e){return{sizeLo:t.getUint32(e+d.sizeLo,o),sizeHi:t.getUint32(e+d.sizeHi,o),count:t.getUint32(e+d.count,o),colorMapCount:t.getUint16(e+d.colorMapCount,o),lookupMethod:t.getUint8(e+d.lookupMethod),compressionMethod:t.getUint8(e+d.compressionMethod)}}function g(t){const e=new DataView(t,0);let n=0;const{identifier:o,version:s}=c(t,e,n);if(n+=i.byteCount,"ClusterRGB"!==o)throw new r.A("lepcc-decode-error","Bad identifier");if(s>1)throw new r.A("lepcc-decode-error","Unknown version");const a=h(e,n);if(n+=d.byteCount,a.sizeHi*2**32+a.sizeLo!==t.byteLength)throw new r.A("lepcc-decode-error","Bad size");if((2===a.lookupMethod||1===a.lookupMethod)&&0===a.compressionMethod){if(3*a.colorMapCount+a.count+n!==t.byteLength||a.colorMapCount>256)throw new r.A("lepcc-decode-error","Bad count");const e=new Uint8Array(t,n,3*a.colorMapCount),o=new Uint8Array(t,n+3*a.colorMapCount,a.count),i=new Uint8Array(3*a.count);for(let t=0;t<a.count;t++){const n=o[t];i[3*t]=e[3*n],i[3*t+1]=e[3*n+1],i[3*t+2]=e[3*n+2]}return i}if(0===a.lookupMethod&&0===a.compressionMethod){if(3*a.count+n!==t.byteLength||0!==a.colorMapCount)throw new r.A("lepcc-decode-error","Bad count");return new Uint8Array(t,n).slice()}if(a.lookupMethod<=2&&1===a.compressionMethod){if(n+3!==t.byteLength||1!==a.colorMapCount)throw new r.A("lepcc-decode-error","Bad count");const o=e.getUint8(n),i=e.getUint8(n+1),c=e.getUint8(n+2),s=new Uint8Array(3*a.count);for(let t=0;t<a.count;t++)s[3*t]=o,s[3*t+1]=i,s[3*t+2]=c;return s}throw new r.A("lepcc-decode-error","Bad method "+a.lookupMethod+","+a.compressionMethod)}const m={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function p(t,e){return{sizeLo:t.getUint32(e+m.sizeLo,o),sizeHi:t.getUint32(e+m.sizeHi,o),count:t.getUint32(e+m.count,o),scaleFactor:t.getUint16(e+m.scaleFactor,o),bitsPerPoint:t.getUint8(e+m.bitsPerPoint),reserved:t.getUint8(e+m.reserved)}}function y(t){const e=new DataView(t,0);let n=0;const{identifier:o,version:s}=c(t,e,n);if(n+=i.byteCount,"Intensity "!==o)throw new r.A("lepcc-decode-error","Bad identifier");if(s>1)throw new r.A("lepcc-decode-error","Unknown version");const a=p(e,n);if(n+=m.byteCount,a.sizeHi*2**32+a.sizeLo!==t.byteLength)throw new r.A("lepcc-decode-error","Bad size");const u=new Uint16Array(a.count);if(8===a.bitsPerPoint){if(a.count+n!==t.byteLength)throw new r.A("lepcc-decode-error","Bad size");const e=new Uint8Array(t,n,a.count);for(let t=0;t<a.count;t++)u[t]=e[t]*a.scaleFactor}else if(16===a.bitsPerPoint){if(2*a.count+n!==t.byteLength)throw new r.A("lepcc-decode-error","Bad size");const e=new Uint16Array(t,n,a.count);for(let t=0;t<a.count;t++)u[t]=e[t]*a.scaleFactor}else{const e=[];if(f(t,n,e)!==t.byteLength)throw new r.A("lepcc-decode-error","Bad size");for(let t=0;t<a.count;t++)u[t]=e[t]*a.scaleFactor}return u}},35171:(t,e,n)=>{var r,o;n.d(e,{k5:()=>r}),n(68628),(o=r||(r={}))[o.Multiply=1]="Multiply",o[o.Ignore=2]="Ignore",o[o.Replace=3]="Replace",o[o.Tint=4]="Tint"},4012:(t,e,n)=>{n.d(e,{A:()=>i});var r=n(35171),o=n(48468);function i(t){t.vertex.code.add(o.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.H.int(r.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.H.int(r.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.H.int(r.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.H.int(r.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},72630:(t,e,n)=>{var r;function o(t){return t===r.Shadow||t===r.ShadowHighlight||t===r.ShadowExcludeHighlight||t===r.ViewshedShadow}function i(t){return function(t){return function(t){return s(t)||c(t)}(t)||a(t)}(t)||t===r.Normal}function c(t){return t===r.Highlight||t===r.ObjectAndLayerIdColor}function s(t){return t===r.Color}function a(t){return t===r.Depth}n.d(e,{PJ:()=>o,V:()=>r,XY:()=>i}),function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",t[t.ViewshedShadow=6]="ViewshedShadow",t[t.Highlight=7]="Highlight",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"}(r||(r={}))},16903:(t,e,n)=>{n.d(e,{W:()=>r,Y:()=>a});var r,o,i=n(62029),c=n(48468),s=n(47849);function a(t,e){switch(e.normalType){case r.Compressed:t.attributes.add(s.r.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(c.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case r.Attribute:t.attributes.add(s.r.NORMAL,"vec3"),t.vertex.code.add(c.H`vec3 normalModel() {
return normal;
}`);break;case r.ScreenDerivative:t.fragment.code.add(c.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,i.Xb)(e.normalType);case r.COUNT:case r.Ground:}}(o=r||(r={}))[o.Attribute=0]="Attribute",o[o.Compressed=1]="Compressed",o[o.Ground=2]="Ground",o[o.ScreenDerivative=3]="ScreenDerivative",o[o.COUNT=4]="COUNT"},50866:(t,e,n)=>{n.d(e,{u:()=>o});var r=n(48468);function o({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(r.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(r.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},19300:(t,e,n)=>{n(48468)},23513:(t,e,n)=>{n.d(e,{W:()=>i});var r=n(43242),o=n(59234);class i extends r.n{constructor(t,e){super(t,"vec3",o.c.Draw,((n,r,o,i)=>n.setUniform3fv(t,e(r,o,i))))}}},24644:(t,e,n)=>{n.d(e,{t:()=>i});var r=n(43242),o=n(59234);class i extends r.n{constructor(t,e){super(t,"vec3",o.c.Pass,((n,r,o)=>n.setUniform3fv(t,e(r,o))))}}},28589:(t,e,n)=>{n.d(e,{m:()=>i});var r=n(43242),o=n(59234);class i extends r.n{constructor(t,e){super(t,"float",o.c.Pass,((n,r,o)=>n.setUniform1f(t,e(r,o))))}}},64716:(t,e,n)=>{n.d(e,{h:()=>i});var r=n(43242),o=n(59234);class i extends r.n{constructor(t,e){super(t,"mat3",o.c.Draw,((n,r,o)=>n.setUniformMatrix3fv(t,e(r,o))))}}},41477:(t,e,n)=>{n.d(e,{k:()=>i});var r=n(43242),o=n(59234);class i extends r.n{constructor(t,e){super(t,"mat3",o.c.Pass,((n,r,o)=>n.setUniformMatrix3fv(t,e(r,o))))}}},89958:(t,e,n)=>{n.d(e,{X:()=>i});var r=n(43242),o=n(59234);class i extends r.n{constructor(t,e){super(t,"mat4",o.c.Pass,((n,r,o)=>n.setUniformMatrix4fv(t,e(r,o))))}}},29129:(t,e,n)=>{n.d(e,{o:()=>i});var r=n(43242),o=n(59234);class i extends r.n{constructor(t,e){super(t,"sampler2D",o.c.Draw,((n,r,o)=>n.bindTexture(t,e(r,o))))}}},43242:(t,e,n)=>{n.d(e,{n:()=>o});var r=n(59234);class o{constructor(t,e,n,o,i=null){if(this.name=t,this.type=e,this.arraySize=i,this.bind={[r.c.Pass]:null,[r.c.Draw]:null},o)switch(n){case r.c.Pass:this.bind[r.c.Pass]=o;break;case r.c.Draw:this.bind[r.c.Draw]=o}}equals(t){return this.type===t.type&&this.name===t.name&&this.arraySize===t.arraySize}}},48468:(t,e,n)=>{n.d(e,{H:()=>o,Y:()=>r});const r=class{};function o(t,...e){let n="";for(let r=0;r<e.length;r++)n+=t[r]+e[r];return n+=t[t.length-1],n}var i;(i=o||(o={})).int=function(t){return Math.round(t).toString()},i.float=function(t){return t.toPrecision(8)}},59234:(t,e,n)=>{var r;n.d(e,{c:()=>r}),function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"}(r||(r={}))}}]);