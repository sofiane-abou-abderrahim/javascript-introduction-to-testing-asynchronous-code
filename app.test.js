const { printTitle } = require('./app');

test('should print an uppercase text', () => {
  expect(printTitle()).toBe('DELECTUS AUT AUTEM');
});
