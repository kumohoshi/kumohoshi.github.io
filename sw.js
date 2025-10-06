/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025/09/20/我的日语学习笔记：第五课/index.html","12eb65bf319d45c9ec5633984fad61f8"],["/2025/09/20/我的第一篇文章/index.html","3d711712ed80743f7638cf95b93312a3"],["/2025/09/21/我病了，但还得继续下去/index.html","cfc2e0e5583a24b5afed4f4f072394f7"],["/2025/09/22/如此繁忙的今天，我做了什么/index.html","cd54dfc05df0dd0d2b396980ab9a0694"],["/2025/09/23/字体测试和我忙碌的事实/index.html","d317bf34edcc1a549e3d27bb9af39c65"],["/2025/09/24/今天我的挚友回来了/index.html","9e6a3ce1d21a5159c668d71405a2ff99"],["/2025/09/26/月规划/index.html","89efbf65e060454d5b83bf4bb12efbd1"],["/2025/10/06/Ample-guitar-在FL中的键位参考/index.html","e52c30b21ec051b04f812b70c0dae219"],["/2025/10/06/我的日语学习笔记：第一课/index.html","b35c5f6c4c94ea95b57d7e2dee42bce1"],["/2025/10/06/我的日语学习笔记：第三课/index.html","0ea6e3a8d16a9ccb877064a6adb93008"],["/2025/10/06/我的日语学习笔记：第二课/index.html","53b3b53d2296ba994967a07272953869"],["/2025/10/06/我的日语学习笔记：第四课/index.html","027ef4afb976ebbb5cc734efe675864c"],["/404.html","426dd7c9711f3323a5ab979340456c88"],["/about/index.html","395c3acb2443c4554abcc31b6cefcb0b"],["/archives/2025/09/index.html","15d2e42f81bbd0cc7547a5bced562101"],["/archives/2025/10/index.html","8f6d356e3acfeff6d470a2ed6991ab78"],["/archives/2025/index.html","7c227bc10a4e3dd9e435df18763aeb92"],["/archives/2025/page/2/index.html","dfdca15e872dca7bed63f3ea8c100154"],["/archives/index.html","b4ad6933c19979a3d5e3da6dab46b4db"],["/archives/page/2/index.html","3660e8fba0c4ff69669f7c0b66d277c6"],["/changelog/index.html","92d5dcf507ad2ea58a960918b5b9f22f"],["/css/fontawesome.css","65b4b6566b77999226df61abb99c22c3"],["/css/heat-map.css","8d003fa850e93d7d0e122df2c220fd92"],["/css/iconfont.css","2de3b56860e8785806457516341608fa"],["/css/loader.css","9d62a5c3e84687bf997f72481c14855d"],["/css/style.css","9ec03d9953c4c45fc2e4816ddecadb84"],["/css/tag-roulette.css","311ea62e356119f0a35b6f08cb02dc9e"],["/images/algolia_logo.svg","83f295aae2692576fc7f7d41204cfcd4"],["/images/banner.png","3f79f0aea450c113eebefe188f9e8ec9"],["/images/cursor/reimu-cursor-default.png","4bf867fe9967363abf602a09c80cb66e"],["/images/cursor/reimu-cursor-pointer.png","71d3c42104a7a53fdbd58d13f8f5a3c1"],["/images/cursor/reimu-cursor-text.png","3ce89b26e2d4369c374d2ad4a2454114"],["/images/reimu.png","775d10ff91b0bb3e20192b1de6649346"],["/images/taichi-fill.png","637e9ee4a4ccbb03195d74e290095af9"],["/images/taichi-fill.svg","3c614e916c86667f99023a7a363509ae"],["/images/taichi.png","8ed935ffcc84adc30235431c1214d8b8"],["/images/taichi.svg","bdb1fa03a904ab2bc57451802d05cef0"],["/index.html","e575e756007cba703468d40f06990271"],["/js/algolia_search.js","05aab68fb8e4aa1ec04bc59891bf97da"],["/js/aos.js","57519b72323b9889d1567ccc5ea3ce9a"],["/js/generator_search.js","f35f87e0f08a94da4bc29722d5e14d14"],["/js/heat_map.js","d7d293f6f622cd86aff800033f524331"],["/js/insert_highlight.js","f001555b1a66781f9182ec93e3de5e30"],["/js/pjax.js","aafdeb9eba75b430217a25aec5ff3139"],["/js/pjax_script.js","6207dd129dd538206224ae9c63b21411"],["/js/script.js","f18ec5eebae600296d63770d45323ed2"],["/js/service_worker.js","6834f0f477e6e052ae0837d4740d5d45"],["/js/sw.js","9f72f3438bfbca511befce8d4baccda0"],["/page/2/index.html","fb39f4e528b39772503c35a1ae6b6ed7"],["/sw-register.js","b1dc27f6116891d0d36f25a2749c5b76"],["/tags/日记/index.html","3c66fee531a957549053346b196ccca6"],["/tags/日语语法/index.html","ebcf634199421db60a5c43fd0b168062"],["/tags/音乐/index.html","8f31f596f9f9cd9c41284dc6470a5d08"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
