export class BasePage{
    constructor(page){
        this.page = page;
        this.getBookStoreApplicationDropDownList = page.locator('span').filter({ hasText: 'Book Store Application'});
        this.getProfilePage =  page.locator('li').filter({ hasText: "Profile" });
    }

    async clickIntoBookStoreDropDownList(){
        await this.getBookStoreApplicationDropDownList.click();
    }

    async clickIntoChildrenBookStoreDropDownList(){
        await this.getProfilePage.click();
    }
}