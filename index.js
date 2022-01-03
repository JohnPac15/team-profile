const inquirer = require("inquirer");
const fs = require('fs');
const generateHtml = require("./src/temp");


firstQuestion = [
    {
        type: 'list',
        name: 'job',
        message: 'Please select a Job title',
        choices: ['Manager', 'Engineer', 'Employee', 'Intern'],
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of this team member?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter thier employee ID'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter thier email address'
    },
    {
        type: 'list',
        name: 'office',
        message: 'Please select an office number',
        choices: ['Office 1', 'Office 2', 'Office 3', 'Office 4']
    }

]

const writeFile = (fileContent) => {
    return new Promise((resolve, reject) => {
      fs.writeFile("./src/index.html", fileContent, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: "file created!",
        });
      });
    });
  };

function init() { 
    inquirer.prompt(firstQuestion)
    .then(jobData => generateHtml(jobData))
    .then(fileContent => writeFile(fileContent))
}

init()