// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

//  Solution: (Beats: 56.66%)
const longestPrefix = (arr) => {
  if (arr.length === 0) return "";

  if (arr.length === 1) return arr[0];

  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[0][i] !== arr[j][i]) {
        return arr[0].slice(0, i);
      }
    }
  }

  return arr[0];
};
