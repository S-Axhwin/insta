const mongoose = require('mongoose');

const PostModel = {
    Post: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}

const Post = mongoose.model('Post', PostModel);

module.exports = User
