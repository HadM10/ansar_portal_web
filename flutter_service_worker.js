'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "29480d50192d1bd07bd45670d67cac6b",
"assets/AssetManifest.bin.json": "3fe39f7ab278fe686e054f4ad14f90de",
"assets/AssetManifest.json": "fe4eb89f0c50cc9d0c9b5d089851d978",
"assets/assets/7ady2a.jpg": "685532bdb5b34d57640e84f690767fcf",
"assets/assets/ansar1.png": "622a65133709d3d3d2aa9dbce66b2dff",
"assets/assets/ansar11.jpeg": "1c0fac843e4e6b74435014d66c65bd7b",
"assets/assets/ansar2.png": "1b18d98df2593e544f7b663a5a7f53e7",
"assets/assets/ansar3.png": "46feff83e152a50b8b5e5bd839ff502d",
"assets/assets/ansarlogo.png": "82d1ec1b9d9d1cd55a793c17feb47b2b",
"assets/assets/ansarportal.png": "01633cd1a11f0fbe323112aa887f902a",
"assets/assets/ansarportallogo.png": "76a7d179275fa33e53dc0298c0fda0ca",
"assets/assets/ansarportallogofinal.png": "963f8daf9ad5865f84f8371fed66c158",
"assets/assets/ansarschool.jpg": "488861fce9660abd35e462df16a1f2b0",
"assets/assets/bldye.jpg": "23fc8b1e8d505b50141edd7e206291a3",
"assets/assets/facebook.jpg": "35408b77b5d087c13581c9eec63b6b85",
"assets/assets/facebook.png": "0833b053623deeac53edebf59cfc5429",
"assets/assets/fneq.jpg": "7b559a8bb3503fd208424a3ffdffb3bd",
"assets/assets/fonts/Kuro-Regular.otf": "dbb5e819bcd5294521d1df43005fa074",
"assets/assets/hadi.png": "ffbf4cd461c557615844cbeb59932881",
"assets/assets/home-final.jpg": "82f7f9ee56670202b775f8768d7401d0",
"assets/assets/home.jpeg": "a23ee4d9ec054d2ecf0b1589d980d9ff",
"assets/assets/hy2a.jpg": "fa7a4ce1db9d82ee4fab4384f410e125",
"assets/assets/instagram.jpg": "33f1622d7ac6dad087ac794bad663af4",
"assets/assets/instagram.png": "c66e2fb62e76584c28b341a509f95a04",
"assets/assets/mahdi.jpeg": "f1355c34079e36bd897bd41066af6e50",
"assets/assets/makam.jpg": "e2b04594c36faf5c3ad86054e6b10c96",
"assets/assets/mousastadium.jpg": "6df1f7efa579a52f27647ef430058ef4",
"assets/assets/njde.jpg": "e8dab790b915e0a16f89e4ff52df2d79",
"assets/assets/phoenix.jpg": "ec2e0b058e0e634e433ed9b51f0c0847",
"assets/assets/risele.jpg": "860c2be5e78d27347b80ba86c1e4b0b1",
"assets/assets/signinpage.jpeg": "88a296b1d18994f387e62ef0b61da185",
"assets/assets/signuppage.jpeg": "11afc0dabf29d308c46a2ff2bf7ee876",
"assets/assets/sportcity.jpg": "4b377c9613e7f797e49c27e6120fc560",
"assets/assets/stadium.jpg": "e9b2c745cb46ecd68fe749cd77d0c691",
"assets/assets/tiktok.png": "dc2e4738728843d9ca61523053952662",
"assets/assets/tiktok.webp": "40fd7d7f5132f972fdca32f1514fcee6",
"assets/assets/whatsapp.jpg": "5beff6d7e1a95b9686b02e092be0914b",
"assets/assets/whatsapp.png": "5e6704ef3415f0dfb1a518e0329f0d5d",
"assets/FontManifest.json": "d0132096b90d63b0d6236399e26dcbe9",
"assets/fonts/MaterialIcons-Regular.otf": "be63812526685c6ceb49bbfbd82a915e",
"assets/NOTICES": "dbf8fa1f3f015ad161804a41d9dc65f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eafdfd1fe143602951db6ff91b4e5b4e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1c687632220d8e247f2cdb4227cfb4ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c535ea4243dddee350779707d5ce2c4e",
"/": "c535ea4243dddee350779707d5ce2c4e",
"main.dart.js": "4f2db2966ed87e9f85bcbdb4153db886",
"manifest.json": "68b65f57b0ca503ae5611120d0a92a20",
"splash/img/dark-1x.png": "963880f2abdc8b453ec830c82467a0c8",
"splash/img/dark-2x.png": "5f390365cd1d4959e268728bc1d51476",
"splash/img/dark-3x.png": "56316ad4b1f510dc05f78b6280e52fb8",
"splash/img/dark-4x.png": "267eecb3ff029d37c682ad7015f7fd0a",
"splash/img/light-1x.png": "963880f2abdc8b453ec830c82467a0c8",
"splash/img/light-2x.png": "5f390365cd1d4959e268728bc1d51476",
"splash/img/light-3x.png": "56316ad4b1f510dc05f78b6280e52fb8",
"splash/img/light-4x.png": "267eecb3ff029d37c682ad7015f7fd0a",
"version.json": "1ae618eac121552d188728224e78076a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
