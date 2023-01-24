const Endroits = require("../models/Endroits");

exports.getOneEndroit = async (req, res) => {
  try {
    const { _id } = req.params;
    const getOneEndroit = await Endroits.findOne({ _id });
    res.status(200).send(getOneEndroit);
  } catch (error) {
    res.status(400).send(error);
  }
};
