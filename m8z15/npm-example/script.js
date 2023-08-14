const isOdd = require('is-odd');
const isEven = require('is-even');

console.log('5', isOdd(5));
console.log('0 is odd', isOdd(0));
console.log('0 is even', isEven(0));
console.log('15 is even', isEven(15));
// console.log('false', isOdd('false')); // throw error
