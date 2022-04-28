//declared all the global variables all the required files in the lib folder
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const emptyList = [];
const fileDirName = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirName, "aTeam.html");
const extractData = require("./lib/renderFile");

// begin function and messages to start the code
const begin = () => {
if (fs.existsSync(filePath)) {
    // to rewrite an old file
    inquirer
        .prompt({
        type: "confirm",
        message:
            "The 'dist' folder already contains a 'aTeam.html' file with specific details in it. Do you want to overwrite it?",
        name: "rewrite",
    })
    .then(async (response) => {
        let rewrite = response.rewrite;
        if ((await rewrite) === true) {
          // greeting message after you have overwritten the previous code
        console.log(
            "Welcome to The Team Profile Creator App. Let's get started with creating your team."
        );
        addNew();
        } else if ((await rewrite) === false) {
        console.log(
            "Sorry, your file cannot be overwritten. Please try again "
        );
        }
    });
} else {
    console.log(" Let's create your team ");
    addNew();
}
};

// Questions that are common for all the employees
const quest = [
{
    type: "input",
    message: "Please enter the name of the employee: ",
    name: "empName",
},
{
    type: "input",
    name: "empEmail",
    message: "Enter the email for the employee: ",
},
{
    type: "input",
    name: "empID",
    message: "Enter the id number for the employee: ",
},
{
    type: "list",
    name: "empRole",
    message: "Choose the type of role that best suits the employee: ",
    choices: ["Manager", "Engineer", "Intern"],
},
];

// Questions that are only for the manager(s)
questManager = [
{
    type: "input",
    name: "empOfficeCountNumber",
    message: "Please enter the manager's office contact number: ",
    validate: (empOfficeCountNumber) => {
        if (empOfficeCountNumber) {
        return true;
    } else {
        console.log("You are required to enter a contact number");
        return false;
    }
    },
},
];

// Questions that are only for the engineer(s)
questEngineer = [
{
    type: "input",
    name: "empGithub",
    message: "Please enter the engineer's Github Username: ",
    validate: (empGithub) => {
        if (empGithub) {
        return true;
    } else {
        console.log("You are required to enter a username");
        return false;
    }
    },
},
];

// Questions that are only for the intern(s)
questIntern = [
{
    type: "input",
    name: "school",
    message:
        "Please enter the name of the school from where the intern has studied. If he/she has still not completed his school then type 'Not Applicable' : ",
    validate: (school) => {
        if (school) {
        return true;
    } else {
        console.log("You are required to enter a school name");
        return false;
    }
    },
},
];

// Create a newunction to add new employees
const addNew = async () => {
    await inquirer.prompt(quest).then((response) => {
    let empName = response.empName;
    let empID = response.empID;
    let empEmail = response.empEmail;
    let empRole = response.empRole;
    let empOfficeCountNumber;
    let empGithub;
    let school;

    if (empRole === "Engineer") {
    inquirer.prompt(questEngineer).then((response) => {
        empGithub = response.empGithub;
        let employee = new Engineer(empName, empID, empEmail, empGithub);
        emptyList.push(employee);
        addNewEmployee(emptyList);
    });
    } else if (empRole === "Manager") {
        inquirer.prompt(questManager).then((response) => {
        empOfficeCountNumber = response.empOfficeCountNumber;
        let employee = new Manager(
            empName,
            empID,
            empEmail,
            empOfficeCountNumber
        );
        emptyList.push(employee);
        addNewEmployee(emptyList);
    });
    } else if (empRole === "Intern") {
        inquirer.prompt(questIntern).then((response) => {
        school = response.school;
        let employee = new Intern(empName, empID, empEmail, school);
        emptyList.push(employee);
        addNewEmployee(emptyList);
    });
    }
});
};

// optional; added a function for adding a new employee of any type. It will keep on working till you enter NO(n). 
const addNewEmployee = async (array) => {
    await inquirer
        .prompt({
        type: "confirm",
        name: "addNewEmployee",
        message: "Would you like to add another employee to your team?",
    })
    .then(async (response) => {
        let makeNew = response.addNewEmployee;
        if ((await makeNew) === true) {
            addNew();
        } else if ((await makeNew) === false) {
            if (!fs.existsSync(fileDirName)) {
            fs.mkdirSync(fileDirName);
        }
            fs.writeFile(filePath, extractData(array), (err) => {
            if (err) {
                return console.log(err);
            }
            console.log(
                " Congratulations!! Your aTeam.html file has been generated with all the details provided by you. Please check your dist folder for more details. "
            );
        });
        }
    });
};


// Function call to initialize app
begin();
