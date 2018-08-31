const request = require('request');
const cheerio = require('cheerio');

request('https://ckorbel.github.io/', (err, res, html) => {
    if (!err && res.statusCode == 200) {
        const $ = cheerio.load(html);

        const siteHeading = $('#lead-content')

        // console.log(siteHeading.html());
        // console.log(siteHeading.text());
        // const output = siteHeading.find('h1').text();
        const output = siteHeading.children('h1').next().text();


        console.log(output);
    }
});