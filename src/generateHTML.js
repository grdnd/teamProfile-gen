//HTML Templates
// manager template
const managerCard = manager => {
  return `
  <div class="columns">
    <div class="column is-12">
      <div class="card manager-card">
        <section class="card-header is-flex is-justify-content-space-around">
          <p class="card-header-title" id="managerName"></i>${manager.getName()}</p>
          <p class="card-header-title roleM" id="managerRole">${manager.getRole()}</p>
        </section>
        <div class="iconage"><i class="fa-solid fa-people-roof" id="icon"></i></div>
        <section class="card-contents is-flex is-justify-content-space-between">
          <div class="left-container">
            <div class="managerId">
              <p class="eyeD">Identification Number</p>
              <p class="idNo">${manager.getId()}</p>
            </div>
            <div class="managerEmail">
              <p class="address">Email</p>
              <p class="email">${manager.getEmail()}</p>
            </div>
          </div>
          <div class="right-container">
            <p class="eyeD" id="managerOfficeNumber">Office Number</p>
            <p class="idNo">${manager.getOfficeNumber()}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
  `;
};

// engineer template
const engineerCard = engineer => {
  return `
    <div class="columns">
      <div class="column is-12">
        <div class="card engineer-card">
          <section class="card-header is-flex is-justify-content-space-around">
            <p class="card-header-title" id="engineerName"></i>${engineer.getName()}</p>
            <p class="card-header-title roleM" id="engineerRole">${engineer.getRole()}</p>
          </section>
          <div class="iconage"><i class="fa-solid fa-hammer"></i></div>
          <section class="card-contents is-flex is-justify-content-space-between">
            <div class="left-container">
              <div class="engineerId">
                <p class="eyeD">Identification Number</p>
                <p class="idNo">${engineer.getId()}</p>
              </div>
              <div class="engineerEmail">
                <p class="address">Email</p>
                <p class="email">${engineer.getEmail()}</p>
              </div>
            </div>
            <div class="right-container">
              <p class="eyeD" id="engineerGithub">Github</p>
              <p class="userN">${engineer.getGithub()}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
};

// intern template
const internCard = intern => {
  return `
    <div class="columns">
      <div class="column is-12">
        <div class="card intern-card">
          <section class="card-header is-flex is-justify-content-space-around">
            <p class="card-header-title" id="internName"></i>${intern.getName()}</p>
            <p class="card-header-title roleM" id="internRole">${intern.getRole()}</p>
          </section>
          <div class="iconage"><i class="fa-solid fa-graduation-cap"></i></div>
          <section class="card-contents is-flex is-justify-content-space-between">
            <div class="left-container">
              <div class="internId">
                <p class="eyeD">Identification Number</p>
                <p class="idNo">${intern.getId()}</p>
              </div>
              <div class="internEmail">
                <p class="address">Email</p>
                <p class="email">${intern.getEmail()}</p>
              </div>
            </div>
            <div class="right-container">
              <p class="eyeD" id="internSchool">School</p>
              <p class="idNo">${intern.getSchool()}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
};

// team html template
const teamHTML = data => {
  htmlArr = [];
  for(let i = 0; i < data.length; i++) {
    const team = data[i];
    const role = team.getRole();

    if(role === 'Manager') {
      const generateManager = managerCard(team);
      htmlArr.push(generateManager);
    }

    if(role === 'Engineer') {
      const generateEngineer = engineerCard(team);
      htmlArr.push(generateEngineer);
    }

    if(role === 'Intern') {
      const generateIntern = internCard(team);
      htmlArr.push(generateIntern);
    }
  }

  const teamCards = htmlArr.join('');

  const generateTeam = generateHTML(teamCards);
  return generateTeam;
}

const generateHTML = function(teamCards) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team Profile</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital@1&family=Voltaire&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>
    <!------------- Header ------------->
    <header class="header" id="header">
      <h1 class="header-text"><span class="my">My</span>TeamProfile</h1>
    </header>
    <!------- Team Card Section ------->
    <main>
      <section>
        <div class="container">
          ${teamCards}
          </div>
        </div>
      </section>
    </main>
  </body>
  </html>
  `;
};

module.exports = teamHTML; 