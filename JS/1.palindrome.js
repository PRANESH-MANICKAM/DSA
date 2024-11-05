/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and
removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric
characters include letters and numbers.
*/

//Given a string s, return true if it is a palindrome, or false otherwise.

/*
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

//Solution: #1 (58.88% beats)
const isPalindrome1 = (s) => {
  const input = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return input.split("").reverse().join("") === input;
};

//Solution: #2 (85.60% beats)
const isPalindrome2 = (s) => {
  const input = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (input === "" || input === "") return true;

  let j = input.length - 1;

  for (let i = 0; i < input.length / 2; i++) {
    if (input[i] != input[j]) return false;

    j--;
  }

  return true;
};

//Solution: #3 (58.66% beats)
const isPalindrome3 = (s) => {
  const input = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let reverseString = "";

  if (input === "" || input === "") return true;

  for (let i = input.length - 1; i >= 0; i--) {
    reverseString += input[i];
  }

  if (reverseString === input) return true;

  return false;
};
