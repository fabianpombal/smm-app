const userController = {}
const User = require('../models/User');


userController.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
    //res.send('get Users');
}

userController.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userController.createUser = async (req, res) => {
    const newUser = new User(req.body)
    await newUser.save();
    res.json(newUser);
    console.log(newUser);
}

userController.editUser = async (req, res) => {
   await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: "User updated"})
}

userController.deleteUser = async (req, res) => {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.json(deleteUser);
}

module.exports = userController;