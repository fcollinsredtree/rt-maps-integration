"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[8234],{10767:(e,t,n)=>{function r(e){return null!=i(e)||null!=s(e)}function o(e){return u.test(e)}function a(e){return i(e)??s(e)}function s(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(c&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,r=0;for(;!t&&r<=e.length;)t=!l.test(e[r]),r++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function i(e){const t=u.exec(e);if(!t?.groups)return null;const n=t.groups,r=+n.year,o=+n.month-1,a=+n.day,s=+(n.hours??"0"),i=+(n.minutes??"0"),l=+(n.seconds??"0");if(s>23)return null;if(i>59)return null;if(l>59)return null;const c=n.ms??"0",p=c?+c.padEnd(3,"0").substring(0,3):0;let f;if(n.isUTC||!n.offsetSign)f=Date.UTC(r,o,a,s,i,l,p);else{const e=+n.offsetHours,t=+n.offsetMinutes;f=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(r,o,a,s,i,l,p)}return Number.isNaN(f)?null:f}n.d(t,{Br:()=>o,Cq:()=>r,_U:()=>a});const u=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,l=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,c=!Number.isNaN(new Date("technology 10").getTime())},78234:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(57390),o=n(41509),a=n(16431),s=n(68617),i=n(17607),u=n(57362),l=n(96015),c=n(22560),p=n(8291),f=n(67395),d=n(97972),y=n(38937),m=n(61423),g=n(88681),h=n(47205);const w="esri.layers.WFSLayer";class b{constructor(){this._customParameters=null,this._queryEngine=null,this._supportsPagination=!0}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(e,t={}){const{getFeatureUrl:n,getFeatureOutputFormat:r,fields:a,geometryType:i,featureType:u,maxRecordCount:l,maxTotalRecordCount:d,maxPageCount:y,objectIdField:w,customParameters:b}=e,{spatialReference:F,getFeatureSpatialReference:x}=(0,m.UH)(n,u,e.spatialReference);try{await(0,p.Nk)(x,F)}catch{throw new o.A("unsupported-projection","Projection not supported",{inSpatialReference:x,outSpatialReference:F})}(0,s.Te)(t),this._customParameters=b,this._featureType=u,this._fieldsIndex=g.A.fromLayerJSON({fields:a,dateFieldsTimeReference:a.some((e=>"esriFieldTypeDate"===e.type))?{timeZoneIANA:h.n$}:null}),this._geometryType=i,this._getFeatureUrl=n,this._getFeatureOutputFormat=r,this._getFeatureSpatialReference=x,this._maxRecordCount=l,this._maxTotalRecordCount=d,this._maxPageCount=y,this._objectIdField=w,this._spatialReference=F;let S=await this._snapshotFeatures(t);if(S.errors.length>0&&(this._supportsPagination=!1,S=await this._snapshotFeatures(t),S.errors.length>0))throw S.errors[0];return this._queryEngine=new f.d({fieldsIndex:this._fieldsIndex,geometryType:i,hasM:!1,hasZ:!1,objectIdField:w,spatialReference:F,timeInfo:null,featureStore:new c.A({geometryType:i,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(S.features),{warnings:T(S),extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new o.A("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){return this._customParameters=e.customParameters,this._maxRecordCount=e.maxRecordCount,this._maxTotalRecordCount=e.maxTotalRecordCount,this._maxPageCount=e.maxPageCount,this._snapshotTask?.abort(),this._snapshotTask=(0,r.UT)((e=>this._snapshotFeatures({signal:e}))),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._queryEngine.featureStore.addMany(e.features);for(const t of T(e))a.A.getLogger(w).warn(new i.A("wfs-layer:refresh-warning",t.message,t.details));e.errors?.length&&a.A.getLogger(w).warn(new i.A("wfs-layer:refresh-error","Refresh completed with errors",{errors:e.errors}))}),(()=>{this._queryEngine.featureStore.clear()})),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures(e){const t=e?.signal,n=this._maxTotalRecordCount,r=this._maxPageCount,o=this._supportsPagination?await(0,m.E)(this._getFeatureUrl,this._featureType.typeName,{customParameters:this._customParameters,signal:t}):void 0;let a=[];const i=[];if(null==o)try{a=await this._singleQuery(t)}catch(e){(0,s.zf)(e)||i.push(e)}else{const e=Math.min(o,n),u=function*(e,t,n){for(let r=0;r<t;r++)yield e._pageQuery(r,n)}(this,Math.max(1,Math.min(Math.ceil(e/this._maxRecordCount),r)),t);await Promise.allSettled(Array.from({length:10}).map((()=>async function(e,t,n){let r=e.next();for(;!r.done;){try{const e=await r.value;t.push(...e)}catch(e){(0,s.zf)(e)||n.push(e)}r=e.next()}}(u,a,i))))}return(0,s.Te)(t),{features:a,totalRecordCount:o,maxTotalRecordCount:n,maxPageCount:r,errors:i}}async _singleQuery(e){const t=await(0,m.x$)(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:e});return this._processGeoJSON(t,{signal:e})}async _pageQuery(e,t){const n=e*this._maxRecordCount,r=await(0,m.x$)(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,startIndex:n,count:this._maxRecordCount,signal:t});return this._processGeoJSON(r,{startIndex:n,signal:t})}_processGeoJSON(e,t){(0,d.sO)(e,this._getFeatureSpatialReference.wkid);const{startIndex:n,signal:r}=t;(0,s.Te)(r);const o=(0,d.bd)(e,{geometryType:this._geometryType,hasZ:!1,objectIdField:this._objectIdField});if(!(0,u.aI)(this._spatialReference,this._getFeatureSpatialReference))for(const e of o)null!=e.geometry&&(e.geometry=(0,l.Ux)((0,p.Cv)((0,l.zv)(e.geometry,this._geometryType,!1,!1),this._getFeatureSpatialReference,this._spatialReference)));let a=n??1;for(const e of o){const t={};(0,y.MB)(this._fieldsIndex,t,e.attributes,!0),e.attributes=t,null==t[this._objectIdField]&&(e.objectId=t[this._objectIdField]=a++)}return o}}function T(e){const t=[];return null!=e.totalRecordCount&&(e.features.length<e.totalRecordCount&&t.push({name:"wfs-layer:maxRecordCount-too-low",message:`Could only fetch ${e.features.length} of ${e.totalRecordCount} in ${e.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`,details:{recordCount:e.features.length,totalRecordCount:e.totalRecordCount}}),e.totalRecordCount>e.maxTotalRecordCount&&t.push({name:"wfs-layer:large-dataset",message:`The number of ${e.totalRecordCount} features exceeds the maximum allowed of ${e.maxTotalRecordCount}.`,details:{recordCount:e.features.length,totalRecordCount:e.totalRecordCount,maxTotalRecordCount:e.maxTotalRecordCount}})),t}},97972:(e,t,n)=>{n.d(t,{BM:()=>_,bd:()=>C,sO:()=>S,xD:()=>c});var r=n(10767),o=n(41509),a=n(57362),s=n(29241),i=n(36511),u=n(44857);const l={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function c(e){return l[e]}function*p(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*f(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function d(e){for(const t of e)if(t.length>2)return!0;return!1}function y(e){let t=0;for(let n=0;n<e.length;n++){const r=e[n],o=e[(n+1)%e.length];t+=r[0]*o[1]-o[0]*r[1]}return t<=0}function m(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const r of t.coordinates)b(e,r,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const r of t.coordinates){h(e,r[0],n);for(let t=1;t<r.length;t++)w(e,r[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return F(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const r=t.coordinates;h(e,r[0],n);for(let t=1;t<r.length;t++)w(e,r[t],n);return e}(e,t,n)}}function h(e,t,n){const r=m(t);!function(e){return!y(e)}(r)?b(e,r,n):T(e,r,n)}function w(e,t,n){const r=m(t);!function(e){return y(e)}(r)?b(e,r,n):T(e,r,n)}function b(e,t,n){for(const r of t)F(e,r,n);e.lengths.push(t.length)}function T(e,t,n){for(let r=t.length-1;r>=0;r--)F(e,t[r],n);e.lengths.push(t.length)}function F(e,t,n){const[r,o,a]=t;e.coords.push(r,o),n.hasZ&&e.coords.push(a||0)}function x(e){switch(typeof e){case"string":return(0,r.Br)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function S(e,t=4326){if(!e)throw new o.A("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new o.A("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const r="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,s=(0,a.oT)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${t})$`,"i");if(!r||!s.test(r))throw new o.A("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function _(e,t={}){const n=[],r=new Set,o=new Set;let a,s=!1,i=null,l=!1,{geometryType:y=null}=t,m=!1;for(const t of p(e)){const{geometry:e,properties:p,id:g}=t;if((!e||(y||(y=c(e.type)),c(e.type)===y))&&(s||(s=d(f(e))),l||(l=null!=g,l&&(a=typeof g,p&&(i=Object.keys(p).filter((e=>p[e]===g))))),p&&i&&l&&null!=g&&(i.length>1?i=i.filter((e=>p[e]===g)):1===i.length&&(i=p[i[0]]===g?i:[])),!m&&p)){let e=!0;for(const t in p){if(r.has(t))continue;const a=p[t];if(null==a){e=!1,o.add(t);continue}const s=x(a);if("unknown"===s){o.add(t);continue}o.delete(t),r.add(t);const i=(0,u.rS)(t);i&&n.push({name:i,alias:t,type:s})}m=e}}const g=(0,u.rS)(1===i?.length&&i[0]||null)??void 0;if(g)for(const e of n)if(e.name===g&&(0,u.WA)(e)){e.type="esriFieldTypeOID";break}return{fields:n,geometryType:y,hasZ:s,objectIdFieldName:g,objectIdFieldType:a,unknownFields:Array.from(o)}}function C(e,t){return Array.from(function*(e,t={}){const{geometryType:n,objectIdField:r}=t;for(const o of e){const{geometry:e,properties:a,id:u}=o;if(e&&c(e.type)!==n)continue;const l=a||{};let p;r&&(p=l[r],null==u||p||(l[r]=p=u));const f=new s.Om(e?g(new i.A,e,t):null,l,null,p??void 0);yield f}}(p(e),t))}},38937:(e,t,n)=>{n.d(t,{$1:()=>g,CR:()=>m,MB:()=>f,Yx:()=>u,bP:()=>c});var r=n(10767),o=n(57362),a=n(44857);class s{constructor(){this.code=null,this.description=null}}class i{constructor(e){this.error=new s,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new i(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new l(e)}const p=new Set;function f(e,t,n,r=!1){p.clear();for(const o in n){const s=e.get(o);if(!s)continue;const i=d(s,n[o]);if(p.add(s.name),s&&(r||s.editable)){const e=(0,a.CJ)(s,i);if(e)return u((0,a.uo)(e,s,i));t[s.name]=i}}for(const t of e?.requiredFields??[])if(!p.has(t.name))return u(`missing required field "${t.name}"`);return null}function d(e,t){let n=t;return(0,a.WA)(e)&&"string"==typeof t?n=parseFloat(t):(0,a.yM)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,a.vE)(e)&&"string"==typeof t&&(n=(0,r._U)(t)),(0,a.WX)(n)}let y;function m(e,t){if(!e||!(0,o.fn)(t))return e;if("rings"in e||"paths"in e){if(null==y)throw new TypeError("geometry engine not loaded");return y.simplify(t,e)}return e}async function g(e,t){!(0,o.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==y&&(y=await Promise.all([n.e(7423),n.e(7322)]).then(n.bind(n,97322))),y}()}},61423:(e,t,n)=>{n.d(t,{E:()=>W,Fu:()=>k,O8:()=>v,UH:()=>J,YW:()=>O,i5:()=>b,mG:()=>G,x$:()=>L}),n(29747);var r=n(18798),o=n(41509),a=n(17768),s=n(76097),i=n(48460),u=n(57362),l=n(77069),c=n(97972),p=n(57126),f=n(56735),d=n(30086),y=n(44857),m=n(93710),g=n(62771);const h="xlink:href",w="2.0.0",b="__esri_wfs_id__",T="wfs-layer:getWFSLayerTypeInfo-error",F="wfs-layer:empty-service",x="wfs-layer:feature-type-not-found",S="wfs-layer:geojson-not-supported",_="wfs-layer:kvp-encoding-not-supported",C="wfs-layer:malformed-json",R="wfs-layer:unknown-geometry-type",P="wfs-layer:unknown-field-type",A="wfs-layer:unsupported-spatial-reference",E="wfs-layer:unsupported-wfs-version";async function k(e,t){const n=function(e){const t=V(e);(function(e){const t=e.firstElementChild?.getAttribute("version");if(t&&t!==w)throw new o.A(E,`Unsupported WFS version ${t}. Supported version: ${w}`)})(t),Q(t);const n=t.firstElementChild,r=(0,a.PP)(function(e){return(0,p.i)(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},n=new Set;return(0,p.p)(e,{Name:e=>{const{name:n,prefix:r}=z(e.textContent);t.typeName=`${r}:${n}`,t.name=n,t.namespacePrefix=r,t.namespaceUri=e.lookupNamespaceURI(r)},Abstract:e=>{t.description=e.textContent},Title:e=>{t.title=e.textContent},WGS84BoundingBox:e=>{t.extent=m.A.fromJSON(function(e){let t,n,r,o;for(const a of e.children)switch(a.localName){case"LowerCorner":[t,n]=a.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[r,o]=a.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:n,xmax:r,ymax:o,spatialReference:u.KK}}(e))},DefaultCRS:e=>{const r=M(e);r&&(t.defaultSpatialReference=r,n.add(r))},OtherCRS:e=>{const t=M(e);t&&n.add(t)}}),t.title||(t.title=t.name),n.add(4326),t.supportedSpatialReferences.push(...n),t}}})}(n));return{operations:j(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}((await(0,r.A)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:w,...t?.customParameters},signal:t?.signal})).data);return function(e,t){(0,s.m3)(e)&&((0,s.FX)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,s.lM)(t.operations.DescribeFeatureType.url)),(0,s.FX)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,s.lM)(t.operations.GetFeature.url)))}(e,n),n}const N=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function I(e){for(const t of N){const n=e.findIndex((e=>e.toLowerCase()===t));if(n>=0)return e[n]}return null}function j(e){let t=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},r=[],a=[];if((0,p.p)(e,{OperationsMetadata:{Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:({textContent:e})=>{e&&r.push(e)}}}},Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(h)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(h)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(h)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:({textContent:e})=>{e&&a.push(e)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),n.GetFeature.outputFormat=I(a)??I(r),!t)throw new o.A(_,"WFS service doesn't support key/value pair (KVP) encoding");if(null==n.GetFeature.outputFormat)throw new o.A(S,"WFS service doesn't support GeoJSON output format");return n}function M(e){const t=parseInt(e.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);if(!Number.isNaN(t))return t}function G(e,t,n){return(0,a.I6)(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function v(e,t,n,r={}){const{featureType:a,extent:s}=await async function(e,t,n,r={}){const a=e.readFeatureTypes(),s=t?G(a,t,n):a.next().value,{spatialReference:l=new g.A({wkid:s?.defaultSpatialReference})}=r;if(null==s)throw t?new o.A(x,`The type '${t}' could not be found in the service`):new o.A(F,"The service is empty");let c=s.extent;if(c&&!(0,u.aI)(c.spatialReference,l))try{await(0,i.initializeProjection)(c.spatialReference,l,void 0,r),c=(0,i.project)(c,l)}catch{throw new o.A(A,"Projection not supported")}return{extent:c,spatialReference:l,featureType:s}}(e,t,n,r),{spatialReference:l}=J(e.operations.GetFeature.url,a,r.spatialReference),{fields:c,geometryType:p,swapXY:f,objectIdField:d,geometryField:y}=await async function(e,t,n,r={}){const{typeName:a}=t,[s,i]=await Promise.allSettled([U(e.operations.DescribeFeatureType.url,a,r),q(e,a,n,r)]),u=e=>new o.A(T,`An error occurred while getting info about the feature type '${a}'`,{error:e});if("rejected"===s.status)throw u(s.reason);if("rejected"===i.status)throw u(i.reason);const{fields:l,errors:c}=s.value??{},p=s.value?.geometryType||i.value?.geometryType,f=i.value?.swapXY??!1;if(null==p)throw new o.A(R,`The geometry type could not be determined for type '${a}`,{typeName:a,geometryType:p,fields:l,errors:c});return{...O(l??[]),geometryType:p,swapXY:f}}(e,a,l,r);return{url:e.operations.GetCapabilities.url,name:a.name,namespaceUri:a.namespaceUri,fields:c,geometryField:y,geometryType:p,objectIdField:d,spatialReference:r.spatialReference??new g.A({wkid:a.defaultSpatialReference}),extent:s,swapXY:f,wfsCapabilities:e,customParameters:r.customParameters}}function O(e){const t=e.find((e=>"geometry"===e.type));let n=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),n||(n=new d.A({name:b,type:"oid",alias:b}),e.unshift(n)),{geometryField:t?.name??null,objectIdField:n.name,fields:e}}async function q(e,t,n,o={}){let a,s=!1;const[i,u]=await Promise.all([L(e.operations.GetFeature.url,t,n,e.operations.GetFeature.outputFormat,{...o,count:1}),(0,r.A)(e.operations.GetFeature.url,{responseType:"text",query:D(t,n,void 0,{...o,count:1}),signal:o?.signal})]),p="FeatureCollection"===i.type&&i.features[0]?.geometry;if(p){let e;switch(a=l.g.fromJSON((0,c.xD)(p.type)),p.type){case"Point":e=p.coordinates;break;case"LineString":case"MultiPoint":e=p.coordinates[0];break;case"MultiLineString":case"Polygon":e=p.coordinates[0][0];break;case"MultiPolygon":e=p.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data);if(t){const n=e[0].toFixed(3),r=e[1].toFixed(3),o=parseFloat(t[1]).toFixed(3);n===parseFloat(t[2]).toFixed(3)&&r===o&&(s=!0)}}return{geometryType:a,swapXY:s}}async function U(e,t,n){return function(e,t){const{name:n}=z(e),r=V(t);Q(r);const s=(0,a.I6)((0,p.i)(r.firstElementChild,{element:e=>e}),(e=>e.getAttribute("name")===n));if(null!=s){const e=s.getAttribute("type"),t=e?(0,a.I6)((0,p.i)(r.firstElementChild,{complexType:e=>e}),(t=>t.getAttribute("name")===z(e).name)):(0,a.I6)((0,p.i)(s,{complexType:e=>e}),(()=>!0));if(t)return function(e){const t=[],n=[];let r;const a=(0,p.i)(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const s of a){const a=s.getAttribute("name");if(!a)continue;let i,u;if(s.hasAttribute("type")?i=z(s.getAttribute("type")).name:(0,p.p)(s,{simpleType:{restriction:e=>(i=z(e.getAttribute("base")).name,{maxLength:e=>{u=+e.getAttribute("value")}})}}),!i)continue;const l="true"===s.getAttribute("nillable");let c=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":n.push(new d.A({name:a,alias:a,type:"integer",nullable:l,length:(0,y._b)("integer")}));break;case"float":case"double":case"decimal":n.push(new d.A({name:a,alias:a,type:"double",nullable:l,length:(0,y._b)("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":n.push(new d.A({name:a,alias:a,type:"string",nullable:l,length:u??(0,y._b)("string")}));break;case"datetime":case"date":n.push(new d.A({name:a,alias:a,type:"date",nullable:l,length:u??(0,y._b)("date")}));break;case"pointpropertytype":r="point",c=!0;break;case"multipointpropertytype":r="multipoint",c=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",c=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",c=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":c=!0,t.push(new o.A(R,`geometry type '${i}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:t.push(new o.A(P,`Unknown field type '${i}'`,{type:(new XMLSerializer).serializeToString(e)}))}c&&n.push(new d.A({name:a,alias:a,type:"geometry",nullable:l}))}for(const e of n)if("integer"===e.type&&!e.nullable&&$.has(e.name.toLowerCase())){e.type="oid";break}return{geometryType:r,fields:n,errors:t}}(t)}throw new o.A(x,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(r)})}(t,(await(0,r.A)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:w,TYPENAME:t,TYPENAMES:t,...n?.customParameters},signal:n?.signal})).data)}const $=new Set(["objectid","fid"]);async function L(e,t,n,a,s){let{data:i}=await(0,r.A)(e,{responseType:"text",query:D(t,n,a,s),signal:s?.signal});i=i.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(i)}catch(e){throw new o.A(C,"Error while parsing the response",{response:i,error:e})}}function D(e,t,n,r){const o="number"==typeof t?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:w,TYPENAMES:e,OUTPUTFORMAT:n,SRSNAME:"EPSG:"+o,STARTINDEX:r?.startIndex,COUNT:r?.count,...r?.customParameters}}async function W(e,t,n){const o=await(0,r.A)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:w,TYPENAMES:t,RESULTTYPE:"hits",...n?.customParameters},signal:n?.signal}),a=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(o.data);if(a?.groups)return+a.groups.numberMatched}function V(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function z(e){const[t,n]=e.split(":");return{prefix:n?t:"",name:n??t}}function Q(e){let t="",n="";if((0,p.p)(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),t)throw new o.A(`wfs-layer:${t}`,n)}function J(e,t,n){const r={wkid:t.defaultSpatialReference},o=null!=n?.wkid?{wkid:n.wkid}:r;return{spatialReference:o,getFeatureSpatialReference:(0,f.Fi)(e)||o.wkid&&t.supportedSpatialReferences.includes(o.wkid)?{wkid:o.wkid}:{wkid:t.defaultSpatialReference}}}},57126:(e,t,n)=>{function r(e,t){if(e&&t)for(const n of e.children)if(n.localName in t){const e=t[n.localName];if("function"==typeof e){const t=e(n);t&&r(n,t)}else r(n,e)}}function*o(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];"function"==typeof e?yield e(n):yield*o(n,e)}}n.d(t,{i:()=>o,p:()=>r})}}]);