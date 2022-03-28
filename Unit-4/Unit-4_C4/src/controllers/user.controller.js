const express = require("express");
const { body, validateResult } = require("express-validator");

const User = require("../models/user.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.status(200).send(users);
  } catch (error) {
    return res.status(401).send("Invalid Credentials");
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await User.findById({ id: req.params.id }).lean().exec();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(401).send("Invalid Credentials");
  }
});

router.post(
  "/",
  body("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Uh uh!! first name is required"),
  body("lastName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Last name is also required"),
  body("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Email is required")
    .isEmail()
    .custom(() => {
      if (email) {
        throw new error("Email already registered");
      }
      return true;
    }),
  body("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage(
      "Don't you think without password you can't create an account, Sorry"
    )
    .custom(() => {
      if (!password) {
        throw new error("Password not valid");
      }
      return true;
    }),

  async (req, res) => {
    try {
      if (validateResult) {
        const user = await User.create(req.body);
        return res.status(201).send(user);
      }
    } catch (error) {
      console.log("error:", error);
    }
  }
);



module.exports = router;
