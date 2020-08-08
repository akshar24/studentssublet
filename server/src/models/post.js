const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    images: [{
        image: {
            type: Blob
        }
    }],
    address: {
        type: String,
        required:True
    },
    price: {
        typw: Number
    },
    comments: [{
        comment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    }],

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},
    {
        timestamps: true
    })

const Post = mongoose.model('Post', postSchema)

export default Post;