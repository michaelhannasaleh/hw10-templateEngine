const Employee = require ("./employee");


class Manager extends Employee {
    constructor (officeNumber) {
        super (name, id, title, email);
        this.officeNumber = officeNumber;
    }

    getTitle() {
        return "Manager";
    }
    getOfficeNo() {
        return this.officeNumber;
    }
}

module.exports = Manager;