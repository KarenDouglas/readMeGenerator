// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const mdTemplate = require('./utils/markdownTemplate')
const fs = require('fs')

// TODO: Create an array of questions for user input
// title, description, table of contents, installation, usage liscense, Contributing, test instructions 
const questions = [
    'What is the Title of your application?',
    'Give a brief description of your application',
    'What installations do you wish to include?',"Usage Liscense?",
    "What message do you want to give contributors",
    "give examples of your tests and how to run them", 
    "explain how to  use this project for users/contributors", 

];
inquirer
  .prompt([
   {
    message: questions[0],
    name: 'title'
   },
   {
    message: questions[1],
    name: 'installation'
   },
   {
    message: questions[2],
    name: 'usage'
   },
   {
    message: questions[3],
    name: 'contributing'
   },
   {
    message: questions[4],
    name: 'tests'
   },
   {
    message: questions[5],
    name: 'instructions'
   },
  ])
  .then((answers) => {
    const file =mdTemplate.markdown(answers.title,answers.installation, answers.usage, answers.contributing,answers.tests,answers.instructions)
    writeToFile(answer.title, file)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // create a readme file
    // include data from template
   return fs.writeFile(`${fileName}.md`, data, (err) => {
        err? console.error(err): console.log('success')
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
