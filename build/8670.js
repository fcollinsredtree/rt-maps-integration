"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[8670,6289],{41521:(e,a,t)=>{t.d(a,{v:()=>n});var r=t(13042);function n(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:a,newOrigin:t})=>{(0,r.H)(e)&&t&&e.originOf(a)!==t&&e.updateOrigin(a,t)}))}},13042:(e,a,t)=>{function r(e){return e&&"getAtOrigin"in e&&"originOf"in e}t.d(a,{H:()=>r})},38670:(e,a,t)=>{t.d(a,{save:()=>I,saveAs:()=>O});var r=t(36581),n=(t(41509),t(79619)),i=t(56735),s=t(37315),o=t(66042),l=t(12254),u=t(17504);const d="Feature Service",y="feature-layer-utils",c=`${y}-save`,f=`${y}-save-as`;function p(e){return{isValid:(0,o.W_)(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e){const a=[],t=[];for(const{layer:r,layerJSON:n}of e)r.isTable?t.push(n):a.push(n);return{layers:a,tables:t}}function w(e){return m([e])}async function h(e,a){return/\/\d+\/?$/.test(e.url)?w(a[0]):async function(e,a){if(e.reverse(),!a)return m(e);const t=await async function(e,a){let t=await e.fetchData("json");if(function(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}(t))return t;t||={},function(e){e.layers||=[],e.tables||=[]}(t);const{layer:{url:r,customParameters:n,apiKey:i}}=a[0];return await async function(e,a,t){const{url:r,customParameters:n,apiKey:i}=a,{serviceJSON:o,layersJSON:u}=await(0,s.Q)(r,{customParameters:n,apiKey:i}),d=v(e.layers,o.layers,t),y=v(e.tables,o.tables,t);e.layers=d.itemResources,e.tables=y.itemResources;const c=[...d.added,...y.added],f=u?[...u.layers,...u.tables]:[];await async function(e,a,t,r){const n=await async function(e){const a=[];e.forEach((({type:e})=>{const t=(0,s.K)(e),r=l.S[t];a.push(r())}));const t=await Promise.all(a),r=new Map;return e.forEach((({type:e},a)=>{r.set(e,t[a])})),r}(a),i=a.map((({id:e,type:a})=>new(n.get(a))({url:t,layerId:e,sourceJSON:r.find((({id:a})=>a===e))})));await Promise.allSettled(i.map((e=>e.load()))),i.forEach((a=>{const{layerId:t,loaded:r,defaultPopupTemplate:n}=a;if(!r||null==n)return;const i={id:t,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==a.operationalLayerType&&(i.layerType=a.operationalLayerType),S(a,i,e)}))}(e,c,r,f)}(t,{url:r??"",customParameters:n,apiKey:i},a.map((e=>e.layer.layerId))),t}(a,e);for(const a of e)S(a.layer,a.layerJSON,t);return function(e,a){const t=[],r=[];for(const{layer:e}of a){const{isTable:a,layerId:n}=e;a?r.push(n):t.push(n)}b(e.layers,t),b(e.tables,r)}(t,e),t}(a,e)}function b(e,a){if(e.length<2)return;const t=[];for(const{id:a}of e)t.push(a);(0,r.aI)(t.sort(L),a.slice().sort(L))&&e.sort(((e,t)=>{const r=a.indexOf(e.id),n=a.indexOf(t.id);return r<n?-1:r>n?1:0}))}function L(e,a){return e<a?-1:e>a?1:0}function v(e,a,t){const n=(0,r.iv)(e,a,((e,a)=>e.id===a.id));e=e.filter((e=>!n.removed.some((a=>a.id===e.id))));const i=n.added;return i.forEach((({id:a})=>{e.push({id:a})})),{itemResources:e,added:i.filter((({id:e})=>!t.includes(e)))}}function S(e,a,t){e.isTable?g(t.tables,a):g(t.layers,a)}function g(e,a){const t=e.findIndex((({id:e})=>e===a.id));-1===t?e.push(a):e[t]=a}async function P(e,a){const{url:t,layerId:r,title:n,fullExtent:s,isTable:o}=e,l=(0,i.qg)(t);a.url=("FeatureServer"===l?.serverType?t:`${t}/${r}`)??null,a.title||=n,a.extent=null,o||null==s||(a.extent=await(0,u.sQ)(s)),(0,u.OM)(a,u.mm.METADATA),(0,u.OM)(a,u.mm.MULTI_LAYER),(0,u.LG)(a,u.mm.SINGLE_LAYER),o&&(0,u.LG)(a,u.mm.TABLE)}async function I(e,a){return(0,n.UN)({layer:e,itemType:d,validateLayer:p,createItemData:(e,a)=>h(a,[e]),errorNamePrefix:c},a)}async function O(e,a,t){return(0,n.Uh)({layer:e,itemType:d,validateLayer:p,createItemData:(e,a)=>Promise.resolve(w(e)),errorNamePrefix:f,newItem:a,setItemProperties:P},t)}},79619:(e,a,t)=>{t.d(a,{UN:()=>L,Uh:()=>v});var r=t(41509),n=t(41521),i=t(24608),s=t(81203),o=t(18275),l=t(17504),u=t(67123),d=t(16442);async function y(e){const{layer:a,errorNamePrefix:t,validateLayer:n}=e;await a.load(),function(e,a,t){const n=t(e);if(!n.isValid)throw new r.A(`${a}:invalid-parameters`,n.errorMessage,{layer:e})}(a,t,n)}function c(e,a){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${a}`}function f(e){const{item:a,errorNamePrefix:t,layer:n,validateItem:i}=e;if((0,u.X)(a),function(e){const{item:a,itemType:t,additionalItemType:n,errorNamePrefix:i,layer:s}=e,o=[t];if(n&&o.push(n),!o.includes(a.type)){const e=o.map((e=>`'${e}'`)).join(", ");throw new r.A(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:a,layer:s})}}(e),i){const e=i(a);if(!e.isValid)throw new r.A(`${t}:invalid-parameters`,e.errorMessage,{layer:n})}}function p(e){const{layer:a,errorNamePrefix:t}=e,{portalItem:n}=a;if(!n)throw new r.A(`${t}:portal-item-not-set`,c(a,"requires the portalItem property to be set"));if(!n.loaded)throw new r.A(`${t}:portal-item-not-loaded`,c(a,"cannot be saved to a portal item that does not exist or is inaccessible"));f({...e,item:n})}function m(e){const{newItem:a,itemType:t}=e;let r=s.default.from(a);return r.id&&(r=r.clone(),r.id=null),r.type??=t,r.portal??=i.A.getDefault(),f({...e,item:r}),r}function w(e){return(0,o.m)(e,"portal-item")}async function h(e,a,t){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const r=e.write({},a);return await Promise.all(a.resources?.pendingOperations??[]),(0,d.c)(a,{errorName:"layer-write:unsupported"},t),r}function b(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,a,t)=>t.indexOf(e)===a)))}async function L(e,a){const{layer:t,createItemData:r,createJSONContext:i,setItemProperties:s,saveResources:o,supplementalUnsupportedErrors:l}=e;await y(e),p(e);const u=t.portalItem,d=i?i(u):w(u),c=await h(t,d,{...a,supplementalUnsupportedErrors:l}),f=await r({layer:t,layerJSON:c},u);return await(s?.(t,u)),b(u),await u.update({data:f}),(0,n.v)(d),await(o?.(u,d)),u}async function v(e,a){const{layer:t,createItemData:r,createJSONContext:i,setItemProperties:s,saveResources:o,supplementalUnsupportedErrors:l}=e;await y(e);const u=m(e),d=i?i(u):w(u),c=await h(t,d,{...a,supplementalUnsupportedErrors:l}),f=await r({layer:t,layerJSON:c},u);return await s(t,u),b(u),await async function(e,a,t){const r=e.portal;await r.signIn(),await(r.user?.addItem({item:e,data:a,folder:t?.folder}))}(u,f,a),t.portalItem=u,(0,n.v)(d),await(o?.(u,d)),u}},37315:(e,a,t)=>{t.d(a,{K:()=>c,Q:()=>i});var r=t(87092);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function i(e,a){const{loadContext:t,...n}=a||{},i=t?await t.fetchServiceMetadata(e,n):await(0,r.V)(e,n);y(i),l(i);const s={serviceJSON:i};if((i.currentVersion??0)<10.5)return s;const o=`${e}/layers`,u=t?await t.fetchServiceMetadata(o,n):await(0,r.V)(o,n);return y(u),l(u),s.layersJSON={layers:u.layers,tables:u.tables},s}function s(e){const{type:a}=e;return!!a&&n.has(a)}function o(e){return"Table"===e.type}function l(e){e.layers=e.layers?.filter(s),e.tables=e.tables?.filter(o)}function u(e){e.type||="Feature Layer"}function d(e){e.type||="Table"}function y(e){e.layers?.forEach(u),e.tables?.forEach(d)}function c(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},12254:(e,a,t)=>{t.d(a,{S:()=>r});const r={BingMapsLayer:async()=>(await t.e(1036).then(t.bind(t,61036))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(3530),t.e(5267),t.e(8348),t.e(4462),t.e(8137),t.e(9684)]).then(t.bind(t,29364))).default,CSVLayer:async()=>(await Promise.all([t.e(3530),t.e(5267),t.e(2183)]).then(t.bind(t,19823))).default,CatalogLayer:async()=>(await Promise.all([t.e(3530),t.e(3901),t.e(1761),t.e(3156),t.e(9625)]).then(t.bind(t,65328))).default,DimensionLayer:async()=>(await t.e(9386).then(t.bind(t,39386))).default,ElevationLayer:async()=>(await t.e(964).then(t.bind(t,30964))).default,FeatureLayer:async()=>(await Promise.all([t.e(3530),t.e(5267),t.e(7865)]).then(t.bind(t,5267))).default,GeoJSONLayer:async()=>(await Promise.resolve().then(t.bind(t,63854))).default,GeoRSSLayer:async()=>(await t.e(7870).then(t.bind(t,97870))).default,GroupLayer:async()=>(await t.e(3868).then(t.bind(t,63868))).default,ImageryLayer:async()=>(await Promise.all([t.e(3901),t.e(6964),t.e(8875),t.e(8779),t.e(983)]).then(t.bind(t,48496))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(6964),t.e(8875),t.e(7216),t.e(8779),t.e(2051)]).then(t.bind(t,72051))).default,IntegratedMesh3DTilesLayer:async()=>(await t.e(5209).then(t.bind(t,45209))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(8137),t.e(9900)]).then(t.bind(t,99900))).default,KMLLayer:async()=>(await t.e(8910).then(t.bind(t,78910))).default,KnowledgeGraphLayer:async()=>(await Promise.all([t.e(9104),t.e(4226),t.e(5156),t.e(3293),t.e(2560),t.e(1885),t.e(4852),t.e(7259)]).then(t.bind(t,37259))).default,LineOfSightLayer:async()=>(await t.e(2319).then(t.bind(t,62319))).default,LinkChartLayer:async()=>(await Promise.all([t.e(9104),t.e(4226),t.e(5156),t.e(3293),t.e(2560),t.e(1885),t.e(4852),t.e(252)]).then(t.bind(t,252))).default,MapImageLayer:async()=>(await Promise.all([t.e(3901),t.e(1761),t.e(6085),t.e(5494)]).then(t.bind(t,15494))).default,MapNotesLayer:async()=>(await Promise.all([t.e(3530),t.e(5267),t.e(1334)]).then(t.bind(t,10166))).default,MediaLayer:async()=>(await t.e(5823).then(t.bind(t,85823))).default,OGCFeatureLayer:async()=>(await t.e(3753).then(t.bind(t,33753))).default,OpenStreetMapLayer:async()=>(await t.e(2288).then(t.bind(t,32288))).default,OrientedImageryLayer:async()=>(await Promise.all([t.e(3530),t.e(5267),t.e(6441)]).then(t.bind(t,92817))).default,PointCloudLayer:async()=>(await t.e(1483).then(t.bind(t,51483))).default,RouteLayer:async()=>(await Promise.all([t.e(3666),t.e(1779)]).then(t.bind(t,81779))).default,SceneLayer:async()=>(await Promise.all([t.e(1059),t.e(8348),t.e(4462),t.e(8137),t.e(9464),t.e(2024)]).then(t.bind(t,2024))).default,StreamLayer:async()=>(await t.e(6034).then(t.bind(t,66034))).default,SubtypeGroupLayer:async()=>(await Promise.all([t.e(3530),t.e(3120)]).then(t.bind(t,72825))).default,TileLayer:async()=>(await Promise.all([t.e(3901),t.e(1761),t.e(6085),t.e(8375)]).then(t.bind(t,38375))).default,UnknownLayer:async()=>(await t.e(8579).then(t.bind(t,18579))).default,UnsupportedLayer:async()=>(await t.e(732).then(t.bind(t,10732))).default,VectorTileLayer:async()=>(await Promise.resolve().then(t.bind(t,89556))).default,VideoLayer:async()=>(await t.e(4557).then(t.bind(t,44557))).default,VoxelLayer:async()=>(await t.e(3656).then(t.bind(t,13656))).default,WFSLayer:async()=>(await t.e(5677).then(t.bind(t,75677))).default,WMSLayer:async()=>(await t.e(5713).then(t.bind(t,75713))).default,WMTSLayer:async()=>(await t.e(7588).then(t.bind(t,47588))).default,WebTileLayer:async()=>(await t.e(455).then(t.bind(t,80455))).default}},87092:(e,a,t)=>{t.d(a,{V:()=>n});var r=t(18798);async function n(e,a){const{data:t}=await(0,r.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return t}},67123:(e,a,t)=>{t.d(a,{X:()=>s});var r=t(41965),n=t(41509),i=t(85427);function s(e){if(r.A.apiKey&&(0,i.Q)(e.portal.url))throw new n.A("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}},16442:(e,a,t)=>{t.d(a,{c:()=>s,d:()=>n});var r=t(41509);async function n(e){const a=[];for(const t of e.allLayers)if("beforeSave"in t&&"function"==typeof t.beforeSave){const e=t.beforeSave();e&&a.push(e)}await Promise.allSettled(a)}const i=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function s(e,a,t){let n=(e.messages??[]).filter((({type:e})=>"error"===e)).map((({name:e,message:a,details:t})=>new r.A(e,a,t)));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map((e=>new r.A("url:unsupported",`Relative url '${e}' is not supported`))))),t){const{ignoreUnsupported:e,supplementalUnsupportedErrors:a=[],requiredPropertyChecksDisabled:r}=t;e&&(n=n.filter((({name:e})=>!(i.has(e)||a.includes(e))))),r&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new r.A(a.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}}}]);