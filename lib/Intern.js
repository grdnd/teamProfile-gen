// Modules
const Employee = require('./Employee');


// Creates Intern as a subclass of Employee
class Intern extends Employee {
    constructor (name, id, email, school) { // store school name for Interns
        // super carries over parent function: Employee
        super (name, id, email);
        this.school = school;
    };

    // Returns school Intern attends
    getSchool() {
        return this.school
    };

    // Returns role of Intern as 'Intern'
    getRole() {
        return "Intern"
    };
}

module.exports = Intern
