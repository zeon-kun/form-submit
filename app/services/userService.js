const userRepository = require("../repositories/userRepository");

const getAllUsers = async () => {
  try {
    const users = await userRepository.getAllUsers();
    return users;
  } catch (error) {
    return error;
  }
};

const getUserById = async (id) => {
  try {
    const users = await userRepository.getUserById(id);
    return users;
  } catch (err) {
    return err;
  }
};

const createUser = async (data) => {
    try {
        const users = await userRepository.createUser(data);
        return users;
    } catch (error) {
        return error;
    }
};

const updateUser = async (data, id) => {
    try {
        const users = await userRepository.updateUser(data, id);
        return users;
    } catch (error) {
        return error;
    }
};

const deleteUser = async (id) => {
    try {
        const users = await userRepository.deleteUser(id);
        return users;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
