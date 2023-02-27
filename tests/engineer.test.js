const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
  const testGithub = "Riley";
  const employeeInstance = new Engineer(
    "Riley",
    2,
    "rilrahe@gmail.com",
    testGithub
  );
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "Riley";
  const employeeInstance = new Engineer(
    "Riley",
    2,
    "rilrahe@gmail.com",
    testGithub
  );
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Riley",
    2,
    "rilrahe@gmail.com",
    "Riley"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
