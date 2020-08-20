const Employee = require("./Employee");

// Intern class uses the parent employee class and it has only one unique paramater when the makecard method is called.
//in this case for an intern is school. 


class Intern extends Employee {
    constructor(name,employeeID,email,school) {
        super(name,employeeID,email);
        this.role = 'Intern';
        this.school = school;
    };
    makeCard() {
        return this.startCard(`School: ${this.school}`)
    };
};

module.exports = Intern;