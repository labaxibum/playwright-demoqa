const { Given, When, Then } = require('@cucumber/cucumber');
const { HomePage } = require("../../POM/homepage");
const { BookStorePage } = require("../../POM/bookstore_page");
const { LoginPage } = require("../../POM/loginpage");

let homePage, bookStorePage, loginPage;

Given('I visit login page', async function () {
    homePage = new HomePage(page);
    bookStorePage = new BookStorePage(page);
    loginPage = new LoginPage(page);
    await homePage.goToHomePage();
    await homePage.goToBookStorePage();
    await bookStorePage.clickLoginButtonInBookStore();
});

When('I login with {string} and {string}', async function (username, password) {
    await loginPage.loginWithAccount(username, password);
});


Then('Verify player login successfully with {string}', async function (username) {
    await expect(bookStorePage.getUserNameValue).toHaveText(username);
});