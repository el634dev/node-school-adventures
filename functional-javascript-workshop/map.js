//  Resources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Convert the following code from a for-loop to Array#map:

function doubleAll(numbers) {
    // numbers: An Array of 0 to 20 Integers between 0 and 9
    let result = []
    for (let i = 0; i < numbers.length; i++) {
      result.push(numbers[i] * 2)
    }
    return result
}

module.exports = function doubleAll(numbers) {
    return numbers.map(function double(nums) {
        return nums * 2
    })
}