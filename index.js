const { prompt } = require("enquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");

const { username } = require("./questions");
console.log(username)


const init = async (question) => {
  // const response = await prompt({
  //   type: "input",
  //   name: "username",
  //   message: "What is your github username?",
  // })
  const response = await prompt(question)
  console.log(response);
}


// function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, function (err) { 
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   });
// }

// function to initialize program

//   inquirer
//     .prompt(questions)
//     .then(function (data) {
//       console.log("Success!");
//       writeToFile("README.md", generateMarkdown(data));
//       console.log("Generating README");
//     });



// Start program
init(username);


// {
//   "username": {

//   },
//   "email": {

//   },
//   "name": {

//   },
//   "description": {

//   },
//   "Installation": {

//   },
//   "Usage": {
    
//   },
//   "tests": {

//   },
//   "license": {

//   },
//   "contributing": {

//   },
//   "authors": {

//   },
//   "questions": {

//   }
// }
