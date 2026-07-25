/**
 Task 13-4A: Count Vowels
Problem Statement:
Write a function countVowels that takes a string and returns how many vowels it contains. Assume the string only contains lowercase letters, no spaces.

*/

function countVowels(word){
    const chars=word.toLowerCase().split("")
    console.log(chars);
    let vCount=0;
    for (const char of chars) {
        if (char=="a"||char=="e"||char=="i"||char=="o"||char=="u") {
            vCount++;
        }
    }
    return vCount;
}
console.log(countVowels("JavaSScript"));