const inquirer = require("inquirer");
// const fs = require('fs');

// const jobTitle = require('./src/jobtitle')
// const generateHtml = require("./src/generate");
const Manager = require('./lib/Manager')

firstQuestion = [
    {
        type: 'list',
        name: 'employee',
        message: 'Would you like to add an Employee? ',
        choices: ['Yes', 'No']
    },
]
SecondQuestion = [
    {
        type: 'list',
        name: 'job',
        message: 'Please select a Job title',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
]

    




function init() { 
    inquirer.prompt(firstQuestion)
    .then(questionData = (questionData) =>{
        if(questionData.employee === 'Yes'){
            
        }else{
            console.log("Thank You and have a nice day!")
        }

    })
    // .then(jobData => jobTitle(jobData))
    // .then(fileContent => writeFile(fileContent))
}
// function runAgain() {
//     inquirer.prompt(SecondQuestion)
// }

// init()
