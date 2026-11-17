const CACHE='oram-chowmin-v5';
const FILES=['./','./index.html','./manifest.webmanifest','./chowmin-plates.jpg','./stall.jpg','./poster.png','./owner-photo.jpg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('oram-chowmin-')&&k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
