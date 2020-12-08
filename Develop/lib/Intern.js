// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Intern extends Employee {
  
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }
    getRole() {
      return "Manager";
    }
    getSchool() {
      return this.school;
    }
  }
  
module.exports = Intern;