"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[3868],{63868:(e,t,i)=>{i.r(t),i.d(t,{default:()=>C});var r=i(71566),s=i(99698),o=i(36328),a=i(16431),l=i(87216),n=i(68617),d=i(45423),p=i(85464),y=(i(82555),i(1724),i(82619)),h=i(89666),u=i(37755),c=i(35298),b=i(28523),v=i(88999),m=i(18453),f=i(70162),_=i(36414),w=i(98265),g=i(12254),S=i(81203),A=i(93278),M=i(10068),I=i(2161),L=i(10978),O=i(20742),V=i(16442),E=i(21030);let P=class extends((0,m.dM)((0,w.j)((0,f.q)((0,_.A)((0,I.l)((0,M.Q)((0,l.P)(v.A)))))))){constructor(e){super(e),this.allLayers=new s.A({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=(0,A.Z)(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=(0,n.sg)((async(e,t,r)=>{const{save:s,saveAs:o}=await i.e(887).then(i.bind(i,80887));switch(e){case O.X.SAVE:return s(this,t);case O.X.SAVE_AS:return o(this,r,t)}}))}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([(0,d.wB)((()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&L.X in e}),(e=>{const t="prevent-adding-tables";this.removeHandles(t),e&&(this.tables.removeAll(),this.addHandles((0,d.on)((()=>this.tables),"before-add",(e=>{e.preventDefault(),a.A.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")})),t))}),d.pc),(0,d.wB)((()=>this.visible),this._onVisibilityChange.bind(this),d.OH)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===b.Gr.USER}_writeLayers(e,t,i,r){const s=[];if(!e)return s;e.forEach((e=>{const t=(0,E.CJ)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r);t?.layerType&&s.push(t)})),t.layers=s}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,t,i){const{itemId:r,layerType:s}=t;if("GroupLayer"===s&&r)return new S.default({id:r,portal:i?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}set visibilityMode(e){const t=this._get("visibilityMode")!==e;this._set("visibilityMode",e),t&&this._enforceVisibility(e,this.visible)}async beforeSave(){return(0,V.d)(this)}load(e){const t=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:g.S},e).catch((e=>{if((0,n.QP)(e),this.sourceIsPortalItem)throw e}));return this.addResolvingPromise(t),Promise.resolve(this)}async loadAll(){return(0,o.g)(this,(e=>{e(this.layers,this.tables)}))}async save(e){return this._debouncedSaveOperations(O.X.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(O.X.SAVE_AS,t,e)}layerAdded(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles((0,d.wB)((()=>e.visible),(t=>this._onChildVisibilityChange(e,t)),d.OH),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach((t=>{t!==e&&(t.visible=!1)}))}_enforceVisibility(e,t){if(!(0,y.oY)(this).initialized)return;const i=this.layers;let r=i.find((e=>e.visible));switch(e){case"exclusive":i.length&&!r&&(r=i.at(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":i.forEach((e=>{e.visible=t}))}}_onVisibilityChange(e){"inherited"===this.visibilityMode&&this.layers.forEach((t=>{t.visible=e}))}_onChildVisibilityChange(e,t){switch(this.visibilityMode){case"exclusive":t?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((e=>e.visible))}};(0,r._)([(0,p.MZ)({readOnly:!0,dependsOn:[]})],P.prototype,"allLayers",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],P.prototype,"allTables",void 0),(0,r._)([(0,p.MZ)({json:{read:!0,write:!0}})],P.prototype,"blendMode",void 0),(0,r._)([(0,p.MZ)()],P.prototype,"fullExtent",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],P.prototype,"sourceIsPortalItem",null),(0,r._)([(0,p.MZ)({json:{read:!1,write:{ignoreOrigin:!0}}})],P.prototype,"layers",void 0),(0,r._)([(0,c.K)("layers")],P.prototype,"_writeLayers",null),(0,r._)([(0,p.MZ)({type:["GroupLayer"]})],P.prototype,"operationalLayerType",void 0),(0,r._)([(0,p.MZ)({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,t,i){return{enabled:"Group Layer"===e?.type&&i?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],P.prototype,"portalItem",null),(0,r._)([(0,h.w)("web-map","portalItem",["itemId"])],P.prototype,"readPortalItem",null),(0,r._)([(0,c.K)("web-map","portalItem",{itemId:{type:String}})],P.prototype,"writePortalItem",null),(0,r._)([(0,p.MZ)()],P.prototype,"spatialReference",void 0),(0,r._)([(0,p.MZ)({json:{read:!1},readOnly:!0,value:"group"})],P.prototype,"type",void 0),(0,r._)([(0,p.MZ)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,t,i)=>{"inherited"!==e&&(t[i]=e)}}}}})],P.prototype,"visibilityMode",null),P=(0,r._)([(0,u.$)("esri.layers.GroupLayer")],P);const C=P},10978:(e,t,i)=>{i.d(t,{X:()=>r});const r=Symbol("WebScene")},20742:(e,t,i)=>{var r;i.d(t,{X:()=>r}),function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(r||(r={}))},16442:(e,t,i)=>{i.d(t,{c:()=>a,d:()=>s});var r=i(41509);async function s(e){const t=[];for(const i of e.allLayers)if("beforeSave"in i&&"function"==typeof i.beforeSave){const e=i.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const o=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function a(e,t,i){let s=(e.messages??[]).filter((({type:e})=>"error"===e)).map((({name:e,message:t,details:i})=>new r.A(e,t,i)));if(e.blockedRelativeUrls&&(s=s.concat(e.blockedRelativeUrls.map((e=>new r.A("url:unsupported",`Relative url '${e}' is not supported`))))),i){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:r}=i;e&&(s=s.filter((({name:e})=>!(o.has(e)||t.includes(e))))),r&&(s=s.filter((e=>"web-document-write:property-required"!==e.name)))}if(s.length>0)throw new r.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:s})}}}]);