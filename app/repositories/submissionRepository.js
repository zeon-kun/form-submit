const {submission} = require('../models');

const addSubmission = (data) => {
    return submission.create(data);
  };
  
  const getAllSubmissions = () => {
    return submission.findAll();
  };
  
  const updateSubmission = (data, id) => {
    return submission.update(data, {
      where: {
        id: id,
      },
    });
  };
  
  const deleteSubmission = (id) => {
    return submission.destroy({
      where: {
        id: id,
      },
    });
  };
  
  module.exports = {
    addSubmission,
    getAllSubmissions,
    updateSubmission,
    deleteSubmission,
  };
  