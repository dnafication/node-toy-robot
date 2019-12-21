const program = require('commander');
const fs = require('fs');
const readline = require('readline');

const Robot = require('./lib/Robot');
const Table = require('./lib/Table');
const { parseAndAct } = require('./lib/utils');

/**
 * This is the main app which creates the environment and also initializes the
 * cli to receive standard input
 */

// create the table object. 5 by 5 as per the problem statement
const table = new Table(5, 5);

// create the robot and place it on the table
const robot = new Robot();

program
  .version('1.0.0')
  .description('An application to simulate a toy robot moving on a Table')
  .option(
    '-f, --file <inputFile>',
    'optional file flag to use the robot with instructions from a file'
  )
  .parse(process.argv);

console.log('NODE TOY ROBOT 🤖');
console.log('--------------');

if (program.file) {
  console.log(
    `Operating the robot based on commands provided in file: ${program.file}`
  );

  fs.stat(program.file, (err, stats) => {
    if (err) return console.error('Error while checking the file', err);
    if (stats.isFile()) {
      fs.readFile(program.file, 'utf8', (err1, data) => {
        if (err1) return console.error('Error while opening the file', err1);
        const commands = data.split('\n');
        commands.forEach(cmd => {
          parseAndAct(cmd, table, robot);
        });
      });
    }
  });
} else {
  console.log(
    `Welcome to Node Toy Robot. We have created a Table (of dimension 5x5)\n` +
      `and a Robot. You can issue following commands to operate the\n` +
      `Robot on the Table:\n` +
      `  - PLACE X,Y,F\n` +
      `  - MOVE\n` +
      `  - LEFT\n` +
      `  - RIGHT\n` +
      `  - REPORT\n\n` +
      `Start the program with option '--file <filename>' to use commands from file\n` +
      `Learn more by running the program with '--help' flag\n` +
      `For more info on constraints please read the file ./node-toy-robot.md\n` +
      `Type 'q' or 'exit' to exit the program\n` +
      `Unknown or invalid commands are ignored by the program\n`
  );
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
  });

  rl.prompt();

  rl.on('line', command => {
    if (command.toLowerCase() === 'q' || command.toLowerCase() === 'exit') {
      return rl.close();
    }
    parseAndAct(command, table, robot);
    return rl.prompt();
  }).on('close', () => {
    console.log('Good bye!');
    process.exit(0);
  });
}
