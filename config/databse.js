const mongoose=require("mongoose");
require("dotenv").config();
const connectWithDb=()=>{
    mongoose.connect(process.env.DATABSE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("db connected successfully"))
    .catch((error)=>{
        console.log("facing issues");
        console.log(error);
        process.exit(1);
    })
};

module.exports=connectWithDb;
