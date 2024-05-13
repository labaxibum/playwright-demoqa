const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const {initBrowser} = require("../browser/browserManagement");

setDefaultTimeout(600000);
const dotenv = require('dotenv');
dotenv.config();
let browser;


BeforeAll(async function(){
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
 
