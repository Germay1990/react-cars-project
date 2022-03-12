const config = require("config");

const errorHandler = (err, rew, res, next) => {
  let statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: config.get("node_env") === "production" ? null : err.stack,
  });
};
module.exports = { errorHandler };
