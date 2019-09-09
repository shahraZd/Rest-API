const express = require("express");
const router = express.Router();

// Contact Model
const Contact = require("../models/contacts");

router.get("/", (req, res) => {
  Contact.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.send("cannot get"));
});
router.post("/", (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    tel: req.body.tel
  });

  newContact
    .save()
    .then(contacts => res.json(contacts))
    .catch(err => res.send("cannot post"));
});

router.delete("/:id", (req, res) => {
  Contact.findOneAndDelete(req.params.id)
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});

router.put("/:id", (req, res) => {
  const contactlist = req.body;
  Contact.findOneAndUpdate({ _id: req.params.id }, { $set: { ...contactlist } })
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});

module.exports = router;
