const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const services = ["api", "ui", "bot", "scheduler"];

function checkService(serviceName) {
  const serviceDir = path.join(rootDir, serviceName);
  const packageJsonPath = path.join(serviceDir, "package.json");
  const entrypointPath = path.join(serviceDir, "src", "index.js");

  if (!fs.existsSync(serviceDir)) {
    throw new Error(`[health] ${serviceName}: directory missing`);
  }
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error(`[health] ${serviceName}: package.json missing`);
  }
  if (!fs.existsSync(entrypointPath)) {
    throw new Error(`[health] ${serviceName}: src/index.js missing`);
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  if (!packageJson.scripts || !packageJson.scripts.dev) {
    throw new Error(`[health] ${serviceName}: dev script missing`);
  }

  return `[health] ${serviceName}: ok`;
}

try {
  const results = services.map(checkService);
  for (const result of results) {
    console.log(result);
  }
  console.log("[health] Local dev baseline checks passed.");
} catch (error) {
  console.error(String(error.message || error));
  process.exit(1);
}
