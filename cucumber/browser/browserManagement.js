 const { firefox, chromium, webkit } = require('playwright');

 const options = {
    headless: !true
 };

 exports.initBrowser = () => {
    console.log(process.env.BROWSER);
    const browserType = process.env.BROWSER || "chrome";
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        default:
            throw new Error("Please set the proper browser!");
    }
 };