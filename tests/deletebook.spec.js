const { test, expect } = require("../src/fixtures/page-fixtures");
const { BasePage } = require("../src/POM/basepage");
const { handleAlert } = require("../src/utils/handlerAlertUtils");
const { bookApiHelper } = require("../src/helper/api/bookApiHelper");
const { Users } = require('../src/data-object/account-object');
const { Books } = require('../src/data-object/book-object');
const { readFromJSONFile } = require('../src/utils/fileUtils');
const bookJSONData = readFromJSONFile(process.env.BOOK_FILEPATH);

let user = "";
//user = Object.assign(Users.prototype, user); object [promise]

let book = new Books(bookJSONData.bookName, bookJSONData.bookISBN);
book = Object.assign(Books.prototype, book);

let username;
let password;
let userID;
let bookName;
test.beforeEach("Add book before delete", async ({ request }) => {
    const playerJSONData = await readFromJSONFile(process.env.PLAYER_FILEPATH);
    user = new Users(playerJSONData.username, playerJSONData.password, playerJSONData.userID);
    console.log(user);
    // bookApiHelper.addBookForUser(request, username, password, userID, book.getBookISBN());
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
