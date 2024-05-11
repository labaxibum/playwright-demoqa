const {Given, When, Then} = require('@cucumber/cucumber')

Given('User navigate to the application', async function () {
    console.log(process.env.BASE_URL);
    await page.goto("https://demoqa.com/");
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