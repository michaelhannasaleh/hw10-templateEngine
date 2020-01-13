const Employee = require ("./employee");


class Engineer extends Employee {
    constructor (gitHub){
        super (name, id, title, email);

        this.gitHub = gitHub;
    }

    getRule () {
        console.log (`${this.title}`);
    }

    gitGithub (){
        console.log (`${this.gitHub}`);
    }
}

module.exports = Engineer;