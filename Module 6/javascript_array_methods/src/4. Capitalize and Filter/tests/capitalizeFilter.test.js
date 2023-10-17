const capitalizeAndFilter = require('../capitalizeAndFilter');

test('capitalize and filter array', () => {
    expect(capitalizeAndFilter(['apple', 'banana', 'avocado'])).toEqual(['Banana']);
});

test('empty array', () => {
    expect(capitalizeAndFilter([])).toEqual([]);
});

test('array with no words starting with "A"', () => {
    expect(capitalizeAndFilter(['banana', 'cherry'])).toEqual(['Banana', 'Cherry']);
});

test('array with all words starting with "A"', () => {
    expect(capitalizeAndFilter(['apple', 'avocado'])).toEqual([]);
});

test('array with single letter words', () => {
    expect(capitalizeAndFilter(['a', 'b', 'c'])).toEqual(['B', 'C']);
});
