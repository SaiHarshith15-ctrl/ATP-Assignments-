import {Schema,model} from 'mongoose'

// create the schema 

const ProductSchema=new Schema({
    productId:{
        type:Number,
        required:[true,"ID no is required"],
        unique:[true,"id already exists"]
    },
    productName:{
        type:String,
        required:[true,"Productname is required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"],
        min:[10000,"min is 10000"],
        max:[50000,"max is 50000"]
    },
    brand:{
        type:String,
        required:[true,"brand is needed"]
    },
    },{
    versionKey:false,
    timestamps:true,
},
)

//generate UserModel
export const ProductModel=model("product",ProductSchema)// here it creates the collection users
