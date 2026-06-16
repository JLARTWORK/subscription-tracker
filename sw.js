const CACHE = 'subs-tracker-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './sw.js'
];

const CDN_ASSETS = [
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600&display=swap'
];

async function cacheAssets(cache, urls) {
  await Promise.allSettled(
    urls.map(async (url) => {
      try {
        await cache.add(url);
      } catch (_) {
        // Ignore offline or cross-origin cache misses during install.
      }
    })
  );
}

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((cache) => cacheAssets(cache, [...ASSETS, ...CDN_ASSETS]))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then((cached) => {
      const fetched = fetch(e.request).then((res) => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then((cache) => cache.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);

      return cached || fetched;
    })
  );
});
