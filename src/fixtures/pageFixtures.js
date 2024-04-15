const base = require('@playwright/test');
const { Homepage } = require('../POM/homepage');
const { BookStorePage } = require('../POM/bookstore_page');

exports.test = base.test.extend({
    homepage: async ({page} , use)=>{
        await use(new Homepage(page));
    },

    bookstorePage: async ({page} , use)=>{
        await use(new BookStorePage(page));
    }
})
exports.expect = base.expect;