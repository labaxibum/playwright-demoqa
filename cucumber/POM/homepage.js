import { BasePage } from "./basepage";

export class Homepage extends BasePage{
    constructor(page){
        super(page);
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