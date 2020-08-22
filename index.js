require("./modules/server.js")
const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await (await browser.pages())[0].close();
  await page.setViewport({width: 1125, height: 2436, isMobile: true, hasTouch: true});
  await page.setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148")
  await page.goto('https://www.supremenewyork.com');

  await page.addScriptTag({url: "http://localhost:3000/ticket.js"});

})();