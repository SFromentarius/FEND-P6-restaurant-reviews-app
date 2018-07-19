// Install the site assets

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/js/dbhelper.js',
                '/js/main.js',
                '/js/restaurant_info.js',
                '/css/styles.css',
                '/data/restaurants.json',
                '/img/1-sm.jpg',
                '/img/1.jpg',
                '/img/2-sm.jpg',
                '/img/2.jpg',
                '/img/3-sm.jpg',
                '/img/3.jpg',
                '/img/4-sm.jpg',
                '/img/4.jpg',
                '/img/5-sm.jpg',
                '/img/5.jpg',
                '/img/6-sm.jpg',
                '/img/6.jpg',
                '/img/7-sm.jpg',
                '/img/7.jpg',
                '/img/8-sm.jpg',
                '/img/8.jpg',
                '/img/9-sm.jpg',
                '/img/9.jpg',
                '/img/10-sm.jpg',
                '/img/10.jpg'
     ]);
        })
    );
});

// Intercept the web page requests

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request); // and return our cached site assets, or if not existing, the network response
        })
    );
});
