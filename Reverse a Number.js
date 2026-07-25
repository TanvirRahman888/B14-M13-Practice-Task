// Task 13-2B: Reverse a Number
// Problem Statement:
// Write a function reverseNumber that takes a positive whole number and returns it with its digits reversed. (Hint: convert the number to a string first.)
// Input       Output
// --------------------
// 1234        4321
// 7           7

function reverseNumber(num) {
  if (num > 0) {
    const text = num.toString();
    let revNumArr = [];
    for (let i = text.length - 1; i >= 0; i--) {
      revNumArr.push(text[i]);
    }
    let NumArr = revNumArr.join("");
    const revNum = Number(NumArr);
    return revNum;
  } else {
    return "Please, insert a positive number.";
  }
}

const num = 0.1234;
console.log("Type of Reverse Number is : ", typeof reverseNumber(num));
console.log("Reversed Number : ", reverseNumber(num));
