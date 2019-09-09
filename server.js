const express = require("express");
const mongoose = require("mongoose");

const app = express();

// body-parser Middlware
app.use(express.json());

//connect bd
const db = "mongodb://localhost:27017/contactlist";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

//use route
app.use("/contact-list", require("./routes/contacts"));

app.listen(5000, err => {
  if (err) console.log("failed to connect");
  else {
    console.log("server started on port 5000");
  }
});
