const { test, expect } = require("@playwright/test");
const { Homepage } = require("../src/POM/homepage");
const { BookStorePage } = require("../src/POM/bookstore_page");
const { BasePage } = require("../src/POM/basepage");
const { LoginPage } = require("../src/POM/loginpage");

const username = "anhlet7";
const password = "Te5t1ng!";
const userID = "8c6c736d-fce6-4673-b1a4-187a569c6f74";
const isbn = "9781449331818";
const bookName = "Learning JavaScript Design Patterns";
let token;

//isbn: 9781449331818
//Book name: Learning JavaScript Design Patterns
//UUID: 10c99905-2298-4eef-bf8a-1937ac4146e1
test.beforeEach("Add book if needed", async ({ request, page }) => {
  // const responseCreateAccount = await request.post("https://demoqa.com/Account/v1/User", {
  //     data: {
  //         "userName": username,
  //         "password": password
  //     }
  // });
  // console.log(await responseCreateAccount.json());
  // expect(responseCreateAccount.status()).toBe(201);
  // const responseCreateAccountBody = await responseCreateAccount.json();
  // console.log(responseCreateAccountBody);

  const responseToken = await request.post(
    "https://demoqa.com/Account/v1/GenerateToken",
    {
      data: {
        userName: username,
        password: password,
      },
    }
  );
  console.log(await responseToken.json());
  expect(responseToken.status()).toBe(200);
  const responseBody = await responseToken.json();
  token = responseBody.token;
  console.log(token);

  const responseAutho = await request.post(
    "https://demoqa.com/Account/v1/Authorized",
    {
      data: {
        userName: username,
        password: password,
      },
    }
  );
  console.log(await responseAutho.json());
  expect(responseAutho.status()).toBe(200);

  const responseAddBook = await request.post(
    "https://demoqa.com/BookStore/v1/Books",
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        userId: userID,
        collectionOfIsbns: [
          {
            isbn: isbn,
          },
        ],
      },
    }
  );
  console.log(await responseAddBook.json());
  expect(responseAddBook.status()).toBe(201);
  const homepage = new Homepage(page);
  await homepage.goToHomePage();
  await homepage.goToBookStorePage();
});

test.describe("Delete book", () => {
  test("Delete book", async ({ page }) => {
    const bookStorePage = new BookStorePage(page);
    const loginPage = new LoginPage(page);
    const basepage = new BasePage(page);

    await bookStorePage.clickLoginButtonInBookStore();
    await loginPage.loginWithValidAccount(username, password);
    await basepage.clickIntoChildrenBookStoreDropDownList("Profile");
  });
});
