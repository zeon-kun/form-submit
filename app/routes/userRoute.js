const userController = require("../controllers/userController");
const router = require("express").Router();
const express = require('express');
const app = express();
const path = require('path');

router.get('/signin', (req, res) => {
    res.render('signin')
})

router.get("/register", (req, res) => {
    res.render('signup')
});

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/register", userController.register);

module.exports = router;
