// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(github) {

    this.github = github;
    this.name = name;
    this.id = id;
    this.email = email;

    super(name, id, email);
    this.getGithub();
    
    this.getRole = function () {

    };
  };
}
module.exports = Engineer;