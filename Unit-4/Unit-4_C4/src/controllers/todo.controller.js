const express = require("express");

const User = require("../models/todo.model");

const router = express.Router();

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

  module.exports = router