const { Schema, model } = require('mongoose');

const commentSchema = new Schema ({
    username: {type: String},
    text: {type: String},
    upvotes: {type: Number}
});

const comment = model('Comment', commentSchema);

module.exports = {
    comment
}