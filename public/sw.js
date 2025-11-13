const CACHE_NAME = "portfolio-v1";
const urlsToCache = ["/", "/index.html", "/src/main.jsx", "/styles.css"];

// Installation du Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch(() => {
        // Ignorer les erreurs de cache pour les assets optionnels
        console.log("Some assets were not cached");
      });
    })
  );
  self.skipWaiting();
});

// Activation du Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch - Network first, fallback to cache
self.addEventListener("fetch", (event) => {
  // Ignorer les requêtes non-GET
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Ne cache que les réponses valides
        if (!response || response.status !== 200 || response.type === "error") {
          return response;
        }

        // Cloner la réponse
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      })
      .catch(() => {
        // Fallback au cache si offline
        return caches.match(event.request);
      })
  );
});
