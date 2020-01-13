const Employee = require ("./employee");


class Manager extends Employee {
    constructor (officeNumber) {
        super (name, id, title, email);
        this.officeNumber = officeNumber;
    }

    getRole () {
        console.log (`${this.title}`);
    }
}

module.exports = Manager;