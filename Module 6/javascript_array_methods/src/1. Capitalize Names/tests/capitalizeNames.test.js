const capitalizeNames = require('../capitalizeNames');

test('capitalize simple array', () => {
    expect(capitalizeNames(['alice', 'bob'])).toEqual(['Alice', 'Bob']);
});

test('empty array', () => {
    expect(capitalizeNames([])).toEqual([]);
});

test('array with all uppercase', () => {
    expect(capitalizeNames(['ALICE', 'BOB'])).toEqual(['Alice', 'Bob']);
});

test('array with mixed cases', () => {
    expect(capitalizeNames(['aLIce', 'BoB'])).toEqual(['Alice', 'Bob']);
});

test('array with single character names', () => {
    expect(capitalizeNames(['a', 'b'])).toEqual(['A', 'B']);
});
