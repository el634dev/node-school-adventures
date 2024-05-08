// -----------------------------
// Higher Order Functions
// -----------------------------

/* 
A higher-order function is a function that does at least one of the following:

  * Take one or more functions as an input
  * Output a function

All other functions are first order functions. [1]

Unlike many other languages with imperative features, JavaScript allows you to utilize higher-order functions because it has "first-class functions". This means functions can be treated just like any other value in JavaScript: just like Strings or Numbers, Function values can be stored as variables, properties on objects or passed to other functions as arguments. Function values are actually Objects (inheriting from Function.prototype) so you can even add properties and store values on them, just like any regular Object.

The key difference between Functions and other value types in JavaScript is the call syntax: if a reference to a function is followed by parenthesis and some optional comma-separated values: someFunctionValue(arg1, arg2, etc), then the function body will be executed with the supplied arguments (if any).

In this exercise we're going to demonstrate that functions can be passed as values by passing you a function as
an argument.
*/

// Resources

//   * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype
  
function repeat(operation, num) {
    // Base case
    if (num <= 0) {
        return operation()
    } else {
        return (operation, --num)
    }
}
  
// Iterative?
// function repeat(operation, num) {
//     // Base case
//     while (num <= 0) {
//         return operation()
//     }
//     return (operation, --num)
// }

// Do not remove the line below
module.exports = repeat
  