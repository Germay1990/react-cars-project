const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { validate, UserModel } = require("../models/user");

module.exports = {
  registerUser: async (req, res) => {
    let { error } = validate(req.body);
    if (error !== undefined && error.details !== undefined) {
      console.log(req.body);
      return res.status(400).send(error.details[0].message);
    }
    let { name, email, password } = req.body;

    //Check if user exists
    let user = await UserModel.findOne({ email: email });
    if (user !== null) {
      return res.status(400).send("user already exist!");
    }

    //Hash password
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    user = new UserModel({ name, email, password: hashedPassword });
    // user = new UserModel(req.body);
    let result = await user.save();

    return res.status(201).send({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  },
  loginUser: async (req, res) => {
    let { email, password } = req.body;

    //Check for user email
    let user = await UserModel.findOne({ email: email });

    if (user && (await bcrypt.compare(password, user.password))) {
      return res.send({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      return res.status(400).send("Invalid credentials");
    }
  },

  getMe: async (req, res) => {
    let { _id, name, email } = await UserModel.findById(req.user.id);
    return res.status(200).send({
      id: _id,
      name,
      email,
    });
  },
};
//Generate Token JWT
const generateToken = (id) => {
  return jwt.sign({ id }, config.get("JWT_SECRET"), { expiresIn: "30d" });
};
