const {expect} = require('@playwright/test');

exports.Homepage = class Homepage{
    constructor(page){
        this.page = page;
        this.getBookStoreApplicationCard = page.getByRole('heading', { name: 'Book Store Application' });
    }

    async goToBookStorePage(){
        await this.getBookStoreApplicationCard.scrollIntoViewIfNeeded();
        await this.getBookStoreApplicationCard.click();
    }
}