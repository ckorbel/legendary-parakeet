const request = require('request');
const cheerio = require('cheerio');

request('http://www.espn.com/college-football/rankings', (err, res, html) => {
    if (!err && res.statusCode == 200) {
        const $ = cheerio.load(html);

        $('tr').each((e, el) => {
            const title = $(el).text();

            const link = $(el).find('a').attr('href');


            console.log(title, date);
        })

    }
});