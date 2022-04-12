const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const employees = [];

function createManager() {
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name of the manager!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?',
        validate: idInput => {
            if (idInput) {
                const numId = parseInt(idInput)
                if (Number.isInteger(numId)) {
                    return true;
                } else {
                    console.log(' is not a number!');
                    return false;
                }
            } else {
                console.log('Please enter the employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter employee's email",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter an email");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?',
        validate: officeNumberInput => {
            if (officeNumberInput) {
                const officeNum = parseInt(officeNumberInput)
                if (Number.isInteger(officeNum)) {
                    return true;
                } else {
                    console.log('input is not a number!');
                    return false;
                }
            } else {
                console.log('Please enter their office number!');
                return false;
            }
        }
    }
    ]).then(managerInfo => {
        const teamManager = new Manager(
            managerInfo.name,
            managerInfo.id,
            managerInfo.email,
            managerInfo.officeNumber
        )
        console.log(teamManager);
        employees.push(teamManager);
        console.log(employees);
        addEmployee()
    })
};

function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the employee!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee ID?',
            validate: idInput => {
                if (idInput) {
                    const numId = parseInt(idInput)
                    if (Number.isInteger(numId)) {
                        return true;
                    } else {
                        console.log('input is not a number!');
                        return false;
                    }
                } else {
                    console.log('Please enter the employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter employee's email",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their github username?',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter their github username!');
                    return false;
                }
            }
        }
    ]).then(employeeData => {
        const engineer = new Engineer(
            employeeData.name,
            employeeData.id,
            employeeData.email,
            employeeData.github
        )
        console.log(engineer);
        employees.push(engineer);
        console.log(employees);
        addEmployee()
    })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another employee?',
            default: false
        },
        {
            type: 'list',
            name:'addEmployee',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern'],
            when: ({confirmAdd}) => {
                if (confirmAdd) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then(employee => {
        if (employee.confirmAdd) {
            if (employee.addEmployee === "Engineer") {
                createEngineer();
            } else {
                createIntern();
            }
        } else {
            generatePage(employees);
        }
    })
}

createManager();