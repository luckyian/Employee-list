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
      inquirer.prompt([
        {
          type: "input",
          message: "What is school do you attend?",
          name: "school"
        }
      ])
        .then(function (InternData) {
          const intern = new Intern(data.name, data.id, data.email, InternData.school);
          teamMember.push(intern);
          
        })
    };
  };
}
module.exports = Intern;