const averageWordLength = require('../averageWordLength');

test('average word length', () => {
    expect(averageWordLength(['apple', 'banana', 'cherry'])).toBeCloseTo(5.67, 2);
});

test('empty array', () => {
    expect(averageWordLength([])).toBe(0);
});

test('array with single letter words', () => {
    expect(averageWordLength(['a', 'b', 'c'])).toBe(1);
});

test('array with same word repeated', () => {
    expect(averageWordLength(['apple', 'apple', 'apple'])).toBe(5);
});

test('array with varying word lengths', () => {
    expect(averageWordLength(['a', 'abc', 'abcdef'])).toBeCloseTo(3.33, 2);
});
