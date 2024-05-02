const base = require('@playwright/test');
const { BrowserManagement } = require('../browser/browser-management');

export const test = base.test.extend({
    browserFixture: [async({browser, context, page}, use)=>{
        BrowserManagement.initializeBrowser(browser,context,page);
        await use();
    }]  
})
export const expect = base.expect;

