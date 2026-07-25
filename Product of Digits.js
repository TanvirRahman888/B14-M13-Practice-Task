/*
Task 13-3A: Product of Digits
Problem Statement:
Write a function productOfDigits that takes a positive whole number and returns the product of its individual digits.

Input           Output
123             6  (1 × 2 × 3)
4040            0
*/

const digits=30;

function productOfDigits(digits){
    if (digits<9) {
        return "Please enter minimum 2 digits and positive number to continue."
    }
    const numToStr=digits.toString().split("")
    let result=1;
    for (const digit of numToStr) {
        result=result*digit;
    }
    return result;
}

console.log(productOfDigits(digits));