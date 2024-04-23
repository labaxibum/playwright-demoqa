export class ProfilePage{
    constructor(page){
        this.page = page;
        this.getRemoveButtonOfTheBook = bookName => page.locator(`//a[.='${bookName}']/ancestor::div[@class='rt-tr-group']//span[@id='delete-record-undefined']`);
        this.getBookTitle = bookName => page.locator(`//a[.='${bookName}']`);
        this.getOKButtonInPopup = page.getByRole('button', { name: 'OK' });
        //title: //div[@class='rt-tbody']//div[@class='rt-td'][2]
    }

    async removeBook(bookName){
       await this.getRemoveButtonOfTheBook(bookName).click();
    }

    async clickOKInPopup(){
       await this.getOKButtonInPopup.click();
    }
}