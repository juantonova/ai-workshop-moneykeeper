const fs = require("node:fs");
const path = require("node:path");

const packageJsonPath = path.resolve(__dirname, "../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

const [major, minor] = String(packageJson.version || "0.1.0").split(".");
const runNumberRaw = process.env.GITHUB_RUN_NUMBER || "0";
const runNumber = Number.parseInt(runNumberRaw, 10);

if (Number.isNaN(runNumber) || runNumber <= 0) {
  console.log("[contracts] GITHUB_RUN_NUMBER is missing, skip CI version bump.");
  process.exit(0);
}

packageJson.version = `${major}.${minor}.${runNumber}`;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n", "utf8");
console.log(`[contracts] CI version set to ${packageJson.version}`);
