const mongoose= require("mongoose");
const userSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        age:{type:String,required:true}
    },
    {timestamps:true}

)

const user= mongoose.model('user',userSchema);
module.exports=user;

