const sumOfNumbers = require('../sumOfNumbers');

test('sum of simple array', () => {
    expect(sumOfNumbers([1, 2, 3, 4])).toEqual(10);
});

test('empty array', () => {
    expect(sumOfNumbers([])).toEqual(0);
});

test('array with negatives', () => {
    expect(sumOfNumbers([-1, 2, -3, 4])).toEqual(2);
});

test('array with zeros', () => {
    expect(sumOfNumbers([0, 0, 0])).toEqual(0);
});

test('array with large numbers', () => {
    expect(sumOfNumbers([1000000, 2000000])).toEqual(3000000);
});
