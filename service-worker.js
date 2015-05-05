/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

'use strict';



var PrecacheConfig = [["./","e8481cd4045b9715000810c4f593d3a9"],["fonts/RobotoCondensed-Bold.woff","b957df7eb343c0e307cc3c4b5e642b0a"],["fonts/RobotoCondensed-BoldItalic.woff","fea624b4c2620b6f5db428e227f2845c"],["fonts/RobotoCondensed-Italic.woff","f6a7296c31954622227519621438298d"],["fonts/RobotoCondensed-Light.woff","febf32a2c55979f8644ba9dfe804ca2b"],["fonts/RobotoCondensed-LightItalic.woff","f09b84ef0af8be7687407830447ec594"],["fonts/RobotoCondensed-Regular.woff","94e480548f3165c92301d1e317593e90"],["images/Apple-iPhone-6.png","3456318d103e05db7883a2cc586f59be"],["images/hamburger.svg","b1c72c7caf4609f70e33b297b4b7250d"],["images/icon_sm.png","70f9212cf4984539d479132ee918f020"],["images/icons/android-icon-144x144.png","39907b65e1c97d20cf3d32434212ead7"],["images/icons/android-icon-192x192.png","a669263e79e376998d9b0e568cf546ca"],["images/icons/android-icon-36x36.png","07b4aa713f5b105c7795fbb996542d1b"],["images/icons/android-icon-48x48.png","3d23d7be0073cbf6fee916211e868e41"],["images/icons/android-icon-72x72.png","1aa80cdfb0227e22498ca71eef53f7d0"],["images/icons/android-icon-96x96.png","25067bc6653f3766f90e434860a4ca42"],["images/icons/apple-icon-114x114.png","139c2dd27aa905b405b9ba7172d62a1c"],["images/icons/apple-icon-120x120.png","c500df2feb68493dbd1d4881cf903316"],["images/icons/apple-icon-152x152.png","c77d78f807982abf61b4a7b76a0a2b1d"],["images/icons/apple-icon-180x180.png","65ff9ee6ee0c5e0f5188cb80ae59200d"],["images/icons/apple-icon-57x57.png","0816a3e3262af40eb35ae3c54bfd8967"],["images/icons/apple-icon-60x60.png","1e21b5ff5c94cd4932391f0726fbe67b"],["images/icons/apple-icon-76x76.png","68c9451d317d97aa628bae18d0c26cb1"],["images/icons/apple-icon.png","a669263e79e376998d9b0e568cf546ca"],["images/icons/favicon-16x16.png","7712e9fef9122005a0277dd947ac97fc"],["images/icons/favicon-32x32.png","0ba6392f09b43f6dcf48961a90d24a6f"],["images/icons/favicon.ico","00fb44b8a7a321c990449d0da8d1f30a"],["images/icons/icons-hinted.ttf","d41d8cd98f00b204e9800998ecf8427e"],["images/icons/icons.eot","742c4affdabd597249ab4d8f32ceb5d9"],["images/icons/icons.svg","46661d6d65debc63884004fed6e37e5c"],["images/icons/icons.ttf","43ac9104d6fac184272ba3784167577d"],["images/icons/icons.woff","e470c7159d62bbeedf51a7d98e65ca4d"],["images/icons/icons.woff2","1a75a1500dc4614b85523f4183cdeef7"],["images/icons/ms-icon-150x150.png","87ccac9e09571a0d498edc9048498947"],["images/icons/ms-icon-310x310.png","e02847c1b80d062d4a6a57fac240040e"],["images/icons/ms-icon-70x70.png","7e2937f9c33953db3ea2569569263d35"],["images/icons/placeholder--medium.png","baa033665c8a070a9e5a66c2bd8b0474"],["images/icons/placeholder--small.png","d5efa06871740522ebb8ae5da95b7737"],["images/icons/placeholder--wide.png","0f9f6ff52eac6a13ab562341c6e329d1"],["images/screen-1.png","104162295b98b30d3f5a2d9d052b4319"],["images/screen-2.png","9822c05f85692661780b22d892bfef76"],["images/screen-3.png","420248ca17f4d75051f3b4e0df4fde56"],["index.html","41db6105b145008b94ec255f68989c4c"],["manifest.json","1cdfbcb6a312e51f823b85f498d0d98a"],["scripts/main.min.js","daf81b072d84c28a4192f9b4b60e7787"],["styles/components.css","ed2ef0f8a78d173e92ac8f0eb4e9bf04"],["styles/main.css","db30bcf800e1f6b3ea727e83bf5d3c78"]];
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var populateCurrentCacheNames = function (precacheConfig, cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl, ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) == -1;
        }).map(function(cacheName) {
          var url = new URL(CurrentCacheNamesToAbsoluteUrl[cacheName]);
          // Put in a cache-busting parameter to ensure we're caching a fresh response.
          if (url.search) {
            url.search += '&';
          }
          url.search += 'sw-precache=' + now;
          var urlWithCacheBusting = url.toString();

          console.log('Adding URL "%s" to cache named "%s"', urlWithCacheBusting, cacheName);
          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request.clone()).then(function(response) {
              if (response.status == 200) {
                return cache.put(request, response);
              } else {
                console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                  urlWithCacheBusting, response.status);
                // Get rid of the empty cache if we can't add a successful response to it.
                return caches.delete(cacheName);
              }
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) == 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            console.log('Deleting out-of-date cache "%s"', cacheName);
            return caches.delete(cacheName);
          })
        )
      });
    }).then(function() {
      if (typeof self.skipWaiting == 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim == 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command == 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method == 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    if (cacheName) {
      event.respondWith(
        // We can't call cache.match(event.request) since the entry in the cache will contain the
        // cache-busting parameter. Instead, rely on the fact that each cache should only have one
        // entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              return response || fetch(event.request).catch(function(e) {
                console.error('Fetch for "%s" failed: %O', urlWithoutIgnoredParameters, e);
              });
            });
          });
        }).catch(function(e) {
          console.error('Couldn\'t serve response for "%s" from cache: %O', urlWithoutIgnoredParameters, e);
          return fetch(event.request);
        })
      );
    }
  }
});

