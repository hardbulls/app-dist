import{C as M,t as g,S as v,G as ve,f as Et,D as St,L as we,g as mi,a as ke,E as fi}from"./assets/EventRepository-p3YaR6oQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=globalThis,se=ht.ShadowRoot&&(ht.ShadyCSS===void 0||ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ae=Symbol(),$e=new WeakMap;let Re=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(se&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=$e.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&$e.set(e,t))}return t}toString(){return this.cssText}};const yi=s=>new Re(typeof s=="string"?s:s+"",void 0,ae),xi=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,a,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+s[o+1],s[0]);return new Re(e,s,ae)},vi=(s,t)=>{if(se)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),a=ht.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=e.cssText,s.appendChild(i)}},Ae=se?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return yi(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wi,defineProperty:ki,getOwnPropertyDescriptor:$i,getOwnPropertyNames:Ai,getOwnPropertySymbols:Ei,getPrototypeOf:Si}=Object,xt=globalThis,Ee=xt.trustedTypes,Ci=Ee?Ee.emptyScript:"",Ti=xt.reactiveElementPolyfillSupport,st=(s,t)=>s,gt={toAttribute(s,t){switch(t){case Boolean:s=s?Ci:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},oe=(s,t)=>!wi(s,t),Se={attribute:!0,type:String,converter:gt,reflect:!1,hasChanged:oe};Symbol.metadata??=Symbol("metadata"),xt.litPropertyMetadata??=new WeakMap;let Y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Se){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(t,i,e);a!==void 0&&ki(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){const{get:a,set:o}=$i(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return a?.call(this)},set(n){const r=a?.call(this);o.call(this,n),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Se}static _$Ei(){if(this.hasOwnProperty(st("elementProperties")))return;const t=Si(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(st("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(st("properties"))){const e=this.properties,i=[...Ai(e),...Ei(e)];for(const a of i)this.createProperty(a,e[a])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,a]of e)this.elementProperties.set(i,a)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const a=this._$Eu(e,i);a!==void 0&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const a of i)e.unshift(Ae(a))}else t!==void 0&&e.push(Ae(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vi(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(a!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:gt).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,a=i._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const o=i.getPropertyOptions(a),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:gt;this._$Em=a,this[a]=n.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??oe)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,o]of i)o.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}};Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[st("elementProperties")]=new Map,Y[st("finalized")]=new Map,Ti?.({ReactiveElement:Y}),(xt.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=globalThis,bt=ne.trustedTypes,Ce=bt?bt.createPolicy("lit-html",{createHTML:s=>s}):void 0,Oe="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,Ne="?"+D,zi=`<${Ne}>`,G=document,ot=()=>G.createComment(""),nt=s=>s===null||typeof s!="object"&&typeof s!="function",re=Array.isArray,Li=s=>re(s)||typeof s?.[Symbol.iterator]=="function",wt=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Te=/-->/g,ze=/>/g,O=RegExp(`>|${wt}(?:([^\\s"'>=/]+)(${wt}*=${wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Le=/'/g,_e=/"/g,qe=/^(?:script|style|textarea|title)$/i,_i=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),Mi=_i(1),V=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Me=new WeakMap,U=G.createTreeWalker(G,129);function Be(s,t){if(!re(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ce!==void 0?Ce.createHTML(t):t}const Hi=(s,t)=>{const e=s.length-1,i=[];let a,o=t===2?"<svg>":t===3?"<math>":"",n=Q;for(let r=0;r<e;r++){const d=s[r];let m,p,c=-1,w=0;for(;w<d.length&&(n.lastIndex=w,p=n.exec(d),p!==null);)w=n.lastIndex,n===Q?p[1]==="!--"?n=Te:p[1]!==void 0?n=ze:p[2]!==void 0?(qe.test(p[2])&&(a=RegExp("</"+p[2],"g")),n=O):p[3]!==void 0&&(n=O):n===O?p[0]===">"?(n=a??Q,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,m=p[1],n=p[3]===void 0?O:p[3]==='"'?_e:Le):n===_e||n===Le?n=O:n===Te||n===ze?n=Q:(n=O,a=void 0);const $=n===O&&s[r+1].startsWith("/>")?" ":"";o+=n===Q?d+zi:c>=0?(i.push(m),d.slice(0,c)+Oe+d.slice(c)+D+$):d+D+(c===-2?r:$)}return[Be(s,o+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};let Ct=class Ue{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let o=0,n=0;const r=t.length-1,d=this.parts,[m,p]=Hi(t,e);if(this.el=Ue.createElement(m,i),U.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(a=U.nextNode())!==null&&d.length<r;){if(a.nodeType===1){if(a.hasAttributes())for(const c of a.getAttributeNames())if(c.endsWith(Oe)){const w=p[n++],$=a.getAttribute(c).split(D),z=/([.?@])?(.*)/.exec(w);d.push({type:1,index:o,name:z[2],strings:$,ctor:z[1]==="."?ji:z[1]==="?"?Di:z[1]==="@"?Ii:vt}),a.removeAttribute(c)}else c.startsWith(D)&&(d.push({type:6,index:o}),a.removeAttribute(c));if(qe.test(a.tagName)){const c=a.textContent.split(D),w=c.length-1;if(w>0){a.textContent=bt?bt.emptyScript:"";for(let $=0;$<w;$++)a.append(c[$],ot()),U.nextNode(),d.push({type:2,index:++o});a.append(c[w],ot())}}}else if(a.nodeType===8)if(a.data===Ne)d.push({type:2,index:o});else{let c=-1;for(;(c=a.data.indexOf(D,c+1))!==-1;)d.push({type:7,index:o}),c+=D.length-1}o++}}static createElement(t,e){const i=G.createElement("template");return i.innerHTML=t,i}};function X(s,t,e=s,i){if(t===V)return t;let a=i!==void 0?e._$Co?.[i]:e._$Cl;const o=nt(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),o===void 0?a=void 0:(a=new o(s),a._$AT(s,e,i)),i!==void 0?(e._$Co??=[])[i]=a:e._$Cl=a),a!==void 0&&(t=X(s,a._$AS(s,t.values),a,i)),t}let Pi=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,a=(t?.creationScope??G).importNode(e,!0);U.currentNode=a;let o=U.nextNode(),n=0,r=0,d=i[0];for(;d!==void 0;){if(n===d.index){let m;d.type===2?m=new le(o,o.nextSibling,this,t):d.type===1?m=new d.ctor(o,d.name,d.strings,this,t):d.type===6&&(m=new Ri(o,this,t)),this._$AV.push(m),d=i[++r]}n!==d?.index&&(o=U.nextNode(),n++)}return U.currentNode=G,a}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},le=class Ge{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,a){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),nt(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==V&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Li(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&nt(this._$AH)?this._$AA.nextSibling.data=t:this.T(G.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Ct.createElement(Be(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(e);else{const o=new Pi(a,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=Me.get(t.strings);return e===void 0&&Me.set(t.strings,e=new Ct(t)),e}k(t){re(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,a=0;for(const o of t)a===e.length?e.push(i=new Ge(this.O(ot()),this.O(ot()),this,this.options)):i=e[a],i._$AI(o),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},vt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,a,o){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}_$AI(t,e=this,i,a){const o=this.strings;let n=!1;if(o===void 0)t=X(this,t,e,0),n=!nt(t)||t!==this._$AH&&t!==V,n&&(this._$AH=t);else{const r=t;let d,m;for(t=o[0],d=0;d<o.length-1;d++)m=X(this,r[i+d],e,d),m===V&&(m=this._$AH[d]),n||=!nt(m)||m!==this._$AH[d],m===E?t=E:t!==E&&(t+=(m??"")+o[d+1]),this._$AH[d]=m}n&&!a&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ji=class extends vt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}},Di=class extends vt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}},Ii=class extends vt{constructor(t,e,i,a,o){super(t,e,i,a,o),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??E)===V)return;const i=this._$AH,a=t===E&&i!==E||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==E&&(i===E||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ri=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}};const Oi=ne.litHtmlPolyfillSupport;Oi?.(Ct,le),(ne.litHtmlVersions??=[]).push("3.2.1");const Ni=(s,t,e)=>{const i=e?.renderBefore??t;let a=i._$litPart$;if(a===void 0){const o=e?.renderBefore??null;i._$litPart$=a=new le(t.insertBefore(ot(),o),o,void 0,e??{})}return a._$AI(s),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ni(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const qi=globalThis.litElementPolyfillSupport;qi?.({LitElement:at});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bi=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ui={attribute:!0,type:String,converter:gt,reflect:!1,hasChanged:oe},Gi=(s=Ui,t,e)=>{const{kind:i,metadata:a}=e;let o=globalThis.litPropertyMetadata.get(a);if(o===void 0&&globalThis.litPropertyMetadata.set(a,o=new Map),o.set(e.name,s),i==="accessor"){const{name:n}=e;return{set(r){const d=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,d,s)},init(r){return r!==void 0&&this.P(n,void 0,s),r}}}if(i==="setter"){const{name:n}=e;return function(r){const d=this[n];t.call(this,r),this.requestUpdate(n,d,s)}}throw Error("Unsupported decorator location: "+i)};function Ve(s){return(t,e)=>typeof e=="object"?Gi(s,t,e):((i,a,o)=>{const n=a.hasOwnProperty(o);return a.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(a,o):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vi(s){return Ve({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Wi=s=>(...t)=>({_$litDirective$:s,values:t});let Yi=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi=Wi(class extends Yi{constructor(s){if(super(s),s.type!==Fi.ATTRIBUTE||s.name!=="class"||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const e=s.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||this.nt?.has(i)||(a?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return V}});var u={d:(s,t)=>{for(var e in t)u.o(t,e)&&!u.o(s,e)&&Object.defineProperty(s,e,{enumerable:!0,get:t[e]})},o:(s,t)=>Object.prototype.hasOwnProperty.call(s,t),r:s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}},Fe={};u.d(Fe,{w:()=>A});var Tt={};u.r(Tt),u.d(Tt,{templates:()=>ss});var zt={};u.r(zt),u.d(zt,{templates:()=>as});var Lt={};u.r(Lt),u.d(Lt,{templates:()=>os});var _t={};u.r(_t),u.d(_t,{templates:()=>ns});var Mt={};u.r(Mt),u.d(Mt,{templates:()=>rs});var Ht={};u.r(Ht),u.d(Ht,{templates:()=>ls});var Pt={};u.r(Pt),u.d(Pt,{templates:()=>ds});var jt={};u.r(jt),u.d(jt,{templates:()=>cs});var Dt={};u.r(Dt),u.d(Dt,{templates:()=>hs});var It={};u.r(It),u.d(It,{templates:()=>ps});var Rt={};u.r(Rt),u.d(Rt,{templates:()=>us});var Ot={};u.r(Ot),u.d(Ot,{templates:()=>gs});var Nt={};u.r(Nt),u.d(Nt,{templates:()=>bs});var qt={};u.r(qt),u.d(qt,{templates:()=>ms});var Bt={};u.r(Bt),u.d(Bt,{templates:()=>fs});var Ut={};u.r(Ut),u.d(Ut,{templates:()=>ys});var Gt={};u.r(Gt),u.d(Gt,{templates:()=>xs});var Vt={};u.r(Vt),u.d(Vt,{templates:()=>vs});var Ft={};u.r(Ft),u.d(Ft,{templates:()=>ws});var Wt={};u.r(Wt),u.d(Wt,{templates:()=>ks});var Yt={};u.r(Yt),u.d(Yt,{templates:()=>$s});var Zt={};u.r(Zt),u.d(Zt,{templates:()=>As});var Kt={};u.r(Kt),u.d(Kt,{templates:()=>Es});const f=(s=>{var t={};return u.d(t,s),t})({LitElement:()=>at,css:()=>xi,html:()=>Mi}),We=(s,t,e)=>{let i=s[0];for(let a=1;a<s.length;a++)i+=t[e?e[a-1]:a-1],i+=s[a];return i},Ye=s=>{return typeof(t=s)!="string"&&"strTag"in t?We(s.strings,s.values):s;var t};let T=Ye,He=!1;const Xt="lit-localize-status";class Ki{constructor(t){this.__litLocalizeEventHandler=e=>{e.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(Xt,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Xt,this.__litLocalizeEventHandler)}}const Xi=s=>s.addController(new Ki(s));let Ze=class{constructor(){this.settled=!1,this.promise=new Promise((t,e)=>{this._resolve=t,this._reject=e})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}};const H=[];for(let s=0;s<256;s++)H[s]=(s>>4&15).toString(16)+(15&s).toString(16);function Ji(s,t){return(t?"h":"s")+function(e){let i=0,a=8997,o=0,n=33826,r=0,d=40164,m=0,p=52210;for(let c=0;c<e.length;c++)a^=e.charCodeAt(c),i=435*a,o=435*n,r=435*d,m=435*p,r+=a<<8,m+=n<<8,o+=i>>>16,a=65535&i,r+=o>>>16,n=65535&o,p=m+(r>>>16)&65535,d=65535&r;return H[p>>8]+H[255&p]+H[d>>8]+H[255&d]+H[n>>8]+H[255&n]+H[a>>8]+H[255&a]}(typeof s=="string"?s:s.join(""))}const Pe=new WeakMap,je=new Map;function Qi(s,t,e){if(s){const i=e?.id??function(o){const n=typeof o=="string"?o:o.strings;let r=je.get(n);return r===void 0&&(r=Ji(n,typeof o!="string"&&!("strTag"in o)),je.set(n,r)),r}(t),a=s[i];if(a){if(typeof a=="string")return a;if("strTag"in a)return We(a.strings,t.values,a.values);{let o=Pe.get(a);return o===void 0&&(o=a.values,Pe.set(a,o)),{...a,values:o.map(n=>t.values[n])}}}}return Ye(t)}function kt(s){window.dispatchEvent(new CustomEvent(Xt,{detail:s}))}let $t,Ke,mt,Jt,Xe,ft="",q=new Ze;q.resolve();let dt=0;const ts=()=>ft,es=s=>{if(s===($t??ft))return q.promise;if(!mt||!Jt)throw Error("Internal error");if(!mt.has(s))throw Error("Invalid locale code");dt++;const t=dt;return $t=s,q.settled&&(q=new Ze),kt({status:"loading",loadingLocale:s}),(s===Ke?Promise.resolve({templates:void 0}):Jt(s)).then(e=>{dt===t&&(ft=s,$t=void 0,Xe=e.templates,kt({status:"ready",readyLocale:s}),q.resolve())},e=>{dt===t&&(kt({status:"error",errorLocale:s,errorMessage:e.toString()}),q.reject(e))}),q.promise},x=(s=>{var t={};return u.d(t,s),t})({customElement:()=>Bi,property:()=>Ve,state:()=>Vi}),is=["cs","da","de","el","es","fa","fr","it","ja","km","ko","nl","no","pl","pt","ru","sr","sv","tr","uk","vi","zh-CN","zh-HK"],ss={s1488e73779d7682f:"1) Откройте меню вашего браузера",s182ab2d6c997515f:"Добавьте его на главный экран, чтобы получить дополнительные возможности и удобство использования.",s1b9047d53d9f9d22:'2) Нажать "Поделиться"',s2d90afa5dcca2c0e:'3) Прокрутите вниз до "Добавить на главный экран"',s37a9e8aec5713460:"Подробнее",s4593f304dac8848c:'2) Нажмите "Добавить на главный экран"',s54cfbb14f46396d4:"1) Откройте в вашем основном браузере",s6196153c4b0c1ea0:"Установить",s922329d6f6213590:"Добавить в Dock",sa5ef80b4bb9b39f8:"Свернуть",sa7551383d1897fcc:'2) Нажмите "Добавить в Dock"',sba52286c21552a4e:"Установите это на ваше устройство, чтобы получить дополнительные возможности и удобство использования.",sc79fd7641eb9a975:"Спрятать Инструкцию",scdaf4bbff76674c8:"На экран «Домой»",se740f75b95a51807:"Добавьте его в Dock, чтобы получить дополнительные возможности и удобство использования.",sfea652f6580ff086:"Этот веб-сайт имеет функционал приложения."},as={s1488e73779d7682f:"1) Tarayıcı menünüzü açın",s182ab2d6c997515f:"Daha iyi bir deneyim ve kolay erişim için Ana Ekranınıza ekleyin.",s1b9047d53d9f9d22:"2) Gezinme çubuğunda Paylaş'a basın",s2d90afa5dcca2c0e:'3) "Ana Ekrana Ekle" seçeneğine kadar aşağı kaydırın',s37a9e8aec5713460:"Daha Fazla",s4593f304dac8848c:'2) "Ana Ekrana Ekle"ye dokunun',s54cfbb14f46396d4:"1) Ana tarayıcınızda açın",s6196153c4b0c1ea0:"Yükle",s922329d6f6213590:"Dock’a Ekle",sa5ef80b4bb9b39f8:"Küçült",sa7551383d1897fcc:"2) Dock’a ekleye basın",sba52286c21552a4e:"Daha iyi bir deneyim ve kolay erişim için cihazınıza yükleyin.",sc79fd7641eb9a975:"Talimatları gizle",scdaf4bbff76674c8:"Ana Ekrana Ekle",se740f75b95a51807:"Daha iyi bir deneyim ve kolay erişim için Dock’a ekleyin.",sfea652f6580ff086:"Bu site uygulama işlevselliğine sahiptir."},os={s1488e73779d7682f:"1) Öffnen Sie das Menü Ihres Browsers",s182ab2d6c997515f:"Fügen Sie es zu Ihrem Startbildschirm hinzu, um eine umfassende Erfahrung und einen leichten Zugriff zu erhalten.",s1b9047d53d9f9d22:"2) Drücken Sie auf Teilen in der Navigationsleiste",s2d90afa5dcca2c0e:'3) Scrollen Sie nach unten zu "Zum Startbildschirm hinzufügen"',s37a9e8aec5713460:"Mehr",s4593f304dac8848c:'2) Tippen Sie auf "Zum Startbildschirm hinzufügen"',s54cfbb14f46396d4:"1) Öffnen Sie es in Ihrem Hauptbrowser",s6196153c4b0c1ea0:"Installieren",s922329d6f6213590:"Zum Dock hinzufügen",sa5ef80b4bb9b39f8:"Weniger",sa7551383d1897fcc:"2) Drücken Sie auf Zum Dock hinzufügen",sba52286c21552a4e:"Installieren Sie es auf Ihrem Gerät für eine umfassende Erfahrung und einen leichten Zugriff.",sc79fd7641eb9a975:"Anleitung ausblenden",scdaf4bbff76674c8:"Hinzufügen zum Startbildschirm",se740f75b95a51807:"Fügen Sie es zu Ihrem Dock hinzu, um eine umfassende Erfahrung und einen leichten Zugriff zu erhalten.",sfea652f6580ff086:"Diese Website verfügt über App-Funktionalität."},ns={s1488e73779d7682f:"1) Abre el menú de tu navegador",s182ab2d6c997515f:"Añádelo a tu pantalla de inicio para una experiencia amplia y acceso fácil.",s1b9047d53d9f9d22:"2) Presionar Compartir en la barra de direcciones",s2d90afa5dcca2c0e:'3) Desplázate hacia abajo hasta "Añadir a pantalla de inicio"',s37a9e8aec5713460:"Más",s4593f304dac8848c:'2) Toca "Añadir a pantalla de inicio"',s54cfbb14f46396d4:"1) Abre en tu navegador principal",s6196153c4b0c1ea0:"Instalar",s922329d6f6213590:"Añadir al Dock",sa5ef80b4bb9b39f8:"Menos",sa7551383d1897fcc:"2) Presionar Añadir al Dock",sba52286c21552a4e:"Instálalo en tu dispositivo para una experiencia amplia y acceso fácil.",sc79fd7641eb9a975:"Esconder instrucciones",scdaf4bbff76674c8:"Añadir a pantalla de inicio",se740f75b95a51807:"Añádelo a tu Dock para una experiencia amplia y acceso fácil.",sfea652f6580ff086:"Este sitio tiene funcionalidad de aplicación."},rs={s1488e73779d7682f:"1) Open je browsermenu",s182ab2d6c997515f:"Voeg het toe aan je startscherm voor een uitgebreide ervaring en gemakkelijke toegang.",s1b9047d53d9f9d22:"2) Druk op delen in de navigatiebalk",s2d90afa5dcca2c0e:'3) Scrol naar beneden naar "Toevoegen aan startscherm"',s37a9e8aec5713460:"Meer",s4593f304dac8848c:'2) Tik op "Toevoegen aan startscherm"',s54cfbb14f46396d4:"1) Open in je hoofdprogramma",s6196153c4b0c1ea0:"Installeren",s922329d6f6213590:"Toevoegen aan Dock",sa5ef80b4bb9b39f8:"Minder",sa7551383d1897fcc:"2) Druk op Toevoegen aan Dock",sba52286c21552a4e:"Installeer het op je apparaat voor een uitgebreide ervaring en gemakkelijke toegang.",sc79fd7641eb9a975:"Instructie verbergen",scdaf4bbff76674c8:"Toevoegen aan het startscherm",se740f75b95a51807:"Voeg het toe aan je Dock voor een uitgebreide ervaring en makkelijke toegang.",sfea652f6580ff086:"Deze site heeft app-functionaliteit."},ls={s1488e73779d7682f:"1) Ανοίξτε το μενού του περιηγητή σας",s182ab2d6c997515f:"Προσθέστε το στην οθόνη Αφετηρίας για εκτεταμένη εμπειρία και εύκολη πρόσβαση.",s1b9047d53d9f9d22:"2) Πατήστε Κοινοποίηση στη γραμμή πλοήγησης",s2d90afa5dcca2c0e:'3) Κάντε κύλιση προς τα κάτω στο "Προσθήκη στην οθόνη Αφετηρίας"',s37a9e8aec5713460:"Περισσότερα",s4593f304dac8848c:'2) Πατήστε "Προσθήκη στην οθόνη Αφετηρίας"',s54cfbb14f46396d4:"1) Ανοίξτε στον κύριο περιηγητή σας",s6196153c4b0c1ea0:"Εγκατάσταση",s922329d6f6213590:"Προσθήκη στην Πρόσβαση",sa5ef80b4bb9b39f8:"Λιγότερα",sa7551383d1897fcc:"2) Πατήστε Προσθήκη στην Πρόσβαση",sba52286c21552a4e:"Εγκαταστήστε το στη συσκευή σας για εκτεταμένη εμπειρία και εύκολη πρόσβαση.",sc79fd7641eb9a975:"Απόκρυψη Οδηγιών",scdaf4bbff76674c8:"Προσθήκη στην Οθόνη Αφετηρίας",se740f75b95a51807:"Προσθέστε το στην Πρόσβαση για εκτεταμένη εμπειρία και εύκολη πρόσβαση.",sfea652f6580ff086:"Αυτός ο ιστότοπος έχει λειτουργική εφαρμογής."},ds={s1488e73779d7682f:"1) Ouvrez le menu de votre navigateur",s182ab2d6c997515f:"Ajoutez-le à votre écran d'accueil pour une expérience étendue et un accès facile.",s1b9047d53d9f9d22:"2) Appuyez sur Partager dans la barre de navigation",s2d90afa5dcca2c0e:`3) Faites défiler vers le bas jusqu'à "Ajouter à l'écran d'accueil"`,s37a9e8aec5713460:"Plus",s4593f304dac8848c:`2) Touchez "Ajouter à l'écran d'accueil"`,s54cfbb14f46396d4:"1) Ouvrir dans votre navigateur principal",s6196153c4b0c1ea0:"Installer",s922329d6f6213590:"Ajouter au Dock",sa5ef80b4bb9b39f8:"Moins",sa7551383d1897fcc:"2) Appuyez sur Ajouter au Dock",sba52286c21552a4e:"Installez-le sur votre appareil pour une expérience complète et un accès facile.",sc79fd7641eb9a975:"Masquer les instructions",scdaf4bbff76674c8:"Ajouter à l'écran d'accueil",se740f75b95a51807:"Ajoutez-le à votre Dock pour une expérience étendue et un accès facile.",sfea652f6580ff086:"Ce site possède des fonctionnalités d'application."},cs={s1488e73779d7682f:"1) Отворите мени вашег прегледача",s182ab2d6c997515f:"Додајте га на Home Screen за широке могућности и лак приступ.",s1b9047d53d9f9d22:"2) Притисните Share у навигационој траци",s2d90afa5dcca2c0e:'3) Померите се надоле до "Add to Home Screen"',s37a9e8aec5713460:"Више",s4593f304dac8848c:'2) Додирните "Add to Home Screen"',s54cfbb14f46396d4:"1) Отворите у вашем главном прегледачу",s6196153c4b0c1ea0:"Инсталирај",sa5ef80b4bb9b39f8:"Мање",sa7551383d1897fcc:"3) Притисните Add to Dock",sba52286c21552a4e:"Инсталирајте га на вашем уређају за широке могућности и лак приступ.",sc79fd7641eb9a975:"Сакриј упутство",se740f75b95a51807:"Додајте га у вашу Dock за широке могућности и лак приступ.",sfea652f6580ff086:"Овај сајт има функционалност апликације.",s922329d6f6213590:"Add to Dock",scdaf4bbff76674c8:"Add to Home Screen"},hs={s1488e73779d7682f:"1) Otwórz menu przeglądarki",s182ab2d6c997515f:"Dodaj do swojego Ekranu Głównego, aby uzyskać bogate doświadczenie i łatwy dostęp.",s1b9047d53d9f9d22:'2) Wybierz "Udostępnij"',s2d90afa5dcca2c0e:'3) Przewiń w dół do opcji "Dodaj do Ekranu Głównego"',s37a9e8aec5713460:"Więcej",s4593f304dac8848c:'2) Naciśnij "Dodaj do Ekranu Głównego"',s54cfbb14f46396d4:"1) Otwórz w swojej głównej przeglądarce",s6196153c4b0c1ea0:"Zainstaluj",s922329d6f6213590:"Dodaj do Docka",sa5ef80b4bb9b39f8:"Mniej",sa7551383d1897fcc:'2) Wybierz "Dodaj do Docka"',sba52286c21552a4e:"Zainstaluj na swoim urządzeniu, aby uzyskać bogate doświadczenie i łatwy dostęp.",sc79fd7641eb9a975:"Ukryj instrukcję",scdaf4bbff76674c8:"Dodaj do Ekranu Głównego",se740f75b95a51807:"Dodaj do swojego Docka, aby uzyskać bogate doświadczenie i łatwy dostęp.",sfea652f6580ff086:"Ta strona posiada funkcje aplikacji."},ps={s1488e73779d7682f:"1) Відкрити меню браузера",s182ab2d6c997515f:"Додайте на Домашній екран для зручного доступу та ширших можливостей.",s1b9047d53d9f9d22:"2) Натиснути «Поділитися»",s2d90afa5dcca2c0e:"3) Прокрутіть вниз до «На Початковий экран»",s37a9e8aec5713460:"Детальніше",s4593f304dac8848c:"2) Натиснути «На Початковий экран»",s54cfbb14f46396d4:"1) Відкрити у вашому основному браузері",s6196153c4b0c1ea0:"Встановити",s922329d6f6213590:"Додати на Dock",sa5ef80b4bb9b39f8:"Згорнути",sa7551383d1897fcc:"2) Натиснути «Додати на Dock»",sba52286c21552a4e:"Встановіть на ваш пристрій для зручного доступу та ширших можливостей.",sc79fd7641eb9a975:"Сховати Інструкцію",scdaf4bbff76674c8:"На Початковий экран",se740f75b95a51807:"Додайте на панель Dock для зручного доступу та ширших можливостей.",sfea652f6580ff086:"Цей сайт має функції додатку."},us={s1488e73779d7682f:"1) 打開您的瀏覽器菜單",s182ab2d6c997515f:"將其加入主屏幕，以獲得更豐富的體驗和便捷訪問。",s1b9047d53d9f9d22:"2) 點擊列表上的分享按鈕",s2d90afa5dcca2c0e:"3) 向下滾動到「添加到主屏幕」",s37a9e8aec5713460:"詳細資訊",s4593f304dac8848c:"2) 點擊「添加到主屏幕」",s54cfbb14f46396d4:"1) 在您的主要瀏覽器中打開",s6196153c4b0c1ea0:"安裝",s922329d6f6213590:"添加到Dock欄",sa5ef80b4bb9b39f8:"簡短資訊",sa7551383d1897fcc:"2) 點選添加到Dock欄",sba52286c21552a4e:"在您的裝置上安裝它，以獲得更豐富的體驗和便捷訪問。",sc79fd7641eb9a975:"隱藏安裝流程",scdaf4bbff76674c8:"將App加入主畫面",se740f75b95a51807:"將其加入你的Dock欄，以獲得更豐富的體驗和便捷訪問。",sfea652f6580ff086:"此網站具有應用程式功能。"},gs={s1488e73779d7682f:"1) 打开浏览器菜单",s182ab2d6c997515f:"将其添加到主屏幕，以享受更丰富的体验并便于访问。",s1b9047d53d9f9d22:"2) 点击导航栏中的“分享”按钮",s2d90afa5dcca2c0e:"3) 向下滚动至“添加到主屏幕”",s37a9e8aec5713460:"更多",s4593f304dac8848c:"2) 轻触“添加到主屏幕”",s54cfbb14f46396d4:"1) 在您的主浏览器中打开",s6196153c4b0c1ea0:"安装",s922329d6f6213590:"添加到程序坞",sa5ef80b4bb9b39f8:"收起",sa7551383d1897fcc:"2) 点击“添加到程序坞”",sba52286c21552a4e:"在您的设备上安装，以享受更丰富的体验并便于访问。",sc79fd7641eb9a975:"隐藏安装步骤",scdaf4bbff76674c8:"添加到主屏幕",se740f75b95a51807:"将其添加到您的程序坞，以享受更全面的体验并便于访问。",sfea652f6580ff086:"此网站具备 App 功能特性。"},bs={s1488e73779d7682f:"1) Apri il menu del tuo browser",s182ab2d6c997515f:"Aggiungilo alla schermata principale per un'esperienza più completa e un accesso facile.",s1b9047d53d9f9d22:"2) Premi Condividi nella barra di navigazione",s2d90afa5dcca2c0e:'3) Scorri verso il basso fino a "Aggiungi alla schermata principale"',s37a9e8aec5713460:"Più",s4593f304dac8848c:'2) Tocca "Aggiungi alla schermata principale"',s54cfbb14f46396d4:"1) Apri nel tuo browser principale",s6196153c4b0c1ea0:"Installa",s922329d6f6213590:"Aggiungi al Dock",sa5ef80b4bb9b39f8:"Meno",sa7551383d1897fcc:"2) Premi Aggiungi al Dock",sba52286c21552a4e:"Installalo sul tuo dispositivo per un'esperienza più completa e un accesso facile.",sc79fd7641eb9a975:"Nascondi istruzioni",scdaf4bbff76674c8:"Aggiungi alla schermata principale",se740f75b95a51807:"Aggiungilo al Dock per un'esperienza più completa e un accesso facile.",sfea652f6580ff086:"Questo sito ha funzionalità di app."},ms={s1488e73779d7682f:"1) Otevřete nabídku prohlížeče",s182ab2d6c997515f:"Přidejte jej na plochu pro rozšířené využití a snadný přístup.",s1b9047d53d9f9d22:"2) Stiskněte tlačítko Sdílet na navigačním panelu",s2d90afa5dcca2c0e:'3) Projděte dolů k "Přidat na plochu"',s37a9e8aec5713460:"Vice",s4593f304dac8848c:'2) Klepněte na "Přidat na plochu"',s54cfbb14f46396d4:"1) Otevřete v hlavním prohlížeči",s6196153c4b0c1ea0:"Nainstalovat",s922329d6f6213590:"Přidat do Docku",sa5ef80b4bb9b39f8:"Méně",sa7551383d1897fcc:"2) Stiskněte Přidat do Docku",sba52286c21552a4e:"Nainstalujte si jej na své zařízení pro rozšířené využití a snadný přístup.",sc79fd7641eb9a975:"Skrýt instrukce",scdaf4bbff76674c8:"Přidat na plochu",se740f75b95a51807:"Přidejte jej do svého Docku pro rozšířené využití a snadný přístup.",sfea652f6580ff086:"Tento web má funkce aplikace."},fs={s1488e73779d7682f:"1) Åpne menyen i nettleseren din",s182ab2d6c997515f:"Legg den til på Hjem-skjermen din for å få en bedre brukeropplevelse og raskere tilgang.",s1b9047d53d9f9d22:"2) Trykk på Del-knappen i navigasjonslinjen",s2d90afa5dcca2c0e:"3) Rull ned til «Legg til på Hjem-skjerm»",s37a9e8aec5713460:"Mer",s4593f304dac8848c:'2) Trykk på "Legg til på Hjem-skjerm"',s54cfbb14f46396d4:"1) Åpne i hovednettleseren din",s6196153c4b0c1ea0:"Installer",s922329d6f6213590:"Legg til i Dock",sa5ef80b4bb9b39f8:"Mindre",sa7551383d1897fcc:"2) Velg Legg til i Dock",sba52286c21552a4e:"Installer den på enheten din for å få en bedre brukeropplevelse og raskere tilgang.",sc79fd7641eb9a975:"Skjul instruksjoner",scdaf4bbff76674c8:"Legg til på Hjem-skjerm",se740f75b95a51807:"Legg den til i Docken din for å få en bedre brukeropplevelse og raskere tilgang.",sfea652f6580ff086:"Denne siden har app-funksjonalitet."},ys={s1488e73779d7682f:"1) Abra o menu do seu navegador",s182ab2d6c997515f:"Adicione à Tela de Início para uma melhor experiência e mais fácil acesso.",s1b9047d53d9f9d22:"2) Pressione Compartilhar na barra de endereço",s2d90afa5dcca2c0e:'3) Role para baixo até "Adicionar à Tela de Início"',s37a9e8aec5713460:"Mais",s4593f304dac8848c:'2) Toque em "Adicionar à Tela de Início"',s54cfbb14f46396d4:"1) Abra no seu navegador principal",s6196153c4b0c1ea0:"Instalar",s922329d6f6213590:"Adicionar ao Dock",sa5ef80b4bb9b39f8:"Menos",sa7551383d1897fcc:"2) Pressione Adicionar ao Dock",sba52286c21552a4e:"Instale no dispositivo para uma melhor experiência e mais fácil acesso.",sc79fd7641eb9a975:"Ocultar Instruções",scdaf4bbff76674c8:"Adicionar à Tela de Início",se740f75b95a51807:"Adicione ao Dock para uma melhor experiência e mais fácil acesso.",sfea652f6580ff086:"Este site possui funcionalidade de aplicativo."},xs={s1488e73779d7682f:"1) ブラウザメニューを開く",s182ab2d6c997515f:"ホーム画面に追加して、幅広い体験と簡単なアクセスを実現してください。",s1b9047d53d9f9d22:"2) ナビゲーションバーで共有を押す",s2d90afa5dcca2c0e:"3) 「ホーム画面に追加」までスクロールする",s37a9e8aec5713460:"展開",s4593f304dac8848c:"2) 「ホーム画面に追加」をタップする",s54cfbb14f46396d4:"1) メインブラウザで開く",s6196153c4b0c1ea0:"インストール",s922329d6f6213590:"Dockに追加",sa5ef80b4bb9b39f8:"折りたたむ",sa7551383d1897fcc:"2) 「Dockに追加」を押す",sba52286c21552a4e:"デバイスにインストールすることで、より充実した体験と簡単なアクセスを実現できます。",sc79fd7641eb9a975:"説明を非表示",scdaf4bbff76674c8:"ホーム画面に追加",se740f75b95a51807:"ドックに追加して、幅広い体験と簡単なアクセスを実現してください。",sfea652f6580ff086:"このサイトはアプリ機能があります。"},vs={s1488e73779d7682f:"1) Öppna din webbläsares meny",s182ab2d6c997515f:"Lägg till på hemskärmen för att få en bättre användarupplevelse och enklare åtkomst.",s1b9047d53d9f9d22:"2) Tryck på Dela-knappen i verktygsfältet",s2d90afa5dcca2c0e:'3) Scrolla ner till "Lägg till på hemskärmen"',s37a9e8aec5713460:"Mer",s4593f304dac8848c:'2) Tryck på "Lägg till på hemskärmen"',s54cfbb14f46396d4:"1) Öppna i din huvudsakliga webbläsare",s6196153c4b0c1ea0:"Installera",s922329d6f6213590:"Lägg till i Dock",sa5ef80b4bb9b39f8:"Mindre",sa7551383d1897fcc:"2) Välj Lägg till i Dock",sba52286c21552a4e:"Installera den på din enhet för att få en bättre användarupplevelse och enklare åtkomst.",sc79fd7641eb9a975:"Göm instruktioner",scdaf4bbff76674c8:"Lägg till på hemskärmen",se740f75b95a51807:"Lägg till i Dock för att få en bättre användarupplevelse och enklare åtkomst.",sfea652f6580ff086:"Denna webbsajt har app-funktionalitet."},ws={s1488e73779d7682f:"1) 브라우저 메뉴 열기",s182ab2d6c997515f:"더 많은 기능과 쉬운 접근을 위해 홈 화면에 추가해주세요.",s1b9047d53d9f9d22:"2) 내비게이션 바에서 공유 버튼 누르기",s2d90afa5dcca2c0e:'3) "홈 화면에 추가"로 스크롤하기',s37a9e8aec5713460:"더보기",s4593f304dac8848c:'2) "홈 화면에 추가" 탭하기',s54cfbb14f46396d4:"1) 주 브라우저에서 열기",s6196153c4b0c1ea0:"설치",s922329d6f6213590:"Dock에 추가",sa5ef80b4bb9b39f8:"닫기",sa7551383d1897fcc:"2) Dock에 추가 버튼 누르기",sba52286c21552a4e:"더 많은 기능과 쉬운 접근을 위해 기기에 설치해주세요.",sc79fd7641eb9a975:"안내 숨기기",scdaf4bbff76674c8:"홈 화면에 추가",se740f75b95a51807:"더 많은 기능과 쉬운 접근을 위해 Dock에 추가해주세요.",sfea652f6580ff086:"이 사이트는 앱 기능을 가지고 있습니다."},ks={s1488e73779d7682f:"1) បើកម៉ឺនុយកម្មវិធីរុករករបស់អ្នក",s182ab2d6c997515f:"បន្ថែមវាទៅកាន់ផ្ទាំងអេក្រង់ដើមដើម្បីទទួលបាននូវបទពិសោធន៍កាន់តែល្អនិងងាយស្រួលប្រើ។",s1b9047d53d9f9d22:"2) ចុចលើ ប៊ូតុងចែករំលែក នៅក្នុងរបារទិសដៅ",s2d90afa5dcca2c0e:'3) អូសចុះទៅកាន់ "បន្ថែមទៅផ្ទាំងអេក្រង់ដើម"',s37a9e8aec5713460:"បង្ហាញបន្ថែម",s4593f304dac8848c:'2) ចុចលើ "បន្ថែមទៅកាន់ផ្ទាំងអេក្រង់ដើម"',s54cfbb14f46396d4:"1) បើកនៅក្នុងកម្មវិធីរុករកសំខាន់របស់អ្នក",s6196153c4b0c1ea0:"តំឡើង",s922329d6f6213590:"បន្ថែមទៅកាន់ Dock",sa5ef80b4bb9b39f8:"បង្ហាញតិច",sa7551383d1897fcc:"2) ចុចលើ បន្ថែមទៅកាន់ Dock",sba52286c21552a4e:"តំឡើងវានៅលើឧបករណ៍របស់អ្នកដើម្បីទទួលបាននូវបទពិសោធន៍កាន់តែល្អនិងងាយស្រួលប្រើ។",sc79fd7641eb9a975:"បិទការណែនាំ",scdaf4bbff76674c8:"បន្ថែមទៅកាន់ផ្ទាំងអេក្រង់ដើម",se740f75b95a51807:"បន្ថែមវាទៅកាន់ Dock ដើម្បីទទួលបាននូវបទពិសោធន៍កាន់តែល្អនិងងាយស្រួលប្រើ។",sfea652f6580ff086:"គេហទំព័រនេះមានមុខងារជាកម្មវិធី។"},$s={s1488e73779d7682f:"۱) مرورگر خود را باز کنید",s182ab2d6c997515f:"برای تجربه گسترده و دسترسی آسان آن را به صفحه اصلی خود اضافه کنید.",s1b9047d53d9f9d22:"۱)در نوار پایین دکمه (Share) را  بزنید",s2d90afa5dcca2c0e:'۳) به پایین اسکرول کنید تا به "Add to Home Screen" برسید',s37a9e8aec5713460:"بیشتر",s4593f304dac8848c:'۲) روی "Add to Home screen" ضربه بزنید',s54cfbb14f46396d4:"۱) در مرورگر اصلی خود باز کنید",s6196153c4b0c1ea0:"نصب",s922329d6f6213590:"افزودن به (Dock)",sa5ef80b4bb9b39f8:"کمتر",sa7551383d1897fcc:"۲) (Add to Dock) را انتخاب کنید ",sba52286c21552a4e:"برای تجربه گسترده و دسترسی آسان آن را بر روی دستگاه خود نصب کنید.",sc79fd7641eb9a975:" مخفی کردن مراحل",scdaf4bbff76674c8:"افزودن به (Home Screen)",se740f75b95a51807:"برای تجربه گسترده و دسترسی آسان آن را به Dock خود اضافه کنید.",sfea652f6580ff086:" این سایت دارای قابلیت اپلیکیشن است. "},As={s1488e73779d7682f:"1) Åbn din browsermenu",s182ab2d6c997515f:"Tilføj den til din hjemmeskærm for en bedre oplevelse og nem adgang.",s1b9047d53d9f9d22:"2) Tryk på Del-knappen i navigationslinjen",s2d90afa5dcca2c0e:'3) Rul ned til "Tilføj til hjemmeskærm"',s37a9e8aec5713460:"Mere",s4593f304dac8848c:'2) Tryk på "Tilføj til hjemmeskærm"',s54cfbb14f46396d4:"1) Åbn i din primære browser",s6196153c4b0c1ea0:"Installer",s922329d6f6213590:"Tilføj til Dock",sa5ef80b4bb9b39f8:"Mindre",sa7551383d1897fcc:"2) Vælg Tilføj til Dock",sba52286c21552a4e:"Installer den på din enhed for en bedre oplevelse og nem adgang.",sc79fd7641eb9a975:"Skjul instruktion",scdaf4bbff76674c8:"Tilføj til hjemmeskærm",se740f75b95a51807:"Tilføj den til din Dock for en bedre oplevelse og nem adgang.",sfea652f6580ff086:"Denne side har app-funktionalitet."},Es={s1488e73779d7682f:"1) Mở menu trình duyệt của bạn",s182ab2d6c997515f:"Thêm nó vào màn hình chính của bạn để có trải nghiệm phong phú hơn và truy cập dễ dàng hơn.",s1b9047d53d9f9d22:'2) Nhấp vào nút "Chia sẻ" trên thanh điều hướng',s2d90afa5dcca2c0e:'3) Kéo đến mục "Thêm vào Màn hình chính"',s37a9e8aec5713460:"Thêm",s4593f304dac8848c:'2) Nhấn vào "Thêm vào Màn hình chính"',s54cfbb14f46396d4:"1) Mở trình duyệt chính của bạn",s6196153c4b0c1ea0:"Cài đặt",s922329d6f6213590:"Thêm vào Dock",sa5ef80b4bb9b39f8:"Thu gọn",sa7551383d1897fcc:'2) Nhấp vào "Thêm vào Dock"',sba52286c21552a4e:"Cài đặt trên thiết bị của bạn để có trải nghiệm phong phú hơn và truy cập dễ dàng.",sc79fd7641eb9a975:"Ẩn các bước cài đặt",scdaf4bbff76674c8:"Thêm vào màn hình chính",se740f75b95a51807:"Thêm nó vào Dock của bạn để có trải nghiệm toàn diện hơn và truy cập dễ dàng hơn.",sfea652f6580ff086:"Trang web này có cả chức năng đặc trưng ứng dụng."},Je=new Map([["ru",Tt],["tr",zt],["de",Lt],["es",_t],["nl",Mt],["el",Ht],["fr",Pt],["sr",jt],["pl",Dt],["uk",It],["zh-HK",Rt],["zh-CN",Ot],["it",Nt],["cs",qt],["no",Bt],["pt",Ut],["ja",Gt],["sv",Vt],["ko",Ft],["km",Wt],["fa",Yt],["da",Zt],["vi",Kt]]),{getLocale:De,setLocale:Ie}=(tt={sourceLocale:"en",targetLocales:is,loadLocale:async s=>Je.get(s)},function(s){if(He)throw Error("lit-localize can only be configured once");T=s,He=!0}((s,t)=>Qi(Xe,s,t)),ft=Ke=tt.sourceLocale,mt=new Set(tt.targetLocales),mt.add(tt.sourceLocale),Jt=tt.loadLocale,{getLocale:ts,setLocale:es});var tt;class Qe{constructor(){this.icons=[{src:""}],this.screenshots=void 0,this.short_name="PWA",this.name="Progressive web application",this.description="Progressive web application"}}const Ss=f.css`.gallery{position:relative;--scrollbar-background-color:#fff;--scrollbar-thumb-color:rgb(146, 146, 146);--scrollbar-thumb-hover-color:rgb(100, 100, 100);--nav-btn-background-color:#fff;--nav-btn-fill-color:#141414}.gallery .gallery_scroller{scroll-snap-type:x mandatory;overflow-x:auto;overflow-y:hidden;display:flex;align-items:center;padding:10px 13px;padding-bottom:10px;margin:0 10px;-webkit-overflow-scrolling:touch}.gallery .gallery_scroller img{border-radius:6px;max-height:min(45vh,500px);box-shadow:0 3px 10px 0 rgba(0,0,0,.15);scroll-snap-align:center;scroll-snap-stop:always;position:relative}.gallery .gallery_scroller img+img{margin-inline-start:15px}.gallery .gallery_scroller::-webkit-scrollbar{width:4px;height:2px}.gallery .gallery_scroller::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb-color);border-radius:4px}.gallery .gallery_scroller::-webkit-scrollbar-thumb:hover{background:var(--scrollbar-thumb-hover-color)}.gallery .gallery_scroller::-webkit-scrollbar-track{background:var(--scrollbar-background-color);border-radius:4px}.gallery .gallery_scroller .scroller_wrap{display:flex;flex-direction:row;padding-inline-end:13px}.gallery .btn{position:absolute;display:flex;align-items:center;-webkit-user-select:none;user-select:none;top:50%;transform:translateY(-50%);height:30px;width:30px;border-radius:50%;background-color:var(--nav-btn-background-color);box-shadow:rgba(0,0,0,.3) 2px 4px 4px 1px;background-repeat:no-repeat;opacity:.8;z-index:1}.gallery .btn.prev{left:5px}.gallery .btn.prev svg{margin-left:4px}.gallery .btn.next{right:5px}.gallery .btn.next svg{transform:rotate(180deg);margin-left:6px}.gallery .btn:hover{box-shadow:rgba(0,0,0,.5) 2px 4px 4px 1px;cursor:pointer;opacity:1}.gallery .btn svg{width:20px;height:20px;margin:0 auto}.gallery .btn svg path{fill:var(--nav-btn-fill-color)}.gallery.apple_desktop{--scrollbar-background-color:rgba(0, 0, 0, 0.1);--scrollbar-thumb-color:rgb(100, 100, 100);--scrollbar-thumb-hover-color:rgba(0, 0, 0, 0.85)}.gallery.apple_desktop .gallery_scroller{margin:0;padding-top:15px}.gallery.apple_desktop .btn{height:26px;width:26px;box-shadow:rgba(0,0,0,.3) 0 2px 2px 1px}.gallery.apple_desktop .btn:hover{box-shadow:rgba(0,0,0,.3) 0 2px 2px 1px}.gallery.apple_desktop .btn:active{filter:brightness(95%)}.gallery.apple_desktop .btn:active .svg{filter:brightness(110%)}.gallery.apple_desktop .btn svg{width:12px;height:auto;opacity:1}.gallery.apple_desktop .btn svg{margin-inline-start:7px}.gallery.apple_mobile .btn.prev svg{margin-inline-start:7px}.gallery.apple_mobile .btn svg{width:16px;height:auto}.gallery.apple_desktop .btn,.gallery.apple_mobile .btn{opacity:1}@media(hover:none)and (pointer:coarse){.gallery .btn.next,.gallery .btn.prev{display:none}.gallery_scroller::-webkit-scrollbar{display:none}}@media(prefers-color-scheme:dark){.gallery{--scrollbar-background-color:#424242;--nav-btn-background-color:#555555;--nav-btn-fill-color:#fff}.gallery.apple_desktop{--scrollbar-thumb-color:var(--nav-btn-fill-color);--scrollbar-background-color:var(--nav-btn-background-color);--scrollbar-thumb-hover-color:var(--nav-btn-fill-color)}.gallery.apple_desktop .btn:active{filter:brightness(110%)}.gallery.apple_desktop .btn:active .svg{filter:brightness(90%)}}`,W=(s,t,e)=>{const i=new CustomEvent(t,{detail:{message:e}});s.dispatchEvent(i)};class k{static isAppleMobile(){return!(!(["iPhone","iPad","iPod"].includes(navigator.platform)||navigator.userAgent.match(/Mac/)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2)||!("serviceWorker"in navigator))}static isAppleDesktop(){const t=navigator.userAgent.toLowerCase();if(navigator.maxTouchPoints||!t.match(/macintosh/))return!1;const e=/version\/(\d{2})\./.exec(t);if(!(e&&e[1]&&parseInt(e[1])>=17))return!1;const i=!!document.createElement("audio").canPlayType('audio/wav; codecs="1"'),a=!!new OffscreenCanvas(1,1).getContext("webgl");return i&&a}static isAndroid(){return!!navigator.userAgent.toLowerCase().match(/android/)}static isAndroidFallback(){return!(!this.isAndroid()||"BeforeInstallPromptEvent"in window)}static deviceFormFactor(){return window.matchMedia("(orientation: portrait)").matches?"narrow":"wide"}static isStandalone(){return!!(window.matchMedia("(display-mode: standalone)").matches||"standalone"in navigator&&navigator.standalone===!0)}static async getInstalledRelatedApps(){if("getInstalledRelatedApps"in navigator)try{return await navigator.getInstalledRelatedApps().then(t=>t)}catch{}return[]}static async isRelatedAppsInstalled(){return!!(await this.getInstalledRelatedApps()).length}static setStorageFlag(t,e,i=!1){try{i?localStorage.setItem(t,e.toString()):sessionStorage.setItem(t,e.toString())}catch{}}static getStorageFlag(t){try{return sessionStorage.getItem(t)==="true"||localStorage.getItem(t)==="true"}catch{return!1}}static eventInstalledSuccess(t){W(t,"pwa-install-success-event","App install success (Chromium/Android only)")}static eventInstalledFail(t){W(t,"pwa-install-fail-event","App install failed (Chromium/Android only)")}static eventUserChoiceResult(t,e){W(t,"pwa-user-choice-result-event",e)}static eventInstallAvailable(t){W(t,"pwa-install-available-event","App install available")}static eventInstallHowTo(t){W(t,"pwa-install-how-to-event","App install instruction showed")}static eventGallery(t){W(t,"pwa-install-gallery-event","App install gallery showed")}static normalizeManifestAssetUrls(t,e){const i=new URL(e,document.location.href);[...t.icons||[],...t.screenshots||[]].forEach(a=>{a.src=new URL(a.src,i).href})}static async fetchAndProcessManifest(t,e,i,a){let o=new Qe,n=null;try{const r=await fetch(t);if(n=await r.json(),!r.ok||!n||!Object.keys(n))throw Error("Manifest not found");this.normalizeManifestAssetUrls(n,t)}catch{}return e=e||(n?.icons?.length?n?.icons[0].src:o.icons?.[0].src)||"",i=i||(n?n.short_name:o.short_name)||"",a=a||n?.description||o.description||"",o=n||o,{_manifest:o,icon:e,name:i,description:a}}}const Cs=(s,t,e,i)=>f.html`${s?f.html`<div id="paginated_gallery" class="gallery ${t}"><div class="gallery_scroller"><div class="scroller_wrap">${s.filter(a=>!a.form_factor||a.form_factor===k.deviceFormFactor()).map(a=>f.html`<img draggable="false" src='${a.src}' alt='${a.label||""}'>`)}</div></div><span class="btn prev" @click="${i}">${t!="default"?f.html`<svg id="arrow-left" viewBox="0 0 23.023 18.518"><path fill="currentColor" d="M0 9.253c0 .305.134.586.378.818l8.106 8.093c.244.232.5.342.793.342.598 0 1.075-.44 1.075-1.05 0-.293-.11-.586-.306-.769l-2.734-2.783-4.834-4.407-.256.598 3.93.244h15.442c.635 0 1.075-.451 1.075-1.086s-.44-1.087-1.075-1.087H6.152l-3.93.245.256.61 4.834-4.419 2.734-2.783a1.09 1.09 0 0 0 .306-.77C10.352.44 9.875 0 9.277 0c-.293 0-.549.098-.818.366L.38 8.436c-.247.23-.38.511-.38.816Z"/></svg>`:f.html`<svg id="arrow-left" viewBox="0 0 96 96"><path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z" fill="%23999" fill-rule="evenodd"/></svg>`}</span><span class="btn next" @click="${e}">${f.html`<svg height="15" width="15"><use href="#arrow-left"></use></svg>`}</span></div>`:""}`;var ct=function(s,t,e,i){var a,o=arguments.length,n=o<3?t:i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(n=(o<3?a(n):o>3?a(t,e,n):a(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},At=function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let Z=class extends f.LitElement{constructor(){super(...arguments),this.screenshots=[],this.theme="default",this.rtl=!1,this.getScrollElements=()=>{const s=this.shadowRoot?.querySelector("#paginated_gallery");if(!s)return;const t=s.querySelector(".gallery_scroller");if(!t)return;const e=Array.from(t.querySelectorAll("img"));return e.length!==0?{scroller:t,items:e}:void 0},this.findCurrentItem=(s,t)=>{const e=s.scrollLeft*(this.rtl?-1:1);return t.find(i=>i.offsetWidth+i.offsetLeft*(this.rtl?-1:1)>=e+i.offsetWidth/2.5)||null},this.scrollToPage=s=>{const t=this.getScrollElements();if(!t)return;const{scroller:e,items:i}=t,a=this.findCurrentItem(e,i);if(!a)return;const o=i.indexOf(a)+(s==="next"?1:-1)*(this.rtl?-1:1);o>=0&&o<i.length&&i[o].scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},this.scrollToNextPage=()=>{this.scrollToPage("next")},this.scrollToPrevPage=()=>{this.scrollToPage("prev")},this._init=()=>{}}static get styles(){return Ss}firstUpdated(){const s=this.getScrollElements();s&&setTimeout(()=>{s.scroller.scrollTo({top:0,left:0})},300)}connectedCallback(){super.connectedCallback(),this._init()}render(){return f.html`${Cs(this.screenshots,this.theme,this.scrollToNextPage,this.scrollToPrevPage)}`}};ct([(0,x.property)({type:Array}),At("design:type",Array)],Z.prototype,"screenshots",void 0),ct([(0,x.property)(),At("design:type",String)],Z.prototype,"theme",void 0),ct([(0,x.property)({type:Boolean}),At("design:type",Boolean)],Z.prototype,"rtl",void 0),Z=ct([(0,x.customElement)("pwa-gallery")],Z);const Ts=Z,ti=f.css`.dialog-body .icon{display:flex;align-items:flex-start}.dialog-body .icon .icon-image{width:48px;height:48px;margin:0 auto;margin-top:10px;border-radius:6px}.dialog-body .about{display:grid;grid-template-rows:30px auto}.dialog-body .about .hostname,.dialog-body .about .name{padding:0 5px;overflow:hidden}.dialog-body .about .name{font-weight:500;font-size:18px;line-height:24px;margin-top:5px;align-items:flex-start;display:flex}.dialog-body .about .name label{text-overflow:ellipsis;word-break:break-all;white-space:nowrap;overflow:hidden}.dialog-body .about .hostname{font-size:13px;font-weight:400;opacity:.7;line-height:14px;overflow-x:hidden;text-overflow:ellipsis;text-align:start;word-break:break-all;white-space:nowrap}.dialog-body .about+hr{margin-top:10px}.dialog-body .description{font-weight:400;line-height:20px;grid-column:1/3;padding:0 6px;margin:10px 5px 5px;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;max-height:115px;overflow:hidden;overflow-y:auto;text-overflow:ellipsis;text-align:start}.dialog-body .app-description{font-size:13px;margin-bottom:10px}.dialog-body .app-description::-webkit-scrollbar{width:4px;height:4px}.dialog-body .app-description::-webkit-scrollbar-thumb{background:#929292;border-radius:4px}.dialog-body .app-description::-webkit-scrollbar-thumb:hover{background:#646464}.dialog-body .app-description::-webkit-scrollbar-track{background:var(--scrollbar-background-color);border-radius:4px}.dialog-body .install-description{font-size:14px}.dialog-body hr{height:1px;width:100%;grid-column:1/3;background-color:var(--border-bottom-color);border:none;margin:0}.dialog-body .action-buttons{display:grid;grid-template-columns:50% auto;grid-column-start:1;grid-column-end:3;gap:10px;padding:10px 10px}.dialog-body .action-buttons .primary{grid-column-start:2}.dialog-body .material-button{--text-color-primary:#eee;--text-color-secondary:#374fc6;--background-color-primary:#374fc6;--background-color-ripple:#eee;position:relative;display:inline-block;box-sizing:border-box;border:none;border-radius:6px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;text-transform:uppercase;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);font-family:Roboto,"Segoe UI",BlinkMacSystemFont,system-ui,-apple-system;font-size:14px;font-weight:500;line-height:37px;overflow:hidden;outline:0;cursor:pointer;transition:box-shadow .2s}.dialog-body .material-button.primary{color:var(--text-color-primary);background-color:var(--background-color-primary)}.dialog-body .material-button.secondary{background-color:rgba(0,0,0,0);color:var(--text-color-secondary);box-shadow:none}.dialog-body .material-button.secondary::after,.dialog-body .material-button.secondary::before{background-color:var(--background-color-primary)}.dialog-body .material-button.secondary:active,.dialog-body .material-button.secondary:hover{box-shadow:none}.dialog-body .material-button.secondary.close{height:26px;min-width:26px;line-height:0;margin-inline-end:0;margin-inline-start:auto;padding:0;border-radius:50%}.dialog-body .material-button.secondary.close svg{width:16px;fill:var(--text-color-secondary)}.dialog-body .material-button.secondary.close::after{width:25px;height:25px;border-radius:50%}.dialog-body .material-button.secondary.close::before{border-radius:50%}.dialog-body .material-button::before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background-color:var(--background-color-ripple);opacity:0;transition:opacity .2s}.dialog-body .material-button::after{content:"";position:absolute;left:50%;top:50%;border-radius:50%;padding:50%;width:32px;height:32px;background-color:var(--background-color-ripple);opacity:0;transform:translate(-50%,-50%) scale(1);transition:opacity 1s,transform .5s}.dialog-body .material-button:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.dialog-body .material-button:active::after{opacity:.32;transform:translate(-50%,-50%) scale(0);transition:transform 0s}.dialog-body pwa-gallery{grid-column:1/3;max-height:0;opacity:0;transition:opacity ease-in-out .5s,max-height .5s ease-in-out;overflow:hidden}@media(prefers-color-scheme:dark){.dialog-body .material-button{--text-color-primary:#1B222C;--text-color-secondary:#a7c7fa;--background-color-primary:#a7c7fa}}@media(hover:none)and (pointer:coarse){.dialog-body .description::-webkit-scrollbar{display:none}}`,zs=f.css`:host{grid-template-columns:1fr}:host .touch-header{height:30px;width:100%;padding-top:10px;box-sizing:border-box;cursor:grab}:host .touch-header:active{cursor:grabbing}:host .touch-header::before{content:"";width:40px;height:5px;border-radius:3px;background:var(--touch-header-color);margin:0 auto;display:block}:host .body-header{display:grid;grid-template-columns:max-content 1fr max-content;grid-gap:15px;padding:18px 20px;padding-top:0;border-bottom:1px solid var(--border-bottom-color)}:host .body-header .install{text-transform:capitalize;height:40px;min-width:50px;padding:0 23px;align-items:center;display:inline-flex;-webkit-tap-highlight-color:transparent;transition:min-width .2s,color .2s,background-color .2s,border-color .2s}:host .body-header .install .button-text,:host .body-header .install svg{margin:0 auto}:host .body-header .install .check-icon{display:none}:host .body-header .about{grid-template-rows:auto auto;grid-gap:6px}:host .body-header .about .name{padding:0;line-height:20px;font-size:16px}:host .body-header .about .hostname{font-size:14px;font-weight:400;opacity:.7;line-height:14px;overflow-x:hidden;text-overflow:ellipsis;word-break:break-all;white-space:nowrap;padding:0}:host .body-header .icon .icon-image{margin:0;width:45px;height:45px}:host .how-to-body{display:flex;flex-direction:column;gap:15px;max-height:0;overflow:hidden;padding:0 20px;opacity:0}:host .how-to-body .description-step{display:flex;gap:15px;margin-inline-start:2.5px;align-items:center}:host .how-to-body .description-step .svg-wrap{display:flex;align-items:center;width:40px;height:40px;background-color:var(--touch-header-color);border-radius:50%}:host .how-to-body .description-step .svg-wrap svg{fill:var(--text-color-normal);margin:0 auto}:host .how-to-body .description-step .svg-wrap.add-icon svg{padding-right:1px}:host .how-to .description,:host .how-to ::slotted(pwa-gallery){max-height:0;padding-top:0;padding-bottom:0;overflow:hidden;opacity:0}:host .how-to .how-to-body{max-height:600px;padding-top:18px;padding-bottom:18px;opacity:1}:host .how-to .install{min-width:40px;padding:0;background:rgba(0,0,0,0);color:var(--text-color-normal);box-shadow:none;border:1px solid}:host .how-to .install .check-icon{display:inline;fill:var(--text-color-normal)}:host .how-to .install .button-text{display:none}:host .description{padding:15px 20px;margin:0;-webkit-line-clamp:6;max-height:150px;opacity:1}:host ::slotted(pwa-gallery){display:block;max-height:600px;padding-bottom:15px;opacity:1;transition:max-height 1.5s,opacity .8s,padding 1.5s}:host .description,:host .how-to-body{transition:max-height .2s,opacity .15s,padding .2s}:host .material-button{border-radius:20px}`,yt=(s=>{var t={};return u.d(t,s),t})({classMap:()=>Zi}),Ls=(s,t,e,i,a,o)=>f.html`<div class="dialog-body ${(0,yt.classMap)(((n=!1,r=!1)=>({fallback:n,"how-to":r}))(a,o))}"><div class="touch-header" id="touch-header"></div><div class="body-header"><div class="icon"><img src="${e}" alt="icon" class="icon-image"></div><div class="about"><div class="name"><label>${s}</label></div><div class="hostname">${location.hostname}</div></div><button class="material-button primary install" @click='${i}'><svg class="check-icon" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg><span class="button-text">${T("Install")}</span></button></div><div class="how-to-body"><div class="description-step"><div class="svg-wrap"><svg height="24" viewBox="0 -960 960 960" width="24" fill=""><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg></div><div class="step-text">${T("1) Open your browser menu")}</div></div><div class="description-step"><div class="svg-wrap add-icon"><svg height="24" viewBox="0 -960 960 960" width="24"><path d="M320-40q-33 0-56.5-23.5T240-120v-160h80v40h400v-480H320v40h-80v-160q0-33 23.5-56.5T320-920h400q33 0 56.5 23.5T800-840v720q0 33-23.5 56.5T720-40H320Zm0-120v40h400v-40H320ZM176-280l-56-56 224-224H200v-80h280v280h-80v-144L176-280Zm144-520h400v-40H320v40Zm0 0v-40 40Zm0 640v40-40Z"/></svg></div><div class="step-text">${T('2) Tap "Add to Home screen"')}</div></div></div>${t?f.html`<div class="description">${t}</div>`:""}<slot></slot></div>`;var j=function(s,t,e,i){var a,o=arguments.length,n=o<3?t:i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(n=(o<3?a(n):o>3?a(t,e,n):a(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},N=function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let _=class extends f.LitElement{constructor(){super(...arguments),this.props={name:"",description:"",icon:""},this.install={handleEvent:()=>{}},this.hideDialog=()=>{},this.disableClose=!1,this.fallback=!1,this.howToRequested=!1,this.toggleHowTo={handleEvent:()=>{}},this._callInstall=()=>{if(this.fallback)return this.toggleHowTo.handleEvent(),void setTimeout(()=>this.setupAppearence(!0),210);this.install.handleEvent()},this._callHide=()=>{this.hideDialog(),this.setupAppearence()},this.bindedElement=null,this._saveBodyStyle=document.body.style.overscrollBehaviorY,this.dragMobileSheet=(s,t,e)=>{if(!s||!t||!e)return null;let i=0;const a=e.offsetHeight+e.offsetTop,o=p=>p.clientY||(p.changedTouches&&p.changedTouches.length?p.changedTouches[0].clientY:0),n=p=>{window.addEventListener("mouseup",r),window.addEventListener("mousemove",d),window.addEventListener("touchend",r),window.addEventListener("touchmove",d),p.preventDefault(),i=o(p)-t.getBoundingClientRect().top,document.body.style.overscrollBehaviorY="none"},r=p=>{if(document.body.style.overscrollBehaviorY=this._saveBodyStyle,!this.disableClose&&o(p)>=window.innerHeight-25)m(p,window.innerHeight+50,!0);else if(window.innerHeight-o(p)>s.clientHeight/2.5){m(p,window.innerHeight-s.clientHeight);try{!this.howToRequested&&k.eventGallery(this.getRootNode().host)}catch{}}else m(p,window.innerHeight-a-35)},d=p=>{const c=o(p);this.disableClose&&window.innerHeight-c<70||c<=window.innerHeight-s.clientHeight+i||(s.style.setProperty("transition","none"),s.style.setProperty("--translateY",`translateY(${c-i}px)`))},m=(p,c,w)=>{window.removeEventListener("mouseup",r),window.removeEventListener("mousemove",d),window.removeEventListener("touchend",r),window.removeEventListener("touchmove",d),window.innerWidth>=768||(!c&&o(p)>=window.innerHeight-a?s.style.setProperty("--translateY",`translateY(calc(100vh - ${a}px))`):s.style.setProperty("--translateY",`translateY(${(c||o(p))+35}px)`),s.style.setProperty("transition","transform 500ms cubic-bezier(0.4, 0, 0, 1) 0s"),w&&(t.removeEventListener("mousedown",n),t.removeEventListener("touchstart",n),setTimeout(this._callHide,250)))};return t.addEventListener("mousedown",n),t.addEventListener("touchstart",n,{passive:!1}),m(new MouseEvent("mouseup"),window.innerHeight-a-35),{touchElement:t,listener:n}},this.setupAppearence=s=>{this.bindedElement&&(this.bindedElement.touchElement.removeEventListener("mousedown",this.bindedElement.listener),this.bindedElement.touchElement.removeEventListener("touchstart",this.bindedElement.listener)),this.bindedElement=this.dragMobileSheet(this.parentElement,this.shadowRoot?.querySelector(".dialog-body .touch-header"),this.shadowRoot?.querySelector(".dialog-body "+(s?".how-to-body":".body-header")))},this._init=()=>{this.setupAppearence(),window.addEventListener("resize",()=>this.setupAppearence())}}static get styles(){return[ti,zs]}firstUpdated(){this._init()}connectedCallback(){super.connectedCallback()}render(){return f.html`${Ls(this.props.name,this.props.description,this.props.icon,this._callInstall,this.fallback,this.howToRequested)}`}};j([(0,x.property)({type:Object}),N("design:type",Object)],_.prototype,"props",void 0),j([(0,x.property)({type:Object}),N("design:type",Object)],_.prototype,"install",void 0),j([(0,x.property)(),N("design:type",Object)],_.prototype,"hideDialog",void 0),j([(0,x.property)({type:Boolean}),N("design:type",Object)],_.prototype,"disableClose",void 0),j([(0,x.property)({type:Boolean}),N("design:type",Object)],_.prototype,"fallback",void 0),j([(0,x.property)({type:Boolean}),N("design:type",Object)],_.prototype,"howToRequested",void 0),j([(0,x.property)({type:Object}),N("design:type",Object)],_.prototype,"toggleHowTo",void 0),_=j([(0,x.customElement)("pwa-bottom-sheet")],_);const _s=_,Ms=f.css`#pwa-install-element{-webkit-user-select:none;user-select:none}#pwa-install-element .install-dialog{--text-color-normal:#212121;--background-color:#fff;--border-bottom-color:#DBDCDE;--scrollbar-background-color:#fff;font-family:Roboto,"Segoe UI",system-ui;position:fixed;display:inline-block;opacity:0;visibility:hidden;z-index:2147483001}#pwa-install-element .install-dialog.chrome{max-width:380px;width:90%;min-height:90px;margin:0 auto;right:150px;left:auto;background-color:var(--background-color);filter:drop-shadow(0 5px 15px rgba(0, 0, 0, .3));font-size:15px;color:var(--text-color-normal);border-radius:8px;top:-100px;transition:top .5s ease-in-out,opacity .8s ease-in-out,max-height .35s ease-in-out}#pwa-install-element .install-dialog.chrome.available{opacity:1;top:28px;visibility:visible}#pwa-install-element .install-dialog.chrome .dialog-body{display:grid;grid-template-columns:70px 1fr}#pwa-install-element .install-dialog.chrome.gallery pwa-gallery{transition:opacity .3s ease-in-out .2s,max-height .5s ease-in-out;max-height:70vh;opacity:1}#pwa-install-element .install-dialog.mobile{--touch-header-color:#DBDCE0;top:0;max-width:414px;width:100%;bottom:auto;left:0;right:0;transition:none;transform:translateY(100vh);border-radius:0;border-top-left-radius:15px;border-top-right-radius:15px;padding-bottom:35px}#pwa-install-element .install-dialog.mobile.available{--translateY:translateY(calc(100vh - 85px));opacity:1;top:0;visibility:visible;transform:var(--translateY)}@media(prefers-color-scheme:dark){#pwa-install-element .install-dialog{--text-color-normal:#eee;--background-color:#1e1e1e;--border-bottom-color:#404140;--scrollbar-background-color:#424242}#pwa-install-element .install-dialog.mobile{--touch-header-color:#3f403f}}@media(max-width:767px)and (min-height:495px){#pwa-install-element .install-dialog.chrome.mobile{display:inline-block}#pwa-install-element .install-dialog.chrome{display:none}}@media(min-width:768px),(max-height:495px){#pwa-install-element .install-dialog.chrome.mobile{display:none}#pwa-install-element .install-dialog.chrome{display:inline-block}}@media(max-height:420px){#pwa-install-element .install-dialog.chrome .dialog-body .description{-webkit-line-clamp:3;max-height:70px}}`,Hs=f.css`#pwa-install-element .install-dialog.apple{--text-color-normal:#333;--text-color-description:#333;--background-color:rgba(255, 255, 255, 0.8);--text-color-button:#fff;--background-color-button:#fff;--background-color-button-active:#DBDAE0;--border-bottom-color:rgba(0, 0, 0, 0.1);--icon-how-to-color:#527AFB;font-family:system-ui,-apple-system,HelveticaNeue,BlinkMacSystemFont,Roboto,"Segoe UI";max-width:380px;width:auto;margin:0 auto;right:0;left:0;font-size:15px;color:var(--text-color-normal);bottom:0;transition:transform .4s cubic-bezier(.33,1,.66,1),opacity .5s cubic-bezier(1,0,1,-2),border .35s ease-in-out;overflow:hidden;pointer-events:none;opacity:0;visibility:visible;transform:translateY(100%);will-change:opacity,transform}#pwa-install-element .install-dialog.apple.dialog-body{display:grid;grid-template-columns:95px 1fr;grid-template-rows:1fr auto;grid-template-areas:"icon description" "welcome welcome" "how-to how-to" "gallery gallery" "button button";border-radius:10px;border-bottom:1px solid transparent;background-color:var(--background-color);filter:drop-shadow(0 5px 15px rgba(0, 0, 0, .5));backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}#pwa-install-element .install-dialog.apple.dialog-body .icon{display:flex;align-items:center;grid-area:icon;border-bottom:1px solid var(--border-bottom-color)}#pwa-install-element .install-dialog.apple.dialog-body .icon .icon-image{width:64px;height:64px;margin:0 auto;border-radius:6px}#pwa-install-element .install-dialog.apple.dialog-body .close{height:26px;min-width:26px;line-height:0;margin-inline-end:7px;margin-top:7px;margin-inline-start:auto;padding:0;border-radius:50%;opacity:.5;outline:0;color:var(--text-color-normal);border:none;background-color:rgba(0,0,0,0);cursor:pointer;transition:opacity .2s ease-in-out,background-color .2s ease-in-out;grid-area:description}#pwa-install-element .install-dialog.apple.dialog-body .close svg{fill:var(--text-color-normal);width:18px}#pwa-install-element .install-dialog.apple.dialog-body .close:active,#pwa-install-element .install-dialog.apple.dialog-body .close:hover{opacity:1;background-color:var(--background-color-button)}#pwa-install-element .install-dialog.apple.dialog-body .about{display:grid;grid-template-rows:35px 60px;border-bottom:1px solid var(--border-bottom-color);grid-area:description}#pwa-install-element .install-dialog.apple.dialog-body .about .description,#pwa-install-element .install-dialog.apple.dialog-body .about .name{padding-inline-end:15px;overflow:hidden}#pwa-install-element .install-dialog.apple.dialog-body .about .name{font-weight:600;padding-top:10px;padding-inline-end:10px;line-height:22px;align-items:flex-start;display:flex}#pwa-install-element .install-dialog.apple.dialog-body .about .description{font-size:12px;line-height:15px;padding:0;margin-bottom:15px;overflow-y:auto;color:var(--text-color-description)}#pwa-install-element .install-dialog.apple.dialog-body .welcome-to-install{font-size:15px;grid-area:welcome;text-align:start;font-weight:400;padding:15px;width:auto;border-bottom:1px solid var(--border-bottom-color)}#pwa-install-element .install-dialog.apple .action-buttons{grid-area:button;grid-column-start:1;grid-column-end:3;grid-template-columns:unset;gap:unset;padding:15px}#pwa-install-element .install-dialog.apple .dialog-button{display:grid;height:50px;width:100%;line-height:50px;border-radius:8px;color:var(--text-color-normal)}#pwa-install-element .install-dialog.apple .dialog-button.button{border:none;outline:0;font-family:system-ui,-apple-system,HelveticaNeue,BlinkMacSystemFont;cursor:pointer;-webkit-user-select:none;user-select:none;font-weight:400;font-size:17px;padding:0;margin:0;background-color:var(--background-color-button)}#pwa-install-element .install-dialog.apple .dialog-button.button.install{padding:0 15px;text-align:start}#pwa-install-element .install-dialog.apple .dialog-button.button.install .button-text{opacity:0;display:flex;align-items:center;justify-content:space-between;transition:opacity .4s ease-in-out .1s;overflow:hidden}#pwa-install-element .install-dialog.apple .dialog-button.button.install .button-text>span{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}#pwa-install-element .install-dialog.apple .dialog-button.button.install .button-text>svg{flex-shrink:0;width:20px}#pwa-install-element .install-dialog.apple .dialog-button.button.install .button-text.show{opacity:1;visibility:visible;width:auto;height:auto}#pwa-install-element .install-dialog.apple .dialog-button.button.install .button-text.hide{opacity:0;position:absolute;width:0;height:0;visibility:hidden}#pwa-install-element .install-dialog.apple .dialog-button.button.gallery{display:flex;align-items:center;min-width:50px;width:auto;margin-inline-end:15px}#pwa-install-element .install-dialog.apple .dialog-button.button.gallery #pwa-gallery{margin:0 auto;width:23px;fill:var(--text-color-normal)}#pwa-install-element .install-dialog.apple .dialog-button.button:active{background-color:var(--background-color-button-active)}#pwa-install-element .install-dialog.apple .how-to-body{opacity:0;max-height:0;overflow:hidden;transition:opacity ease-in-out .5s,max-height .5s ease-in-out;grid-area:how-to}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description{display:grid;-webkit-user-select:none;user-select:none;grid-auto-columns:1fr;grid-template-rows:1fr 1fr 1fr;gap:10px;padding:15px;padding-bottom:0}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step{display:inline-flex;flex-direction:row;gap:15px;align-items:center;font-size:14px}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap{position:relative;display:inline-flex;flex-shrink:0;color:var(--icon-how-to-color);width:50px;height:50px;align-items:center;border-radius:6px}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap #pwa-add,#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap #pwa-safari,#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap #pwa-share{margin:0 auto}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap #pwa-share{margin-bottom:4px;transform:scale(.9)}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap #pwa-add{transform:scale(.8);fill:var(--text-color-normal)}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap #pwa-safari{transform:scale(.92)}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap .step-count{position:absolute;line-height:12px;top:3px;left:4px}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .step-text{font-weight:600;text-align:start}#pwa-install-element .install-dialog.apple pwa-gallery{grid-column:1/3;max-height:0;opacity:0;transition:opacity ease-in-out .5s,max-height .5s ease-in-out;overflow:hidden}#pwa-install-element .install-dialog.apple pwa-gallery+.action-buttons{display:flex}#pwa-install-element .install-dialog.apple.available{opacity:1;pointer-events:unset;transform:translateY(0);transition:transform .5s cubic-bezier(.33,1,.66,1),border .35s ease-in-out}#pwa-install-element .install-dialog.apple.gallery pwa-gallery{transition:opacity .3s ease-in-out .2s,max-height .5s ease-in-out;max-height:70vh;opacity:1}#pwa-install-element .install-dialog.apple.how-to .dialog-body{border-bottom:1px solid #e0e0e0}#pwa-install-element .install-dialog.apple.how-to .how-to-body{opacity:1;max-height:400px;overflow-y:auto;transition:opacity .3s ease-in-out .2s,max-height .5s ease-in-out}#pwa-install-element .install-dialog.apple.desktop{--text-color-normal:rgba(0, 0, 0, 0.85);--text-color-description:rgba(0, 0, 0, 0.85);--icon-how-to-color:rgba(0, 0, 0, 0.50);--background-color:rgb(246 246 246 / 85%);--background-color-button:#c6c1c6;--background-color-button-active:linear-gradient(0deg, rgba(64,121,250,1) 0%, rgba(84,144,251,1) 100%);--border-bottom-color:rgb(185 185 185);grid-template-columns:1fr;grid-template-rows:1fr auto;grid-template-areas:"icon" "description" "welcome" "how-to" "gallery" "button";gap:0;column-gap:0;padding:16px;max-width:260px;background:var(--background-color);border:1px solid var(--border-bottom-color)}#pwa-install-element .install-dialog.apple.desktop .icon{height:64px;padding-bottom:16px}#pwa-install-element .install-dialog.apple.desktop .icon .icon-image{border-radius:10px;width:52px;height:52px;filter:drop-shadow(0 1px 1px rgba(0, 0, 0, .15))}#pwa-install-element .install-dialog.apple.desktop .close{grid-area:icon;background:var(--background-color-button);opacity:1;height:20px;min-width:20px;margin-inline-end:-5px;margin-top:-5px}#pwa-install-element .install-dialog.apple.desktop .close svg{width:14px}#pwa-install-element .install-dialog.apple.desktop .about{display:flex;flex-direction:column;align-items:center}#pwa-install-element .install-dialog.apple.desktop .about .name{font-size:13px;line-height:16px;font-weight:700;padding:0}#pwa-install-element .install-dialog.apple.desktop .about .description{padding:16px 0;margin:0;padding-top:10px;border-bottom:1px solid var(--border-bottom-color);min-width:100%}#pwa-install-element .install-dialog.apple.desktop .about .description,#pwa-install-element .install-dialog.apple.desktop .welcome-to-install{text-align:center;font-size:11px;line-height:14px}#pwa-install-element .install-dialog.apple.desktop .about,#pwa-install-element .install-dialog.apple.desktop .icon,#pwa-install-element .install-dialog.apple.desktop .welcome-to-install{border:none}#pwa-install-element .install-dialog.apple.desktop .welcome-to-install{padding:0;padding-top:16px}#pwa-install-element .install-dialog.apple.desktop .action-buttons{padding:0;padding-top:16px}#pwa-install-element .install-dialog.apple.desktop .action-buttons .dialog-button.button{font-size:13px;font-weight:400;padding:6px 8px;border-radius:6px;height:auto;line-height:18px}#pwa-install-element .install-dialog.apple.desktop .action-buttons .dialog-button.button.install{color:#fff;background:var(--background-color-button-active);transition:background .3s ease-in-out .1s,color .3s ease-in-out}#pwa-install-element .install-dialog.apple.desktop .action-buttons .dialog-button.button.install svg{transform:none;width:18px}#pwa-install-element .install-dialog.apple.desktop .action-buttons .dialog-button.button.gallery{width:30px;min-width:30px;margin-inline-end:10px;background:var(--background-color-button)}#pwa-install-element .install-dialog.apple.desktop .action-buttons .dialog-button.button.gallery #pwa-gallery{width:14px;transition:transform .4s ease-in-out}#pwa-install-element .install-dialog.apple.desktop .close:active,#pwa-install-element .install-dialog.apple.desktop .dialog-button.button:active{filter:brightness(105%)}#pwa-install-element .install-dialog.apple.desktop .close:active .button-text,#pwa-install-element .install-dialog.apple.desktop .dialog-button.button:active .button-text{filter:brightness(90%)}#pwa-install-element .install-dialog.apple.desktop .how-to-body .how-to-description{padding:0;padding-top:16px;grid-template-rows:1fr 1fr}#pwa-install-element .install-dialog.apple.desktop .how-to-body .how-to-description .description-step{font-size:12px;gap:16px}#pwa-install-element .install-dialog.apple.desktop .how-to-body .how-to-description .description-step .svg-wrap{width:32px;height:32px;color:var(--icon-how-to-color)}#pwa-install-element .install-dialog.apple.desktop .how-to-body .how-to-description .description-step .svg-wrap #pwa-share{width:16px;margin-bottom:2px;transform:none}#pwa-install-element .install-dialog.apple.desktop .how-to-body .how-to-description .description-step .svg-wrap #pwa-add{width:18px;transform:none}#pwa-install-element .install-dialog.apple.desktop pwa-gallery{margin:0 -10px}#pwa-install-element .install-dialog.apple.desktop.gallery #pwa-gallery{transform:rotate(180deg)}#pwa-install-element .install-dialog.apple.desktop.how-to .action-buttons .dialog-button.button.install{color:var(--text-color-normal);background:var(--background-color-button)}@media(min-width:667px){#pwa-install-element .install-dialog.apple{top:0;bottom:unset;transform:translateY(calc(-100% - 40px));right:28px;left:auto}#pwa-install-element .install-dialog.apple.available{top:28px;bottom:auto;max-height:calc(95vh - 28px)}}@media(min-width:667px)and (max-width:1366px){#pwa-install-element .install-dialog.apple{right:max(28px,env(safe-area-inset-right,28px));left:auto}}@media(max-width:666px){#pwa-install-element .install-dialog.apple .description-step .step-text{font-size:13px}#pwa-install-element .install-dialog.apple.available{bottom:20px;max-height:calc(85vh - 20px)}#pwa-install-element .install-dialog.apple.dialog-body{filter:drop-shadow(rgba(0, 0, 0, .5) 0 0 15px)}}@media(max-width:428px){#pwa-install-element .install-dialog.apple.dialog-body{max-width:100vw;filter:drop-shadow(rgba(0, 0, 0, .5) 0 -5px 10px);border-bottom-left-radius:0;border-bottom-right-radius:0}#pwa-install-element .install-dialog.apple.dialog-body .action-buttons{padding-bottom:max(15px,env(safe-area-inset-bottom))}#pwa-install-element .install-dialog.apple.dialog-body.available{bottom:0;max-height:85vh}}@media(max-height:548px){#pwa-install-element .install-dialog.apple.dialog-body.available{overflow-y:auto;max-height:calc(90vh - 28px - env(safe-area-inset-bottom,0px))}}@media(max-height:600px){#pwa-install-element .install-dialog.apple pwa-gallery{overflow-y:auto}}@media(prefers-color-scheme:dark){#pwa-install-element .install-dialog.apple.dialog-body{--text-color-normal:#fff;--text-color-description:#9E9AA1;--background-color:rgb(25 25 25 / 90%);--background-color-button:#353535;--background-color-button-active:#454545;--border-bottom-color:#353535}#pwa-install-element .install-dialog.apple.dialog-body .close:active,#pwa-install-element .install-dialog.apple.dialog-body .dialog-button.button:active{filter:brightness(105%)}#pwa-install-element .install-dialog.apple.dialog-body .close:active .button-text,#pwa-install-element .install-dialog.apple.dialog-body .dialog-button.button:active .button-text{filter:brightness(90%)}#pwa-install-element .install-dialog.apple.dialog-body.desktop{--text-color-description:var(--text-color-normal);--icon-how-to-color:#bcb8b6;--background-color:rgb(45 45 45 / 90%);--border-bottom-color:#5b5b5b;--background-color-button:#6d6765;--background-color-button-active:linear-gradient(0deg, rgba(59,108,200,1) 0%, rgba(66,123,250,1) 100%);outline:1px solid #1c1c1c;color-scheme:dark}}`,Ps=(s,t,e,i,a,o,n,r,d,m,p,c,w,$,z,F,P=!1)=>{const lt=()=>({available:d,gallery:w}),J=!a&&r.screenshots&&r.screenshots.length;return f.html`<div id="pwa-install-element" dir="${P?"rtl":"ltr"}"><div class="install-dialog chrome ${(0,yt.classMap)(lt())}"><div class="dialog-body"><div class="icon"><img src="${n}" alt="icon" class="icon-image" draggable="false"></div><div class="about"><div class="name"><label>${s}</label>${o?"":f.html`<button class="material-button secondary close" @click='${m}'><svg viewBox="0 0 24 24"><path d="M5.3 18.7c.2.2.4.3.7.3s.5-.1.7-.3l5.3-5.3 5.3 5.3a1.08 1.08 0 0 0 .7.3 1.08 1.08 0 0 0 .7-.3c.4-.4.4-1 0-1.4L13.4 12l5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 6.7 5.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4z"/></svg></button>`}</div><div class="hostname">${location.hostname}</div></div>${t?f.html`<div class="description app-description">${t}</div>`:""} ${i?"":f.html`<hr><div class="description install-description">${e||`${T("This site has app functionality.")} ${T("Install it on your device for extensive experience and easy access.")}`}</div>`} ${J?f.html`<pwa-gallery .screenshots=${r.screenshots} .rtl="${P}"></pwa-gallery>`:""}<div class="action-buttons">${J?f.html`<button class="material-button secondary" @click='${c}'>${T(w?"Less":"More")}</button>`:""}<button class="material-button primary install" @click='${p}'>${T("Install")}</button></div></div></div><div class="install-dialog chrome mobile ${(0,yt.classMap)(lt())}"><pwa-bottom-sheet .props=${{name:s,icon:n,description:t}} .disableClose=${o} .install=${p} .hideDialog=${m} .toggleHowTo=${$} .howToRequested=${z} .fallback=${F}>${J?f.html`<pwa-gallery .screenshots=${r.screenshots} .rtl="${P}"></pwa-gallery>`:""}</pwa-bottom-sheet></div></div>`},js=(s,t,e,i,a,o,n,r,d,m,p,c,w,$,z,F=!1)=>{const P=!a&&r.screenshots&&r.screenshots.length;return f.html`<aside id="pwa-install-element" dir="${F?"rtl":"ltr"}"><article class="install-dialog apple ${(0,yt.classMap)({available:d,"how-to":w,gallery:z,desktop:c})} dialog-body"><div class="icon"><img src="${n}" alt="icon" class="icon-image" draggable="false"></div>${o?"":f.html`<button type="button" title="close" class="close" @click='${m}'><svg viewBox="0 0 24 24"><path d="M5.3 18.7c.2.2.4.3.7.3s.5-.1.7-.3l5.3-5.3 5.3 5.3a1.08 1.08 0 0 0 .7.3 1.08 1.08 0 0 0 .7-.3c.4-.4.4-1 0-1.4L13.4 12l5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 6.7 5.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4z"/></svg></button>`}<div class="about"><div class="name">${s}</div><div class="description">${t||location.hostname}</div></div>${i?"":f.html`<div class="welcome-to-install">${e||`${T("This site has app functionality.")} ${T(c?"Add it to your Dock for extensive experience and easy access.":"Add it to your Home Screen for extensive experience and easy access.")}`}</div>`}<div class="how-to-body"><div class="how-to-description">${c?"":f.html`<div class="description-step"><div class="svg-wrap"><svg id="pwa-safari" viewBox="0 0 20.283 19.932" width="24" height="24"><g fill="currentColor"><path d="M9.96 19.922c5.45 0 9.962-4.522 9.962-9.961C19.922 4.51 15.4 0 9.952 0 4.511 0 0 4.512 0 9.96c0 5.44 4.521 9.962 9.96 9.962Zm0-1.66A8.26 8.26 0 0 1 1.67 9.96c0-4.61 3.672-8.3 8.281-8.3 4.61 0 8.31 3.69 8.31 8.3 0 4.61-3.69 8.3-8.3 8.3Z"/><path d="m5.87 14.883 5.605-2.735a1.47 1.47 0 0 0 .683-.673l2.725-5.596c.312-.664-.166-1.182-.85-.84L8.447 7.764c-.302.136-.508.341-.674.673L5.03 14.043c-.312.645.196 1.152.84.84Zm4.09-3.72A1.19 1.19 0 0 1 8.77 9.97c0-.664.527-1.201 1.19-1.201a1.2 1.2 0 0 1 1.202 1.2c0 .655-.537 1.192-1.201 1.192Z"/></g></svg></div><div class="step-text">${T("1) Open in your main browser")}</div></div>`}<div class="description-step"><div class="svg-wrap"><svg id="pwa-share" width="25" height="32" viewBox="0 0 17.695 26.475"><g fill="currentColor"><path d="M17.334 10.762v9.746c0 2.012-1.025 3.027-3.066 3.027H3.066C1.026 23.535 0 22.52 0 20.508v-9.746C0 8.75 1.025 7.734 3.066 7.734h2.94v1.573h-2.92c-.977 0-1.514.527-1.514 1.543v9.57c0 1.015.537 1.543 1.514 1.543h11.152c.967 0 1.524-.527 1.524-1.543v-9.57c0-1.016-.557-1.543-1.524-1.543h-2.91V7.734h2.94c2.04 0 3.066 1.016 3.066 3.028Z"/><path d="M8.662 15.889c.42 0 .781-.352.781-.762V5.097l-.058-1.464.654.693 1.484 1.582a.698.698 0 0 0 .528.235c.4 0 .713-.293.713-.694 0-.205-.088-.361-.235-.508l-3.3-3.183c-.196-.196-.362-.264-.567-.264-.195 0-.361.069-.566.264L4.795 4.94a.681.681 0 0 0-.225.508c0 .4.293.694.703.694.186 0 .4-.079.538-.235l1.474-1.582.664-.693-.058 1.465v10.029c0 .41.351.762.771.762Z"/></g></svg></div><div class="step-text">${T("2) Press Share in Navigation bar").replace(c?"2)":"0)","1)")}</div></div><div class="description-step"><div class="svg-wrap">${c?f.html`<svg id="pwa-add" viewBox="0 0 23.389 17.979" width="25" height="25"><g fill="currentColor"><path d="M1.045 3.291v1.377h20.937V3.291Zm2.021 14.688h16.895c2.05 0 3.066-1.006 3.066-3.018V3.027C23.027 1.016 22.012 0 19.961 0H3.066C1.026 0 0 1.016 0 3.027v11.934c0 2.012 1.025 3.018 3.066 3.018Zm.02-1.573c-.977 0-1.514-.517-1.514-1.533V3.115c0-1.015.537-1.543 1.514-1.543H19.94c.967 0 1.514.528 1.514 1.543v11.758c0 1.016-.547 1.533-1.514 1.533Z"/><path d="M4.2 14.014c0 .508.35.85.868.85h12.92c.518 0 .87-.343.87-.85v-1.465c0-.508-.352-.85-.87-.85H5.068c-.517 0-.869.342-.869.85Z"/></g></svg>`:f.html`<svg id="pwa-add" width="25" height="25"><g><path d="m23.40492,1.60784c-1.32504,-1.32504 -3.19052,-1.56912 -5.59644,-1.56912l-10.65243,0c-2.33622,0 -4.2017,0.24408 -5.5267,1.56912c-1.32504,1.34243 -1.56911,3.17306 -1.56911,5.50924l0,10.5827c0,2.40596 0.22665,4.254 1.55165,5.57902c1.34246,1.32501 3.19052,1.5691 5.59647,1.5691l10.60013,0c2.40592,0 4.2714,-0.24408 5.59644,-1.5691c1.325,-1.34245 1.55166,-3.17306 1.55166,-5.57902l0,-10.51293c0,-2.40596 -0.22666,-4.25401 -1.55166,-5.57901zm-0.38355,5.21289l0,11.24518c0,1.51681 -0.20924,2.94643 -1.02865,3.78327c-0.83683,0.83685 -2.30134,1.0635 -3.81815,1.0635l-11.33234,0c-1.51681,0 -2.96386,-0.22665 -3.80073,-1.0635c-0.83683,-0.83684 -1.04607,-2.26646 -1.04607,-3.78327l0,-11.19288c0,-1.5517 0.20924,-3.01617 1.02865,-3.85304c0.83687,-0.83683 2.31876,-1.04607 3.87042,-1.04607l11.28007,0c1.51681,0 2.98132,0.22666 3.81815,1.06353c0.81941,0.81941 1.02865,2.26645 1.02865,3.78327zm-10.53039,12.08205c0.64506,0 1.02861,-0.43586 1.02861,-1.13326l0,-4.34117l4.53294,0c0.66252,0 1.13326,-0.36613 1.13326,-0.99376c0,-0.64506 -0.43586,-1.02861 -1.13326,-1.02861l-4.53294,0l0,-4.53294c0,-0.6974 -0.38355,-1.13326 -1.02861,-1.13326c-0.62763,0 -0.99376,0.45332 -0.99376,1.13326l0,4.53294l-4.51552,0c-0.69737,0 -1.15069,0.38355 -1.15069,1.02861c0,0.62763 0.48817,0.99376 1.15069,0.99376l4.51552,0l0,4.34117c0,0.66252 0.36613,1.13326 0.99376,1.13326z"/></g></svg>`}</div><div class="step-text">${T(c?"2) Press Add to Dock":'3) Scroll down to "Add to Home Screen"')}</div></div></div></div>${P&&r.screenshots?f.html`<pwa-gallery .screenshots=${r.screenshots} .theme="${c?"apple_desktop":"apple_mobile"}" .rtl="${F}"></pwa-gallery>`:""}<div class="action-buttons">${P?f.html`<button class="dialog-button button gallery" @click=${$}>${c?f.html`<svg id="pwa-gallery" viewBox="0 0 10 6"><path d="m1.102 2.21 3.169 3.24c.22.222.462.333.729.333a.94.94 0 0 0 .378-.083 1.19 1.19 0 0 0 .347-.25L8.89 2.21a.8.8 0 0 0 .246-.593.838.838 0 0 0-.118-.44.884.884 0 0 0-.312-.311.84.84 0 0 0-1.063.167L4.854 3.92h.299L2.359 1.033a.868.868 0 0 0-.642-.286.822.822 0 0 0-.43.119.935.935 0 0 0-.312.312.863.863 0 0 0-.115.44c0 .116.02.223.057.32a.898.898 0 0 0 .185.272Z"/></svg>`:f.html`<svg id="pwa-gallery" width="26" height="26" viewBox="0 0 23.538 18.022"><path d="M2.79 18.022h17.958c1.834 0 2.79-.969 2.79-2.778V2.791C23.538.969 22.582 0 20.748 0H2.791C.956 0 0 .956 0 2.79v12.454c0 1.835.956 2.778 2.79 2.778zM.879 2.83C.878 1.55 1.55.88 2.816.88h17.906c1.228 0 1.938.671 1.938 1.95v12.067L16.756 9.47c-.517-.414-.995-.685-1.615-.685-.607 0-1.085.22-1.576.672L8.927 13.59l-1.938-1.796c-.426-.387-.853-.607-1.382-.607-.504 0-.879.207-1.305.594L.878 14.986zm6.46 6.356a2.39 2.39 0 002.377-2.39c0-1.304-1.072-2.39-2.377-2.39a2.401 2.401 0 00-2.39 2.39 2.393 2.393 0 002.39 2.39z"/></svg>`}</button>`:""}<button class="dialog-button button install" @click=${p}><span class="button-text ${w?"show":"hide"}">${T("Hide Instruction")}</span><span class="button-text ${w?"hide":"show"}"><span>${T(c?"Add to Dock":"Add to Home Screen")}</span><svg viewBox="0 0 25 25"><use href="#pwa-add"></use></svg></span></button></div></article></aside>`};var S=function(s,t,e,i){var a,o=arguments.length,n=o<3?t:i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(n=(o<3?a(n):o>3?a(t,e,n):a(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n},C=function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let A=class extends f.LitElement{constructor(){super(...arguments),this.manifestUrl="/manifest.json",this.icon="",this.name="",this.description="",this.installDescription="",this.disableDescription=!1,this.disableScreenshots=!1,this.disableScreenshotsApple=!1,this.disableScreenshotsChrome=!1,this.manualApple=!1,this.manualChrome=!1,this.disableChrome=!1,this.disableClose=!1,this.disableFallback=!1,this.useLocalStorage=!1,this.externalPromptEvent=null,this.platforms=[],this.userChoiceResult="",this.isDialogHidden=k.getStorageFlag("pwa-hide-install"),this.isInstallAvailable=!1,this.isAppleMobilePlatform=!1,this.isAppleDesktopPlatform=!1,this.isAndroidFallback=!1,this.isAndroid=!1,this.isUnderStandaloneMode=!1,this.isRelatedAppsInstalled=!1,this._isRTL=!1,this._manifest=new Qe,this._howToRequested=!1,this._galleryRequested=!1,this._install={handleEvent:()=>{window.defferedPromptEvent&&(this.hideDialog(),window.defferedPromptEvent.prompt(),window.defferedPromptEvent.userChoice.then(s=>{this.userChoiceResult=s.outcome,k.eventUserChoiceResult(this,this.userChoiceResult)}).catch(s=>{k.eventInstalledFail(this)}),window.defferedPromptEvent=null)},passive:!0},this.install=()=>{this.isAppleMobilePlatform||this.isAppleDesktopPlatform?(this._howToRequested=!0,this.requestUpdate()):this._install.handleEvent()},this._hideDialog={handleEvent:()=>{this.isDialogHidden=!0,k.setStorageFlag("pwa-hide-install",!0,this.useLocalStorage),this.requestUpdate()},passive:!0},this._hideDialogUser=()=>{k.eventUserChoiceResult(this,"dismissed"),this.userChoiceResult="dismissed",this.hideDialog()},this.hideDialog=()=>{this._hideDialog.handleEvent()},this.showDialog=(s=!1)=>{this.isDialogHidden=!1,s&&(this.isInstallAvailable=!0),k.setStorageFlag("pwa-hide-install",!1,this.useLocalStorage),this.requestUpdate()},this.getInstalledRelatedApps=async()=>await k.getInstalledRelatedApps(),this._toggleHowTo={handleEvent:()=>{this._howToRequested=!this._howToRequested,this._howToRequested&&this._galleryRequested&&(this._galleryRequested=!1),this.requestUpdate(),this._howToRequested&&k.eventInstallHowTo(this)},passive:!0},this._toggleGallery={handleEvent:()=>{this._galleryRequested=!this._galleryRequested,this._howToRequested&&this._galleryRequested&&(this._howToRequested=!1),this._galleryRequested&&k.eventGallery(this),this.requestUpdate()},passive:!0},this._init=async()=>{window.defferedPromptEvent=null,await this._checkPlatform(),this._checkInstallAvailable(),"onappinstalled"in window&&window.addEventListener("appinstalled",s=>{window.defferedPromptEvent=null,this.isInstallAvailable=!1,this.requestUpdate(),k.eventInstalledSuccess(this)}),Object.assign(this,await k.fetchAndProcessManifest(this.manifestUrl,this.icon,this.name,this.description))},this._requestUpdate=()=>{this.requestUpdate()}}static get styles(){return[Ms,ti,Hs]}async _checkPlatform(){this.isUnderStandaloneMode=k.isStandalone(),this.isRelatedAppsInstalled=await k.isRelatedAppsInstalled(),this.isAppleMobilePlatform=k.isAppleMobile(),this.isAppleDesktopPlatform=k.isAppleDesktop(),this.isAndroidFallback=k.isAndroidFallback(),this.isAndroid=k.isAndroid()}_checkInstallAvailable(){if(this.isUnderStandaloneMode)return;if(this.isAppleMobilePlatform||this.isAppleDesktopPlatform)return this.manualApple&&this.hideDialog(),void setTimeout(()=>{this.isInstallAvailable=!0,this.requestUpdate(),k.eventInstallAvailable(this)},1e3);let s=!1;if(!this.disableChrome&&window.BeforeInstallPromptEvent){this.manualChrome&&this.hideDialog();const t=e=>{window.defferedPromptEvent=e,e.preventDefault(),this.platforms=e.platforms,this.isRelatedAppsInstalled?this.isInstallAvailable=!1:(this.isInstallAvailable=!0,k.eventInstallAvailable(this)),this.userChoiceResult==="accepted"&&(this.isDialogHidden=!0,k.eventInstalledSuccess(this)),s=!0,this.isAndroidFallback=!1,this.requestUpdate()};this.externalPromptEvent!=null?setTimeout(()=>t(this.externalPromptEvent),300):window.addEventListener("beforeinstallprompt",t)}if(!this.disableFallback&&this.isAndroid&&!s){if(this.isAndroidFallback)return void setTimeout(()=>{this.isInstallAvailable=!0,this.requestUpdate(),k.eventInstallAvailable(this)},1e3);if("userActivation"in navigator&&!this.isRelatedAppsInstalled){const t=navigator.userActivation,e=setInterval(()=>{(t.isActive||t.hasBeenActive)&&(s||(this.isAndroidFallback=!0,this.isInstallAvailable=!0,this.requestUpdate(),k.eventInstallAvailable(this)),clearInterval(e))},1e3);setTimeout(()=>clearInterval(e),3e4)}}}async connectedCallback(){await(async s=>{switch(s.slice(0,2)==="nb"&&(s="no"),s){case"zh":case"zh-TW":s="zh-CN"}try{Je.get(s)?await Ie(s):await Ie(s.slice(0,2))}catch{}})(navigator.language),this._isRTL=(De(),["ar","he","fa","ur"].includes(De())),this._init(),Ts.finalized,_s.finalized,super.connectedCallback()}willUpdate(s){this.externalPromptEvent&&s.has("externalPromptEvent")&&typeof this.externalPromptEvent=="object"&&this._init()}render(){return this.isAppleMobilePlatform||this.isAppleDesktopPlatform?f.html`${js(this.name,this.description,this.installDescription,this.disableDescription,this.disableScreenshots||this.disableScreenshotsApple,this.disableClose,this.icon,this._manifest,this.isInstallAvailable&&!this.isDialogHidden,this._hideDialogUser,this._toggleHowTo,this.isAppleDesktopPlatform,this._howToRequested,this._toggleGallery,this._galleryRequested,this._isRTL)}`:f.html`${Ps(this.name,this.description,this.installDescription,this.disableDescription,this.disableScreenshots||this.disableScreenshotsChrome,this.disableClose,this.icon,this._manifest,this.isInstallAvailable&&!this.isDialogHidden,this._hideDialogUser,this._install,this._toggleGallery,this._galleryRequested,this._toggleHowTo,this._howToRequested,this.isAndroidFallback,this._isRTL)}`}};S([(0,x.property)({attribute:"manifest-url"}),C("design:type",Object)],A.prototype,"manifestUrl",void 0),S([(0,x.property)(),C("design:type",Object)],A.prototype,"icon",void 0),S([(0,x.property)(),C("design:type",Object)],A.prototype,"name",void 0),S([(0,x.property)(),C("design:type",Object)],A.prototype,"description",void 0),S([(0,x.property)({attribute:"install-description"}),C("design:type",Object)],A.prototype,"installDescription",void 0),S([(0,x.property)({attribute:"disable-install-description",type:Boolean}),C("design:type",Object)],A.prototype,"disableDescription",void 0),S([(0,x.property)({attribute:"disable-screenshots",type:Boolean}),C("design:type",Object)],A.prototype,"disableScreenshots",void 0),S([(0,x.property)({attribute:"disable-screenshots-apple",type:Boolean}),C("design:type",Object)],A.prototype,"disableScreenshotsApple",void 0),S([(0,x.property)({attribute:"disable-screenshots-chrome",type:Boolean}),C("design:type",Object)],A.prototype,"disableScreenshotsChrome",void 0),S([(0,x.property)({attribute:"manual-apple",type:Boolean}),C("design:type",Object)],A.prototype,"manualApple",void 0),S([(0,x.property)({attribute:"manual-chrome",type:Boolean}),C("design:type",Object)],A.prototype,"manualChrome",void 0),S([(0,x.property)({attribute:"disable-chrome",type:Boolean}),C("design:type",Object)],A.prototype,"disableChrome",void 0),S([(0,x.property)({attribute:"disable-close",type:Boolean}),C("design:type",Object)],A.prototype,"disableClose",void 0),S([(0,x.property)({attribute:"disable-android-fallback",type:Boolean}),C("design:type",Object)],A.prototype,"disableFallback",void 0),S([(0,x.property)({attribute:"use-local-storage",type:Boolean}),C("design:type",Object)],A.prototype,"useLocalStorage",void 0),S([(0,x.state)(),C("design:type",Object)],A.prototype,"externalPromptEvent",void 0),A=S([(s,t)=>(s.addInitializer(Xi),s),(0,x.customElement)("pwa-install")],A);Fe.w;let de="x",Qt=[];function Ds(s){de=s}function b(s,t,e){Qt.push(()=>{window.customElements.define(`${de}-${s}`,t,e)})}function Is(){for(const s of Qt)s();Qt=[]}function h(){return de}function l(s){return`var(--${h()}-${s})`}function Rs(){document.addEventListener("DOMContentLoaded",function(){const s=`${h()}-theme`,t=document.querySelector(s);if(!t)throw new Error(`Not theme tag found: ${s}`);if(t.style.display!=="none")throw new Error('Theme tag needs inline style of "display: none"  for the wait functionality to work.');t&&customElements.get(s)?t.style.display="":customElements.whenDefined(s).then(()=>{t.style.display=""})})}var K=(s=>(s[s.XS=480]="XS",s[s.MD=600]="MD",s[s.LG=960]="LG",s[s.XL=1280]="XL",s))(K||{}),et=(s=>(s.LIGHT="light",s.DARK="dark",s.AUTO="auto",s))(et||{});function B(s){let t=0,e=0,i=0;return s.length===4?(t=parseInt(s[1]+s[1],16),e=parseInt(s[2]+s[2],16),i=parseInt(s[3]+s[3],16)):s.length===7&&(t=parseInt(s[1]+s[2],16),e=parseInt(s[3]+s[4],16),i=parseInt(s[5]+s[6],16)),`${t}, ${e}, ${i}`}function y(s,t){let e=!1;s[0]==="#"&&(s=s.slice(1),e=!0);const i=parseInt(s,16);let a=(i>>16)+t;a=a>255?255:a<0?0:a;let o=(i>>8&255)+t;o=o>255?255:o<0?0:o;let n=(i&255)+t;return n=n>255?255:n<0?0:n,(e?"#":"")+(16777216+(a<<16)+(o<<8)+n).toString(16).slice(1)}function Os(s,t,e,i,a){function o(n,r,d,m){const p=m?60:-60,c=B(n),w=B(r),$=B(d);return{primary:{50:y(n,100),100:y(n,70),200:y(n,50),300:y(n,30),400:y(n,20),500:n,600:y(n,-10),700:y(n,-20),800:y(n,-30),900:y(n,-50)},secondary:{50:y(n,-100),100:y(n,-70),200:y(n,-50),300:y(n,-30),400:y(n,-20),500:y(n,-10),600:y(n,-20),700:y(n,-30),800:y(n,-40),900:y(n,-50)},background:{50:y(r,100),100:y(r,70),200:y(r,50),300:y(r,30),400:y(r,20),500:r,600:y(r,-10),700:y(r,-20),800:y(r,-30),900:y(r,-50),1e3:y(r,-80)},neutral:{background:r,text:d,border:y(r,p)},rgb:{primary:c,secondary:B(y(n,-20)),background:w,text:$,border:B(y(r,p))}}}return{light:o(s,e,t,!1),dark:o(s,a,i,!0)}}function Ns(s){function t(i){const{primary:a,secondary:o,neutral:n,rgb:r,background:d}=s[i];return`
      --${i}-primary-50: ${a[50]};
      --${i}-primary-100: ${a[100]};
      --${i}-primary-200: ${a[200]};
      --${i}-primary-300: ${a[300]};
      --${i}-primary-400: ${a[400]};
      --${i}-primary-500: ${a[500]};
      --${i}-primary-600: ${a[600]};
      --${i}-primary-700: ${a[700]};
      --${i}-primary-800: ${a[800]};
      --${i}-primary-900: ${a[900]};


      --${i}-primary-100_rgb: ${B(a[100])};
      --${i}-primary-900_rgb: ${B(a[900])};

      --${i}-secondary-50: ${o[50]};
      --${i}-secondary-100: ${o[100]};
      --${i}-secondary-200: ${o[200]};
      --${i}-secondary-300: ${o[300]};
      --${i}-secondary-400: ${o[400]};
      --${i}-secondary-500: ${o[500]};
      --${i}-secondary-600: ${o[600]};
      --${i}-secondary-700: ${o[700]};
      --${i}-secondary-800: ${o[800]};
      --${i}-secondary-900: ${o[900]};

      --${i}-background-50: ${d[50]};
      --${i}-background-100: ${d[100]};
      --${i}-background-200: ${d[200]};
      --${i}-background-300: ${d[300]};
      --${i}-background-400: ${d[400]};
      --${i}-background-500: ${d[500]};
      --${i}-background-600: ${d[600]};
      --${i}-background-700: ${d[700]};
      --${i}-background-800: ${d[800]};
      --${i}-background-900: ${d[900]};
      --${i}-background-1000: ${d[1e3]};

      --${i}-background: ${n.background};
      --${i}-text: ${n.text};
      --${i}-border: ${n.border};

      --${i}-primary_rgb: ${r.primary};
      --${i}-secondary_rgb: ${r.secondary};
      --${i}-background_rgb: ${r.background};
      --${i}-text_rgb: ${r.text};
      --${i}-border_rgb: ${r.border};
    `}function e(i){const a=i==="light"?"dark":"light";return`
      --semantic-stroke-default: var(--${i}-border);
      --semantic-text-default: var(--${i}-text);
      --semantic-text-inverted: var(--${a}-text);
      --semantic-background-default: var(--${i}-background-500);
      --semantic-background-inverted: var(--${a}-background-500);
      --semantic-stroke-highlight: var(--${i}-primary-500);
      --semantic-text-highlight: var(--${i}-primary-500);
      --semantic-background-highlight: var(--${i}-primary-500);

      --semantic-stroke-default_rgb: var(--${i}-border_rgb);
      --semantic-text-default_rgb: var(--${i}-text_rgb);
      --semantic-text-inverted_rgb: var(--${a}-text_rgb);
      --semantic-background-default_rgb: var(--${i}-background_rgb);
      --semantic-background-inverted_rgb: var(--${a}-background_rgb);
      --semantic-stroke-highlight_rgb: var(--${i}-primary_rgb);
      --semantic-text-highlight_rgb: var(--${i}-primary_rgb);
      --semantic-background-highlight_rgb: var(--${i}-primary_rgb);

      --semantic-background-alternate: ${i==="dark"?`var(--${i}-background-300)`:`var(--${i}-background-700)`};
          
      --semantic-text-hover: ${i==="dark"?`var(--${i}-primary-100)`:`var(--${i}-primary-900)`};
      
      --semantic-stroke-hover: ${i==="dark"?`var(--${i}-primary-100)`:`var(--${i}-primary-900)`};

            
      --semantic-stroke-light: ${i==="dark"?`var(--${i}-background-200)`:`var(--${i}-background-800)`};

      --semantic-background-hover: ${i==="dark"?`var(--${i}-primary-100)`:`var(--${i}-primary-900)`};

       --semantic-text-hover_rgb: ${i==="dark"?`var(--${i}-primary-100_rgb)`:`var(--${i}-primary-900_rgb)`};

      --semantic-stroke-hover_rgb: ${i==="dark"?`var(--${i}-primary-100_rgb)`:`var(--${i}-primary-900_rgb)`};

      --semantic-background-hover_rgb: ${i==="dark"?`var(--${i}-primary-100_rgb)`:`var(--${i}-primary-900_rgb)`};
      
      
    `}return`
    :host {
      ${t("light")}
      ${t("dark")}
    }
    
    @media (prefers-color-scheme: dark) {
      :host([theme='${et.AUTO}']) {
        ${e("dark")}
      }
    }
    
    @media (prefers-color-scheme: light) {
      :host([theme='${et.AUTO}']) {
        ${e("light")}
      }
    }

    :host([theme='${et.LIGHT}']) {
      ${e("light")}
    }

    :host([theme='${et.DARK}']) {
      ${e("dark")}
    }
  `}class qs extends HTMLElement{constructor(){super(),this.styleElement=void 0,this.defaultStyles={fontSizeTitle:"4.25rem",fontSizeXxl:"2rem",fontSizeXl:"1.75rem",fontSizeLg:"1.5rem",fontSizeMd:"1.125rem",fontSizeSm:"0.975rem",fontSizeXs:"0.85rem",fontSizeDefault:"1rem",fontFamilyDefault:"sans-serif",fontFamilyHeading:"arial",colorPrimary:"#ed1c24",colorTextLight:"#000000",colorTextDark:"#ffffff",colorBackgroundLight:"#ffffff",colorBackgroundDark:"#000000",cardMediaSizeSmall:"24px",cardMediaSizeMedium:"64px",cardMediaSizeLarge:"128px",appBarHeight:"64px",bottomNavigationHeight:"72px",bottomNavigationOffset:"0px"},this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("slot");this.shadow.append(t),this.updateStyles()}static get observedAttributes(){return["font-family-heading","font-family-default","font-size-title","font-size-xxl","font-size-xl","font-size-lg","font-size-md","font-size-sm","font-size-default","color-primary","color-text-dark","color-background-dark","color-text-light","color-background-light","card-media-size-sm","card-media-size-md","card-media-size-lg","app-bar-height","bottom-navigation-height"]}attributeChangedCallback(){this.updateStyles()}updateStyles(){const t=this.getAttribute("font-size-title")||this.defaultStyles.fontSizeTitle,e=this.getAttribute("font-size-xxl")||this.defaultStyles.fontSizeXxl,i=this.getAttribute("font-size-xl")||this.defaultStyles.fontSizeXl,a=this.getAttribute("font-size-lg")||this.defaultStyles.fontSizeLg,o=this.getAttribute("font-size-md")||this.defaultStyles.fontSizeMd,n=this.getAttribute("font-size-sm")||this.defaultStyles.fontSizeSm,r=this.getAttribute("font-size-xs")||this.defaultStyles.fontSizeXs,d=this.getAttribute("font-size-default")||this.defaultStyles.fontSizeDefault,m=this.getAttribute("font-family-default")||this.defaultStyles.fontFamilyDefault,p=this.getAttribute("font-family-heading")||this.defaultStyles.fontFamilyHeading,c=this.getAttribute("color-primary")||this.defaultStyles.colorPrimary,w=this.getAttribute("color-text-light")||this.defaultStyles.colorTextLight,$=this.getAttribute("color-text-dark")||this.defaultStyles.colorTextDark,z=this.getAttribute("color-background-light")||this.defaultStyles.colorBackgroundLight,F=this.getAttribute("color-background-dark")||this.defaultStyles.colorBackgroundDark,P=this.getAttribute("card-media-size-lg")||this.defaultStyles.cardMediaSizeLarge,lt=this.getAttribute("card-media-size-md")||this.defaultStyles.cardMediaSizeMedium,J=this.getAttribute("card-media-size-sm")||this.defaultStyles.cardMediaSizeSmall,hi=this.getAttribute("app-bar-height")||this.defaultStyles.appBarHeight,pi=this.getAttribute("bottom-navigation-height")||this.defaultStyles.bottomNavigationHeight,ui=this.getAttribute("bottom-navigation-offset")||this.defaultStyles.bottomNavigationOffset,gi=Os(c,w,z,$,F),bi=Ns(gi);this.styleElement&&this.shadow.removeChild(this.styleElement),this.styleElement=document.createElement("style"),this.styleElement.textContent=`
      :host {
        display: flex;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        height: 100%;
        width: 100%;

        --${h()}-shadow-light: 0 2px 4px rgba(0,0,0,0.05);
        --${h()}-shadow-dark: 0 2px 4px rgba(0,0,0,0.3);

        --${h()}-font-family-default: ${m};
        --${h()}-font-family-heading: ${p};
        --${h()}-font-size-default: ${d};
        --${h()}-font-size-title: ${t};
        --${h()}-font-size-xxl: ${e};
        --${h()}-font-size-xl: ${i};
        --${h()}-font-size-lg: ${a};
        --${h()}-font-size-md: ${o};
        --${h()}-font-size-sm: ${n};
        --${h()}-font-size-xs: ${r};

        --${h()}-border-xs: 4px;
        --${h()}-border-sm: 15px;

        /* Spacing Variables */
        --${h()}-spacing-xs: 4px; 
        --${h()}-spacing-sm: 8px;    
        --${h()}-spacing-md: 16px;  
        --${h()}-spacing-lg: 20px;     
        --${h()}-spacing-xl: 24px;   
        --${h()}-spacing-2xl: 28px;   
        --${h()}-spacing-3xl: 32px;  
        --${h()}-spacing-4xl: 48px;    
        --${h()}-spacing-5xl: 56px;  

        /* Media Sizes */
        --${h()}-card-media-size-sm: ${J};
        --${h()}-card-media-size-md: ${lt};
        --${h()}-card-media-size-lg: ${P};

        --${h()}-app-bar-height: ${hi};
        --${h()}-bottom-navigation-height: ${pi};
        --${h()}-bottom-navigation-offset: ${ui};
      }

      @media (min-width: ${K.MD}px) {
        :host {
          /* Desktop Spacing Variables in rem */
          --${h()}-spacing-xs: 8px;    
          --${h()}-spacing-sm: 16px;    
          --${h()}-spacing-md: 24px;   
          --${h()}-spacing-lg: 32px;   
          --${h()}-spacing-xl: 40px;   
          --${h()}-spacing-2xl: 48px;   
          --${h()}-spacing-3xl: 56px;  
          --${h()}-spacing-4xl: 64px;   
          --${h()}-spacing-5xl: 72px;   
        }
      }

      ${bi}
    `,this.shadow.appendChild(this.styleElement)}}b("theme",qs);async function Bs(){return window.matchMedia("(display-mode: standalone)").matches||"standalone"in window.navigator&&window.navigator.standalone?!0:"getInstalledRelatedApps"in navigator&&typeof navigator.getInstalledRelatedApps=="function"?(await navigator.getInstalledRelatedApps()).length>0:!1}class Us extends HTMLElement{constructor(){super(),this.installPromptEvent=null;const t=this.attachShadow({mode:"open"}),e=document.createElement("style");(async()=>{if(await Bs())return;e.textContent=`
      :host {
        display: block;
        background-color: var(--semantic-background-default);
        color: var(--semantic-text-default);
        font-family: ${l("font-family-default")};
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i);const a=document.querySelector(`${h()}-container`);a&&(a.style.display="none");const o=this.querySelector("#install");window.addEventListener("beforeinstallprompt",r=>{r.preventDefault(),this.installPromptEvent=r,o&&(o.style.display="block",o.addEventListener("click",d=>{d.stopPropagation(),this.installPromptEvent&&(this.installPromptEvent.prompt(),this.installPromptEvent.userChoice.then(m=>{if(m.outcome==="accepted")console.log("User accepted the A2HS prompt"),this.showAppContainer();else{console.log("User dismissed the A2HS prompt"),window.location.reload();return}this.installPromptEvent=null,this.showAppContainer()}))}))});const n=this.querySelector("#no-install");n&&n.addEventListener("click",()=>{this.showAppContainer()})})()}showAppContainer(){const t=document.querySelector(`${h()}-container`);if(t)t.style.display="block",this.style.display="none";else throw new Error("No app container found")}}b("install",Us);var I=(s=>(s[s.OVERLAY=9999]="OVERLAY",s[s.SNACKBAR=8888]="SNACKBAR",s[s.TOP=10]="TOP",s[s.DEFAULT=0]="DEFAULT",s[s.BOTTOM=-10]="BOTTOM",s))(I||{});class Gs extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: block;
        width: 100%;
        position: relative; /* Ensure positioning context for inner divs */
        z-index: ${I.TOP};
      }

      /* Fixed/Sticky bar styles */
      .app-bar {
        width: 100%;
        background-color: var(--semantic-background-highlight);
        color: var(--semantic-text-inverted);
        padding: ${l("spacing-sm")};
        box-sizing: border-box;
        position: var(--app-bar-position, sticky);
        top: 0;
        left: 0;
        box-shadow: ${l("shadow-dark")};
        transition: top 0.3s ease-in-out;
        height: ${l("app-bar-height")};
        display: flex;
        align-items: center;
      }

      .spacer {
        display: none;
        height: ${l("app-bar-height")};
      }
      
      :host([fixed]) .spacer {
        display: block;
      }

      :host([fixed]) .app-bar {
        position: fixed;
        z-index: ${I.TOP};
      }

      :host([static]) .app-bar {
        position: static;
      }
    `,t.appendChild(e);const i=document.createElement("div");i.className="spacer";const a=document.createElement("div");a.className="app-bar";const o=document.createElement("slot");a.appendChild(o),t.appendChild(i),t.appendChild(a)}static get observedAttributes(){return["fixed","static"]}}b("app-bar",Gs);class Vs extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                align-items: center;
                border: 1px solid var(--semantic-stroke-default);
                border-radius: ${l("border-sm")};
                display: flex;
                justify-content: center;
                text-align: center;
                text-decoration: none;
                text-overflow: ellipsis;
                transition: background-color .1s, color .1s, border-color .1s;
                white-space: nowrap;
                width: max-content;
                height: max-content;
            }

            :host(:hover),
            :host([active]) {
                color: var(--semantic-text-inverted);
                background-color: var(--semantic-stroke-highlight);
            }
            
            :host([size="small"]) {
                font-size: ${l("font-size-sm")};
                padding-block: ${l("spacing-xs")};
                padding-inline: ${l("spacing-sm")};
            }
            
            :host([size="large"]) {
                font-size: ${l("font-size-md")};
                padding-block: ${l("spacing-sm")};
                padding-inline: ${l("spacing-md")};
            }
        `,t.appendChild(e),this.chipContent=document.createElement("div"),t.appendChild(this.chipContent),this.updateContent(),this.hasAttribute("size")||this.setAttribute("size","small")}static get observedAttributes(){return["value","active","size"]}attributeChangedCallback(t,e,i){t==="value"&&e!==i?this.updateContent():t==="active"&&e!==i?this.updateActiveState():t==="size"&&e!==i&&this.updateSize()}updateContent(){this.chipContent.textContent=this.value}updateActiveState(){this.active?this.setAttribute("active",""):this.removeAttribute("active")}updateSize(){this.size?this.setAttribute("size",this.size):this.removeAttribute("size")}set active(t){t?this.setAttribute("active",""):this.removeAttribute("active")}get active(){return this.hasAttribute("active")}set value(t){this.setAttribute("value",t)}get value(){return this.getAttribute("value")||""}set size(t){this.setAttribute("size",t)}get size(){return this.getAttribute("size")||"small"}}b("chip",Vs);class ei extends Error{constructor(t,e){super(`${t.tagName.toLowerCase()} can only have the following direct children: ${e.join(", ")}`)}}class Fs extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
              width: 100%;
            }
            
            :host table {
                width: 100%;
                border: 0;
                border-spacing: 0;
            }

            :host table th {
                border-bottom: 2px solid rgba(var(--semantic-stroke-highlight_rgb), 0.4);
                color: var(--semantic-text-default);
            }

            :host table th, :host table td  {
                text-align: left;
                border-collapse: collapse;
                padding: ${l("spacing-xs")};
                border-right: 1px solid var(--semantic-stroke-default);
                color: var(--semantic-text-default);
            }

            :host table > tbody > tr > td {
                border-bottom: 1px solid var(--semantic-stroke-default);
                color: var(--semantic-text-default);
            }

            :host table tbody > tr:hover {
                background-color: rgba(var(--semantic-stroke-highlight_rgb), 0.05);
            }

            :host table tr:last-child td {
                border-bottom: 0;
            }

            :host table tr td:last-child, table tr th:last-child {
                border-right: 0;
            }
        `,this.setAttribute("stretch-horizontal",""),t.appendChild(e);const i=this.querySelector("table");if(!i)throw new ei(this,["table"]);t.appendChild(i)}}b("table",Fs);const ii=class it extends HTMLElement{constructor(){super(),this.isTooltipVisible=!1,this.repositionScheduled=!1;const t=this.attachShadow({mode:"open"});this.tooltip=document.createElement("div"),this.tooltip.classList.add("tooltip");const e=document.createElement("style");e.textContent=`
      .tooltip {
        position: absolute;
        background-color: rgba(var(--semantic-background-inverted_rgb), 0.9);
        color: var(--semantic-text-inverted);
        padding: ${l("spacing-sm")};
        border-radius: ${l("border-xs")};
        font-size: ${l("font-size-small")};
        z-index: ${I.OVERLAY};
        white-space: nowrap;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
        pointer-events: none;
        transform: translateY(-100%);
      }

      .tooltip[visible="true"] {
        visibility: visible;
        opacity: 1;
      }
    `,t.append(e,this.tooltip);const i=document.createElement("slot");t.appendChild(i),this.addEventListener("mouseenter",this.showTooltip.bind(this)),this.addEventListener("mouseleave",this.hideTooltip.bind(this)),this.addEventListener("touchstart",this.toggleTooltip.bind(this)),document.addEventListener("click",this.handleOutsideClick.bind(this)),window.addEventListener("scroll",this.scheduleReposition.bind(this))}connectedCallback(){this.tooltip.textContent=this.getAttribute("text")||"Tooltip content"}disconnectedCallback(){document.removeEventListener("click",this.handleOutsideClick.bind(this)),window.removeEventListener("scroll",this.scheduleReposition.bind(this))}showTooltip(){this.isTooltipVisible||(it.activeTooltips.forEach(t=>{t!==this&&t.isTooltipVisible&&t.hideTooltip()}),it.activeTooltips.push(this),this.tooltip.textContent=this.getAttribute("text")||"Tooltip content",this.repositionTooltip(),this.tooltip.setAttribute("visible","true"),this.isTooltipVisible=!0,this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=window.setTimeout(()=>this.hideTooltip(),3e3))}hideTooltip(){this.tooltip.removeAttribute("visible"),this.isTooltipVisible=!1;const t=it.activeTooltips.indexOf(this);t!==-1&&it.activeTooltips.splice(t,1),clearTimeout(this.touchTimeout)}toggleTooltip(t){t.preventDefault(),this.isTooltipVisible?this.hideTooltip():this.showTooltip()}handleOutsideClick(t){this.contains(t.target)||this.hideTooltip()}scheduleReposition(){this.repositionScheduled||(this.repositionScheduled=!0,requestAnimationFrame(()=>{this.repositionTooltip(),this.repositionScheduled=!1}))}repositionTooltip(){if(!this.isTooltipVisible)return;const t=this.getBoundingClientRect(),e=this.tooltip.getBoundingClientRect(),i=this.closest("div[style*='overflow']")||document.documentElement,a=i.getBoundingClientRect(),o=i.scrollTop,n=i.scrollLeft;let r=t.top+o-a.top-e.height-8,d=t.left+n-a.left+(t.width-e.width)/2;r<o&&(r=t.bottom+o-a.top+8),d<n?d=t.left+n-a.left+t.width+8:d+e.width>a.width+n&&(d=t.left+n-a.left-e.width-8),r+e.height>a.height+o&&(r=t.top+o-a.top-e.height-8),this.tooltip.style.left=`${d}px`,this.tooltip.style.top=`${r}px`}};ii.activeTooltips=[];let Ws=ii;b("tooltip",Ws);function R(){return`
        :host([stretch-vertical]) {
            height: 100%;
        }
        
        :host([stretch-horizontal]) {
            width: 100%;
        }
    `}class ce extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: flex;
                flex-direction: column;
                width: max-content;
            }
            
            ${R()}

            :host .container {
                position: relative;
                display: flex;
                height: 2em;
                overflow: hidden;
            }

            :host .container::after {
                --icon-offset: 6px;
                content: '\\25BC';
                position: absolute;
                top: 0;
                right: 0;
                padding: var(--icon-offset);
                background: rgba(var(--semantic-background-inverted_rgb), 0.1);
                transition: .25s all ease;
                pointer-events: none;
            }

            :host .container:hover::after {
                color: var(--semantic-text-highlight);
            }
            
            :host select>option {
                background: var(--semantic-background-default);
            }

            :host select {
                --select-offset: calc(${l("spacing-sm")} + 26px);
                /* Reset Select */
                appearance: none;
                outline: 10px red;
                border: 0;
                box-shadow: none;
                width: 100%;
                font-size: 1em;

                /* Personalize */
                flex: 1;
                padding-inline: ${l("spacing-md")};
                padding-block: 0;
                color: var(--text-default);
                background: rgba(var(--semantic-background-inverted_rgb), 0.1);
                background-image: none;
                cursor: pointer;

                padding-right: var(--select-offset);
            }
        `,this.select=this.querySelector("select");const i=document.createElement("div");if(i.classList.add("container"),!this.select)throw new ei(this,["select"]);i.append(this.select),t.append(e,i),this.select.addEventListener("change",()=>{this.dispatchSelectChange()})}dispatchSelectChange(){const t=new CustomEvent("select-change",{detail:{value:this.select.value},bubbles:!0,composed:!0});this.dispatchEvent(t)}static get observedAttributes(){return["selected"]}attributeChangedCallback(t,e,i){ce.observedAttributes.includes(t)&&e!==i&&t==="selected"&&(this.select.value=i||"",this.dispatchSelectChange())}}b("select",ce);class si extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: flex;
                flex-direction: column;
                padding: ${l("spacing-sm")};
                flex: 1;
            }
        `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i)}}b("card-content",si);class Ys extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                box-sizing: border-box;
                border: 1px solid var(--semantic-stroke-default);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                max-width: 100%;
                box-shadow: ${l("shadow-light")};
                height: 100%; /* Ensure the card takes full height */
            }

            card-content {
                flex: 1; /* Allows the content to grow and fill space */
            }
            
            card-media {
                display: block;
                width: 100%;
            }
        `,t.appendChild(e);const i=this.querySelector(`${h()}-card-content`)||this.querySelector(`${h()}-card-media`)||this.querySelector(`${h()}-card-footer`),a=document.createElement("slot");if(i)t.appendChild(a);else{const o=new si;o.append(a),t.append(o)}}}b("card",Ys);class he extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});this.styleElement=document.createElement("style"),this.styleElement.textContent=`
            :host {
                display: block;
                width: 100%;
                position: relative;
                overflow: hidden;
            }
            
            img, video {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            .small {
                height: ${l("card-media-size-sm")};
            }
            .medium {
                height: ${l("card-media-size-md")};
            }
            .large {
                height: ${l("card-media-size-lg")};
            }
        `,t.appendChild(this.styleElement),this.mediaElement=document.createElement("div"),this.mediaElement.style.position="relative",this.mediaElement.style.width="100%",this.mediaElement.style.height="100%",this.mediaElement.style.display="flex",t.appendChild(this.mediaElement)}static get observedAttributes(){return["src","size"]}attributeChangedCallback(t,e,i){e!==i&&he.observedAttributes.includes(t)&&this.updateMedia()}updateMedia(){const t=this.getAttribute("src"),e=this.getAttribute("size")||void 0,i=this.detectMediaType(t);if(t&&i){this.mediaElement.innerHTML="";const a=i==="image"?document.createElement("img"):document.createElement("video");if(a.src=t,e&&(a.className=e),i==="video"){const o=a;o.muted=!0,o.controls=!1,o.autoplay=!0,o.loop=!0,o.playsInline=!0,this.mediaElement.appendChild(o)}else this.mediaElement.appendChild(a)}}detectMediaType(t){var e;if(!t)return null;const i=(e=t.split(".").pop())==null?void 0:e.toLowerCase();if(i){const a=["jpg","jpeg","png","gif","bmp","webp"],o=["mp4","webm","ogg"];if(a.includes(i))return"image";if(o.includes(i))return"video"}return"image"}get src(){return this.getAttribute("src")}set src(t){t?this.setAttribute("src",t):this.removeAttribute("src")}get size(){return this.getAttribute("size")}set size(t){t?this.setAttribute("size",t):this.removeAttribute("size")}}b("card-media",he);class Zs extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding: ${l("spacing-sm")};
                border-top: 1px solid var(--semantic-stroke-default);
                background-color: var(--card-footer-background, transparent);
                flex-shrink: 0; /* Prevent footer from shrinking */
            }
        `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i)}}b("card-footer",Zs);class Ks extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: inline-block;
                width: 50px;
                height: 50px;
                overflow: hidden;
            }

            :host([size="small"]) {
                width: 30px;
                height: 30px;
            }

            :host([size="large"]) {
                width: 70px;
                height: 70px;
            }

            svg {
                width: 100%;
                height: 100%;
                animation: rotate 2s linear infinite;
            }

            circle {
                fill: none;
                stroke-width: 4;
                stroke: var(--semantic-stroke-highlight);
                stroke-dasharray: 150, 200;
                stroke-dashoffset: 0;
                animation: dash 1.5s ease-in-out infinite;
            }

            @keyframes rotate {
                100% {
                    transform: rotate(360deg);
                }
            }

            @keyframes dash {
                0% {
                    stroke-dasharray: 1, 200;
                    stroke-dashoffset: 0;
                }
                50% {
                    stroke-dasharray: 100, 200;
                    stroke-dashoffset: -50;
                }
                100% {
                    stroke-dasharray: 1, 200;
                    stroke-dashoffset: -150;
                }
            }
        `;const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox","0 0 50 50");const a=document.createElementNS("http://www.w3.org/2000/svg","circle");a.setAttribute("cx","25"),a.setAttribute("cy","25"),a.setAttribute("r","20"),i.appendChild(a),t.appendChild(e),t.appendChild(i)}static get observedAttributes(){return["size","color"]}attributeChangedCallback(t,e,i){t==="size"&&e!==i&&this.updateSize(),t==="color"&&e!==i&&this.updateColor()}updateSize(){this.setAttribute("size",this.size)}updateColor(){this.style.setProperty("--spinner-color",this.color)}set size(t){this.setAttribute("size",t)}get size(){return this.getAttribute("size")||"small"}set color(t){this.setAttribute("color",t)}get color(){return this.getAttribute("color")||"#000"}}b("spinner",Ks);class Xs extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            ::slotted(a) {
                color: var(--semantic-text-highlight);
                text-decoration: none;
            }
            
            ::slotted(a:hover) {
                color: var(--semantic-text-highlight);
                text-decoration: underline;
            }
            
            ::slotted(a:active) {
                color: var(--semantic-text-highlight);
                text-decoration: none;
            }
            
            ::slotted(a:visited) {
                color: var(--semantic-text-highlight);
                text-decoration: none;
            }
        `,t.appendChild(e);const i=document.createElement("slot");t.append(i)}}b("text-link",Xs);class Js extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            ::slotted(a) {
                color: inherit;
                text-decoration: inherit;
                font-weight: inherit;
            }
            
            ::slotted(a:hover) {
                color: inherit;
                text-decoration: inherit;
                font-weight: inherit;
            }
            
            ::slotted(a:active) {
                color: inherit;
                text-decoration: inherit;
                font-weight: inherit;
            }
            
            ::slotted(a:visited) {
                color: inherit;
                text-decoration: inherit;
                font-weight: inherit;
            }
        `,t.appendChild(e);const i=document.createElement("slot");t.append(i)}}b("bare-link",Js);class rt extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`          
            :host {
              display: inline;
            }
            
            /* General reset for slotted elements */
            ::slotted(h1), ::slotted(h2), ::slotted(h3), ::slotted(h4), ::slotted(h5), ::slotted(h6),
            ::slotted(p) {
              margin: 0;
              padding: 0;
              color: inherit;
              text-align: inherit;
            }

            :host([display="title"]) ::slotted(*), :host([display="title"]) {
                font-family: ${l("font-family-heading")};
                font-size: ${l("font-size-title")}; /* Large font size */
                font-weight: 400;
                line-height: 1.2;
                letter-spacing: 0em;
            }
            
            /* Heading 1 */
            :host([display="h1"]) ::slotted(*), :host([display="h1"]) {
                font-family: ${l("font-family-heading")};
                font-size: ${l("font-size-xxl")}; /* Large font size */
                font-weight: 400;
                line-height: 1.167;
                letter-spacing: -0.01562em;
            }
            
            /* Heading 2 */
            :host([display="h2"]) ::slotted(*), :host([display="h2"]) {
                font-family: ${l("font-family-heading")};
                font-size: ${l("font-size-xl")}; /* Extra-large font size */
                font-weight: 300;
                line-height: 1.2;
                letter-spacing: -0.00833em;
            }
            
            /* Heading 3 */
            :host([display="h3"]) ::slotted(*), :host([display="h3"]) {
                font-family: ${l("font-family-heading")};
                font-size: ${l("font-size-lg")}; /* Large font size */
                font-weight: 400;
                line-height: 1.167;
                letter-spacing: 0em;
            }
            
            /* Heading 4 */
            :host([display="h4"]) ::slotted(*), :host([display="h4"]) {
                font-family: ${l("font-family-heading")};
                font-size: ${l("font-size-md")}; /* Medium font size */
                font-weight: 400;
                line-height: 1.235;
                letter-spacing: 0.00735em;
            }
            
            /* Heading 5 */
            :host([display="h5"]) ::slotted(*), :host([display="h5"]) {
                font-family: ${l("font-family-heading")};
                font-size: ${l("font-size-sm")}; /* Small font size */
                font-weight: 400;
                line-height: 1.334;
                letter-spacing: 0em;
            }
            
            /* Heading 6 */
            :host([display="h6"]) ::slotted(*), :host([display="h6"]) {
                font-family: ${l("font-family-heading")};
                font-size: ${l("font-size-xs")}; /* Small font size */
                font-weight: 500;
                line-height: 1.6;
                letter-spacing: 0.0075em;
            }
            
            /* Subtitle 1 */
            :host([display="subtitle1"]) ::slotted(*), :host([display="subtitle1"]) {
                font-family: ${l("font-family-default")};
                font-size: ${l("font-size-md")}; /* Medium font size */
                font-weight: 400;
                line-height: 1.75;
                letter-spacing: 0.00938em;
            }
            
            /* Subtitle 2 */
            :host([display="subtitle2"]) ::slotted(*), :host([display="subtitle2"]) {
                font-family: ${l("font-family-default")};
                font-size: ${l("font-size-sm")}; /* Small font size */
                font-weight: 500;
                line-height: 1.57;
                letter-spacing: 0.00714em;
            }
            
            /* Body 1 */
            :host([display="body1"]) ::slotted(*), :host([display="body1"]) {
                font-family: ${l("font-family-default")};
                font-size: ${l("font-size-default")}; /* Medium font size */
                font-weight: 400;
                line-height: 1.5;
                letter-spacing: 0.00938em;
            }
            
            /* Body 2 */
            :host([display="body2"]) ::slotted(*), :host([display="body2"]) {
                font-family: ${l("font-family-default")};
                font-size: ${l("font-size-sm")}; /* Small font size */
                font-weight: 400;
                line-height: 1.43;
                letter-spacing: 0.01071em;
            }
            
            /* Button */
            :host([display="button"]) ::slotted(*), :host([display="button"]) {
                font-family: ${l("font-family-default")};
                font-size: ${l("font-size-sm")}; /* Small font size */
                font-weight: 500;
                line-height: 1.75;
                letter-spacing: 0.02857em;
                text-transform: uppercase;
            }
            
            /* Caption */
            :host([display="caption"]) ::slotted(*), :host([display="caption"]) {
                font-family: ${l("font-family-default")};
                font-size: ${l("font-size-sm")}; /* Extra-small font size */
                font-weight: 400;
                line-height: 1.66;
                letter-spacing: 0.03333em;
            }
            
            /* Overline */
            :host([display="overline"]) ::slotted(*), :host([display="overline"]) {
                font-family: ${l("font-family-default")};
                font-size: ${l("font-size-xs")}; /* Extra-small font size */
                font-weight: 400;
                line-height: 2.66;
                letter-spacing: 0.08333em;
                text-transform: uppercase;
            }
        `,this.shadow.appendChild(t);const e=document.createElement("slot");this.shadow.appendChild(e)}set display(t){this.setAttribute("display",t)}get display(){return this.getAttribute("display")||""}static get observedAttributes(){return["display"]}}b("typography",rt);class Qs extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: block;
                background-color: var(--semantic-background-default);
                color: var(--semantic-text-default);
                font-family: ${l("font-family-default")};
                width: 100%;
            }
        `,t.appendChild(e);const i=document.createElement("slot");t.append(i)}}b("container",Qs);class pe extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});this.styleElement=document.createElement("style"),t.appendChild(this.styleElement);const e=document.createElement("slot");t.append(e),this.updateStyles()}static get observedAttributes(){return["xs","md","lg","xl"]}attributeChangedCallback(t,e,i){pe.observedAttributes.includes(t)&&e!==i&&this.updateStyles()}updateStyles(){const t=this.getAttribute("xs")||"1",e=this.getAttribute("md")||"1",i=this.getAttribute("lg")||"1",a=this.getAttribute("xl")||"1";this.styleElement.textContent=`
            :host {
                width: 100%;
                display: grid;
                gap: ${l("spacing-md")};
                grid-template-columns: repeat(${t}, 1fr);
            }

            @media (min-width: ${K.XS}px) {
                :host([xs]) {
                    grid-template-columns: repeat(${t}, 1fr);
                }
            }

            @media (min-width: ${K.MD}px) {
                :host([md]) {
                    grid-template-columns: repeat(${e}, 1fr);
                }
            }

            @media (min-width: ${K.LG}px) {
                :host([lg]) {
                    grid-template-columns: repeat(${i}, 1fr);
                }
            }

            @media (min-width: ${K.XL}px) {
                :host([xl]) {
                    grid-template-columns: repeat(${a}, 1fr);
                }
            }
        `}get xs(){return this.getAttribute("xs")}set xs(t){t?this.setAttribute("xs",t):this.removeAttribute("xs")}get md(){return this.getAttribute("md")}set md(t){t?this.setAttribute("md",t):this.removeAttribute("md")}get lg(){return this.getAttribute("lg")}set lg(t){t?this.setAttribute("lg",t):this.removeAttribute("lg")}get xl(){return this.getAttribute("xl")}set xl(t){t?this.setAttribute("xl",t):this.removeAttribute("xl")}}b("grid",pe);function ta(s,t){return Object.keys(s).filter(e=>isNaN(Number(e))).map(e=>t(s[e]))}var ai=(s=>(s.CENTER="center",s.LEFT="start",s.RIGHT="end",s.EVEN="space-evenly",s.BETWEEN="space-between",s))(ai||{});function oi(){return`
    ${ta(ai,s=>`
            :host([justify-content="${s}"]) {
                justify-content: ${s};
            }

            :host([align-items="${s}"]) {
                align-items: ${s};
            }
        `).join("")}
      `}class ue extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});this.styleElement=document.createElement("style"),t.appendChild(this.styleElement);const e=document.createElement("slot");t.append(e),this.setAttribute("stretch-horizontal",""),this.updateStyles()}static get observedAttributes(){return["direction","gap","margin-inline","margin-block","stretch"]}attributeChangedCallback(t,e,i){ue.observedAttributes.includes(t)&&e!==i&&this.updateStyles()}updateStyles(){const t=this.getAttribute("direction")||"vertical",e=this.getGapVariable(this.getAttribute("gap")||"none"),i=this.getMarginVariable(this.getAttribute("margin-inline")||"none"),a=this.getMarginVariable(this.getAttribute("margin-block")||"none");this.styleElement.textContent=`
            :host {
                display: flex;
                flex-direction: ${t==="horizontal"?"row":"column"};
                gap: ${e};
                padding-inline: ${i};
                padding-block: ${a};
                flex-wrap: wrap;
                box-sizing: border-box;
            }
                
            ${oi()}
            ${R()}

            :host([stretch][direction="horizontal"]) {
                width: 100%;
            }

            :host([stretch][direction="vertical"]) {
                height: 100%;
            }
        `}getGapVariable(t){switch(t){case"none":return"0px";case"small":return l("spacing-sm");case"medium":return l("spacing-md");case"large":return l("spacing-lg");case"extra-large":return l("spacing-xl");default:return l("spacing-md")}}getMarginVariable(t){return this.getGapVariable(t)}get direction(){return this.getAttribute("direction")}set direction(t){t?this.setAttribute("direction",t):this.removeAttribute("direction")}get gap(){return this.getAttribute("gap")||"none"}set gap(t){t?this.setAttribute("gap",t):this.removeAttribute("gap")}get marginInline(){return this.getAttribute("margin-inline")||"none"}set marginInline(t){t?this.setAttribute("margin-inline",t):this.removeAttribute("margin-inline")}get marginBlock(){return this.getAttribute("margin-block")||"none"}set marginBlock(t){t?this.setAttribute("margin-block",t):this.removeAttribute("margin-block")}}b("stack",ue);class ge extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: block;
                overflow: auto;
            }

            ${R()}
        `,t.appendChild(e);const i=document.createElement("slot");t.append(i)}static get observedAttributes(){return["stretch","height","width"]}connectedCallback(){this.hasAttribute("height")&&(this.style.height=this.getAttribute("height")||"auto"),this.hasAttribute("width")&&(this.style.width=this.getAttribute("width")||"auto")}attributeChangedCallback(t,e,i){!ge.observedAttributes.includes(t)||e===i||(t==="height"&&(this.style.height=i||"auto"),t==="width"&&(this.style.width=i||"auto"))}}b("scroll-box",ge);class ea extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
      }

      ::slotted(img) {
        display: block;
        object-fit: contain; /* Maintain aspect ratio while fitting within bounds */
        object-position: center; /* Center the image if there are empty spaces */
        max-width: 100%;
      }

      :host([size="small"]) ::slotted(img) {
        width: 128px;
        height: auto;
      }

      :host([size="medium"]) ::slotted(img) {
        width: 256px;
        height: auto;
      }

      :host([size="large"]) ::slotted(img) {
        width: 512px;
        height: auto;
      }

      :host([size="none"]) ::slotted(img) {
        width: 100%;
        height: 100%;
      }
    `,this.shadow.appendChild(t);const e=document.createElement("slot");this.shadow.appendChild(e)}static get observedAttributes(){return["size","width","height"]}attributeChangedCallback(t,e,i){e!==i&&["size","width","height"].includes(t)&&this.updateImageSize()}updateImageSize(){const t=this.querySelector("img"),e=this.getAttribute("width")||void 0,i=this.getAttribute("height")||void 0;e&&(t.style.width=e),i&&(t.style.height=i)}}b("figure",ea);class ia extends HTMLElement{constructor(){super();const t=document.createElement("style");t.textContent=`
            :host {
                display: flex;
                flex-wrap: wrap;
            }
            
            ${R()}
      `;const e=this.attachShadow({mode:"open"});e.appendChild(t);const i=document.createElement("slot");e.appendChild(i)}}b("block",ia);class sa extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});this.button=document.createElement("button"),this.button.classList.add("button");const e=document.createElement("style");e.textContent=`
      :host {
        width: max-content;
        height: max-content;
      }

      .button {
        border: none;
        border-radius: ${l("border-xs")};
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: ${l("spacing-md")};
        text-align: center;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);
        white-space: nowrap;
        touch-action: manipulation; /* Helps with touch interactions */
      }
      
      ${R()}

      :host .button {
        width: 100%;
      }
      
      :host([variant="filled"]) .button {
        background-color: var(--semantic-background-highlight);
        color: var(--semantic-text-inverted);
      }

      :host([variant="filled"]:hover) .button,
      :host([variant="filled"]:active) .button {
        background-color: var(--semantic-background-hover);
        color: var(--semantic-text-inverted);
        box-shadow: ${l("shadow-light")};
      }

      :host([variant="outlined"]) .button {
        background-color: transparent;
        border: 1px solid var(--semantic-stroke-highlight);
        color: var(--semantic-text-highlight);
      }

      :host([variant="outlined"]:hover) .button,
      :host([variant="outlined"]:active) .button {
        border-color: var(--semantic-stroke-hover);
        color: var(--semantic-text-hover);
        background-color: rgba(var(--semantic-background-highlight_rgb), 0.1);
      }

      :host([size="small"]) .button {
        padding-block: ${l("spacing-xs")};
        padding-inline: ${l("spacing-sm")};
      }

      :host([size="medium"]) .button {
        padding-block: ${l("spacing-sm")};
        padding-inline: ${l("spacing-md")};
      }

      :host([size="large"]) .button {
        padding-block: ${l("spacing-md")};
        padding-inline: ${l("spacing-lg")};
      }

      .button:focus {
        outline: 2px solid var(--button-focus-outline);
      }
    `,t.appendChild(e);const i=new rt;i.display="button";const a=document.createElement("slot");i.append(a),this.button.appendChild(i),t.appendChild(this.button),this.hasAttribute("variant")||this.setAttribute("variant","filled"),this.hasAttribute("size")||this.setAttribute("size","medium"),this.button.addEventListener("touchstart",this.handleTouchStart.bind(this),{passive:!0}),this.button.addEventListener("touchend",this.handleTouchEnd.bind(this),{passive:!0}),this.button.addEventListener("touchcancel",this.handleTouchEnd.bind(this),{passive:!0})}handleTouchStart(){this.button.classList.add("button-active")}handleTouchEnd(){this.button.classList.remove("button-active")}static get observedAttributes(){return["variant","size","stretch"]}attributeChangedCallback(t,e,i){t==="variant"&&e!==i?this.updateVariant():t==="size"&&e!==i&&this.updateSize()}updateVariant(){this.setAttribute("variant",this.variant)}updateSize(){this.setAttribute("size",this.size)}set variant(t){this.setAttribute("variant",t)}get variant(){return this.getAttribute("variant")||"filled"}set size(t){this.setAttribute("size",t)}get size(){return this.getAttribute("size")||"medium"}}b("button",sa);class ni extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: inline-flex;
                align-items: flex-start;
            }

            .toggle-switch {
                width: 42px;
                height: 24px;
                background-color: var(--semantic-stroke-default);
                border-radius: 12px;
                position: relative;
                transition: background-color 0.2s;
                flex-shrink: 0;
                cursor: pointer;
            }

            .switch-knob {
                width: 20px;
                height: 20px;
                background-color: var(--semantic-background-default);
                border-radius: ${l("border-sm")};
                position: absolute;
                top: 2px;
                left: 2px;
                transition: left 0.2s;
            }

            :host([checked]) .toggle-switch {
                background-color: var(--semantic-stroke-highlight);
            }

            :host([checked]) .switch-knob {
                left: 20px;
            }

            :host([disabled]) .toggle-switch {
                cursor: not-allowed;
                opacity: 0.6;
            }

            input {
                display: none;
            }

            .label {
                margin-left: ${l("spacing-sm")};
                cursor: auto;
            }

            .required-asterisk::after {
                content: " *";
                color: red; /* Optional: To highlight the asterisk */
            }
        `,t.appendChild(e),this.inputElement=document.createElement("input"),this.inputElement.type="checkbox",t.appendChild(this.inputElement),this.toggleSwitch=document.createElement("div"),this.toggleSwitch.classList.add("toggle-switch"),t.appendChild(this.toggleSwitch),this.switchKnob=document.createElement("div"),this.switchKnob.classList.add("switch-knob"),this.toggleSwitch.appendChild(this.switchKnob),this.labelElement=new rt,this.labelElement.display="body1",this.labelElement.classList.add("label"),t.appendChild(this.labelElement),this.toggleSwitch.addEventListener("click",()=>{this.disabled||(this.checked=!this.checked,this.dispatchEvent(new Event("change")))}),this.hasAttribute("checked")||(this.checked=!1),this.hasAttribute("disabled")||(this.disabled=!1),this.updateLabel()}static get observedAttributes(){return["checked","disabled","name","value","required","label"]}attributeChangedCallback(t,e,i){t==="checked"&&e!==i?this.updateCheckedState():t==="disabled"&&e!==i?this.updateDisabledState():t==="name"&&e!==i?this.inputElement.name=i||"":t==="value"&&e!==i?this.inputElement.value=i||"":t==="required"&&e!==i?(this.inputElement.required=i!==null,this.updateLabel()):t==="label"&&e!==i&&this.updateLabel()}updateCheckedState(){this.inputElement.checked=this.checked,this.checked?this.setAttribute("checked",""):this.removeAttribute("checked")}updateDisabledState(){this.inputElement.disabled=this.disabled,this.disabled?this.setAttribute("disabled",""):this.removeAttribute("disabled")}updateLabel(){this.labelElement.textContent=this.label,this.required?this.labelElement.classList.add("required-asterisk"):this.labelElement.classList.remove("required-asterisk")}set checked(t){t?this.setAttribute("checked",""):this.removeAttribute("checked")}get checked(){return this.hasAttribute("checked")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get disabled(){return this.hasAttribute("disabled")}set name(t){this.setAttribute("name",t)}get name(){return this.getAttribute("name")||""}set value(t){this.setAttribute("value",t)}get value(){return this.getAttribute("value")||""}set required(t){t?this.setAttribute("required",""):this.removeAttribute("required")}get required(){return this.hasAttribute("required")}set label(t){this.setAttribute("label",t)}get label(){return this.getAttribute("label")||""}get form(){return this.inputElement.form}get validity(){return this.inputElement.validity}get validationMessage(){return this.inputElement.validationMessage}checkValidity(){return this.inputElement.checkValidity()}reportValidity(){return this.inputElement.reportValidity()}focus(){this.inputElement.focus()}}b("switch",ni);class aa extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: inline;
        width: max-content;
        position: relative;
      }

      .content-wrapper {
        display: inline-block;
        position: relative;
      }

      .badge {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--semantic-background-highlight);
        color: var(--semantic-text-inverted);
        border-radius: 15px;
        padding: 0 6px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: bold;
        transform: translate(75%, -50%);
        z-index: 1;
      }

      :host([hidden]) .badge {
        display: none;
      }
    `,t.appendChild(e),this.contentWrapper=document.createElement("div"),this.contentWrapper.className="content-wrapper",t.appendChild(this.contentWrapper);const i=document.createElement("slot");this.contentWrapper.appendChild(i),this.badgeElement=document.createElement("span"),this.badgeElement.className="badge",t.appendChild(this.badgeElement),this.updateBadge()}static get observedAttributes(){return["content","hidden"]}attributeChangedCallback(t,e,i){t==="content"&&e!==i?this.updateBadge():t==="hidden"&&e!==i&&this.updateVisibility()}updateBadge(){this.badgeElement.textContent=this.getAttribute("content")||""}updateVisibility(){const t=this.hasAttribute("hidden");this.badgeElement.style.display=t?"none":"flex"}set content(t){this.setAttribute("content",t)}get content(){return this.getAttribute("content")||""}set hidden(t){t?this.setAttribute("hidden",""):this.removeAttribute("hidden")}get hidden(){return this.hasAttribute("hidden")}}b("badge",aa);class oa extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: inline-flex;
        align-items: center;
        gap: ${l("spacing-sm")};
        font-family: sans-serif;
        width: max-content;
      }

      .color-container {
        position: relative;
      }

      .color-preview {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid #ccc;
        background-color: #ffffff;
        box-shadow: 0 0 3px rgba(var(--semantic-background-inverted_rgb), 0.2);
        cursor: pointer;
      }

      .icon {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 16px; /* Reduced size */
        height: 16px; /* Reduced size */
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: var(--semantic-background-default);
        border-radius: 50%;
        border: 1px solid var(--semantic-stroke-default);
        box-shadow: 0 0 1px rgba(var(--semantic-background-inverted_rgb), 0.3);
        transform: translate(30%, 30%); /* Adjust badge position */
        pointer-events: all;
      }

      .icon svg {
        fill: currentColor;
        width: 12px; /* Adjusted size */
        height: 12px; /* Adjusted size */
      }

      input[type="color"] {
        z-index: ${I.TOP};
        opacity: 0;
        position: absolute;
        width: 32px;
        height: 32px;
        transform: translate(-1px, -1px);
        cursor: pointer;
      }
    `,t.appendChild(e),this.colorInput=document.createElement("input"),this.colorInput.type="color",t.appendChild(this.colorInput);const i=document.createElement("div");i.classList.add("color-container"),this.colorPreview=document.createElement("div"),this.colorPreview.classList.add("color-preview"),i.appendChild(this.colorPreview),this.iconElement=document.createElement("div"),this.iconElement.classList.add("icon"),this.iconElement.innerHTML=`
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.66 2c-.94 0-1.85.37-2.54 1.06L5.17 13l.89.88a4.004 4.004 0 0 0-1.06 3.73c.23 1.08.87 2.02 1.8 2.64.66.44 1.42.67 2.18.68.76 0 1.53-.23 2.18-.68l8.95-8.95c1.42-1.42 1.42-3.72 0-5.14-.68-.68-1.59-1.06-2.53-1.06zm0 2c.36 0 .71.14.97.4.55.55.55 1.39 0 1.94L9.82 16.54a2.008 2.008 0 0 1-2.84 0 2.008 2.008 0 0 1 0-2.84L15.79 5.4c.25-.26.6-.4.97-.4zm-4.6 7.6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
      </svg>
    `,i.appendChild(this.iconElement),t.appendChild(i),this.colorInput.addEventListener("input",this.handleColorChange.bind(this)),this.colorPreview.addEventListener("click",()=>this.colorInput.click()),this.iconElement.addEventListener("click",()=>this.colorInput.click()),this.updateColor(this.getAttribute("value")||"#ffffff")}static get observedAttributes(){return["value","label"]}attributeChangedCallback(t,e,i){t==="value"&&e!==i?this.updateColor(i):t==="label"&&e!==i&&this.updateLabel()}handleColorChange(t){const e=t.target.value;this.colorPreview.style.backgroundColor=e,this.dispatchEvent(new CustomEvent("color-change",{detail:{color:e}}))}updateColor(t){t=t||"#ffffff",this.value=t,this.colorPreview.style.backgroundColor=t,this.colorInput.value=t}updateLabel(){var t;const e=this.getAttribute("label")||"";this.labelElement||(this.labelElement=new rt,this.labelElement.display="body1",(t=this.shadowRoot)==null||t.appendChild(this.labelElement)),this.labelElement.textContent=e}set value(t){this.setAttribute("value",t)}get value(){return this.getAttribute("value")||"#ffffff"}set label(t){this.setAttribute("label",t)}get label(){return this.getAttribute("label")||""}}b("color-picker",oa);class na extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: block;
        width: 100%;
        margin: 0;
        box-sizing: border-box;
      }

      .divider {
        height: 1px;
        background-color: var(--semantic-stroke-default);
        margin-left: 0;
        margin-right: 0;
        box-sizing: border-box;
        transition: background-color 0.3s;
      }

      :host([vertical]) {
        display: inline-block;
        width: 1px;
        height: 100%; /* Take up the full height of the parent */
        margin: 0; /* Remove horizontal margins for vertical divider */
      }

      :host([vertical]) .divider {
        width: 1px;
        height: 100%; /* Ensure it fills the parent height */
      }

      :host([light]) .divider {
        background-color: var(--semantic-stroke-light);
      }

      :host([fade]) .divider {
        background-color: inherit;
        border-bottom: 1px solid transparent;
        border-image: linear-gradient(90deg,var(--semantic-stroke-highlight),transparent 50%);
        border-image-slice: 1;
      }
    `,t.appendChild(e),this.dividerElement=document.createElement("div"),this.dividerElement.className="divider",t.appendChild(this.dividerElement)}static get observedAttributes(){return["vertical","light"]}set vertical(t){t?this.setAttribute("vertical",""):this.removeAttribute("vertical")}get vertical(){return this.hasAttribute("vertical")}set light(t){t?this.setAttribute("light",""):this.removeAttribute("light")}get light(){return this.hasAttribute("light")}}b("divider",na);class ra extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: flex;
                flex-wrap: wrap;
            }

            ${oi()}
            ${R()}

            :host([margin-inline="small"]) {
                padding-inline: ${l("spacing-sm")};
            }

            :host([margin-block="small"]) {
                padding-block: ${l("spacing-sm")};
            }

            :host([margin-inline="medium"]) {
                padding-inline: ${l("spacing-md")};
            }

            :host([margin-block="medium"]) {
                padding-block: ${l("spacing-md")};
            }

            :host([margin-inline="large"]) {
                padding-inline: ${l("spacing-lg")};
            }

            :host([margin-block="large"]) {
                padding-block: ${l("spacing-lg")};
            }

            :host([margin-inline="extra-large"]) {
                padding-inline: ${l("spacing-xl")};
            }

            :host([margin-block="extra-large"]) {
                padding-block: ${l("spacing-xl")};
            }


            :host([margin-block="extra-large"]) {
                padding-block: ${l("spacing-xl")};
            }
        `,t.appendChild(e);const i=document.createElement("slot");t.append(i)}static get observedAttributes(){return["margin-inline","margin-block","justify-content","align-items"]}}b("box",ra);class be extends HTMLElement{constructor(){super(),this.toggleCheckbox=()=>{this.checkboxElement.disabled||(this.checked=!this.checkboxElement.checked,this.dispatchEvent(new Event("change")))};const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: inline-flex;
        align-items: center;
        gap: ${l("spacing-xs")};
        cursor: pointer;
        width: max-content;
      }

      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .checkbox {
        appearance: none;
        width: 2em;
        height: 2em;
        border: 2px solid var(--semantic-stroke-default);
        border-radius: ${l("border-xs")};
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s, border-color 0.3s;
        cursor: pointer;
      }

      .checkbox:checked {
        background-color: var(--semantic-background-highlight);
        border-color: var(--semantic-background-highlight);
      }

      .checkbox:checked::before {
        content: "";
        width: 1em;
        height: 1em;
        background-color: var(--semantic-background-default);
        clip-path: polygon(14% 44%, 0% 65%, 50% 100%, 100% 18%, 80% 0%, 43% 62%);
      }

      .checkbox:disabled {
        background-color: rgba(var(--semantic-background-inverted_rgb), 0.2);
        border-color: var(--semantic-stroke-default);
        cursor: not-allowed;
      }
    `,t.appendChild(e),this.checkboxElement=document.createElement("input"),this.checkboxElement.type="checkbox",this.checkboxElement.className="checkbox",t.appendChild(this.checkboxElement);const i=document.createElement("div");i.className="label";const a=document.createElement("slot");i.appendChild(a),t.append(i),this.addEventListener("click",this.toggleCheckbox),this.addEventListener("pointerdown",o=>o.preventDefault()),this.checkboxElement.addEventListener("click",o=>{o.stopPropagation()}),this.updateCheckbox()}static get observedAttributes(){return["checked","disabled"]}attributeChangedCallback(t,e,i){be.observedAttributes.includes(t)&&e!==i&&this.updateCheckbox()}updateCheckbox(){this.checkboxElement.checked=this.hasAttribute("checked"),this.checkboxElement.disabled=this.hasAttribute("disabled"),this.checkboxElement.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}set checked(t){t?this.setAttribute("checked",""):this.removeAttribute("checked")}get checked(){return this.hasAttribute("checked")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get disabled(){return this.hasAttribute("disabled")}}b("checkbox",be);var pt=(s=>(s.HIGHLIGHT="highlight",s.DEFAULT="default",s.INVERTED="inverted",s))(pt||{});const ri=class ut extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        --icon-color: var(--semantic-text-default);
      }

      :host([color="${pt.DEFAULT}"]) {
        --icon-color: var(--semantic-text-default);
      }

      :host([color="${pt.INVERTED}"]) {
        --icon-color: var(--semantic-text-inverted);
      }

      :host([color="${pt.HIGHLIGHT}"]) {
        --icon-color: var(--semantic-text-highlight);
      }

      svg {
        fill: var(--icon-color);
        display: block;
        object-fit: contain;
        width: 100%;
        height: 100%;
      }

      :host([size="small"]) {
        width: 16px;
        height: 16px;
      }

      :host([size="medium"]) {
        width: 32px;
        height: 32px;
      }

      :host([size="large"]) {
        width: 64px;
        height: 64px;
      }

      :host([size="none"]) {
        width: 100%;
        height: 100%;
      }
    `,this.shadow.appendChild(t)}static get observedAttributes(){return["size","svg"]}attributeChangedCallback(t,e,i){e!==i&&i&&t==="svg"&&this.loadSvg(i)}async loadSvg(t){try{if(ut.svgCache.has(t))this.setSvgContent(ut.svgCache.get(t));else{const e=await fetch(t);if(!e.ok)throw new Error(`Failed to load SVG: ${e.statusText}`);const i=await e.text();ut.svgCache.set(t,i),this.setSvgContent(i)}}catch(e){console.error("Error loading SVG:",e)}}setSvgContent(t){const e=document.createElement("div");e.innerHTML=t;const i=e.querySelector("svg");if(i){if(i.removeAttribute("width"),i.removeAttribute("height"),!i.hasAttribute("viewBox")){const a=i.getAttribute("width")||"100",o=i.getAttribute("height")||"100";i.setAttribute("viewBox",`0 0 ${a} ${o}`)}this.shadow.appendChild(i)}else console.error("No valid SVG element found in the provided content.")}};ri.svgCache=new Map;let te=ri;b("icon",te);class la extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: block;
        padding: 0;
        margin: 0;
        width: max-content;
      }

      /* Style the slotted list (ul or ol) */
      ::slotted(ul),
      ::slotted(ol) {
        margin: 0;
        padding: 0;
        list-style-position: inside; /* Ensures the markers are inside */
      }

      /* Custom bullet styling for unordered lists */
      ::slotted(ul) {
        list-style-type: disc; /* Use a bullet for unordered lists */
      }

      /* Style list items inside the slotted ul/ol */
      ::slotted(ul li),
      ::slotted(ol li) {
        padding: 0.5em 0;
        border-bottom: 1px solid #ddd;
      }

      /* Custom numbering for ordered lists */
      ::slotted(ol) {
        list-style-type: decimal; /* Use numbers for ordered lists */
        counter-reset: item; /* Reset counter for custom numbering */
      }

      ::slotted(ol li) {
        counter-increment: item;
      }

      ::slotted(ol li::before) {
        content: counters(item, ".") " ";
        font-weight: bold;
        margin-right: 0.5em;
      }
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i)}}b("list",la);class da extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        width: 100%;
      }
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i),this.initializeTabs=this.initializeTabs.bind(this)}connectedCallback(){this.initializeTabs()}initializeTabs(){var t;const e=Array.from(this.querySelectorAll(`${h()}-tab-button`)),i=Array.from(this.querySelectorAll(`${h()}-tab-panel`));if(e.length===0||i.length===0){console.error("No tab buttons or panels found.");return}e.forEach(o=>{const n=o.getAttribute("id");n&&o.addEventListener("click",()=>this.selectTab(n))});const a=this.getAttribute("selected")||((t=e[0])==null?void 0:t.getAttribute("id"))||"";a?this.selectTab(a):e.length>0&&this.selectTab(e[0].getAttribute("id")||"")}selectTab(t){const e=Array.from(this.querySelectorAll(`${h()}-tab-button`)),i=Array.from(this.querySelectorAll(`${h()}-tab-panel`));e.forEach(o=>{o.getAttribute("id")===t?o.setAttribute("active",""):o.removeAttribute("active")}),i.forEach(o=>{o.getAttribute("id")===t?o.setAttribute("active",""):o.removeAttribute("active")});const a=this.querySelector(`${h()}-tab-buttons`);a&&typeof a.updateActiveIndicator=="function"&&a.updateActiveIndicator()}}b("tabs",da);class ca extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: none;
        background: var(--semantic-background-default);
      }

      :host([active]) {
        display: block;
      }
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i)}}b("tab-panel",ca);class ha extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: block;
        position: relative;
        overflow: hidden;
        width: 100%;
      }

      .tab-panel {
        position: absolute;
        top: 0;
        left: 100%;
        width: 100%;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        transform: translateX(100%);
      }

      .tab-panel[active] {
        position: relative;
        left: 0;
        opacity: 1;
        transform: translateX(0%);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i)}}b("tab-panels",ha);class pa extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background: var(--tab-button-bg, transparent);
        cursor: pointer;
        transition: background 0.3s;
      }

      :host([active]) {
        font-weight: bold;
      }

      :host(:hover) {
        background: #e0e0e0;
      }
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i)}}b("tab-button",pa);class ua extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        position: relative;
        display: flex;
        border-bottom: 1px solid var(--semantic-stroke-default);
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
        width: 100%;
      }

      ::slotted(x-tab-button) {
        flex: 1;
        padding: 10px;
        text-align: center;
        background: transparent;
        border: none;
        cursor: pointer;
        transition: background 0.3s;
        position: relative;
        z-index: 1;
      }

      .active-indicator {
        position: absolute;
        bottom: 0;
        height: 2px;
        background-color: var(--tab-button-active-border-color, var(--semantic-stroke-highlight));
        transition: left 0.3s ease, width 0.3s ease;
        z-index: 0;
      }
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i);const a=document.createElement("div");a.className="active-indicator",t.appendChild(a)}connectedCallback(){requestAnimationFrame(()=>{this.updateActiveIndicator()}),this.addEventListener("slotchange",()=>this.updateActiveIndicator())}updateActiveIndicator(){var t,e;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("slot"),a=(i?.assignedElements()||[]).find(o=>o.hasAttribute("active"));if(a){const o=(e=this.shadowRoot)==null?void 0:e.querySelector(".active-indicator"),n=a.getBoundingClientRect(),r=this.getBoundingClientRect();o.style.left=`${n.left-r.left}px`,o.style.width=`${n.width}px`}}}b("tab-buttons",ua);class li extends HTMLElement{constructor(){super(),this.handleClick=()=>{if(!this.radioElement.disabled){const o=this.getAttribute("value")||"",n=new CustomEvent("radio-selected",{bubbles:!0,composed:!0,detail:{radio:this,value:o}});this.dispatchEvent(n)}};const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: inline-flex;
        align-items: center;
        gap: ${l("spacing-xs")};
      }

      :host([disabled]) {
        cursor: not-allowed;
        opacity: 0.5;
      }

      label {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        gap: ${l("spacing-xs")};
      }

      .radio {
        appearance: none;
        width: 2em; /* Adjust size */
        height: 2em; /* Adjust size */
        border: 2px solid var(--semantic-stroke-default);
        border-radius: 50%;
        background-color: transparent;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s, border-color 0.3s;
        position: relative; /* Important for the inner dot */
        cursor: pointer;
        transform: translateY(-3px);
      }

      .radio:checked {
        background-color: var(--semantic-background-highlight);
        border-color: var(--semantic-background-highlight);
      }

      .radio:checked::before {
        content: "";
        width: 1em; /* Inner dot size */
        height: 1em;
        background-color: var(--semantic-background-default);
        border-radius: 50%;
        position: absolute;
      }

      .radio:disabled {
        background-color: rgba(var(--semantic-background-inverted_rgb), 0.2);
        border-color: var(--semantic-stroke-default);
      }
    `,t.appendChild(e);const i=document.createElement("label");this.radioElement=document.createElement("input"),this.radioElement.type="radio",this.radioElement.className="radio",i.appendChild(this.radioElement);const a=document.createElement("slot");i.appendChild(a),t.appendChild(i),this.radioElement.addEventListener("click",this.handleClick),this.updateRadio()}static get observedAttributes(){return["checked","disabled","value"]}attributeChangedCallback(){this.updateRadio()}updateRadio(){this.radioElement.checked=this.hasAttribute("checked"),this.radioElement.disabled=this.hasAttribute("disabled")}set checked(t){t?this.setAttribute("checked",""):this.removeAttribute("checked")}get checked(){return this.hasAttribute("checked")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get disabled(){return this.hasAttribute("disabled")}set value(t){this.setAttribute("value",t)}get value(){return this.getAttribute("value")||""}}b("radio-button",li);class ga extends HTMLElement{constructor(){super(),this.handleRadioClick=t=>{const e=t.target;e instanceof li&&!e.disabled&&(this.setAttribute("selected",e.value),this.dispatchEvent(new CustomEvent("radio-selected",{detail:{radio:e,value:e.value}})))}}connectedCallback(){this.updateRadios(),this.addEventListener("click",this.handleRadioClick)}attributeChangedCallback(){this.updateSelected()}updateSelected(){this.radios=this.querySelectorAll(`${h()}-radio-button`),this.radios.forEach(t=>{t.value===this.getAttribute("selected")&&(this.clearChecked(),t.checked=!0)})}static get observedAttributes(){return["selected"]}updateRadios(){this.radios=this.querySelectorAll(`${h()}-radio-button`);let t=!1;this.radios.forEach(e=>{e.checked&&(t&&(e.checked=!1),t=!0)})}clearChecked(){var t;(t=this.radios)==null||t.forEach(e=>{e.checked=!1})}}b("radio-group",ga);class ba extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
            :host {
                display: none;
            }
        `,t.appendChild(e);const i=document.querySelector(`${h()}-loading`);i&&document.body.removeChild(i)}}b("loading",ba);class ma extends HTMLElement{constructor(){super(),this.disableScroll();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: block;
        width: 100vw;
        height: 100vh;
        background-color: var(--semantic-background-default);
        color: var(--semantic-text-highlight);
        position: fixed;
        top: 0;
        left: 0;
        z-index: ${I.OVERLAY};
        opacity: 1;
        transition: opacity 1s ease-in-out;
      }

      :host(.hidden) {
        opacity: 0;
        pointer-events: none;
      }
    `,t.appendChild(e);const i=document.createElement("slot");t.appendChild(i)}static get observedAttributes(){return["timeout"]}connectedCallback(){const t=Number.parseInt(this.getAttribute("timeout")||"3000");setTimeout(()=>{this.hide()},t)}hide(){this.classList.add("hidden"),setTimeout(()=>{this.enableScroll();const t=`${h()}-theme`;document.querySelector(t).removeChild(this)},1e3)}disableScroll(){document.body.style.height="100vh",document.body.style.width="100vw",document.body.style.overflow="hidden"}enableScroll(){document.body.style.height="",document.body.style.width="",document.body.style.overflow=""}}b("splash",ma);class me extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML=`
        <style>
          :host {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: ${l("spacing-sm")};
            gap: ${l("spacing-sm")};
            cursor: pointer;
            user-select: none;
          }

          ${R()}
  
          :host(:hover) {
            background-color: rgba(var(--semantic-stroke-highlight_rgb), 0.05);
          }


          :host([border-bottom]) {
            border-bottom: 1px solid var(--semantic-stroke-default);
          }

          :host([border-top]) {
            border-top: 1px solid var(--semantic-stroke-default);
          }
  
          .text {
            flex: 1;
          }
  
          .icon {
            display: inline-block;
            width: 1em;
            height: 1em;
            transform: rotate(0) scale(1.2);
            fill: var(--semantic-text-default);
          }

          :host([arrow="left"]) {
            flex-direction: row-reverse;
          }
  
          :host([arrow="left"]) .icon {
            transform: rotate(180deg) scale(1.2);
            
          }
  
          :host([arrow="none"]) .icon {
            display: none;
          }
        </style>
        <span class="text"><slot></slot></span>
        <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6l6 6-6 6" />
        </svg>
      `,this.update()}static get observedAttributes(){return["border-top","border-bottom","arrow"]}attributeChangedCallback(t,e,i){me.observedAttributes.includes(t)&&e!==i&&this.update()}update(){!this.hasAttribute("border-top")&&!this.hasAttribute("border-bottom")&&this.setAttribute("border-bottom","")}}b("nav-button",me);var ee=(s=>(s.BOTTOM_NAVIGATION="bottom-navigation",s.APP_BAR="app-bar",s))(ee||{});class di extends HTMLElement{constructor(){super(),this.autoDismissTimeout=null;const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: none;
        box-sizing: border-box;
        z-index: ${I.SNACKBAR};
        pointer-events: none;
        width: max-content;
        max-width: 100%;
        position: relative;
        background-color: transparent;
        transition: opacity 0.3s ease, display 0.3s ease allow-discrete;
        opacity: 0;
        pointer-events: auto;
      }

      ${R()}

      :host([fixed]) {
        position: fixed;
        padding: ${l("spacing-lg")};
        width: 100%;
        left: 0;
        right: 0;
        max-width: 100%;
        box-sizing: border-box;
      }

      :host([visible]) {
        display: block;
        opacity: 1;
      }

      :host([offset="${ee.BOTTOM_NAVIGATION}"]) {
        bottom: calc(${l("bottom-navigation-height")} + ${l("bottom-navigation-offset")});
      }

      :host([offset="${ee.APP_BAR}"]) {
        top: ${l("app-bar-height")};
      }

      :host([position="right"]) {
        right: 0;
        left: auto;
        transform: none;
      }

      :host([position="left"]) {
        left: 0;
        right: auto;
        transform: none;
      }

      /* Child div for content and background */
      .snackbar-content {
        box-sizing: border-box;
        padding: ${l("spacing-sm")};
        background-color: var(--semantic-background-inverted);
        color: var(--semantic-text-inverted);
        border-radius: 4px;
        box-shadow: ${l("shadow-dark")};
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      /* Close button styles */
      .close-button {
        background: transparent;
        border: none;
        color: var(--semantic-text-inverted);
        font-size: 16px;
        cursor: pointer;
        margin-left: ${l("spacing-sm")};
      }

      /* Slot for message content */
      ::slotted(*) {
        display: block;
        flex-grow: 1;
      }

      /* Hide the close button when closable is not set */
      :host([closable]) .close-button {
        display: block;
      }

      :host(:not([closable])) .close-button {
        display: none;
      }
    `,t.appendChild(e);const i=document.createElement("div");i.classList.add("snackbar-content");const a=document.createElement("slot");i.appendChild(a);const o=document.createElement("button");o.classList.add("close-button"),o.innerHTML="&#10005;",o.addEventListener("click",()=>{this.visible=!1}),i.appendChild(o),t.appendChild(i),this.setupAutoDismiss()}static get observedAttributes(){return["visible","position","timeout","offset","closable"]}attributeChangedCallback(t,e,i){t==="visible"&&e!==i?this.toggleVisibility():t==="timeout"&&e!==i?this.setupAutoDismiss():t==="closable"&&e!==i&&this.updateCloseButtonVisibility()}toggleVisibility(){this.visible?(this.classList.add("visible"),this.startAutoDismiss()):this.classList.remove("visible")}setupAutoDismiss(){this.autoDismissTimeout&&clearTimeout(this.autoDismissTimeout);const t=this.timeout;t>0&&(this.autoDismissTimeout=setTimeout(()=>{this.visible=!1},t))}startAutoDismiss(){this.timeout>0&&(this.autoDismissTimeout=setTimeout(()=>{this.removeAttribute("visible")},this.timeout))}updateCloseButtonVisibility(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".close-button");e&&(this.hasAttribute("closable")?e.style.display="block":e.style.display="none")}set visible(t){t?(this.setAttribute("visible",""),this.style.display="block"):this.removeAttribute("visible")}get visible(){return this.hasAttribute("visible")}set timeout(t){this.setAttribute("timeout",t.toString())}get timeout(){return parseInt(this.getAttribute("timeout")||"0",10)}}b("snackbar",di);class fa extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: block;
        width: 100%;
        position: relative; /* Ensure positioning context for inner divs */
      }

      /* Fixed/Sticky navigation styles */
      .bottom-nav {
        width: 100%;
        justify-content: space-evenly;
        background-color: var(--semantic-background-alternate);
        border-top: 1px solid var(--semantic-stroke-default);
        color: var(--semantic-text-default);
        box-sizing: border-box;
        position: var(--bottom-nav-position, sticky);
        padding-inline: ${l("spacing-sm")};
        padding-top: ${l("spacing-sm")};
        padding-bottom: calc(${l("spacing-sm")} + ${l("bottom-navigation-offset")});
        left: 0;
        transition: bottom 0.3s ease-in-out;
        height: calc(${l("bottom-navigation-height")} + ${l("bottom-navigation-offset")});
        display: flex;
        align-items: center;
      }

      .spacer {
        display: none;
        height: ${l("bottom-navigation-height")};
      }
      
      :host([fixed]) .spacer {
        display: block;
      }

      :host([fixed]) {
        z-index: ${I.TOP};
      }

      :host([fixed]) .bottom-nav {
        position: fixed;
      }

      :host([static]) .bottom-nav {
        position: static;
      }
    `,t.appendChild(e);const i=document.createElement("div");i.className="spacer";const a=document.createElement("div");a.className="bottom-nav";const o=document.createElement("slot");a.appendChild(o),t.appendChild(i),t.appendChild(a)}static get observedAttributes(){return["fixed","static","bottom-offset"]}attributeChangedCallback(t,e,i){t==="bottom-offset"&&i!==e&&this.style.setProperty("--bottom-offset",i||"0px")}}b("bottom-navigation",fa);class ya extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${l("spacing-xs")};
        justify-content: center;
        padding: ${l("spacing-xs")};
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;
        transition: color 0.18s ease-in-out;
        height: calc(${l("bottom-navigation-height")} - 4px); /* Fixed height */
        width: auto; /* Allow width to adjust based on content */
      }

      :host(:hover), :host([active]) {
        color: var(--semantic-text-highlight);
      }

      .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%; /* Fixed height as a percentage of the container height */
        overflow: hidden;
      }

      .icon {
        object-fit: contain; /* Ensure proper scaling */
      }

      .label {
        width: 100%;
        text-align: center;
      }

      /* Hide label if not provided */
      :host([no-label]) .label {
        display: none;
      }
    `;const e=this.getAttribute("svg");if(e){const a=document.createElement("div");a.className="icon-container",this.icon=new te,this.icon.setAttribute("svg",e),this.icon.setAttribute("size","none"),this.icon.className="icon",a.appendChild(this.icon),this.shadow.appendChild(a)}const i=new rt;i.className="label",i.setAttribute("display","h6"),i.textContent=this.getAttribute("label")||"",this.getAttribute("label")||this.setAttribute("no-label",""),this.shadow.appendChild(t),this.shadow.appendChild(i)}static get observedAttributes(){return["svg"]}attributeChangedCallback(t,e,i){if(t==="svg"&&e!==i){const a=this.shadow.querySelector(".icon-container");this.icon?i?this.icon.setAttribute("svg",i):(a&&a.removeChild(this.icon),this.icon=void 0):i&&(this.icon=new te,this.icon.setAttribute("svg",i),this.icon.className="icon",a&&a.appendChild(this.icon))}}}b("bottom-navigation-action",ya);class L extends HTMLElement{static routes=[];constructor(){super(),window.addEventListener("hashchange",()=>this.update()),this.update()}static unregister(t){this.routes=this.routes.filter(e=>e!==t)}static register(t){this.routes.push(t),t.isMatchingPath()?t.show():t.hide()}static current(){return window.location.hash.slice(1)}update(){L.routes.forEach(t=>{t.isMatchingPath()?t.show():t.hide()})}connectedCallback(){this.update()}static default(){return L.routes.find(t=>t.isDefault)}static exists(t){return L.routes.some(e=>e.path===t)}}class ci extends HTMLElement{shadow;snackbarContainer;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.innerHTML=`
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                #offline-snackbar {
                    display: none;
                }
                
                #splash {
                    position: fixed;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    z-index: 99999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: opacity 1s ease-out;
                    pointer-events: none;
                }

                #splash.fade-out {
                    opacity: 0;
                }
            </style>

            <hb-splash id="splash"></hb-splash>
            <div style="display: flex; flex-direction: column; height: 100%;">
                <hb-header style="flex-shrink: 0;"></hb-header>
                
                <div style="flex-grow: 1; position: relative; height: calc(100% - var(--x-app-bar-height) - var(--x-bottom-navigation-height) - var(--x-bottom-navigation-offset));">
                    <hb-route path="games" default>
                        <hb-games-page style="height: 100%;"></hb-games-page>
                    </hb-route>
                    
                    <hb-route path="events">
                        <x-scroll-box stretch-horizontal stretch-vertical>
                            <hb-events-page></hb-events-page>
                        </x-scroll-box>
                    </hb-route>
                    
                    <hb-route path="settings">
                        <x-scroll-box stretch-horizontal stretch-vertical>
                            <hb-settings-page></hb-settings-page>
                        </x-scroll-box>
                    </hb-route>

                    <hb-route path="disclaimer">
                        <x-scroll-box stretch-horizontal stretch-vertical>
                            <hb-disclaimer-page></hb-disclaimer-page>
                        </x-scroll-box>
                    </hb-route>

                    
                        <hb-route path="licenses">
                            <x-scroll-box stretch-horizontal stretch-vertical>
                                <hb-licenses-page></hb-licenses-page>
                            </x-scroll-box>
                        </hb-route>


                    <hb-route path="info">
                        <x-scroll-box stretch-horizontal stretch-vertical>
                            <hb-info-page></hb-info-page>
                        </x-scroll-box>
                    </hb-route>
                        
                    <div id="snackbar-container"></div>
                </div>
                
                <x-bottom-navigation style="flex-shrink: 0;">
                    <x-bare-link>
                        <a href="/#games">
                            <x-bottom-navigation-action svg="/icons/baseball.svg" id="games-page">
                            </x-bottom-navigation-action>
                        </a>
                    </x-bare-link>
                    
                    <x-bare-link>
                        <a href="/#events">
                            <x-bottom-navigation-action svg="/icons/calendar-dots.svg" id="events-page">
                            </x-bottom-navigation-action>
                        </a>
                    </x-bare-link>
                    
                    <x-bare-link>
                        <a href="/#settings">
                            <x-bottom-navigation-action svg="/icons/dots-three-circle.svg" id="settings-page">
                            </x-bottom-navigation-action>
                        </a>
                    </x-bare-link>
                </x-bottom-navigation>
            </div>
        `,this.snackbarContainer=this.shadow.querySelector("#snackbar-container")}connectedCallback(){(async()=>(this.splashTimeout(),this.networkStatusListener(),this.activeBottomNavigation()))()}splashTimeout(){setTimeout(()=>{const t=this.shadow.querySelector("#splash");t&&(t.classList.add("fade-out"),t.addEventListener("transitionend",()=>{t.remove()}))},M.SPLASH_TIMEOUT)}activeBottomNavigation(){const t=this.shadow.querySelectorAll("x-bottom-navigation > x-bare-link > a");if(t.length===0)return;const e=()=>{const a=L.current();for(const o of t){const n=o.href.split("#")?.[1],r=o.querySelector("x-bottom-navigation-action");r&&(n===a?r.setAttribute("active",""):r.removeAttribute("active"))}},i=()=>{L.current()||(window.location.hash="#games"),e()};window.addEventListener("hashchange",e),window.addEventListener("popstate",e),i()}networkStatusListener(){window.addEventListener("online",()=>{const t=this.snackbarContainer.querySelector("#offline-status");t&&t.removeAttribute("visible")}),window.addEventListener("offline",()=>{let t=this.snackbarContainer.querySelector("#offline-status");if(!t){const e=new di;e.id="offline-status",e.setAttribute("position","left"),e.setAttribute("stretch-horizontal",""),e.setAttribute("fixed",""),e.setAttribute("offset","bottom-navigation"),e.setAttribute("closable",""),e.innerHTML=`
                    <x-typography display="h4">${g("app.offline")}</x-typography>
                `,this.snackbarContainer.append(e),t=e}t.setAttribute("visible","")})}}class xa extends HTMLElement{season;shadow;bullsGames=[];noBullsGames;noUserGames;showPastGames;userGames=[];userLeagues=[];isLoading=!0;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.style.display="block"}update(){this.isLoading?this.shadow.innerHTML=`
                <hb-loading></hb-loading>
            `:this.shadow.innerHTML=`
                <x-tabs selected="tab-teams" style="display: flex; flex-direction: column; height: 100%;">
                    <x-tab-buttons>
                        <x-tab-button id="tab-teams">
                            <x-typography display="button">${g("app.games.tab-teams")}</x-typography>
                        </x-tab-button>
                        <x-tab-button id="tab-bulls">
                            <x-typography display="button">${g("app.games.tab-bulls")}</x-typography>
                        </x-tab-button>
                    </x-tab-buttons>

                    <x-scroll-box stretch-horizontal stretch-vertical>
                        <x-box margin-inline="small" margin-block="small">
                            <x-tab-panels>
                                <x-tab-panel id="tab-teams">
                                    <x-grid xs="1" md="1" lg="2" xl="3">
                                        ${this.userLeagues.length===0?this.renderSelectUserTeams():this.noUserGames?this.renderNoGames(!1):this.renderGameCards(this.userGames)}
                                    </x-grid>
                                </x-tab-panel>
                                
                                <x-tab-panel id="tab-bulls">
                                    <x-grid xs="1" md="1" lg="2" xl="3">
                                        ${this.noBullsGames?this.renderNoGames(!0):this.renderGameCards(this.bullsGames)}
                                    </x-grid>
                                </x-tab-panel>
                            </x-tab-panels>
                        </x-box>
                    </x-scroll-box>
                </x-tabs>
        `}renderNoGames(t){return this.season===M.CURRENT_SEASON?`
                <x-box justify-content="center">
                    <x-typography display="overline" style="text-align: center">
                       ${g(t?"app.games.no-games-bulls.current":"app.games.no-games-user.current")}
                    </x-typography>
                </x-box>
            `:`
            <x-box justify-content="center">
                <x-typography display="overline" style="text-align: center">
                   ${g(t?"app.games.no-games-bulls.past":"app.games.no-games-user.past",null,{"{season}":`${this.season}`})}
                </x-typography>
            </x-box>
        `}renderSelectUserTeams(){return`
            <x-stack justify-content="center" gap="small">
                <x-typography display="overline" style="text-align: center">
                   ${g("app.games.select-user-teams")}
                </x-typography>
                <x-box justify-content="center">
                    <x-text-link>
                        <a href="#settings">
                            <x-typography display="overline" style="text-align: center; font-size: 150%;">
                                ${g("app.settings.title")}
                            </x-typography>
                        </a>
                    </x-text-link>
                </x-box>
            </x-stack>
        `}renderGameCards(t){return t.map(e=>`
                <hb-game-card 
                   home="${e.home.name}"
                   away="${e.away.name}"
                   homeLogo="${e.home.logo}"
                   awayLogo="${e.away.logo}"
                   homeScore="${e.homeScore}"
                   awayScore="${e.awayScore}"
                   league="${e.league?.name||""}"
                   status="${e.status}"
                   venue="${[e.venue?.venue,e.venue?.location].filter(Boolean).join(", ")}"
                   background="${e.venue?.image||""}"
                   date="${e.date}">
                </hb-game-card>
            `).join("")}connectedCallback(){(async()=>{this.isLoading=!0,this.update();let t=!1;const e=v.getSeason(),i=v.getShowPastGames();if(this.bullsGames.length===0||this.showPastGames!==i||this.season!==e){for(const o of M.BULLS_LEAGUES)this.bullsGames.push(...await ve.findScheduledBySeasonAndLeague(e,o,!i));this.bullsGames=this.sortGames(this.bullsGames),t=!0}this.noBullsGames=this.bullsGames.length===0;const a=v.getLeagues();if(a.length!==this.userLeagues.length||a.sort().join()!==this.userLeagues.sort().join()||this.showPastGames!==i||this.season!==e){this.userLeagues=a;const o=[];for(const n of a)o.push(...await ve.findScheduledBySeasonAndLeague(e,n,!i));this.userGames=this.sortGames(o),t=!0}this.noUserGames=this.userGames.length===0,this.showPastGames=i,this.season=e,this.isLoading=!1,t&&this.update()})()}sortGames(t){const e=new Date;return t.sort((i,a)=>i.date>e&&a.date>e?i.date.getTime()-a.date.getTime():i.date<e&&a.date<e?a.date.getTime()-i.date.getTime():i.date>e&&a.date<e?-1:i.date<e&&a.date>e?1:0)}}class fe extends HTMLElement{static observedAttributes=["home","away","date","league","venue","background","status"];shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.update()}attributeChangedCallback(t,e,i){fe.observedAttributes.includes(t)&&e!==i&&this.update()}renderStatus(t,e=0,i=0){return["canceled","forfeit","suspended","canceled"].includes(t)?`
                <x-box class="game-status-canceled"  justify-content="center" stretch-horizontal>
                    <x-box class="canceled-status-content" justify-content="center">
                        <x-typography display="overline" style="font-size: 150%; font-weight: 600;">
                            ${g("app.game.status.canceled")}
                        </x-typography>
                    </x-box>
                </x-box>
            `:t==="finished"?`
                <x-box class="game-status-finished"  justify-content="center" stretch-horizontal>
                    <x-stack direction="horizontal" class="finished-status-content" justify-content="center" gap="small">
                        <x-typography display="overline" style="font-size: 150%; font-weight: 600;">
                            ${i}
                        </x-typography>
                        <x-typography display="overline" style="font-size: 150%; font-weight: 600;">
                            &mdash;
                        </x-typography>
                        <x-typography display="overline" style="font-size: 150%; font-weight: 600;">
                            ${e}
                        </x-typography>
                    </x-stack>
                </x-box>
            `:""}update(){const t=this.getAttribute("home")||"",e=this.getAttribute("away")||"",i=this.hasAttribute("homeScore")?Number.parseInt(this.getAttribute("homeScore")||"0"):0,a=this.hasAttribute("awayScore")?Number.parseInt(this.getAttribute("awayScore")||"0"):0,o=this.getAttribute("status")||"",n=this.getAttribute("homeLogo")||"",r=this.getAttribute("awayLogo")||"",d=this.getAttribute("background")||void 0,m=this.getAttribute("league")||"",p=this.getAttribute("venue")||"",c=this.getAttribute("date")||new Date("1970"),w=new Date(c);let $="";const z=["canceled","forfeit","suspended","canceled"].includes(o);d&&($=`
                background-image: 
                    linear-gradient(to bottom, rgba(var(--semantic-background-default_rgb), 0) 0%, rgba(var(--semantic-background-default_rgb), 0.1) 25%, rgba(var(--semantic-background-default_rgb), 0.7) 50%, rgba(var(--semantic-background-default_rgb), 1) 100%), 
                    url(${d});
            `),this.shadow.innerHTML=`
            <style>
                :host {
                    display: block;
                    width: 100%;
                    min-width: 370px;
                    position: relative; /* To position the ::before element correctly */
                }

                @media (max-width: 375px) {
                    :host {
                        min-width: 0;
                    }
                }
    
                .game-card-background {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: block;
                    ${z?"filter: grayscale(0.4);":""}
                }
    
                :host::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%; /* Cover half the width */
                    height: 100%; /* Cover half the height */
                    
                    ${$}
                    
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    ${z?"filter: grayscale(0.8);":""}
                }

                .game-status-canceled {
                    position: absolute;
                    height: 100%;
                    background-color: rgba(var(--semantic-background-default_rgb), 0.4);
                    box-sizing: border-box;
                    padding-top: 40px;
                }
                
               .game-status-finished {
                    position: absolute;
                    height: 100%;
                    box-sizing: border-box;
                    padding-top: 40px;
                } 
                
                .canceled-status-content {
                    position: absolute;
                    width: 100%;
                    color: rgba(var(--semantic-text-highlight_rgb), 1);
                    background-color: rgba(var(--semantic-background-inverted_rgb), 0.5);
                }
                
                .finished-status-content {
                    position: absolute;
                    width: 100%;
                    background-image: linear-gradient(
                        to right,
                        rgba(var(--semantic-background-inverted_rgb), 0),
                        rgba(var(--semantic-background-inverted_rgb), 0.6) 50%,
                        rgba(var(--semantic-background-inverted_rgb), 0) 100%
                    );
                    color: rgba(var(--semantic-text-inverted_rgb), 1);
                }
            </style>

            <x-block stretch-vertical>
                <x-card class="game-card-background">
                    <x-stack direction="vertical" gap="small">
                        <x-block>
                            <x-stack direction="horizontal" justify-content="space-between" gap="small" style="align-items: center" margin-inline="small">
                                <x-block style="max-width: 128px">
                                    <x-stack direction="vertical" justify-content="center">
                                        <x-figure size="small">
                                            <img src="${r}" alt="${e}" style="max-height: 112px; object-fit: scale-down;"/>
                                        </x-figure>
                                        <x-typography display="h6" style="text-align: center; font-style: italic;">
                                            ${e}
                                        </x-typography>
                                    </x-stack>
                                </x-block>
                                <x-block style="max-width: 128px">
                                    <x-stack direction="vertical" justify-content="center">
                                        <x-figure size="small">
                                            <img src="${n}" alt="${t}" style="max-height: 112px; object-fit: scale-down;"/>
                                        </x-figure>
                                        <x-typography display="h6" style="text-align: center; font-style: italic;">
                                            ${t}
                                        </x-typography>
                                    </x-stack>
                                </x-block>
                            </x-stack>
                        </x-block>
                        <x-block style="${z?"text-decoration: line-through;":""}">
                            <x-stack justify-content="center" direction="vertical">
                                <x-box justify-content="center">
                                    <x-typography display="h4" style="font-weight: 600">
                                        ${Et(w,St.DATE_ONLY)}
                                    </x-typography>
                                </x-box>
                                
                                <x-box justify-content="center">
                                    <x-typography display="h4">
                                        ${Et(w,St.TIME_ONLY)}
                                    </x-typography>
                                </x-box>
                                
                                <x-box justify-content="center">
                                    <x-typography display="h4">
                                        ${p}
                                    </x-typography>
                                </x-box>
                            </x-stack>
                        </x-block>
                        ${m?`
                            <x-block>
                                <x-stack direction="horizontal" justify-content="end">
                                    <x-typography display="h5" style="opacity: 0.8">
                                        <x-block>
                                            ${m}
                                        </x-block>
                                    </x-typography>
                                </x-stack>
                            </x-block>
                            `:""}
                    </x-stack>
                </x-card>

                ${this.renderStatus(o,i,a)}
            </x-block>
            
        `}}let ie=!1;function va(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js",{scope:"/",type:"module"}).then(e=>{console.log("ServiceWorker registration successful with scope: ",e.scope),e.waiting&&(ie=!0),e.onupdatefound=()=>{const i=e.installing;i&&(i.onstatechange=()=>{i.state==="installed"&&(ie=!0)})}}).catch(e=>{console.log("ServiceWorker registration failed: ",e)})})}function wa(){return new Promise(s=>{setTimeout(()=>{s(ie)},1e3)})}class ka extends HTMLElement{shadow;leagues=[];selectedLeagueIds=[];constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.style.display="block"}update(){this.shadow.innerHTML=`
            <x-stack>
                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="h3">
                        ${g("app.settings.my-teams")}
                    </x-typography>
                    <x-stack id="select-my-teams" gap="small" margin-block="medium" margin-inline="medium" direction="vertical">
                    </x-stack>
                </x-box>
                
                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="h3">
                        ${g("app.settings.games")}
                    </x-typography>
                    <x-stack gap="small" margin-block="medium" margin-inline="medium" direction="vertical">
                        <x-switch id="show-past-events" label="${g("app.settings.showPastEvents")}"></x-switch>
                        <x-switch id="show-past-games" label="${g("app.settings.showPastGames")}"></x-switch>
                        
                        <x-stack gap="small" direction="vertical">
                            <x-typography display="h4">
                                ${g("app.settings.selectSeason")}
                            </x-typography>
                            
                            <x-select id="season-select">
                                <select>
                                    ${this.renderSeasonOptions()}
                                </select>
                            </x-select>
                        </x-stack>
                    </x-stack>
                </x-box>
                
                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="h3">
                        ${g("app.settings.display")}
                    </x-typography>
                    
                    <x-stack gap="small" margin-block="medium" margin-inline="medium" direction="vertical">
                        <x-typography display="h4">
                            ${g("app.settings.theme")}
                        </x-typography>
                        
                        <x-radio-group id="app-theme" selected="auto">
                            <x-stack gap="small" direction="horizontal">
                                <x-radio-button value="auto">
                                    <x-typography display="body1">${g("app.settings.theme.auto")}</x-typography>
                                </x-radio-button>
                                <x-radio-button value="light">
                                    <x-typography display="body1">${g("app.settings.theme.light")}</x-typography>
                                </x-radio-button>
                                <x-radio-button value="dark">
                                    <x-typography display="body1">${g("app.settings.theme.dark")}</x-typography>
                                </x-radio-button>
                            </x-stack>
                        </x-radio-group>
                    </x-stack>
                    
                    <x-stack gap="small" margin-block="medium" margin-inline="medium" direction="vertical">
                        <x-typography display="h4">
                            ${g("app.settings.language")}
                        </x-typography>
                        
                        <x-select id="language-select">
                            <select>
                                <option value="auto">${g("app.settings.language.auto")}</option>
                                <option value="de">${g("app.settings.language.de")}</option>
                                <option value="en">${g("app.settings.language.en")}</option>
                            </select>
                        </x-select>
                    </x-stack>
                </x-box>

                <div id="update-button"></div>
                
                <x-stack margin-block="small" direction="vertical">
                    <hb-page-link text="${g("app.settings.links.info")}" border-top border-bottom href="/#info"></hb-page-link>
                </x-stack>
            </x-stack>
        `,this.renderMyTeamCheckboxes(this.leagues),this.handleLanguageSelect(),this.handleSeasonSelect();const t=this.shadow.querySelector("#show-past-games");t.addEventListener("change",a=>{v.setShowPastGames(a.target.checked)}),v.getShowPastGames()?t.setAttribute("checked","checked"):t.removeAttribute("checked");const e=this.shadow.querySelector("#show-past-events");e.addEventListener("change",a=>{v.setShowPastEvents(a.target.checked)}),v.getShowPastEvents()?e.setAttribute("checked","checked"):e.removeAttribute("checked");const i=this.shadow.querySelector("#app-theme");i.setAttribute("selected",v.getTheme()),i.addEventListener("radio-selected",a=>{v.setTheme(a.detail.value),document.querySelector("x-theme").setAttribute("theme",v.getTheme())})}handleSeasonSelect(){const t=this.shadow.querySelector("#season-select");t.addEventListener("select-change",async e=>{const i=Number.parseInt(e.detail.value);v.getSeason()!==i&&(v.setSeason(i),confirm(g("app.settings.change-season"))&&(this.leagues=await we.findByYear(v.getSeason()),this.renderMyTeamCheckboxes(this.leagues)))}),t.setAttribute("selected",v.getSeason())}handleLanguageSelect(){const t=this.shadow.querySelector("#language-select");t.addEventListener("select-change",e=>{v.getLanguage()!==e.detail.value&&(v.setLanguage(e.detail.value),confirm(g("app.settings.reload"))&&window.location.reload())}),t.setAttribute("selected",v.getLanguage())}renderSeasonOptions(){return M.SEASONS.map(t=>`<option value="${t}">${t}</option>`).join("")}renderMyTeamCheckboxes(t){const e=this.shadow.querySelector("#select-my-teams");if(t.length===0){let i="";v.getSeason()>=M.CURRENT_SEASON?i=`
                   <x-typography display="body1">
                    ${g("app.settings.no-teams-current-season")}
                   </x-typography>
                `:i=`
                   <x-typography display="body1">
                    ${g("app.settings.no-teams-past-season",null,{"{season}":`${v.getSeason()}`})}
                   </x-typography>
                `,e.innerHTML=i;return}e.replaceChildren(...t.map(i=>{const a=new ni;return a.setAttribute("label",i.name),a.addEventListener("change",o=>{o.target.checked?v.addLeague(i.id):v.removeLeague(i.id),this.selectedLeagueIds=v.getLeagues()}),a.checked=this.selectedLeagueIds.includes(i.id),a}))}connectedCallback(){(async()=>{if(this.leagues=await we.findByYear(v.getSeason()),this.selectedLeagueIds.push(...v.getLeagues()),this.update(),await wa()){const t=this.shadow.querySelector("#update-button");t.innerHTML=`
                    <x-box margin-inline="small" margin-block="medium">
                        <x-button size="small" variant="filled" stretch-horizontal>
                            ${g("app.settings.update")}
                        </x-button>
                    </x-box>
                `,t.addEventListener("click",()=>{confirm(g("app.settings.reload"))&&navigator.serviceWorker?.controller&&(navigator.serviceWorker.controller.postMessage({action:"skipWaiting"}),window.location.reload())})}})()}}class $a extends HTMLElement{static get observedAttributes(){return["path","default"]}lastState=null;connectedCallback(){L.register(this),this.style.height="100%",this.isMatchingPath()||(this.style.display="none"),L.current()===""&&this.isDefault&&(this.style.display="block")}disconnectedCallback(){L.unregister(this)}get path(){return this.getAttribute("path")||""}get isDefault(){return this.hasAttribute("default")}set path(t){this.setAttribute("path",t)}isMatchingPath(){return this.path.split(",").map(e=>e.trim()).includes(L.current())}show(){this.style.display="block";const t=v.getStateString();this.lastState!==t&&(this.lastState=t,this.childNodes.forEach(e=>{const i=e.cloneNode(!0);this.replaceChild(i,e)}))}hide(){this.style.display="none"}}class Aa extends HTMLElement{shadow;events=[];noEvents;showPastEvents;isLoading=!0;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.style.display="block"}update(){this.isLoading?this.shadow.innerHTML=`
                <hb-loading></hb-loading>
            `:this.shadow.innerHTML=`
                <x-scroll-box stretch-horizontal stretch-vertical style="flex-grow: 1;">
                    <x-box margin-inline="small" margin-block="small">
                        <x-grid xs="1" md="1" lg="2" xl="3">
                            ${this.noEvents?this.renderNoEvents():this.renderEventCards(this.events)}
                        </x-grid>
                    </x-box>
                </x-scroll-box>
            `}renderNoEvents(){return`
            <x-box justify-content="center">
                <x-typography display="overline" style="text-align: center">
                   ${g("app.events.no-events")}
                </x-typography>
            </x-box>
        `}renderEventCards(t){return t.map(e=>{const i=mi(),a=e.title?.[i]||e.title?.[ke]||"",o=e.description?.[i]||e.description?.[ke]||"";return`
                    <hb-event-card 
                        title="${a}"
                        description="${o}"
                        image="${e.image||""}"
                        venue="${e.venue}"
                        date="${e.date}">
                    </hb-event-card>
                `}).join("")}connectedCallback(){(async()=>{let t=!1;this.isLoading=!0,this.update();const e=v.getShowPastEvents();(this.events.length===0||this.showPastEvents!==e)&&(this.events.push(...await fi.findAll(!e)),t=!0),this.events=this.sortEvents(this.events),this.noEvents=this.events.length===0,this.showPastEvents=e,this.isLoading=!1,t&&this.update()})()}sortEvents(t){const e=new Date;return t.sort((i,a)=>i.date>e&&a.date>e?i.date.getTime()-a.date.getTime():i.date<e&&a.date<e?a.date.getTime()-i.date.getTime():i.date>e&&a.date<e?-1:i.date<e&&a.date>e?1:0)}}class ye extends HTMLElement{static observedAttributes=["title","description","date","venue","image"];shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=`
          :host {
            display: block;
            width: 100%;
            min-width: 370px;
          }
        `,this.shadow.appendChild(t),this.update()}attributeChangedCallback(t,e,i){ye.observedAttributes.includes(t)&&e!==i&&this.update()}update(){const t=this.getAttribute("title")||"",e=this.getAttribute("description")||void 0,i=this.getAttribute("image")||void 0,a=this.getAttribute("venue"),o=this.getAttribute("date")||new Date("1970"),n=new Date(o);this.shadow.innerHTML=`
            <x-card>
                ${i?`<x-card-media src="${i}"></x-card-media>`:""}
                <x-card-content>
                    <x-stack direction="vertical" gap="small">
                        <x-box justify-content="left">
                            <x-typography display="h2">
                                ${t}
                            </x-typography>
                        </x-box>
                        <x-stack direction="vertical" >
                            
                            <x-box justify-content="left">
                                <x-typography display="h4" style="font-weight: 600">
                                    ${Et(n,St.DATE_TIME)}
                                </x-typography>
                            </x-box>
                            <x-box justify-content="left">
                                <x-typography display="h5" style="opacity: 0.5">
                                    ${a}
                                </x-typography>
                            </x-box>
                            
                            
                        </x-stack>
                        
                        ${e?`<x-box justify-content="left">
                                    <x-typography display="body1">
                                    ${e}
                                    </x-typography>
                                </x-box>`:""}
                    </x-stack>
                </x-card-content>
            </x-card>
        `}}class Ea extends HTMLElement{constructor(){super(),localStorage.getItem("_beta_access")==="true"||this.hasAttribute("disabled")||this.hasAttribute("enabled")&&!1?document.body.style.display="block":prompt("Password")==="bulls2025"?(document.body.style.display="block",localStorage.setItem("_beta_access","true")):(document.body.innerHTML="<h1>Access Denied</h1>",document.body.style.display="block",document.body.style.backgroundColor="#ffffff",document.body.style.textAlign="center")}}class xe extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}static get observedAttributes(){return["href","text","blank","arrow","border-top","border-bottom"]}connectedCallback(){this.update()}attributeChangedCallback(t,e,i){xe.observedAttributes.includes(t)&&e!==i&&this.update()}update(){const t=this.getAttribute("text")||"",e=this.getAttribute("href")||"",i=this.getAttribute("arrow")||"";let a=this.hasAttribute("border-bottom")||!1,o=this.hasAttribute("border-top")||!1;const n=this.hasAttribute("blank")||!1;!a&&!o&&(a=!0),this.shadow.innerHTML=`
            <style>
                :host {
                    background-color: var(--semantic-background-default);
                    width: 100%;
                }
            </style>

            <x-box stretch-horizontal>
                <x-bare-link style="width: 100%">
                    <a href="${e}" ${n?'target="_blank"':""}>
                        <x-nav-button ${a?"border-bottom":""} ${o?"border-top":""} ${i?`arrow="${i}"`:""}>
                            <x-typography display="overline">
                                ${t}
                            </x-typography>
                        </x-nav-button>
                    </a>
                </x-bare-link>
            </x-box>
        `}}class Sa extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.style.display="block",this.update(),this.fetchLicenses()}update(){this.shadow.innerHTML=`
            <x-stack>
                <hb-page-link text="${g("app.info.links.back")}" href="/#info" arrow="left"></hb-page-link>

                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="h3">
                        ${g("app.licenses.title")}
                    </x-typography>
                </x-box>


                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="body1">
                        ${g("app.licenses.description")}
                    </x-typography>
                </x-box>

                <x-box margin-inline="small" margin-block="small">
                    <div id="license-content">
                        <hb-loading></hb-loading>
                    </div>
                </x-box>

            </x-stack>
        `}async fetchLicenses(){try{const t=await fetch("/LICENSES.html");if(!t.ok)throw new Error("Failed to fetch LICENSES.html");const e=await t.text();this.renderLicenseContent(e)}catch(t){console.error("Error fetching LICENSES.html:",t),this.shadow.querySelector("#license-content").textContent="Unable to load license information."}}renderLicenseContent(t){const e=this.shadow.querySelector("#license-content");e.innerHTML=t}}class Ca extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.update()}async update(){this.shadow.innerHTML=`
            <hb-page-link id="info-page-back-link" text="${g("app.settings.links.back")}" href="/#settings" arrow="left"></hb-page-link>
            <x-stack id="info-page-container">
                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="h3">
                        ${g("app.info.title")}
                    </x-typography>
                </x-box>

                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="body1">
                        ${g("app.info.version")} 0.1.2
                    </x-typography>
                </x-box>

                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="body1">
                        ${g("app.info.contact",null,{"{email}":`<x-text-link><a href="mailto:${M.CONTACT_EMAIL}">${M.CONTACT_EMAIL}</a></x-text-link>`})}
                    </x-typography>
                </x-box>
                
                <hb-page-link text="${g("app.settings.links.disclaimer")}" border-top border-bottom href="/#disclaimer"></hb-page-link>
                ${`
                <hb-page-link text="${g("app.settings.links.licenses")}" border-top border-bottom href="/#licenses"></hb-page-link>
                `}
                <hb-page-link text="${g("app.settings.links.privacy")}" href="https://www.hardbulls.com/datenschutz" blank></hb-page-link>
                <hb-page-link text="${g("app.settings.links.imprint")}" href="https://www.hardbulls.com/impressum" blank></hb-page-link>
                
                ${`
                    <x-box margin-inline="small" margin-block="medium" justify-content="center">
                        <x-typography display="overline">
                            &copy; ${M.COPYRIGHT_YEAR} ${M.COPYRIGHT}
                        </x-typography>
                    </x-box>
                `}
            </x-stack>
        `}}class Ta extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.style.display="block",this.update()}update(){this.shadow.innerHTML=`
            <x-stack>
                <hb-page-link text="${g("app.info.links.back")}" href="/#info" arrow="left"></hb-page-link>

                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="h3">
                        ${g("app.disclaimer.title")}
                    </x-typography>
                </x-box>
                
                <x-box margin-inline="small" margin-block="small">
                    <x-typography display="body1">
                        ${g("app.disclaimer.content")}
                    </x-typography>
                </x-box>
                 </x-stack>
        `}}function za(s){return`${(s/1e3).toFixed(1)}s`}class La extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
      :host {
        display: block;
        width: 100%;
        height: 100%;
        color: var(--semantic-text-highlight);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        opacity: 1;
        transition: opacity 1s ease-in-out;
        pointer-events: none;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      /* Styles for portrait orientation */
      @media (orientation: portrait) {
          :host {
              background-image: url("/images/background_portrait.webp");
          }
      }

      /* Styles for landscape orientation */
      @media (orientation: landscape) {
          :host {
              background-image: url("/images/background_landscape.webp");
          }
      }

      .logo {
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 100%;
        align-items: center;
        filter: drop-shadow(2px 10px 10px #000000);
        opacity: 0; /* Start hidden */
        animation: fadeIn ${za(Math.max(0,M.SPLASH_TIMEOUT*.8))} ease-in forwards;
      }

      /* Fade-in animation for the logo */
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `,t.appendChild(e);const i=document.createElement("div");i.classList.add("logo"),i.innerHTML=`
        <x-icon svg="/logos/hb.svg"></x-icon>
    `,t.append(i)}}class _a extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.innerHTML=`
            <style>
                :host {
                    display: block;
                }
                
                x-app-bar {
                    z-index: 10;
                }
            </style>
            <x-app-bar>
                <x-stack direction="horizontal" justify-content="space-between" align-items="center">
                    <x-box>
                        <x-icon size="medium" svg="/logos/hb.svg"></x-icon>
                    </x-box>
                    <x-box justify-content="center">
                        <x-typography display="h1">${g("app.title")}</x-typography>
                    </x-box>
                    <x-box margin-inline="small" margin-block="small" id="top-right">
                        <x-icon size="medium" svg="/logos/bulls_mlb.svg"></x-icon>
                    </x-box>
                </x-stack>
            </x-app-bar>
        `}}class Ma extends HTMLElement{shadow;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.innerHTML=`
            <style>
                :host {
                    display: flex;
                }
            </style>

            <x-box margin-inline="small" margin-block="small" justify-content="center" stretch-vertical stretch-horizontal>
                <x-spinner size="large"></x-spinner>
            </x-box>
        `}}function Ha(){const s=navigator.userAgent;return/iPhone|iPad|iPod/i.test(s)?/Safari/i.test(s)&&!/CriOS|FxiOS/i.test(s):/Macintosh/i.test(s)?/Safari/i.test(s)&&!/Chrome/i.test(s):!1}function Pa(){history.pushState(null,"",location.href),window.onpopstate=()=>{history.go(1)}}Ds("x");Rs();Is();customElements.define("hb-soft-auth",Ea);customElements.define("hb-loading",Ma);customElements.define("hb-splash",La);customElements.define("hb-route",$a);customElements.define("hb-router",L);customElements.define("hb-shell",ci);customElements.define("hb-header",_a);customElements.define("hb-settings-page",ka);customElements.define("hb-info-page",Ca);customElements.define("hb-licenses-page",Sa);customElements.define("hb-page-link",xe);customElements.define("hb-disclaimer-page",Ta);customElements.define("hb-games-page",xa);customElements.define("hb-events-page",Aa);customElements.define("hb-game-card",fe);customElements.define("hb-event-card",ye);va();v.load();document.querySelector("x-container")?.append(new ci);document.querySelector("x-theme")?.setAttribute("theme",v.getTheme());Ha()&&Pa();
