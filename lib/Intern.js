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
                    <li>${this.id}</li>
                    <address>
                      <a href="${this.email}"> Email </a>
                    </address>
                    <li>${this.school}</li>
                </ul>
            </div>
            `;
  };
}
module.exports = Intern;
