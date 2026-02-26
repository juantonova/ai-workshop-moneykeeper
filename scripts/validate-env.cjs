const fs = require("node:fs");
const path = require("node:path");
const dotenv = require("dotenv");

const rootDir = path.resolve(__dirname, "..");
const envPath = path.join(rootDir, ".env");
const portsConfigPath = path.join(rootDir, "configs", "ports.json");

function createSchema(portKeys) {
  const schema = {
    NODE_ENV: {
      required: true,
      validate: (value) => ["development", "test", "production"].includes(value),
      error: "must be one of: development, test, production",
    },
  };

  for (const key of portKeys) {
    schema[key] = {
      required: true,
      validate: (value) => {
        const numeric = Number(value);
        return Number.isInteger(numeric) && numeric >= 1 && numeric <= 65535;
      },
      error: "must be an integer in range 1..65535",
    };
  }

  return schema;
}

function validateEnvObject(env, portsConfig) {
  const basePort = Number(portsConfig.basePort);
  const portOffsets = portsConfig.offsets || {};
  const portKeys = Object.keys(portOffsets);

  if (!Number.isInteger(basePort) || basePort < 1 || basePort > 65535) {
    return ["configs/ports.json has invalid basePort."];
  }

  const schema = createSchema(portKeys);
  const errors = [];
  const missing = Object.entries(schema)
    .filter(([, rule]) => rule.required)
    .map(([key]) => key)
    .filter((key) => !env[key]);

  if (missing.length > 0) {
    errors.push(`Missing required keys: ${missing.join(", ")}`);
    return errors;
  }

  const invalidBySchema = [];
  for (const [key, rule] of Object.entries(schema)) {
    if (!rule.validate(env[key])) {
      invalidBySchema.push(`${key} (${rule.error})`);
    }
  }
  if (invalidBySchema.length > 0) {
    errors.push(`Invalid values: ${invalidBySchema.join(", ")}`);
  }

  const uniquePorts = new Set(portKeys.map((key) => env[key]));
  if (uniquePorts.size !== portKeys.length) {
    errors.push("Port values must be unique across API/UI/BOT/SCHEDULER.");
  }

  const invalidOffsets = portKeys.filter((key) => Number(env[key]) !== basePort + Number(portOffsets[key]));
  if (invalidOffsets.length > 0) {
    const expected = invalidOffsets
      .map((key) => `${key}=${basePort + Number(portOffsets[key])}`)
      .join(", ");
    errors.push(`Port values must match configs/ports.json. Expected: ${expected}`);
  }

  return errors;
}

function main() {
  if (!fs.existsSync(envPath)) {
    console.error("[env] Missing .env file in workspace root.");
    console.error("[env] Run: cp .env.example .env");
    process.exit(1);
  }

  if (!fs.existsSync(portsConfigPath)) {
    console.error(`[env] Ports config is missing: ${portsConfigPath}`);
    process.exit(1);
  }

  const portsConfig = JSON.parse(fs.readFileSync(portsConfigPath, "utf8"));
  const envText = fs.readFileSync(envPath, "utf8");
  const env = dotenv.parse(envText);
  const errors = validateEnvObject(env, portsConfig);

  if (errors.length > 0) {
    for (const error of errors) {
      console.error(`[env] ${error}`);
    }
    process.exit(1);
  }

  console.log("[env] Validation passed.");
}

if (require.main === module) {
  main();
}
module.exports = { createSchema, validateEnvObject };
