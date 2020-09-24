/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "style/main.css",
    "revision": "c7a02441b4914ffdc39eb2eb55148adc"
  },
  {
    "url": "index.html",
    "revision": "16dadfd966fd31a3013b34e6ac502d08"
  },
  {
    "url": "js/animation.js",
    "revision": "3f8fd475afa44c10b3107178a83bd9ae"
  },
  {
    "url": "images/home/business.jpg",
    "revision": "9c3ec8d2a8a188bab9ddc212a64a0c1e"
  },
  {
    "url": "images/icon/icon.svg",
    "revision": "d582b402cdafcc4a3934fba3986d1be7"
  }
]);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}