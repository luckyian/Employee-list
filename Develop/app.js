const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const teamMember = [];

function init() {
  getRole();

  // inquirer.prompt(
  //   {
  //     type: "input",
  //     message: "What is your team manager's name?",
  //     name: "firstManager"

  //   }

  // ).then(function (data) {
  //   newEmp(data);
  // })
}





function manager(managerInfo) {
  console.log(managerInfo);
  inquirer.prompt([
    {
      type: "input",
      message: "What is your office number?",
      name: "officeNumber"
    }
  ])
    .then(function (managerData) {
      const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerData.officeNumber);
      teamMember.push(manager);
      console.log("manager", teamMember);
      getRole();
    })

}

function intern(internInfo) {
  inquirer.prompt([
    {
      type: "input",
      message: "What is school do you attend?",
      name: "school"
    }
  ])
    .then(function (InternData) {
      const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, InternData.school);
      teamMember.push(intern);
      getRole();
    })

}
function engineer(engineerInfo) {
  inquirer.prompt(
    {
      type: "input",
      message: "What is your github user name?",
      name: "github"
    }
  )
    .then(function (EngineerData) {
      const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, EngineerData.github);
      teamMember.push(engineer);
      getRole();
    })
}


function newEmp(roleInfo) {
  
  inquirer.prompt([
    {
      type: "input",
      message: "What is the employee's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the employee's id?",
      name: "id"
    },
    {
      type: "input",
      message: "What is the employee's email?",
      name: "email"
    }

    // Add the rest of the questions related to employee
  ])
    .then(function (data) {
      console.log(roleInfo);
      if (roleInfo.role === "Manager") {
        manager(data);

      }

      else if (roleInfo.role === "Engineer") {
        engineer(data);
      }

      else if (roleInfo.role === "Intern") {
        intern(data);

      }


    })
}


function getRole() {

  inquirer.prompt(

    {
      type: "list",
      message: "What is the employee's role?",
      name: "role",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "I'm done"
      ]

    }



  ).then(function (data) {
    if (data.role === "I'm done") {


      output();

    }
    else {

      newEmp(data);
    }
  })
}


function output() {
  console.log(teamMember);
  fs.writeFile(outputPath, render(teamMember), function (err) {

    if (err) {

      return console.log(err);
    }

    console.log("Success!");
  })


}




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!
