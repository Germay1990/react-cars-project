const config = require("config");
const mongoose = require("mongoose");
const express = require("express");
const products = require("./routers/products")
const users = require("./routers/user");
const auth = require("./routers/auth");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/products", products);
app.use("/api/users", users);
app.use("/api/auth", auth);

mongoose
  .connect(config.get("mongoDBStringUrl"))
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log("could not connect to mongoDB", err);
  });

const port = config.get("port");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
