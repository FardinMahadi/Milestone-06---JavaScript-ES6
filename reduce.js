// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let item of numbers) {
//   sum += item;
// }
// console.log(sum);

// let multi = 1;
// for (let item of numbers) {
//   multi *= item;
// }
// console.log(multi);

// const numbers = [1, 2, 3, 4, 5];
// arr.reduce((previous,current) => previous + current , initial value)

// [1,2,3,4]
// [3,3,4]
// [6,4]
// [10]

/**
 * 0 + 1 = 1
 * 1 + 2 = 3
 * 3 + 3 = 6
 * 6 + 4 = 10
 */

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((prev, current) => prev + current, 0);
// console.log(sum);

// const multi = numbers.reduce((prev, current) => prev * current, 1);
// console.log(multi);

const numbers = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }];

const total = numbers.reduce((prev, current) => prev + current.a, 0);
console.log(total);
const malti = numbers.reduce((prev, current) => prev * current.a, 1);
console.log(malti);
