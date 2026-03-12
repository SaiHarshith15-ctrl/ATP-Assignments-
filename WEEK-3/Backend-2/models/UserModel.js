import {Schema,model,Types} from 'mongoose'


//create cart schema{product,count}
const cartSchema=new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product"//name of the product model
    },
    count:{
        type:Number,
        default:1
    }
})
//create user Schema

   //new is used to create the object of the class


const userSchema=new Schema({
    //structure of user resource
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"min length is 4 chars"],
        maxLength:[6,'max length is 6 chars'],
    },
    password:{
        type:String,
        required:[true,"password required"],
    },
    email:{
        type:String,
        required:[true,"email required"],
        unique:[true,"email already existed"]//not a validatoin rule just an option  .
    },
    age:{
        type:Number
    },
    cart:[cartSchema],
},{
    versionKey:false,
    timestamps:true,
},



);


//generate UserModel
export const UserModel=model("user",userSchema)// here it creates the collection users
