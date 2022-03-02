// Create class for Employee that stores their name, id, and email
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Returns name of Employee
    getName() {
        return this.name
    };

    // Returns id of Employee
    getId() {
        return this.id
    };

    // Returns email of Employee
    getEmail() {
        return this.email
    };

    // Returns role of Employee as 'Employee'
    getRole() {
        return "Employee"
    };
}

module.exports = Employee;
