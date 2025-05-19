// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

//72.99%
const maxSum = (nums) => {
    let sum = 0;
    let maxSum = nums[0];
    for(let i =0; i < nums.length; i++) {
        sum += nums[i];
        if(sum > maxSum) {
            maxSum = sum;
        }
        if(sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
};

console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6

