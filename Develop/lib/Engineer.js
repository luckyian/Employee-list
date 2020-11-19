// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(github) {

    this.github = github;
    this.name = name;
    this.id = id;
    this.email = email;

    super(name, id, email);
    
    
    this.getRole = function () {
      inquirer.prompt([
        {
          type: "input",
          message: "What is your github user name?",
          name: "github"
        }
      ])
        .then(function (EngineerData) {
          const engineer = new Engineer(data.name, data.id, data.email, EngineerData.github);
          teamMember.push(engineer);
          
        })

    };
  };
}
module.exports = Engineer;