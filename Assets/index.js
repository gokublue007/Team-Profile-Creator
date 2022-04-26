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