import {test as base} from '@playwright/test';
import { Homepage } from '../POM/homepage';
import { BookStorePage } from '../POM/bookstore_page';

const test = base.extend<{homepage:Homepage, bookStorePage:BookStorePage}>({
    
})