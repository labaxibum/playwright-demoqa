const { BrowserManagement } = require("../browser/browser-management");

export class Element{
    constructor(locator){
        this.locator = locator;
    }

    static async click(){
        await BrowserManagement.page.locator(this.locator).click();
    }

    static async inputIntoElement(inputText){
        await BrowserManagement.page.locator(this.locator).fill(inputText);
    }
    
}