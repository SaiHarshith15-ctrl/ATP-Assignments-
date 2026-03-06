//ASSIGNMENT 2:
//Student Performance Dashboard
//You are working on a college result analysis system.

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
//    1. filter() students who passed (marks ≥ 40)
let result1=students.filter(element=>element.marks>=40)
console.log(result1)

/*2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D */

let result2=students.map(element=>(
{ ...element,
  grade:
  element.marks>=90?'A':element.marks>=75?'B':element.marks>=60?'C':'D'

  

})
)
console.log(result2)

//3. reduce() to calculate average marks
let result3=students.reduce((acc,obj)=>(acc+obj.marks),0)
let avg=result3/students.length
console.log(avg)

//4. find() the student who scored 92
let result4=students.find(obj=>obj.marks==92)
console.log(result4)

//5. findIndex() of student "Kiran"
let result5=students.findIndex(obj=>obj.name=='Kiran')
console.log(result5)