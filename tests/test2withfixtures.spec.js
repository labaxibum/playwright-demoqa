const { test , expect} = require("../src/fixtures/page-fixtures");


const bookName = ['Design','design'];
test.beforeEach(async ({ homePage }) => {
  await homePage.goToHomePage();
  await homePage.goToBookStorePage();
});

test.describe('test fixtures', ()=>{
    test("Insert into search field and verify book", async ({ bookstorePage }) => {
        let searchResult = [];
        for (let index = 0; index < bookName.length; index++) {
          const bookNameInputted = bookName[index];
          await bookstorePage.inputIntoSearchField(bookNameInputted);
          searchResult = await bookstorePage.getResultFromSearchResult();
          for (let index = 0; index < searchResult.length; index++) {
            const element = searchResult[index];
            console.log(element);
            expect(element.toLowerCase()).toContain(bookNameInputted.toLowerCase());
          }
          await bookstorePage.clearSearchField();
        }
})
});
