const submissionService = require("../services/submissionService");

const addSubmission = async (req, res) => {
  const data = req.body;
  submissionService
    .addSubmission(data)
    .then((submissions) => {
      res.status(200).json({
        status: "success",
        data: submissions,
        message: "success add submission",
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: "error",
        data: error,
        message: "error add submission",
      });
    });
};

const getAllSubmissions = async (req, res) => {
  submissionService
    .getAllSubmissions()
    .then((submissions) => {
      res.status(200).json({
        status: "success",
        data: submissions,
        message: "success get all submissions",
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: "error",
        data: error,
        message: "error get all submissions",
      });
    });
};

const updateSubmission = async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  submissionService
    .updateSubmission(data, id)
    .then((submissions) => {
      res.status(200).json({
        status: "success",
        data: submissions,
        message: "success update submission",
      });
    })
    .catch((error) => {
      res
        .status(400)
        .json({ status: "fail", data: error, message: "failed update submission" });
    });
};

const deleteSubmission = async (req, res) => {
  const { id } = req.params;
  submissionService
    .deleteSubmission(id)
    .then((submissions) => {
      res.status(200).json({
        status: "success",
        data: submissions,
        message: "success delete submission",
      });
    })
    .catch((error) => {
      res
        .status(400)
        .json({ status: "fail", data: error, message: "failed delete submission" });
    });
};

module.exports = {
    addSubmission,
    getAllSubmissions,
    updateSubmission,
    deleteSubmission,
};
