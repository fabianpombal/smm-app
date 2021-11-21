const { Router } = require('express');
const router = Router();

const commentController = require('../controllers/comment.controllers');

router.get('/comments',commentController.getAllComments);
router.get('/comments/:id',commentController.getComment);
router.post('/comment',commentController.createComment);
router.put('/comments/:id', commentController.editComment);
router.delete('/comments/:id',commentController.deleteComment);

module.exports = router;