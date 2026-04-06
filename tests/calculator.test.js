const calculator = require('../src/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('divides 6 / 2 to equal 3', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test('throws error when dividing by zero', () => {
  expect(() => calculator.divide(1, 0)).toThrow('Cannot divide by zero');
});
