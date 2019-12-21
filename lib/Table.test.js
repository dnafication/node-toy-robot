const Table = require('./Table');

const table = new Table(5, 5);

test('table is an instance of Table ', () => {
  expect(table).toBeInstanceOf(Table);
});

test('isValid move function is defined', () => {
  expect(table.isValidMove).toBeDefined();
});

test(`table's attributes are correct`, () => {
  expect(table.dimension.length).toBe(5);
  expect(table.dimension.width).toBe(5);
});

test('0, 0 is a valid move', () => {
  expect(table.isValidMove(0, 0)).toBe(true);
});

test('-1, -5 is invalid move', () => {
  expect(table.isValidMove(-1, -1)).toBe(false);
});

test('other invalid moves tested', () => {
  expect(table.isValidMove(5, 5)).toBe(false);
  expect(table.isValidMove(4, 5)).toBe(false);
  expect(table.isValidMove(6, 4)).toBe(false);
});
