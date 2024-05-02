const { chrome, firefox, edge } = require('@playwright/test')

let browser;

(async (testingBrowser) => {
    if (testingBrowser == "firefox") {
        browser = await firefox.launch();
    }
    else if (testingBrowser == "chrome") {
        browser = await chrome.launch();
    }
    else {
        browser = await edge.launch();
    }
    const page = browser.newPage();
})