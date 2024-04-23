const { test, expect } = require("@playwright/test");
const { Homepage } = require("../src/POM/homepage");
const { BookStorePage } = require("../src/POM/bookstore_page");
const { BasePage } = require("../src/POM/basepage");
const { LoginPage } = require("../src/POM/loginpage");
const { ProfilePage } = require("../src/POM/profilepage");
const { handleAlert } = require("../src/utils/handlerAlertUtils");
const { bookApiHelper } = require("../src/helper/api/bookApiHelper");

const username = "anhlet7";
const password = "Te5t1ng!";
const userID = "8c6c736d-fce6-4673-b1a4-187a569c6f74";
const isbn = "9781449331818";
const bookName = "Learning JavaScript Design Patterns";

//isbn: 9781449331818
//Book name: Learning JavaScript Design Patterns
//UUID: 10c99905-2298-4eef-bf8a-1937ac4146e1
test.beforeEach("Add book before delete", async ({ request }) => {
    bookApiHelper.addBookForUser(request, username, password, userID, isbn);
});

test.describe("Delete book", () => {
    test("Delete book test", async ({ page }) => {
        const homepage = new Homepage(page);
        await homepage.goToHomePage();
        await homepage.goToBookStorePage();
        const bookStorePage = new BookStorePage(page);
        const loginPage = new LoginPage(page);
        const basepage = new BasePage(page);
        const profilePage = new ProfilePage(page);
        await bookStorePage.clickLoginButtonInBookStore();
        await loginPage.loginWithValidAccount(username, password);
        //await bookStorePage.waitForLogoutAppear();
        await expect(bookStorePage.getUserNameValue).toHaveText(username);
        await basepage.clickIntoChildrenBookStoreDropDownList("Profile");
        await profilePage.removeBook(bookName, page);
        await profilePage.clickOKInPopup();
        await handleAlert(page);
        await expect(profilePage.getBookTitle(bookName)).toBeHidden();
    });
});
