/**
 * This is the main app which creates the environment and also initializes the
 * cli to receive standard input
 */

const Robot = require('./lib/Robot');
const Table = require('./lib/Table');

// create the table object. 5 by 5 as per the problem statement
const table = new Table(5, 5);

// create the robot and place it on the table
const robot = new Robot();

// default params for place

debugger;
