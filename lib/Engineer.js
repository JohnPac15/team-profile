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
                    <li>Employee ID: ${this.id}</li>
                    <li>
                      <address>
                        <a href="mailto: ${this.email}" class="email"> Email </a>
                      </address>
                    </li>
                    <li>
                      <a href="https://github.com/${this.github}" class="github" target="_blank"> Github </a>
                    </li>
                </ul>
            </div>
            `;
  };
  
}
module.exports = Engineer;
