"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[1113],{37801:(e,t,i)=>{i.d(t,{A:()=>c});var s=i(82555),r=i(93540),a=i(50262),l=i(39575),n=i(48248);const h=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class c extends a.A{constructor(e){super(),this._tileInfoView=e}renderChildren(e){this.sortChildren(h),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[l.A],drawPhase:r.S5.DEBUG|r.S5.MAP|r.S5.HIGHLIGHT|r.S5.LABEL,target:()=>this.getStencilTarget()})),(0,s.A)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[n.A],drawPhase:r.S5.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const e of this.children)e.stencilRef=t++}}},33921:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var s=i(71566),r=i(16431),a=i(68617),l=i(85464),n=(i(82555),i(1724),i(37755)),h=i(57362),c=i(66866),o=i(30957),u=i(44024),d=i(52518),f=i(48542),p=i(5090),y=i(67769),_=i(21301),w=i(24504);const g=new Set([102113,102100,3857,3785,900913]),I=[0,0];let S=class extends((0,w.A)((0,c.Y)((0,o.e)(_.A)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e=this.tileMatrixSet?.tileInfo;e&&(this._tileInfoView=new d.A(e),this._fetchQueue=new p.A({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new y.A({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add((()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet]),(()=>this.doRefresh()))),super.attach())}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets?.some((t=>(0,h.aI)(t.tileInfo?.spatialReference,e)))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(I,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:r=0}=t;if(!i)return this._fetchImage(e,s);const l=new f.A(0,0,0,0);let n;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:s}),n=await this._fetchImage(l,s)}catch(i){if((0,a.zf)(i))throw i;if(r<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new f.A(i),a=await this.fetchTile(s,{...t,resamplingLevel:r+1});return(0,u.t)(this._tileInfoView,a,s,e)}}throw i}return(0,u.t)(this._tileInfoView,n,l,e)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(e){(0,a.zf)(e)||r.A.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>(0,h.aI)(e.tileInfo?.spatialReference,t)));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>g.has(e.tileInfo?.spatialReference.wkid??-1)))),i}};(0,s._)([(0,l.MZ)({readOnly:!0})],S.prototype,"tileMatrixSet",null),S=(0,s._)([(0,n.$)("esri.views.2d.layers.WMTSLayerView2D")],S);const m=S}}]);