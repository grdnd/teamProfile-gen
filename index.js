// Node Modules
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

// Import Subclasses
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Create Team Array
const teamProfile = [];

// HTML generator
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "teamProfile.html")
const renderHTML = require('./src/generateHTML');

// Init function
function init() {
  addManager();
}

// Inquirer Prompt for Manager Data
function addManager() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the name of your team Manager?",
      name: "managerName",
      validate: managerName => {
        if (managerName === '') {
          console.log('*Manager Name Required!')
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: "input",
      message: "What is your Manager's ID number?",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is your Manager's email address?",
      name: "managerEmail",
      validate: managerEmail => {
        if (managerEmail) {
          return true;
        } else {
          console.log('Please enter a valid email address');
        }
      }
    },
    {
      type: "input",
      message: "What is your Manager's office number?: ",
      name: "managerOfficeNumber",
      validate: managerOfficeNumber => {
        if (isNaN(managerOfficeNumber)) {
          console.log('*Please enter a valid number*')
          return false;
        } else {
          return true;
        }
      }
    },
  ])
  // Push New Manager data, display answers, show team array
  .then(answers => {
    console.log("Your Manager has been added!", answers)
    let newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
    teamProfile.push(newManager)
    console.log(teamProfile)
    menu();
  })
}

// Inquirer Prompt for Engineer Data
function addEngineer() {
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter Engineer's name: ",
      name: "engineerName",
      validate: engineerName => {
        if (engineerName === "") {
          console.log("*Please Enter Your Engineer's Name*")
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: "input",
      message:"What is your Engineer's Id number?: ",
      name: "engineerId",
    },
    {
      type: "input",
      message: "Please enter Engineer's email address: ",
      name: "engineerEmail",
      validate: engineerEmail => {
        if (engineerEmail) {
          return true;
        } else {
          console.log('Please enter a valid email address');
        }
      }
    },
    {
      type: "input",
      message: "Please enter your Engineer's github username: ",
      name: "engineerGithub",
    },
  ])
  // Push New Engineer data, display answers, show team array
  .then(answers => {
    console.log("Your Engineer has been added!", answers)
    let newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
    teamProfile.push(newEngineer)
    console.log(teamProfile)
    menu();
  })
}

// Inquirer Prompt for Intern Data
function addIntern() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your Intern's name?: ",
      name: "internName",
    },
    {
      type: "input",
      message: "What is your Intern's Id number?: ",
      name: "internId",
    },
    {
      type: "input",
      message: "What is your Intern's email address?: ",
      name: "internEmail",
      validate: internEmail => {
        if (internEmail) {
          return true;
        } else {
          console.log('Please enter a valid email address');
        }
      }
    },
    {
      type: "input",
      message: "Where does your Intern go to school?: ",
      name: "internSchool",
    },
  ])
  // Push New Intern data, display answers, show team array
  .then(answers => {
    console.log("Your Intern has been added!", answers)
    let newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
    teamProfile.push(newIntern)
    console.log(teamProfile)
    menu();
  })
}

// Inquirer Prompt for Main Menu
function menu() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: "Who would you like to add?: ",
      // add menu options
      choices: [
        "Add an Engineer", 
        "Add an Intern", 
        "Finish",
      ],
    },
  ])
  .then(choices => { // redirect
    if (choices.menu === "Add an Engineer") {
      addEngineer();
    } else if (choices.menu === "Add an Intern") {
      addIntern();
    } else if (choices.menu === "Finish") {
      console.log("Your team profile has been created!", teamProfile);
      finish();
    }
  })
}

const finish = () => {
  let teamRender = renderHTML(teamProfile)
  fse.outputFile('dist/team-profile.html', teamRender)
  .then(() => {
    console.log('Your team profile has been successfully rendered');
  })
  .catch(err => {
    console.log(err)
  });
}



// Call Init
init();