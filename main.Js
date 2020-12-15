const puppeteer = require('puppeteer');
var browser;

const startUrl = {
		"inscription"	: "https://www.instagram.com/accounts/emailsignup/",
		"connection"	: "https://www.instagram.com/accounts/login/",
		"like"			: "https://www.instagram.com/p/",
		"comment"		: "https://www.instagram.com/p/",
		"subscribe"		: "https://www.instagram.com/",
		"configAccount"	: "https://www.instagram.com/accounts/edit/",
}


function main(debug = false) {
	(async () => {
		browser = await puppeteer.launch({timeout :90000, ignoreHTTPSErrors: true, headless: debug, args: ['--no-sandbox']});
		var page = await browser.newPage();
		await page.setViewport({width: 1200, height: 800});

	})();
}

function inscription(debug = false, email, name, user, passwd) {
	await page.goto(startUrl.inscription, pageOptions);
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
}

function connection(debug = false, mail, passwd) {
	await page.goto(startUrl.connection, pageOptions);
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
}

function like(debug = false, id) {
	connection(mail, passwd)
	await page.goto(startUrl.like + id, pageOptions);
	await page.waitForNavigation({timeout:0})
	await page.click("#react-root > section > main > div > div.ltEKP > article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > butto")
}

function comment(debug = false, id, com) {
	connection(mail, passwd)
	await page.goto(startUrl.comment + id, pageOptions);
	await page.waitForNavigation({timeout:0});
	await page.click("#react-root > section > main > div > div.ltEKP > article > div.eo2As > section.sH9wk._JgwE > div > form > textarea");
		await page.keyboard.type(com,{delay:10});
}

function subscribe(debug = false, id) {
	connection(mail, passwd)
	await page.goto(startUrl.subscribe + id , pageOptions);
	await page.waitForNavigation({timeout:0})
	await page.click("#react-root > section > main > div > header > section > div.Y2E37 > div > div > div > button")
}

function configAccount(debug = false, bio) {
	connection(mail, passwd)
	await page.goto(startUrl.configAccount, pageOptions);
	await page.waitForNavigation({timeout:0});
	await page.click("#react-root > section > main > div > article > div > div.XX1Wc > button");
	await page.waitFor(500);
	await page.click("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.bIiDR");
	await page.waitFor(500);
	await page.type("#pepBio",bio)
}