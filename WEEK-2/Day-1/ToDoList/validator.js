/*Assignment 1: 
-------------
Task Management System (ToDo App Modules):
     Building a task manager like Todoist

Requirements:
     Create a modular todo app with 3 separate files:
*/
       
          
       // i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // check if title null and less than 3 chars
                        if(!title||title.trim().length<3){
                            return "title should not be less than 3 chars"
                        }
                        return true
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        const validatePriorities=["low","medium","high"]
                        if(!validatePriorities.includes(priority)){
                            return " priority must be low,high,medium (in small)"
                        }
                        return true
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        const today=Date()
                        const due=Date(date)
                        if(due<=today){
                            return " due date must be in future"
                        }
                        return true
                      }
export {validateTitle,validatePriority,validateDueDate}