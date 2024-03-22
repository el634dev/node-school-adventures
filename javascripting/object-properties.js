/*
You can access and manipulate object properties –– the keys and values  
  that an object contains –– using a method very similar to arrays.  
   
  Here's an example using square brackets:  
   
     const example = {  
       pizza: 'yummy'  
     }  
       
     console.log(example['pizza'])  
   
  The above code will print the string 'yummy' to the terminal.  
   
  Alternately, you can use dot notation to get identical results:  
   
     example.pizza  
       
     example['pizza']  
   
  The two lines of code above will both return yummy.  
*/

const food = {
    types: 'only pizza'
}

console.log(food['types'])