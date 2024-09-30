const arr = [10, 20, 30, 40, 50];

arr.map((item, index, a) => {
  console.log("Item:", item, "Index:", index, "Whole array:", a);
});

// const result = arr.forEach((a) => a);
const result = arr.map((a) => a * 2);
console.log(result);
console.log(arr);
