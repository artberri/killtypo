/* global self URL fetch */
/* eslint-disable no-console */

const DEBUG = false

/**
 * When the user navigates to your site,
 * the browser tries to redownload the script file that defined the service worker in the background.
 * If there is even a byte's difference in the service worker file compared to what it currently has,
 * it considers it 'new'.
 */
const {
  assets
} = global.serviceWorkerOption

const CACHE_NAME = (new Date()).toISOString()

let assetsToCache = [
  ...assets,
  './',
  './index.html'
]

assetsToCache = assetsToCache.map((path) => {
  return global.location.origin + '/' + path
})

assetsToCache.push('https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css')
assetsToCache.push('https://fonts.googleapis.com/css?family=PT+Sans')
assetsToCache.push('https://cdnjs.cloudflare.com/ajax/libs/canvasjs/1.7.0/canvasjs.min.js')
assetsToCache.push('https://use.fontawesome.com/7b28c2d7df.css')

// When the service worker is first added to a computer.
self.addEventListener('install', (event) => {
  // Perform install steps.
  if (DEBUG) {
    console.log('[SW] Install event')
  }

  // Add core website files to cache during serviceworker installation.
  event.waitUntil(
    global.caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(assetsToCache)
      })
      .then(() => {
        if (DEBUG) {
          console.log('Cached assets: main', assetsToCache)
        }
      })
      .catch((error) => {
        console.error(error)
        throw error
      })
  )
})

// After the install event.
self.addEventListener('activate', (event) => {
  if (DEBUG) {
    console.log('[SW] Activate event')
  }

  // Clean the caches
  event.waitUntil(
    global.caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Delete the caches that are not the current one.
            if (cacheName.indexOf(CACHE_NAME) === 0) {
              return null
            } else {
              return global.caches.delete(cacheName)
            }
          })
        )
      })
  )
})

self.addEventListener('message', (event) => {
  switch (event.data.action) {
    case 'skipWaiting':
      if (self.skipWaiting) {
        self.skipWaiting()
      }
      break
  }
})

self.addEventListener('fetch', (event) => {
  const request = event.request

  // Ignore not GET request.
  if (request.method !== 'GET') {
    if (DEBUG) {
      console.log(`[SW] Ignore non GET request ${request.method}`)
    }
    return
  }

  const requestUrl = new URL(request.url)
  const resource = global.caches.match(request)
    .then((response) => {
      if (response) {
        if (DEBUG) {
          console.log(`[SW] fetch URL ${requestUrl.href} from cache`)
        }

        return response
      }

      // Load and cache known assets.
      return fetch(request)
        .then((responseNetwork) => {
          if (!responseNetwork || !responseNetwork.ok) {
            if (DEBUG) {
              console.log(`[SW] URL [${
                requestUrl.toString()}] wrong responseNetwork: ${responseNetwork.status} ${responseNetwork.type}`)
            }

            return responseNetwork
          }

          if (DEBUG) {
            console.log(`[SW] URL ${requestUrl.href} fetched`)
          }

          const responseCache = responseNetwork.clone()

          global.caches
            .open(CACHE_NAME)
            .then((cache) => {
              return cache.put(request, responseCache)
            })
            .then(() => {
              if (DEBUG) {
                console.log(`[SW] Cache asset: ${requestUrl.href}`)
              }
            })

          return responseNetwork
        })
        .catch(() => {
          // User is landing on our page.
          if (event.request.mode === 'navigate') {
            return global.caches.match('./')
          } else {
            return null
          }
        })
    })

  event.respondWith(resource)
})