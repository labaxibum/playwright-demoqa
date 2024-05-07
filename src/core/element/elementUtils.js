const { BrowserManagement } = require("../browser/browser-management");

export class Element{
    constructor(locator){
        this.locator = locator;
    }

    //action 
    static async click(){
        await BrowserManagement.page.locator(this.locator).click();
    }

    static async inputIntoElement(inputText){
        await BrowserManagement.page.locator(this.locator).fill(inputText);
    }
    
    static async scrollToElement(){
        await BrowserManagement.page.locator(this.locator).scrollIntoViewIfNeeded();
    }

    static async getInnerTextOfElement(){
        await BrowserManagement.page.locator(this.locator).innerText();
    }

    static async selectOptionInDropDownList(option){
        await BrowserManagement.page.locator(this.locator).selectOption(option);
    }

    static async getTextContextOfElement(){
        await BrowserManagement.page.locator(this.locator).textContext();
    }

    static async checkIntoElement(){
        await BrowserManagement.page.locator(this.locator).check();
    }

    static async hoverOntoElement(){
        await BrowserManagement.page.locator(this.locator).hover();
    }
    //Assert element
    static async checkIfElementIsVisible(){
        await BrowserManagement.page.locator(this.locator).toBeVisible();
    }


    static async checkIfElementIsChecked(){
        await BrowserManagement.page.locator(this.locator).toBeChecked();
    }


}