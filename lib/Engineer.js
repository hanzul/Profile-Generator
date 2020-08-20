const Employee = require("./Employee");

// Engineer class uses the parent employee class and it has only one unique paramater when the makecard method is called.
//in this case for an Engineer the  is the github username. 

class Engineer extends Employee {
    constructor(name,employeeID,email,gitHub) {
        super(name,employeeID,email);
        this.role = 'Engineer';
        this.gitHub = gitHub;
    };
    makeCard() {
        return this.startCard(`GitHub: <a href="https://github.com/${this.gitHub}">${this.gitHub}</a>`);
    };
};

module.exports = Engineer;