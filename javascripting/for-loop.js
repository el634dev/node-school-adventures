/* 
  For loops allow you to repeatedly run a block of code a certain number of  
  times. This for loop logs to the console ten times:  
   
     for (let i = 0; i < 10; i++) {  
       // log the numbers 0 through 9  
       console.log(i)  
     }  
   
  The first part, let i = 0, is run once at the beginning of the loop. The  
  variable i is used to track how many times the loop has run.  
   
  The second part, i < 10, is checked at the beginning of every loop  
  iteration before running the code inside the loop. If the statement is  
  true, the code inside the loop is executed. If it is false, then the loop  
  is complete. The statement i < 10; indicates that the loop will continue  
  as long as i is less than 10.  
   
  The final part, i++, is executed at the end of every loop. This increases  
  the variable i by 1 after each loop. Once i reaches 10, the loop will  
  exit.  

  total += i  
   
  When this statement is used in a for loop, it can also be known as an  
  accumulator.  Think of it like a cash register's running total while each  
  item is scanned and added up.  For this challenge, you have 10 items and  
  they just happen to be increasing in price by 1 each item (with the first  
  item free!).  
   
  handy in a number of situations, particularly in combination with other data types like strings
  and arrays
*/

let total = 0;
let limit = 10;

for (let i = 0; i < limit; i+=1) {
    total += i
}

console.log(total)