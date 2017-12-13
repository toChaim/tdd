const server = require('../server');

test('adds 1 + 2 to equal 3', () => {
  expect(server(1, 2)).toBe(3);
});
