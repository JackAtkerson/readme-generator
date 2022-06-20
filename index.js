// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter your project's name: ",
      validate: projectNameInput => {
        if (projectNameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief description of your project: "
    },
    {
      type: "input",
      name: "installation",
      message: "Describe any necessary steps needed for installation of your project: "
    },
    {
      type: "input",
      name: "usage",
      message: "Describe what your project is used for: "
    },
    {
      type: "input",
      name: "contributions",
      message: "Who contributed to making this project?"
    },
    {
      type: "input",
      name: "tests",
      message: "Provide any tests written, if applicable: "
    },
    {
      type: "checkbox",
      name: "license",
      message: "Choose the appropriate license for this project",
      choices: ["Apache", "MIT", "GPL", "BSD 3", "None"]
    },
    {
      type: "input",
      name: "questions",
      message: "Where can you be reached if a user has questions?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username: "
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address: "
    },
    {
      type: "input",
      name: "repo",
      message: "Enter the name of your GitHub repo: "
    }
]);
}

async function init() {
  try {
    const answers = await promptUser();
    const generateContent = generateMarkdown(answers);
    await writeFileAsync('./dist/README.md', generateContent);
    console.log('Successfully generated README!');
  } catch(err) {
      console.log(err);
    }
  }

// Function call to initialize app
init(); 


