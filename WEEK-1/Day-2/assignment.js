const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];




//1.Insert new Emp at 2nd position
//2.Remove an emp with name "Kiran"
//3.Change the last mark 95 to 75 of emp  "Sneha"
//1
employees.splice(2,0,{
    eno: 106,
    name: "Bhaya",
    marks: [65, 70, 68],
})
console.log(employees)

//2
let ram=function(name){
  for(let i=0;i<employees.length;i++){
    if(employees[i].name==name){
      return i
    }
  }
}
employees.splice(ram('Kiran'),1)
console.log(employees)


//3
let index=function(name){
 for(let x=0;x<employees.length;x++){
   if(employees[x].name==name){
    
   }
 }
}
employees[index('Sneha')].marks.pop()
employees[index('Sneha')].marks.push(75)
console.log(employees)

