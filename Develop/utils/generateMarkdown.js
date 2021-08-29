// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
 function renderLicenseLink(license) {
   if (license == licenseChoices[0]) {
     var lic = "https"
   }
 }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
 function renderLicenseSection(license) {
   if(license == "None"){
     return "";
   }
   var badge = renderLicenseBadge(license);
   var link = renderLicenseLink(license);

   return badge + "  \r" + link + "  ";
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var sec = renderLicenseSection()
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
