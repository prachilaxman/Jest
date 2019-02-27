/*
describe(name, fn) creates a block that groups together several related tests. 
For example, if you have a myBeverage object that is supposed to be delicious 
but not sour, you could test it with:
*/

// uppgift 4.2
const functions = require("./errors");
describe('myList', () => {

    test('first return empty list', () => {
        expect(functions.emptyList()).toEqual([]);
    });
    test('second zero length', () => {
        expect(functions.emptyList()).toHaveLength(0);
    });
    test('third empty string',() => {
        expect(functions.emptyList()).not.toBe("");
    });
});

// uppgift 4.3
describe('myCost', () => {

    test('first zero on empty list', () => {
        expect(functions.totalProductCost([])).toBe(0);
    });
    test('second return 15 on an array', () =>{
        expect(functions.totalProductCost([{price:15}])).toEqual(15);
    });
});