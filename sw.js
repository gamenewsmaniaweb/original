// give your cache a name
const cacheName = 'my-cache';

// put the static assets and routes you want to cache here
const filesToCache = [
 '/',
 'https://rawcdn.githack.com/gamenewsmaniaweb/webff/126a90868bf868b0b634a2b992bf19d0709c842c/index.html',    
 'https://rawcdn.githack.com/gamenewsmaniaweb/web/a7b63ff8a3d7a574d62ccfe5f04dfc59430784c1/style.css'
              ];
// the event handler for the activate event
self.addEventListener('activate', e => self.clients.claim());

// the event handler for the install event 
// typically used to cache assets
self.addEventListener('install', e => {
  e.waitUntil(
      caches.open(cacheName)
          .then(cache => cache.addAll(filesToCache))
            );
            });
// the fetch event handler, to intercept requests and serve all 
// static assets from the cache
self.addEventListener('fetch', e => {
  e.respondWith(
      caches.match(e.request)
          .then(response => response ? response : fetch(e.request))
            )
            });
