const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: { type: String, required: true },
  adresse: { type: String, required: true },
  age: {
    type: Date,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  isAdmin:{
    type: Boolean,
    default: true,
  }
});
module.exports = User = mongoose.model("user", userSchema);
