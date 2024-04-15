const {expect} = require('@playwright/test');
const {lowerCaseText, lowerCaseMultipleText} = require('../utils/stringUtils')
export class BookStorePage{
    constructor(page){
        this.page = page;
        this.getLoginButton = page.getByRole('button', { name: 'Login' });
        this.getSearchField = page.getByPlaceholder('Type to search');
        this.getSearchResultInTable = page.locator('//span[contains(@id,"see-book")]/a');
    }

    async clickLoginButtonInBookStore(){
        await this.getLoginButton.click();
    }

    async inputIntoSearchField(searchText){
        await this.getSearchField.fill(searchText);
    }

    async getResultFromSearchResult(){
      return await this.getSearchResultInTable.allInnerTexts();}

    async clearSearchField(){
        await this.getSearchField.clear();
    }


}