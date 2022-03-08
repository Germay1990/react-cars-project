const config = require("config");
const Joi = require("joi");
const mongoose = require("mongoose");

mongoose
  .connect(config.get("mongoDBStringUrl"))
  .then(() => {
    console.log("connected to mongoDB...");
  })
  .catch((err) => {
    console.log("could not connect to mongoDB", err);
  });

const productSchema = new mongoose.Schema({
  brandName: String,
  model: String,
  price: Number,
  category: String,
  imageUrl: String,
});

const Product = mongoose.model("Product", productSchema);

function validateProduct(product) {
  const joinSchema = {
    brandName: Joi.String(),
    model: Joi.String(),
    price: Joi.number(),
    category: Joi.String(),
    imageUrl: Joi.String(),
  };

  return Joi.valid(product, joinSchema);
}

exports.ProductModel = Product;
exports.valid = validateProduct;
