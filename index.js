// TODO: Include packages needed for this application
const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    //re read the readme, you may not need the first title
    // {
    //     type: "input",
    //     name: "title",
    //     message: "What is the title of your application?"
    // },

    {
        type: "input",
        name: "title",
        message: "What is the title of your app?",
    },
    {
        type: "input",
        name: "description",
        input: "What is the description?",
    },
    {
        type: "list",
        name: "license",
        message: "How would you like to license this?",
        choices: [ 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None' ]
    },
    {
        type: "input",
        name: "installation",
        message: "What is the command to install dependencies?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the application used for?",
    },
    {
        type: "input",
        name: "contributing",
        message: "How can a user contribute to the app?",//answer: clone repo, make change, submit pull request
    },
    {
        type: "input",
        name: "tests",
        message: "What is the command to run the tests?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
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
