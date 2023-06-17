const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { user } = require("../models");
dotenv.config();

const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.redirect("/user/signin");
    }
  
    console.log("Token:", token);
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = decoded.userId;
      console.log("Decoded userId:", decoded.userId);
      next();
    } catch (error) {
      return res.redirect("/user/signin");
    }
  };
module.exports = { verifyToken };
