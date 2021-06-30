var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/css/bootstrap.min.css',
  '/css/estilo1.css',
  '/css/estilo.css',

  '/js/app.js',
  '/js/modal.js',
  '/js/navbar.js',
  '/js/register-sw.js',


  '/img/01.jpg',
  '/img/02.jpg',
  '/img/03.jpg',

  '/img/icons/apple-touch-icon-48x48.png',
  '/img/icons/apple-touch-icon-57x57.png',
  '/img/icons/apple-touch-icon-60x60.png',
  '/img/icons/apple-touch-icon-72x72.png',
  '/img/icons/apple-touch-icon-76x76.png',
  '/img/icons/apple-touch-icon-114x114.png',
  '/img/icons/apple-touch-icon-120x120.png',
  '/img/icons/apple-touch-icon-144x144.png',
  '/img/icons/apple-touch-icon-152x152.png',
  '/img/icons/apple-touch-icon-180x180.png',
  '/img/icons/apple-touch-icon-192x192.png',
  '/img/icons/apple-touch-icon-256x256.png',
  '/img/icons/apple-touch-icon-384x384.png',
  '/img/icons/apple-touch-icon-512x512.png',
  '/img/icons/mstile-144x144.png',
  '/img/icons/musicst.png',

  '/img/01.jpg',
  '/img/02.jpg',
  '/img/03.jpg',

];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache open!');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

