// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Intern extends Employee {
  constructor(school) {

    this.school = school;
    this.name = name;
    this.id = id;
    this.email = email;

    super(name, id, email);
    this.getRole = function () {

    };
  };
}
module.exports = Intern;