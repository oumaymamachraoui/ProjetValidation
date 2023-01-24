const mongoose = require("mongoose");

const Users = require("../models/Users");

exports.getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { _id } = req.params;
    await Users.findByIdAndUpdate(
      { _id },
      { $set: { ...req.body } },
      { new: true }
    );
    res.status(200).send({ msg: "updated successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateAdmin = async (req, res) => {
  try {
    const { _id } = req.params;
    const updated = await Users.updateOne({ _id }, [
      { $set: { isAdmin: { $eq: [false, "$isAdmin"] } } },
    ]);
    res.status(200).send(updated);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    await Users.findByIdAndDelete({ _id });
    res.status(200).send({ msg: "l'utilisateur est supprimé " });
  } catch (error) {
    res.status(400).send(error);
  }
};
