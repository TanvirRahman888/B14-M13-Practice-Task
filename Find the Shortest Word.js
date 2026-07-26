/*
Find the Shortest Word in a Sentence
Matches lesson: 13-5 (String problems — split + loops)
Problem Statement:
Write a function findShortestWord that takes a sentence and returns the shortest word in it.
Input                               Output
"JavaScript is a fun language"      "a"
*/

function findShortestWord(sentence){
    const words = sentence.split(" ")
    let smallestWord=words[0];
    for (const word of words) {
        if (word.length<=smallestWord.length) {
            smallestWord=word;
        }
    }
    return smallestWord;
}

console.log(findShortestWord("JavaScript is a fun language"));