const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const services = ["api", "ui", "bot", "scheduler"];
const runtimeMode = process.argv.includes("--runtime");

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

async function checkRuntimeHealth() {
  const portsConfigPath = path.join(rootDir, "configs", "ports.json");
  if (!fs.existsSync(portsConfigPath)) {
    throw new Error("[health] runtime: configs/ports.json is missing");
  }

  const portsConfig = JSON.parse(fs.readFileSync(portsConfigPath, "utf8"));
  const basePort = Number(portsConfig.basePort);
  const offsets = portsConfig.offsets || {};
  const timeoutMs = 1200;
  const endpoints = services.map((serviceName) => {
    const envKey = `${serviceName.toUpperCase()}_PORT`;
    const port = basePort + Number(offsets[envKey] || 0);
    const url = `http://127.0.0.1:${port}/health`;
    return { serviceName, url };
  });

  for (const endpoint of endpoints) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(endpoint.url, { method: "GET", signal: controller.signal });
      if (!response.ok) {
        throw new Error(`status ${response.status}`);
      }
      console.log(`[health] ${endpoint.serviceName}: runtime ok (${endpoint.url})`);
    } catch (error) {
      throw new Error(`[health] ${endpoint.serviceName}: runtime check failed (${endpoint.url}) - ${error}`);
    } finally {
      clearTimeout(timer);
    }
  }
}

async function main() {
  try {
    const results = services.map(checkService);
    for (const result of results) {
      console.log(result);
    }

    if (runtimeMode) {
      await checkRuntimeHealth();
      console.log("[health] Runtime health checks passed.");
      return;
    }

    console.log(
      "[health] Local dev baseline checks passed (filesystem-only). Use --runtime to check /health endpoints.",
    );
  } catch (error) {
    console.error(String(error.message || error));
    process.exit(1);
  }
}

main();
