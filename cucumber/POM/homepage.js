const { BasePage } = require("./basepage");

class HomePage extends BasePage{
    constructor(page){
        super(page);
        this.getBookStoreApplicationCard = page.getByRole('heading', { name: 'Book Store Application' });
    }

    async goToHomePage(){
        await this.page.goto(process.env.BASE_URL, {timeout:60000});
    }

    async goToBookStorePage(){
        await this.getBookStoreApplicationCard.scrollIntoViewIfNeeded();
        await this.getBookStoreApplicationCard.click();
    }
}
module.exports = {
    HomePage
}