/**
 * Task 13-5A: Check for a Palindrome
Problem Statement:
Write a function isPalindrome that takes a string and returns true if it reads the same forwards and backwards, otherwise false. Assume lowercase, no spaces.

Input       Output
"level"     true
"hello"     false 
*/

function isPalindrome(word) {
  const lowerCaseWord = word.toLowerCase();
  const wordArr = lowerCaseWord.toLowerCase().split("");
  let newWordArr = [];
  for (let i = wordArr.length - 1; i >= 0; i--) {
    newWordArr.push(wordArr[i]);
  }
  const newWord = newWordArr.join("");
  return lowerCaseWord === newWord ? `${true}, Your Given Word is Palindrome.` : `${false}, Your Given Word isn't Palindrome.`;
}
console.log(isPalindrome("level"));
