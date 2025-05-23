// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

//Solution: (Beats: 97%)

const isValidParentheses = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};

//Solution: 02 (Beats: 93.02%)
const isValidParentheses2 = (s) => {
  if (!s) return true;
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      arr.push(")");
    } else if (s[i] == "[") {
      arr.push("]");
    } else if (s[i] == "{") {
      arr.push("}");
    } else {
      if (s[i] !== arr.pop()) {
        return false;
      }
    }
  }
  return arr.length === 0;
};
