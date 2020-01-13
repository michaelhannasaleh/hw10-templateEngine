const Employee = require ("./employee");


class Intern extends Employee {
    constructor (school) {
        super (name, id, title, email);
        this.school = school;
    }

    getSchool () {
        console.log (`${this.school}`);
    }

    gitRole () {
        console.log (`${this.title}`);
    }
}

module.exports = Intern;