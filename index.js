const {Builder, By} = require('selenium-webdriver');

const args = process.argv.slice(2);
const url = args[0];
if (!url) {
    console.log('USAGE: npm start [URL]');
    process.exit(-1);
}
console.log(url);

(async function example() {
    const selector = 'div[data-test-id="UnPostedJobWarningBanner"]'
    const driver = new Builder().forBrowser('chrome').build();
    try {        
        await driver.get(url);
        await driver.findElement(By.css(selector)).then(found => !!found.length);        
        console.log('EXISTS');
    } catch(ex) {
        console.log('DOES NOT EXIST')
    } finally {
        await driver.quit();
    }   
})();