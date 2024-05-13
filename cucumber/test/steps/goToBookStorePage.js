const { Given, When, Then } = require('@cucumber/cucumber')
const { BasePage } = require("../../POM/basepage");
const { HomePage } = require("../../POM/homepage");
const { BookStorePage } = require("../../POM/bookstore_page");
const { readFromJSONFile } = require("../../utils/fileUtils");
const { Users } = require('../../data-object/account-object');

let basePage, homePage, bookStorePage, loginPage, profilePage;


Given('User navigate to the application', async function () {
    console.log(process.env.BASE_URL);
    await page.goto("https://demoqa.com/");
});


When('User navigate to BookStore page', async function () {
    await homePage.goToBookStorePage();
});


Then('Verify user is in BookStore page', async function () {
    await bookStorePage.clickLoginButtonInBookStore();
});