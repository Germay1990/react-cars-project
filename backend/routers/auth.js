const express = require("express");
const Joi = require("joi");
const { UserModel } = require("../models/user");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", async (req, res) => {
  let { error } = validateUser(req.body);
  if (error !== undefined && error.details !== undefined) {
    return res.status(400).send(error.details[0].message);
  }
  let email = req.body.email;
  let user = await UserModel.findOne({ email: email });
  if (user === null) {
    return res.status(400).send("user or password is not correct!");
  }
  if (user.password !== req.body.password) {
    return res.status(400).send("user or password is not correct!");
  }

  let token = jwt.sign({ _id: user._id }, "secret generate jwt");

  return res.send(token);
});

module.exports = router;

function validateUser(user) {
  const joiSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string(),
  });
  return joiSchema.validate(user);
}
