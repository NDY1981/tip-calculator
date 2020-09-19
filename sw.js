var cacheName = 'Restaurant Tip Calculator';

var appShellFiles = [
    '/restaurant_tip_calculator/',
    '/restaurant_tip_calculator/index.html',
    '/restaurant_tip_calculator/favicon.ico',
    '/restaurant_tip_calculator/icons/icon.png',
    '/restaurant_tip_calculator/app.js',
    '/restaurant_tip_calculator/styles/style.css',
    '/restaurant_tip_calculator/scripts/main.js'
];

var contentToCache = appShellFiles;

self.addEventListener('install', function(e) {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[Service Worker] Caching all: app shell and content');
            return cache.addAll(contentToCache);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(r) {
            console.log('[Service Worker] Fetching resource: '+e.request.url);
            return r || fetch(e.request).then(function(response) {
                return caches.open(cacheName).then(function(cache) {
                    console.log('[Service Worker] Caching new resource: '+e.request.url);
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});
