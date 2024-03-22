/* 
 There are many ways to manipulate arrays.  
   
  One common task is filtering arrays to only contain certain values.  
   
  For this we can use the .filter() method.  
   
  Here is an example:  
   
     const pets = ['cat', 'dog', 'elephant']  
       
     const filtered = pets.filter(function (pet) {  
       return (pet !== 'elephant')  
     })  
   
  The filtered variable will now only contain cat and dog.  
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Could use const and omit evenNumbers
let filtered = numbers.filter(function evenNumbers(number) {
    // can put (number % 2)
    return number % 2 === 0
});

console.log(filtered);