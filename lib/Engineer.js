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
            <div>
            <h2>${this.name}</h2>
                <h3>${this.role}</h3>
                <ul>
                    <li>${this.id}</li>
                    <a href=${this.email}>${this.email}</a>
                    <li>${this.github}</li>
                </ul>
            </div>
            `;
  };
  
}
module.exports = Engineer;
