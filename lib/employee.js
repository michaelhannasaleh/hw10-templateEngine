class Employee {
     constructor(name, title, email){
          this.name = name;
          Employee.lastId++;
          this.id = Employee.lastId;
          this.title = title;
          this.email = email;
     }

     getName(){
          return this.name;
     }

     getId(){
          return this.id;
     }

     getEmail(){
          return this.email;
     }

     getTitle(){
          return "Employee";
     }
}

Employee.lastId = 0;

module.exports = Employee;