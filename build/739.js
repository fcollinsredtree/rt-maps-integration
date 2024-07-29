"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[739],{10739:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>d});var t=r(41509),n=r(76097),s=r(56735),l=r(28342),i=r(37315),o=r(66042),c=r(12254),u=r(87092);const y={FeatureLayer:!0,SceneLayer:!0};async function d(e){const{properties:a,url:t}=e,n={...a,url:t},s=await h(t,a?.customParameters),{Constructor:l,layerId:i,sourceJSON:o,parsedUrl:c,layers:u,tables:y}=s;if(u.length+y.length===0)return null!=i&&(n.layerId=i),null!=o&&(n.sourceJSON=o),new l(n);const d=new(0,(await r.e(3868).then(r.bind(r,63868))).default)({title:c.title});return await async function(e,a,r){const t=a.sublayerConstructorProvider;for(const{id:n,serverUrl:s}of a.layers){const l=f(a.sublayerInfos,n),i=w(s,n,l,(l&&t?.(l))??a.Constructor,r);e.add(i)}if(a.tables.length){const t=await p("FeatureLayer");a.tables.forEach((({id:n,serverUrl:s})=>{const l=w(s,n,f(a.tableInfos,n),t,r);e.tables.add(l)}))}}(d,s,n),d}function f(e,a){return e?e.find((({id:e})=>e===a)):null}function w(e,a,r,t,n){const s={...n,layerId:a};return null!=e&&(s.url=e),null!=r&&(s.sourceJSON=r),"sublayerTitleMode"in t.prototype&&(s.sublayerTitleMode="service-name"),new t(s)}async function h(e,a){let r=(0,s.qg)(e);if(null==r&&(r=await async function(e,a){const r=await(0,u.V)(e,{customParameters:a});let t=null,l=null;const i=r.type;if("Feature Layer"===i||"Table"===i?(t="FeatureServer",l=r.id??null):"indexedVector"===i?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":m(r)?(t="SceneServer",l=r.id):r.hasOwnProperty("layers")&&m(r.layers?.[0])&&(t="SceneServer"),!t)return null;const o=null!=l?(0,s.iz)(e):null;return{title:null!=o&&r.name||(0,n.e7)(e),serverType:t,sublayer:l,url:{path:null!=o?o.serviceUrl:(0,n.An)(e).path}}}(e,a)),null==r)throw new t.A("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:c,sublayer:d}=r;let f;const w={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},h="FeatureServer"===c,b="SceneServer"===c,v={parsedUrl:r,Constructor:null,layerId:h||b?d??void 0:void 0,layers:[],tables:[]};switch(c){case"MapServer":if(null!=d){const{type:r}=await(0,u.V)(e,{customParameters:a});switch(f="FeatureLayer",r){case"Catalog Layer":f="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new t.A("arcgis-layers:unsupported",`fromUrl() not supported for "${r}" layers`)}}else f=await async function(e,a){return(await(0,u.V)(e,{customParameters:a})).tileInfo}(e,a)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const r=await(0,u.V)(e,{customParameters:a}),{tileInfo:t,cacheType:n}=r;f=t?"LERC"!==t?.format?.toUpperCase()||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,u.V)(r.url.path,{customParameters:a});if(f="SceneLayer",e){const a=e?.layers;if("Voxel"===e?.layerType)f="VoxelLayer";else if(a?.length){const e=a[0]?.layerType;null!=e&&null!=o.XX[e]&&(f=o.XX[e])}}break}case"3DTilesServer":throw new t.A("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(f="FeatureLayer",null!=d){const r=await(0,u.V)(e,{customParameters:a});v.sourceJSON=r,f=(0,i.K)(r.type)}break;default:f=w[c]}if(y[f]&&null==d){const r=await async function(e,a,r){let t,n,s=!1;switch(a){case"FeatureServer":{const a=await(0,i.Q)(e,{customParameters:r});s=!!a.layersJSON,t=a.layersJSON||a.serviceJSON;break}case"SceneServer":{const a=await async function(e,a){const r=await(0,u.V)(e,{customParameters:a}),t=r.layers?.[0];if(!t)return{serviceInfo:r};try{const{serverUrl:t}=await(0,l.L)(e),n=await(0,u.V)(t,{customParameters:a}).catch((()=>null));return n&&(r.tables=n.tables),{serviceInfo:r,tableServerUrl:t}}catch{return{serviceInfo:r}}}(e,r);t=a.serviceInfo,n=a.tableServerUrl;break}default:t=await(0,u.V)(e,{customParameters:r})}const o=t?.layers,c=t?.tables;return{layers:o?.map((e=>({id:e.id}))).reverse()||[],tables:c?.map((e=>({serverUrl:n,id:e.id}))).reverse()||[],layerInfos:s?o:[],tableInfos:s?c:[]}}(e,c,a);if(h&&(v.sublayerInfos=r.layerInfos,v.tableInfos=r.tableInfos),1!==r.layers.length+r.tables.length)v.layers=r.layers,v.tables=r.tables,h&&r.layerInfos?.length&&(v.sublayerConstructorProvider=await async function(e){if(!e.length)return;const a=new Set,r=[];for(const{type:t}of e)a.has(t)||(a.add(t),r.push(p((0,i.K)(t))));const t=await Promise.all(r),n=new Map;return Array.from(a).forEach(((e,a)=>{n.set(e,t[a])})),e=>n.get(e.type)}(r.layerInfos));else if(h||b){const e=r.layerInfos?.[0]??r.tableInfos?.[0];if(v.layerId=r.layers[0]?.id??r.tables[0]?.id,v.sourceJSON=e,h){const a=e?.type;f=(0,i.K)(a)}}}return v.Constructor=await p(f),v}function m(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function p(e){return(0,c.S[e])()}},28342:(e,a,r)=>{r.d(a,{L:()=>u});var t=r(17242),n=r(18798),s=r(41509),l=r(68617),i=r(56735),o=r(24608),c=r(81203);async function u(e,a){const r=(0,i.qg)(e);if(!r)throw new s.A("invalid-url","Invalid scene service url");const u={...a,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(u.sceneLayerItem??=await async function(e){const a=(await y(e)).serviceItemId;if(!a)return null;const r=new c.default({id:a,apiKey:e.apiKey}),s=await async function(e){const a=t.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(e){(0,l.QP)(e)}return null}(e);null!=s&&(r.portal=new o.A({url:s}));try{return r.load({signal:e.signal})}catch(e){return(0,l.QP)(e),null}}(u),null==u.sceneLayerItem)return d(u.sceneServerUrl.replace("/SceneServer","/FeatureServer"),u);const f=await async function({sceneLayerItem:e,signal:a}){if(!e)return null;try{const r=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!r)return null;const t=new c.default({portal:r.portal,id:r.id});return await t.load(),t}catch(e){return(0,l.QP)(e),null}}(u);if(!f?.url)throw new s.A("related-service-not-found","Could not find feature service through portal item relationship");u.featureServiceItem=f;const w=await d(f.url,u);return w.portalItem=f,w}async function y(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const r=(0,i.qg)(e);if(!r)throw new s.A("invalid-feature-service-url","Invalid feature service url");const t=r.url.path,l=a.layerId;if(null==l)return{serverUrl:t};const o=y(a),c=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,u=(c?.layers?.[0]||c?.tables?.[0])?.customParameters,d=e=>{const r={query:{f:"json",...u},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(t,r)},f=d("anonymous").catch((()=>d("no-prompt"))),[w,h]=await Promise.all([f,o]),m=h?.layers,p=w.data&&w.data.layers;if(!Array.isArray(p))throw new Error("expected layers array");if(Array.isArray(m)){for(let e=0;e<Math.min(m.length,p.length);e++)if(m[e].id===l)return{serverUrl:t,layerId:p[e].id}}else if(null!=l&&l<p.length)return{serverUrl:t,layerId:p[l].id};throw new Error("could not find matching associated sublayer")}},37315:(e,a,r)=>{r.d(a,{K:()=>d,Q:()=>s});var t=r(87092);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function s(e,a){const{loadContext:r,...n}=a||{},s=r?await r.fetchServiceMetadata(e,n):await(0,t.V)(e,n);y(s),o(s);const l={serviceJSON:s};if((s.currentVersion??0)<10.5)return l;const i=`${e}/layers`,c=r?await r.fetchServiceMetadata(i,n):await(0,t.V)(i,n);return y(c),o(c),l.layersJSON={layers:c.layers,tables:c.tables},l}function l(e){const{type:a}=e;return!!a&&n.has(a)}function i(e){return"Table"===e.type}function o(e){e.layers=e.layers?.filter(l),e.tables=e.tables?.filter(i)}function c(e){e.type||="Feature Layer"}function u(e){e.type||="Table"}function y(e){e.layers?.forEach(c),e.tables?.forEach(u)}function d(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},12254:(e,a,r)=>{r.d(a,{S:()=>t});const t={BingMapsLayer:async()=>(await r.e(1036).then(r.bind(r,61036))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(3530),r.e(5267),r.e(8348),r.e(4462),r.e(8137),r.e(9684)]).then(r.bind(r,29364))).default,CSVLayer:async()=>(await Promise.all([r.e(3530),r.e(5267),r.e(2183)]).then(r.bind(r,19823))).default,CatalogLayer:async()=>(await Promise.all([r.e(3530),r.e(3901),r.e(1761),r.e(3156),r.e(9625)]).then(r.bind(r,65328))).default,DimensionLayer:async()=>(await r.e(9386).then(r.bind(r,39386))).default,ElevationLayer:async()=>(await r.e(964).then(r.bind(r,30964))).default,FeatureLayer:async()=>(await Promise.all([r.e(3530),r.e(5267),r.e(7865)]).then(r.bind(r,5267))).default,GeoJSONLayer:async()=>(await Promise.resolve().then(r.bind(r,63854))).default,GeoRSSLayer:async()=>(await r.e(7870).then(r.bind(r,97870))).default,GroupLayer:async()=>(await r.e(3868).then(r.bind(r,63868))).default,ImageryLayer:async()=>(await Promise.all([r.e(3901),r.e(6964),r.e(8875),r.e(8779),r.e(983)]).then(r.bind(r,48496))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(6964),r.e(8875),r.e(7216),r.e(8779),r.e(2051)]).then(r.bind(r,72051))).default,IntegratedMesh3DTilesLayer:async()=>(await r.e(5209).then(r.bind(r,45209))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(8137),r.e(9900)]).then(r.bind(r,99900))).default,KMLLayer:async()=>(await r.e(8910).then(r.bind(r,78910))).default,KnowledgeGraphLayer:async()=>(await Promise.all([r.e(9104),r.e(4226),r.e(5156),r.e(3293),r.e(2560),r.e(1885),r.e(4852),r.e(7259)]).then(r.bind(r,37259))).default,LineOfSightLayer:async()=>(await r.e(2319).then(r.bind(r,62319))).default,LinkChartLayer:async()=>(await Promise.all([r.e(9104),r.e(4226),r.e(5156),r.e(3293),r.e(2560),r.e(1885),r.e(4852),r.e(252)]).then(r.bind(r,252))).default,MapImageLayer:async()=>(await Promise.all([r.e(3901),r.e(1761),r.e(6085),r.e(5494)]).then(r.bind(r,15494))).default,MapNotesLayer:async()=>(await Promise.all([r.e(3530),r.e(5267),r.e(1334)]).then(r.bind(r,10166))).default,MediaLayer:async()=>(await r.e(5823).then(r.bind(r,85823))).default,OGCFeatureLayer:async()=>(await r.e(3753).then(r.bind(r,33753))).default,OpenStreetMapLayer:async()=>(await r.e(2288).then(r.bind(r,32288))).default,OrientedImageryLayer:async()=>(await Promise.all([r.e(3530),r.e(5267),r.e(6441)]).then(r.bind(r,92817))).default,PointCloudLayer:async()=>(await r.e(1483).then(r.bind(r,51483))).default,RouteLayer:async()=>(await Promise.all([r.e(3666),r.e(1779)]).then(r.bind(r,81779))).default,SceneLayer:async()=>(await Promise.all([r.e(1059),r.e(8348),r.e(4462),r.e(8137),r.e(9464),r.e(2024)]).then(r.bind(r,2024))).default,StreamLayer:async()=>(await r.e(6034).then(r.bind(r,66034))).default,SubtypeGroupLayer:async()=>(await Promise.all([r.e(3530),r.e(3120)]).then(r.bind(r,72825))).default,TileLayer:async()=>(await Promise.all([r.e(3901),r.e(1761),r.e(6085),r.e(8375)]).then(r.bind(r,38375))).default,UnknownLayer:async()=>(await r.e(8579).then(r.bind(r,18579))).default,UnsupportedLayer:async()=>(await r.e(732).then(r.bind(r,10732))).default,VectorTileLayer:async()=>(await Promise.resolve().then(r.bind(r,89556))).default,VideoLayer:async()=>(await r.e(4557).then(r.bind(r,44557))).default,VoxelLayer:async()=>(await r.e(3656).then(r.bind(r,13656))).default,WFSLayer:async()=>(await r.e(5677).then(r.bind(r,75677))).default,WMSLayer:async()=>(await r.e(5713).then(r.bind(r,75713))).default,WMTSLayer:async()=>(await r.e(7588).then(r.bind(r,47588))).default,WebTileLayer:async()=>(await r.e(455).then(r.bind(r,80455))).default}},87092:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(18798);async function n(e,a){const{data:r}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);