const { BrowserManagement } = require("../browser/browser-management");

export class Element{
    constructor(locator){
        this.locator = locator;
    }

    static async click(){
        BrowserManagement.page.locator(this.locator).click();
    }
    
}