const { form } = require("../models");

const addForm = (data) => {
  return form.create(data);
};

const getAllForms = () => {
  return form.findAll();
};


const getFormById = (id) => {
  return form.findOne({
    where: {
      id: id,
    }
  })
};

const updateForm = (data, id) => {
  return form.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteForm = (id) => {
  return form.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  addForm,
  getAllForms,
  getFormById,
  updateForm,
  deleteForm,
};
