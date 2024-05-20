import { BasePage } from "./basepage";
const { Element } = require("../core/element/elementUtils");
export class BookStorePage extends BasePage {
  constructor(page) {
    super(page);
    this.getLoginButton = page.getByRole("button", { name: "Login" });
    this.getSearchField = page.getByPlaceholder("Type to search");
    this.getLogoutButton = page.getByRole("button", { name: "Log out" });
    this.getSearchResultInTable = page.locator(
      'xpath=//span[contains(@id,"see-book")]/a' ,{ strict: false }
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
    return await this.getSearchResultInTable.innerText();
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
