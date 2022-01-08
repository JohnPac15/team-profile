const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.role = 'Manager';
    this.office = office
  }

  startManager() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "office",
          message: "Please select an office number",
          choices: [1, 2, 3, 4],
        },
        
      ])
      .then((data) => {
        findOffice(data.office);
      });
  }

  findOffice(officeData) {
    if(officeData <= 4 && officeData >= 1){
      return true
    }else{
      return false
    }
  }

    managerHTML() {
    return `
            <div>
            <h2>${this.name}</h2>
                <h3>${this.role}</h3>
                <ul>
                    <li>${this.id}</li>
                    <a href=${this.email}>${this.email}</a>
                    <li>${this.office}</li>
                </ul>
            </div>
            `;
  };
  
}
module.exports = Manager;

// function Manager(name, id, email, office) {
//   this.name = name;
//   this.id = id;
//   this.email = email;
//   this.office = office;

//   Manager.prototype.managerHTML = function () {
//     return `
//             <div>
//                 <h2>Manager</h2>
//                 <h3>${this.name}</h3>
//                 <ul>
//                     <li>${this.id}</li>
//                     <a href=${this.email}>${this.email}</a>
//                     <li>${this.office}</li>
//                 </ul>
//             </div>
//             `;
//   };

// console.log(this.newManager())
// }
// console.log(newManager(name, id, email, office),'i dont know what im doing')

// console.log(this, "this", name, id, email, office, 'inside Manager')

// const newManager = (name, id, email, office) => {
//     return `
//     <div>
//         <h2>Manager</h2>
//         <h3>${name}</h3>
//         <li>
//             <ul>${id}</ul>
//             <ul>${email}</ul>
//             <ul>${office}</ul>
//         </li>
//     </div>
//     `
// }

// generateHtml(newManager(name, id, email, office));
// writeFile(generateHtml(name, id, email, office))
