const mongoose = require("mongoose");

const schema = mongoose.Schema;

const documentSchema = new schema({
  description: String,
});

module.exports = Documents = mongoose.model("document", documentSchema);
