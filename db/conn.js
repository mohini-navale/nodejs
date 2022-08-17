const mongoose= require('mongoose')
const recepies=new mongoose.Schema(
    {
        rname:{
            type:String,
            require:true
        },
        price:{
            type:String,
            require:true,
            unique:true
        },
        ingredients:{
            type:String,
            require:true
        },
        receipe:{
            type:String,
            require:true

        }

    }
)

const  recepie= mongoose.model("recepies",recepies)

module.exports=recepie