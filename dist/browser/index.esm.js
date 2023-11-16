function t(t,e,n,s){return new(n||(n=Promise))((function(o,r){function i(t){try{c(s.next(t))}catch(t){r(t)}}function a(t){try{c(s.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((s=s.apply(t,e||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;const e="frtjs",n="1.0.0";var s,o;!function(t){t.PV="pv",t.PERF="perf",t.API="api",t.ERROR="error",t.CUSTOM="custom"}(s||(s={})),function(t){t.XHR="xhr",t.FETCH="fetch",t.JS="js",t.DOM="dom",t.RESOURCE="resource",t.UNHANDLEDREJECTION="unhandledrejection",t.ROUTER="router"}(o||(o={}));const r=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;function i(t){const e=t.match(r);if(!e)return{};return{filename:e[2],functionName:e[1]||"",lineno:parseInt(e[3],10)||void 0,colno:parseInt(e[4],10)||void 0}}function a(t,e=10){const{stack:n}=t;if(!n)return[];const s=[];for(const t of n.split("\n").slice(1)){const e=i(t);e&&s.push(e)}return s.slice(0,e)}const c=t=>t instanceof ErrorEvent,u=t=>t.split("").reduce((function(t,e){return(t=(t<<5)-t+e.charCodeAt(0))&t}),0),d=()=>(new Date).valueOf();class p{constructor(t={}){var s;this.SDK_NAME=e,this.SDK_VERSION=n,this.options=Object.assign({maxBreadcrumbs:20},t),this._subscribe={all:s=s||new Map,on:function(t,e){var n=s.get(t);n?n.push(e):s.set(t,[e])},off:function(t,e){var n=s.get(t);n&&(e?n.splice(n.indexOf(e)>>>0,1):s.set(t,[]))},emit:function(t,e){var n=s.get(t);n&&n.slice().map((function(t){t(e)})),(n=s.get("*"))&&n.slice().map((function(n){n(t,e)}))}},this.breadcrumbs=[]}use(t){t.trace.call(this,this._subscribe.emit.bind(this,t.name));return this._subscribe.on(t.name,((...e)=>{var n,s;const o=null===(n=t.transform)||void 0===n?void 0:n.apply(this,e);null===(s=t.post)||void 0===s||s.call(this,o)})),this}pushBreadCrumbs(e){return t(this,void 0,void 0,(function*(){this.breadcrumbs.push(e),this.breadcrumbs.length>=this.options.maxBreadcrumbs&&(this.transport.send(s.API,[...this.breadcrumbs]).then(),this.breadcrumbs.length=0)}))}getOptions(){return this.options}}class l{constructor(t){this.client=t}send(s,o){return t(this,void 0,void 0,(function*(){if(!this.client.options.dsn)return;const t=yield this.client.options.getAuthInfo(),r=Object.assign(Object.assign({},t),{category:s,sdkName:e,sdkVersion:n});return Array.isArray(o)?r.contexts=o:r.context=o,this.sendToServer(r)}))}}class f extends l{constructor(t){super(t)}sendToServer(t){("function"==typeof navigator.sendBeacon?this.sendByBeacon():this.sendByXml())(t)}sendByXml(){return t=>{const e=new window.oXMLHttpRequest;e.setRequestHeader("Content-Type","application/json"),e.open("POST",this.client.options.dsn,!0),e.send(JSON.stringify(t))}}sendByBeacon(){return t=>{window.navigator.sendBeacon(this.client.options.dsn,new Blob([JSON.stringify(t)],{type:"application/json"}))||this.sendByXml().apply(this,[t])}}}class h extends p{constructor(t){super(t),this.transport=new f(this)}send(t){console.log(t)}}const m={name:o.JS,trace(t){window&&window.addEventListener("error",(e=>{var n,s,r,i,p,l;if(!c(e))return;const f=a(e.error),h={filename:null!==(s=null===(n=f[0])||void 0===n?void 0:n.filename)&&void 0!==s?s:"",errorType:e.error.name,position:(null===(r=f[0])||void 0===r?void 0:r.lineno)+":"+(null===(i=f[0])||void 0===i?void 0:i.colno),stack:JSON.stringify(f),traceId:"",url:window.location.href,timestamp:d().toString(),userAgent:navigator.userAgent,type:o.JS,message:e.error.message,functionName:null!==(l=null===(p=f[0])||void 0===p?void 0:p.functionName)&&void 0!==l?l:""};h.traceId=(t=>u([t.filename,t.functionName,t.position].join(",")).toString())(h),t(h)}),!0)},transform:t=>Object.assign({},t),post(t){this.transport.send(s.ERROR,t)}},g={name:o.RESOURCE,trace(t){window&&window.addEventListener("error",(e=>{if(!(t=>!c(t))(e))return;const n=e.target,s={filename:n.href||n.src,message:"",tagName:n.tagName,timestamp:d().toString(),traceId:"",type:o.RESOURCE,url:window.location.href,userAgent:navigator.userAgent,outerHTML:n.outerHTML};s.traceId=(t=>u([t.type,t.filename,t.tagName].join(",")).toString())(s),t(s)}),!0)},transform:t=>Object.assign({},t),post(t){this.transport.send(s.ERROR,t)}},w={name:o.XHR,trace(t){const e=this;if("XMLHttpRequest"in window&&"function"==typeof window.XMLHttpRequest){const n=window.XMLHttpRequest;window.oXMLHttpRequest||(window.oXMLHttpRequest=n),window.XMLHttpRequest=function(){const s=new n,{open:r,send:i}=s,a={body:"",duration:"",message:"",method:"",response:"",status:"",timestamp:d().toString(),traceId:"",xhrUrl:"",type:o.XHR,url:window.location.href,userAgent:navigator.userAgent};return s.open=(t,e)=>{a.method=t,a.xhrUrl=e.toString(),r.call(s,t,e,!0)},s.send=t=>{a.body=("string"==typeof t?t:JSON.stringify(t))||"",i.call(s,t)},s.addEventListener("loadend",(()=>{const{status:n,response:o}=s;a.status=n.toString(),a.response=JSON.stringify(o),a.traceId=(t=>u([t.type,t.method,t.xhrUrl].join(",")).toString())(a),200!==n?t(a):e.pushBreadCrumbs(a)})),s}}},transform:t=>Object.assign({},t),post(t){this.transport.send(s.ERROR,t)}},v={name:o.UNHANDLEDREJECTION,trace(t){window&&window.addEventListener("unhandledrejection",(e=>{const n={errorType:e.reason.name||"unKnown",message:e.reason.message||e.reason,stack:JSON.stringify(a(e.reason)),timestamp:d().toString(),traceId:"",type:o.UNHANDLEDREJECTION,url:window.location.href,userAgent:navigator.userAgent};n.traceId=(t=>u([t.type,t.message,t.errorType].join(",")).toString())(n),t(n)}),!0)},transform:t=>Object.assign({},t),post(t){this.transport.send(s.ERROR,t)}},y={init:t=>{const e=new h(t);return e.use(m).use(g).use(w).use(v),e}};export{y as default};
//# sourceMappingURL=index.esm.js.map
