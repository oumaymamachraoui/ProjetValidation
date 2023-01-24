const express = require("express");
const { getOneEndroit } = require("../controllers/endroits");

const Endroit = require("../models/Endroits");

const router = express.Router();

//add new endroits

router.post("/add", async (req, res) => {
  try {
    const { nom, nom_plage, superficie, nbre_parasol, prix, type_lot } =
      req.body;
    const newEndroit = new Endroit({
      nom,
      nom_plage,
      superficie,
      nbre_parasol,
      prix,
      type_lot,
    });
    await newEndroit.save();
    res.status(200).send(newEndroit);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get all endroits

router.get("/get-all", async (req, res) => {
  try {
    const allEndroits = await Endroit.find();
    res.status(200).send(allEndroits);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get un seul  endroits

router.get("/get-one/:_id", getOneEndroit);

//delete endroits

router.delete("/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await Endroit.findByIdAndDelete({ _id });
    res.send({ msg: "l'endroit est supprimé " });
  } catch (error) {
    res.status(400).send(error);
  }
});
// edit endroits

router.patch("/edit/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await Endroit.findByIdAndUpdate(
      { _id },
      { $set: { ...req.body } },
      { new: true }
    );
    res.status(200).send({ msg: "updated successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
