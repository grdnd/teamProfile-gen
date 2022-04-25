const Employee = require('./Employee');

// Creates Intern as a subclass of Employee
class Intern extends Employee {
    constructor (name, id, email, school) { // store school name for Interns
        // super carries over parent function: Employee
        super (name, id, email);
        this.school = school;
    };

    // Return Intern name
    getName() {
        return this.name
    };

    // Return Intern id
    getId() {
        return this.id
    };

    // Return Intern email
    getEmail() {
        return this.email
    };

    // Return Intern role
    getRole() {
        return 'Intern'
    };

    // Return Intern school
    getSchool() {
        return this.school
    };
}

module.exports = Intern;