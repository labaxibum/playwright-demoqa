
const { Homepage } = require("../src/POM/homepage");
const { BookStorePage } = require("../src/POM/bookstore_page");
const { LoginPage } = require("../src/POM/loginpage");
const { ProfilePage } = require("../src/POM/profilepage");


export const test = baseTest.extend({
    homepage: async ({}, use) => {
        await use(new Homepage());
    },

    bookstorePage: async ({}, use) => {
        await use(new BookStorePage());
    },

    loginPage: async ({}, use) => {
        await use(new LoginPage());
    },

    profilePage: async({}, use)=>{
        await use(new ProfilePage());
    }
})

export const expect = baseExpect;