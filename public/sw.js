const CACHE_NAME = "ovx-cache-v2";
const PRECACHE_URLS = [
  "/openVisionXLogo.png",
  "/ai_first.gif",
  "/security.gif",
  "/real_time.gif",
  "/seamless.gif",
  "/iron_man_future.gif",
  "/mobile-tracking.gif"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k === CACHE_NAME ? Promise.resolve() : caches.delete(k))))
    ).then(() => self.clients.claim())
  );
});

// Stale-while-revalidate for same-origin GET requests
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const dest = req.destination;
  const accept = req.headers.get("accept") || "";

  // Never cache HTML navigations; always fetch latest
  if (req.mode === "navigate" || accept.includes("text/html") || url.pathname.endsWith(".html")) {
    event.respondWith(fetch(req));
    return;
  }

  // Avoid caching favicons to prevent stale branding
  if (url.pathname === "/favicon.ico" || url.pathname.endsWith(".ico")) {
    event.respondWith(fetch(req));
    return;
  }

  if (req.headers.has("range")) {
    event.respondWith(fetch(req));
    return;
  }
  if (dest === "video" || url.pathname.endsWith(".mp4")) {
    event.respondWith(fetch(req));
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
