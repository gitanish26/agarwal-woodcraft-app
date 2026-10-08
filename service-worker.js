const CACHE="agarwal-woodcraft-v1";
const ASSETS=[
 "./","./index.html","./style.css","./manifest.json",
 "./wood-plank.html","./wood-tree.html","./prices.html","./stock.html","./products.html"
];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
