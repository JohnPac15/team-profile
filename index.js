const inquirer = require("inquirer");
const fs = require('fs');
const jobTiltle = require("./src/temp");


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
    .then(jobData => jobTiltle(jobData))
    .then(jobs => console.log(jobs))
}

init()