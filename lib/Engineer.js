const inquirer = require("inquirer");
const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.role = "Engineer";
    this.github = github
  }

  getGithub(data) {
    return data;
  }

  engineerHTML() {
    return `
            <div class="engineer">
            <h2>${this.name}</h2>
                <h3>${this.role}</h3>
                <ul>
                    <li>${this.id}</li>
                    <address>
                      <a href="${this.email}"> Email </a>
                    </address>
                    <li><a href="https://github.com/${this.github}"> Github </a></li>
                </ul>
            </div>
            `;
  };
  
}
module.exports = Engineer;
