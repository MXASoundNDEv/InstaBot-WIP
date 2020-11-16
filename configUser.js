const puppeteer = require('puppeteer');
var browser;
var startUrl = "https://www.instagram.com/accounts/edit/";
var pageOptions = {waitUntil:'domcontentloaded', timeout :45000};

var pageOptions = {waitUntil:'domcontentloaded', timeout :45000};
if (process.argv.length <= 2) {
	console.log("Usage: " + __filename + " SOME_PARAM");
	process.exit(-1);
}

var bio = process.argv[2];

(async () => {
	browser = await puppeteer.launch({timeout :90000, ignoreHTTPSErrors: true, headless: false, args: ['--no-sandbox']});
	var page = await browser.newPage();
	await page.setViewport({width: 1200, height: 800});
	await page.goto(startUrl, pageOptions);
	await page.waitForNavigation({timeout:0});
	await page.click("#react-root > section > main > div > article > div > div.XX1Wc > button");
	await page.waitFor(500);
	await page.click("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.bIiDR");
	await page.waitFor(500);
	await page.type("#pepBio",bio)
})();