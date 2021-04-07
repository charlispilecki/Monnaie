const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    body: String,
    username: String,
    timestamp: Number,
    comments: [{
        username: String,
        body: String,
        timestamp: Number
    }]
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
