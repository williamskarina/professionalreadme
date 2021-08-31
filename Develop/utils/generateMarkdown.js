// // // TODO: Create a function that returns a license badge based on which license is passed in
// // // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // // TODO: Create a function that returns the license link
// // // If there is no license, return an empty string
//  function renderLicenseLink(license, licenseChoices) {
//    if (license == licenseChoices[0]) {
//      var lic = "https"
//    }
//  }

// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
//  function renderLicenseSection(license, licenseChoices) {
//    if(license == "None"){
//      return "";
//    }
//    var badge = renderLicenseBadge(license, licenseChoices);
//    var link = renderLicenseLink(license, licenseChoices);

//    return badge + "  \r" + link + "  ";
//  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # Title 
  ${answers.projectTitle}
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
  
  ## Description
  ${answers.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
   ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  This application is covered by the ${answers.license} license. 
  ## Contributing
   ${answers.contributing}
  ## Tests
  ✏️ ${answers.tests}
  ## Questions
   ${answers.questions}<br />
  <br />
  :octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
  <br />
  ✉️ Email me with any questions: ${answers.email}<br /><br />

`;
}

module.exports = generateMarkdown;
