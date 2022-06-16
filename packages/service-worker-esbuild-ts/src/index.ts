import { handleRequest } from "./request";

addEventListener("fetch", (event: Record<string, any>) => {
  event.respondWith(handleRequest(event.request));
});
