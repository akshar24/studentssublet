const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is not valid')
            }
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate(value){
            if(value.length < 7){
                throw new Error('Password is short')
            }
            if(value == 'password'){
                throw new Error('Too easy to guesss')
            }
        }
    },
    posts: [{
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    }],

    profilePicture: {
        type: Buffer
    }
}, {
    timestamps: true
} )


const User = mongoose.model('User', userSchema)
export default User;