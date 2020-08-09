const postModel = require("../models/post.js");

module.exports = function(app,mongoose){
    app.post("/api/post",function(req,res){
        postModel.create({
            title:req.body.title,
            description:req.body.description,
            images: req.body.images,
            address: req.body.address,
            price: req.body.price,
            userID: req.body.userID
        },function(err,data){
            if(err){
                res.status(422);
            }else{
                res.status(200).send({success:true});
            }
        });
    });

    app.get("/", (req, res) => {
        console.log("home")
        try {    
            postModel.
                find({})
                .populate('userID')
                .then((data) => {
                    console.log(data)
                    res.send(data);
                });
            
        } catch(err){
            res.status(500).send(err);
        }
    });

    app.get("/post/:id", (req, res) => {
        const _id = req.params.id;
        try {
            postModel
            .findOne({_id})
            .populate("userID", { path: "comments", options: {sort: {'updatedAt': -1}}})
            .then((data) => res.send(post))
            
        } catch (err) {
            res.status(500).send(err);
        }
    })
}