const Intern = require("../lib/Intern");

test("Select the school", () => {
    const teamVal = "ABCD";
    const emp = new Intern("x", 1, "example@mail.com", teamVal);
expect(emp.school).toBe(teamVal);
});

test("Return the role of an intern", () => {
    const teamVal = "Intern";
    const emp = new Intern("x", 1, "example@mail.com", "ABCD");
    expect(emp.getRole()).toBe(teamVal);
});

test("Get the school name", () => {//Use getSchool() 
    const teamVal = "ABCD";
    const emp = new Intern("x", 1, "example@mail.com", teamVal);
    expect(emp.getSchool()).toBe(teamVal);
});