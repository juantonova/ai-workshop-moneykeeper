const fs = require("node:fs");
const path = require("node:path");

const openApiDir = path.resolve(__dirname, "../openapi");
const sourcePath = path.join(openApiDir, "openapi.source.json");
const outputPath = path.join(openApiDir, "openapi.json");

if (!fs.existsSync(sourcePath)) {
  throw new Error(`[api] OpenAPI source is missing: ${sourcePath}`);
}

const sourceRaw = fs.readFileSync(sourcePath, "utf8");
const openApiDocument = JSON.parse(sourceRaw);

fs.mkdirSync(openApiDir, { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(openApiDocument, null, 2) + "\n", "utf8");
console.log(`[api] OpenAPI generated from source: ${outputPath}`);
