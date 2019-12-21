# node-toy-robot 🤖 

This is my solution to a coding exercise and it contains my interpretation of 
the problem. The exercise details can be found [here.](./node-toy-robot.md)

## Setup & Usage
This application has been built & tested with `Node.js 10.x` and `npm v6.13.4` 
on Windows 10 OS environment. To be able to run this app:
  - Please install [Node.js 10.x](https://nodejs.org/en/download/releases/). 
  - Clone this repository then change your current directory to the repo.
  - Run `npm install` to install dependencies.
  - Run the program by either `npm start` or `node ./index.js`.
  - To use file as command input `node ./index.js --file <file path>`.
    Sample files are provided - `commands.txt, commands-empty.txt`.
  - Get help by running `node ./index.js --help`.
  - Test the app by running `npm test`.

## Background
I am attempting to solve this problem with Object Oriented Programming approach. 

### Dev Notes
- The table object has the knowledge about its dimensions and it can calculate
  if a coordinate is valid location on the table.
- The robot object needs a table to place itself.
- Pretty much all commands are translated to methods for the robot object.
- A utility function is created to parse commands from the console using `readline` module.
- A main app to organize, initialize objects, handle command line arguments and
  start the program.

### Coding style
Airbnb Style Guide is used wherever possible with ESLint and prettify is used 
for code formatting. Jest is used as a testing library.
