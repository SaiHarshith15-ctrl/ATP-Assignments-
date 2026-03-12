//create mini-express app(seperate route)
import exp from 'express'
export const userapp=exp.Router()

let users=[]

//Create API(Rest API) REpresentational State Transfer API
  //route to handle get request of client(http://localhost:3000/users)
userapp.get('/users',(req,res)=>{
    //send res to client
    res.json({message:"all products",payload:users})

  })
  //route to handle post request of client
userapp.post('/users',(req,res)=>{
    //get new user from client
    const newUser=req.body
    //push user into users
    users.push(newUser)
    //sned response
    res.json({message:"user created"})
    
})
  // route to handle put request of client
userapp.put('/users',(req,res)=>{
    //get modified user from client
    let modifiedUser=req.body
    //get index of existing user in user array
    let index=users.findIndex(userOBJ=>userOBJ.id===modifiedUser.id)
    //if user not found
    if(index===-1){
        return res.json({message:"user not found"})
    }
    //update user with index
    users.splice(index,1,modifiedUser)
    //send response
    res.json({message:"user updated"})
})
  //route to handle delete req of client
userapp.delete('/users/:id',(req,res)=>{
   //get the id of user from url parameter
   let idOfUser=Number(req.params.id) //{id:'2'}if you keep number it converts to number
   //find index of user
   let index=users.findIndex(userOBJ=>userOBJ.id===idOfUser)
   //if user not found
   if(index===-1){
    return res.json({message:"user not found"})
   }
   //delete user
   users.splice(index,1)
   //send response
   res.json({message:"user removed"})
})

userapp.get('/users/:id',(req,res)=>{
    let idOfUser=Number(req.params.id)
    let user=users.find(userOBJ=>userOBJ.id==idOfUser)
    if(user===undefined){
        return res.json({message:"user not found"})
    
    }
    res.json({message:"user found",payloads:user})

})