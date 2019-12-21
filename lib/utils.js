/**
 * Parses command and instructs robot to act on it. Provides all necessary
 * context to the robot.
 *
 * @param {string} command
 * @param {Table} table
 * @param {Robot} robot
 */
const parseAndAct = (command, table, robot) => {
  const allowedCommands = ['PLACE', 'MOVE', 'LEFT', 'RIGHT', 'REPORT'];
  const cmd = command.toUpperCase().split(/\s+/);
  if (allowedCommands.includes(cmd[0])) {
    switch (cmd[0]) {
      case 'PLACE':
        if (cmd[1]) {
          const [x, y, facing] = cmd[1].split(',');
          robot.place(parseInt(x), parseInt(y), facing, table);
        }
        break;
      case 'MOVE':
        robot.move();
        break;
      case 'LEFT':
        robot.left();
        break;
      case 'RIGHT':
        robot.right();
        break;
      case 'REPORT':
        console.log(`Output: ${robot.x},${robot.y},${robot.facing}`);
        break;

      default:
        break;
    }
  }
};

module.exports = {
  parseAndAct
};
