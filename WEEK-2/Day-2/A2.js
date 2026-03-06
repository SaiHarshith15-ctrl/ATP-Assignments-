/*
 Exercise 1: Copy & Extend an Array

                        Goal: Learn array copying with spread
                        
                        You are given:
                                let fruits = ["apple", "banana"];
                        
                        
                        Tasks
                              -> Create a new array moreFruits
                              
                              -> Copy all fruits from fruits
                              
                              -> Add "orange" at the end using spread
                              
                              -> Print both arrays
                        
                        
                        ✅ Expected Output
                              ["apple", "banana"]
                              ["apple", "banana", "orange"]
                        
                        👉 Original array should NOT change.
*/
//answer
let fruits = ["apple", "banana"];
let moreFruits=[...fruits,"orange"]// here there is no nested array so we can simply use the spread operator to copy 
console.log(fruits)
console.log(moreFruits)

