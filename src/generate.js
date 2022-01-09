
const generateHtml = function(incomingData) {

    return(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../src/style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header class="header">
            <h1>My Team</h1>
        </header>

        <section class="team">
            ${incomingData}
        </section>

    <footer class="footer">
        <h1><a href="https://github.com/JohnPac15" class="github">Made By John Pacini</a></h1>
    </footer>   
    </body>
    </html>`)
}

module.exports = generateHtml