const Engineer = require("../lib/Engineer");

test("Create the Github account", () => {
  const teamVal = "newUser";
  const emp = new Engineer("x", 1, "example@mail.com", teamVal);
  expect(emp.github).toBe(teamVal);
});

test("Role should return the values for Engineer", () => {
  const teamVal = "Engineer";
  const emp = new Engineer("x", 1, "example@mail.com", "newUser");
  expect(emp.getRole()).toBe(teamVal);
});

test("Get the github username", () => {
  const teamVal = "newUser";
  const emp = new Engineer("x", 1, "example@mail.com", teamVal);
  expect(emp.getGithub()).toBe(teamVal);
});
