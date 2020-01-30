const inquirer = require('inquirer');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

var id = 0;
let employee = [];
// Prompt an user for information such as email id and specific information

function promptUser() {
     return inquirer.prompt([
          {
               type: 'input',
               name: 'name',
               message: 'Enter First Name & Last Name : '
          },
          {
               type: 'list',
               name: 'title',
               message: 'Choose a Role : ',
               choices: [
                    'Engineer',
                    'Intern',
                    'Manager'
               ]
          },
          {
               type: 'input',
               name: 'email',
               message: 'Email : '
          },
          {
               type: 'input',
               name: 'officeNo',
               message: 'Managers office number : ',
               when: (answers) => answers.title === 'Manager'
          },
          {
               type: 'input',
               name: 'schoolName',
               message: 'Interns school name : ',
               when: (answers) => answers.title === 'Intern'
          },
          {
               type: 'input',
               name: 'github',
               message: 'Github User name : ',
               when: (answers) => answers.title === 'Engineer'
          }

     ])
}

// Generate a HTML page

async function init() {
     try {
          const answers = await promptUser();

          if(answers.title === "Manager"){
               answers.officeNo = "Office No: " + answers.officeNo;
          }else if(answers.title === "Engineer"){
               answers.github = "Github: " + answers.github;
          }else if(answers.title === "Intern"){
               answers.schoolName = "School: " + answers.schoolName;
          };

          switch (answers.title) {
               case "Manager":
                    var manager = new Manager(answers.name, answers.title, answers.email, answers.officeNo);
                    employee.push(manager);
                    break;
               case "Engineer":
                    var engineer = new Engineer(answers.name, answers.title, answers.email, answers.github);
                    employee.push(engineer);
                    break;
               case "Intern":
                    var intern = new Intern(answers.name, answers.title, answers.email, answers.schoolName);
                    employee.push(intern);
                    break;
               default:
                    console.log("No title");
          }


          //let answer = await inquirer.prompt(
            //   {
              //      type: 'list',
                //    name: 'continue',
                  //  message: 'Do you want to keep on adding new members : ',
                    //choices: [
                      //   'Yes',
                        // 'No'
                    //]
               //});

          //if (answer.continue === 'Yes') {
            //   init();
          //} else {
            //   writeToJsonFile(employee);
              // generateHTML(employee);
               //console.log(employee);
          //}
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
          console.log(' server listening on: 3000');
     });
}

init();
