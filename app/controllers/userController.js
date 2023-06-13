const userService = require("../services/userService");

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
      res
        .status(200)
        .json({
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
  console.log("data : ", data);
  userService
    .updateUser(data, id)
    .then((users) => {
      res
        .status(200)
        .json({
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
  console.log("ID : ", id);
  userService
    .deleteUser(id)
    .then((users) => {
      res
        .status(200)
        .json({
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
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
