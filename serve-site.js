import { createReadStream } from "node:fs";
import { createServer } from "node:http";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const pages = new Set([
  "index.html",
  "discography.html",
  "beats.html",
  "admin/index.html",
  "site-data.js",
]);

createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405).end("Method not allowed");
    return;
  }

  const filename = new URL(request.url, "http://localhost").pathname.slice(1) || "index.html";
  if (!pages.has(filename)) {
    response.writeHead(404).end("Not found");
    return;
  }

  const contentType = filename.endsWith(".js")
    ? "text/javascript; charset=utf-8"
    : filename.endsWith(".css")
      ? "text/css; charset=utf-8"
      : "text/html; charset=utf-8";
  response.setHeader("Content-Type", contentType);
  if (request.method === "HEAD") {
    response.writeHead(200).end();
    return;
  }

  createReadStream(join(root, filename))
    .on("error", () => response.writeHead(404).end("Not found"))
    .pipe(response);
}).listen(5500, "127.0.0.1", () => {
  console.log("Website listening on http://127.0.0.1:5500");
});
