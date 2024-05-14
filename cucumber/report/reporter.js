const reporter = require("cucumber-html-reporter")

const options = {
  theme: "bootstrap",
  jsonFile: "cucumber_report.json",
  output: " /cucumber/reports/cucumber_report.html",
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    Browser: "Chrome 54.0",
    Platform: "Windows 10",
  },
}

reporter.generate(options)