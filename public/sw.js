const LEGACY_CACHE_PREFIX = "ovx-cache-";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(LEGACY_CACHE_PREFIX))
            .map((key) => caches.delete(key)),
        ),
      ),
      self.registration.unregister(),
    ]).then(() =>
      self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) =>
        Promise.all(clients.map((client) => client.navigate(client.url))),
      ),
    ),
  );
});
