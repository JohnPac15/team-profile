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
                
                    <p>Employee ID: ${this.id}</p>
                    <p>
                      <address>
                        <a href="mailto: ${this.email}" class="email"> Email </a>
                      </address>
                    </p>
                    <p>School: ${this.school}</p>
                
            </div>
            `;
  };
}
module.exports = Intern;
