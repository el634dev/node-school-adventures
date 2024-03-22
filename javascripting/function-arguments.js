/* 
A function can be declared to receive any number of arguments. Arguments  
can be from any type. An argument could be a string, a number, an array,  
an object and even another function.  

Here is an example:  

    function example (firstArg, secondArg) {  
    console.log(firstArg, secondArg)  
    }  

We can call that function with two arguments like this:  

    example('hello', 'world')  

The above example will print to the terminal hello world.  

It's important for you to understand that arguments names are only used to  
  reference them.  
   
Name each argument as you like.
*/

function math(num1, num2, num3) {
    // Can do return (num2 * num3) + num1 
    let product = num2 * num3
    return product + num1
}

console.log(math(53, 61, 67))