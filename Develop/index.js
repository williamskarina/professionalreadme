// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const util = require("util")
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projecTitle',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a brief description of your project: ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Describe the  installation process: ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is this project usage for?',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Choose the correct license for this project: ',
    choices: [
      "Apache",
      "Academic",
      "GNU",
      "ISC",
      "MIT",
      "Mozilla",
      "Open"
    ]
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who are the contributors of this project?',
  },
  {
      type: "input",
      name: "tests",
      message: "Is there a test included?"
  },
  {
      type: "input",
      name: "Tests",
      message: "Is there a test included?"
  },
  {
      type: "input",
      name: "questions",
      message: "What do I do if I have an issue?"
  },
  {
      type: "input",
      name: "username",
      message: "Enter your GitHub username: "
  },
  {
      type: "input",
      name: "email",
      message: "Enter your email: "
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log("Yay!")
  });
}

// TODO: Create a function to initialize app
function init() {
  prompt(questions).then(answer => {
    const response = generateMarkdown(answer);
    console.log(answer);
    fs.writeFile("README.md", response);
  })
};
// Function call to initialize app
init();
