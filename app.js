// external imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

// internal import
const {errorHandler,notFoundHandler} = require('./Middleware/Common/errorHandler');
const loginRouter = require('./Router/loginRouter');
const usersRouter = require('./Router/usersRouter');
const inboxRouter = require('./Router/inboxRouter');



const app = express();
dotenv.config();

// database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(() => {
    console.log("Database Connection Successfull")
}).catch((err) => console.log(err));

// request parser
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// setup view engine
app.set('view engine', 'ejs');

// static folder setup
app.use(express.static(path.join(__dirname, 'public')));

// cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);


// 404 not found handler
app.use(notFoundHandler);

// default error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`)
});