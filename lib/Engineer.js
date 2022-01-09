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
            
                    <p>Employee ID: ${this.id}</p>
                    <p>
                      <address>
                        <a href="mailto: ${this.email}" class="email"> Email </a>
                      </address>
                    </p>
                    <p>
                      <a href="https://github.com/${this.github}" class="github" target="_blank"> Github </a>
                    </p>
                
            </div>
            `;
  };
  
}
module.exports = Engineer;
