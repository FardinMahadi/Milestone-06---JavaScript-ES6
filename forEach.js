// const arr = [10, 20, 30, 40, 50];

// for (let item of arr) {
//   console.log(item);
// }

// forEack, map
// const a = () =>

// array.forEach((item)  => item)

// function show(a) {
//   console.log(a);
// }

// arr.forEach(show);

const arr = [10, 20, 30, 40, 50];

// arr.forEach((a) => {
//   console.log(a);
// });

// const result = arr.forEach((a) => console.log(a));
// console.log(result);

// callback parameters (item, index, whole array)

arr.forEach((item, index, a) => {
  console.log("Item:", item, "Index:", index, "Whole array:", a);
});
