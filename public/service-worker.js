// Define a cache name for your PWA
const cacheName = 'my-pwa-cache-v1';

// List the files and assets you want to cache
const filesToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/mobile.css',
  '/app.js',
  '/images/*'
  // Add more files and assets as needed
];

// Install the service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});