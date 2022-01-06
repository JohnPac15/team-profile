const Manager = require("../lib/Manager");
// const Employee = require("../lib/Employee");
// console.log(new Manager)

test("checking to see it the manager has all the right info", () => {
  const manager = new Manager("John", 1, "john@me.com");

  expect(typeof manager).toEqual("object");

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
});

describe("office", () => {
  test("testing for office number", () => {
    const manager = new Manager("John", 1, "john@me.com");

    expect(manager.findOffice(1)).toBeTruthy();
    expect(manager.findOffice(0)).toBeFalsy();
  });
});

test('testing for get role in Manager', () => {
    const manager = new Manager();
    // console.log(manager.getRole(), 'inside test for get role in manager')

    expect(manager.getRole()).toBe('Manager')
})
