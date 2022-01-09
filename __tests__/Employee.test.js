
const Employee = require('../lib/Employee')

test('testing the Employee', () => {
    const employee = new Employee('John', 1, 'john@me.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String))
})

test('testing the getId()', () => {
    const employee = new Employee('John', 1, 'john@me.com')
    const id = employee.id

    expect(employee.getId()).toEqual(id)
})

test('testing the getEmail()', () => {
    const employee = new Employee('John', 1, 'john@menubar.com')
    const email = employee.email

    expect(employee.getEmail()).toEqual(email)
})

test('testing the getRole()', () => {
    const employee = new Employee('John', 1, 'john@menubar.com')
    
    expect(employee.getRole()).toEqual('Employee')
})