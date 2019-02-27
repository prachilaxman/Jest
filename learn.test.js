//2 – Programmera med Jest, grunderna

test("Adds 2 + 2 to equal 4", () => {
    expect(2 + 2).toBe(4);
   });


/* 
.not lets you test its opposite (negrering). For example, 
this code tests that the best La Croix flavor is not coconut: */

test("negering", () => {
   expect(2 + 3).not.toBe(6);
   });

// toBeCloseTo(…) som per-default avrundar till 2 decimaler. 

test("decimaltal floating points", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
    });

// uppgift 2.5
test("toBe", () => {
const obj1 = {name:"test", data:[1,2,3]};
const obj2 = obj1;
expect(obj1).toBe(obj2);
});

/* uppgift 2.6 toEqual
Use .toEqual to compare recursively all properties of object instances 
(also known as "deep" equality). It calls Object.is to compare primitive values, 
which is even better for testing than === strict equality operator.
*/

test("toEqual", () => {
const obj1 = {name:"test", data:[1,2,3]};
const obj2 = {name:"test", data:[1,2,3]};
expect(obj1).toEqual(obj2);
});



