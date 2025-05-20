// Given an integer array nums of unique elements, return all possible subsets(the power set).

// The solution set must not contain duplicate subsets.Return the solution in any order.



//     Example 1:

// Input: nums = [1, 2, 3]
// Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
// Example 2:

// Input: nums = [0]
// Output: [[], [0]]

// 100% Beats
var subsets = function (nums) {
    let result = [];
    let temp = [];
    function recursion(nums, i) {
        if (i === nums.length) {
            return result.push([...temp])
        }
        temp.push(nums[i]);
        recursion(nums, i + 1);
        temp.pop();
        recursion(nums, i + 1)
    }
    recursion(nums, 0);
    return result;
};

console.log(subsets([1, 2, 3]))