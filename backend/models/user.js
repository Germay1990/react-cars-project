const config = require("config");
const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 4,
    maxlength: 50,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: { type: String },
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const joiSchema = Joi.object({
    name: Joi.string().min(4).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string(),
  });
  return joiSchema.validate(user);
}

exports.UserModel = User;
exports.validate = validateUser;
