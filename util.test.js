const { printTitle } = require('./util');

test('should print an uppercase text', () => {
  expect(printTitle()).toBe('DELECTUS AUT AUTEM');
});
