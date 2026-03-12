//create mini-express app(seperate route)
import exp from 'express'
export const Productapp=exp.Router()

let Products=[]

Productapp.get('/products',(req,res)=>{
    res.json({message:"all products",products:Products})

 })

Productapp.get('/products/:brand',(req,res)=>{
    let productBrand=req.params.brand
    let bran=Products.filter(productObj=>productObj.brand===productBrand)
    if(bran==undefined){
        return res.json({message:"no such brand"})
    }
    res.json({message:"all Products",products:bran})
})

 Productapp.post('/products',(req,res)=>{
    //input the new product
    let newProduct=req.body
    //push the products into Products
    Products.push(newProduct)
    //send the response
    res.json({message:"product added"})


 })

 Productapp.put('/products',(req,res)=>{
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

 Productapp.delete('/products/:productId',(req,res)=>{
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

 })