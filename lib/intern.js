const Employee = require ("./employee");


class Intern extends Employee {
    constructor (school) {
        super (name, id, title, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    getTitle() {
        return "Intern";
    }
}

module.exports = Intern;