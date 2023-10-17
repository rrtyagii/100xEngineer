const sumOfSquaredPrimeNumbers = require('../customCallbacks');  // replace with your actual module file name

test('sum of squared primes with non-prime numbers', () => {
  expect(sumOfSquaredPrimeNumbers([1, 4, 6, 8, 10])).toBe(0);
});

test('sum of squared primes with prime numbers', () => {
  expect(sumOfSquaredPrimeNumbers([2, 3, 5, 7])).toBe(87);
});

test('sum of squared primes with prime numbers', () => {
    expect(sumOfSquaredPrimeNumbers( [2, 3, 4, 5] )).toBe(38);
  });

test('sum of squared primes with mixed numbers', () => {
  expect(sumOfSquaredPrimeNumbers([2, 4, 3, 1, 9])).toBe(13);
});

test('sum of squared primes with empty array', () => {
  expect(sumOfSquaredPrimeNumbers([])).toBe(0);
});

test('sum of squared primes with negatives and 1', () => {
  expect(sumOfSquaredPrimeNumbers([-1, -2, 0, 1])).toBe(0);
});

test('sum of squared primes with larger primes', () => {
  expect(sumOfSquaredPrimeNumbers([11, 13, 17, 19])).toBe(940);
});
