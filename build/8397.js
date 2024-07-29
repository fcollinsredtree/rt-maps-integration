"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[8397,5548],{76824:(e,a,r)=>{r.d(a,{v:()=>n});var t=r(87092);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const r=this._serviceMetadatas.get(e);if(r)return r;const n=await(0,t.V)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const t=await e.fetchData();return r.set(a,t),t}async fetchCustomParameters(e,a){const r=await this.fetchItemData(e);return r&&"object"==typeof r&&(a?a(r):r.customParameters)||null}}},28342:(e,a,r)=>{r.d(a,{L:()=>o});var t=r(17242),n=r(18798),i=r(41509),s=r(68617),c=r(56735),l=r(24608),y=r(81203);async function o(e,a){const r=(0,c.qg)(e);if(!r)throw new i.A("invalid-url","Invalid scene service url");const o={...a,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(o.sceneLayerItem??=await async function(e){const a=(await u(e)).serviceItemId;if(!a)return null;const r=new y.default({id:a,apiKey:e.apiKey}),i=await async function(e){const a=t.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(e){(0,s.QP)(e)}return null}(e);null!=i&&(r.portal=new l.A({url:i}));try{return r.load({signal:e.signal})}catch(e){return(0,s.QP)(e),null}}(o),null==o.sceneLayerItem)return d(o.sceneServerUrl.replace("/SceneServer","/FeatureServer"),o);const L=await async function({sceneLayerItem:e,signal:a}){if(!e)return null;try{const r=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!r)return null;const t=new y.default({portal:r.portal,id:r.id});return await t.load(),t}catch(e){return(0,s.QP)(e),null}}(o);if(!L?.url)throw new i.A("related-service-not-found","Could not find feature service through portal item relationship");o.featureServiceItem=L;const f=await d(L.url,o);return f.portalItem=L,f}async function u(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const r=(0,c.qg)(e);if(!r)throw new i.A("invalid-feature-service-url","Invalid feature service url");const t=r.url.path,s=a.layerId;if(null==s)return{serverUrl:t};const l=u(a),y=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,o=(y?.layers?.[0]||y?.tables?.[0])?.customParameters,d=e=>{const r={query:{f:"json",...o},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(t,r)},L=d("anonymous").catch((()=>d("no-prompt"))),[f,p]=await Promise.all([L,l]),m=p?.layers,S=f.data&&f.data.layers;if(!Array.isArray(S))throw new Error("expected layers array");if(Array.isArray(m)){for(let e=0;e<Math.min(m.length,S.length);e++)if(m[e].id===s)return{serverUrl:t,layerId:S[e].id}}else if(null!=s&&s<S.length)return{serverUrl:t,layerId:S[s].id};throw new Error("could not find matching associated sublayer")}},37315:(e,a,r)=>{r.d(a,{K:()=>d,Q:()=>i});var t=r(87092);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function i(e,a){const{loadContext:r,...n}=a||{},i=r?await r.fetchServiceMetadata(e,n):await(0,t.V)(e,n);u(i),l(i);const s={serviceJSON:i};if((i.currentVersion??0)<10.5)return s;const c=`${e}/layers`,y=r?await r.fetchServiceMetadata(c,n):await(0,t.V)(c,n);return u(y),l(y),s.layersJSON={layers:y.layers,tables:y.tables},s}function s(e){const{type:a}=e;return!!a&&n.has(a)}function c(e){return"Table"===e.type}function l(e){e.layers=e.layers?.filter(s),e.tables=e.tables?.filter(c)}function y(e){e.type||="Feature Layer"}function o(e){e.type||="Table"}function u(e){e.layers?.forEach(y),e.tables?.forEach(o)}function d(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},38397:(e,a,r)=>{r.d(a,{N:()=>T,populateOperationalLayers:()=>o});var t=r(116),n=(r(82555),r(76824)),i=r(12254),s=r(81203);function c(e,a){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===a}var l=r(65548),y=r(44152);async function o(e,a,r){if(!a)return;const t=a.map((e=>async function(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&("GroupLayer"===a.layerType?await T(t,a,r):v(a)?function(e,a,r){a.itemId&&(e.portalItem=new s.default({id:a.itemId,portal:r?.portal}),e.when((()=>{const t=t=>{const n=t.layerId;G(t,e,a,n,r);const i=a.featureCollection?.layers?.[n];i&&t.read(i,r)};e.layers?.forEach(t),e.tables?.forEach(t)})))}(t,a,r.context):b(a)&&await async function(e,a,r){const t=i.S.FeatureLayer,n=await t(),s=a.featureCollection,c=s?.showLegend,l=s?.layers?.map(((t,i)=>{const s=new n;s.read(t,r);const l={...r,ignoreDefaults:!0};return G(s,e,a,i,l),null!=c&&s.read({showLegend:c},l),s}));e.layers.addMany(l??[])}(t,a,r.context)),await(0,y.L)(t,r.context),t}(await I(e,a),e,a)}(e,r))),n=await Promise.allSettled(t);for(const a of n)"rejected"===a.status||a.value&&e.add(a.value)}const u={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",Voxel:"VoxelLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},L={ArcGISFeatureLayer:"FeatureLayer"},f={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},p={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},m={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},w={...p,LinkChartLayer:"LinkChartLayer"},h={...m},g={...S};async function I(e,a){const r=a.context,t=M(r);let y=e.layerType||e.type;!y&&a?.defaultLayerType&&(y=a.defaultLayerType);const o=t[y];let u=o?i.S[o]:i.S.UnknownLayer;if(v(e)){const a=r?.portal;if(e.itemId){const r=new s.default({id:e.itemId,portal:a});await r.load();const t=(await(0,l.n)(r,new n.v)).className||"UnknownLayer";u=i.S[t]}}else"ArcGISFeatureLayer"===y?function(e){return c(e,"notes")}(e)||function(e){return c(e,"markup")}(e)?u=i.S.MapNotesLayer:function(e){return c(e,"route")}(e)?u=i.S.RouteLayer:b(e)&&(u=i.S.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?u=i.S.WMTSLayer:"WFS"===y&&"2.0.0"!==e.wfsInfo?.version&&(u=i.S.UnsupportedLayer);return u()}function b(e){return"ArcGISFeatureLayer"===e.layerType&&!v(e)&&(e.featureCollection?.layers?.length??0)>1}function v(e){return"Feature Collection"===e.type}function M(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=f;break;case"ground":a=d;break;case"tables":a=L;break;default:a=u}break;case"link-chart":switch(e.layerContainerType){case"basemap":a=g;break;case"tables":a=h;break;default:a=w}break;default:switch(e.layerContainerType){case"basemap":a=S;break;case"tables":a=m;break;default:a=p}}return a}async function T(e,a,r){const n=new t.A,i=o(n,Array.isArray(a.layers)?a.layers:[],r);try{try{if(await i,"group"===e.type)return e.layers.addMany(n),e}catch(a){e.destroy();for(const e of n)e.destroy();throw a}}catch(e){throw e}}function G(e,a,r,t,n){e.read({id:`${a.id}-sublayer-${t}`,visibility:r.visibleLayers?.includes(t)??!0},n)}},12254:(e,a,r)=>{r.d(a,{S:()=>t});const t={BingMapsLayer:async()=>(await r.e(1036).then(r.bind(r,61036))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(3530),r.e(5267),r.e(8348),r.e(4462),r.e(8137),r.e(9684)]).then(r.bind(r,29364))).default,CSVLayer:async()=>(await Promise.all([r.e(3530),r.e(5267),r.e(2183)]).then(r.bind(r,19823))).default,CatalogLayer:async()=>(await Promise.all([r.e(3530),r.e(3901),r.e(1761),r.e(3156),r.e(9625)]).then(r.bind(r,65328))).default,DimensionLayer:async()=>(await r.e(9386).then(r.bind(r,39386))).default,ElevationLayer:async()=>(await r.e(964).then(r.bind(r,30964))).default,FeatureLayer:async()=>(await Promise.all([r.e(3530),r.e(5267),r.e(7865)]).then(r.bind(r,5267))).default,GeoJSONLayer:async()=>(await Promise.resolve().then(r.bind(r,63854))).default,GeoRSSLayer:async()=>(await r.e(7870).then(r.bind(r,97870))).default,GroupLayer:async()=>(await r.e(3868).then(r.bind(r,63868))).default,ImageryLayer:async()=>(await Promise.all([r.e(3901),r.e(6964),r.e(8875),r.e(8779),r.e(983)]).then(r.bind(r,48496))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(6964),r.e(8875),r.e(7216),r.e(8779),r.e(2051)]).then(r.bind(r,72051))).default,IntegratedMesh3DTilesLayer:async()=>(await r.e(5209).then(r.bind(r,45209))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(8137),r.e(9900)]).then(r.bind(r,99900))).default,KMLLayer:async()=>(await r.e(8910).then(r.bind(r,78910))).default,KnowledgeGraphLayer:async()=>(await Promise.all([r.e(9104),r.e(4226),r.e(5156),r.e(3293),r.e(2560),r.e(1885),r.e(4852),r.e(7259)]).then(r.bind(r,37259))).default,LineOfSightLayer:async()=>(await r.e(2319).then(r.bind(r,62319))).default,LinkChartLayer:async()=>(await Promise.all([r.e(9104),r.e(4226),r.e(5156),r.e(3293),r.e(2560),r.e(1885),r.e(4852),r.e(252)]).then(r.bind(r,252))).default,MapImageLayer:async()=>(await Promise.all([r.e(3901),r.e(1761),r.e(6085),r.e(5494)]).then(r.bind(r,15494))).default,MapNotesLayer:async()=>(await Promise.all([r.e(3530),r.e(5267),r.e(1334)]).then(r.bind(r,10166))).default,MediaLayer:async()=>(await r.e(5823).then(r.bind(r,85823))).default,OGCFeatureLayer:async()=>(await r.e(3753).then(r.bind(r,33753))).default,OpenStreetMapLayer:async()=>(await r.e(2288).then(r.bind(r,32288))).default,OrientedImageryLayer:async()=>(await Promise.all([r.e(3530),r.e(5267),r.e(6441)]).then(r.bind(r,92817))).default,PointCloudLayer:async()=>(await r.e(1483).then(r.bind(r,51483))).default,RouteLayer:async()=>(await Promise.all([r.e(3666),r.e(1779)]).then(r.bind(r,81779))).default,SceneLayer:async()=>(await Promise.all([r.e(1059),r.e(8348),r.e(4462),r.e(8137),r.e(9464),r.e(2024)]).then(r.bind(r,2024))).default,StreamLayer:async()=>(await r.e(6034).then(r.bind(r,66034))).default,SubtypeGroupLayer:async()=>(await Promise.all([r.e(3530),r.e(3120)]).then(r.bind(r,72825))).default,TileLayer:async()=>(await Promise.all([r.e(3901),r.e(1761),r.e(6085),r.e(8375)]).then(r.bind(r,38375))).default,UnknownLayer:async()=>(await r.e(8579).then(r.bind(r,18579))).default,UnsupportedLayer:async()=>(await r.e(732).then(r.bind(r,10732))).default,VectorTileLayer:async()=>(await Promise.resolve().then(r.bind(r,89556))).default,VideoLayer:async()=>(await r.e(4557).then(r.bind(r,44557))).default,VoxelLayer:async()=>(await r.e(3656).then(r.bind(r,13656))).default,WFSLayer:async()=>(await r.e(5677).then(r.bind(r,75677))).default,WMSLayer:async()=>(await r.e(5713).then(r.bind(r,75713))).default,WMTSLayer:async()=>(await r.e(7588).then(r.bind(r,47588))).default,WebTileLayer:async()=>(await r.e(455).then(r.bind(r,80455))).default}},49855:(e,a,r)=>{r.d(a,{Ju:()=>y,K8:()=>d,XH:()=>o,_r:()=>i,bO:()=>s,iK:()=>u,nu:()=>L,pJ:()=>c,rc:()=>l});var t=r(28342),n=r(37315);function i(e){const a={id:e.id,name:e.name},r=(0,n.K)(e.type);return"FeatureLayer"!==r&&(a.layerType=r),a}async function s(e,a,r){if(null==e?.layers||null==e?.tables){const t=await r.fetchServiceMetadata(a,{customParameters:c(e)?.customParameters});(e=e||{}).layers=e.layers||t?.layers?.map(i),e.tables=e.tables||t?.tables?.map(i)}return e}function c(e){if(!e)return null;const{layers:a,tables:r}=e;return a?.length?a[0]:r?.length?r[0]:null}function l(e,a){return null==a?null:[...e.layers||[],...e.tables||[]].find((e=>e.id===a))}function y(e,a){return[...e.layers||[],...e.tables||[]].filter((({layerType:e})=>e?e===a:"ArcGISFeatureLayer"===a))}function o(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function u(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function d(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function L(e,a,r){if(!e?.url)return a??{};if(a??={},!a.layers){const t=await r.fetchServiceMetadata(e.url);a.layers=t.layers?.map(i)}const{serverUrl:n,portalItem:s}=await(0,t.L)(e.url,{sceneLayerItem:e,customParameters:c(a)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==n)return a.tables=[],a;if(!a.tables&&s){const e=await s.fetchData();if(e?.tables)a.tables=e.tables.map(i);else{const t=await r.fetchServiceMetadata(n,{customParameters:c(e)?.customParameters});a.tables=t?.tables?.map(i)}}if(a.tables)for(const e of a.tables)e.url=`${n}/${e.id}`;return a}},65548:(e,a,r)=>{r.d(a,{fromItem:()=>d,n:()=>L});var t=r(41509),n=r(28342),i=r(37315),s=r(76824),c=r(66042),l=r(12254),y=r(81203),o=r(49855),u=r(17504);async function d(e){let{portalItem:a}=e;!a||a instanceof y.default||(a=new y.default(a));const r=await async function(e){await e.load();const a=new s.v;return async function(e){const a=e.className,r=l.S[a];return{constructor:await r(),properties:e.properties}}(await L(e,a))}(a);return new(0,r.constructor)({portalItem:a,...r.properties})}async function L(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,u.Y)(e,"Map Notes"),r=(0,u.Y)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,u.Y)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,o.XH)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const r=await f(e,a);if("object"==typeof r){const{sourceJSON:e,className:a}=r,t={sourceJSON:e};return null!=r.id&&(t.layerId=r.id),{className:a||"FeatureLayer",properties:t}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await a.fetchItemData(e),n=t?.layerType;if("ArcGISTiledImageServiceLayer"===n)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===n)return{className:"ImageryLayer"};const i=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),s=i.cacheType?.toLowerCase(),c=i.capabilities?.toLowerCase().includes("tilesonly");return"map"===s||c?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Knowledge Graph Layer":return{className:"KnowledgeGraphLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:r}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return r}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const r=await f(e,a,(async()=>{try{if(!e.url)return[];const{serverUrl:r}=await(0,n.L)(e.url,{sceneLayerItem:e}),t=await a.fetchServiceMetadata(r);return t?.tables??[]}catch{return[]}}));if("object"==typeof r){const t={};let n;if(null!=r.id?(t.layerId=r.id,n=`${e.url}/layers/${r.id}`):n=e.url,e.typeKeywords?.length)for(const a of Object.keys(c.XX))if(e.typeKeywords.includes(a))return{className:c.XX[a]};const i=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,(e=>(0,o.pJ)(e)?.customParameters))});return{className:c.XX[i?.layerType]||"SceneLayer",properties:t}}if(!1===r){const r=await a.fetchServiceMetadata(e.url);if("Voxel"===r?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new t.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function f(e,a,r){const{url:t,type:n}=e,s="Feature Service"===n;if(!t)return{};if(/\/\d+$/.test(t)){if(s){const r=await a.fetchServiceMetadata(t,{customParameters:await a.fetchCustomParameters(e,(e=>(0,o.pJ)(e)?.customParameters))});return{id:r.id,className:(0,i.K)(r.type),sourceJSON:r}}return{}}await e.load();let c=await a.fetchItemData(e);if(s){const e=await(0,o.bO)(c,t,a),r=p(e);if("object"==typeof r){const a=(0,o.rc)(e,r.id);r.className=(0,o.K8)(a?.layerType)}return r}if("Scene Service"===n&&(c=await(0,o.nu)(e,c,a)),(0,o.XH)(c)>0)return p(c);const l=await a.fetchServiceMetadata(t);return r&&(l.tables=await r()),p(l)}function p(e){return 1===(0,o.XH)(e)&&{id:(0,o.pJ)(e)?.id}}},44152:(e,a,r)=>{r.d(a,{L:()=>s});var t=r(57390),n=r(68617),i=r(17607);async function s(e,a,r){const s=e&&e.getAtOrigin&&e.getAtOrigin("renderer",a.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const c=await(0,t.Ke)(s.populateFromStyle());if((0,n.Te)(r),!1===c.ok){const r=c.error;a?.messages&&a.messages.push(new i.A("renderer:style-reference",`Failed to create unique value renderer from style reference: ${r.message}`,{error:r,context:a})),e.clear("renderer",a?.origin)}}}},87092:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(18798);async function n(e,a){const{data:r}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);