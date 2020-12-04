// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = function () {
      inquirer.prompt(
        {
          type: "input",
          message: "What is the employee's name?",
          name: "name"
        }

      ).then(function (input) {
        this.name = name;
      }
      )

    }




    this.getId = function () {
      inquirer.prompt(
        {
          type: "input",
          message: "What is the employee's id?",
          name: "id"
        }

      ).then(function (input) {
        this.id = id;
      }
      )

    }


    this.getEmail = function () {
      inquirer.prompt(
        {
          type: "input",
          message: "What is the employee's email?",
          name: "email"
        }

      ).then(function (data) {
        this.email = email;
      }
      )

    }


  }






} 
module.exports = Employee;