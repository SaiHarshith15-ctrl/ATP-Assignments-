/*fetch("https://jsonplaceholder.typicode.com/posts")//here we have paste our url api // this returns a promise 
.then(res=>res.json())// json too returns the promise
.then(msg=>console.log(msg))
.catch(err=>console.log(err)) */

async function getData(){
    try{
    let res=await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await res.json()
    console.log(data)
 }
 catch(err){
    console.log(err)
 }
}