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

    app.get('/', (req, res) => {
        console.log("home")
        try { 
            let posts = []      
            postModel.
                find({}).populate('userID')
                .then((data) => posts = data);
            console.log("posts", posts);
            res.send(posts);
        } catch(err){
            res.status(500).send(err);
        }
    })

    app.get('/post/:id', (req, res) => {
        const _id = req.params.id;
        try {
            let post = {}
            Task.findOne({_id}).populate("userID", { path: "comments", options: {sort: {'updatedAt': -1}}})
            .then((data) => post = data)
            res.send(post)
        } catch (err) {
            res.status(500).send(err);
        }
    })
}