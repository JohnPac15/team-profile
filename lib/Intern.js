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
            <div class="intern">
            <h2>${this.name}</h2>
                <h3>${this.role}</h3>
                <ul>
                    <li>Employee ID: ${this.id}</li>
                    <li>
                      <address>
                        <a href="mailto: ${this.email}" class="email"> Email </a>
                      </address>
                    </li>
                    <li>School: ${this.school}</li>
                </ul>
            </div>
            `;
  };
}
module.exports = Intern;
