const fs = require("node:fs");
const path = require("node:path");

const packageJsonPath = path.resolve(__dirname, "../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const explicitVersion = process.env.CONTRACTS_VERSION;

if (explicitVersion) {
  packageJson.version = explicitVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n", "utf8");
  console.log(`[contracts] Version overridden by CONTRACTS_VERSION=${explicitVersion}`);
  process.exit(0);
}

const versionMatch = String(packageJson.version || "0.1.0").match(/^(\d+)\.(\d+)\.(\d+)(?:[-+].*)?$/);
if (!versionMatch) {
  console.error(`[contracts] Current version is not semver-compatible: ${packageJson.version}`);
  process.exit(1);
}

const [, major, minor] = versionMatch;
const runNumberRaw = process.env.GITHUB_RUN_NUMBER;
const runNumber = Number.parseInt(runNumberRaw || "", 10);

if (Number.isNaN(runNumber) || runNumber <= 0) {
  console.log(
    "[contracts] GITHUB_RUN_NUMBER is missing, skip CI version bump (set CONTRACTS_VERSION for local overrides).",
  );
  process.exit(0);
}

packageJson.version = `${major}.${minor}.${runNumber}`;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n", "utf8");
console.log(`[contracts] CI version set to ${packageJson.version}`);
