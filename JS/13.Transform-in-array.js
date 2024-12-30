// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

//Solution:

//Beats: 81.33%
const applyTransform = (arr, fn) => {
  return arr.map(fn);
};

//Beats: 91.33%
const applyTransform1 = (arr, fn) => {
  return arr.reduce((acc, item) => {
    const applyFn = fn(item, index);
    acc.push(applyFn);
    return acc;
  }, []);
};

//Beats: 76.29%
const applyTransform2 = (arr, fn) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const newVal = fn(arr[i], i);
    newArr.push(newVal);
  }
  return newArr;
};

//Beats: 88.47%
const applyTransform3 = (arr, fn) => {
  let newArr = [];
  let i = 0;
  while (i < arr.length) {
    const applyFn = fn(arr[i], i);
    newArr.push(applyFn);
    i++;
  }
  return newArr;
};
