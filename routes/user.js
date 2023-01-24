const express = require("express");
const { login } = require("../controllers/loginUser");
const { register } = require("../controllers/registerUser");
const {
  getUsers,
  updateUser,
  deleteUser,
  updateAdmin,
} = require("../controllers/user");
const isAuth = require("../middelware/isAuth");
const {
  registerValidator,
  loginValidation,
  validation,
} = require("../middelware/validator");

const router = express.Router();

router.post("/register", registerValidator(), validation, register);

router.post("/login", loginValidation(), validation, login);

router.get("/get-all", getUsers);

router.put("/edit/:_id", updateUser);

router.put("/updateAdmin/:_id", updateAdmin);

router.delete("/delete/:_id", deleteUser);

router.get("/current", isAuth, (req , res)=>{
  res.send(req.user);
})

module.exports = router;
