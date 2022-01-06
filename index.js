const inquirer = require("inquirer");
const Employee = require("./lib/Employee");

firstQuestion = [
  {
    type: "list",
    name: "employee",
    message: "Would you like to add an Employee? ",
    choices: ["Yes", "No"],
  },
];
SecondQuestion = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the employee",
  },
  {
    type: "input",
    name: "id",
    message: "Enter their employee id(Numbers Only Please)",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter thier email",
  },
];

function init() {
  inquirer.prompt(firstQuestion).then(
    (questionData = (questionData) => {
      if (questionData.employee === "Yes") {
        inquirer.prompt(SecondQuestion).then((data) => new Employee(data.name, data.questionData, data.email));

      } else {
        console.log("Thank You and have a nice day!");
      }
    })
  );

  function selectJobType(){
      inquirer.prompt([
        {
            type: 'list',
            name: 'job',
            message: 'Please select a Job title',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
      ])
      .then(jobData => {
          if(jobData.job === "Manager"){
              
          }
          if(jobData.job === 'Engineer'){
            return 'Engineer #2'
        }
    
        if(jobData.job === 'Intern'){
            return 'Intern #3'
        }
      })
  }
}
init();
// SecondQuestion = [
//     {
//         type: 'list',
//         name: 'job',
//         message: 'Please select a Job title',
//         choices: ['Manager', 'Engineer', 'Intern'],
//     },
// ]


// function runAgain() {
//     inquirer.prompt(SecondQuestion)
// }
