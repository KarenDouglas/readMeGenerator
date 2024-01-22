const markdown = (
    title, 
    description,
    installation,
    usageLink,
    usageName,
    contributing,
    tests
    ,
    instructions,
    github,
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

## InstructionS
${instructions}

## Questions

### Github: ${github}
### email: ${email}
    `

}
// console.log(markdown('title','description','installation','usage',"contributing",'test'))
module.exports= {
    markdown
}