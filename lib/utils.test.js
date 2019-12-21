const { parseAndAct } = require('./utils');

const Robot = require('./Robot');
const Table = require('./Table');

const robot = new Robot();
const table = new Table(5, 5);

test('parseAndAct is defined', () => {
  expect(parseAndAct).toBeDefined();
});

test('place command is successfully executed', () => {
  parseAndAct('place 0,0,north', table, robot);
  expect(robot.x).toBe(0);
  expect(robot.y).toBe(0);
  expect(robot.facing).toBe('NORTH');
});

test('move command is successfully executed', () => {
  parseAndAct('MOVE', table, robot);
  expect(robot.x).toBe(0);
  expect(robot.y).toBe(1);
  expect(robot.facing).toBe('NORTH');
});

test('left command is successfully executed', () => {
  parseAndAct('left', table, robot);
  expect(robot.x).toBe(0);
  expect(robot.y).toBe(1);
  expect(robot.facing).toBe('WEST');
});

test('right command is successfully executed', () => {
  parseAndAct('RIGHT', table, robot);
  expect(robot.x).toBe(0);
  expect(robot.y).toBe(1);
  expect(robot.facing).toBe('NORTH');
});

test('report command is successfully executed', () => {
  console.log = jest.fn();
  parseAndAct('report', table, robot);
  expect(console.log).toHaveBeenCalledWith('Output: 0,1,NORTH');
});
