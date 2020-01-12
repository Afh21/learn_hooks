let a = [1, 2, 3];
let b = [4, 5, 6];

// Mergin two arrays

// .concat() method
let c = a.concat(b);

// ... spread operator
let d = [0, 0, 0, ...a, ...b];

console.log('Mergin #1 ...', c);
console.log('Mergin #2 ...', d);
