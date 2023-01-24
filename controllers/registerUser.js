const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");

// register new user

exports.register = async (req, res) => {
  try {
    const { nom, prenom, adresse, age, email, password, phone } = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).send({ msg: "email already used" });
    }
    const salt = 10;
    const hashedpass = await bcrypt.hash(password, salt);
    const newUser = new User({ ...req.body });
    newUser.password = hashedpass;

    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );
    await newUser.save();
    return res
      .status(200)
      .send({ msg: "registred successfully", user: newUser, token });
  } catch (error) {
    return res.status(400).send({ errors: [{ msg: "cannot register" }] });
  }
};
