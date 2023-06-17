const formRepository = require("../repositories/formRepository");

const addForm = async (data) => {
  try {
    const forms = await formRepository.addForm(data);
    return forms;
  } catch (error) {
    return error;
  }
};

const getAllForms = async () => {
  try {
    const forms = await formRepository.getAllForms();
    return forms;
  } catch (error) {
    return error;
  }
};

const getFormById = async (id) => {
  try {
    const forms = await formRepository.getFormById(id);
    return forms;
  } catch (error) {
    return error;
  }
};

const updateForm = async (data, id) => {
  try {
    const forms = await formRepository.updateForm(data, id);
    return forms;
  } catch (error) {
    return error;
  }
};

const deleteForm = async (id) => {
  try {
    const forms = await formRepository.deleteForm(id);
    return forms;
  } catch (error) {
    return error;
  }
};

module.exports = {
  addForm,
  getAllForms,
  getFormById,
  updateForm,
  deleteForm,
};
