const Employee = require("./Employee");

// Manager class uses the parent employee class and it has only one unique paramater when the makecard method is called.
//in this case for an Manater the is the Office Number. 

class Manager extends Employee {
    constructor(name,employeeID,email,officeNumber) {
        super(name,employeeID,email);
        this.role = 'Manager';
        this.officeNumber = officeNumber;
    };
    makeCard() {
        return this.startCard(`Office Number: ${this.officeNumber}`)
    };
};

module.exports = Manager;