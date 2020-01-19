let a = [1, 2, 3];
let b = [4, 5, 6];

// Mergin two arrays

// .concat() method
let c = a.concat(b);

// ... spread operator
let d = [0, 0, 0, ...a, ...b];

console.log('Mergin #1 ...', c);
console.log('Mergin #2 ...', d);

// ===================================================================================
// https://medium.com/better-programming/5-uses-of-the-es6-spread-operator-ef90bdff4d56

// 1) Copying arrays

let names = ['jhon', 'james', 'afh'];
let newNames = [...names];
console.log('Copy: ', newNames);

// 2) Concatenating arrays

let arr1 = ['A', 'B', 'C'];
let arr2 = ['D', 'E', 'F'];
let result = [...arr1, ...arr2];
console.log('Concatenating: ', result);

// 3) Spreading elements together with an individual element

let fruits = ['apple', 'pineapple', 'banana'];
let newFruits = ['mango', ...fruits];
console.log('Fruits: ', newFruits);

// 4) Spreading elements on function calls
let namesFunction = ['Claudia', 'Afh', 'Emilia'];
const getNames = (f1, f2, f3) => console.log(`Names: ${f1}, ${f2}, ${f3}`);

getNames(...namesFunction);

// Spread syntax for object literals
var obj1 = {
   id: 101,
   name: 'Andres Felipe'
};

var obj2 = {
   age: 27,
   country: 'COL'
};

const employee = { ...obj1, ...obj2 };
console.log('Employee: ', employee);

// ===================================================================================
// https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-5-of-6-e81e0736e69d
