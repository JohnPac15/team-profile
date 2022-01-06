const inquirer = require("inquirer");
const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.role = "Intern";
  }

  startIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "school",
          message: "What school are you from?",
        },
      ])
      .then((data = getSchool(data.school)));
  }
  getSchool(data) {
    return data;
  }
}
module.exports = Intern;
