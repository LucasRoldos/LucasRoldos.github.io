self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('nakama-memories-v1').then(function(cache) {
            return cache.addAll([
                './',
                './index.html',
                './libro-recuerdos.html',
                './memories.json'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // Si encontramos una coincidencia en la caché, la devolvemos
            if (response) {
                return response;
            }
            // Si no, hacemos la petición a la red
            return fetch(event.request);
        })
    );
});