var fs = require ('fs');
const inquirer = require ('inquirer');
const Employee = require ('./employee');
const Engineer = require ('./engineer');
const Manager = require ('./manager');
const Intern = require ('./intern');
var exphbs = require('express-handlebars');

function promptUser() {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'Please enter First & Last Name : '
       },
       {
        type: 'list',
        name: 'title',
        message: 'Please choose the Role : ',
        choices: [
             'Engineer',
             'Intern',
             'Manager'
        ]
   },
   {
        type: 'input',
        name: 'email',
        message: 'Please enter Email : '
   },
   {
        type: 'input',
        name: 'officeNo',
        message: "Manager's office number : ",
        when: (answers) => answers.title === 'Manager'
   },
   {
        type: 'input',
        name: 'schoolName',
        message: "Intern's school name : ",
        when: (answers) => answers.title === 'Intern'
   },
   {
        type: 'input',
        name: 'github',
        message: 'Github User name : ',
        when: (answers) => answers.title === 'Engineer'
   }

])
};

async function init() {
    try {
         const answers = await promptUser();

         if(answers.title === "Manager"){
              answers.officeNumber = "Office No: " + answers.officeNumner;
         }else if(answers.title === "Engineer"){
              answers.github = "Github: " + answers.github;
         }else if(answers.title === "Intern"){
              answers.school = "School: " + answers.school;
         };

         switch (answers.title) {
            case "Manager":
                 var manager = new Manager(answers.name, answers.title, answers.email, answers.officeNumber);
                 employee.push(manager);
                 break;
            case "Engineer":
                 var engineer = new Engineer(answers.name, answers.title, answers.email, answers.github);
                 employee.push(engineer);
                 break;
            case "Intern":
                 var intern = new Intern(answers.name, answers.title, answers.email, answers.school);
                 employee.push(intern);
                 break;
            default:
                 console.log("No title");
       }

       let answer = await inquirer.prompt(
        {
             type: 'list',
             name: 'continue',
             message: 'Add Another Employee? : ',
             choices: [
                  'Yes',
                  'No'
             ]
        });

   if (answer.continue === 'Yes') {
        init();
   } else {
        writeToJsonFile(employee);
        generateHTML(employee);
        console.log(employee);
   }
}
catch (err) {
   console.log(err);
}
}

function writeToJsonFile(employee) {
const employeeJSON = JSON.stringify(employee, null, 2);
fs.writeFile("employee.json", employeeJSON, function (err) {
   if (err) {
        throw err;
   }
});
};

function generateHTML(employee) {
var app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
   res.render('home', {
        employee: employee
   });
});

app.listen(3000, function () {
   console.log('express-handlebars example server listening on: 3000');
});
}

init();