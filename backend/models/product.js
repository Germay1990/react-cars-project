const config = require("config");
const Joi = require("joi");
const mongoose = require("mongoose");

// mongoose
//   .connect(config.get("mongoDBStringUrl"))
//   .then(() => {
//     console.log("connected to mongoDB...");
//   })
//   .catch((err) => {
//     console.log("could not connect to mongoDB", err);
//   });

const productSchema = new mongoose.Schema({
  brandName: String,
  model: String,
  price: Number,
  category: String,
  imageUrl: String,
});

const Product = mongoose.model("Product", productSchema);

function validateProduct(product) {
  const joinSchema = Joi.object({
    brandName: Joi.string(),
    model: Joi.string(),
    price: Joi.number(),
    category: Joi.string(),
    imageUrl: Joi.string(),
  });

  return joinSchema.validate(product);
}

exports.ProductModel = Product;
exports.validate = validateProduct;
