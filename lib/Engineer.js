const inquirer = require('inquirer')
const Employee = require('../lib/Employee')


class Engineer extends Employee{
    constructor(name, id, email){
        super(name, id, email)
        this.role = "Engineer"
    }

    startEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is your Github username?'
            }
        ])
        .then(data = getGithub(data))
    }

    getGithub(data){
        return data
    }
    
}
module.exports = Engineer
