# Homework 10: Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The **Team Profile Generator** is a Node.js command-line application that can easily build a software engineering team based off the employee information that we provide to `Inquirer.js`. Once the user prompts have been answered, a fully styled web page built with `HTML` and `CSS` will be generated and populated with our user data.

## Installation

First run `npm init` to create a new package,

followed by `npm i` to install dependencies

## Usage

[Check out our demonstration video here!](https://youtu.be/9U-OU5rjTvA)

After our dependencies are successfully installed, we can run:

`node index.js` to initialize Inquirer.js

The user will be prompted to input their Manager's information, followed by a selection between adding an Engineer or Intern to the team.

Once the user hits 'Finish', all employee data will generate on to a fully designed web page containing color-coded employee cards for your team profile.

### Contributions

If you would like to make a contribution, feel free to access this application's repository:

📁: [/teamProfile-gen](https://github.com/grdnd/teamProfile-gen)

### Tests

Coming Soon

### Questions

If you have any questions, you can reach me at:

:octocat:: [grdnd](https://github.com/grdnd)

✉️: [gordfolio@gmail.com](mailto:gordfolio@gmail.com)

### User Story

    AS A manager
    I WANT to generate a webpage that displays my team's basic info
    SO THAT I have quick access to their emails and GitHub profiles

### Acceptance Criteria

    GIVEN a command-line application that accepts user input
    WHEN I am prompted for my team members and their information
    THEN an HTML file is generated that displays a nicely formatted team roster based on user input
    WHEN I click on an email address in the HTML
    THEN my default email program opens and populates the TO field of the email with the address
    WHEN I click on the GitHub username
    THEN that GitHub profile opens in a new tab
    WHEN I start the application
    THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    WHEN I enter the team manager’s name, employee ID, email address, and office number
    THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    WHEN I select the engineer option
    THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    WHEN I select the intern option
    THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    WHEN I decide to finish building my team
    THEN I exit the application, and the HTML is generated

## License

MIT License

Copyright (c) 2022 Gordon Do

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
