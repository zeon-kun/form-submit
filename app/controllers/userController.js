const userService = require("../services/userService");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
  userService
    .getAllUsers()
    .then((users) => {
      res
        .status(200)
        .json({ status: "success", data: users, message: "success get data" });
    })
    .catch((error) => {
      res
        .status(400)
        .json({ status: "fail", data: error, message: "failed get data" });
    });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  userService
    .getUserById(id)
    .then((users) => {
      res
        .status(200)
        .json({ status: "success", data: users, message: "success get data" });
    })
    .catch((error) => {
      res
        .status(400)
        .json({ status: "fail", data: error, message: "failed get data" });
    });
};

const createUser = async (req, res) => {
  const data = req.body;
  console.log("data : ", data);
  userService
    .createUser(data)
    .then((users) => {
      res.status(200).json({
        status: "success",
        data: users,
        message: "success create user",
      });
    })
    .catch((error) => {
      res
        .status(400)
        .json({ status: "fail", data: error, message: "failed create user" });
    });
};

const updateUser = async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  userService
    .updateUser(data, id)
    .then((users) => {
      res.status(200).json({
        status: "success",
        data: users,
        message: "success update user",
      });
    })
    .catch((error) => {
      res
        .status(400)
        .json({ status: "fail", data: error, message: "failed update user" });
    });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  userService
    .deleteUser(id)
    .then((users) => {
      res.status(200).json({
        status: "success",
        data: users,
        message: "success delete user",
      });
    })
    .catch((error) => {
      res
        .status(400)
        .json({ status: "fail", data: error, message: "failed delete user" });
    });
};

const register = async (req, res) => {
  const { nama, username, email, password, confPassword } = req.body;

  if (password !== confPassword) {
    return res.status(400).json({
      status: "Error",
      message: "Password and confirm password not match",
    });
  }

  const created_at = new Date();
  const update_at = new Date();

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  userService
    .createUser({
      nama: nama,
      username: username,
      email: email,
      password: hashedPassword,
      created_at: created_at,
      update_at: update_at,
    })
    .then((users) => {
      res.status(200).json({
        status: "success",
        message: "success add data seminar",
        data: users,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "internal sever error",
        data: err,
      });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  register,
};
