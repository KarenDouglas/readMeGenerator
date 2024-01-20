const markdown = (title, description,installation,usage,contributing,tests) =>{
    return    `
    #${title}
    
    ${description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage Liscense](#usage-liscense)
    - [Contribution](#contributing)
    - [Tests](#tests)
    
    ## Installtion
        \`\`\`bash
        ${installation}
        \`\`\`
    
    ## Usage Liscense
        ${usage}
    
    ## Contributing
    ${contributing}

    ## Tests
    ${tests}
    `

}
// console.log(markdown('title','description','installation','usage',"contributing",'test'))
module.exports= {
    markdown
}