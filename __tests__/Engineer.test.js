const Engineer = require('../lib/Engineer')

test('testing the engineer oject for basic info', () => {
    const engineer = new Engineer('john', 1, 'John@me.com')

    expect(typeof engineer).toEqual("object")

    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.any(String))
})

test('testing the get role for Engineer', () => {
    const engineer = new Engineer('john', 1, 'John@me.com')

    expect(engineer.getRole()).toBe('Engineer')
})

test('testing for github in Engineer', () => {
    const engineer = new Engineer('john', 1, 'John@me.com')
    
    const github = 'johnpac15@github.com'

    expect(engineer.getGithub(github)).toEqual(github)

})