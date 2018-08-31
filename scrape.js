const request = require('request');
const cheerio = require('cheerio');

request('https://ckorbel.github.io/', (err, res, html) => {
    if (!err && res.statusCode == 200) {
        const $ = cheerio.load(html);

        const siteHeading = $('#lead-content')

        // console.log(siteHeading.html());
        // console.log(siteHeading.text());
        // const output = siteHeading.find('h1').text();
        // const output = siteHeading.children('h1').next().text();
        //const output = siteHeading.parent('h1').next().text();

        $('li a').each((i, el) => {
            const item = $(el).text();
            const link = $(el).attr('href');

            console.log(item, link);
        });

        //console.log(output);
    }
});