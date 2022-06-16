// 不支持 cjs，但是已经有冗余的代码了，有可能他们内部实现了类似 Node 的 vm，
// 但是 Miniflare 应该是不打算实现，代码没删干净，具体见
// https://github.com/cloudflare/miniflare/blob/33c05625babe44d962522e229ad710046016ebaf/packages/runner-vm/src/linker.ts#L165

// 入口页面没有 require
const handleRequest = require("./request.js");

// 使用 import 又找不到 export
// import handleRequest  from './request.js';

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
