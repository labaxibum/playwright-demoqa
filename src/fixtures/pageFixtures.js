import {test as base} from '@playwright/test';
import { Homepage } from '../POM/homepage';
import { BookStorePage } from '../POM/bookstore_page';

const test = base.test.extend({
    homepage: async ({page} , use)=>{
        await use(new Homepage(page));
    },

    bookstorepage: async ({page} , use)=>{
        await use(new BookStorePage(page));
    }
})