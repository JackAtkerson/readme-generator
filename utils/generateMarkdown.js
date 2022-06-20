function generateMarkdown(answers) {
  return `
<h1>${answers.projectName}</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)<br />

## Description
${answers.description}

## Table of Contents
-[Description](#description)
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
${answers.contributions}

## Tests
${answers.tests}

##License
${answers.license}

## Questions
${answers.questions}<br />
GitHub: [${answers.username}](https://githuub.com/${answers.username})<br />
E-Mail:${answers.email}
`;
}

module.exports = generateMarkdown;
