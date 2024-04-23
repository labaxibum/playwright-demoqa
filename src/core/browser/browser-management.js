export class BrowserManagement{
    static browser;
    static browserContext;
    static page;


    static initializeBrowser(browser, browserContext, page){
        BrowserManagement.browser = browser;
        BrowserManagement.browserContext = browserContext;
        BrowserManagement.page = page;
    }

    static setCurrentContext(browserContext){
        BrowserManagement.browserContext = browserContext;
    }

    static setCurrentPage(page){
        BrowserManagement.page = page;
    }    
}