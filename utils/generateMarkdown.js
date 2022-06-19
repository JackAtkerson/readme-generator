// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1>${answers.projectName}</h1>

## Description
${answers.description}

## Table of Contents
- [Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Contributions](#contributions)
-[Tests](#tests)
-[License](#license)
-[Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributions
${answers.contrubutions}

## Tests
${answers.tests}

##License
${answers.license}

## Questions
${answers.questions}<br />
GitHub: [${answers.username}](https://githuub.com/${asnwers.username})<br />
E-Mail:${asnwers.email}
`;
}

module.exports = generateMarkdown;
