// 注意，这里必须要加 .js
import { handleRequest } from "./request.js";

export default {
  async fetch(request, env, ctx) {
    // - `request` is the incoming `Request` instance
    // - `env` contains bindings, KV namespaces, Durable Objects, etc
    // - `ctx` contains `waitUntil` and `passThroughOnException` methods
    console.log("\nDoing something fetch...", { request, env, ctx });
    return handleRequest(request);
  },
  async scheduled(controller, env, ctx) {
    // - `controller` contains `scheduledTime` and `cron` properties
    // - `env` contains bindings, KV namespaces, Durable Objects, etc
    // - `ctx` contains the `waitUntil` method
    console.log("\nDoing something scheduled...", { controller, env, ctx });
    ctx.waitUntil(Promise.resolve(controller.scheduledTime));
    ctx.waitUntil(Promise.resolve(controller.cron));
    ctx.waitUntil(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      })
    );
  },
};
