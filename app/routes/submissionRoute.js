const submissionController = require("../controllers/submissionController");
const router = require("express").Router();

router.get("/", submissionController.getAllSubmissions);
router.post("/", submissionController.addSubmission);
router.put("/:id", submissionController.updateSubmission);
router.delete("/:id", submissionController.deleteSubmission);

module.exports = router;
