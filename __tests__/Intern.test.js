const Intern = require('../lib/Intern')

test('testing the Intern object for correct info', () => {
    const intern = new Intern('john', 1, 'John@me.com')

    expect(typeof intern).toEqual('object')

    expect(intern.name).toEqual(expect.any(String))
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String))
})

test('testing for get role in Intern', () => {
    const intern = new Intern('john', 1, 'John@me.com')

    expect(intern.getRole()).toEqual('Intern')

})

test('testing for getSchool() in intern', () => {
    const intern = new Intern('john', 1, 'John@me.com')

    const school = "UTSA"

    expect(intern.getSchool(school)).toEqual(school)

})