const { test, expect } = require("../src/fixtures/page-fixtures");
const { handleAlert } = require("../src/utils/handlerAlertUtils");
const { bookApiHelper } = require("../src/helper/api/bookApiHelper");
const { Users } = require('../src/data-object/account-object');
const { Books } = require('../src/data-object/book-object');
const { readFromJSONFile } = require('../src/utils/fileUtils');
let user = "";
let book = "";

let username;
let password;
let userID;
let bookName;
let bookISBN;
test.beforeEach("Add book before delete", async ({ request }) => {
    const bookJSONData = await readFromJSONFile(process.env.BOOK_FILEPATH);
    const playerJSONData = await readFromJSONFile(process.env.PLAYER_FILEPATH);
    book = new Books(bookJSONData.bookName, bookJSONData.bookISBN);
    user = new Users(playerJSONData.username, playerJSONData.password, playerJSONData.userID);
    username = user.username;
    password = user.password;
    userID = user.userID;
    bookISBN = book.bookISBN;
    bookName = book.bookName;
    await bookApiHelper.addBookForUser(request, username, password, userID, bookISBN);
});

test.describe("Delete book", () => {
    test("Delete book test", async ({ page, basePage, homePage, loginPage, bookstorePage, profilePage }) => {
        await homePage.goToHomePage();
        await homePage.goToBookStorePage();
        await bookstorePage.clickLoginButtonInBookStore();
        await loginPage.loginWithAccount(username, password);
        //await bookStorePage.waitForLogoutAppear();
        await expect(bookstorePage.getUserNameValue).toHaveText(username);
        await basePage.clickIntoChildrenBookStoreDropDownList("Profile");
        await profilePage.removeBook(bookName);
        await profilePage.clickOKInPopup();
        await handleAlert(page);
        await expect(profilePage.getBookTitle(bookName)).toBeHidden();
    });
});
