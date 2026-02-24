const { rebuildMonthlySnapshotJob } = require("./jobs/rebuild-monthly-snapshot.job");

console.log("[scheduler] baseline scaffold is running", rebuildMonthlySnapshotJob());
