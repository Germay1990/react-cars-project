const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  removeProduct,
} = require("../controllers/products");
const { protect } = require("../middlewares/auth");

//Get all products => protected
// router.get("/", protect, getAllProducts);

//Get all products
router.get("/", getAllProducts);

//Get product by id
router.get("/:id", getProductById);

//Add product
router.post("/", addProduct);

//Update product
router.put("/:id", updateProduct);

//Remove product
router.delete("/:id", removeProduct);

module.exports = router;
