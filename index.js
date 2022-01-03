const inquirer = require("inquirer");
const fs = require('fs');


firstQuestion = [
    {
        type: 'list',
        name: 'job',
        message: 'Please select a Job title',
        choices: ['Manager', 'Engineer', 'Employee', 'Intern']
    }

]

function init() { 
    inquirer.prompt(firstQuestion)
    .then(jobData => console.log(jobData))
}

init()