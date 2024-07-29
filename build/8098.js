"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[8098],{8098:(n,e,t)=>{t.r(e),t.d(e,{registerFunctions:()=>p});var r=t(40054),i=t(40259),a=t(36305),s=t(43561),u=t(27515),l=t(12294),c=t(83446);function o(n){return n instanceof l.A}function f(n,e,t,f){return f(n,e,(async(f,p,d)=>{if(d.length<2)throw new r.D$(n,r.TX.WrongNumberOfParameters,e);if(null===(d=(0,a.I)(d))[0]&&null===d[1])return!1;if((0,a.u)(d[0])){if(d[1]instanceof l.A)return new s.A({parentfeatureset:d[0],relation:t,relationGeom:d[1]});if(null===d[1])return new u.A({parentfeatureset:d[0]});throw new r.D$(n,r.TX.InvalidParameter,e)}if(o(d[0])){if(o(d[1])){switch(t){case"esriSpatialRelEnvelopeIntersects":return(0,c.intersects)((0,i.Yc)(d[0]),(0,i.Yc)(d[1]));case"esriSpatialRelIntersects":return(0,c.intersects)(d[0],d[1]);case"esriSpatialRelContains":return(0,c.contains)(d[0],d[1]);case"esriSpatialRelOverlaps":return(0,c.overlaps)(d[0],d[1]);case"esriSpatialRelWithin":return(0,c.within)(d[0],d[1]);case"esriSpatialRelTouches":return(0,c.touches)(d[0],d[1]);case"esriSpatialRelCrosses":return(0,c.crosses)(d[0],d[1])}throw new r.D$(n,r.TX.InvalidParameter,e)}if((0,a.u)(d[1]))return new s.A({parentfeatureset:d[1],relation:t,relationGeom:d[0]});if(null===d[1])return!1;throw new r.D$(n,r.TX.InvalidParameter,e)}if(null===d[0]){if((0,a.u)(d[1]))return new u.A({parentfeatureset:d[1]});if(d[1]instanceof l.A||null===d[1])return!1}throw new r.D$(n,r.TX.InvalidParameter,e)}))}function p(n){"async"===n.mode&&(n.functions.intersects=function(e,t){return f(e,t,"esriSpatialRelIntersects",n.standardFunctionAsync)},n.functions.envelopeintersects=function(e,t){return f(e,t,"esriSpatialRelEnvelopeIntersects",n.standardFunctionAsync)},n.signatures.push({name:"envelopeintersects",min:2,max:2}),n.functions.contains=function(e,t){return f(e,t,"esriSpatialRelContains",n.standardFunctionAsync)},n.functions.overlaps=function(e,t){return f(e,t,"esriSpatialRelOverlaps",n.standardFunctionAsync)},n.functions.within=function(e,t){return f(e,t,"esriSpatialRelWithin",n.standardFunctionAsync)},n.functions.touches=function(e,t){return f(e,t,"esriSpatialRelTouches",n.standardFunctionAsync)},n.functions.crosses=function(e,t){return f(e,t,"esriSpatialRelCrosses",n.standardFunctionAsync)},n.functions.relate=function(e,t){return n.standardFunctionAsync(e,t,(async(n,i,s)=>{if(s=(0,a.I)(s),(0,a.H)(s,3,3,e,t),o(s[0])&&o(s[1]))return(0,c.relate)(s[0],s[1],(0,a.j)(s[2]));if(s[0]instanceof l.A&&null===s[1])return!1;if(s[1]instanceof l.A&&null===s[0])return!1;if((0,a.u)(s[0])&&null===s[1])return new u.A({parentfeatureset:s[0]});if((0,a.u)(s[1])&&null===s[0])return new u.A({parentfeatureset:s[1]});if((0,a.u)(s[0])&&s[1]instanceof l.A)return s[0].relate(s[1],(0,a.j)(s[2]));if((0,a.u)(s[1])&&s[0]instanceof l.A)return s[1].relate(s[0],(0,a.j)(s[2]));if(null===s[0]&&null===s[1])return!1;throw new r.D$(e,r.TX.InvalidParameter,t)}))})}}}]);