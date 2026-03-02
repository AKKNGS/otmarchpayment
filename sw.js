const CACHE_NAME = 'budget-app-v3';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './logo.png'
];

// ចងចាំឯកសារពេលដំឡើង
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// ទាញយកឯកសារដែលបានចងចាំមកបង្ហាញ
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );

});

