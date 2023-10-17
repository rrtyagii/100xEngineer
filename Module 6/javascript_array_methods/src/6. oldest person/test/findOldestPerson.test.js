const findOldestPerson = require('../findOldestPerson');

test('find oldest person', () => {
    const people = [{name: 'Alice', age: 15}, {name: 'Bob', age: 20}, {name: 'Charlie', age: 22}];
    expect(findOldestPerson(people)).toBe('Charlie');
});

test('empty array', () => {
    expect(findOldestPerson([])).toBe(null);
});

test('all below 18', () => {
    const people = [{name: 'Alice', age: 15}, {name: 'Bob', age: 17}];
    expect(findOldestPerson(people)).toBe(null);
});

test('single person in array', () => {
    const people = [{name: 'Alice', age: 15}];
    expect(findOldestPerson(people)).toBe(null);
});

test('multiple people with same oldest age', () => {
    const people = [{name: 'Alice', age: 22}, {name: 'Bob', age: 22}];
    expect(findOldestPerson(people)).toBe('Alice'); // Assuming you're returning the first found
});
