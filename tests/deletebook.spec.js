const { test, expect } = require("../src/fixtures/page-fixtures");
const { BasePage } = require("../src/POM/basepage");
const { handleAlert } = require("../src/utils/handlerAlertUtils");
const { bookApiHelper } = require("../src/helper/api/bookApiHelper");
const { Users } = require('../src/data-object/account-object');
const { Books } = require('../src/data-object/book-object');
const { readFromJSONFile } = require('../src/utils/fileUtils');
const playerJSONData = readFromJSONFile(process.env.PLAYER_FILEPATH);
const bookJSONData = readFromJSONFile(process.env.BOOK_FILEPATH);

let user = new Users(playerJSONData.username,playerJSONData.password,playerJSONData.userID);
user = Object.assign(Users.prototype, user);

let book = new Books(bookJSONData.bookName, bookJSONData.bookISBN);
book = Object.assign(Books.prototype, book);

const username = user.getUsername();
const password = user.getPassword();
const userID = user.getUserID();
const bookName = book.getBookName();
test.beforeEach("Add book before delete", async ({ request }) => {
  bookApiHelper.addBookForUser(request, username, password, userID, book.getBookISBN());
});

test.describe("Delete book", () => {
    test("Delete book test", async ({ homepage, loginPage, bookstorePage, profilePage }) => {
        await homepage.goToHomePage();
        await homepage.goToBookStorePage();
        const basepage = new BasePage(page);
        await bookstorePage.clickLoginButtonInBookStore();
        await loginPage.loginWithValidAccount(username, password);
        //await bookStorePage.waitForLogoutAppear();
        await expect(bookstorePage.getUserNameValue).toHaveText(username);
        await basepage.clickIntoChildrenBookStoreDropDownList("Profile");
        await profilePage.removeBook(bookName, page);
        await profilePage.clickOKInPopup();
        await handleAlert(page);
        await expect(profilePage.getBookTitle(bookName)).toBeHidden();
    });
});
