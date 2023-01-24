const express = require("express");
const { getOneEndroit } = require("../controllers/endroits");
const Endroits = require("../models/Endroits");

const Reclamation = require("../models/Reclamation");

const router = express.Router();

router.post("/add/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const nom = await Endroits.findOne({ _id });

    const { nom_visiteur, note, date_reclamation } = req.body;
    const newReclamation = new Reclamation({
      // nom_endroit: nom_endroit._id,
      endroitId: { _id },
      nom: nom.nom,
      nom_plage: nom.nom_plage,
      nom_visiteur,
      note,
      date_reclamation,
    });
    await newReclamation.save();
    res.status(200).send(newReclamation);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/get-all", async (req, res) => {
  try {
    const reclamation = await Reclamation.find();
    res.status(200).send(reclamation);
  } catch (error) {
    res.status(400).send(error);
  }
});

// router.get("/get-one/:_id", async (req, res) => {
//   try {
//     const { _id } = req.params;
//     const getOneReclamation = await Reclamation.findOne({ _id });
//     res.status(200).send(getOneReclamation);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

router.delete("/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await Reclamation.findByIdAndDelete({ _id });
    res.send({ msg: "la reclamation est supprimé " });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/edit/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const updated = await Reclamation.updateOne({ _id }, [
      { $set: { resolu: { $eq: [false, "$resolu"] } } },
    ]);
    res.status(200).send(updated);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
