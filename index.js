const inquirer = require("inquirer");
const fs = require("fs");
const writeHTML = require("./dist/index.html");
const writeCSS = require("./dist/style.css");
const { default: InputPrompt } = require("inquirer/lib/prompts/input");
//const for required plug ins and files

const staffInfo = [];

console.log("Hello World");
inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your employee id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your company email?",
  },
  {
    type: "list",
    name: "job",
    message: "What is your job title?",
    choices: ["Engineer", "Intern", "Manager"],
  },
]);

if (answers.job === "Engineer") {
  inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
  ]);
  const engineer = new Engineer(
    answers.name,
    answers.id,
    answers.email,
    answers.github
  );
  staffInfo.push(engineer);
} else if (answers.job === "Intern") {
  inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "Which school do you attend?",
    },
  ]);
  const intern = new Intern(
    answers.name,
    answers.id,
    answers.email,
    answers.school
  );
  staffInfo.push(intern);
} else if (answers.job === "manager") {
  inquirer.prompt([
    {
      type: Input,
      name: "office",
      message: "What is your office number?",
    },
  ]);
  const manager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.office
  );
    staffInfo.push(manager);
}
