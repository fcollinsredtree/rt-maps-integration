"use strict";(globalThis.webpackChunkredtree_maps_integration=globalThis.webpackChunkredtree_maps_integration||[]).push([[8568],{48568:(e,t,n)=>{n.r(t),n.d(t,{CalciteListItemGroup:()=>s,defineCustomElement:()=>d});var o=n(40104),i=n(3716),a=n(92425);const c=(0,o.w$)(class extends o.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalListItemGroupDefaultSlotChange=(0,o.lh)(this,"calciteInternalListItemGroupDefaultSlotChange",6),this.handleDefaultSlotChange=()=>{this.calciteInternalListItemGroupDefaultSlotChange.emit()},this.disabled=!1,this.filterHidden=!1,this.heading=void 0}connectedCallback(){(0,i.c)(this)}componentDidRender(){(0,i.u)(this)}disconnectedCallback(){(0,i.d)(this)}render(){const{disabled:e,heading:t}=this;return(0,o.h)(o.xr,{key:"49d0c6f86c120af1e07940706ae7209d9bfe8505"},(0,o.h)(i.I,{key:"ad13451f3d785e38f18ef5e70863da34e6156a92",disabled:e},(0,o.h)("tr",{key:"05c409b57cfb750738bda992941ef3fa2af55e55",class:"container"},(0,o.h)("td",{key:"b55ddbc0165d0725a2ff768787956ce8a6c684ec",class:"heading",colSpan:a.M},t)),(0,o.h)("slot",{key:"9eed41b10f61dc047ded58ecb0ca5b96beac2cca",onSlotchange:this.handleDefaultSlotChange})))}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;padding:0.75rem;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.heading{padding:0px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-list-item-group",{disabled:[516],filterHidden:[516,"filter-hidden"],heading:[513]}]);function r(){"undefined"!=typeof customElements&&["calcite-list-item-group"].forEach((e=>{"calcite-list-item-group"===e&&(customElements.get(e)||customElements.define(e,c))}))}r();const s=c,d=r},3716:(e,t,n)=>{n.d(t,{I:()=>C,c:()=>g,d:()=>m,u:()=>u});var o=n(40104);const i=/firefox/i.test(function(){if(!o.L2.isBrowser)return"";const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}()),a=i?new WeakMap:null;function c(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function r(e){const t=e.target;if(i&&!a.get(t))return;const{disabled:n}=t;n&&e.preventDefault()}const s=["mousedown","mouseup","click"];function d(e){const t=e.target;i&&!a.get(t)||t.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const l={capture:!0};function u(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void h(e);p(e),e.el.removeAttribute("aria-disabled")}function h(e){if(e.el.click=c,i){const t=function(e){return e.el.parentElement||e.el}(e),n=a.get(e.el);return n!==t&&(b(n),a.set(e.el,t)),void f(a.get(e.el))}f(e.el)}function f(e){e&&(e.addEventListener("pointerdown",r,l),s.forEach((t=>e.addEventListener(t,d,l))))}function p(e){if(delete e.el.click,i)return b(a.get(e.el)),void a.delete(e.el);b(e.el)}function b(e){e&&(e.removeEventListener("pointerdown",r,l),s.forEach((t=>e.removeEventListener(t,d,l))))}function g(e){e.disabled&&i&&h(e)}function m(e){i&&p(e)}const v={container:"interaction-container"};function C({disabled:e},t){return(0,o.h)("div",{class:v.container,inert:e},...t)}},92425:(e,t,n)=>{n.d(t,{C:()=>o,I:()=>c,M:()=>a,S:()=>i,a:()=>r});const o={wrapper:"wrapper",wrapperBordered:"wrapper--bordered",container:"container",containerHover:"container--hover",containerBorder:"container--border",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerOpen:"nested-container--open",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",contentBottom:"content-bottom",actionsEnd:"actions-end",selectionContainer:"selection-container",selectionContainerSingle:"selection-container--single",openContainer:"open-container",dragContainer:"drag-container",close:"close"},i={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentBottom:"content-bottom",contentEnd:"content-end",actionsEnd:"actions-end"},a=0,c={selectedMultiple:"check-square-f",selectedSingle:"bullet-point-large",unselectedMultiple:"square",unselectedSingle:"bullet-point-large",closedLTR:"chevron-right",closedRTL:"chevron-left",open:"chevron-down",blank:"blank",close:"x"},r="data-test-active"}}]);