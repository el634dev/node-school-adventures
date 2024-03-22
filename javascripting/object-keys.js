/* 
JavaScript provides a native way of listing all the available keys of an  
  object. This can be helpful for looping through all the properties of an  
  object and manipulating their values accordingly.  

Here's an example of listing all object keys using the Object.keys()  
prototype method.  

    const car = {  
    make: 'Toyota',  
    model: 'Camry',  
    year: 2020  
    }  
    const keys = Object.keys(car)  
    
    console.log(keys)  

The above code will print an array of strings, where each string is a key  
in the car object. ['make', 'model', 'year']  
*/

const car = {
    make: 'Honda',
    model: 'Accord',
    year: 2020
}

const keys = Object.keys(car)
console.log(keys)