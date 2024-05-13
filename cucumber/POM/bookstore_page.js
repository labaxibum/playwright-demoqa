const { BasePage } =require("./basepage");
const { Element } = require("../element/elementUtils");
class BookStorePage extends BasePage {
  constructor(page) {
    super(page);
    this.getLoginButton = page.getByRole("button", { name: "Login" });
    this.getSearchField = page.getByPlaceholder("Type to search");
    this.getLogoutButton = page.getByRole("button", { name: "Log out" });
    this.getSearchResultInTable = new Element(
      'xpath=//span[contains(@id,"see-book")]/a'
    );
    this.getUserNameValue = page.locator("#userName-value");
  }

  async clickLoginButtonInBookStore() {
    await this.getLoginButton.click();
  }

  async inputIntoSearchField(searchText) {
    await this.getSearchField.fill(searchText);
  }

  async getResultFromSearchResult() {
    await getSearchResultInTable.getText;
  }

  async clearSearchField() {
    await this.getSearchField.clear();
  }

  async waitForLogoutAppear() {
    await page.waitForSelector(getLogoutButton);
  }

  async getUsernameValue() {
    return await this.getUserNameValue.innerText();
  }
}

module.exports = {
  BookStorePage
}
