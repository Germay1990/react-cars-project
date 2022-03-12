const config = require("config");
const mongoose = require("mongoose");
const express = require("express");
const products = require("./routers/products");
const users = require("./routers/users");
const auth = require("./routers/auth");

const app = express();
const cors = require("cors");
const { errorHandler } = require("./middlewares/error");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/products", products);
app.use("/users", users);
app.use("/auth", auth);

app.use(errorHandler);

mongoose
  .connect(config.get("mongoDBStringUrl"))
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log("could not connect to mongoDB", err);
  });

const port = config.get("port") || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
