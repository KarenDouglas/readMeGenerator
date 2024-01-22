// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const mdTemplate = require('./utils/markdownTemplate')
const { writeFile } = require('fs').promises;
const { renderLicenseBadge} = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// title, description, table of contents, installation, usage liscense, Contributing, test instructions 
const questions = [
    'What is the Title of your application?',
    'Give a brief description of your application',
    'What installations do you wish to include?',
    "What message do you want to give contributors",
    "give examples of your tests and how to run them", 
    "explain how to  use this project for users/contributors",
    "Github Username:",
    "What is  your email",

];


const promptUser = () => {

 return inquirer.prompt([
     {
         message: questions[0],
         name: 'title'
        },
        {
            message: questions[1],
            name: 'desc'
        },
        {
            message: questions[2],
            name: 'installation'
        },
        {type: 'list',
        name: 'usage', 
        choices: [
         { name: "ISC", value: `ISC` },
         { name: "MIT", value: "MIT" },
         { name: "Artistic", value: "Artistic" },
         { name: "Unlicense", value: "Unlicense" }
        ] 
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
        {
            message: questions[6],
            name: 'userName'
        },
        {
            message: questions[7],
            name: 'email'
        },

    ])
}
    


// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers) => {

      const usageChoiceLink = renderLicenseBadge(answers.usage).link
      const usageChoiceName = renderLicenseBadge(answers.usage).name

      const file = mdTemplate.markdown(
        answers.title,
         answers.desc,
         answers.installation, 
         usageChoiceLink,
         usageChoiceName, 
         answers.contributing,
         answers.tests,
         answers.instructions,
         answers.userName,
         answers.email
         )

      writeFile(`${answers.title}.md`, file, (err) => {
          err? console.error(err): console.log('success')
        })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
