const Employee = require ("./employee");


class Engineer extends Employee {
    constructor (gitHub){
        super (name, id, title, email);

        this.gitHub = gitHub;
    }

    getGithub(){
        return this.github;
   }

   getTitle(){
        return "Engineer";
   }
}


module.exports = Engineer;