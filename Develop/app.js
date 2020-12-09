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


// Initial Function to start app using inquirer prompts
function init() {
  getRole();

}




// Function to be used if manager is selected from getRole inquirer prompts
function manager(managerInfo) {
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

// Function to be used if intern is selected from getRole inquirer prompts
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

// Function to be used if engineer is selected from getRole inquirer prompts
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

// Function to gather basic employee information to be used later
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


  ])
    .then(function (data) {
     
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

// Function to format questions for employee based on selected role choosen through inquirer list choice
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

// Function to take gathered information and create html file using the htmlRender.js
function output() {
  fs.writeFile(outputPath, render(teamMember), function (err) {

    if (err) {

      return console.log(err);
    }

    console.log("Success!");
  })


}

// Function call to start app

init();