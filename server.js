const express = require("express");

const app = express();

app.use(express.json());

require("dotenv").config();

PORT = process.env.PORT;

app.use("/api/endroit", require("./routes/EndroitsRoute"));

app.use("/api/document", require("./routes/DocumentRoute"));

app.use("/api/reclamation", require("./routes/ReclamationRoute"));

app.use("/api/user", require("./routes/user"));


const connect = require("./config/ConnectDb");
connect();

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server is running on port : ${PORT}`);
});
