const score = 400

const balance = new Number(100)

// console.log(balance.toString());

// toPrecision()
const otherNumber = 25.3332
// console.log(otherNumber.toPrecision(2));



// ++++++++++++++++++++++++++ math ++++++++++++++++++++++++
// abs(): only negative values convert to positive
console.log(Math.abs(-4));

// round()
console.log(Math.round(4.5)); //=> 5

// ceil()
console.log(Math.ceil(4.1)); //=> 5

// floor()
console.log(Math.floor(4.9)); //=> 4

// random()
console.log(Math.random()); //=> always something between 0 and 1

const min = 11
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)