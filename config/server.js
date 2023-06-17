const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const session = require('express-session');
const MemoryStore = session.MemoryStore;

const dotenv = require("dotenv");
var logger = require('morgan');
const userRouter = require("../app/routes/userRoute");
const formRouter = require("../app/routes/formRoute");
const submissionRouter  = require("../app/routes/submissionRoute");
const authRouter = require("../app/routes/authRoute");
dotenv.config();

const app = express();
app.use(session({
    secret: 'ACCESS_TOKEN_SECRET',
    resave: false,
    saveUninitialized: true,
    store: new MemoryStore(),
    debug: true
}));
app.use(cookieParser());

// app.use(bodyParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


/* Set Views */
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '../assets')));
app.use(express.static(path.join(__dirname, '../views'))); //nama folder css



/* Routes */
app.use("/user", userRouter);
app.use("/form", formRouter);
app.use("/submission", submissionRouter);
app.use("/auth", authRouter);

app.listen(5000, (req, res) => console.log("anjingggggggg"));
