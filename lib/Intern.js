const inquirer = require("inquirer");
const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.role = "Intern";
    this.school = school
  }

  getSchool(data) {
    return data;
  }

  internHTML() {
    return `
            <div>
            <h2>${this.name}</h2>
                <h3>${this.role}</h3>
                <ul>
                    <li>${this.id}</li>
                    <a href=${this.email}>${this.email}</a>
                    <li>${this.school}</li>
                </ul>
            </div>
            `;
  };
}
module.exports = Intern;
