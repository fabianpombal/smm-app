const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myapp')
.then((db) => console.log('db is connected'))
.catch((err) => console.error('db error'));

