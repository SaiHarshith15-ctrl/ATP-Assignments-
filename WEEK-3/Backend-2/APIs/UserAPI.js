//create mini express application 
import exp from "express"
import {UserModel} from '../models/UserModel.js'
import{ hash,compare} from 'bcryptjs'
import {verifyToken} from '../middlewares/verifyToken.js'
import jwt from "jsonwebtoken"
import {conig} from 'dotenv'
const {sign}=jwt
export const userApp=exp.Router()


//define user REST API routes
//user login
userApp.post("/auth",async (req,res)=>{
    //get user cred from client
    const {email,password}=req.body
    //verify email
    let user=await UserModel.findOne({email:email})
    //if email not exists
    if(!user){
        res.status(404).json({message:"invalid email"})
    }
    //compare passwords
   const result=await compare(password,user.password)
   if(!result){
    res.status(404).json({message:'invalid password'})
   }

   //if passwords are matched
     //create token (jsonwebtoken-jwt--jaat)
     const signedToken=sign({email:user.email},process.env.SECRET_KEY,{expiresIn:"3h"})
     /////res.status(200).json({message:"login success",token:signedToken}) not right way
     //store token  as httponly cookie
     res.cookie("token",signedToken,{
        httponly:true,// if enabled then it will be httponly if not then normal cookie
        sameSite:"lax", // ?know about strict,none
        secure:false ///?hhtp protocal https protocal
     })

     res.status(200).json({message:"login success",payload:user})


})

  //create new user
  userApp.post("/users",async(req,res)=>{
    //get new user obj
    const newUser=req.body;
    //hash the password
    const hashedPassword=await hash(newUser.password,10)
    //replace plain passowrdd with hashed password
    newUser.password=hashedPassword
    //create new user document
    const newUserDocument=new UserModel(newUser)
    //save
    const result =await newUserDocument.save()
    console.log(result)
    res.status(201).json({message:'user created'})// represent success creation

  })


  //read all users
//read all users(protected route)
userApp.get("/users",verifyToken,async(req,res)=>{
    //read all users from db
    let userslist= await UserModel.find()
    //send res
    res.status(200).json({message:"users",payload:userslist})

})

//read users by id
userApp.get("/user",verifyToken,async(req,res)=>{
    //read user email from req
    const emailOfUser=req.user?.email;
    console.log(emailOfUser)
    //find user by id
    const userObj=await UserModel.findOne({email:emailOfUser}).populate("cart.product")// simple one findById(uid)(changed)cause if user id there any one can access no security
    //if user not fuound 
    if(!userObj){
       return res.status(404).json({message:"user not found"})
    }
    //send res
    res.status(200).json({message:"user",payload:userObj})
})

//update a user by id 
userApp.put("/users/:id",verifyToken,async(req,res)=>{
    //get modified user from req
    const modifiedUser=req.body;
    const uid=req.params.id;

    //find user by id and update
    const updatedUser=await UserModel.findByIdAndUpdate(
                            uid,
                            {$set:{...modifiedUser}},
                            {new:true,runValidators:true}
    );

    // send res
    res.status(200).json({message:"user modified",payload:updatedUser})
})

userApp.delete("/users/:id",async(req,res)=>{
    //read ibject id from req params
    const did=req.params.id
    //find user and delete
    const deletedUser=await UserModel.findByIdAndDelete(did)
    if(!deletedUser){
        return res.status(404).json({message:"user not found"})
    }

    res.status(200).json({message:"user deleted",payload:deletedUser})
})

//add product to the cart
/*userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    //get product id from url param
    let products=req.params.pid;
    //get current user details
    const emailOfUser=req.user?.email
    //get user from db
    const user=await UserModel.findOne({email:emailOfUser})
    //if user is invalid
    if(!user){
        return res.status(404).json({message:"user not found"})

    }
    //add product to cart
    let result =await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:products}}})
    console.log(result)
    if(!result){
        return res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"product added to the cart"})

})
*/
//before add, first it 
//  check that product is already in the cart
//if the product is there,then increment count by 1
// if not there add that product to cart

userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    //get product id from url param
    let products=req.params.pid;
    //get current user details
    const emailOfUser=req.user?.email
    //get user from db
    const user=await UserModel.findOne({email:emailOfUser})
    //if user is invalid
    if(!user){
        return res.status(404).json({message:"user not found"})

    }
    //add product to cart 
    //check the condition here
    
    const productIndex=user.cart.findIndex(item=>item.product.toString()==product-id)
    if(!result){
        return res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"product added to the cart"})

})



//here app.use(verifyToken) -> runs for every req
// userApp.get(path,verifyToken,req-handler) -> then sepecific route becomes the protected route like matches then goes middlesware then get 