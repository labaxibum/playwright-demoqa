class Element{
    constructor(locator){
        this.locator = locator;
    }

    //action 
    static async click(){
        await page.locator(this.locator).click();
    }

    static async inputIntoElement(inputText){
        await page.locator(this.locator).fill(inputText);
    }
    
    static async scrollToElement(){
        await page.locator(this.locator).scrollIntoViewIfNeeded();
    }

    static async getInnerTextOfElement(){
        await page.locator(this.locator).innerText();
    }

    static async selectOptionInDropDownList(option){
        await page.locator(this.locator).selectOption(option);
    }

    static async getTextContextOfElement(){
        await page.locator(this.locator).textContext();
    }

    static async checkIntoElement(){
        await page.locator(this.locator).check();
    }

    static async hoverOntoElement(){
        await page.locator(this.locator).hover();
    }
    //Assert element
    static async checkIfElementIsVisible(){
        await page.locator(this.locator).toBeVisible();
    }


    static async checkIfElementIsChecked(){
        await page.locator(this.locator).toBeChecked();
    }
}

module.exports = {
    Element
}