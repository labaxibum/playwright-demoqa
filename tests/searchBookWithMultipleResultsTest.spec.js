const { test, expect } = require('@playwright/test');
const {Homepage} = require('../src/POM/homepage');
const {BookStorePage} = require('../src/POM/bookstore_page');

const bookName = ['Design','design'];
test.beforeEach(async ({page}) => {
    const homepage = new Homepage(page);
    await homepage.goToHomePage();
    await homepage.goToBookStorePage();
})

test.describe('Search book with multiple results', ()=>{
    test('Insert into search field and verify book', async ({page}) => {
        const bookStorePage  = new BookStorePage(page);
        let searchResult = [];
        for (let index = 0; index < bookName.length; index++) {
            const bookNameInputted = bookName[index];
            await bookStorePage.inputIntoSearchField(bookNameInputted);
            searchResult = await bookStorePage.getResultFromSearchResult();
            for (let index = 0; index < searchResult.length; index++) {
                const element = searchResult[index];
                expect(element.toLowerCase()).toContain(bookNameInputted.toLowerCase());
            }
            await bookStorePage.clearSearchField();
        }
    })
})

