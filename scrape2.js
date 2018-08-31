const request = require('request');
const cheerio = require('cheerio');

request('https://ckorbel.github.io/', (err, res, html) => {
    if (!err && res.statusCode == 200) {
        const $ = cheerio.load(html);

        $('.vtimeline-content').each((e, el) => {
            const title = $(el).text();
            console.log(title);
        })

    }
});