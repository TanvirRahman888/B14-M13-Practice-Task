/*
Task 13-4B: Remove First and Last Character
Problem Statement:
Write a function removeFirstAndLast that takes a string and returns it with the first and last character removed.
Input       Output
"hello"     "ell"
*/

function removeFirstAndLast(word) {
  let newWord = word.slice(1, -1);
  console.log(newWord);
}
removeFirstAndLast("hello");
