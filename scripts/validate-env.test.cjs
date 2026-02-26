const test = require("node:test");
const assert = require("node:assert/strict");

const { validateEnvObject } = require("./validate-env.cjs");

const portsConfig = {
  basePort: 3000,
  offsets: {
    API_PORT: 0,
    BOT_PORT: 1,
    SCHEDULER_PORT: 2,
    UI_PORT: 2173,
  },
};

test("validateEnvObject returns no errors for valid env", () => {
  const env = {
    NODE_ENV: "development",
    API_PORT: "3000",
    BOT_PORT: "3001",
    SCHEDULER_PORT: "3002",
    UI_PORT: "5173",
  };

  assert.deepEqual(validateEnvObject(env, portsConfig), []);
});

test("validateEnvObject reports missing keys", () => {
  const env = {
    NODE_ENV: "development",
    API_PORT: "3000",
  };

  const errors = validateEnvObject(env, portsConfig);
  assert.ok(errors.some((entry) => entry.startsWith("Missing required keys:")));
});

test("validateEnvObject reports duplicate ports", () => {
  const env = {
    NODE_ENV: "development",
    API_PORT: "3000",
    BOT_PORT: "3000",
    SCHEDULER_PORT: "3002",
    UI_PORT: "5173",
  };

  const errors = validateEnvObject(env, portsConfig);
  assert.ok(errors.includes("Port values must be unique across API/UI/BOT/SCHEDULER."));
});

test("validateEnvObject reports config mismatch", () => {
  const env = {
    NODE_ENV: "development",
    API_PORT: "3003",
    BOT_PORT: "3001",
    SCHEDULER_PORT: "3002",
    UI_PORT: "5173",
  };

  const errors = validateEnvObject(env, portsConfig);
  assert.ok(
    errors.some((entry) =>
      entry.startsWith("Port values must match configs/ports.json. Expected:"),
    ),
  );
});
