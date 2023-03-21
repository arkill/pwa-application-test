import { precacheAndRoute } from 'workbox-precaching'

// Přidejte následující řádky pro vygenerování manifestu souborů
// k precache'ování
precacheAndRoute(self.__WB_MANIFEST)

// Přidejte následující řádky pro cachování externích zdrojů
// jako například API volání
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    })
  )
})
