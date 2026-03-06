/*
Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t


*/
const user = {
 id: 101,
 name: "Ravi",
 preferences: {
     theme: "dark",
    language: "en"
     }
 };

let copy={...user}
copy.name='sai'
copy.preferences.theme="light blue"
console.log(user)
console.log(copy)

//iv observer that the inner object ones doesnt change duroing the shallow copy
/* output 
{
  id: 101,
  name: 'Ravi',
  preferences: { theme: 'light blue', language: 'en' }
}
{
  id: 101,
  name: 'sai',
  preferences: { theme: 'light blue', language: 'en' }
  */