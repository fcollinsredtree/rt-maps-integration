"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[9041],{59041:(e,i,n)=>{n.r(i),n.d(i,{default:()=>l});var t=n(71566),a=n(82555),s=n(45423),r=(n(16431),n(1724),n(41509),n(37755)),d=n(71495);let u=class extends d.default{initialize(){this.addHandles([(0,s.wB)((()=>this.view.scale),(()=>this._update()),s.Vh)],"constructor")}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),i=this._commandsQueue.updateTracking.updating,n=null!=this._updatingRequiredFieldsPromise,t=!this._workerProxy,s=this.dataUpdating,r=e&&(i||n||t||s);return(0,a.A)("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${r}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${i}\n  -> updatingRequiredFields ${n}\n  -> updatingProxy ${t}\n  -> updatingPipeline ${s}\n`),r}};u=(0,t._)([(0,r.$)("esri.views.2d.layers.SubtypeGroupLayerView2D")],u);const l=u}}]);