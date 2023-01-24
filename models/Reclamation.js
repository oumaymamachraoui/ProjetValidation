const mongoose = require("mongoose");
const Endroits = require("./Endroits");

const schema = mongoose.Schema;

const reclamationSchema = new schema({
  endroitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Endroits",
    required: true,
  },

  nom:String,

  nom_plage:String,

  nom_visiteur: String,

  note: String,

  date_reclamation: Date,

  resolu: {
    type: Boolean,
    default: false,
  },
});

module.exports = Reclamation = mongoose.model("reclamation", reclamationSchema);
