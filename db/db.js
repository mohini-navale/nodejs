const mongoose=require('mongoose')
const userinfo=new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        password:{
            type:String,
            require:true
        },
        cpassword:{
            type:String,
            require:true

        }

    }
)

const user=mongoose.model("user",userinfo);

module.exports=user;