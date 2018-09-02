const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

//Headers 
writeStream.write(`Title, Link`);

request('http://www.espn.com/college-football/rankings', (err, res, html) => {
    if (!err && res.statusCode == 200) {
        const $ = cheerio.load(html);

        $('tr').each((e, el) => {
            const title = $(el).text();

            const link = $(el).find('a').attr('href');


            writeStream.write(`${title}, ${link} \n`);
        });

        console.log('scrapping done...');

    }
});