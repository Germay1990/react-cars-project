const config = require("config");
const jwt = require("jsonwebtoken");
// module.exports = function (req, res, next) {
//   const token = req.header("x-auth-token");

//   if (!token) {
//     res.status(401).send("Access denied. no token provided.");
//   }
//   try {
//     let decodetoken = jwt.verify(token, config.get("JWT_SECRET"));
//     req.user = decodetoken;
//     next();
//   } catch (e) {}
// };
const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token from  header
      token = req.headers.authorization.split(" ")[1];

      //Verify token
      let decodedToken = jwt.verify(token, config.get("JWT_SECRET"));

      //Get user from token
      req.user = decodedToken;
      // req.user = await UserModel.findById(decodedToken.id).select('-password');
      next();
    } 
    catch (error) {
      console.log(error);
      return res.status(401).send("Not authorized");
    }
  }
  if (!token) {
    return res.status(401).send("Not authorized, no token provided.");
  }
};

module.exports = { protect };
