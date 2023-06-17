const formController = require("../controllers/formController");
const router = require("express").Router();
const {verifyToken} = require('../middleware/verifyToken')

router.get("/addForm", (req, res) => {
    res.render("formTask/addForm");
})

// router.get("/listMyForm", (req, res) => {
//     res.render("formTask/listMyForm");
// })

router.get("/", formController.getAllForms);
router.post("/addForm", formController.addForm);
router.put("/:id",  formController.updateForm);
router.delete("/:id",  formController.deleteForm);
router.get("/home", verifyToken, formController.goHome);
router.get("/listMyForm", verifyToken, formController.getFormList);
// router.get("/listMyHome", verifyToken, formController);

module.exports = router;
