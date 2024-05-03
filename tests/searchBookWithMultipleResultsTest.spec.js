const { test, expect } = require('@playwright/test');
const {Homepage} = require('../src/POM/homepage');
const {BookStorePage} = require('../src/POM/bookstore_page');
const {lowerCaseText} = require('../src/utils/stringUtils')

const bookNames = ['Design','design'];
test.beforeEach(async ({page}) => {
    const homepage = new Homepage(page);
    await homepage.goToHomePage();
    await homepage.goToBookStorePage();
})

test.describe('Search book with multiple results', ()=>{
for (const bookName of bookNames){
    test(`Insert [${bookName}] into search field and verify book`, async ({page}) => {
        const bookStorePage  = new BookStorePage(page);
        await bookStorePage.inputIntoSearchField(bookName);
        let searchResult = await bookStorePage.getResultFromSearchResult();
        for (let index = 0; index < searchResult.length; index++) {
            const element = searchResult[index];
            expect(await lowerCaseText(element)).toContain(await lowerCaseText(bookName));
        }
    })
}})

