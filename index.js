const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT||3000;

// middleware
app.use(express.json());
const blog=require("./routes/blog")

// mount
app.use("/api/v1",blog);

const connectWithDb=require("./config/databse");
connectWithDb();

app.listen(PORT,()=>{
    console.log(`app is started at port no ${PORT}`);

})

app.get("/",(req,res)=>{
    res.send("homepage baby");
})
