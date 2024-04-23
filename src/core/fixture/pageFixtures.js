const base = require('@playwright/test');
const { BrowserManagement } = requir('../browser/browser-management');

export const test = base.test.extend({
    browserFixture: [async({browser, context, page}, use)=>{
        BrowserManagement.initializeBrowser(browser,context,page);
        await use();
    }]
   
  
})
export const expect = base.expect;
//   homepage: async ({page} , use)=>{
//     await use(new Homepage(page));
// },

// bookstorePage: async ({page} , use)=>{
//     await use(new BookStorePage(page));
// }
