class Employee {
    constructor (name, id, title, email) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
    }

    getName () {
        console.log (this.name);
    }

    getId () {
        console.log (this.id);
    }

    gitEmail () {
        console.log (this.email);
    }

    gitRole () {
        console.log (`${this.Employee}`);
    }
}

module.exports = Employee