const express = require("express");

const User = require("../models/todo.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await User.findById({ id: req.params.id }).lean().exec();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(401).send("Invalid Credentials");
  }
});

router.patch("/", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true,
    });
    return res.status(201).send(user);
  } catch (error) {
    return res.status(401).send("Invalid Credentials");
  }
});
router.delete("/", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ id: req.params.id }, req.body, {
      new: true,
    });
    return res.status(201).send(user);
  } catch (error) {
    return res.status(401).send("Invalid Credentials");
  }
});

module.exports = router;
