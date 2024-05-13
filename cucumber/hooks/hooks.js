const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const {initBrowser} = require("../browser/browserManagement");
const { readFromJSONFile } = require("../../src/utils/fileUtils");

setDefaultTimeout(60000);

let browser;


BeforeAll(async function(){
    let data = readFromJSONFile("../cucumber/environment/test.json");
    global.baseURL = data.BaseURL;
    global.browserType = data.browsere;
    browser = await initBrowser();
});

AfterAll(async function(){
    await browser.close();
});

Before(async function () {
    global.context = await browser.newContext();
    global.page = await context.newPage();
 });
 
 // Cleanup after each scenario
 After(async function () {
    await global.page.close();
    await global.context.close();
 });
 
