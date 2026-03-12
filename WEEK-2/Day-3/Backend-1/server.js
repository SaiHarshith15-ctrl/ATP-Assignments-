// Create Http server
import exp from "express";
import {userapp} from './APIs/UserApi.js';
import {Productapp} from './APIs/ProductApi.js';
const app=exp();// it creates an express application and returns, app holds that . express application internally contains the http server and many things 
//use body parser middeleware(in-built)
app.use(exp.json())

//create custome middleware    - middlewate is ntg but function
function middleware1(req,res,next){
    //send res from middleware
    //res.json({message:"this res from middleware1"})
    //forward req to next
    console.log("middleware 1 executed")
    next()
}

function middleware2(req,res,next){
    //send res from middleware
    //res.json({message:"this res from middleware2"})
    //forward req to next
    console.log("middle ware 2 executed ")
    next()
}


//use middleware
app.use(middleware1)
app.use(middleware2)

//forward req to user Api if path starts with /user-api
app.use('/user-api',userapp)
app.use('/product-api',Productapp)
// set a port number
const port=3000;
// it is used to assign port number to Http server
app.listen(port,()=>console.log(`server listening port ${port}...`));//listen(port,call back function)
//http server is a software and that server installed in a computer called web server

//Test Data(replace this with Data Base)r
/*let users=[]//Create API(Rest API) REpresentational State Transfer API
  //route to handle get request of client(http://localhost:3000/users)
app.get('/users',(req,res)=>{
    //send res to client
    res.json({message:"all products",payload:users})

  })
  //route to handle post request of client
app.post('/users',(req,res)=>{
    //get new user from client
    const newUser=req.body
    //push user into users
    users.push(newUser)
    //sned response
    res.json({message:"user created"})
    
})
  // route to handle put request of client
app.put('/users',(req,res)=>{
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
app.delete('/users/:id',(req,res)=>{
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

app.get('/users/:id',(req,res)=>{
    let idOfUser=Number(req.params.id)
    let user=users.find(userOBJ=>userOBJ.id==idOfUser)
    if(user===undefined){
        return res.json({message:"user not found"})
    
    }
    res.json({message:"user found",payloads:user})

})

//create product api with below operations
 // create new products({productId,name,brand,price})
 //Read all Product by brand
 //Update a product
 //Delete a product by id

 let Products=[]

app.get('/products',(req,res)=>{
    res.json({message:"all products",products:Products})

 })

app.get('/products/:brand',(req,res)=>{
    let productBrand=req.params.brand
    let bran=Products.filter(productObj=>productObj.brand===productBrand)
    if(bran==undefined){
        return res.json({message:"no such brand"})
    }
    res.json({message:"all Products",products:bran})
})

 app.post('/products',(req,res)=>{
    //input the new product
    let newProduct=req.body
    //push the products into Products
    Products.push(newProduct)
    //send the response
    res.json({message:"product added"})


 })

 app.put('/products',(req,res)=>{
    //take the modified product
    let modifyProduct=req.body
    //take the index number
    let index=Products.findIndex(productObj=>productObj.productId===modifyProduct.productId)
    //if no product return not found
    if(index==-1){
        res.json({message:"product not found"})
    }
    //update the product
    Products.splice(index,1,modifyProduct)
    //send response
    res.json({message:"product updated"})
 
 })

 app.delete('/products/:productId',(req,res)=>{
    // take the id by the url parameter
    let Pid=Number(req.params.productId)
    //take the index number
    
    let index=Products.findIndex(productObj=>productObj.productId===Pid)
    //check if no index
    if(index==-1){
        res.json({message:"no such product"})
    }
    //delete the product
    Products.splice(index,1)
    //response
    res.json({message:"product deleted"})

 }) */