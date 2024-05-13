const {Given, When, Then} = require('@cucumber/cucumber')
const {BasePage} = require("../../POM/basepage");
const { readFromJSONFile } = require("../../utils/fileUtils");
const { Users } = require('../../data-object/account-object');

Given('User navigate to the application', async function () {
    const playerJSONData = await readFromJSONFile(process.env.PLAYER_FILEPATH);
    user = new Users(playerJSONData.username, playerJSONData.password, playerJSONData.userID);
    console.log(user.username);
    const basePage = new BasePage(page);
    
    await page.goto(process.env.BASE_URL);
    basePage.clickIntoBookStoreDropDownList();
});


When('User navigate to BookStore page', async function () {
    let getBookStoreApplicationCard = page.getByRole('heading', { name: 'Book Store Application' });
    // Write code here that turns the phrase above into concrete actions
    await getBookStoreApplicationCard.scrollIntoViewIfNeeded();
    await getBookStoreApplicationCard.click();
});


Then('Verify user is in BookStore page', async function () {
    let loginButton = page.getByRole("button", { name: "Login" });
    await loginButton.toBeVisible();
});