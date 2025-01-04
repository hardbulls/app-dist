(function(){"use strict";try{self["workbox:core:7.2.0"]&&_()}catch{}const ot=null,ce=(s,...e)=>{let t=s;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t};class u extends Error{constructor(e,t){const a=ce(e,t);super(a),this.name=e,this.details=t}}const W=new Set;function le(s){W.add(s)}const g={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},U=s=>[g.prefix,s,g.suffix].filter(e=>e&&e.length>0).join("-"),he=s=>{for(const e of Object.keys(g))s(e)},T={updateDetails:s=>{he(e=>{typeof s[e]=="string"&&(g[e]=s[e])})},getGoogleAnalyticsName:s=>s||U(g.googleAnalytics),getPrecacheName:s=>s||U(g.precache),getPrefix:()=>g.prefix,getRuntimeName:s=>s||U(g.runtime),getSuffix:()=>g.suffix};function j(s,e){const t=new URL(s);for(const a of e)t.searchParams.delete(a);return t.href}async function ue(s,e,t,a){const n=j(e.url,t);if(e.url===n)return s.match(e,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await s.keys(e,i);for(const o of r){const c=j(o.url,t);if(n===c)return s.match(o,a)}}let E;function de(){if(E===void 0){const s=new Response("");if("body"in s)try{new Response(s.body),E=!0}catch{E=!1}E=!1}return E}function F(s){s.then(()=>{})}class fe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}async function ge(){for(const s of W)await s()}const pe=s=>new URL(String(s),location.href).href.replace(new RegExp(`^${location.origin}`),"");function me(s){return new Promise(e=>setTimeout(e,s))}function H(s,e){const t=e();return s.waitUntil(t),t}async function we(s,e){let t=null;if(s.url&&(t=new URL(s.url).origin),t!==self.location.origin)throw new u("cross-origin-copy-response",{origin:t});const a=s.clone(),i={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},r=de()?a.body:await a.blob();return new Response(r,i)}function ye(){self.addEventListener("activate",()=>self.clients.claim())}try{self["workbox:routing:7.2.0"]&&_()}catch{}const $="GET",D=s=>s&&typeof s=="object"?s:{handle:s};class b{constructor(e,t,a=$){this.handler=D(t),this.match=e,this.method=a}setCatchHandler(e){this.catchHandler=D(e)}}class _e extends b{constructor(e,t,a){const n=({url:i})=>{const r=e.exec(i.href);if(r&&!(i.origin!==location.origin&&r.index!==0))return r.slice(1)};super(n,t,a)}}class Ee{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,a=this.handleRequest({request:t,event:e});a&&e.respondWith(a)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,a=Promise.all(t.urlsToCache.map(n=>{typeof n=="string"&&(n=[n]);const i=new Request(...n);return this.handleRequest({request:i,event:e})}));e.waitUntil(a),e.ports&&e.ports[0]&&a.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const a=new URL(e.url,location.href);if(!a.protocol.startsWith("http"))return;const n=a.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:a});let o=r&&r.handler;const c=e.method;if(!o&&this._defaultHandlerMap.has(c)&&(o=this._defaultHandlerMap.get(c)),!o)return;let h;try{h=o.handle({url:a,request:e,event:t,params:i})}catch(f){h=Promise.reject(f)}const S=r&&r.catchHandler;return h instanceof Promise&&(this._catchHandler||S)&&(h=h.catch(async f=>{if(S)try{return await S.handle({url:a,request:e,event:t,params:i})}catch(oe){oe instanceof Error&&(f=oe)}if(this._catchHandler)return this._catchHandler.handle({url:a,request:e,event:t});throw f})),h}findMatchingRoute({url:e,sameOrigin:t,request:a,event:n}){const i=this._routes.get(a.method)||[];for(const r of i){let o;const c=r.match({url:e,sameOrigin:t,request:a,event:n});if(c)return o=c,(Array.isArray(o)&&o.length===0||c.constructor===Object&&Object.keys(c).length===0||typeof c=="boolean")&&(o=void 0),{route:r,params:o}}return{}}setDefaultHandler(e,t=$){this._defaultHandlerMap.set(t,D(e))}setCatchHandler(e){this._catchHandler=D(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new u("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new u("unregister-route-route-not-registered")}}let R;const be=()=>(R||(R=new Ee,R.addFetchListener(),R.addCacheListener()),R);function I(s,e,t){let a;if(typeof s=="string"){const i=new URL(s,location.href),r=({url:o})=>o.href===i.href;a=new b(r,e,t)}else if(s instanceof RegExp)a=new _e(s,e,t);else if(typeof s=="function")a=new b(s,e,t);else if(s instanceof b)a=s;else throw new u("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return be().registerRoute(a),a}try{self["workbox:strategies:7.2.0"]&&_()}catch{}function L(s){return typeof s=="string"?new Request(s):s}class Re{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new fe,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const a of this._plugins)this._pluginStateMap.set(a,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let a=L(e);if(a.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const r=await t.preloadResponse;if(r)return r}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const r of this.iterateCallbacks("requestWillFetch"))a=await r({request:a.clone(),event:t})}catch(r){if(r instanceof Error)throw new u("plugin-error-request-will-fetch",{thrownErrorMessage:r.message})}const i=a.clone();try{let r;r=await fetch(a,a.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const o of this.iterateCallbacks("fetchDidSucceed"))r=await o({event:t,request:i,response:r});return r}catch(r){throw n&&await this.runCallbacks("fetchDidFail",{error:r,event:t,originalRequest:n.clone(),request:i.clone()}),r}}async fetchAndCachePut(e){const t=await this.fetch(e),a=t.clone();return this.waitUntil(this.cachePut(e,a)),t}async cacheMatch(e){const t=L(e);let a;const{cacheName:n,matchOptions:i}=this._strategy,r=await this.getCacheKey(t,"read"),o=Object.assign(Object.assign({},i),{cacheName:n});a=await caches.match(r,o);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))a=await c({cacheName:n,matchOptions:i,cachedResponse:a,request:r,event:this.event})||void 0;return a}async cachePut(e,t){const a=L(e);await me(0);const n=await this.getCacheKey(a,"write");if(!t)throw new u("cache-put-with-no-response",{url:pe(n.url)});const i=await this._ensureResponseSafeToCache(t);if(!i)return!1;const{cacheName:r,matchOptions:o}=this._strategy,c=await self.caches.open(r),h=this.hasCallback("cacheDidUpdate"),S=h?await ue(c,n.clone(),["__WB_REVISION__"],o):null;try{await c.put(n,h?i.clone():i)}catch(f){if(f instanceof Error)throw f.name==="QuotaExceededError"&&await ge(),f}for(const f of this.iterateCallbacks("cacheDidUpdate"))await f({cacheName:r,oldResponse:S,newResponse:i.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){const a=`${e.url} | ${t}`;if(!this._cacheKeys[a]){let n=e;for(const i of this.iterateCallbacks("cacheKeyWillBeUsed"))n=L(await i({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[a]=n}return this._cacheKeys[a]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const a of this.iterateCallbacks(e))await a(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const a=this._pluginStateMap.get(t);yield i=>{const r=Object.assign(Object.assign({},i),{state:a});return t[e](r)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,a=!1;for(const n of this.iterateCallbacks("cacheWillUpdate"))if(t=await n({request:this.request,response:t,event:this.event})||void 0,a=!0,!t)break;return a||t&&t.status!==200&&(t=void 0),t}}class v{constructor(e={}){this.cacheName=T.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,a=typeof e.request=="string"?new Request(e.request):e.request,n="params"in e?e.params:void 0,i=new Re(this,{event:t,request:a,params:n}),r=this._getResponse(i,a,t),o=this._awaitComplete(r,i,a,t);return[r,o]}async _getResponse(e,t,a){await e.runCallbacks("handlerWillStart",{event:a,request:t});let n;try{if(n=await this._handle(t,e),!n||n.type==="error")throw new u("no-response",{url:t.url})}catch(i){if(i instanceof Error){for(const r of e.iterateCallbacks("handlerDidError"))if(n=await r({error:i,event:a,request:t}),n)break}if(!n)throw i}for(const i of e.iterateCallbacks("handlerWillRespond"))n=await i({event:a,request:t,response:n});return n}async _awaitComplete(e,t,a,n){let i,r;try{i=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:n,request:a,response:i}),await t.doneWaiting()}catch(o){o instanceof Error&&(r=o)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:a,response:i,error:r}),t.destroy(),r)throw r}}class Ce extends v{async _handle(e,t){let a=await t.cacheMatch(e),n;if(!a)try{a=await t.fetchAndCachePut(e)}catch(i){i instanceof Error&&(n=i)}if(!a)throw new u("no-response",{url:e.url,error:n});return a}}const Ae={cacheWillUpdate:async({response:s})=>s.status===200||s.status===0?s:null};class Se extends v{constructor(e={}){super(e),this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(Ae)}async _handle(e,t){const a=t.fetchAndCachePut(e).catch(()=>{});t.waitUntil(a);let n=await t.cacheMatch(e),i;if(!n)try{n=await a}catch(r){r instanceof Error&&(i=r)}if(!n)throw new u("no-response",{url:e.url,error:i});return n}}function G(s){return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const Te=(s,e)=>e.some(t=>s instanceof t);let V,q;function De(){return V||(V=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Le(){return q||(q=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const J=new WeakMap,P=new WeakMap,Y=new WeakMap,k=new WeakMap,x=new WeakMap;function Ue(s){const e=new Promise((t,a)=>{const n=()=>{s.removeEventListener("success",i),s.removeEventListener("error",r)},i=()=>{t(p(s.result)),n()},r=()=>{a(s.error),n()};s.addEventListener("success",i),s.addEventListener("error",r)});return e.then(t=>{t instanceof IDBCursor&&J.set(t,s)}).catch(()=>{}),x.set(e,s),e}function Ie(s){if(P.has(s))return;const e=new Promise((t,a)=>{const n=()=>{s.removeEventListener("complete",i),s.removeEventListener("error",r),s.removeEventListener("abort",r)},i=()=>{t(),n()},r=()=>{a(s.error||new DOMException("AbortError","AbortError")),n()};s.addEventListener("complete",i),s.addEventListener("error",r),s.addEventListener("abort",r)});P.set(s,e)}let N={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return P.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Y.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return p(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function ve(s){N=s(N)}function Pe(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const a=s.call(M(this),e,...t);return Y.set(a,e.sort?e.sort():[e]),p(a)}:Le().includes(s)?function(...e){return s.apply(M(this),e),p(J.get(this))}:function(...e){return p(s.apply(M(this),e))}}function ke(s){return typeof s=="function"?Pe(s):(s instanceof IDBTransaction&&Ie(s),Te(s,De())?new Proxy(s,N):s)}function p(s){if(s instanceof IDBRequest)return Ue(s);if(k.has(s))return k.get(s);const e=ke(s);return e!==s&&(k.set(s,e),x.set(e,s)),e}const M=s=>x.get(s);function xe(s,e,{blocked:t,upgrade:a,blocking:n,terminated:i}={}){const r=indexedDB.open(s,e),o=p(r);return a&&r.addEventListener("upgradeneeded",c=>{a(p(r.result),c.oldVersion,c.newVersion,p(r.transaction),c)}),t&&r.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),o.then(c=>{i&&c.addEventListener("close",()=>i()),n&&c.addEventListener("versionchange",h=>n(h.oldVersion,h.newVersion,h))}).catch(()=>{}),o}function Ne(s,{blocked:e}={}){const t=indexedDB.deleteDatabase(s);return e&&t.addEventListener("blocked",a=>e(a.oldVersion,a)),p(t).then(()=>{})}const Me=["get","getKey","getAll","getAllKeys","count"],Be=["put","add","delete","clear"],B=new Map;function z(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(B.get(e))return B.get(e);const t=e.replace(/FromIndex$/,""),a=e!==t,n=Be.includes(t);if(!(t in(a?IDBIndex:IDBObjectStore).prototype)||!(n||Me.includes(t)))return;const i=async function(r,...o){const c=this.transaction(r,n?"readwrite":"readonly");let h=c.store;return a&&(h=h.index(o.shift())),(await Promise.all([h[t](...o),n&&c.done]))[0]};return B.set(e,i),i}ve(s=>({...s,get:(e,t,a)=>z(e,t)||s.get(e,t,a),has:(e,t)=>!!z(e,t)||s.has(e,t)}));try{self["workbox:expiration:7.2.0"]&&_()}catch{}const Oe="workbox-expiration",C="cache-entries",Q=s=>{const e=new URL(s,location.href);return e.hash="",e.href};class Ke{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(C,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&Ne(this._cacheName)}async setTimestamp(e,t){e=Q(e);const a={url:e,timestamp:t,cacheName:this._cacheName,id:this._getId(e)},i=(await this.getDb()).transaction(C,"readwrite",{durability:"relaxed"});await i.store.put(a),await i.done}async getTimestamp(e){const a=await(await this.getDb()).get(C,this._getId(e));return a?.timestamp}async expireEntries(e,t){const a=await this.getDb();let n=await a.transaction(C).store.index("timestamp").openCursor(null,"prev");const i=[];let r=0;for(;n;){const c=n.value;c.cacheName===this._cacheName&&(e&&c.timestamp<e||t&&r>=t?i.push(n.value):r++),n=await n.continue()}const o=[];for(const c of i)await a.delete(C,c.id),o.push(c.url);return o}_getId(e){return this._cacheName+"|"+Q(e)}async getDb(){return this._db||(this._db=await xe(Oe,1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class We{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new Ke(e)}async expireEntries(){if(this._isRunning){this._rerunRequested=!0;return}this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-this._maxAgeSeconds*1e3:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),a=await self.caches.open(this._cacheName);for(const n of t)await a.delete(n,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,F(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),a=Date.now()-this._maxAgeSeconds*1e3;return t!==void 0?t<a:!0}else return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class Z{constructor(e={}){this.cachedResponseWillBeUsed=async({event:t,request:a,cacheName:n,cachedResponse:i})=>{if(!i)return null;const r=this._isResponseDateFresh(i),o=this._getCacheExpiration(n);F(o.expireEntries());const c=o.updateTimestamp(a.url);if(t)try{t.waitUntil(c)}catch{}return r?i:null},this.cacheDidUpdate=async({cacheName:t,request:a})=>{const n=this._getCacheExpiration(t);await n.updateTimestamp(a.url),await n.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&le(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(e){if(e===T.getRuntimeName())throw new u("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new We(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(t===null)return!0;const a=Date.now();return t>=a-this._maxAgeSeconds*1e3}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),n=new Date(t).getTime();return isNaN(n)?null:n}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}try{self["workbox:precaching:7.2.0"]&&_()}catch{}const je="__WB_REVISION__";function Fe(s){if(!s)throw new u("add-to-cache-list-unexpected-type",{entry:s});if(typeof s=="string"){const i=new URL(s,location.href);return{cacheKey:i.href,url:i.href}}const{revision:e,url:t}=s;if(!t)throw new u("add-to-cache-list-unexpected-type",{entry:s});if(!e){const i=new URL(t,location.href);return{cacheKey:i.href,url:i.href}}const a=new URL(t,location.href),n=new URL(t,location.href);return a.searchParams.set(je,e),{cacheKey:a.href,url:n.href}}class He{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:a})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const n=t.originalRequest.url;a?this.notUpdatedURLs.push(n):this.updatedURLs.push(n)}return a}}}class $e{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:a})=>{const n=a?.cacheKey||this._precacheController.getCacheKeyForURL(t.url);return n?new Request(n,{headers:t.headers}):t},this._precacheController=e}}class m extends v{constructor(e={}){e.cacheName=T.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const a=await t.cacheMatch(e);return a||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let a;const n=t.params||{};if(this._fallbackToNetwork){const i=n.integrity,r=e.integrity,o=!r||r===i;a=await t.fetch(new Request(e,{integrity:e.mode!=="no-cors"?r||i:void 0})),i&&o&&e.mode!=="no-cors"&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,a.clone()))}else throw new u("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return a}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const a=await t.fetch(e);if(!await t.cachePut(e,a.clone()))throw new u("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[a,n]of this.plugins.entries())n!==m.copyRedirectedCacheableResponsesPlugin&&(n===m.defaultPrecacheCacheabilityPlugin&&(e=a),n.cacheWillUpdate&&t++);t===0?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:s}){return!s||s.status>=400?null:s}},m.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:s}){return s.redirected?await we(s):s}};class Ge{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:a=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:T.getPrecacheName(e),plugins:[...t,new $e({precacheController:this})],fallbackToNetwork:a}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const a of e){typeof a=="string"?t.push(a):a&&a.revision===void 0&&t.push(a.url);const{cacheKey:n,url:i}=Fe(a),r=typeof a!="string"&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(i)&&this._urlsToCacheKeys.get(i)!==n)throw new u("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(i),secondEntry:n});if(typeof a!="string"&&a.integrity){if(this._cacheKeysToIntegrities.has(n)&&this._cacheKeysToIntegrities.get(n)!==a.integrity)throw new u("add-to-cache-list-conflicting-integrities",{url:i});this._cacheKeysToIntegrities.set(n,a.integrity)}if(this._urlsToCacheKeys.set(i,n),this._urlsToCacheModes.set(i,r),t.length>0){const o=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(o)}}}install(e){return H(e,async()=>{const t=new He;this.strategy.plugins.push(t);for(const[i,r]of this._urlsToCacheKeys){const o=this._cacheKeysToIntegrities.get(r),c=this._urlsToCacheModes.get(i),h=new Request(i,{integrity:o,cache:c,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:h,event:e}))}const{updatedURLs:a,notUpdatedURLs:n}=t;return{updatedURLs:a,notUpdatedURLs:n}})}activate(e){return H(e,async()=>{const t=await self.caches.open(this.strategy.cacheName),a=await t.keys(),n=new Set(this._urlsToCacheKeys.values()),i=[];for(const r of a)n.has(r.url)||(await t.delete(r),i.push(r.url));return{deletedURLs:i}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,a=this.getCacheKeyForURL(t);if(a)return(await self.caches.open(this.strategy.cacheName)).match(a)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new u("non-precached-url",{url:e});return a=>(a.request=new Request(e),a.params=Object.assign({cacheKey:t},a.params),this.strategy.handle(a))}}let O;const X=()=>(O||(O=new Ge),O);function Ve(s,e=[]){for(const t of[...s.searchParams.keys()])e.some(a=>a.test(t))&&s.searchParams.delete(t);return s}function*qe(s,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:a=!0,urlManipulation:n}={}){const i=new URL(s,location.href);i.hash="",yield i.href;const r=Ve(i,e);if(yield r.href,t&&r.pathname.endsWith("/")){const o=new URL(r.href);o.pathname+=t,yield o.href}if(a){const o=new URL(r.href);o.pathname+=".html",yield o.href}if(n){const o=n({url:i});for(const c of o)yield c.href}}class Je extends b{constructor(e,t){const a=({request:n})=>{const i=e.getURLsToCacheKeys();for(const r of qe(n.url,t)){const o=i.get(r);if(o){const c=e.getIntegrityForCacheKey(o);return{cacheKey:o,integrity:c}}}};super(a,e.strategy)}}function Ye(s){const e=X(),t=new Je(e,s);I(t)}function ze(s){X().precache(s)}function Qe(s,e){ze(s),Ye(e)}const ee=new Date().getFullYear(),d={TIMEZONE:"Europe/Vienna",CURRENT_SEASON:new Date().getMonth()>2?ee:ee-1,SEASONS:[2025,2024,2023,2022,2021],API_BASE:"https://api.hardbulls.com/",BULLS_LEAGUES:["bbl"],ASSET_JSON_CACHE_TTL:60*60,ASSET_IMAGE_CACHE_TTL:60*60*24,SPLASH_TIMEOUT:1800},te={},A=async(s,e,t)=>{let a=te[s],n;if(!a)try{const i=await fetch(`${d.API_BASE}${s}`.replace(/([^:])(\/\/+)/g,"$1/"));if(i.status>=400){if(t)return t(i);n=new Error(`Unhandled error response: ${i.status}`)}else a=await i.json(),te[s]=a}catch(i){if(i instanceof Error&&Ze(i)&&e)return e();throw i}if(n)throw n;return a};function Ze(s){return s.name==="TypeError"&&s.message.includes("Failed to fetch")&&!window.navigator.onLine}class se{static async findAll(){return(await A("/api/leagues.json",()=>[])).map(t=>({id:t.slug,name:t.name,shortName:t.shortName,year:t.year}))}static async findByYear(e){return(await this.findAll()).filter(t=>t.year===e)}static async findByIdAndSeason(e,t){return(await this.findAll()).find(a=>a.id===e&&a.year===t)}}class w{static FIELD_CACHE={};static async findAll(){return(await A("/api/fields.json",()=>[])).map(t=>({teams:t.teams,location:t.location,venue:t.venue,image:t.image?`${d.API_BASE}assets/fields/${t.image}`:void 0,keywords:t.keywords}))}static async findByKeyword(e){const t=w.FIELD_CACHE[e];if(t)return t;if(e.trim()===",")return;const a=(await w.findAll()).find(n=>n.keywords.includes(e))||void 0;return a&&(w.FIELD_CACHE[e]=a),a}}class y{static TEAM_MAPPING={"Hard Bulls":"hb_1","Hard Bulls Bandidos":"hb_2","Hard Bulls Bullets":"hb_3","Hard Barons":"hb_4_sp","Hard Bulls Bandidas":"hb_5_fp","Hard Bulls Bandidas U13":"hb_5_fp","Hard Bulls U8":"hb_1","Hard Bulls U10":"hb_1","Hard Bulls U12":"hb_1","Hard Bulls U13":"hb_1","Hard Bulls U14":"hb_1","Hard Bulls U15":"hb_1","Hard Bulls U16":"hb_1","Feldkirch Cardinals":"fc_1","Feldkirch Cardinals U8":"fc_1","Feldkirch Cardinals U10":"fc_1","Feldkirch Cardinals U12":"fc_1","Feldkirch Cardinals U14":"fc_1","Feldkirch Cardinals U16":"fc_1","Feldkirch Cardinals U13":"fc_1","Feldkirch Cardinals 2":"fc_1","Feldkirch Cardinals 3":"fc_1","Diving Ducks Wr. Neustadt":"dd_1","Wr. Neustadt Diving Ducks":"dd_1","Diving Ducks Wiener Neustadt":"dd_1","Diving Ducks U16 Wr. Neustadt":"dd_1","Diving Ducks U14 Wr. Neustadt":"dd_1","Vienna Wanderers":"vw_1","Vienna Wanderers 2":"vw_1","Vienna Wanderers U16":"vw_1","Vienna Wanderers U14":"vw_1","Vienna Metrostars":"vm_1","Vienna Metrostars 2":"vm_1","Vienna Metrostars U16":"vm_1","Vienna Metrostars U14":"vm_1","Schwechat Blue Bats":"bb_1","Blue Bats Schwechat":"bb_1","Schwechat Blue Bats U14":"bb_1","Traiskirchen Grasshoppers":"gh_1","Traiskirchen Grasshoppers U14":"gh_1","Dornbirn Indians":"di_1","Dornbirn Indians 2":"di_1","Dornbirn Indians 3":"di_1","Dornbirn Indians Minis U8":"di_1","Dornbirn Indians Kids U10":"di_1","Dornbirn Little Indians U12":"di_1","Dornbirn Little Indians U13":"di_1","Dornbirn Indians Ponies U14":"di_1","Dornbirn Legends":"di_2_sp","Dornbirn Redhawks":"di_3_sp","Dornbirn Bears":"di_4_sp","ASAK Athletics":"aa_1","Dirty Sox Graz":"ds_1","Kufstein Vikings":"kv_1","Kufstein Vikings U14":"kv_1","Pirmoser Vikings":"kv_1","Schwaz Tigers":"st_1","Feldkirch Angry Balls":"fc_2_sp","Centurions Wels":"cw_1","SG Indians - Vikings U16":"di_kv_1","SG Indians - Bulls":"di_hb_1","Feldkirch Falcons":"fc_2_fp","Stock City Cubs":"sc_1","Wil Pirates":"ch-wp_1","Baldham Boars":"de-bb_1","Zürich Challengers":"ch-zc_1","Pee Wees St. Pölten":"pw_1_fp","SG Crazy Chicklets - Metrostars":"cc_vw_1_fp","Füssen Royal Bavarians":"de-rb_1"};static async findAll(){return(await A("/api/teams.json",()=>[])).map(t=>({id:t.id,name:t.name,nameShort:t.nameShort,logo:`${d.API_BASE}assets/teams/${t.logo}`}))}static async findByName(e){const t=await y.findAll();for(const a of t)for(const[n,i]of Object.entries(y.TEAM_MAPPING))if(n.trim().toLowerCase()===e.trim().toLowerCase()&&a.id===i)return a;throw new Error(`Team ${e} not found!`)}}function ae(s){return s<new Date}class Xe{static async findAll(e){return(await A("/api/events.json",()=>[])).map(a=>({...a,logo:a.logo?`${d.API_BASE}assets/events/${a.logo}`:void 0,date:new Date(a.date)})).filter(a=>e?!ae(a.date):!0).sort((a,n)=>a.date.getTime()-n.date.getTime())}}async function et(){const s=["api/events.json","api/fields.json","api/leagues.json"];for(const e of await se.findAll())e.year===d.CURRENT_SEASON&&s.push(`api/seasons/${e.year}/${e.id}/games.json`);return s.map(e=>`${d.API_BASE}${e}`)}async function tt(){const s=[];for(const e of await w.findAll())e.image&&s.push(e.image);for(const e of await y.findAll())e.logo&&s.push(e.logo);for(const e of await Xe.findAll(!1))e.logo&&s.push(e.logo);return[...new Set(s)]}class st{static async findScheduledBySeasonAndLeague(e,t,a){const n=await se.findByIdAndSeason(t,e);if(!n)return[];const i=await A(`/api/seasons/${e}/${n.id}/games.json`,()=>[],()=>[]),r=[];for(const o of i){const c=new Date(o.date);(a?!ae(c)&&o.status==="scheduled":!0)&&r.push({home:await y.findByName(o.home),away:await y.findByName(o.away),status:o.status,homeScore:o.homeScore,awayScore:o.awayScore,venue:o.venue?await w.findByKeyword(o.venue):void 0,date:c,league:n})}return Object.values(r).sort((o,c)=>o.date.getTime()-c.date.getTime())}static async findGamesForDay(e,t,a){return(await this.findScheduledBySeasonAndLeague(t,a,!1)).filter(n=>n.date.toDateString()===e.toDateString())}}const ne="state",K={theme:"auto",language:"auto",showPastGames:!1,showPastEvents:!1,leagues:[],season:d.CURRENT_SEASON};class l{static state={...K};static setTheme(e){localStorage.setItem("theme",e),l.state.theme=e}static getTheme(){return l.state.theme}static setLanguage(e){localStorage.setItem("language",e),l.state.language=e}static getLanguage(){return l.state.language}static setShowPastGames(e){localStorage.setItem("showPastGames",JSON.stringify(e)),l.state.showPastGames=e}static getShowPastGames(){return l.state.showPastGames}static setShowPastEvents(e){localStorage.setItem("showPastEvents",JSON.stringify(e)),l.state.showPastEvents=e}static getShowPastEvents(){return l.state.showPastEvents}static setSeason(e){localStorage.setItem("season",e.toString()),l.state.season=e}static getSeason(){return l.state.season}static setLeagues(e){localStorage.setItem("leagues",JSON.stringify(e)),l.state.leagues=e,this.notifyServiceWorker()}static addLeague(e){const t=l.getLeagues();t.includes(e)||(t.push(e),l.setLeagues(t))}static removeLeague(e){l.setLeagues(l.getLeagues().filter(t=>t!==e))}static getLeagues(){return l.state.leagues}static getStateString(){return JSON.stringify(this.state)}static notifyServiceWorker(){typeof window>"u"||typeof document>"u"||navigator.serviceWorker?.controller&&navigator.serviceWorker.controller.postMessage({type:ne,state:this.state})}static load(){const e=localStorage.getItem("leagues");l.state={theme:localStorage.getItem("theme")||"auto",language:localStorage.getItem("language")||"auto",showPastGames:localStorage.getItem("showPastGames")==="true",showPastEvents:localStorage.getItem("showPastEvents")==="true",leagues:e?JSON.parse(e):[],season:Number.parseInt(localStorage.getItem("season")||`${K.season}`)},l.notifyServiceWorker()}}let ie=K;self.addEventListener("message",s=>{s.data&&s.data.type===ne&&(ie=s.data.state)});function at(){return ie}function nt(){return l.getLanguage()==="auto"?navigator.languages!=null?navigator.languages[0].split("-")?.[0]:navigator.language.split("-")?.[0]:l.getLanguage()}var re=(s=>(s.TIME_ONLY="TIME_ONLY",s.DATE_ONLY="DATE_ONLY",s.DATE_TIME="DATE_TIME",s.DATE_TIME_SHORT="DATE_TIME_SHORT",s))(re||{});const it={TIME_ONLY:{timeStyle:"short"},DATE_ONLY:{dateStyle:"full"},DATE_TIME:{dateStyle:"full",timeStyle:"short"},DATE_TIME_SHORT:{dateStyle:"short",timeStyle:"short"}};function rt(s,e){const t=nt();return new Intl.DateTimeFormat(t,it[e]).format(s)}self.__WB_DISABLE_DEV_LOGS=!0,self.addEventListener("install",async s=>{s.waitUntil((async()=>{const e=await caches.open("api-json-cache-v1"),t=await et();await e.addAll(t);const a=await caches.open("api-assets-cache-v1"),n=await tt();await a.addAll(n)})()),await self.skipWaiting()}),ye(),Qe([{"revision":"60e7868ba58e2bcaf2ca9147e8559efd","url":"apple-touch-icon.png"},{"revision":"6618cacd9a1c0b6e18d758cc2329d4b8","url":"assets/EventRepository-CfWHjyBq.js"},{"revision":"b1830746836766a60e30a582eda20578","url":"favicon-96x96.png"},{"revision":"0e6dd72d31b1f7ab24b71f0cce2d31ea","url":"favicon.ico"},{"revision":"149afa82c2cf9297b2e9d5da0bdc75d0","url":"favicon.svg"},{"revision":"037463e7c368b0b8048106af3c040498","url":"icon.svg"},{"revision":"1323f0898d53b404beda23fc08cdca2b","url":"icons/apple_share.svg"},{"revision":"459c024ec54fcd6e6dd6352164f3874a","url":"icons/baseball-helmet.svg"},{"revision":"ed102eaef5e3f23a0bf5a2ba658cae5f","url":"icons/baseball.svg"},{"revision":"78cc32f1b1611d9880bef2fef0708ebf","url":"icons/calendar-dots.svg"},{"revision":"c18781107d773375d30063731b8c4eab","url":"icons/dots-three-circle.svg"},{"revision":"ac7da8ce255583a24fd32c3f4c6fa655","url":"icons/download.svg"},{"revision":"b77014424f62dedc9b471b489a67897c","url":"icons/house-line.svg"},{"revision":"297f26b52ab8a6e5a17f56ffb0732e9f","url":"images/background_landscape.webp"},{"revision":"2d0c37c282625acb66643c2d63b57980","url":"images/background_portrait.webp"},{"revision":"7883a051f230db2a49fc2a66450ec3e4","url":"index.html"},{"revision":"653637a4f1b7a49ac038af4c026f4351","url":"logos/bull.svg"},{"revision":"c03d47b23901a7715c07531772156036","url":"logos/bulls_mlb.svg"},{"revision":"ff6fc0bbd39075b09d61ff5240cf1bc3","url":"logos/hb.svg"},{"revision":"b370129cea77deb55830262a0e69db30","url":"main.f5ooztVd.js"},{"revision":"1b044f744a42f4d3ade26899ac687a2f","url":"manifest.json"},{"revision":"c2442acf86fc450195fbb8cdf5914e8d","url":"web-app-manifest-192x192.png"},{"revision":"fd5483bce400d49f30f49502ee5cc082","url":"web-app-manifest-512x512.png"}]),I(new RegExp(`^${G(d.API_BASE)}api/.*\\.json$`),new Se({cacheName:"api-json-cache-v1",plugins:[new Z({purgeOnQuotaError:!0,maxAgeSeconds:d.ASSET_JSON_CACHE_TTL})]})),I(new RegExp(`^${G(d.API_BASE)}assets/.*\\.(?:png|jpg|jpeg|svg|webp)$`),new Ce({cacheName:"api-assets-cache-v1",plugins:[new Z({maxAgeSeconds:d.ASSET_IMAGE_CACHE_TTL,purgeOnQuotaError:!0})]})),self.addEventListener("message",async s=>{if(s.data&&s.data.type==="triggerPushEvent"){const e=new Date,t=at(),a=[];for(const n of t.leagues)a.push(...await st.findGamesForDay(e,d.CURRENT_SEASON,n));for(const n of a){const i=`${n.away.name} vs. ${n.home.name}`;let r=`${rt(n.date,re.DATE_TIME_SHORT)}`;n.venue&&(r=`${[r,n.venue?.venue,n.venue?.location].filter(Boolean).join(", ")}`),await self.registration.showNotification(i,{body:r})}}}),console.log("app version: 0.0.17-beta")})();
