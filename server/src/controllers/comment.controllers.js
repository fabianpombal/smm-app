const commentController = {}
const Comment = require('../models/User');


commentController.getAllComments = async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
    
}

commentController.getComment = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
}

commentController.createComment = async (req, res) => {
    const newComment = new Comment(req.body)
    await newComment.save();
    res.json(newComment);
    console.log(newComment);
}

commentController.editComment = async (req, res) => {
   await Comment.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: "Comment d"})
}

commentController.deleteComment = async (req, res) => {
    const deleteComment = await Comment.findByIdAndDelete(req.params.id);
    res.json(deleteComment);
}

module.exports = commentController;