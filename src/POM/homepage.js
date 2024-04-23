export class Homepage{
    constructor(page){
        this.page = page;
        this.getBookStoreApplicationCard = page.getByRole('heading', { name: 'Book Store Application' });
    }

    async goToHomePage(){
        await this.page.goto(process.env.BASE_URL);
    }

    async goToBookStorePage(){
        await this.getBookStoreApplicationCard.scrollIntoViewIfNeeded();
        await this.getBookStoreApplicationCard.click();
    }
}