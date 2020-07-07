// function to generate markdown for README
function generateMarkdown(data) {


    return `# ${data.title}
  # ${data.tableOfContent}
  # Table of content
  * [installation](#installation)
  * [usage](#usage)
  * [Licence](#License)
  * [Contrubution](#Contribution)
  * [test](#test)
  * [question](#question) 
   
  ## Installation
          # ${data.installation}
  ## Usage
          # ${data.usage}
  ## Licence
          # ${data.Licence}
  ## Contribution
          # ${data.Contribution}
  ## Test
          # ${data.test}
  ## Question
          # ${data.question}
  
  `;
}



module.exports = generateMarkdown;
