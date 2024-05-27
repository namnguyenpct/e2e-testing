const common = [
  "src/features/*.feature", // Specify our feature files
  "--require-module ts-node/register", // Load TypeScript module
  "--require src/step-definitions/*.ts", // Load step definitions
  "--require src/step-definitions/**/*.ts", // Load step definitions
  "--format json:reports/cucumber-html-reporter.json", // Report
  "--format message:reports/cucumber-html-reporter.ndjson", // Report
  "--format html:reports/report.html", // Report
].join(" ");

module.exports = {
  default: common,
};
