const jobTiltle = function(jobData) {
    if(jobData.job === 'Manager'){
        return 'Manager #1, Would you like to add another teammate????'
    }
    if(jobData.job === 'Engineer'){
        return 'Engineer #2'
    }
    if(jobData.job === 'Employee'){
        return 'Employee #3'
    }
    if(jobData.job === 'Intern'){
        return 'Intern #4'
    }
}

const generateHtml = function(jobData){
    console.log(jobData)
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
            <h2>${jobTiltle(jobData)}</h2>
            <li>
                <ul>${jobData.name}</ul>
            </li>
        </section>
        
    </body>
    </html>`
)
}
module.exports = generateHtml