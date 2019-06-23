const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0 //Like iniciará com o numero 0 setado.
    }
},
{
    timestamps: true,
}
);

module.exports = mongoose.model('Post', PostSchema);