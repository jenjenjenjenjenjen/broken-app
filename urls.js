const fs = require('fs');
const request = require('request');

const path = process.argv[2]

fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    data.split(/\r?\n/).forEach(line => {
        request.get(line, (err, req, res) => {
            if (res === undefined) {
                console.log(`Couldn't download ${line}`)
            } else {
                fs.writeFile(`./${line.substring(8,18)}`, String(res), {flag: 'a'}, (err) => {
                    if(err) {
                        console.error(err);
                        process.exit(1);
                    }
                    console.log('Wrote to file!')
                })
            }
        })
    })
});