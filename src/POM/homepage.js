const {expect} = require('@playwright/test');

export class Homepage{
    constructor(page){
        this.page = page;
        this.getBookStoreApplicationCard = page.getByRole('heading', { name: 'Book Store Application' });
    }

    async goToHomePage(){
        await this.page.goto('https://demoqa.com/');
    }

    async goToBookStorePage(){
        await this.getBookStoreApplicationCard.scrollIntoViewIfNeeded();
        await this.getBookStoreApplicationCard.click();
    }
}