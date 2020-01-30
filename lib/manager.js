const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, title, email, officeNo) {
        super(name, title, email);
        this.officeNo = officeNo;
    }
    getTitle() {
        return "Manager";
    }
    getOfficeNo() {
        return this.officeNo;
    }
}

module.exports = Manager;