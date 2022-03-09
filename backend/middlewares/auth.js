const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    res.status(401).send("Access denied. no token provided.");
  }
  try {
    let decodetoken = jwt.verify(token, "secret generate jwt");
    req.user = decodetoken;
    next();
  } catch (e) {}
};
