//create mini express
import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'
import {verifyToken} from '../middlewares/verifyToken.js'
export const productApp=exp.Router()

//create REST API routes
// create product
productApp.post('/products',async(req,res)=>{
    // create product
    const newProduct=req.body
    //create the document
    const newDocumentProduct=new ProductModel(newProduct)
    const result=await newDocumentProduct.save()
    console.log(result)
    //send res
    res.status(200).json({message:"user created"})

})

// get product
productApp.get('/products',verifyToken,async(req,res)=>{
    let productList= await ProductModel.find()
    res.status(200).json({message:"products",payload:productList})

})

//get by id 
productApp.get('/products/:productId',verifyToken,async(req,res)=>{
    let prid=req.params.productId
    const productObj= await ProductModel.findOne({productId:prid})
    if(!productObj){
       return res.status(400).json({message:"product not found "})

    }
    res.status(200).json({message:"products",payload:productObj})

})
//update the product
productApp.put('/products/:productId',verifyToken,async(req,res)=>{
    const updateProduct=req.body
    const pid=req.params.productId
    const updatedProduct = await ProductModel.updateOne(
    {productId:pid},
    {$set:{...updateProduct}}
)
    res.status(200).json({message:"updated user",payload:updateProduct})


})

//delete the productw
productApp.delete('/products/:productId',async(req,res)=>{
    const did=Number(req.params.productId)
    const deletedProduct=await ProductModel.findOneAndDelete({productId:did})
    if(!deletedProduct){
        res.status(400).json({message:"no product exits"})
    }
    res.status(200).json({message:"product deleted",deletedproduct:deletedProduct})

})

