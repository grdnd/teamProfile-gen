// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./src/generateHTML');

// Subclasses of team profile
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Create an array to store team members
const team = [];

// Function initializes the app
function init() {
    managerQuery();
}

// Prompt user for Manager's information on startup
function managerQuery() {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
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
            name: 'id',
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
            name: 'email',
            message: "Please enter your manager's email: ",
            // using validate command and boolean to check if valid email is entered
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (email) {
                    return true;
                } else {
                    console.log('*Please enter a valid email address!*');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
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
        const manager = new Manager (input.name, input.id, input.email, input.officeNumber);
        team.push(manager);
        console.log('Manager successfully added to the team!' + manager);
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
        } else if (answers.menu === "Create team profile") {
            console.log('Team Profile has been generated')
            generateHTML();
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
            managerQuery();
        } else if (input.role === 'Engineer') {
            engineerQuery();
        } else if (input.role === 'Intern') {
            internQuery();
        }
    })
};

// Prompt user for Engineer information
function engineerQuery() {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
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
            name: 'id',
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
            name: 'email',
            message: "Please enter Engineer's email: ",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (email) {
                    return true;
                } else {
                    console.log('*Please enter a valid email address!*');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter Engineer's GitHub username: ",
        }
    ]) // stores engineer information to team array
    .then (input => { 
        const engineer = new Engineer (input.name, input.id, input.email, input.github);
        team.push(engineer);
        console.log('Engineer successfully added to the team!' + engineer);
        toMenu();
    })
};

function internQuery() {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
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
            name: 'id',
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
            name: 'email',
            message: "Please enter Intern's email: ",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (email) {
                    return true;
                } else {
                    console.log('*Please enter a valid email address!*');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter Intern's school: ",
        }
    ]) // stores intern information to team array
    .then (input => { 
        const intern = new Intern (input.name, input.id, input.email, input.school);
        team.push(intern);
        console.log(intern + 'Intern successfully added to the team!');
        toMenu();
    })
};


init();

// External Links:
// Email validation using Inquirer: https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8
// Inquirer Checkbox: https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts