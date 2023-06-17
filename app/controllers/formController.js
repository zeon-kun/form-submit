const formService = require("../services/formService");
// const { user } = require('../models')
const userController = require("../controllers/userController");
const { form } = require("../models");
// const fetch = require('node-fetch');
const {verifyToken} = require("../middleware/verifyToken");
const controllers = {};


const addForm = async (req, res) => {
  const data = req.body;
  const user_id = req.session.userId;

  console.log("userdddddddd". user_id);

  console.log("dataaaa", {
    user_id: user_id,
    tittle: data.tittle,
    description: data.description
  });
  formService
    .addForm({
      user_id: user_id,
      tittle: data.tittle,
      description: data.description
    })
    .then((forms) => {
      res.status(200).json({
        status: "success",
        data: forms,
        message: "success add form",
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: "error",
        data: error, 
        message: "error add form",
      });
    });
};

const getAllForms = async (req, res) => {
  formService
    .getAllForms()
    .then((forms) => {
      res.status(200).json({
        status: "success",
        data: forms,
        message: "success get all forms",
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: "error",
        data: error,
        message: "error get all forms",
      });
    });
};

const getFormById = async (req, res) => {
  const id = req.session.userId;
  formService
    .getFormById(id)
    .then((forms) => {
      res
        .status(200)
        .json({ status: "success", data: forms, message: "success get form" });
    })
    .catch((error) => {
      res
        .status(400)
        .json({ status: "fail", data: error, message: "failed get form" });
    });
};

const updateForm = async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  formService
    .updateForm(data, id)
    .then((forms) => {
      res.status(200).json({
        status: "success",
        data: forms,
        message: "success update form",
      });
    })
    .catch((error) => {
      res
        .status(400)
        .json({ status: "fail", data: error, message: "failed update form" });
    });
};

const deleteForm = async (req, res) => {
  const { id } = req.params;
  formService
    .deleteForm(id)
    .then((forms) => {
      res.status(200).json({
        status: "success",
        data: forms,
        message: "success delete form",
      });
    })
    .catch((error) => {
      res
        .status(400)
        .json({ status: "fail", data: error, message: "failed delete form" });
    });
};

const goHome = async (req, res) => {
  const userId = req.session.userId;
  const response = await fetch("http://localhost:5000/form", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseData = await response.json();
  console.log(responseData);
  if (responseData) {
    const data = [];
    for (const item of responseData.data) {
      const user_id = item.user_id;
      const created = item.created_at;
      const form_id = item.id;
      const title = item.tittle;
      const description = item.description;

      const findUser = await fetch(`http://localhost:5000/user/${user_id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (findUser.ok) {
        const userData = await findUser.json();
        console.log(userData);
        const nama = userData.data.nama;

        data.push({
          nama, user_id, created, form_id, title, description
        });
        console.log("PUSHED TO FORMLIST --", data);
      } else {
        res.status(400).json({
          success: false,
          msg: 'Pengguna tidak ditemukan'
        });
        return; // Menghentikan eksekusi fungsi setelah memberikan respons error
      }
    }

    res.render('home', {
      data
    });
  } else {
    res.status(400).json({
      success: false,
      msg: "form tidak ditemukan"
    });
  }
};

const getFormList = async (req, res) => {
  try {
    const response = await fetch("http://localhost:5000/form", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();
    if (responseData){
      const data = [];

      for (const item of responseData.data){
        const user_id = item.user_id;
        const created = item.created_at;
        const form_id = item.id;
        const title = item.tittle;
        const description = item.description;

        const findUser = await fetch(`http://localhost:5000/user/${user_id}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
        })
      }

      if (findUser.ok){
        const userData = await findUser.json();
        const nama = userData.data.nama;

        data.push({
          nama, user_id, created, form_id, title, description
        });
      }
    } else {
      res.status(400).json({
        success: false,
        msg: 'Pengguna tidak ditemukan'
      });
      return; // Menghentikan eksekusi fungsi setelah memberikan respons error
    }
    res.render('listMyForm', {
      data
    });
  } catch (error) {

  }
}




module.exports = {
  addForm,
  getAllForms,
  getFormById,
  updateForm,
  deleteForm,
  goHome,
  getFormList,
};
