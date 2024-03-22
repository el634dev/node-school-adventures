/* 
Conditional statements are used to alter the control flow of a program,  
  based on a specified boolean condition.  
   
  A conditional statement looks like this:  
   
     if (n > 1) {  
       console.log('the variable n is greater than 1.')  
     } else {  
       console.log('the variable n is less than or equal to 1.')  
     }  
   
  Inside parentheses you must enter a logic statement, meaning that the  
  result of the statement is either true or false.  
   
  The else block is optional and contains the code that will be executed if  
  the statement is false.  
*/

let fruit = "orange";

if (fruit.length > 5) {
    console.log("The fruit name has more than five characters.")
} else {
    console.log("the fruit name has five characters or less.")
}
