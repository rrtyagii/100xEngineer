const filterEvenNumbers = require('../filterEvenNumbers');

test('filter simple array', () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
});

test('empty array', () => {
    expect(filterEvenNumbers([])).toEqual([]);
});

test('array with only even numbers', () => {
    expect(filterEvenNumbers([2, 4, 6])).toEqual([2, 4, 6]);
});

test('array with no even numbers', () => {
    expect(filterEvenNumbers([1, 3, 5])).toEqual([]);
});

test('array with negatives', () => {
    expect(filterEvenNumbers([-2, -1, 1, 2])).toEqual([-2, 2]);
});
