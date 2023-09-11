// arr = [1, 2, 3];

// function plusone() {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + 1;
//   }
//   return arr;
// }

// function plusI(n) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + n;
//   }
//   return arr;
// }

// function constant() {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = 42;
//   }
//   return arr;
// }

// var map = function (arr, fn) {
//   switch (fn.name) {
//     case "plusone":
//       return fn();
//     case "plusI":
//       return fn();
//     default:
//       return arr;
//   }
// };

// const newArray = map(arr, constant());
// console.log(newArray);

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function (arr, fn) {
  const transformedArr = [];
  let index = 0;
  for (const element of arr) {
    transformedArr[index] = fn(element, index);
    index++;
  }
  return transformedArr;
};
