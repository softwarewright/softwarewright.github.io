/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "866680937efddc6ffbcbadbb22cd0f9b"
  },
  {
    "url": "assets/css/0.styles.b0f6d368.css",
    "revision": "935549677ab213dce046a8cf875ecf8c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3ae73f2d.js",
    "revision": "a38d95c3ab4d97643570516d217e7aaf"
  },
  {
    "url": "assets/js/11.169e0b53.js",
    "revision": "98e3f2a1f3831a42c0d45fa3c2d2b3fb"
  },
  {
    "url": "assets/js/12.eaa442a6.js",
    "revision": "d4a79da2e380b60f730923621d0171c4"
  },
  {
    "url": "assets/js/13.20028036.js",
    "revision": "0bd46af1a4d5f9c68bc432cd600fd013"
  },
  {
    "url": "assets/js/14.43826848.js",
    "revision": "59fea84331e39cbb46c699cc20c0815a"
  },
  {
    "url": "assets/js/15.5736fac4.js",
    "revision": "9c22e33cca1e89c9a843fdbd898b39e3"
  },
  {
    "url": "assets/js/16.1438cd6c.js",
    "revision": "f847c39a56789bf279c8c8f17e63cdf0"
  },
  {
    "url": "assets/js/17.473dfc3b.js",
    "revision": "ecba5e09bbe1fa275a08f4b35a77b384"
  },
  {
    "url": "assets/js/18.5057494e.js",
    "revision": "1d7758d0e36260a554987243edb887b1"
  },
  {
    "url": "assets/js/19.de14c925.js",
    "revision": "633010574c7aca4efa7078fc95547310"
  },
  {
    "url": "assets/js/2.3f10f570.js",
    "revision": "f27f15569c79f8091cce031e847044c9"
  },
  {
    "url": "assets/js/20.97a05649.js",
    "revision": "22e3ae255eebc8b20682a4daa7579938"
  },
  {
    "url": "assets/js/21.db08993b.js",
    "revision": "2679c2df1a3cc70a73f1ee0872aaec43"
  },
  {
    "url": "assets/js/22.638356a2.js",
    "revision": "b2680da0cc26480ce2d2c2369e2c88bb"
  },
  {
    "url": "assets/js/23.0ffb1ab0.js",
    "revision": "edf1ed8e266428a0e3ca8c16c1a84bcd"
  },
  {
    "url": "assets/js/24.ab5936b5.js",
    "revision": "0e56834b87922e2d23aa3c27052893b0"
  },
  {
    "url": "assets/js/25.a3ce0e26.js",
    "revision": "28b69a56a80c65bc704c1f8226848369"
  },
  {
    "url": "assets/js/26.ccf9301e.js",
    "revision": "9702946f84c80e47ce88dda3cb65b51b"
  },
  {
    "url": "assets/js/27.6abd341f.js",
    "revision": "119b3f675ebb3ee29831bc10222dabe2"
  },
  {
    "url": "assets/js/28.c7b823d8.js",
    "revision": "b7aaf90f87ef003004dff57d69f6e940"
  },
  {
    "url": "assets/js/29.e544340c.js",
    "revision": "96113abda3736b19c3b4f4440fa658ce"
  },
  {
    "url": "assets/js/3.c07a5a88.js",
    "revision": "05c5f23f7d545297856b4a1039ed683f"
  },
  {
    "url": "assets/js/30.1ff798ac.js",
    "revision": "ac70b8b7a7aeaefe401ae90b7e5f7a81"
  },
  {
    "url": "assets/js/31.282c9d52.js",
    "revision": "ec55d4250cf1f62c88f9accbed890b1e"
  },
  {
    "url": "assets/js/32.75d2840b.js",
    "revision": "211f76970e945dde596c8132321c7f66"
  },
  {
    "url": "assets/js/4.1b5da080.js",
    "revision": "d39f627aaddebe5b9f193eeb624d72d0"
  },
  {
    "url": "assets/js/5.bf87e246.js",
    "revision": "57b322d7931ecf14708f29e40ac44f36"
  },
  {
    "url": "assets/js/6.7e8795a8.js",
    "revision": "238f4b7610c81a001e106a69bff8be66"
  },
  {
    "url": "assets/js/7.47a2455c.js",
    "revision": "3dfca7c113f8745df965426eb829da98"
  },
  {
    "url": "assets/js/8.f20ee871.js",
    "revision": "c033f6fc9bd608ea069a7a43e3496fce"
  },
  {
    "url": "assets/js/9.6f42f475.js",
    "revision": "4e63024edf8a30ddfb9219c42ecf98dd"
  },
  {
    "url": "assets/js/app.39d2e42d.js",
    "revision": "51c615338733ef69182021e2d299996a"
  },
  {
    "url": "blog/index.html",
    "revision": "24f1106057609666d24d69019caae57e"
  },
  {
    "url": "blog/posts/api-testing-sandbox.html",
    "revision": "1706b43e1518a0fb9d515adfe2a6aefe"
  },
  {
    "url": "blog/posts/aws-serverless-express.html",
    "revision": "59ed94a964ee521bb088e2afbaf5e981"
  },
  {
    "url": "blog/posts/index.html",
    "revision": "ab2165c40c691a725da8eec9475c34f3"
  },
  {
    "url": "blog/posts/javascript-api-testing.html",
    "revision": "559f1c9319a12c719ad47041c427c606"
  },
  {
    "url": "blog/posts/jest-unit-testing/extending-jest.html",
    "revision": "66bd709b169fc3df5c31482d1a4f77e3"
  },
  {
    "url": "blog/posts/learn-js-through-testing/00-getting-started.html",
    "revision": "73de3185454ee845fdc75df023e39177"
  },
  {
    "url": "blog/posts/learn-js-through-testing/01-variables.html",
    "revision": "ae66352a5f55fcf4dd702815f479c526"
  },
  {
    "url": "blog/posts/learn-js-through-testing/02-basic-arithmetic-operators.html",
    "revision": "62c353d6fd0ff171db3451cd486379ec"
  },
  {
    "url": "blog/posts/learn-js-through-testing/03-basic-assignment-operators.html",
    "revision": "c32fff757f5e98d3439b17b08074beb3"
  },
  {
    "url": "blog/posts/learn-js-through-testing/04-equality-operators.html",
    "revision": "a71117a8224efc01cc34b8a18853a37d"
  },
  {
    "url": "blog/posts/learn-js-through-testing/05-relational-operators.html",
    "revision": "2909e2ad7eef4646fcd40a26ee99b9cc"
  },
  {
    "url": "blog/posts/learn-js-through-testing/index.html",
    "revision": "629b79b67ec76e55690ef1db6488574c"
  },
  {
    "url": "contact/index.html",
    "revision": "6fa86cdc623b83df4f5af0364344dc8a"
  },
  {
    "url": "index.html",
    "revision": "06017293f772b26282bbcb5635ab36ed"
  },
  {
    "url": "js/mailchimp.js",
    "revision": "1297839357a5b9289373ca9cbe044c8d"
  },
  {
    "url": "learn/index.html",
    "revision": "d6a74ffa309c168c0e1b2a6feec2b287"
  },
  {
    "url": "logo.png",
    "revision": "3df370069fd87abfb8d121a699ede952"
  },
  {
    "url": "posts/docker.jpg",
    "revision": "384f325fedc2092392e517f7e01a18bb"
  },
  {
    "url": "posts/javascript.png",
    "revision": "e8c27f6b0fcf596a06a31135d937c73e"
  },
  {
    "url": "posts/lambda.png",
    "revision": "0dfa3e4fb3259f46edf5fcd082edfffb"
  },
  {
    "url": "posts/testing.png",
    "revision": "940e8ab300a3cd4bd720879d93022913"
  },
  {
    "url": "small-logo.png",
    "revision": "2bae696a71d22b9c1bbed62c833ab44b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
