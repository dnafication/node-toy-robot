const program = require('commander');
/**
 * This is the main app which creates the environment and also initializes the
 * cli to receive standard input
 */

program
  .version('1.0.0')
  .description('An application to simulate a toy robot moving on a Table')
  .option(
    '-f, --file <inputFile>',
    'optional file flag to use the robot with instructions from a file'
  )
  .parse(process.argv);

const Robot = require('./lib/Robot');
const Table = require('./lib/Table');

// create the table object. 5 by 5 as per the problem statement
const table = new Table(5, 5);

// create the robot and place it on the table
const robot = new Robot();

// default params for place
debugger;
