const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, title, email, schoolName) {
        super(name, title, email)
        this.schoolName = schoolName;
    }
    getSchool() {
        return this.schoolName;
    }
    getTitle() {
        return "Intern";
    }
}

module.exports = Intern;