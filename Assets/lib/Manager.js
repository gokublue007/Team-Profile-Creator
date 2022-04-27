const Employee = require('./Employee');

class Manager extends Employee {
	constructor(id, name, email, empOfficeCountNumber) {
		super(id, name, email);
		this.empOfficeCountNumber = empOfficeCountNumber;
	}
	getOfficeNumber() {return this.empOfficeCountNumber;}
	getRole() {return 'Manager';}

}

module.exports = Manager;