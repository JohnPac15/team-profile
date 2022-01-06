const inquirer = require('inquirer')

newArry = []

const runAgain = require('../index')
console.log(runAgain)
const Manager = require('../lib/Manager')
const generateHtml = require('../src/generate')
const writeFile = require('./write')

SecondQuestion = [
    {
        type: 'list',
        name: 'job',
        message: 'Please select a Job title',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
]


const jobTitle = function(jobData) {
    console.log(jobData, 'inside jobtitle()')
    this.Manager;

    if(jobData.job === 'Manager'){
        inquirer.prompt([
            {
              type: "input",
              name: "name",
              message: "What is the name of this team member?",
            },
            {
              type: "input",
              name: "id",
              message: "Please enter thier employee ID (Numbers Only Please",
            },
            {
              type: "input",
              name: "email",
              message: "Please enter thier email address",
            },
            {
              type: "list",
              name: "office",
              message: "Please select an office number",
              choices: ["Office 1", "Office 2", "Office 3", "Office 4"],
            },
          ])
          .then(data => {
            manager = new Manager(data.name, data.id, data.email, data.office).managerHTML();
            console.log(manager);
            newArry.push(manager);
            console.log(newArry)
            // writeFile(this.manager)
            // newCard= generateHtml(this.manager);
        })
    }

    if(jobData.job === 'Engineer'){
        return 'Engineer #2'
    }

    if(jobData.job === 'Intern'){
        return 'Intern #3'
    }
}
module.exports = jobTitle