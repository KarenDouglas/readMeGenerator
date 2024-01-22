// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//const liscenseArr = ["ISC", "MIT", "Artistic", 'Unlicense']

function renderLicenseBadge(license) {
let choice= {name: '', link: ''}
  switch(license){
    case 'ISC':
      choice = {name: 'ISC', link:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'}
      break;

    case 'MIT':
      choice = {name: 'MIT', link:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'}      
      break;

    case 'Artistic':
      choice = {name: 'Artistic', link:'[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'}
      break;

    case 'Unlicense':
      choice = {name: 'Artistic', link:'[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'}      
      break;
      
     default:
      choice ='none'
      break;   
    }
    return choice
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge

}
