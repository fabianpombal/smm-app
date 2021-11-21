const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.set('port', process.env.PORT || 4000);

app.use(require('./routes/user.routes'));
app.use(require('./routes/comment.routes'));


module.exports = app;