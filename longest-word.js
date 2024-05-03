// Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5

function findLongestWord(words) {

    const sortedArray = words.sort((a, b) => a.length - b.length);
    console.log(sortedArray[sortedArray.length - 1].length)
    return sortedArray[sortedArray.length - 1].length;
    
}

findLongestWord(["wellness", "hello"]);