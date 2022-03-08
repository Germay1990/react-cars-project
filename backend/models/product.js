const joi = req("joi");
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
  function validateProduct ={
      
  }

  export default productSchema;