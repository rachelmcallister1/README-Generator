// TODO: Include packages needed for this application
const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?"
    },
    {
        type: "list",
        name: "license",
        message: "How would you like to license this?",
        choices: [ 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None' ]
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response)=>{
        console.log("generating README")
        writeToFile("README.md",generateMarkdown({...response}))
    })
}

// Function call to initialize app
init();
