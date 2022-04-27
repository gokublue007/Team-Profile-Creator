const Employee = require("../lib/Employee");

test(" Take a class definition and create an object ", () => {
  const emp = new Employee();
  expect(typeof emp).toBe("object");
});
// set the values for name id and email
test("Set the name", () => {
  const name = "DR";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test("Set the id", () => {
  const teamVal = 9999;
  const emp = new Employee("x", teamVal);
  expect(emp.id).toBe(teamVal);
});

test("Set the email", () => {
  const teamVal = "example@mail.com";
  const emp = new Employee("x", 1, teamVal);
  expect(emp.email).toBe(teamVal);
});

// get the values for name id and email
test("Get the name", () => {
  // get the name from getName function
  const teamVal = "DR";
  const emp = new Employee(teamVal);
  expect(emp.getName()).toBe(teamVal);
});

test("Get the id", () => {
  // use getid()
  const teamVal = 9999;
  const emp = new Employee("x", teamVal);
  expect(emp.getId()).toBe(teamVal);
});

test("Get the email", () => {
  // from getEmail()
  const teamVal = "example@mail.com";
  const emp = new Employee("x", 1, teamVal);
  expect(emp.getEmail()).toBe(teamVal);
});

test("the role, that returns the employee", () => {
  const teamVal = "Employee";
  const emp = new Employee("DR", 1, "example@mail.com");
  expect(emp.getRole()).toBe(teamVal);
});
