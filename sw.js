const CACHE='oram-chowmin-v6';
const FILES=['./','./index.html','./manifest.webmanifest','./chowmin-plates.jpg','./stall.jpg','./poster.png','./owner-photo.jpg','./icon-192.png','./icon-512.png',
'./veg-chowmin.jpg',
'./egg-chowmin.jpg',
'./double-egg-chowmin.jpg',
'./chicken-chowmin.jpg',
'./veg-manchurian.jpg',
'./egg-manchurian.jpg',
'./chat.jpg',
'./egg-chat.jpg',
'./chicken-pakoda.jpg'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('oram-chowmin-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
