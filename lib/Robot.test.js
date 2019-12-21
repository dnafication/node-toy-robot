const Robot = require('./Robot');
const Table = require('./Table');

const robot = new Robot();
const table = new Table(5, 5);

test('robot object is instance of Robot', () => {
  expect(robot).toBeInstanceOf(Robot);
});

test('commands before place to be ignored', () => {
  expect(robot.move()).toBe(false);
});

test('invalid place command should be ignored', () => {
  expect(robot.place(-1, 0, 'NORTH', table)).toBe(false);
});

test('invalid place command should be ignored 1', () => {
  expect(robot.place(0, 7, 'NORTH', table)).toBe(false);
});

test('invalid place command should be ignored 2', () => {
  expect(robot.place(2, 0, 'RTH', table)).toBe(false);
});

test('invalid place command should be ignored 3', () => {
  expect(robot.place(2, 0, 'NORTH', 3)).toBe(false);
});

test('placing robot on the table should add the attributes', () => {
  robot.place(0, 0, 'NORTH', table);
  expect(robot.x).toBe(0);
  expect(robot.y).toBe(0);
  expect(robot.facing).toBe('NORTH');
});

test('invalid re-place command should be ignored', () => {
  expect(robot.place(2, 0, 'NORTH', 3)).toBe(false);
});

test('report should return an object with details', () => {
  expect(robot.report()).toEqual({ x: 0, y: 0, facing: 'NORTH' });
});

test('move should move the robot one unit forward', () => {
  robot.place(0, 0, 'NORTH', table);
  robot.move();
  expect(robot.y).toBe(1);
});
