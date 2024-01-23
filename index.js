//  packages needed for this application
const inquirer = require('inquirer')
const mdTemplate = require('./utils/markdownTemplate')
const { writeFile } = require('fs').promises;
const { renderLicenseBadge } = require('./utils/generateMarkdown')

// list of question for prompt
const questions = [
    {
        message: 'What is the TITLE of your application?',
        name: 'title'
    },
    {
        message: 'Give a brief DESCRIPTON of your application',
        name: 'desc'
    },
    {
        message: 'What INSTALLATION do you wish to include?',
        name: 'installation'
    },
    {
        type: 'list',
        name: 'usage',
        message: 'usage liscense?',
        choices: [
            { name: "ISC", value: `ISC` },
            { name: "MIT", value: "MIT" },
            { name: "Artistic", value: "Artistic" },
            { name: "Unlicense", value: "Unlicense" }
        ]
    },
    {
        message: "What message do you want to give CONTRIBUTORS",
        name: 'contributing'
    },
    {
        message: "Give examples of your TEST and how to run them",
        name: 'tests'
    },
    {
        message: "Give INSTRUCTIONS for how to use this project",
        name: 'instructions'
    },
    {
        message: "Github Username:",
        name: 'userName'
    },
    {
        message: "Github Link:",
        name: 'link'
    },
    
    {
        message: "What is your EMAIL?",
        name: 'email'
    },

];

// outputs the questions to be asked in command line
const promptUser = () => {
    return inquirer.prompt(questions)
}



// a function to initialize app
function init() {
    // takes the answers from the promptUser function 
    promptUser()
        .then((answers) => {
            const {
                title,
                desc,
                installation,
                usage,
                contributing,
                tests,
                instructions,
                userName,
                link,
                email
            } = answers
            const usageChoiceLink = renderLicenseBadge(usage).link
            const usageChoiceName = renderLicenseBadge(usage).name
            // and passes it into the markdown template
            const fileData = mdTemplate.markdown(
                title,
                desc,
                installation,
                usageChoiceLink,
                usageChoiceName,
                contributing,
                tests,
                instructions,
                userName,
                link,
                email
            )
            // creates md file with info from template and user answers
            writeFile(`${title}.md`, fileData, (err) => {
                err ? console.error(err) : console.log('success')
            })
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.error(error)
            } else {
                console.error(error)
            }
        });
}


init();
