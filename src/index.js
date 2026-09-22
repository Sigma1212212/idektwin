export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Route: GET /api/hello
    if (url.pathname === "/api/hello" && request.method === "GET") {
      return new Response(
        JSON.stringify({ message: "Hello from Cloudflare Worker!" }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Route: POST /api/data
    if (url.pathname === "/api/data" && request.method === "POST") {
      const body = await request.json();
      return new Response(
        JSON.stringify({ received: body, status: "success" }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Fallback for unhandled routes
    return new Response("Not Found", { status: 404 });
  },
};