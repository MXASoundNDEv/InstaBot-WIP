const puppeteer = require('puppeteer');
var browser;
var startUrl = "https://www.instagram.com/accounts/login/";
var pageOptions = {waitUntil:'domcontentloaded', timeout :45000};

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " SOME_PARAM");
    process.exit(-1);
}
 
var mail = process.argv[2];
var passwd = process.argv[3];

(async () => {
	browser = await puppeteer.launch({timeout :90000, ignoreHTTPSErrors: true, headless: false, args: ['--no-sandbox']});
	var page = await browser.newPage();
	await page.setViewport({width: 1200, height: 800});
	await page.goto(startUrl, pageOptions);
	await page.waitForNavigation({timeout:0})
	await page.click("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.bIiDR")
	await page.waitFor(1000);
	//mail
	await page.click("#loginForm > div > div:nth-child(1) > div > label > input");    
		await page.keyboard.type(mail, {delay: 10});
	//passwd
	await page.click("#loginForm > div > div:nth-child(2) > div > label > input");    
		await page.keyboard.type(passwd, {delay: 10});
	//Connection
	await page.click("#loginForm > div > div:nth-child(3) > button")
})();