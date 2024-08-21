// import model
const Post=require("../models/postModel");
const Comment=require("../models/commentModel");

exports.createComment=async(req,res)=>{
    try{
        // fetch data
        const{post,user,body}=req.body;

        // create a common object
        const comment=new Comment({
            post,user,body
        });

        // save the new comment in databse
        const savedComment=await comment.save();

        // find post using id and then add comment
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new: true})
                        .populate("comments")
                        .exec();

         res.json({
            post:updatedPost,
         }) ;              





    }
    catch(error){
        return res.status(500).json({
            error:"error while comment",
        });

    }
}