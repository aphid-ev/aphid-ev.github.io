// /sw.js — tombstone to kill the previous Chirpy service worker
self.addEventListener('install', (event) => {
    // Activate immediately, don't wait for old tabs to close
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        // 1. Delete every cache this origin owns
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));

        // 2. Unregister this worker so nothing controls the page next load
        await self.registration.unregister();

        // 3. Force-reload any open tabs so they see the new site immediately
        const clients = await self.clients.matchAll({ type: 'window' });
        clients.forEach((client) => client.navigate(client.url));
    })());
});

// No fetch handler on purpose — requests pass through to the network untouched
// while this SW is briefly active between install and unregister.