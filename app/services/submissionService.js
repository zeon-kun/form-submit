const submissionRepository = require("../repositories/submissionRepository");

const addSubmission = async (data) => {
  try {
    const submissions = await submissionRepository.addSubmission(data);
    return submissions;
  } catch (error) {
    return error;
  }
};

const getAllSubmissions = async () => {
  try {
    const submissions = await submissionRepository.getAllSubmissions();
    return submissions;
  } catch (error) {
    return error;
  }
};

const updateSubmission = async (data, id) => {
  try {
    const submissions = await submissionRepository.updateSubmission(data, id);
    return submissions;
  } catch (error) {
    return error;
  }
};

const deleteSubmission = async (id) => {
    try {
      const submissions = await submissionRepository.deleteSubmission(id);
      return submissions;
    } catch (error) {
      return error;
    }
  };

module.exports = {
    addSubmission,
    getAllSubmissions,
    updateSubmission,
    deleteSubmission,
};
