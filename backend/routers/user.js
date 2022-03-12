const express = require("express");
const { UserModel, validate } = require("../models/user");
const router = express.Router();

router.post("/", async (req, res) => {
  let { error } = validate(req.body);
  if (error !== undefined && error.details !== undefined) {
    return res.status(400).send(error.details[0].message);
  }
  let email = req.body.email;
  let user = await UserModel.findOne({ email: email });
  if (user !== null) {
    return res.status(400).send("user already exist!");
  }
  user = new UserModel(req.body);
  let result = await user.save();

  return res.send(result);
});

module.exports = router;
