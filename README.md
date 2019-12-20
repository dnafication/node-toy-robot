# node-toy-robot

This is my solution to a coding exercise and it contains my interpretation of the problem. The exercise details can be found [here.](./node-toy-robot.md)

## Setup
This application has been built & tested with `Node.js 10.x` and `npm v6.13.4` on Windows 10 OS environment. To be able to run this app:
  - please install [Node.js 10.x](https://nodejs.org/en/download/releases/). It usually includes npm.
  - clone this repository then change your directory into it.
  - then run `npm install` to install dependencies

## Background
I am attempting to solve this problem with Object Oriented Programming approach. 


## Dev Notes
- table top object will initialize the environment and put the constraints on the movement of the robot
- since we are controlling the robot, I believe the robot object will make use of table top object to 
- we can pretty much translate all the commands into methods for the robot object.
- user input can be taken using node's process module
- for help we can use commander to pass in some additional parameter to make it verbose, provide some help etc.
- events can be used to build this program's logging.

### Style guide Airbnb
Airbnb Style Guide is used wherever possible with ESLint and prettify is used for code formatting.

