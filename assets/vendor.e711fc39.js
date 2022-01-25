/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $a(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function qa(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ja(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ba(){return Pe().indexOf("Electron/")>=0}function Ha(){const e=Pe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ka(){return Pe().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="FirebaseError";class Ve extends Error{constructor(t,n,s){super(n);this.code=t,this.customData=s,this.name=Ga,Object.setPrototypeOf(this,Ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?za(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ve(i,a,s)}}function za(e,t){return e.replace(Wa,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Wa=/\{\$([^}]+)}/g;function Bn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Li(r)&&Li(o)){if(!Bn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Li(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){return e&&e._delegate?e._delegate:e}class Fe{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Ua;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ya(t))try{this.getOrInitializeService({instanceIdentifier:Et})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=Et){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Et){return this.instances.has(t)}getOptions(t=Et){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Xa(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Et){return this.component?this.component.multipleInstances?t:Et:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xa(e){return e===Et?void 0:e}function Ya(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Qa(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(b||(b={}));const Za={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},tc=b.INFO,ec={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},nc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=ec[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Oi{constructor(t){this.name=t,this._logLevel=tc,this._logHandler=nc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Za[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ic(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ic(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Hn="@firebase/app",Mi="0.7.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Oi("@firebase/app"),rc="@firebase/app-compat",oc="@firebase/analytics-compat",ac="@firebase/analytics",cc="@firebase/app-check-compat",hc="@firebase/app-check",uc="@firebase/auth",lc="@firebase/auth-compat",fc="@firebase/database",dc="@firebase/database-compat",pc="@firebase/functions",gc="@firebase/functions-compat",mc="@firebase/installations",yc="@firebase/installations-compat",vc="@firebase/messaging",wc="@firebase/messaging-compat",Ec="@firebase/performance",Tc="@firebase/performance-compat",Ic="@firebase/remote-config",Ac="@firebase/remote-config-compat",Sc="@firebase/storage",Cc="@firebase/storage-compat",Nc="@firebase/firestore",bc="@firebase/firestore-compat",kc="firebase",Dc="9.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="[DEFAULT]",Rc={[Hn]:"fire-core",[rc]:"fire-core-compat",[ac]:"fire-analytics",[oc]:"fire-analytics-compat",[hc]:"fire-app-check",[cc]:"fire-app-check-compat",[uc]:"fire-auth",[lc]:"fire-auth-compat",[fc]:"fire-rtdb",[dc]:"fire-rtdb-compat",[pc]:"fire-fn",[gc]:"fire-fn-compat",[mc]:"fire-iid",[yc]:"fire-iid-compat",[vc]:"fire-fcm",[wc]:"fire-fcm-compat",[Ec]:"fire-perf",[Tc]:"fire-perf-compat",[Ic]:"fire-rc",[Ac]:"fire-rc-compat",[Sc]:"fire-gcs",[Cc]:"fire-gcs-compat",[Nc]:"fire-fst",[bc]:"fire-fst-compat","fire-js":"fire-js",[kc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=new Map,Gn=new Map;function _c(e,t){try{e.container.addComponent(t)}catch(n){Kn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function zn(e){const t=e.name;if(Gn.has(t))return Kn.debug(`There were multiple attempts to register component ${t}.`),!1;Gn.set(t,e);for(const n of Ue.values())_c(n,e);return!0}function Lc(e,t){return e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},$e=new _i("app","Firebase",Oc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $e.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=Dc;function xf(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:xi,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw $e.create("bad-app-name",{appName:String(s)});const i=Ue.get(s);if(i){if(Bn(e,i.options)&&Bn(n,i.config))return i;throw $e.create("duplicate-app",{appName:s})}const r=new Ja(s);for(const a of Gn.values())r.addComponent(a);const o=new Mc(e,n,r);return Ue.set(s,o),o}function Pc(e=xi){const t=Ue.get(e);if(!t)throw $e.create("no-app",{appName:e});return t}function xt(e,t,n){var s;let i=(s=Rc[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Kn.warn(a.join(" "));return}zn(new Fe(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(e){zn(new Fe("platform-logger",t=>new sc(t),"PRIVATE")),xt(Hn,Mi,e),xt(Hn,Mi,"esm2017"),xt("fire-js","")}Vc("");var Fc="firebase",Uc="9.6.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(Fc,Uc,"app");var $c=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,Wn=Wn||{},E=$c||self;function qe(){}function Qn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ee(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function qc(e){return Object.prototype.hasOwnProperty.call(e,Xn)&&e[Xn]||(e[Xn]=++jc)}var Xn="closure_uid_"+(1e9*Math.random()>>>0),jc=0;function Bc(e,t,n){return e.call.apply(e.bind,arguments)}function Hc(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function U(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?U=Bc:U=Hc,U.apply(null,arguments)}function je(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function $(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function ft(){this.s=this.s,this.o=this.o}var Kc=0,Gc={};ft.prototype.s=!1;ft.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Kc!=0)){var e=qc(this);delete Gc[e]}};ft.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Pi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Vi=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function zc(e){t:{var t=Fh;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Fi(e){return Array.prototype.concat.apply([],arguments)}function Yn(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Be(e){return/^[\s\xa0]*$/.test(e)}var Ui=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function W(e,t){return e.indexOf(t)!=-1}function Jn(e,t){return e<t?-1:e>t?1:0}var Q;t:{var $i=E.navigator;if($i){var qi=$i.userAgent;if(qi){Q=qi;break t}}Q=""}function Zn(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function ji(e){const t={};for(const n in e)t[n]=e[n];return t}var Bi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hi(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Bi.length;r++)n=Bi[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ts(e){return ts[" "](e),e}ts[" "]=qe;function Wc(e){var t=Yc;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Qc=W(Q,"Opera"),Pt=W(Q,"Trident")||W(Q,"MSIE"),Ki=W(Q,"Edge"),es=Ki||Pt,Gi=W(Q,"Gecko")&&!(W(Q.toLowerCase(),"webkit")&&!W(Q,"Edge"))&&!(W(Q,"Trident")||W(Q,"MSIE"))&&!W(Q,"Edge"),Xc=W(Q.toLowerCase(),"webkit")&&!W(Q,"Edge");function zi(){var e=E.document;return e?e.documentMode:void 0}var He;t:{var ns="",ss=function(){var e=Q;if(Gi)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ki)return/Edge\/([\d\.]+)/.exec(e);if(Pt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Xc)return/WebKit\/(\S+)/.exec(e);if(Qc)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ss&&(ns=ss?ss[1]:""),Pt){var is=zi();if(is!=null&&is>parseFloat(ns)){He=String(is);break t}}He=ns}var Yc={};function Jc(){return Wc(function(){let e=0;const t=Ui(String(He)).split("."),n=Ui("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Jn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Jn(i[2].length==0,r[2].length==0)||Jn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var rs;if(E.document&&Pt){var Wi=zi();rs=Wi||parseInt(He,10)||void 0}else rs=void 0;var Zc=rs,th=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",qe,t),E.removeEventListener("test",qe,t)}catch{}return e}();function K(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}K.prototype.h=function(){this.defaultPrevented=!0};function ne(e,t){if(K.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Gi){t:{try{ts(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:eh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ne.Z.h.call(this)}}$(ne,K);var eh={2:"touch",3:"pen",4:"mouse"};ne.prototype.h=function(){ne.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var se="closure_listenable_"+(1e6*Math.random()|0),nh=0;function sh(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++nh,this.ca=this.fa=!1}function Ke(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Ge(e){this.src=e,this.g={},this.h=0}Ge.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=as(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new sh(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function os(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Pi(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ke(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function as(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var cs="closure_lm_"+(1e6*Math.random()|0),hs={};function Qi(e,t,n,s,i){if(s&&s.once)return Yi(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Qi(e,t[r],n,s,i);return null}return n=ds(n),e&&e[se]?e.N(t,n,ee(s)?!!s.capture:!!s,i):Xi(e,t,n,!1,s,i)}function Xi(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=ee(i)?!!i.capture:!!i,a=ls(e);if(a||(e[cs]=a=new Ge(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=ih(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)th||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Zi(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ih(){function e(n){return t.call(e.src,e.listener,n)}var t=rh;return e}function Yi(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Yi(e,t[r],n,s,i);return null}return n=ds(n),e&&e[se]?e.O(t,n,ee(s)?!!s.capture:!!s,i):Xi(e,t,n,!0,s,i)}function Ji(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Ji(e,t[r],n,s,i);else s=ee(s)?!!s.capture:!!s,n=ds(n),e&&e[se]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=as(r,n,s,i),-1<n&&(Ke(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=ls(e))&&(t=e.g[t.toString()],e=-1,t&&(e=as(t,n,s,i)),(n=-1<e?t[e]:null)&&us(n))}function us(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[se])os(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Zi(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ls(t))?(os(n,e),n.h==0&&(n.src=null,t[cs]=null)):Ke(e)}}}function Zi(e){return e in hs?hs[e]:hs[e]="on"+e}function rh(e,t){if(e.ca)e=!0;else{t=new ne(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&us(e),e=n.call(s,t)}return e}function ls(e){return e=e[cs],e instanceof Ge?e:null}var fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ds(e){return typeof e=="function"?e:(e[fs]||(e[fs]=function(t){return e.handleEvent(t)}),e[fs])}function V(){ft.call(this),this.i=new Ge(this),this.P=this,this.I=null}$(V,ft);V.prototype[se]=!0;V.prototype.removeEventListener=function(e,t,n,s){Ji(this,e,t,n,s)};function q(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new K(t,e);else if(t instanceof K)t.target=t.target||e;else{var i=t;t=new K(s,e),Hi(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=ze(o,s,!0,t)&&i}if(o=t.g=e,i=ze(o,s,!0,t)&&i,i=ze(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=ze(o,s,!1,t)&&i}V.prototype.M=function(){if(V.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Ke(n[s]);delete e.g[t],e.h--}}this.I=null};V.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};V.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function ze(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&os(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var ps=E.JSON.stringify;function oh(){var e=er;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ah{constructor(){this.h=this.g=null}add(t,n){const s=tr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var tr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new ch,e=>e.reset());class ch{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function hh(e){E.setTimeout(()=>{throw e},0)}function gs(e,t){ms||uh(),ys||(ms(),ys=!0),er.add(e,t)}var ms;function uh(){var e=E.Promise.resolve(void 0);ms=function(){e.then(lh)}}var ys=!1,er=new ah;function lh(){for(var e;e=oh();){try{e.h.call(e.g)}catch(n){hh(n)}var t=tr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ys=!1}function We(e,t){V.call(this),this.h=e||1,this.g=t||E,this.j=U(this.kb,this),this.l=Date.now()}$(We,V);g=We.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),q(this,"tick"),this.da&&(vs(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vs(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){We.Z.M.call(this),vs(this),delete this.g};function ws(e,t,n){if(typeof e=="function")n&&(e=U(e,n));else if(e&&typeof e.handleEvent=="function")e=U(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function nr(e){e.g=ws(()=>{e.g=null,e.i&&(e.i=!1,nr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class fh extends ft{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:nr(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ie(e){ft.call(this),this.h=e,this.g={}}$(ie,ft);var sr=[];function ir(e,t,n,s){Array.isArray(n)||(n&&(sr[0]=n.toString()),n=sr);for(var i=0;i<n.length;i++){var r=Qi(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function rr(e){Zn(e.g,function(t,n){this.g.hasOwnProperty(n)&&us(t)},e),e.g={}}ie.prototype.M=function(){ie.Z.M.call(this),rr(this)};ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qe(){this.g=!0}Qe.prototype.Aa=function(){this.g=!1};function dh(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&l[1]=="type"?o+(u+"="+h+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function ph(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Vt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+mh(e,n)+(s?" "+s:"")})}function gh(e,t){e.info(function(){return"TIMEOUT: "+t})}Qe.prototype.info=function(){};function mh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ps(n)}catch{return t}}var Tt={},or=null;function Xe(){return or=or||new V}Tt.Ma="serverreachability";function ar(e){K.call(this,Tt.Ma,e)}$(ar,K);function re(e){const t=Xe();q(t,new ar(t,e))}Tt.STAT_EVENT="statevent";function cr(e,t){K.call(this,Tt.STAT_EVENT,e),this.stat=t}$(cr,K);function X(e){const t=Xe();q(t,new cr(t,e))}Tt.Na="timingevent";function hr(e,t){K.call(this,Tt.Na,e),this.size=t}$(hr,K);function oe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var Ye={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ur={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Es(){}Es.prototype.h=null;function lr(e){return e.h||(e.h=e.i())}function fr(){}var ae={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ts(){K.call(this,"d")}$(Ts,K);function Is(){K.call(this,"c")}$(Is,K);var As;function Je(){}$(Je,Es);Je.prototype.g=function(){return new XMLHttpRequest};Je.prototype.i=function(){return{}};As=new Je;function ce(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new ie(this),this.P=yh,e=es?125:void 0,this.W=new We(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new dr}function dr(){this.i=null,this.g="",this.h=!1}var yh=45e3,Ss={},Ze={};g=ce.prototype;g.setTimeout=function(e){this.P=e};function Cs(e,t,n){e.K=1,e.v=rn(ht(t)),e.s=n,e.U=!0,pr(e,null)}function pr(e,t){e.F=Date.now(),he(e),e.A=ht(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Ar(n.h,"t",s),e.C=0,n=e.l.H,e.h=new dr,e.g=Gr(e.l,n?t:null,!e.s),0<e.O&&(e.L=new fh(U(e.Ia,e,e.g),e.O)),ir(e.V,e.g,"readystatechange",e.gb),t=e.H?ji(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),re(1),dh(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&ut(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const u=ut(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>u)&&(u!=3||es||this.g&&(this.h.h||this.g.ga()||xr(this.g)))){this.I||u!=4||t==7||(t==8||0>=l?re(3):re(2)),tn(this);var n=this.g.ba();this.N=n;e:if(gr(this)){var s=xr(this.g);e="";var i=s.length,r=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){It(this),ue(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,ph(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Be(a)){var h=a;break e}}h=null}if(n=h)Vt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ns(this,n);else{this.i=!1,this.o=3,X(12),It(this),ue(this);break t}}this.U?(mr(this,u,o),es&&this.i&&u==3&&(ir(this.V,this.W,"tick",this.fb),this.W.start())):(Vt(this.j,this.m,o,null),Ns(this,o)),u==4&&It(this),this.i&&!this.I&&(u==4?jr(this.l,this):(this.i=!1,he(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,X(12)):(this.o=0,X(13)),It(this),ue(this)}}}catch{}finally{}};function gr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function mr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=vh(e,n),i==Ze){t==4&&(e.o=4,X(14),s=!1),Vt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Ss){e.o=4,X(15),Vt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Vt(e.j,e.m,i,null),Ns(e,i);gr(e)&&i!=Ze&&i!=Ss&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,X(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vs(t),t.L=!0,X(11))):(Vt(e.j,e.m,n,"[Invalid Chunked Response]"),It(e),ue(e))}g.fb=function(){if(this.g){var e=ut(this.g),t=this.g.ga();this.C<t.length&&(tn(this),mr(this,e,t),this.i&&e!=4&&he(this))}};function vh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Ze:(n=Number(t.substring(n,s)),isNaN(n)?Ss:(s+=1,s+n>t.length?Ze:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,It(this)};function he(e){e.Y=Date.now()+e.P,yr(e,e.P)}function yr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=oe(U(e.eb,e),t)}function tn(e){e.B&&(E.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(gh(this.j,this.A),this.K!=2&&(re(3),X(17)),It(this),this.o=2,ue(this)):yr(this,this.Y-e)};function ue(e){e.l.G==0||e.I||jr(e.l,e)}function It(e){tn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,vs(e.W),rr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ns(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Ds(n.i,e))){if(n.I=e.N,!e.J&&Ds(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0)t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)ln(n),hn(n);else break t;Ps(n),X(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=oe(U(n.ab,n),6e3));if(1>=Nr(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Ct(n,11)}else if((e.J||n.g==e)&&ln(n),!Be(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.U=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.J=h[1],n.la=h[2];const u=h[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const l=h[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const d=h[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.i;!r.g&&(W(v,"spdy")||W(v,"quic")||W(v,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Rs(r,r.h),r.h=null))}if(s.D){const N=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(s.sa=N,_(s.F,s.D,N))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=Kr(s,s.H?s.la:null,s.W),o.J){br(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(tn(a),he(a)),s.g=o}else $r(s);0<n.l.length&&un(n)}else h[0]!="stop"&&h[0]!="close"||Ct(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Ct(n,7):Ms(n):h[0]!="noop"&&n.j&&n.j.wa(h),n.A=0)}}re(4)}catch{}}function wh(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Qn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function bs(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Qn(e)||typeof e=="string")Vi(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Qn(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=wh(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function Ft(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Ft)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=Ft.prototype;g.R=function(){ks(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return ks(this),this.g.concat()};function ks(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];At(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],At(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}g.get=function(e,t){return At(this.h,e)?this.h[e]:t};g.set=function(e,t){At(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function At(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var vr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Eh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function St(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof St){this.g=t!==void 0?t:e.g,en(this,e.j),this.s=e.s,nn(this,e.i),sn(this,e.m),this.l=e.l,t=e.h;var n=new de;n.i=t.i,t.g&&(n.g=new Ft(t.g),n.h=t.h),wr(this,n),this.o=e.o}else e&&(n=String(e).match(vr))?(this.g=!!t,en(this,n[1]||"",!0),this.s=le(n[2]||""),nn(this,n[3]||"",!0),sn(this,n[4]),this.l=le(n[5]||"",!0),wr(this,n[6]||"",!0),this.o=le(n[7]||"")):(this.g=!!t,this.h=new de(null,this.g))}St.prototype.toString=function(){var e=[],t=this.j;t&&e.push(fe(t,Er,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(fe(t,Er,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(fe(n,n.charAt(0)=="/"?Ch:Sh,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",fe(n,bh)),e.join("")};function ht(e){return new St(e)}function en(e,t,n){e.j=n?le(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function nn(e,t,n){e.i=n?le(t,!0):t}function sn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function wr(e,t,n){t instanceof de?(e.h=t,kh(e.h,e.g)):(n||(t=fe(t,Nh)),e.h=new de(t,e.g))}function _(e,t,n){e.h.set(t,n)}function rn(e){return _(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Th(e){return e instanceof St?ht(e):new St(e,void 0)}function Ih(e,t,n,s){var i=new St(null,void 0);return e&&en(i,e),t&&nn(i,t),n&&sn(i,n),s&&(i.l=s),i}function le(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function fe(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Ah),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ah(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Er=/[#\/\?@]/g,Sh=/[#\?:]/g,Ch=/[#\?]/g,Nh=/[#\?@]/g,bh=/#/g;function de(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function dt(e){e.g||(e.g=new Ft,e.h=0,e.i&&Eh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=de.prototype;g.add=function(e,t){dt(this),this.i=null,e=Ut(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Tr(e,t){dt(e),t=Ut(e,t),At(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,At(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&ks(e)))}function Ir(e,t){return dt(e),t=Ut(e,t),At(e.g.h,t)}g.forEach=function(e,t){dt(this),this.g.forEach(function(n,s){Vi(n,function(i){e.call(t,i,s,this)},this)},this)};g.T=function(){dt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};g.R=function(e){dt(this);var t=[];if(typeof e=="string")Ir(this,e)&&(t=Fi(t,this.g.get(Ut(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Fi(t,e[n])}return t};g.set=function(e,t){return dt(this),this.i=null,e=Ut(this,e),Ir(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Ar(e,t,n){Tr(e,t),0<n.length&&(e.i=null,e.g.set(Ut(e,t),Yn(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function Ut(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function kh(e,t){t&&!e.j&&(dt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Tr(this,s),Ar(this,i,n))},e)),e.j=t}var Dh=class{constructor(e,t){this.h=e,this.g=t}};function Sr(e){this.l=e||Rh,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ea&&E.g.Ea()&&E.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Rh=10;function Cr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Nr(e){return e.h?1:e.g?e.g.size:0}function Ds(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Rs(e,t){e.g?e.g.add(t):e.h=t}function br(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Sr.prototype.cancel=function(){if(this.i=kr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function kr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Yn(e.i)}function _s(){}_s.prototype.stringify=function(e){return E.JSON.stringify(e,void 0)};_s.prototype.parse=function(e){return E.JSON.parse(e,void 0)};function _h(){this.g=new _s}function Lh(e,t,n){const s=n||"";try{bs(e,function(i,r){let o=i;ee(i)&&(o=ps(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Oh(e,t){const n=new Qe;if(E.Image){const s=new Image;s.onload=je(on,n,s,"TestLoadImage: loaded",!0,t),s.onerror=je(on,n,s,"TestLoadImage: error",!1,t),s.onabort=je(on,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=je(on,n,s,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function on(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function pe(e){this.l=e.$b||null,this.j=e.ib||!1}$(pe,Es);pe.prototype.g=function(){return new an(this.l,this.j)};pe.prototype.i=function(e){return function(){return e}}({});function an(e,t){V.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ls,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$(an,V);var Ls=0;g=an.prototype;g.open=function(e,t){if(this.readyState!=Ls)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,me(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||E).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ge(this)),this.readyState=Ls};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,me(this)),this.g&&(this.readyState=3,me(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof E.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dr(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Dr(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ge(this):me(this),this.readyState==3&&Dr(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,ge(this))};g.Ta=function(e){this.g&&(this.response=e,ge(this))};g.ha=function(){this.g&&ge(this)};function ge(e){e.readyState=4,e.l=null,e.j=null,e.A=null,me(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function me(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(an.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Mh=E.JSON.parse;function M(e){V.call(this),this.headers=new Ft,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Rr,this.K=this.L=!1}$(M,V);var Rr="",xh=/^https?$/i,Ph=["POST","PUT"];g=M.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():As.g(),this.C=this.u?lr(this.u):lr(As),this.g.onreadystatechange=U(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){_r(this,r);return}e=n||"";const i=new Ft(this.headers);s&&bs(s,function(r,o){i.set(o,r)}),s=zc(i.T()),n=E.FormData&&e instanceof E.FormData,!(0<=Pi(Ph,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Mr(this),0<this.B&&((this.K=Vh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=U(this.pa,this)):this.A=ws(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){_r(this,r)}};function Vh(e){return Pt&&Jc()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Fh(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof Wn!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,q(this,"timeout"),this.abort(8))};function _r(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Lr(e),cn(e)}function Lr(e){e.D||(e.D=!0,q(e,"complete"),q(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,q(this,"complete"),q(this,"abort"),cn(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),cn(this,!0)),M.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?Or(this):this.cb())};g.cb=function(){Or(this)};function Or(e){if(e.h&&typeof Wn!="undefined"&&(!e.C[1]||ut(e)!=4||e.ba()!=2)){if(e.v&&ut(e)==4)ws(e.Fa,0,e);else if(q(e,"readystatechange"),ut(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(vr)[1]||null;if(!i&&E.self&&E.self.location){var r=E.self.location.protocol;i=r.substr(0,r.length-1)}s=!xh.test(i?i.toLowerCase():"")}n=s}if(n)q(e,"complete"),q(e,"success");else{e.m=6;try{var o=2<ut(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Lr(e)}}finally{cn(e)}}}}function cn(e,t){if(e.g){Mr(e);const n=e.g,s=e.C[0]?qe:null;e.g=null,e.C=null,t||q(e,"ready");try{n.onreadystatechange=s}catch{}}}function Mr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}function ut(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Mh(t)}};function xr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Rr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Uh(e){let t="";return Zn(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Os(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Uh(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):_(e,t,n))}function ye(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Pr(e){this.za=0,this.l=[],this.h=new Qe,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ye("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ye("baseRetryDelayMs",5e3,e),this.$a=ye("retryDelaySeedMs",1e4,e),this.Ya=ye("forwardChannelMaxRetries",2,e),this.ra=ye("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Sr(e&&e.concurrentRequestLimit),this.Ca=new _h,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=Pr.prototype;g.ma=8;g.G=1;function Ms(e){if(Vr(e),e.G==3){var t=e.V++,n=ht(e.F);_(n,"SID",e.J),_(n,"RID",t),_(n,"TYPE","terminate"),ve(e,n),t=new ce(e,e.h,t,void 0),t.K=2,t.v=rn(ht(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(t.v.toString(),"")),!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=Gr(t.l,null),t.g.ea(t.v)),t.F=Date.now(),he(t)}Hr(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function hn(e){e.g&&(Vs(e),e.g.cancel(),e.g=null)}function Vr(e){hn(e),e.u&&(E.clearTimeout(e.u),e.u=null),ln(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function xs(e,t){e.l.push(new Dh(e.Za++,t)),e.G==3&&un(e)}function un(e){Cr(e.i)||e.m||(e.m=!0,gs(e.Ha,e),e.C=0)}function $h(e,t){return Nr(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=oe(U(e.Ha,e,t),Br(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new ce(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=ji(r),Hi(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ur(this,i,t),n=ht(this.F),_(n,"RID",e),_(n,"CVER",22),this.D&&_(n,"X-HTTP-Session-Id",this.D),ve(this,n),this.o&&r&&Os(n,this.o,r),Rs(this.i,i),this.Ra&&_(n,"TYPE","init"),this.ja?(_(n,"$req",t),_(n,"SID","null"),i.$=!0,Cs(i,n,null)):Cs(i,n,t),this.G=2}}else this.G==3&&(e?Fr(this,e):this.l.length==0||Cr(this.i)||Fr(this))};function Fr(e,t){var n;t?n=t.m:n=e.V++;const s=ht(e.F);_(s,"SID",e.J),_(s,"RID",n),_(s,"AID",e.U),ve(e,s),e.o&&e.s&&Os(s,e.o,e.s),n=new ce(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Ur(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Rs(e.i,n),Cs(n,s,t)}function ve(e,t){e.j&&bs({},function(n,s){_(t,s,n)})}function Ur(e,t,n){n=Math.min(e.l.length,n);var s=e.j?U(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let h=i[c].h;const u=i[c].g;if(h-=r,0>h)r=Math.max(0,i[c].h-100),a=!1;else try{Lh(u,o,"req"+h+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function $r(e){e.g||e.u||(e.Y=1,gs(e.Ga,e),e.A=0)}function Ps(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=oe(U(e.Ga,e),Br(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,qr(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=oe(U(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,X(10),hn(this),qr(this))};function Vs(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function qr(e){e.g=new ce(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=ht(e.oa);_(t,"RID","rpc"),_(t,"SID",e.J),_(t,"CI",e.N?"0":"1"),_(t,"AID",e.U),ve(e,t),_(t,"TYPE","xmlhttp"),e.o&&e.s&&Os(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=rn(ht(t)),n.s=null,n.U=!0,pr(n,e)}g.ab=function(){this.v!=null&&(this.v=null,hn(this),Ps(this),X(19))};function ln(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function jr(e,t){var n=null;if(e.g==t){ln(e),Vs(e),e.g=null;var s=2}else if(Ds(e.i,t))n=t.D,br(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=Xe(),q(s,new hr(s,n,t,i)),un(e)}else $r(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&$h(e,t)||s==2&&Ps(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Ct(e,5);break;case 4:Ct(e,10);break;case 3:Ct(e,6);break;default:Ct(e,2)}}}function Br(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Ct(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=U(e.jb,e);n||(n=new St("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||en(n,"https"),rn(n)),Oh(n.toString(),s)}else X(2);e.G=0,e.j&&e.j.va(t),Hr(e),Vr(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),X(2)):(this.h.info("Failed to ping google.com"),X(1))};function Hr(e){e.G=0,e.I=-1,e.j&&((kr(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Yn(e.l),e.l.length=0),e.j.ua())}function Kr(e,t,n){let s=Th(n);if(s.i!="")t&&nn(s,t+"."+s.i),sn(s,s.m);else{const i=E.location;s=Ih(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&Zn(e.aa,function(i,r){_(s,r,i)}),t=e.D,n=e.sa,t&&n&&_(s,t,n),_(s,"VER",e.ma),ve(e,s),s}function Gr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new M(new pe({ib:!0})):new M(e.qa),t.L=e.H,t}function zr(){}g=zr.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function fn(){if(Pt&&!(10<=Number(Zc)))throw Error("Environmental error: no available transport.")}fn.prototype.g=function(e,t){return new et(e,t)};function et(e,t){V.call(this),this.g=new Pr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Be(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Be(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new $t(this)}$(et,V);et.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),gs(U(e.hb,e,t))),X(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Kr(e,null,e.W),un(e)};et.prototype.close=function(){Ms(this.g)};et.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,xs(this.g,t)}else this.v?(t={},t.__data__=ps(e),xs(this.g,t)):xs(this.g,e)};et.prototype.M=function(){this.g.j=null,delete this.j,Ms(this.g),delete this.g,et.Z.M.call(this)};function Wr(e){Ts.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}$(Wr,Ts);function Qr(){Is.call(this),this.status=1}$(Qr,Is);function $t(e){this.g=e}$($t,zr);$t.prototype.xa=function(){q(this.g,"a")};$t.prototype.wa=function(e){q(this.g,new Wr(e))};$t.prototype.va=function(e){q(this.g,new Qr(e))};$t.prototype.ua=function(){q(this.g,"b")};fn.prototype.createWebChannel=fn.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;Ye.NO_ERROR=0;Ye.TIMEOUT=8;Ye.HTTP_ERROR=6;ur.COMPLETE="complete";fr.EventType=ae;ae.OPEN="a";ae.CLOSE="b";ae.ERROR="c";ae.MESSAGE="d";V.prototype.listen=V.prototype.N;M.prototype.listenOnce=M.prototype.O;M.prototype.getLastError=M.prototype.La;M.prototype.getLastErrorCode=M.prototype.Da;M.prototype.getStatus=M.prototype.ba;M.prototype.getResponseJson=M.prototype.Qa;M.prototype.getResponseText=M.prototype.ga;M.prototype.send=M.prototype.ea;var qh=function(){return new fn},jh=function(){return Xe()},Fs=Ye,Bh=ur,Hh=Tt,Xr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Kh=pe,dn=fr,Gh=M;const Yr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt="9.6.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new Oi("@firebase/firestore");function Jr(){return Nt.logLevel}function y(e,...t){if(Nt.logLevel<=b.DEBUG){const n=t.map(Us);Nt.debug(`Firestore (${qt}): ${e}`,...n)}}function pt(e,...t){if(Nt.logLevel<=b.ERROR){const n=t.map(Us);Nt.error(`Firestore (${qt}): ${e}`,...n)}}function Zr(e,...t){if(Nt.logLevel<=b.WARN){const n=t.map(Us);Nt.warn(`Firestore (${qt}): ${e}`,...n)}}function Us(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${qt}) INTERNAL ASSERTION FAILED: `+e;throw pt(t),new Error(t)}function D(e,t){e||I()}function A(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Ve{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class Qh{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new gt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new gt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(D(typeof s.accessToken=="string"),new zh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return D(t===null||typeof t=="string"),new J(t)}}class Xh{constructor(t,n,s){this.type="FirstParty",this.user=J.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Yh{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Xh(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zh{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,n){this.o=i=>{t.enqueueRetryable(()=>(r=>(r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`),n(r.token)))(i))};const s=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(D(typeof n.token=="string"),new Jh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.p(s),this.T=s=>n.writeSequenceNumber(s))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$s.I=-1;class to{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=tu(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function k(e,t){return e<t?-1:e>t?1:0}function jt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new nt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new nt(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function bt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function no(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return we.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof we?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class L extends we{construct(t,n,s){return new L(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new L(n)}static emptyPath(){return new L([])}}const eu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends we{construct(t,n,s){return new Z(t,n,s)}static isValidIdentifier(t){return eu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(n)}static emptyPath(){return new Z([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.fields=t,t.sort(Z.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return jt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new j(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new j(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}j.EMPTY_BYTE_STRING=new j("");const nu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mt(e){if(D(!!e),typeof e=="string"){let t=0;const n=nu.exec(e);if(D(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:x(e.seconds),nanos:x(e.nanos)}}function x(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Bt(e){return typeof e=="string"?j.fromBase64String(e):j.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function io(e){const t=e.mapValue.fields.__previous_value__;return so(t)?io(t):t}function Te(e){const t=mt(e.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e){return e==null}function pn(e){return e===0&&1/e==-1/0}function su(e){return typeof e=="number"&&Number.isInteger(e)&&!pn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(L.fromString(t))}static fromName(t){return new T(L.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return t!==null&&L.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return L.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new L(t.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?so(e)?4:10:I()}function it(e,t){if(e===t)return!0;const n=kt(e);if(n!==kt(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Te(e).isEqual(Te(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=mt(s.timestampValue),o=mt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Bt(s.bytesValue).isEqual(Bt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return x(s.geoPointValue.latitude)===x(i.geoPointValue.latitude)&&x(s.geoPointValue.longitude)===x(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return x(s.integerValue)===x(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=x(s.doubleValue),o=x(i.doubleValue);return r===o?pn(r)===pn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return jt(e.arrayValue.values||[],t.arrayValue.values||[],it);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(eo(r)!==eo(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!it(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function Ie(e,t){return(e.values||[]).find(n=>it(n,t))!==void 0}function Kt(e,t){if(e===t)return 0;const n=kt(e),s=kt(t);if(n!==s)return k(n,s);switch(n){case 0:return 0;case 1:return k(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=x(i.integerValue||i.doubleValue),a=x(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return ro(e.timestampValue,t.timestampValue);case 4:return ro(Te(e),Te(t));case 5:return k(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Bt(i),a=Bt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const h=k(o[c],a[c]);if(h!==0)return h}return k(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=k(x(i.latitude),x(r.latitude));return o!==0?o:k(x(i.longitude),x(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const h=Kt(o[c],a[c]);if(h)return h}return k(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),c=r.fields||{},h=Object.keys(c);a.sort(),h.sort();for(let u=0;u<a.length&&u<h.length;++u){const l=k(a[u],h[u]);if(l!==0)return l;const d=Kt(o[a[u]],c[h[u]]);if(d!==0)return d}return k(a.length,h.length)}(e.mapValue,t.mapValue);default:throw I()}}function ro(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return k(e,t);const n=mt(e),s=mt(t),i=k(n.seconds,s.seconds);return i!==0?i:k(n.nanos,s.nanos)}function qs(e){return js(e)}function js(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=mt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Bt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,T.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=js(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${js(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function Bs(e){return!!e&&"integerValue"in e}function Hs(e){return!!e&&"arrayValue"in e}function oo(e){return!!e&&"nullValue"in e}function ao(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function gn(e){return!!e&&"mapValue"in e}function Ae(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return bt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ae(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ae(e.arrayValue.values[n]);return t}return Object.assign({},e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.value=t}static empty(){return new st({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!gn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ae(n)}setAll(t){let n=Z.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Ae(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());gn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return it(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];gn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){bt(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new st(Ae(this.value))}}function co(e){const t=[];return bt(e.fields,(n,s)=>{const i=new Z([n]);if(gn(s)){const r=co(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new Ee(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n,s,i,r){this.key=t,this.documentType=n,this.version=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new G(t,0,C.min(),st.empty(),0)}static newFoundDocument(t,n,s){return new G(t,1,n,s,0)}static newNoDocument(t,n){return new G(t,2,n,st.empty(),0)}static newUnknownDocument(t,n){return new G(t,3,n,st.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof G&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new G(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.R=null}}function ho(e,t=null,n=[],s=[],i=null,r=null,o=null){return new iu(e,t,n,s,i,r,o)}function Ks(e){const t=A(e);if(t.R===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>ou(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ht(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=mn(t.startAt)),t.endAt&&(n+="|ub:",n+=mn(t.endAt)),t.R=n}return t.R}function ru(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${qs(s.value)}`;var s}).join(", ")}]`),Ht(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: "+mn(e.startAt)),e.endAt&&(t+=", endAt: "+mn(e.endAt)),`Target(${t})`}function Gs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!pu(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!it(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!fo(e.startAt,t.startAt)&&fo(e.endAt,t.endAt)}function zs(e){return T.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class tt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.P(t,n,s):new au(t,n,s):n==="array-contains"?new uu(t,s):n==="in"?new lu(t,s):n==="not-in"?new fu(t,s):n==="array-contains-any"?new du(t,s):new tt(t,n,s)}static P(t,n,s){return n==="in"?new cu(t,s):new hu(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v(Kt(n,this.value)):n!==null&&kt(this.value)===kt(n)&&this.v(Kt(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function ou(e){return e.field.canonicalString()+e.op.toString()+qs(e.value)}class au extends tt{constructor(t,n,s){super(t,n,s),this.key=T.fromName(s.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.v(n)}}class cu extends tt{constructor(t,n){super(t,"in",n),this.keys=uo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class hu extends tt{constructor(t,n){super(t,"not-in",n),this.keys=uo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function uo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>T.fromName(s.referenceValue))}class uu extends tt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Hs(n)&&Ie(n.arrayValue,this.value)}}class lu extends tt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ie(this.value.arrayValue,n)}}class fu extends tt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ie(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ie(this.value.arrayValue,n)}}class du extends tt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Hs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ie(this.value.arrayValue,s))}}class Ws{constructor(t,n){this.position=t,this.before=n}}function mn(e){return`${e.before?"b":"a"}:${e.position.map(t=>qs(t)).join(",")}`}class Se{constructor(t,n="asc"){this.field=t,this.dir=n}}function pu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function lo(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),n.key):s=Kt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return e.before?s<=0:s<0}function fo(e,t){if(e===null)return t===null;if(t===null||e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!it(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.D=null,this.startAt,this.endAt}}function gu(e,t,n,s,i,r,o,a){return new yn(e,t,n,s,i,r,o,a)}function vn(e){return new yn(e)}function wn(e){return!Ht(e.limit)&&e.limitType==="F"}function En(e){return!Ht(e.limit)&&e.limitType==="L"}function mu(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function yu(e){for(const t of e.filters)if(t.V())return t.field;return null}function vu(e){return e.collectionGroup!==null}function Ce(e){const t=A(e);if(t.S===null){t.S=[];const n=yu(t),s=mu(t);if(n!==null&&s===null)n.isKeyField()||t.S.push(new Se(n)),t.S.push(new Se(Z.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.S.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new Se(Z.keyField(),r))}}}return t.S}function Dt(e){const t=A(e);if(!t.D)if(t.limitType==="F")t.D=ho(t.path,t.collectionGroup,Ce(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Ce(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new Se(r.field,o))}const s=t.endAt?new Ws(t.endAt.position,!t.endAt.before):null,i=t.startAt?new Ws(t.startAt.position,!t.startAt.before):null;t.D=ho(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.D}function wu(e,t,n){return new yn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Tn(e,t){return Gs(Dt(e),Dt(t))&&e.limitType===t.limitType}function po(e){return`${Ks(Dt(e))}|lt:${e.limitType}`}function Qs(e){return`Query(target=${ru(Dt(e))}; limitType=${e.limitType})`}function In(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):T.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!lo(n.startAt,Ce(n),s)||n.endAt&&lo(n.endAt,Ce(n),s))}(e,t)}function go(e){return(t,n)=>{let s=!1;for(const i of Ce(e)){const r=Eu(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Eu(e,t,n){const s=e.field.isKeyField()?T.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Kt(a,c):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pn(t)?"-0":t}}function yo(e){return{integerValue:""+e}}function Tu(e,t){return su(t)?yo(t):mo(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this._=void 0}}function Iu(e,t,n){return e instanceof Sn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Ne?wo(e,t):e instanceof be?Eo(e,t):function(s,i){const r=vo(s,i),o=To(r)+To(s.N);return Bs(r)&&Bs(s.N)?yo(o):mo(s.k,o)}(e,t)}function Au(e,t,n){return e instanceof Ne?wo(e,t):e instanceof be?Eo(e,t):n}function vo(e,t){return e instanceof Cn?Bs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Sn extends An{}class Ne extends An{constructor(t){super(),this.elements=t}}function wo(e,t){const n=Io(t);for(const s of e.elements)n.some(i=>it(i,s))||n.push(s);return{arrayValue:{values:n}}}class be extends An{constructor(t){super(),this.elements=t}}function Eo(e,t){let n=Io(t);for(const s of e.elements)n=n.filter(i=>!it(i,s));return{arrayValue:{values:n}}}class Cn extends An{constructor(t,n){super(),this.k=t,this.N=n}}function To(e){return x(e.integerValue||e.doubleValue)}function Io(e){return Hs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Su(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ne&&s instanceof Ne||n instanceof be&&s instanceof be?jt(n.elements,s.elements,it):n instanceof Cn&&s instanceof Cn?it(n.N,s.N):n instanceof Sn&&s instanceof Sn}(e.transform,t.transform)}class Cu{constructor(t,n){this.version=t,this.transformResults=n}}class yt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new yt}static exists(t){return new yt(void 0,t)}static updateTime(t){return new yt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class bn{}function Nu(e,t,n){e instanceof kn?function(s,i,r){const o=s.value.clone(),a=No(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Rt?function(s,i,r){if(!Nn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=No(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Co(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function Xs(e,t,n){e instanceof kn?function(s,i,r){if(!Nn(s.precondition,i))return;const o=s.value.clone(),a=bo(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(So(i),o).setHasLocalMutations()}(e,t,n):e instanceof Rt?function(s,i,r){if(!Nn(s.precondition,i))return;const o=bo(s.fieldTransforms,r,i),a=i.data;a.setAll(Co(s)),a.setAll(o),i.convertToFoundDocument(So(i),a).setHasLocalMutations()}(e,t,n):function(s,i){Nn(s.precondition,i)&&i.convertToNoDocument(C.min())}(e,t)}function bu(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=vo(s.transform,i||null);r!=null&&(n==null&&(n=st.empty()),n.set(s.field,r))}return n||null}function Ao(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&jt(n,s,(i,r)=>Su(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function So(e){return e.isFoundDocument()?e.version:C.min()}class kn extends bn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class Rt extends bn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Co(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function No(e,t,n){const s=new Map;D(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Au(o,a,n[i]))}return s}function bo(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Iu(r,o,t))}return s}class ku extends bn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Du extends bn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P,S;function _u(e){switch(e){default:return I();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function ko(e){if(e===void 0)return pt("GRPC error has no .code"),f.UNKNOWN;switch(e){case P.OK:return f.OK;case P.CANCELLED:return f.CANCELLED;case P.UNKNOWN:return f.UNKNOWN;case P.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case P.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case P.INTERNAL:return f.INTERNAL;case P.UNAVAILABLE:return f.UNAVAILABLE;case P.UNAUTHENTICATED:return f.UNAUTHENTICATED;case P.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case P.NOT_FOUND:return f.NOT_FOUND;case P.ALREADY_EXISTS:return f.ALREADY_EXISTS;case P.PERMISSION_DENIED:return f.PERMISSION_DENIED;case P.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case P.ABORTED:return f.ABORTED;case P.OUT_OF_RANGE:return f.OUT_OF_RANGE;case P.UNIMPLEMENTED:return f.UNIMPLEMENTED;case P.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(S=P||(P={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t,n){this.comparator=t,this.root=n||B.EMPTY}insert(t,n){return new z(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,B.BLACK,null,null))}remove(t){return new z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,B.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dn(this.root,t,this.comparator,!0)}}class Dn{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class B{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:B.RED,this.left=i!=null?i:B.EMPTY,this.right=r!=null?r:B.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new B(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return B.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.comparator=t,this.data=new z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Do(this.data.getIterator())}getIteratorFrom(t){return new Do(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof H)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new H(this.comparator);return n.data=t,n}}class Do{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new z(T.comparator);function _t(){return Lu}const Ou=new z(T.comparator);function Ys(){return Ou}const Mu=new z(T.comparator);function xu(){return Mu}const Pu=new H(T.comparator);function R(...e){let t=Pu;for(const n of e)t=t.add(n);return t}const Vu=new H(k);function Ro(){return Vu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,ke.createSynthesizedTargetChangeForCurrentChange(t,n)),new Rn(C.min(),s,Ro(),_t(),R())}}class ke{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new ke(j.EMPTY_BYTE_STRING,n,R(),R(),R())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,n,s,i){this.$=t,this.removedTargetIds=n,this.key=s,this.O=i}}class _o{constructor(t,n){this.targetId=t,this.M=n}}class Lo{constructor(t,n,s=j.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Oo{constructor(){this.F=0,this.L=xo(),this.B=j.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=R(),n=R(),s=R();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new ke(this.B,this.U,t,n,s)}H(){this.q=!1,this.L=xo()}J(t,n){this.q=!0,this.L=this.L.insert(t,n)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class Fu{constructor(t){this.et=t,this.nt=new Map,this.st=_t(),this.it=Mo(),this.rt=new H(k)}ot(t){for(const n of t.$)t.O&&t.O.isFoundDocument()?this.ct(n,t.O):this.at(n,t.key,t.O);for(const n of t.removedTargetIds)this.at(n,t.key,t.O)}ut(t){this.forEachTarget(t,n=>{const s=this.ht(n);switch(t.state){case 0:this.lt(n)&&s.W(t.resumeToken);break;case 1:s.Z(),s.K||s.H(),s.W(t.resumeToken);break;case 2:s.Z(),s.K||this.removeTarget(n);break;case 3:this.lt(n)&&(s.tt(),s.W(t.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),s.W(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.nt.forEach((s,i)=>{this.lt(i)&&n(i)})}dt(t){const n=t.targetId,s=t.M.count,i=this.wt(n);if(i){const r=i.target;if(zs(r))if(s===0){const o=new T(r.path);this.at(n,o,G.newNoDocument(o,C.min()))}else D(s===1);else this._t(n)!==s&&(this.ft(n),this.rt=this.rt.add(n))}}gt(t){const n=new Map;this.nt.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&zs(a.target)){const c=new T(a.target.path);this.st.get(c)!==null||this.yt(o,c)||this.at(o,c,G.newNoDocument(c,t))}r.j&&(n.set(o,r.G()),r.H())}});let s=R();this.it.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const h=this.wt(c);return!h||h.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))});const i=new Rn(t,n,this.rt,this.st,s);return this.st=_t(),this.it=Mo(),this.rt=new H(k),i}ct(t,n){if(!this.lt(t))return;const s=this.yt(t,n.key)?2:0;this.ht(t).J(n.key,s),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(t))}at(t,n,s){if(!this.lt(t))return;const i=this.ht(t);this.yt(t,n)?i.J(n,1):i.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(t)),s&&(this.st=this.st.insert(n,s))}removeTarget(t){this.nt.delete(t)}_t(t){const n=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let n=this.nt.get(t);return n||(n=new Oo,this.nt.set(t,n)),n}Tt(t){let n=this.it.get(t);return n||(n=new H(k),this.it=this.it.insert(t,n)),n}lt(t){const n=this.wt(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.nt.get(t);return n&&n.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Oo),this.et.getRemoteKeysForTarget(t).forEach(n=>{this.at(t,n,null)})}yt(t,n){return this.et.getRemoteKeysForTarget(t).has(n)}}function Mo(){return new z(T.comparator)}function xo(){return new z(T.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$u=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class qu{constructor(t,n){this.databaseId=t,this.C=n}}function Ln(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Po(e,t){return e.C?t.toBase64():t.toUint8Array()}function ju(e,t){return Ln(e,t.toTimestamp())}function lt(e){return D(!!e),C.fromTimestamp(function(t){const n=mt(t);return new nt(n.seconds,n.nanos)}(e))}function Js(e,t){return function(n){return new L(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Vo(e){const t=L.fromString(e);return D(Bo(t)),t}function Zs(e,t){return Js(e.databaseId,t.path)}function ti(e,t){const n=Vo(t);if(n.get(1)!==e.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new T(Fo(n))}function ei(e,t){return Js(e.databaseId,t)}function Bu(e){const t=Vo(e);return t.length===4?L.emptyPath():Fo(t)}function ni(e){return new L(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Fo(e){return D(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Uo(e,t,n){return{name:Zs(e,t),fields:n.value.mapValue.fields}}function Hu(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,h){return c.C?(D(h===void 0||typeof h=="string"),j.fromBase64String(h||"")):(D(h===void 0||h instanceof Uint8Array),j.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const h=c.code===void 0?f.UNKNOWN:ko(c.code);return new w(h,c.message||"")}(o);n=new Lo(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=ti(e,s.document.name),r=lt(s.document.updateTime),o=new st({mapValue:{fields:s.document.fields}}),a=G.newFoundDocument(i,r,o),c=s.targetIds||[],h=s.removedTargetIds||[];n=new _n(c,h,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=ti(e,s.document),r=s.readTime?lt(s.readTime):C.min(),o=G.newNoDocument(i,r),a=s.removedTargetIds||[];n=new _n([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=ti(e,s.document),r=s.removedTargetIds||[];n=new _n([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new Ru(i),o=s.targetId;n=new _o(o,r)}}return n}function Ku(e,t){let n;if(t instanceof kn)n={update:Uo(e,t.key,t.value)};else if(t instanceof ku)n={delete:Zs(e,t.key)};else if(t instanceof Rt)n={update:Uo(e,t.key,t.data),updateMask:el(t.fieldMask)};else{if(!(t instanceof Du))return I();n={verify:Zs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Sn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ne)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof be)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Cn)return{fieldPath:r.field.canonicalString(),increment:o.N};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ju(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(e,t.precondition)),n}function Gu(e,t){return e&&e.length>0?(D(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?lt(s.updateTime):lt(i);return r.isEqual(C.min())&&(r=lt(i)),new Cu(r,s.transformResults||[])}(n,t))):[]}function zu(e,t){return{documents:[ei(e,t.path)]}}function Wu(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ei(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ei(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(a){if(a.length===0)return;const c=a.map(h=>function(u){if(u.op==="=="){if(ao(u.value))return{unaryFilter:{field:Gt(u.field),op:"IS_NAN"}};if(oo(u.value))return{unaryFilter:{field:Gt(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(ao(u.value))return{unaryFilter:{field:Gt(u.field),op:"IS_NOT_NAN"}};if(oo(u.value))return{unaryFilter:{field:Gt(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gt(u.field),op:Ju(u.op),value:u.value}}}(h));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(a){if(a.length!==0)return a.map(c=>function(h){return{field:Gt(h.field),direction:Yu(h.dir)}}(c))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(a,c){return a.C||Ht(c)?c:{value:c}}(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=qo(t.startAt)),t.endAt&&(n.structuredQuery.endAt=qo(t.endAt)),n}function Qu(e){let t=Bu(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){D(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let r=[];n.where&&(r=$o(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(l){return new Se(zt(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(u)));let a=null;n.limit&&(a=function(u){let l;return l=typeof u=="object"?u.value:u,Ht(l)?null:l}(n.limit));let c=null;n.startAt&&(c=jo(n.startAt));let h=null;return n.endAt&&(h=jo(n.endAt)),gu(t,i,o,r,a,"F",c,h)}function Xu(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function $o(e){return e?e.unaryFilter!==void 0?[tl(e)]:e.fieldFilter!==void 0?[Zu(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>$o(t)).reduce((t,n)=>t.concat(n)):I():[]}function qo(e){return{before:e.before,values:e.position}}function jo(e){const t=!!e.before,n=e.values||[];return new Ws(n,t)}function Yu(e){return Uu[e]}function Ju(e){return $u[e]}function Gt(e){return{fieldPath:e.canonicalString()}}function zt(e){return Z.fromServerFormat(e.fieldPath)}function Zu(e){return tt.create(zt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function tl(e){switch(e.unaryFilter.op){case"IS_NAN":const t=zt(e.unaryFilter.field);return tt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=zt(e.unaryFilter.field);return tt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=zt(e.unaryFilter.field);return tt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=zt(e.unaryFilter.field);return tt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function el(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Bo(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}const nl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,s)=>{n(t)})}static reject(t){return new p((n,s)=>{s(t)})}static waitFor(t){return new p((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=p.resolve(!1);for(const s of t)n=n.next(i=>i?p.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function De(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Nu(r,t,s[i])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&Xs(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&Xs(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(C.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),R())}isEqual(t){return this.batchId===t.batchId&&jt(this.mutations,t.mutations,(n,s)=>Ao(n,s))&&jt(this.baseMutations,t.baseMutations,(n,s)=>Ao(n,s))}}class si{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){D(t.mutations.length===s.length);let i=xu();const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new si(t,n,s,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,n,s,i,r=C.min(),o=C.min(),a=j.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Lt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t){this.Gt=t}}function ol(e){const t=Qu({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?wu(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.zt=new cl}addToCollectionParentIndex(t,n){return this.zt.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.zt.getEntries(n))}}class cl{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new H(L.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new H(L.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new Wt(0)}static re(){return new Wt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==nl)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={}}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i!==void 0){for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n])}else this.inner[s]=[[t,n]]}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),!0;return!1}forEach(t){bt(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return no(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.changes=new _e(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}getReadTime(t){const n=this.changes.get(t);return n?n.readTime:C.min()}addEntry(t,n){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:n})}removeEntry(t,n=null){this.assertNotApplied(),this.changes.set(t,{document:G.newInvalidDocument(t),readTime:n})}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s.document):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t,n,s){this.Je=t,this.An=n,this.Jt=s}Rn(t,n){return this.An.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.bn(t,n,s))}bn(t,n,s){return this.Je.getEntry(t,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}Pn(t,n){t.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}vn(t,n){return this.Je.getEntries(t,n).next(s=>this.Vn(t,s).next(()=>s))}Vn(t,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.Pn(n,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return T.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Sn(t,n.path):vu(n)?this.Dn(t,n,s):this.Cn(t,n,s)}Sn(t,n){return this.Rn(t,new T(n)).next(s=>{let i=Ys();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}Dn(t,n,s){const i=n.collectionGroup;let r=Ys();return this.Jt.getCollectionParents(t,i).next(o=>p.forEach(o,a=>{const c=function(h,u){return new yn(u,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.Cn(t,c,s).next(h=>{h.forEach((u,l)=>{r=r.insert(u,l)})})}).next(()=>r))}Cn(t,n,s){let i,r;return this.Je.getDocumentsMatchingQuery(t,n,s).next(o=>(i=o,this.An.getAllMutationBatchesAffectingQuery(t,n))).next(o=>(r=o,this.Nn(t,r,i).next(a=>{i=a;for(const c of r)for(const h of c.mutations){const u=h.key;let l=i.get(u);l==null&&(l=G.newInvalidDocument(u),i=i.insert(u,l)),Xs(h,l,c.localWriteTime),l.isFoundDocument()||(i=i.remove(u))}}))).next(()=>(i.forEach((o,a)=>{In(n,a)||(i=i.remove(o))}),i))}Nn(t,n,s){let i=R();for(const o of n)for(const a of o.mutations)a instanceof Rt&&s.get(a.key)===null&&(i=i.add(a.key));let r=s;return this.Je.getEntries(t,i).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(r=r.insert(a,c))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.kn=s,this.xn=i}static $n(t,n){let s=R(),i=R();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ii(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{On(t){this.Mn=t}getDocumentsMatchingQuery(t,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(C.min())?this.Fn(t,n):this.Mn.vn(t,i).next(r=>{const o=this.Ln(n,r);return(wn(n)||En(n))&&this.Bn(n.limitType,o,i,s)?this.Fn(t,n):(Jr()<=b.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qs(n)),this.Mn.getDocumentsMatchingQuery(t,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Ln(t,n){let s=new H(go(t));return n.forEach((i,r)=>{In(t,r)&&(s=s.add(r))}),s}Bn(t,n,s,i){if(s.size!==n.size)return!0;const r=t==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Fn(t,n){return Jr()<=b.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Qs(n)),this.Mn.getDocumentsMatchingQuery(t,n,C.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,n,s,i){this.persistence=t,this.Un=n,this.k=i,this.qn=new z(k),this.Kn=new _e(r=>Ks(r),Gs),this.jn=C.min(),this.An=t.getMutationQueue(s),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Ho(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qn))}}function fl(e,t,n,s){return new ll(e,t,n,s)}async function Ko(e,t){const n=A(e);let s=n.An,i=n.Wn;const r=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(c=>(a=c,s=n.persistence.getMutationQueue(t),i=new Ho(n.Qn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(o))).next(c=>{const h=[],u=[];let l=R();for(const d of a){h.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of c){u.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return i.vn(o,l).next(d=>({Gn:d,removedBatchIds:h,addedBatchIds:u}))})});return n.An=s,n.Wn=i,n.Un.On(n.Wn),r}function dl(e,t){const n=A(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,h){const u=c.batch,l=u.keys();let d=p.resolve();return l.forEach(m=>{d=d.next(()=>h.getEntry(a,m)).next(v=>{const N=c.docVersions.get(m);D(N!==null),v.version.compareTo(N)<0&&(u.applyToRemoteDocument(v,c),v.isValidDocument()&&h.addEntry(v,c.commitVersion))})}),d.next(()=>o.An.removeMutationBatch(a,u))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.An.performConsistencyCheck(s)).next(()=>n.Wn.vn(s,i))})}function Go(e){const t=A(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.He.getLastRemoteSnapshotVersion(n))}function pl(e,t){const n=A(e),s=t.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const a=[];t.targetChanges.forEach((h,u)=>{const l=i.get(u);if(!l)return;a.push(n.He.removeMatchingKeys(r,h.removedDocuments,u).next(()=>n.He.addMatchingKeys(r,h.addedDocuments,u)));let d=l.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(u)?d=d.withResumeToken(j.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):h.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(h.resumeToken,s)),i=i.insert(u,d),function(m,v,N){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(l,d,h)&&a.push(n.He.updateTargetData(r,d))});let c=_t();if(t.documentUpdates.forEach((h,u)=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(gl(r,o,t.documentUpdates,s,void 0).next(h=>{c=h})),!s.isEqual(C.min())){const h=n.He.getLastRemoteSnapshotVersion(r).next(u=>n.He.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>n.Wn.Vn(r,c)).next(()=>c)}).then(r=>(n.qn=i,r))}function gl(e,t,n,s,i){let r=R();return n.forEach(o=>r=r.add(o)),t.getEntries(e,r).next(o=>{let a=_t();return n.forEach((c,h)=>{const u=o.get(c),l=(i==null?void 0:i.get(c))||s;h.isNoDocument()&&h.version.isEqual(C.min())?(t.removeEntry(c,l),a=a.insert(c,h)):!u.isValidDocument()||h.version.compareTo(u.version)>0||h.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(h,l),a=a.insert(c,h)):y("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",h.version)}),a})}function ml(e,t){const n=A(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.An.getNextMutationBatchAfterBatchId(s,t)))}function yl(e,t){const n=A(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.He.getTargetData(s,t).next(r=>r?(i=r,p.resolve(i)):n.He.allocateTargetId(s).next(o=>(i=new Lt(t,o,0,s.currentSequenceNumber),n.He.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qn.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(s.targetId,s),n.Kn.set(t,s.targetId)),s})}async function ri(e,t,n){const s=A(e),i=s.qn.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!De(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.qn=s.qn.remove(t),s.Kn.delete(i.target)}function zo(e,t,n){const s=A(e);let i=C.min(),r=R();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,h){const u=A(a),l=u.Kn.get(h);return l!==void 0?p.resolve(u.qn.get(l)):u.He.getTargetData(c,h)}(s,o,Dt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.He.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Un.getDocumentsMatchingQuery(o,t,n?i:C.min(),n?r:R())).next(a=>({documents:a,zn:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,n){return p.resolve(this.Xn.get(n))}saveBundleMetadata(t,n){var s;return this.Xn.set(n.id,{id:(s=n).id,version:s.version,createTime:lt(s.createTime)}),p.resolve()}getNamedQuery(t,n){return p.resolve(this.Zn.get(n))}saveNamedQuery(t,n){return this.Zn.set(n.name,function(s){return{name:s.name,query:ol(s.bundledQuery),readTime:lt(s.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.ts=new H(F.es),this.ns=new H(F.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,n){const s=new F(t,n);this.ts=this.ts.add(s),this.ns=this.ns.add(s)}rs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.os(new F(t,n))}cs(t,n){t.forEach(s=>this.removeReference(s,n))}us(t){const n=new T(new L([])),s=new F(n,t),i=new F(n,t+1),r=[];return this.ns.forEachInRange([s,i],o=>{this.os(o),r.push(o.key)}),r}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const n=new T(new L([])),s=new F(n,t),i=new F(n,t+1);let r=R();return this.ns.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new F(t,0),s=this.ts.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class F{constructor(t,n){this.key=t,this.fs=n}static es(t,n){return T.comparator(t.key,n.key)||k(t.fs,n.fs)}static ss(t,n){return k(t.fs,n.fs)||T.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,n){this.Jt=t,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new H(F.es)}checkEmpty(t){return p.resolve(this.An.length===0)}addMutationBatch(t,n,s,i){const r=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new il(r,n,s,i);this.An.push(o);for(const a of i)this.ws=this.ws.add(new F(a.key,r)),this.Jt.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.gs(s),r=i<0?0:i;return p.resolve(this.An.length>r?this.An[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(t){return p.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new F(n,0),i=new F(n,Number.POSITIVE_INFINITY),r=[];return this.ws.forEachInRange([s,i],o=>{const a=this._s(o.fs);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new H(k);return n.forEach(i=>{const r=new F(i,0),o=new F(i,Number.POSITIVE_INFINITY);this.ws.forEachInRange([r,o],a=>{s=s.add(a.fs)})}),p.resolve(this.ys(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;T.isDocumentKey(r)||(r=r.child(""));const o=new F(new T(r),0);let a=new H(k);return this.ws.forEachWhile(c=>{const h=c.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(a=a.add(c.fs)),!0)},o),p.resolve(this.ys(a))}ys(t){const n=[];return t.forEach(s=>{const i=this._s(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){D(this.ps(n.batchId,"removed")===0),this.An.shift();let s=this.ws;return p.forEach(n.mutations,i=>{const r=new F(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ws=s})}ee(t){}containsKey(t,n){const s=new F(n,0),i=this.ws.firstAfterOrEqual(s);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.An.length,p.resolve()}ps(t,n){return this.gs(t)}gs(t){return this.An.length===0?0:t-this.An[0].batchId}_s(t){const n=this.gs(t);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t,n){this.Jt=t,this.Ts=n,this.docs=new z(T.comparator),this.size=0}addEntry(t,n,s){const i=n.key,r=this.docs.get(i),o=r?r.size:0,a=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a,readTime:s}),this.size+=a-o,this.Jt.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():G.newInvalidDocument(n))}getEntries(t,n){let s=_t();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():G.newInvalidDocument(i))}),p.resolve(s)}getDocumentsMatchingQuery(t,n,s){let i=_t();const r=new T(n.path.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c,readTime:h}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;h.compareTo(s)<=0||In(n,c)&&(i=i.insert(c.key,c.mutableCopy()))}return p.resolve(i)}Es(t,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Tl(this)}getSize(t){return p.resolve(this.size)}}class Tl extends hl{constructor(t){super(),this.De=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.document.isValidDocument()?n.push(this.De.addEntry(t,i.document,this.getReadTime(s))):this.De.removeEntry(s)}),p.waitFor(n)}getFromCache(t,n){return this.De.getEntry(t,n)}getAllFromCache(t,n){return this.De.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(t){this.persistence=t,this.Is=new _e(n=>Ks(n),Gs),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.As=0,this.Rs=new oi,this.targetCount=0,this.bs=Wt.ie()}forEachTarget(t,n){return this.Is.forEach((s,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.As&&(this.As=n),p.resolve()}ae(t){this.Is.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.bs=new Wt(n),this.highestTargetId=n),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,n){return this.ae(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.ae(n),p.resolve()}removeTargetData(t,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Is.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),p.waitFor(r).next(()=>i)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const s=this.Is.get(n)||null;return p.resolve(s)}addMatchingKeys(t,n,s){return this.Rs.rs(n,s),p.resolve()}removeMatchingKeys(t,n,s){this.Rs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Rs.us(n),p.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Rs.ls(n);return p.resolve(s)}containsKey(t,n){return p.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,n){this.Ps={},this.Be=new $s(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new Il(this),this.Jt=new al,this.Je=function(s,i){return new El(s,i)}(this.Jt,s=>this.referenceDelegate.vs(s)),this.k=new rl(n),this.Ye=new vl(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let n=this.Ps[t.toKey()];return n||(n=new wl(this.Jt,this.referenceDelegate),this.Ps[t.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new Sl(this.Be.next());return this.referenceDelegate.Vs(),s(i).next(r=>this.referenceDelegate.Ss(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ds(t,n){return p.or(Object.values(this.Ps).map(s=>()=>s.containsKey(t,n)))}}class Sl extends sl{constructor(t){super(),this.currentSequenceNumber=t}}class ai{constructor(t){this.persistence=t,this.Cs=new oi,this.Ns=null}static ks(t){return new ai(t)}get xs(){if(this.Ns)return this.Ns;throw I()}addReference(t,n,s){return this.Cs.addReference(s,n),this.xs.delete(s.toString()),p.resolve()}removeReference(t,n,s){return this.Cs.removeReference(s,n),this.xs.add(s.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.xs.add(n.toString()),p.resolve()}removeTarget(t,n){this.Cs.us(n.targetId).forEach(i=>this.xs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.xs.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Vs(){this.Ns=new Set}Ss(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.xs,s=>{const i=T.fromPath(s);return this.$s(t,i).next(r=>{r||n.removeEntry(i)})}).next(()=>(this.Ns=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(s=>{s?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(t){return 0}$s(t,n){return p.or([()=>p.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ds(t,n)])}}class Wo{constructor(){this.activeTargetIds=Ro()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ms(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cl{constructor(){this.pi=new Wo,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.pi.Fs(t),this.Ti[t]||"not-current"}updateQueryState(t,n,s){this.Ti[t]=n}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new Wo,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{Ei(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}bi(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Oi(t){this.ki(t)}Mi(t){this.xi(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.Fi=n+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,n,s,i,r){const o=this.Ui(t,n);y("RestConnection","Sending: ",o,s);const a={};return this.qi(a,i,r),this.Ki(t,o,a,s).then(c=>(y("RestConnection","Received: ",c),c),c=>{throw Zr("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}ji(t,n,s,i,r){return this.Bi(t,n,s,i,r)}qi(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+qt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}Ui(t,n){const s=bl[t];return`${this.Fi}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,n,s,i){return new Promise((r,o)=>{const a=new Gh;a.listenOnce(Bh.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fs.NO_ERROR:const h=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(h)),r(h);break;case Fs.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case Fs.HTTP_ERROR:const u=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const d=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(v)>=0?v:f.UNKNOWN}(l.status);o(new w(d,l.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}Qi(t,n,s){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=qh(),o=jh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Kh({})),this.qi(a.initMessageHeaders,n,s),$a()||ja()||Ba()||Ha()||Ka()||qa()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");y("Connection","Creating WebChannel: "+c,a);const h=r.createWebChannel(c,a);let u=!1,l=!1;const d=new kl({Vi:v=>{l?y("Connection","Not sending because WebChannel is closed:",v):(u||(y("Connection","Opening WebChannel transport."),h.open(),u=!0),y("Connection","WebChannel sending:",v),h.send(v))},Si:()=>h.close()}),m=(v,N,O)=>{v.listen(N,ot=>{try{O(ot)}catch(at){setTimeout(()=>{throw at},0)}})};return m(h,dn.EventType.OPEN,()=>{l||y("Connection","WebChannel transport opened.")}),m(h,dn.EventType.CLOSE,()=>{l||(l=!0,y("Connection","WebChannel transport closed"),d.Oi())}),m(h,dn.EventType.ERROR,v=>{l||(l=!0,Zr("Connection","WebChannel transport errored:",v),d.Oi(new w(f.UNAVAILABLE,"The operation could not be completed")))}),m(h,dn.EventType.MESSAGE,v=>{var N;if(!l){const O=v.data[0];D(!!O);const ot=O,at=ot.error||((N=ot[0])===null||N===void 0?void 0:N.error);if(at){y("Connection","WebChannel received error:",at);const Zt=at.status;let te=function(Fa){const Ri=P[Fa];if(Ri!==void 0)return ko(Ri)}(Zt),Di=at.message;te===void 0&&(te=f.INTERNAL,Di="Unknown error status: "+Zt+" with message "+at.message),l=!0,d.Oi(new w(te,Di)),h.close()}else y("Connection","WebChannel received:",O),d.Mi(O)}}),m(o,Hh.STAT_EVENT,v=>{v.stat===Xr.PROXY?y("Connection","Detected buffering proxy"):v.stat===Xr.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.$i()},0),d}}function ci(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e){return new qu(e,!0)}class Xo{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Me=t,this.timerId=n,this.Wi=s,this.Gi=i,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const n=Math.floor(this.Hi+this.tr()),s=Math.max(0,Date.now()-this.Yi),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t,n,s,i,r,o,a,c){this.Me=t,this.nr=s,this.sr=i,this.ir=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Xo(t,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(t,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,t!==4?this.ur.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(pt(n.toString()),pt("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.rr===n&&this.Ir(s,i)},s=>{t(()=>{const i=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ar(i)})})}Ir(t,n){const s=this.Er(this.rr);this.stream=this.Rr(t,n),this.stream.Di(()=>{s(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(i=>{s(()=>this.Ar(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return n=>{this.Me.enqueueAndForget(()=>this.rr===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rl extends Yo{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.k=r}Rr(t,n){return this.ir.Qi("Listen",t,n)}onMessage(t){this.ur.reset();const n=Hu(this.k,t),s=function(i){if(!("targetChange"in i))return C.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?C.min():r.readTime?lt(r.readTime):C.min()}(t);return this.listener.br(n,s)}Pr(t){const n={};n.database=ni(this.k),n.addTarget=function(i,r){let o;const a=r.target;return o=zs(a)?{documents:zu(i,a)}:{query:Wu(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Po(i,r.resumeToken):r.snapshotVersion.compareTo(C.min())>0&&(o.readTime=Ln(i,r.snapshotVersion.toTimestamp())),o}(this.k,t);const s=Xu(this.k,t);s&&(n.labels=s),this.gr(n)}vr(t){const n={};n.database=ni(this.k),n.removeTarget=t,this.gr(n)}}class _l extends Yo{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.k=r,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,n){return this.ir.Qi("Write",t,n)}onMessage(t){if(D(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const n=Gu(t.writeResults,t.commitTime),s=lt(t.commitTime);return this.listener.Cr(s,n)}return D(!t.writeResults||t.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=ni(this.k),this.gr(t)}Dr(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Ku(this.k,s))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.ir=s,this.k=i,this.$r=!1}Or(){if(this.$r)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,n,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.ir.Bi(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}ji(t,n,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.ir.ji(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}terminate(){this.$r=!0}}class Ol{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Mr=0,t==="Online"&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(pt(n),this.Lr=!1):y("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=r,this.Hr.Ei(o=>{s.enqueueAndForget(async()=>{Ot(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=A(a);c.Gr.add(4),await Le(c),c.Jr.set("Unknown"),c.Gr.delete(4),await Mn(c)}(this))})}),this.Jr=new Ol(s,i)}}async function Mn(e){if(Ot(e))for(const t of e.zr)await t(!0)}async function Le(e){for(const t of e.zr)await t(!1)}function Jo(e,t){const n=A(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),li(n)?ui(n):Qt(n).lr()&&hi(n,t))}function Zo(e,t){const n=A(e),s=Qt(n);n.Wr.delete(t),s.lr()&&ta(n,t),n.Wr.size===0&&(s.lr()?s._r():Ot(n)&&n.Jr.set("Unknown"))}function hi(e,t){e.Yr.X(t.targetId),Qt(e).Pr(t)}function ta(e,t){e.Yr.X(t),Qt(e).vr(t)}function ui(e){e.Yr=new Fu({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),Qt(e).start(),e.Jr.Br()}function li(e){return Ot(e)&&!Qt(e).hr()&&e.Wr.size>0}function Ot(e){return A(e).Gr.size===0}function ea(e){e.Yr=void 0}async function xl(e){e.Wr.forEach((t,n)=>{hi(e,t)})}async function Pl(e,t){ea(e),li(e)?(e.Jr.Kr(t),ui(e)):e.Jr.set("Unknown")}async function Vl(e,t,n){if(e.Jr.set("Online"),t instanceof Lo&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Wr.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Wr.delete(o),s.Yr.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await xn(e,s)}else if(t instanceof _n?e.Yr.ot(t):t instanceof _o?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(C.min()))try{const s=await Go(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Yr.gt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const h=i.Wr.get(c);h&&i.Wr.set(c,h.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.Wr.get(a);if(!c)return;i.Wr.set(a,c.withResumeToken(j.EMPTY_BYTE_STRING,c.snapshotVersion)),ta(i,a);const h=new Lt(c.target,a,1,c.sequenceNumber);hi(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await xn(e,s)}}async function xn(e,t,n){if(!De(t))throw t;e.Gr.add(1),await Le(e),e.Jr.set("Offline"),n||(n=()=>Go(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await Mn(e)})}function na(e,t){return t().catch(n=>xn(e,n,t))}async function Pn(e){const t=A(e),n=vt(t);let s=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;Fl(t);)try{const i=await ml(t.localStore,s);if(i===null){t.Qr.length===0&&n._r();break}s=i.batchId,Ul(t,i)}catch(i){await xn(t,i)}sa(t)&&ia(t)}function Fl(e){return Ot(e)&&e.Qr.length<10}function Ul(e,t){e.Qr.push(t);const n=vt(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function sa(e){return Ot(e)&&!vt(e).hr()&&e.Qr.length>0}function ia(e){vt(e).start()}async function $l(e){vt(e).kr()}async function ql(e){const t=vt(e);for(const n of e.Qr)t.Dr(n.mutations)}async function jl(e,t,n){const s=e.Qr.shift(),i=si.from(s,t,n);await na(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Pn(e)}async function Bl(e,t){t&&vt(e).Sr&&await async function(n,s){if(i=s.code,_u(i)&&i!==f.ABORTED){const r=n.Qr.shift();vt(n).wr(),await na(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Pn(n)}var i}(e,t),sa(e)&&ia(e)}async function Hl(e,t){const n=A(e);t?(n.Gr.delete(2),await Mn(n)):t||(n.Gr.add(2),await Le(n),n.Jr.set("Unknown"))}function Qt(e){return e.Xr||(e.Xr=function(t,n,s){const i=A(t);return i.Or(),new Rl(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,s)}(e.datastore,e.asyncQueue,{Di:xl.bind(null,e),Ni:Pl.bind(null,e),br:Vl.bind(null,e)}),e.zr.push(async t=>{t?(e.Xr.wr(),li(e)?ui(e):e.Jr.set("Unknown")):(await e.Xr.stop(),ea(e))})),e.Xr}function vt(e){return e.Zr||(e.Zr=function(t,n,s){const i=A(t);return i.Or(),new _l(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,s)}(e.datastore,e.asyncQueue,{Di:$l.bind(null,e),Ni:Bl.bind(null,e),Nr:ql.bind(null,e),Cr:jl.bind(null,e)}),e.zr.push(async t=>{t?(e.Zr.wr(),await Pn(e)):(await e.Zr.stop(),e.Qr.length>0&&(y("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))})),e.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new fi(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function di(e,t){if(pt("AsyncQueue",`${t}: ${e}`),De(e))return new w(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||T.comparator(n.key,s.key):(n,s)=>T.comparator(n.key,s.key),this.keyedMap=Ys(),this.sortedSet=new z(this.comparator)}static emptySet(t){return new Xt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Xt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Xt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.eo=new z(T.comparator)}track(t){const n=t.doc.key,s=this.eo.get(n);s?t.type!==0&&s.type===3?this.eo=this.eo.insert(n,t):t.type===3&&s.type!==1?this.eo=this.eo.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.eo=this.eo.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.eo=this.eo.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.eo=this.eo.remove(n):t.type===1&&s.type===2?this.eo=this.eo.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.eo=this.eo.insert(n,{type:2,doc:t.doc}):I():this.eo=this.eo.insert(n,t)}no(){const t=[];return this.eo.inorderTraversal((n,s)=>{t.push(s)}),t}}class Yt{constructor(t,n,s,i,r,o,a,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Yt(t,n,Xt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Tn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.so=void 0,this.listeners=[]}}class Gl{constructor(){this.queries=new _e(t=>po(t),Tn),this.onlineState="Unknown",this.io=new Set}}async function oa(e,t){const n=A(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Kl),i)try{r.so=await n.onListen(s)}catch(o){const a=di(o,`Initialization of query '${Qs(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.ro(n.onlineState),r.so&&t.oo(r.so)&&pi(n)}async function aa(e,t){const n=A(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function zl(e,t){const n=A(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.oo(i)&&(s=!0);o.so=i}}s&&pi(n)}function Wl(e,t,n){const s=A(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function pi(e){e.io.forEach(t=>{t.next()})}class ca{constructor(t,n,s){this.query=t,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=s||{}}oo(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Yt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(t)&&(this.co.next(t),n=!0):this.lo(t,this.onlineState)&&(this.fo(t),n=!0),this.uo=t,n}onError(t){this.co.error(t)}ro(t){this.onlineState=t;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,t)&&(this.fo(this.uo),n=!0),n}lo(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.wo||!s)&&(!t.docs.isEmpty()||n==="Offline")}ho(t){if(t.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(t){t=Yt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.ao=!0,this.co.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t){this.key=t}}class ua{constructor(t){this.key=t}}class Ql{constructor(t,n){this.query=t,this.To=n,this.Eo=null,this.current=!1,this.Io=R(),this.mutatedKeys=R(),this.Ao=go(t),this.Ro=new Xt(this.Ao)}get bo(){return this.To}Po(t,n){const s=n?n.vo:new ra,i=n?n.Ro:this.Ro;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=wn(this.query)&&i.size===this.query.limit?i.last():null,h=En(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,l)=>{const d=i.get(u),m=In(this.query,l)?l:null,v=!!d&&this.mutatedKeys.has(d.key),N=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let O=!1;d&&m?d.data.isEqual(m.data)?v!==N&&(s.track({type:3,doc:m}),O=!0):this.Vo(d,m)||(s.track({type:2,doc:m}),O=!0,(c&&this.Ao(m,c)>0||h&&this.Ao(m,h)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),O=!0):d&&!m&&(s.track({type:1,doc:d}),O=!0,(c||h)&&(a=!0)),O&&(m?(o=o.add(m),r=N?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),wn(this.query)||En(this.query))for(;o.size>this.query.limit;){const u=wn(this.query)?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Ro:o,vo:s,Bn:a,mutatedKeys:r}}Vo(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const r=t.vo.no();r.sort((h,u)=>function(l,d){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return m(l)-m(d)}(h.type,u.type)||this.Ao(h.doc,u.doc)),this.So(s);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,c=a!==this.Eo;return this.Eo=a,r.length!==0||c?{snapshot:new Yt(this.query,t.Ro,i,r,t.mutatedKeys,a===0,c,!1),Co:o}:{Co:o}}ro(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new ra,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(n=>this.To=this.To.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=R(),this.Ro.forEach(s=>{this.No(s.key)&&(this.Io=this.Io.add(s.key))});const n=[];return t.forEach(s=>{this.Io.has(s)||n.push(new ua(s))}),this.Io.forEach(s=>{t.has(s)||n.push(new ha(s))}),n}ko(t){this.To=t.zn,this.Io=R();const n=this.Po(t.documents);return this.applyChanges(n,!0)}xo(){return Yt.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class Xl{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Yl{constructor(t){this.key=t,this.$o=!1}}class Jl{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new _e(a=>po(a),Tn),this.Fo=new Map,this.Lo=new Set,this.Bo=new z(T.comparator),this.Uo=new Map,this.qo=new oi,this.Ko={},this.jo=new Map,this.Qo=Wt.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function Zl(e,t){const n=uf(e);let s,i;const r=n.Mo.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.xo();else{const o=await yl(n.localStore,Dt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await tf(n,t,s,a==="current"),n.isPrimaryClient&&Jo(n.remoteStore,o)}return i}async function tf(e,t,n,s){e.Go=(u,l,d)=>async function(m,v,N,O){let ot=v.view.Po(N);ot.Bn&&(ot=await zo(m.localStore,v.query,!1).then(({documents:te})=>v.view.Po(te,ot)));const at=O&&O.targetChanges.get(v.targetId),Zt=v.view.applyChanges(ot,m.isPrimaryClient,at);return ma(m,v.targetId,Zt.Co),Zt.snapshot}(e,u,l,d);const i=await zo(e.localStore,t,!0),r=new Ql(t,i.zn),o=r.Po(i.documents),a=ke.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),c=r.applyChanges(o,e.isPrimaryClient,a);ma(e,n,c.Co);const h=new Xl(t,n,r);return e.Mo.set(t,h),e.Fo.has(n)?e.Fo.get(n).push(t):e.Fo.set(n,[t]),c.snapshot}async function ef(e,t){const n=A(e),s=n.Mo.get(t),i=n.Fo.get(s.targetId);if(i.length>1)return n.Fo.set(s.targetId,i.filter(r=>!Tn(r,t))),void n.Mo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ri(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Zo(n.remoteStore,s.targetId),gi(n,s.targetId)}).catch(Re)):(gi(n,s.targetId),await ri(n.localStore,s.targetId,!0))}async function nf(e,t,n){const s=lf(e);try{const i=await function(r,o){const a=A(r),c=nt.now(),h=o.reduce((l,d)=>l.add(d.key),R());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",l=>a.Wn.vn(l,h).next(d=>{u=d;const m=[];for(const v of o){const N=bu(v,u.get(v.key));N!=null&&m.push(new Rt(v.key,N,co(N.value.mapValue),yt.exists(!0)))}return a.An.addMutationBatch(l,c,m,o)})).then(l=>(l.applyToLocalDocumentSet(u),{batchId:l.batchId,changes:u}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.Ko[r.currentUser.toKey()];c||(c=new z(k)),c=c.insert(o,a),r.Ko[r.currentUser.toKey()]=c}(s,i.batchId,n),await Oe(s,i.changes),await Pn(s.remoteStore)}catch(i){const r=di(i,"Failed to persist write");n.reject(r)}}async function la(e,t){const n=A(e);try{const s=await pl(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.Uo.get(r);o&&(D(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.$o=!0:i.modifiedDocuments.size>0?D(o.$o):i.removedDocuments.size>0&&(D(o.$o),o.$o=!1))}),await Oe(n,s,t)}catch(s){await Re(s)}}function fa(e,t,n){const s=A(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Mo.forEach((r,o)=>{const a=o.view.ro(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=A(r);a.onlineState=o;let c=!1;a.queries.forEach((h,u)=>{for(const l of u.listeners)l.ro(o)&&(c=!0)}),c&&pi(a)}(s.eventManager,t),i.length&&s.Oo.br(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function sf(e,t,n){const s=A(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.Uo.get(t),r=i&&i.key;if(r){let o=new z(T.comparator);o=o.insert(r,G.newNoDocument(r,C.min()));const a=R().add(r),c=new Rn(C.min(),new Map,new H(k),o,a);await la(s,c),s.Bo=s.Bo.remove(r),s.Uo.delete(t),mi(s)}else await ri(s.localStore,t,!1).then(()=>gi(s,t,n)).catch(Re)}async function rf(e,t){const n=A(e),s=t.batch.batchId;try{const i=await dl(n.localStore,t);pa(n,s,null),da(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Oe(n,i)}catch(i){await Re(i)}}async function of(e,t,n){const s=A(e);try{const i=await function(r,o){const a=A(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return a.An.lookupMutationBatch(c,o).next(u=>(D(u!==null),h=u.keys(),a.An.removeMutationBatch(c,u))).next(()=>a.An.performConsistencyCheck(c)).next(()=>a.Wn.vn(c,h))})}(s.localStore,t);pa(s,t,n),da(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Oe(s,i)}catch(i){await Re(i)}}function da(e,t){(e.jo.get(t)||[]).forEach(n=>{n.resolve()}),e.jo.delete(t)}function pa(e,t,n){const s=A(e);let i=s.Ko[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.Ko[s.currentUser.toKey()]=i}}function gi(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.Fo.get(t))e.Mo.delete(s),n&&e.Oo.zo(s,n);e.Fo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach(s=>{e.qo.containsKey(s)||ga(e,s)})}function ga(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);n!==null&&(Zo(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),mi(e))}function ma(e,t,n){for(const s of n)s instanceof ha?(e.qo.addReference(s.key,t),af(e,s)):s instanceof ua?(y("SyncEngine","Document no longer in limbo: "+s.key),e.qo.removeReference(s.key,t),e.qo.containsKey(s.key)||ga(e,s.key)):I()}function af(e,t){const n=t.key,s=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(s)||(y("SyncEngine","New document in limbo: "+n),e.Lo.add(s),mi(e))}function mi(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new T(L.fromString(t)),s=e.Qo.next();e.Uo.set(s,new Yl(n)),e.Bo=e.Bo.insert(n,s),Jo(e.remoteStore,new Lt(Dt(vn(n.path)),s,2,$s.I))}}async function Oe(e,t,n){const s=A(e),i=[],r=[],o=[];s.Mo.isEmpty()||(s.Mo.forEach((a,c)=>{o.push(s.Go(c,t,n).then(h=>{if(h){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,h.fromCache?"not-current":"current"),i.push(h);const u=ii.$n(c.targetId,h);r.push(u)}}))}),await Promise.all(o),s.Oo.br(i),await async function(a,c){const h=A(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>p.forEach(c,l=>p.forEach(l.kn,d=>h.persistence.referenceDelegate.addReference(u,l.targetId,d)).next(()=>p.forEach(l.xn,d=>h.persistence.referenceDelegate.removeReference(u,l.targetId,d)))))}catch(u){if(!De(u))throw u;y("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const l=u.targetId;if(!u.fromCache){const d=h.qn.get(l),m=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(m);h.qn=h.qn.insert(l,v)}}}(s.localStore,r))}async function cf(e,t){const n=A(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await Ko(n.localStore,t);n.currentUser=t,function(i,r){i.jo.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,r))})}),i.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Oe(n,s.Gn)}}function hf(e,t){const n=A(e),s=n.Uo.get(t);if(s&&s.$o)return R().add(s.key);{let i=R();const r=n.Fo.get(t);if(!r)return i;for(const o of r){const a=n.Mo.get(o);i=i.unionWith(a.view.bo)}return i}}function uf(e){const t=A(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=la.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=hf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=sf.bind(null,t),t.Oo.br=zl.bind(null,t.eventManager),t.Oo.zo=Wl.bind(null,t.eventManager),t}function lf(e){const t=A(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=rf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=of.bind(null,t),t}class ff{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=On(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return fl(this.persistence,new ul,t.initialUser,this.k)}Yo(t){return new Al(ai.ks,this.k)}Jo(t){return new Cl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class df{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>fa(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=cf.bind(null,this.syncEngine),await Hl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Gl}createDatastore(t){const n=On(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Dl(i));var i;return function(r,o,a,c){return new Ll(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>fa(this.syncEngine,a,0),o=Qo.Pt()?new Qo:new Nl,new Ml(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,h){const u=new Jl(s,i,r,o,a,c);return h&&(u.Wo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=A(t);y("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await Le(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ec(this.observer.next,t)}error(t){this.observer.error?this.ec(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}nc(){this.muted=!0}ec(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=J.UNAUTHENTICATED,this.clientId=to.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=di(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function gf(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Ko(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function mf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await yf(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>async function(r,o){const a=A(r);a.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const c=Ot(a);a.Gr.add(3),await Le(a),c&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await Mn(a)}(t.remoteStore,i)),e.onlineComponents=t}async function yf(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await gf(e,new ff)),e.offlineComponents}async function va(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await mf(e,new df)),e.onlineComponents}function vf(e){return va(e).then(t=>t.syncEngine)}async function yi(e){const t=await va(e),n=t.eventManager;return n.onListen=Zl.bind(null,t.syncEngine),n.onUnlisten=ef.bind(null,t.syncEngine),n}function wf(e,t,n={}){const s=new gt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const h=new ya({next:l=>{r.enqueueAndForget(()=>aa(i,u));const d=l.docs.has(o);!d&&l.fromCache?c.reject(new w(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&l.fromCache&&a&&a.source==="server"?c.reject(new w(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(l)},error:l=>c.reject(l)}),u=new ca(vn(o.path),h,{includeMetadataChanges:!0,wo:!0});return oa(i,u)}(await yi(e),e.asyncQueue,t,n,s)),s.promise}class Ef{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Me{constructor(t,n){this.projectId=t,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Me&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(e,t,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Tf(e,t,n,s){if(t===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ta(e){if(!T.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ia(e){if(T.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function vi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function rt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vi(e);throw new w(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Tf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Aa({}),this._settingsFrozen=!1,t instanceof Me?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Me(i.options.projectId)}(t))}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Aa(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Wh;switch(n.type){case"gapi":const s=n.client;return D(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Yh(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=wa.get(t);n&&(y("ComponentProvider","Removing Datastore"),wa.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Y(this.firestore,t,this._key)}}class Vn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Vn(this.firestore,t,this._query)}}class wt extends Vn{constructor(t,n,s){super(t,n,vn(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Y(this.firestore,null,new T(t))}withConverter(t){return new wt(this.firestore,t,this._path)}}function Pf(e,t,...n){if(e=ct(e),Ea("collection","path",t),e instanceof wi){const s=L.fromString(t,...n);return Ia(s),new wt(e,null,s)}{if(!(e instanceof Y||e instanceof wt))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(L.fromString(t,...n));return Ia(s),new wt(e.firestore,null,s)}}function If(e,t,...n){if(e=ct(e),arguments.length===1&&(t=to.A()),Ea("doc","path",t),e instanceof wi){const s=L.fromString(t,...n);return Ta(s),new Y(e,null,new T(s))}{if(!(e instanceof Y||e instanceof wt))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(L.fromString(t,...n));return Ta(s),new Y(e.firestore,e instanceof wt?e.converter:null,new T(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Xo(this,"async_queue_retry"),this.bc=()=>{const n=ci();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const t=ci();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.vc(t)}enterRestrictedMode(t){if(!this.yc){this.yc=!0,this.Ac=t||!1;const n=ci();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(t){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new gt;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.gc.push(t),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(t){if(!De(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(t){const n=this.mc.then(()=>(this.Ic=!0,t().catch(s=>{this.Ec=s,this.Ic=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw pt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ic=!1,s))));return this.mc=n,n}enqueueAfterDelay(t,n,s){this.Pc(),this.Rc.indexOf(t)>-1&&(n=0);const i=fi.createAndSchedule(this,t,n,s,r=>this.Sc(r));return this.Tc.push(i),i}Pc(){this.Ec&&I()}verifyOperationInProgress(){}async Dc(){let t;do t=this.mc,await t;while(t!==this.mc)}Cc(t){for(const n of this.Tc)if(n.timerId===t)return!0;return!1}Nc(t){return this.Dc().then(()=>{this.Tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Dc()})}kc(t){this.Rc.push(t)}Sc(t){const n=this.Tc.indexOf(t);this.Tc.splice(n,1)}}function Sa(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Mt extends wi{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new Af,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ca(this),this._firestoreClient.terminate()}}function Vf(e=Pc()){return Lc(e,"firestore").getImmediate()}function Ei(e){return e._firestoreClient||Ca(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ca(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Ef(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new pf(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Jt(j.fromBase64String(t))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Jt(j.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=/^__.*__$/;class Cf{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Rt(t,this.data,this.fieldMask,n,this.fieldTransforms):new kn(t,this.data,n,this.fieldTransforms)}}class Na{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Rt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function ba(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class Ai{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.k=s,this.ignoreUndefinedProperties=i,r===void 0&&this.xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(t){return new Ai(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Oc({path:s,Fc:!1});return i.Lc(t),i}Bc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Oc({path:s,Fc:!1});return i.xc(),i}Uc(t){return this.Oc({path:void 0,Fc:!0})}qc(t){return qn(t,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lc(this.path.get(t))}Lc(t){if(t.length===0)throw this.qc("Document fields must not be empty");if(ba(this.$c)&&Sf.test(t))throw this.qc('Document fields cannot begin and end with "__"')}}class Nf{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.k=s||On(t)}Qc(t,n,s,i=!1){return new Ai({$c:t,methodName:n,jc:s,path:Z.emptyPath(),Fc:!1,Kc:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Si(e){const t=e._freezeSettings(),n=On(e._databaseId);return new Nf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ka(e,t,n,s,i,r={}){const o=e.Qc(r.merge||r.mergeFields?2:0,t,n,i);Ci("Data must be an object, but it was:",o,s);const a=Da(s,o);let c,h;if(r.merge)c=new Ee(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const l of r.mergeFields){const d=Ni(t,l,n);if(!o.contains(d))throw new w(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);_a(u,d)||u.push(d)}c=new Ee(u),h=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,h=o.fieldTransforms;return new Cf(new st(a),c,h)}class Un extends Ti{_toFieldTransform(t){if(t.$c!==2)throw t.$c===1?t.qc(`${this._methodName}() can only appear at the top level of your update data`):t.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Un}}function bf(e,t,n,s){const i=e.Qc(1,t,n);Ci("Data must be an object, but it was:",i,s);const r=[],o=st.empty();bt(s,(c,h)=>{const u=bi(t,c,n);h=ct(h);const l=i.Bc(u);if(h instanceof Un)r.push(u);else{const d=$n(h,l);d!=null&&(r.push(u),o.set(u,d))}});const a=new Ee(r);return new Na(o,a,i.fieldTransforms)}function kf(e,t,n,s,i,r){const o=e.Qc(1,t,n),a=[Ni(t,s,n)],c=[i];if(r.length%2!=0)throw new w(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Ni(t,r[d])),c.push(r[d+1]);const h=[],u=st.empty();for(let d=a.length-1;d>=0;--d)if(!_a(h,a[d])){const m=a[d];let v=c[d];v=ct(v);const N=o.Bc(m);if(v instanceof Un)h.push(m);else{const O=$n(v,N);O!=null&&(h.push(m),u.set(m,O))}}const l=new Ee(h);return new Na(u,l,o.fieldTransforms)}function $n(e,t){if(Ra(e=ct(e)))return Ci("Unsupported field value:",t,e),Da(e,t);if(e instanceof Ti)return function(n,s){if(!ba(s.$c))throw s.qc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Fc&&t.$c!==4)throw t.qc("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=$n(o,s.Uc(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Tu(s.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=nt.fromDate(n);return{timestampValue:Ln(s.k,i)}}if(n instanceof nt){const i=new nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ln(s.k,i)}}if(n instanceof Ii)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Jt)return{bytesValue:Po(s.k,n._byteString)};if(n instanceof Y){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.qc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Js(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.qc(`Unsupported field value: ${vi(n)}`)}(e,t)}function Da(e,t){const n={};return no(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):bt(e,(s,i)=>{const r=$n(i,t.Mc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Ra(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof nt||e instanceof Ii||e instanceof Jt||e instanceof Y||e instanceof Ti)}function Ci(e,t,n){if(!Ra(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=vi(n);throw s==="an object"?t.qc(e+" a custom object"):t.qc(e+" "+s)}}function Ni(e,t,n){if((t=ct(t))instanceof Fn)return t._internalPath;if(typeof t=="string")return bi(e,t);throw qn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Df=new RegExp("[~\\*/\\[\\]]");function bi(e,t,n){if(t.search(Df)>=0)throw qn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Fn(...t.split("."))._internalPath}catch{throw qn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function qn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new w(f.INVALID_ARGUMENT,a+e+c)}function _a(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Y(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Rf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Oa("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Rf extends La{data(){return super.data()}}function Oa(e,t){return typeof t=="string"?bi(e,t):t instanceof Fn?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ma extends La{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new jn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Oa("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class jn extends Ma{data(t={}){return super.data(t)}}class _f{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new xe(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new jn(this._firestore,this._userDataWriter,s.key,s,new xe(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new jn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new xe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new jn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new xe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),h=r.indexOf(o.doc.key)),{type:Lf(o.type),doc:a,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Lf(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(e){if(En(e)&&e.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Ff(e,...t){for(const n of t)e=n._apply(e);return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{convertValue(t,n="none"){switch(kt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return x(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Bt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return bt(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Ii(x(t.latitude),x(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=io(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Te(t));default:return null}}convertTimestamp(t){const n=mt(t);return new nt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=L.fromString(t);D(Bo(s));const i=new Me(s.get(1),s.get(3)),r=new T(s.popFirst(5));return i.isEqual(n)||pt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(e){e=rt(e,Y);const t=rt(e.firestore,Mt);return wf(Ei(t),e._key).then(n=>Va(t,e,n))}class Pa extends Mf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Jt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Y(this.firestore,null,n)}}function $f(e,t,n){e=rt(e,Y);const s=rt(e.firestore,Mt),i=xa(e.converter,t,n);return ki(s,[ka(Si(s),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,yt.none())])}function qf(e,t,n,...s){e=rt(e,Y);const i=rt(e.firestore,Mt),r=Si(i);let o;return o=typeof(t=ct(t))=="string"||t instanceof Fn?kf(r,"updateDoc",e._key,t,n,s):bf(r,"updateDoc",e._key,t),ki(i,[o.toMutation(e._key,yt.exists(!0))])}function jf(e,t){const n=rt(e.firestore,Mt),s=If(e),i=xa(e.converter,t);return ki(n,[ka(Si(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,yt.exists(!1))]).then(()=>s)}function Bf(e,...t){var n,s,i;e=ct(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Sa(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Sa(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let c,h,u;if(e instanceof Y)h=rt(e.firestore,Mt),u=vn(e._key.path),c={next:l=>{t[o]&&t[o](Va(h,e,l))},error:t[o+1],complete:t[o+2]};else{const l=rt(e,Vn);h=rt(l.firestore,Mt),u=l._query;const d=new Pa(h);c={next:m=>{t[o]&&t[o](new _f(h,d,l,m))},error:t[o+1],complete:t[o+2]},Of(e._query)}return function(l,d,m,v){const N=new ya(v),O=new ca(d,N,m);return l.asyncQueue.enqueueAndForget(async()=>oa(await yi(l),O)),()=>{N.nc(),l.asyncQueue.enqueueAndForget(async()=>aa(await yi(l),O))}}(Ei(h),u,a,c)}function ki(e,t){return function(n,s){const i=new gt;return n.asyncQueue.enqueueAndForget(async()=>nf(await vf(n),s,i)),i.promise}(Ei(e),t)}function Va(e,t,n){const s=n.docs.get(t._key),i=new Pa(e);return new Ma(e,i,t._key,s,new xe(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){qt=n})(xc),zn(new Fe("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Mt(i,new Qh(n.getProvider("auth-internal")),new Zh(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),xt(Yr,"3.4.3",e),xt(Yr,"3.4.3","esm2017")})();export{Vf as B,If as C,jf as E,Bf as I,Pf as S,xf as i,Uf as l,qf as p,Ff as q,$f as y};
