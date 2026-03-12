import exp from "express";
import {connect} from 'mongoose';
import { userApp } from './APIs/UserAPI.js'
import {productApp} from './APIs/ProductAPI.js'
import cookieParser from "cookie-parser"
import {config} from 'dotenv'
config();//process.env.port,process.env.DB_URL
const app=exp();



//add body parser
app.use(exp.json())
//forward req to UserApp if path starts with /user-api
app.use(cookieParser())
app.use('/user-api',userApp)
//for product
app.use('/product-api',productApp)
//start server

const port=process.env.PORT || 4000

//connect to DB server
async function connectDB(){
    try {
        await connect(process.env.DB_URL)
        console.log("DB connection success")
        app.listen(4000,()=>console.log("server on port 4000...."))
    } catch(err){
        console.log("err in db conncetion:",err)
    }

}

/*async function connectDB(){
    try {
        await connect("mongodb://localhost:27017/database1")
        console.log("DB connection success")
        app.listen(3000,()=>console.log("server on port 3000...."))
    } catch(err){
        console.log("err in db conncetion:",err)
    }

}*/

connectDB()    


//error handling middleware
app.use((err,req,res,next)=>{
    //validation error
    if(err.name==='ValidationError'){
        return res.status(400).json({message:"error occured",error:err.message})
    }
    //Casterror
    if(err.name==='CastError'){
        return res.status(400).json({message:"error occured",error:err.message})
    }
    res.status(500).json({message:"error occured server side",error:err.message})

})

//error=>{name,message.callstack}

