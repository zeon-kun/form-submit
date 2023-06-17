const { user } = require("../models");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");
require("dotenv").config();
const { response } = require("express");

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const dataUser = await user.findOne({
      where: {
        username: username,
      },
    });

    console.log("datauser", dataUser);
    console.log("USER MENCOBA LOGN", dataUser);
    if (dataUser != null) {
      const match = await bcrypt.compare(password, dataUser.password);
      if (!match) {
        res.status(400).json({
          status: "fail",
          message: "berhasil login",
        });
      } 

      const userId = dataUser.id;
      const username = dataUser.username;
      const nama = dataUser.nama;
      const email = dataUser.email;

      const accessToken = jwt.sign(
        { userId, username, nama, email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );

      req.session.userId = userId;
      console.log(req.session.userId);

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(200).json({
        msg: "Login Success",
        token: accessToken,
        status: "success",
        userId: req.session.userId,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "gagal",
      data: error,
    });
  }
};

module.exports = {
  login,
};
