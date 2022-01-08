const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require('./lib/Intern')

const generateHtml = require('./src/generate')

var myTeamMembers = [];

const endAppMessage = function () {
  console.log(myTeamMembers)
  generateHtml(myTeamMembers)
};

const init = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Manager",
      },
      {
        type: "input",
        name: "id",
        message: "Enter their employee id ",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter thier email",
      },
      {
        type: "input",
        name: "office",
        message: "Select which office this manager belongs too",
      },
      {
        type: "confirm",
        name: "addTeamMate",
        message: "Would you like to add an Team member? ",
        default: false,
      },
    ])
    .then((data) => {
      myTeamMembers.push(new Manager(data.name, data.id, data.email, data.office).managerHTML());

      if (data.addTeamMate) {
        console.log("-------------------------");
        console.log("Adding another teammate");
        console.log("-------------------------");
        jobSelect();
      } else {
        console.log("-------------------------");
        console.log("Done, No teammates to add");
        console.log("-------------------------");
        endAppMessage();
      }
    });
};

const jobSelect = (data) => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "job",
        message: "Please select a Job title",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((jobType) => {
      if (jobType.job === "Engineer") {
        return inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "What is the name of the Engineer",
          },
          {
            type: "input",
            name: "id",
            message: "Enter their employee id ",
          },
          {
            type: "input",
            name: "email",
            message: "Please enter thier email",
          },
          {
            type: "input",
            name: "github",
            message: "What is your Github username?",
          },
          {
            type: "confirm",
            name: "addTeamMate",
            message: "Would you like to add an Team member? ",
            default: false,
          },
        ]).then(data => {
          myTeamMembers.push(new Engineer(data.name, data.id, data.email, data.github).engineerHTML())
          if (data.addTeamMate) {
            console.log("-------------------------");
            console.log("Adding another teammate");
            console.log("-------------------------");
            jobSelect();
          } else {
            console.log("-------------------------");
            console.log("Done, No teammates to add");
            console.log("-------------------------");
            endAppMessage();
          }
        });
      } else {
          return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the name of the Intern",
            },
            {
              type: "input",
              name: "id",
              message: "Enter their employee id ",
            },
            {
              type: "input",
              name: "email",
              message: "Please enter thier email",
            },
            {
              type: "input",
              name: "school",
              message: "What School is the Intern from?",
            },
            {
              type: "confirm",
              name: "addTeamMate",
              message: "Would you like to add an Team member? ",
              default: false,
            },
          ]).then(data => {
            myTeamMembers.push(new Intern(data.name, data.id, data.email, data.school).internHTML())
            if (data.addTeamMate) {
              console.log("-------------------------");
              console.log("Adding another teammate");
              console.log("-------------------------");
              jobSelect();
            } else {
              console.log("-------------------------");
              console.log("Done, No teammates to add");
              console.log("-------------------------");
              endAppMessage();
            }
          });
      }
  })
}

init()
