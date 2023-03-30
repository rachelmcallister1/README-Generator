// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None"){
    return `[License](#license)`;
  }
return " "
}
//render table of contents page

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
    return `## License`}

    return " "

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // we're grabbing the users description data. inserting HTML or other file content (writing string). Using a template literal to template the JavaScript inside of a string. 
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}


  ## Table of Contents

  ## [Installation](#installation)

  ## [Usage](#usage)

  ## [Contributing](#contributing)

  ## [Tests](#tests)

  ## [Questions](#questions)
  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing 
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Questions
  For any additional questions, you can connect me at ${data.email} or [${data.github}](https://github.com/${data.github})
`;
}
module.exports = generateMarkdown;

/* WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README */