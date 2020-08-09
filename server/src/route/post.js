const postModel = require("../models/post.js");

module.exports = function(app,mongoose){
    app.post("/api/post",function(req,res){
        postModel.create({
            title:req.body.title,
            description:req.body.description,
            images: req.body.images,
            address: req.body.address,
            price: req.body.price,
            userID: userID
        },function(err,data){
            if(err){
                res.status(422);
            }else{
                res.status(200).send({success:true});
            }
        });
    });
}