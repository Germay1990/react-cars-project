const { validate, UserModel } = require("../models/user");

module.exports = {
  registerUser: async (req, res) => {
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
  },
};
