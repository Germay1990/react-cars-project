const { validate, ProductModel } = require("../models/product");

module.exports = {
  getAllProducts: async (req, res) => {
    let products = await ProductModel.find();
    res.send(products);
  },
  getProductById: async (req, res) => {
    let product = await ProductModel.find({ _id: req.params.id });
    res.send(product);
  },

  addProduct: async (req, res) => {
    //Checking inputs validation, if error!=undefined(null) => meaning: error exist
    let { error } = validate(req.body);
    if (error !== undefined && error.details !== undefined) {
      return res.status(400).send(error.details[0].message);
    }
    //Check if product with this brand name already exist in DB
    let _brandName = req.body.brandName;
    let _model = req.body.model;
    let product = await ProductModel.findOne({
      brandName: _brandName,
      model: _model,
    });

    // if product !==null => meaning: product exist
    if (product !== null) {
      console.log("product already exist!");
      return res.status(400).send("product already exist!");
      return res.status(400).send({ message: "product already exist!" });
    }
    // if product not exist create new product model and save him to DB
    product = new ProductModel({
      brandName: req.body.brandName,
      model: req.body.model,
      price: req.body.price,
      category: req.body.category,
      imageUrl: req.body.imageUrl,
    });
    let result = await product.save();
    return res.send(result);
  },
  updateProduct: async (req, res) => {
    let { brandName, model, price, category, imageUrl } = req.body;
    let { id } = req.params;
    let result = await ProductModel.updateOne(
      { _id: id },
      {
        $set: {
          brandName,
          model,
          price,
          category,
          imageUrl,
        },
      }
    );

    res.send(result);
    console.log(result);
  },
  removeProduct: async (req, res) => {
    await ProductModel.deleteOne({ _id: req.params.id });
  },
};
