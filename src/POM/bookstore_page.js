const {expect} = require('@playwright/test');

exports.BookStorePage = class BookStorePage{
    constructor(page){
        this.page = page;
        this.getLoginButton = page.getByRole('button', { name: 'Login' });
        this.getSearchField = page.getByLocator('id=searchBox');
        this.getSearchResultInTable = page.getByLocator('//span[contains(@id,"see-book")');
    }

    async clickLoginButtonInBookStore(){
        await this.getLoginButton.click();
    }

    async inputIntoSearchField(searchText){
        await this.getSearchField.fill(searchText);
    }

    async getResultFromSearchResult(){
        await this.getSearchResultInTable.innerText();
    }

    async verifiedSearchResult(searchResult, searchText){
        searchResult = searchResult.ToLowerCase();
        await expect(searchResult.toHaveText(searchText));
    }
}