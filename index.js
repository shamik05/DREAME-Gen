let inquirer = require('inquirer');
let fs = require('fs');
let generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your GitHub name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'projectName',
        message: `What is your project's name?`,
    },
    {
        type: 'input',
        name: 'projectDesc',
        message: 'Please write a short description of your project?',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have? (Use arrow keys)',
        name: "license",
        choices: [
        "MIT",
        "APACHE 2.0",
        "GPL 3.0",
        "BSD 3",
        "None"
        ],
    },
    {
        type: 'input',
        name: 'commandRun',
        message: 'What command should be run to install dependencies?',
        default: `npm i`,
    },
    {
        type: 'input',
        name: 'commandTest',
        message: 'What command should be run to run tests?',
        default: `npm test`,
    },
    {
        type: 'input',
        name: 'infoAdditional',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'infoContributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,function(err){ 
        if (err) {
            console.log(err);
            throw err;
        }
    })
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function(data){
        console.log("Success!");
        writeToFile("README.md",generateMarkdown(data));
        console.log("Generating README")
    })
}

// function call to initialize program
init();