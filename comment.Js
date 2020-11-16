const puppeteer = require('puppeteer');
var browser;

var pageOptions = {waitUntil:'domcontentloaded', timeout :45000};
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " SOME_PARAM");
    process.exit(-1);
}
 
var id = process.argv[2];
var com = process.argv[3];
var startUrl = "https://www.instagram.com/p/"+id;

(async () => {
	browser = await puppeteer.launch({timeout :90000, ignoreHTTPSErrors: true, headless: false, args: ['--no-sandbox']});
	var page = await browser.newPage();
	await page.setViewport({width: 1200, height: 800});
	await page.goto(startUrl, pageOptions);
	await page.waitForNavigation({timeout:0});
	await page.click("#react-root > section > main > div > div.ltEKP > article > div.eo2As > section.sH9wk._JgwE > div > form > textarea");
		await page.keyboard.type(com,{delay:10});
})();