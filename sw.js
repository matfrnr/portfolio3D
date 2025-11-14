const CACHE_NAME = "portfolio-v3";
const ASSETS_CACHE = "portfolio-assets-v3";
const API_CACHE = "portfolio-api-v3";

const urlsToCache = [
  "/",
  "/index.html",
  "/src/main.jsx",
  "/fonts/poppins-300.woff2",
  "/fonts/poppins-400.woff2",
  "/fonts/poppins-500.woff2",
  "/fonts/poppins-600.woff2",
  "/fonts/poppins-700.woff2",
  "/desktop_pc/scene.gltf",
  "/planet/scene.gltf",
  "/fusee.webp",
  "/src/assets/c.webp",
];

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

// Activation du Service Worker - nettoyer les anciens caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (
            cacheName !== CACHE_NAME &&
            cacheName !== ASSETS_CACHE &&
            cacheName !== API_CACHE
          ) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch - Stratégie optimisée par type de ressource
self.addEventListener("fetch", (event) => {
  // Ignorer les requêtes non-GET
  if (event.request.method !== "GET") {
    return;
  }

  const url = new URL(event.request.url);

  // Stratégie pour les assets statiques (images, fonts, modèles 3D)
  if (url.pathname.match(/\.(woff2|webp|gltf|glb|svg)$/)) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request)
            .then((response) => {
              if (
                !response ||
                response.status !== 200 ||
                response.type === "error"
              ) {
                return response;
              }
              const responseToCache = response.clone();
              caches.open(ASSETS_CACHE).then((cache) => {
                cache.put(event.request, responseToCache);
              });
              return response;
            })
            .catch(() => {
              // Pas de fallback - laisser le navigateur gérer l'erreur
              throw new Error("Network request failed");
            })
        );
      })
    );
  }
  // Stratégie pour le document HTML principal
  else if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200) {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  }
  // Stratégie pour les autres requêtes
  else {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (
            !response ||
            response.status !== 200 ||
            response.type === "error"
          ) {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  }
});
