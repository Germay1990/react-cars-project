const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  brandName: String,
  model: String,
  price: Number,
  category: String,
  imageUrl: String,
});

const Product = mongoose.model("Product", productSchema);

async function createProduct(_brandName, _model, _price, _category, _imageUrl) {
  const product = new Product({
    brandName: _brandName,
    model: _model,
    price: _price,
    category: _category,
    imageUrl: _imageUrl,
  });
  let result = await product.save();
  // console.log(result);
}
// for(let i=0; i<10;i++){
//   createProduct("Audi", "a", 50000, "SPORT", "https://media-service.carmax.com/img/vehicles/22039075/1_cleaned.jpg?width=800");
// }
//     console.log("Success")

async function updateProduct(
  _id,
  _brandName,
  _model,
  _price,
  _category,
  _imageUrl
) {
  let result = await Product.updateOne(
    { _id: _id },
    {
      $set: {
        brandName: _brandName,
        model: _model,
        price: _price,
        category: _category,
        imageUrl: _imageUrl,
      },
    }
  );
  return result;
}

//Get all products
router.get("/", async function (req, res) {
  let products = await Product.find();
  res.send(products);
});

//Get product by id
router.get("/:id", async (req, res) => {
  let product = await Product.find({ _id: req.params.id });
  res.send(product);
  // console.log(product);
});

//Add product
router.post("/", async (req, res) => {
  let product = new Product(req.body);
  await product.save();
});

//Update product
router.put("/:id", async (req, res) => {
  let _id = req.params.id;
  let _brandName = req.body.brandName;
  let _model = req.body.model;
  let _price = req.body.price;
  let _category = req.body.category;
  let _imageUrl = req.body.imageUrl;
  let result = await updateProduct(
    _id,
    _brandName,
    _model,
    _price,
    _category,
    _imageUrl
  );
  res.send(result);
  console.log(result);
});

//Remove product
router.delete("/:id", async (req, res) => {
  await Product.deleteOne({ _id: req.params.id });
});


module.exports = router;
