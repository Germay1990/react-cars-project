const config = require("config");
const Joi = require("joi");
const mongoose = require("mongoose");

// mongoose
//   .connect(config.get("mongoDBStringUrl"))
//   .then(() => {
//     console.log("connected to MongoDB...");
//   })
//   .catch((err) => {
//     console.log("Could not connect to Mongodb", err);
//   });

const schema = new mongoose.Schema({
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

const User = mongoose.model("User", schema);

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
