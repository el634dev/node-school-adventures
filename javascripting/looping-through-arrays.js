/* 
For this challenge we will use a for loop to access and manipulate a list  
of values in an array.  

Accessing array values can be done using an integer.  

Each item in an array is identified by a number, starting at 0.  

So in this array hi is identified by the number 1:  

    const greetings = ['hello', 'hi', 'good morning']  

It can be accessed like this:  
    greetings[1]  

So inside a for loop we would use the i variable inside the square  
brackets instead of directly using an integer.  
*/

let pets = ['cat', 'dog', 'rat']

for (let i = 0; i < pets.length; i += 1) {
    pets[i] = pets[i] + 's'  
}

console.log(pets)