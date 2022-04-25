const Employee = require('./Employee');

// Create Engineer as subclass of Employee
class Engineer extends Employee {
    constructor (name, id, email, github) { // store github username for Engineers
        // super carries over parent function: Employee
        super (name, id, email);
        this.github = github;
    };

    // Return Engineer name
    getName() {
        return this.name
    };

    // Return Engineer id
    getId() {
        return this.id
    };

    // Return Engineer email
    getEmail() {
        return this.email
    };

    // Return Engineer role
    getRole() {
        return 'Engineer'
    };

    // Return Engineer github username
    getGithub() {
        return this.github
    };
}

module.exports = Engineer;