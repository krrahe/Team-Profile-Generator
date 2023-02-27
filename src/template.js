const generateManager = (manager) => `
  <div class="col-4 mt-4">
    <div class="card bg-light">
      <div class="card-header bg-primary text-white">
        <h2>${manager.getName()}</h2>
        <h3>Manager</h3><i class="material-icons">content_paste</i>
      </div>
      <div class="card-body">
        <p class="id">ID: ${manager.getId()}</p>
        <p class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
        <p class="office">Office Number: ${manager.getOfficeNumber()}</p>
      </div>
    </div>
  </div>
`;

const generateIntern = (intern) => `
  <div class="col-4 mt-4">
    <div class="card bg-light">
      <div class="card-header bg-primary text-white">
        <h2>${intern.getName()}</h2>
        <h3>Intern</h3><i class="material-icons">assignment_ind</i>
      </div>
      <div class="card-body">
        <p class="id">ID: ${intern.getId()}</p>
        <p class="email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
        <p class="school">School: ${intern.getSchool()}</p>
      </div>
    </div>
  </div>
`;

const generateEngineer = (engineer) => `
  <div class="col-4 mt-4">
    <div class="card bg-light">
      <div class="card-header bg-primary text-white">
        <h2>${engineer.getName()}</h2>
        <h3>Engineer</h3><i class="material-icons">laptop_mac</i>
      </div>
      <div class="card-body">
        <p class="id">ID: ${engineer.getId()}</p>
        <p class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
        <p class="github">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
      </div>
    </div>
  </div>
`;

const template = (data) => {
  // array for cards
  const pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // call manager function
    if (role === "Manager") {
      const managerCard = generateManager(employee);
      pageArray.push(managerCard);
    }

    // call engineer function
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      pageArray.push(engineerCard);
    }

    // call intern function
    if (role === "Intern") {
      const internCard = generateIntern(employee);
      pageArray.push(internCard);
    }
  }

  // joining strings
  const employeeCards = pageArray.join("");

  // return generated page
  return generateTeamPage(employeeCards);
};


function generateTeamPage(employeeCards) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <header>
          <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 text-center" id="navbar-text">Team Profile</span>
          </nav>
        </header>
        <main>
          <div class="container">
            <div class="row justify-content-center" id="team-cards">
              <!--Team Cards-->
              ${employeeCards}
            </div>
          </div>
        </main>
      </body>
    </html>
  `;
}

module.exports = template;
