// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./src/generateHTML');

// Subclasses of team profile
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Create an array to store team members
const teamProfile = [];

// Function initializes the app
function init() {
    managerPrompt();
}

// Prompt user for Manager's information on startup
function managerPrompt() {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: "Start by entering your team manager's name: ",
            // boolean checks for valid entry
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('*Manager name is required!*')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Please enter team manager's ID: ",
            // boolean checks if member ID is entered as a valid number
            validate: input => {
                if (isNaN(input)) {
                    console.error('*That is not a valid ID!*')
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter your manager's email: ",
            // using validate command and boolean to check if valid email is entered
            validate: managerEmail => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail)
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "Please enter your Manager's office number: ",
            // boolean checks if office number is a valid number
            validate: officeNumber => {
                if (isNaN(officeNumber)) {
                    console.log('*That is not a valid office number!*')
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    // stores manager information to team array and opens main menu
    .then(input => { 
        const manager = new Manager (input.managerName, input.managerId, input.managerEmail, input.managerOfficeNumber);
        teamProfile.push(manager);
        console.log('Manager successfully added to the team!');
        toMenu();
    })
};

// Main Menu
function toMenu() {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'menu',
            message: "What would you like to do next?",
            choices: ["Add another team member", "Finish"]
        }
    ]) .then (answers => {
        if (answers.menu === "Add another team member") {
            addTeamMember();
        } else if (answers.menu === "Finish") {
            console.log('Team Profile has been generated')
            return teamProfile;
        }
    })
};

// Function adds team members by role selection:
function addTeamMember() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Who would you like to add? ",
            choices: ['Engineer', 'Intern', 'Manager',]
        }
    ]) .then (input => {
        if (input.role === 'Manager') {
            managerPrompt();
        } else if (input.role === 'Engineer') {
            engineerPrompt();
        } else if (input.role === 'Intern') {
            internPrompt();
        }
    })
};

// Prompt user for Engineer information
function engineerPrompt() {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: "Please enter Engineer's name: ",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("*Team Member name required!*")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "Please enter Engineer's ID: ",
            validate: input => {
                if (isNaN(input)) {
                    console.log('*That is not a valid ID!*')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Please enter Engineer's email: ",
            validate: engineerEmail => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(engineerEmail)
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Please enter Engineer's GitHub username: ",
        }
    ]) // stores engineer information to team array
    .then (input => { 
        const engineer = new Engineer (input.engineerName, input.engineerId, input.engineerEmail, input.engineerGithub);
        teamProfile.push(engineer);
        console.log('Engineer successfully added to the team!' + engineer);
        toMenu();
    })
};

function internPrompt() {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: "Please enter Intern's name: ",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("*Team Member name required!*")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "Please enter Intern's ID: ",
            validate: input => {
                if (isNaN(input)) {
                    console.log('*That is not a valid ID!*')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Please enter Intern's email: ",
            validate: internEmail => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(internEmail)
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Please enter Intern's school: ",
        }
    ]) // stores intern information to team array
    .then (input => { 
        const intern = new Intern (input.internName, input.internId, input.internEmail, input.internSchool);
        teamProfile.push(intern);
        console.log(intern + 'Intern successfully added to the team!');
        toMenu();
    })
};


init();


// External Links:
// Email validation using Inquirer: https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
// Inquirer Checkbox: https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts