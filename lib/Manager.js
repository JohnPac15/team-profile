const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.role = "Manager";
    this.office = office;
  }

  findOffice() {
    console.log(this.office)
    if (this.office === String) {
      return false;
    } else {
      return true;
    }
  }

  managerHTML() {
    return `
            <div class="manager">
            <h2>${this.name}</h2>
                <h3>${this.role}</h3>
      
                    <p> Employee ID : ${this.id}</p>
                    <p>
                      <address>
                        <a href="mailto: ${this.email}" class="email"> Email </a>
                      </address>
                    <p>
                    <p> Office Number: ${this.office} </p>
                
            </div>
            `;
  }
}
module.exports = Manager;
