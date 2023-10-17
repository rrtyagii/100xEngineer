const totalProductCost = require('../compoundProblem');

test('total cost of products', () => {
    const products = [{name: 'Apple', price: 0.5, quantity: 15}, {name: 'Banana', price: 0.25, quantity: 5}, {name: 'Cherry', price: 1, quantity: 12}];
    expect(totalProductCost(products)).toBe(19.5);
});

test('empty array', () => {
    expect(totalProductCost([])).toBe(0);
});

test('products with zero quantity', () => {
    const products = [{name: 'Apple', price: 0.5, quantity: 0}, {name: 'Banana', price: 0.25, quantity: 0}];
    expect(totalProductCost(products)).toBe(0);
});

test('products with high quantity', () => {
    const products = [{name: 'Apple', price: 0.5, quantity: 100}, {name: 'Banana', price: 0.25, quantity: 100}];
    expect(totalProductCost(products)).toBe(75);
});

test('single product', () => {
    const products = [{name: 'Apple', price: 0.5, quantity: 10}];
    expect(totalProductCost(products)).toBe(5);
});
