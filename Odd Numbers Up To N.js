/**
 * Task 13-3B: Odd Numbers Up To N
Problem Statement:
Write a function getOddNumbers that takes a number n and returns an array of all odd numbers from 1 to n (inclusive).

Input       Output
10          [1, 3, 5, 7, 9]
 
*/

function getOddNumbers(range) {
  let oddNums = [];
  if (range <= 0) {
    return "Please insert a positive number!";
  }
  for (let i = 0; i <= range; i++) {
    if (i % 2 !== 0) {
      oddNums.push(i);
    }
  }
  return oddNums;
}

console.log(getOddNumbers(90));
