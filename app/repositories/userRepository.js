const { user } = require("../models");

const getAllUsers = () => {
  return user.findAll();
};

const getUserById = (id) => {
  return user.findOne({
    where: {
      id: id,
    },
  });
};

const createUser = (data) => {
  return user.create(data);
};

const updateUser = (data, id) => {
  return user.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteUser = (id) => {
  return user.destroy({
    where: {
      id: id,
    },
  });
};


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
