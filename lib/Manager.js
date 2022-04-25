const Employee = require('./Employee');

// Creates Manager as a subclass of Employee
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {  // store office numbers for Managers
        // super carries over parent function: Employee
        super (name, id, email);
        this.officeNumber = officeNumber;
    };

    // Returns name of Manager
    getName() {
        return this.name
    };

    // Returns id of Manager
    getId() {
        return this.id
    };

    // Returns email of Manager
    getEmail() {
        return this.email
    };

    // Returns role of Manager
    getRole() {
        return 'Manager'
    };

    // Returns officeNumber of Manager
    getOfficeNumber() {
        return this.officeNumber
    };
}

module.exports = Manager;