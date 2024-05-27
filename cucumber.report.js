const reporter = require("cucumber-html-reporter");

const options = {
  jsonFile: "reports/cucumber-html-reporter.json",
  output: "reports/report.html",
  screenshotsDirectory: "reports/screenshots/",
  launchReport: true,
  noInlineScreenshots: false,
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  storeScreenshots: true,
  theme: "bootstrap",
};

reporter.generate(options);
