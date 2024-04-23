const base = require('@playwright/test');
const { Homepage } = require('../POM/homepage');
const { BookStorePage } = require('../POM/bookstore_page');
const { LoginPage } = require('../POM/loginpage');
const { ProfilePage } = require('../POM/profilepage');

exports.test = base.test.extend({
    homepage: async ({page} , use)=>{
        await use(new Homepage(page));
    },

    bookstorePage: async ({page} , use)=>{
        await use(new BookStorePage(page));
    },

    loginPage: async ({page} , use)=>{
        await use(new LoginPage(page));
    },

    profilePage: async ({page} , use)=>{
        await use(new ProfilePage(page));
    },
})
exports.expect = base.expect;