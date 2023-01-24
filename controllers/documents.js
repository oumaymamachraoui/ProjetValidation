const mongoose = require("mongoose");

const Docs = require("../models/Documents");

exports.getDocs = async (req, res) => {
  try {
    const docs = await Docs.find();

    res.status(200).send(docs);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

exports.getDoc = async (req, res) => {
  const { id } = req.params;

  try {
    const doc = await Docs.findById(id);

    res.status(200).json(doc);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createDoc = async (req, res) => {
  const { description } = req.body;
  const newDoc = new Docs({ description });

  try {
    await newDoc.save();

    res.status(201).send(newDoc);
  } catch (error) {
    res.status(409).send(error);
  }
};

exports.updateDoc = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedDoc = { description, _id: id };

    await Docs.findByIdAndUpdate(id, updatedDoc, { new: true });

    res.status(200).send(updatedDoc);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteDoc = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Docs.findByIdAndRemove(id);

  res.send({ message: "Post deleted successfully." });
};
