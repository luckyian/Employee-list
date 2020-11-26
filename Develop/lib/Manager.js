const Employee = require("./Employee");
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
  constructor(officeNumber) {

    this.officeNumber = officeNumber;
    this.name = name;
    this.id = id;
    this.email = email;

    super(name, id, email);
    this.getRole = function () { 
      inquirer.prompt([
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
      }
    ])
      .then(function (managerData) {
        const manager = new Manager(data.name, data.id, data.email, mangerData.officeNumber);
        teamMember.push(manager);
        
      })

    };
  };
}
module.exports = Manager;



const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}
module.exports = Manager;