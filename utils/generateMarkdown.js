// function to generate markdown for README
function generateMarkdown(data) {
let template = `# ${data.projectName}
![GitHub License](https://img.shields.io/badge/License-${data.license.replace(" ","%20")}-blue)
## Description
${data.projectDesc}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
## Installation
To install necessary dependencies, run the following command:`
+
"\n```\n" 
+
data.commandRun
+
"\n```\n"
+
`## Usage 
${data.infoAdditional}
## License 
The project is licensed under the ${data.license} license.
## Contributing
${data.infoContributing} 
## Tests
To run tests, run the following command:`
+
"\n```\n"
+
data.commandTest
+
"\n```\n"
+
`## Questions 
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.githubName}](https://github.com/${data.githubName.replace(" ","%20")}/).`;

    return template;
  }
  
module.exports = generateMarkdown;