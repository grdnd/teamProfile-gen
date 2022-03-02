// Modules
const Employee = require('./Employee')

// Creates Engineer as a subclass of Employee
class Engineer extends Employee {
    constuctor (name, id, email, github) { // store github username for Engineers
        // super carries over parent function: Employee
        super (name, id, email,);
        this.github = github;
    }

    // Returns github username of Engineer
    getGithub() {
        return this.github
    };

    // Returns role of Engineer as 'Engineer'
    getRole() {
        return "Engineer"
    };
}

module.exports = Engineer
