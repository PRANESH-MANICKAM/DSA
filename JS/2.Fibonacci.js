/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
*/

//F(0) = 0, F(1) = 1
//F(n) = F(n - 1) + F(n - 2), for n > 1.

//Given n, calculate F(n).

//Solution: #1 (22.74% Beats)
const fib1 = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib1(n - 1) + fib1(n - 2);
};

//Solution: #2 (62.08% Beats)
const fib2 = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  for (let i = 2; i <= n; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return nextTerm;
};

//Solution: #3
//Not preferable: Over time load
const fib3 = (n) => {
  const fibSeries = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibSeries.push(fib3(n - 1) + fib3(n - 2));
  }
  return fibSeries[n];
};
