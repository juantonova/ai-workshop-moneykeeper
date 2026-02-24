const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const envPath = path.join(rootDir, ".env");
const requiredKeys = ["NODE_ENV", "API_PORT", "UI_PORT", "BOT_PORT", "SCHEDULER_PORT"];
const portKeys = ["API_PORT", "UI_PORT", "BOT_PORT", "SCHEDULER_PORT"];

if (!fs.existsSync(envPath)) {
  console.error("[env] Missing .env file in workspace root.");
  console.error("[env] Run: cp .env.example .env");
  process.exit(1);
}

const envText = fs.readFileSync(envPath, "utf8");
const pairs = envText
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"))
  .map((line) => {
    const [key, ...rest] = line.split("=");
    return [key, rest.join("=")];
  });

const env = Object.fromEntries(pairs);

const missing = requiredKeys.filter((key) => !env[key]);
if (missing.length > 0) {
  console.error(`[env] Missing required keys: ${missing.join(", ")}`);
  process.exit(1);
}

const invalidPorts = portKeys.filter((key) => {
  const value = Number(env[key]);
  return !Number.isInteger(value) || value < 1 || value > 65535;
});
if (invalidPorts.length > 0) {
  console.error(`[env] Invalid port values for: ${invalidPorts.join(", ")}`);
  process.exit(1);
}

const uniquePorts = new Set(portKeys.map((key) => env[key]));
if (uniquePorts.size !== portKeys.length) {
  console.error("[env] Port values must be unique across API/UI/BOT/SCHEDULER.");
  process.exit(1);
}

console.log("[env] Validation passed.");
