"use strict";var precacheConfig=[["/IS117_Portfolio_React/index.html","4653a24ea0d2109ecd648e494fd60c2d"],["/IS117_Portfolio_React/static/css/main.00767838.css","34d8d6606334cd877af9add6957232e3"],["/IS117_Portfolio_React/static/js/0.e10be900.chunk.js","82791f5a8ee4b1ed59507f68fd4cb394"],["/IS117_Portfolio_React/static/js/main.f0ab0865.js","bd9980d5cce24c12174a79ffd0f181ea"],["/IS117_Portfolio_React/static/media/cool.34fe2a6e.jpg","34fe2a6e1abda91e657560f0b901911b"],["/IS117_Portfolio_React/static/media/edison-school.34a2d213.png","34a2d213d0f9e08417b6d925f7998c2f"],["/IS117_Portfolio_React/static/media/gregory-school.f113804d.jpg","f113804d0056f89a38bb416e9090fbca"],["/IS117_Portfolio_React/static/media/memory-game.2a77f83c.gif","2a77f83c824f5bf1adbdd59ff3a30733"],["/IS117_Portfolio_React/static/media/njit.b37e6d2e.jpg","b37e6d2eff42d6c795df29f27e54fdc2"],["/IS117_Portfolio_React/static/media/resume-snip.4d2ffafc.png","4d2ffafca177dfe57a3a0f00534d697b"],["/IS117_Portfolio_React/static/media/resume.3284d5d0.docx","3284d5d006b11f7db70b04242de25448"],["/IS117_Portfolio_React/static/media/resume.5db3eb4c.png","5db3eb4c772be62bd27968064a530ae9"],["/IS117_Portfolio_React/static/media/roosevelt-school.ab82833f.jpg","ab82833ffc2ad4ddd643d1a96f18dd2d"],["/IS117_Portfolio_React/static/media/westorange-highschool.30329619.png","30329619aeddc7cf026ef914a7e554f0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/IS117_Portfolio_React/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});