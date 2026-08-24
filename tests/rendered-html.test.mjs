import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the wedding site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Breno &amp; Paula \| 07\.11\.2026<\/title>/i);
  assert.match(html, /O nosso para sempre começa aqui\./);
  assert.match(html, /Confirmar presença/);
  assert.match(html, /Lista na Camicado/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/i);
});

test("keeps the Cloudflare deployment configuration aligned", async () => {
  const [wranglerConfig, packageJson] = await Promise.all([
    readFile(new URL("../wrangler.jsonc", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  const config = JSON.parse(wranglerConfig);
  const packageManifest = JSON.parse(packageJson);

  assert.equal(config.name, "wedding");
  assert.equal(config.main, "./dist/server/index.js");
  assert.equal(config.assets.directory, "./dist/client");
  assert.equal(packageManifest.scripts.deploy, "wrangler deploy --config wrangler.jsonc");
});
