// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

/*

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

 */

//Solution: #1 (28.81% - Beats)
const isAnagram1 = (s, t) => {
  if (s.length !== t.length) return false;
  return (
    s.toLowerCase().split("").sort().join("") ===
    t.toLowerCase().split("").sort().join("")
  );
};

//Solution: #2 (51.72% - Beats)
const isAnagram2 = (s, t) => {
  if (s.length !== t.length) return false;

  s = s.toLowerCase();
  t = t.toLowerCase();

  let objS = {};
  let objT = {};

  for (let i = 0; i < s.length; i++) {
    objS[s[i]] = objS[s[i]] ? objS[s[i]] + 1 : 1;
    objT[t[i]] = objT[t[i]] ? objT[t[i]] + 1 : 1;
  }

  for (const char of s) {
    if (objS[char] !== objT[char]) {
      return false;
    }
  }
  return true;
};

//Solution: #3 (85.88% - Beats)
const isAnagram3 = (s, t) => {
  if (s.length !== t.length) return false;

  s = s.toLowerCase();
  t = t.toLowerCase();

  let obj = {};

  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 0;
    }
    obj[s[i]]++;
  }

  for (let i = 0; i < t.length; i++) {
    if (!obj[t[i]]) {
      return false;
    }
    obj[t[i]]--;
  }

  return true;
};
