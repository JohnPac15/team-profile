const inquirer = require("inquirer")

class Employee{
    constructor(name, id, email){
        this.role = "Employee"

        this.name = name
        this.id = id
        this.email = email
        this.team = []
    }

    getId() {
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return this.role
    }

    
}
module.exports = Employee