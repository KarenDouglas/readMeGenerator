// this is the readme template 
// It outputs these user Inputs:
    // Title,Description,Installation, Usage liscense Badge, Usage License name, Contributing, Test, instructions, github username, email
const markdown = (
    title, 
    description,
    installation,
    usageLink,
    usageName,
    contributing,
    tests,
    instructions,
    github,
    gLink,
    email
    ) => {
    return    `
${usageLink}

# ${title}

${description}

## Table of Contents
- [Installation](#installation)
- [Usage Liscense](#usage-liscense)
- [Contribution](#contributing)
- [Tests](#tests)
- [Instructions](#instructions)
- [Questions](#questions)


## Installtion
 
    ${installation}        


## Usage Liscense
    ${usageName} License
    

## Contributing
${contributing}

## Tests
${tests}

## Instructions
${instructions}

## Questions

### Github: [ ${github}](${gLink})
### email: ${email}
    `

}

module.exports= {
    markdown
}