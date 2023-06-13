const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const userRouter = require('../app/routes/userRoute');
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/user', userRouter);

app.listen(5000, (req, res) => console.log("anjingggggggg"));