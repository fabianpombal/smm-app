const { Router } = require('express');
const router = Router();

const userController = require('../controllers/user.controllers');

router.get('/users',userController.getAllUsers);
router.get('/users/:id',userController.getUser);
router.post('/user',userController.createUser);
router.put('/users/:id', userController.editUser);
router.delete('/users/:id',userController.deleteUser);

module.exports = router;