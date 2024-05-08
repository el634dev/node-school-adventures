// Given an Array of strings, use Array#reduce to create an object that contains the number of times 
// each string occured in the array. Return the object directly (no need to console.log).

// Example
// const inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
    
// console.log(countWords(inputWords))
    
// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }

// https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

function countWords(arr) {
    // inputWords: An array of random Strings.
    return arr.reduce(function(countMap, word) {
        // Increment word or initlize it to a default value of 1
        countMap[word] = ++countMap[word] || 1
        return countMap;
        // second argument to reduce initialises countMap to {}
    }, {})
  }
  
  module.exports = countWords