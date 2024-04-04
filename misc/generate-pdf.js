const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const indexPath = path.resolve(__dirname, './src/index.html');

    await page.goto(`file://${indexPath}`, {waitUntil: 'networkidle2'});

    await page.pdf({path: 'resume.pdf', format: 'A4'});

    await browser.close();
})();
