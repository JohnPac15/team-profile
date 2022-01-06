const Manager = require('../lib/Manager')
const writeFile = require('../src/write')


const generateHtml = function(incomingData) {
    console.log(incomingData, 'inside generateHtml()')
    return(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <section>
            ${incomingData}
        </section>
        
    </body>
    </html>`)
}

module.exports = generateHtml