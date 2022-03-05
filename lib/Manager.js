// Modules
const Employee = require('./Employee')

// Creates Manager as a subclass of Employee
class Manager extends Employee {
    constructor (name, id, email, officeNumber) { // store office numbers for Managers
        // super carries over parent function: Employee
        super (name, id, email);
        this.officeNumber = officeNumber;
    };
    
    // Returns office number of Manager
    getOfficeNumber() {
        return this.officeNumber
    };
    
    // Returns role of Manager as 'Manager'
    getRole() {
        return "Manager"
    };
}

module.exports = Manager;
