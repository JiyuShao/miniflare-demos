module.exports = function handleRequest(request) {
  const body = JSON.stringify({
    url: request.url,
    header: request.headers.get("X-Message"),
  });
  return new Response(body, {
    headers: { "Content-Type": "application/json" },
  });
};
