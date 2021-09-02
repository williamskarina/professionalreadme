// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const util = require("util")
const generateMarkdown = require('./utils/generateMarkdown')
const writeFileAsync = util.promisify(fs.writeFile)
const licenseChoices = [
  "Mozilla",
  "Academic",
  "GNU",
  "MIT",
];
// TODO: Create an array of questions for user input
function promptUser(){
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
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
      message: 'Describe the installation process: ',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is this project usage for?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose the license you are using for this project: ',
      choices: licenseChoices
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Who are the contributors of this project?',
    },
    {
        type: "input",
        name: "tests",
        message: "Test Instructions"
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
  ]);
}
  

async function init() {
  try {
      const answers = await promptUser();
      const generateContent = generateMarkdown(answers);
      await writeFileAsync('readme.md', generateContent);
      console.log('README.md generated!');
  }   catch(err) {
      console.log(err);
  }
}
// Function call to initialize app
init();
