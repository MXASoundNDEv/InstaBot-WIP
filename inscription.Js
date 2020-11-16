const puppeteer = require('puppeteer');
var browser;
var startUrl = "https://www.instagram.com/accounts/emailsignup/?hl=fr";
var pageOptions = {waitUntil:'domcontentloaded', timeout :45000};

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " SOME_PARAM");
    process.exit(-1);
}
 
var mail = process.argv[2];
var name = process.argv[3];
var user = process.argv[4];
var passwd = process.argv[5];

(async () => {
	browser = await puppeteer.launch({timeout :90000, ignoreHTTPSErrors: true, headless: false, args: ['--no-sandbox']});
	var page = await browser.newPage();
	await page.setViewport({width: 1200, height: 800});
	await page.goto(startUrl, pageOptions);
	await page.waitForNavigation({timeout:0})
	await page.click("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.bIiDR")
	await page.waitFor(1000);
	//mail
	await page.click("#react-root > section > main > div > div > div:nth-child(1) > div > form > div:nth-child(4) > div > label > input");    
		await page.keyboard.type(mail, {delay: 10});
	//name
	await page.click("#react-root > section > main > div > div > div:nth-child(1) > div > form > div:nth-child(5) > div > label > input");
		await page.keyboard.type(name, {delay: 10});
	//user name
	await page.click("#react-root > section > main > div > div > div:nth-child(1) > div > form > div:nth-child(6) > div > label > input");
		await page.keyboard.type(user, {delay: 10});
	//passwd
	await page.click("#react-root > section > main > div > div > div:nth-child(1) > div > form > div:nth-child(7) > div > label > input");    
		await page.keyboard.type(passwd, {delay: 10});
	//validate
	await page.click("#react-root > section > main > div > div > div:nth-child(1) > div > form > div:nth-child(8) > div > button")
})();

